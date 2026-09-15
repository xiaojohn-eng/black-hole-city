import * as THREE from 'three'
import { Player } from './Player'
import { World } from './World'
import { CameraRig } from './CameraRig'
import { SwallowSystem } from './SwallowSystem'
import {
  LEVEL_LABELS,
  LANDMARK_BONUS,
  COMBO_WINDOW,
  COMBO_MAX_MULT,
  MAP_HALF,
  BOUNDARY,
  RESULT_TITLES,
  LEVEL_MASS,
} from './constants'
import type { Eatable } from './types'
import { InputManager } from '../input/InputManager'
import { AudioEngine } from '../audio/AudioEngine'
import {
  type Settings,
  type Profile,
  loadSettings,
  saveSettings,
  loadProfile,
  saveProfile,
  difficultyMultipliers,
  resetAllData,
  DEFAULT_SETTINGS,
  DEFAULT_PROFILE,
} from '../persistence/storage'

export type Screen =
  | 'loading'
  | 'title'
  | 'howto'
  | 'settings'
  | 'playing'
  | 'paused'
  | 'result'
  | 'nowebgl'

export interface HudSnapshot {
  level: number
  levelLabel: string
  mass: number
  progress: number
  score: number
  timeLeft: number
  combo: number
  toast: string | null
}

export interface ResultSnapshot {
  score: number
  highScore: number
  isNewRecord: boolean
  title: string
  level: number
  mass: number
  eaten: number
  landmarkEaten: boolean
  perfect: boolean
}

export class Game {
  private root: HTMLElement
  private renderer: THREE.WebGLRenderer | null = null
  private scene: THREE.Scene | null = null
  private player: Player | null = null
  private world: World | null = null
  private camera: CameraRig | null = null
  private swallow: SwallowSystem | null = null
  private input: InputManager
  private audio: AudioEngine
  settings: Settings
  profile: Profile

  screen: Screen = 'loading'
  private lastT = 0
  private raf = 0

  private timeLeft = 180
  private score = 0
  private massGained = 0
  private objectsEaten = 0
  private landmarkEaten = false
  private combo = 0
  private comboTimer = 0
  private comboMult = 1
  private milestoneGiven = new Set<number>()
  private toast: string | null = null
  private toastTimer = 0
  private tutorialStep = 0
  private movedDist = 0
  private tutorialEaten = 0
  private massMul = 1
  private threshScale = 1
  private hashRebuildTimer = 0
  private resultData: ResultSnapshot | null = null
  private perfectAwarded = false

  onScreenChange: ((s: Screen) => void) | null = null
  onHud: ((h: HudSnapshot) => void) | null = null

  constructor(root: HTMLElement) {
    this.root = root
    this.settings = loadSettings()
    this.profile = loadProfile()
    this.audio = new AudioEngine(this.settings)
    this.input = new InputManager(root)
    this.syncInputFromSettings()
  }

  private syncInputFromSettings(): void {
    this.input.forceJoystick = this.settings.forceJoystick
    this.input.sensitivity = this.settings.sensitivity
    this.input.mouseSteer = this.settings.mouseSteer
  }

  async boot(): Promise<void> {
    if (!this.checkWebGL()) {
      this.setScreen('nowebgl')
      return
    }
    this.setScreen('loading')
    await new Promise((r) => setTimeout(r, 150))
    this.initThree()
    this.setScreen('title')
    this.startLoop()
  }

  private checkWebGL(): boolean {
    try {
      const c = document.createElement('canvas')
      return !!(c.getContext('webgl') || c.getContext('experimental-webgl'))
    } catch {
      return false
    }
  }

  private initThree(): void {
    const canvasHost = document.createElement('div')
    canvasHost.id = 'canvas-host'
    canvasHost.style.cssText = 'position:absolute;inset:0;z-index:0;'
    this.root.appendChild(canvasHost)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    this.applyQuality()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.shadowMap.enabled = false
    canvasHost.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x87b5d4)
    this.scene.fog = new THREE.Fog(0x87b5d4, 90, 240)

    this.scene.add(new THREE.HemisphereLight(0xfff5e6, 0x3a4a3a, 0.85))
    const sun = new THREE.DirectionalLight(0xfff0d0, 0.75)
    sun.position.set(40, 80, 20)
    this.scene.add(sun)
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.25))

    this.camera = new CameraRig(window.innerWidth / window.innerHeight)
    this.world = new World(this.scene)
    this.player = new Player(this.scene)

    this.swallow = new SwallowSystem(this.scene, {
      onDigested: (obj) => this.handleDigest(obj),
      onBump: () => {
        this.audio.playBump()
        if (this.tutorialStep === 3) this.advanceTutorial()
      },
    })

    window.addEventListener('resize', this.onResize)
    document.addEventListener('visibilitychange', this.onVisibility)
  }

  private applyQuality(): void {
    if (!this.renderer) return
    const dpr = window.devicePixelRatio || 1
    let cap = 1.5
    if (this.settings.quality === 'low') cap = 1
    if (this.settings.quality === 'high') cap = 2
    this.renderer.setPixelRatio(Math.min(dpr, cap))
  }

  private onResize = (): void => {
    if (!this.renderer || !this.camera) return
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.camera.resize(window.innerWidth / window.innerHeight)
  }

  private onVisibility = (): void => {
    if (document.hidden && this.screen === 'playing') this.pause()
  }

  private setScreen(s: Screen): void {
    this.screen = s
    this.onScreenChange?.(s)
  }

  private startLoop(): void {
    this.lastT = performance.now()
    const loop = (t: number) => {
      this.raf = requestAnimationFrame(loop)
      const dt = Math.min(0.05, (t - this.lastT) / 1000)
      this.lastT = t
      this.tick(dt)
    }
    this.raf = requestAnimationFrame(loop)
  }

  private tick(dt: number): void {
    this.input.update()
    if (this.screen === 'playing') {
      if (this.input.consumePause()) this.pause()
      this.updatePlay(dt)
    } else if (this.screen === 'paused') {
      if (this.input.consumePause()) this.resume()
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera.camera)
    }
  }

  private updatePlay(dt: number): void {
    if (!this.player || !this.world || !this.camera || !this.swallow) return

    const mx = this.input.moveX
    const mz = this.input.moveZ
    if (mx || mz) this.movedDist += Math.hypot(mx, mz) * this.player.speed * dt

    this.player.update(dt, mx, mz, MAP_HALF, BOUNDARY)
    this.swallow.outlineHint = this.settings.outlineHint
    this.swallow.lockIcon = this.settings.lockIcon
    this.swallow.update(dt, this.player, this.world)

    this.hashRebuildTimer += dt
    if (this.hashRebuildTimer > 0.25) {
      this.hashRebuildTimer = 0
      this.world.rebuildHash()
    }

    this.camera.update(dt, this.player, this.settings.cameraShake)

    this.timeLeft -= dt
    if (this.timeLeft <= 0) {
      this.timeLeft = 0
      this.endRound()
      return
    }
    if (this.timeLeft <= 10 && Math.floor(this.timeLeft * 2) !== Math.floor((this.timeLeft + dt) * 2)) {
      this.audio.playWarn()
    }

    if (this.comboTimer > 0) {
      this.comboTimer -= dt
      if (this.comboTimer <= 0) {
        this.combo = 0
        this.comboMult = 1
      }
    }

    if (this.toastTimer > 0) {
      this.toastTimer -= dt
      if (this.toastTimer <= 0) this.toast = null
    }

    if (this.tutorialStep === 1 && this.movedDist > 3) this.advanceTutorial()
    if (this.tutorialStep === 2 && this.tutorialEaten >= 3) this.advanceTutorial()

    this.emitHud()
  }

  private handleDigest(obj: Eatable): void {
    if (!this.player) return
    const reward = obj.rewardMass * this.massMul
    const leveled = this.player.addMass(reward)
    this.massGained += reward
    this.objectsEaten++
    this.tutorialEaten++

    if (this.comboTimer > 0) {
      this.combo++
      this.comboMult = Math.min(COMBO_MAX_MULT, 1 + (this.combo - 1) * 0.1)
    } else {
      this.combo = 1
      this.comboMult = 1
    }
    this.comboTimer = COMBO_WINDOW

    let add = (reward + 5) * this.comboMult

    if (obj.isLandmark) {
      this.landmarkEaten = true
      add += LANDMARK_BONUS
      this.audio.playLandmark()
      this.showToast('星湾塔已入洞！· 破塔者')
      this.camera?.triggerShake(0.8)
      if (!this.perfectAwarded) {
        this.perfectAwarded = true
        add += this.timeLeft * 2
      }
    } else {
      this.audio.playSwallow(obj.tier.level, this.combo)
    }

    const lv = this.player.level
    if (lv >= 5 && !this.milestoneGiven.has(5)) {
      this.milestoneGiven.add(5)
      add += 500
      this.showToast('升级！拆房小队')
    }
    if (lv >= 7 && !this.milestoneGiven.has(7)) {
      this.milestoneGiven.add(7)
      add += 1000
      this.showToast('升级！街区粉碎机')
    }
    if (lv >= 9 && !this.milestoneGiven.has(9)) {
      this.milestoneGiven.add(9)
      add += 2000
      this.showToast('升级！终焉之洞')
    }

    this.score += Math.floor(add)

    if (leveled) {
      this.audio.playLevelUp()
      this.camera?.triggerPulse()
      if (this.settings.cameraShake) this.camera?.triggerShake(0.35)
      const label = LEVEL_LABELS[this.player.level] ?? '街头小洞'
      this.showToast(`升级！L${this.player.level} · ${label}`)
    }

    if (this.objectsEaten === 8) this.showToast('再长大一点就能吞轿车了')
    if (this.player.level === 4 && this.objectsEaten > 0 && this.objectsEaten % 25 === 0) {
      this.showToast('公寓区在西侧')
    }
    if (this.player.level >= 6 && !this.landmarkEaten && this.timeLeft < 90) {
      this.showToast('地标就在东北方向！')
    }
  }

  private showToast(msg: string): void {
    this.toast = msg
    this.toastTimer = 3
  }

  private emitHud(): void {
    if (!this.player) return
    this.onHud?.({
      level: this.player.level,
      levelLabel: LEVEL_LABELS[this.player.level] ?? '街头小洞',
      mass: this.player.mass,
      progress: this.progressOf(this.player.mass),
      score: this.score,
      timeLeft: this.timeLeft,
      combo: this.combo,
      toast: this.tutorialStep > 0 ? this.tutorialText() : this.toast,
    })
  }

  private progressOf(mass: number): number {
    const lv = this.player!.level
    const lo = LEVEL_MASS[lv - 1] ?? 10
    const hi = LEVEL_MASS[lv] ?? lo * 2
    if (lv >= 9) return 1
    return Math.min(1, Math.max(0, (mass - lo) / (hi - lo)))
  }

  private tutorialText(): string {
    switch (this.tutorialStep) {
      case 1:
        return '推动黑洞，去碰比你小的东西'
      case 2:
        return '吸入垃圾和路障，让洞变大'
      case 3:
        return '洞够大就能吃汽车和楼房。吃不下就先吃小的！'
      default:
        return ''
    }
  }

  private advanceTutorial(): void {
    this.tutorialStep++
    if (this.tutorialStep > 3) {
      this.tutorialStep = 0
      this.profile.tutorialDone = true
      saveProfile(this.profile)
    }
  }

  skipTutorial(): void {
    this.tutorialStep = 0
    this.profile.tutorialDone = true
    saveProfile(this.profile)
  }

  async startGame(): Promise<void> {
    await this.audio.unlock()
    this.audio.playUi()
    const mul = difficultyMultipliers(this.settings.difficulty)
    this.massMul = mul.massMul
    this.threshScale = mul.threshScale
    this.swallow?.setThreshScale(this.threshScale)

    this.timeLeft = this.settings.duration
    this.score = 0
    this.massGained = 0
    this.objectsEaten = 0
    this.landmarkEaten = false
    this.combo = 0
    this.comboTimer = 0
    this.comboMult = 1
    this.milestoneGiven.clear()
    this.toast = null
    this.perfectAwarded = false
    this.movedDist = 0
    this.tutorialEaten = 0
    this.resultData = null

    this.player?.reset()
    this.world?.reset()

    this.tutorialStep = this.profile.tutorialDone ? 0 : 1
    this.setScreen('playing')
    this.emitHud()
  }

  pause(): void {
    if (this.screen !== 'playing') return
    this.setScreen('paused')
    this.audio.playUi()
  }

  resume(): void {
    if (this.screen !== 'paused') return
    this.setScreen('playing')
    this.audio.playUi()
  }

  abandon(): void {
    this.endRound()
  }

  private endRound(): void {
    if (!this.player) return
    let final =
      Math.floor(this.massGained) +
      this.objectsEaten * 5 +
      (this.landmarkEaten ? LANDMARK_BONUS : 0)
    if (this.landmarkEaten && !this.perfectAwarded) {
      final += Math.floor(this.timeLeft * 2)
    }
    this.score = Math.max(this.score, final)

    let title = RESULT_TITLES[Math.min(9, this.player.level)] ?? '街头试吃'
    if (this.landmarkEaten) title += ' · 破塔者'

    const isNew = this.score > this.profile.highScore
    if (isNew) this.profile.highScore = this.score
    if (this.player.mass > this.profile.maxMass) this.profile.maxMass = this.player.mass
    this.profile.gamesPlayed++
    saveProfile(this.profile)

    this.resultData = {
      score: this.score,
      highScore: this.profile.highScore,
      isNewRecord: isNew,
      title,
      level: this.player.level,
      mass: Math.floor(this.player.mass),
      eaten: this.objectsEaten,
      landmarkEaten: this.landmarkEaten,
      perfect: this.landmarkEaten,
    }
    this.setScreen('result')
  }

  getResult(): ResultSnapshot | null {
    return this.resultData
  }

  goTitle(): void {
    this.setScreen('title')
    this.audio.playUi()
  }

  openSettings(from?: Screen): void {
    void from
    this.setScreen('settings')
    this.audio.playUi()
  }

  openHowto(): void {
    this.setScreen('howto')
    this.audio.playUi()
  }

  closeOverlayTo(target: Screen): void {
    this.setScreen(target)
  }

  applySettings(partial: Partial<Settings>): void {
    this.settings = { ...this.settings, ...partial }
    saveSettings(this.settings)
    this.audio.updateSettings(this.settings)
    this.syncInputFromSettings()
    this.applyQuality()
  }

  getSettings(): Settings {
    return this.settings
  }

  getProfile(): Profile {
    return this.profile
  }

  resetData(): void {
    resetAllData()
    this.settings = { ...DEFAULT_SETTINGS }
    this.profile = { ...DEFAULT_PROFILE }
    saveSettings(this.settings)
    saveProfile(this.profile)
    this.audio.updateSettings(this.settings)
    this.syncInputFromSettings()
  }
}
