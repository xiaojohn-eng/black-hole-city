import * as THREE from 'three'
import { Player } from './Player'
import { World } from './World'
import { CameraRig } from './CameraRig'
import { SwallowSystem } from './SwallowSystem'
import {
  LEVEL_LABELS,
  LANDMARK_BONUS,
  GUARD_BONUS,
  VISIT_BONUS,
  COMBO_WINDOW,
  COMBO_MAX_MULT,
  BOUNDARY,
  RESULT_TITLES,
  LEVEL_MASS,
  RIFT_DECAY_PER_SEC,
} from './constants'
import type { AimHint, Eatable } from './types'
import { InputManager } from '../input/InputManager'
import { AudioEngine } from '../audio/AudioEngine'
import {
  type Settings,
  type Profile,
  type CityProgress,
  type AgeBand,
  loadSettings,
  saveSettings,
  loadProfile,
  saveProfile,
  difficultyMultipliers,
  resetAllData,
  DEFAULT_SETTINGS,
  DEFAULT_PROFILE,
  emptyCityProgress,
} from '../persistence/storage'
import { loadPack, pickQuiz, cardById } from '../content/loadPack'
import type { KnowledgeCard, LoadedPack, QuizQuestion } from '../content/types'

export type Screen =
  | 'loading'
  | 'title'
  | 'howto'
  | 'settings'
  | 'lobby'
  | 'codex'
  | 'briefing'
  | 'playing'
  | 'paused'
  | 'result'
  | 'quiz'
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
  mode: 'timed' | 'career'
  rift: number
  cityName: string
  aim: AimHint | null
  card: KnowledgeCard | null
  tutorial: boolean
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
  archived: number
  guarded: number
  visited: number
  rift: number
  mode: 'timed' | 'career'
  cityName: string
  deferredCards: KnowledgeCard[]
  hasQuiz: boolean
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
  pack: LoadedPack | null = null
  private currentPackId: string | null = null
  private beijingCatalog: LoadedPack | null = null

  screen: Screen = 'loading'
  private lastT = 0
  private raf = 0

  private timeLeft = 180
  private rift = 100
  private score = 0
  private massGained = 0
  private objectsEaten = 0
  private landmarkEaten = false
  private guarded = 0
  private visited = 0
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
  private shownCards = new Set<string>()
  private currentCard: KnowledgeCard | null = null
  private deferredCards: KnowledgeCard[] = []
  private cardQueue: KnowledgeCard[] = []
  quizSet: QuizQuestion[] = []
  quizIndex = 0
  quizAnswers: { id: string; correct: boolean }[] = []
  quizSkipped = false
  private briefingPackId: string | null = null
  codexFocus = 'beijing'
  private hemi: THREE.HemisphereLight | null = null
  private fog: THREE.Fog | null = null

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
    await new Promise((r) => setTimeout(r, 120))
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
    this.fog = new THREE.Fog(0x87b5d4, 90, 240)
    this.scene.fog = this.fog

    this.hemi = new THREE.HemisphereLight(0xfff5e6, 0x3a4a3a, 0.85)
    this.scene.add(this.hemi)
    const sun = new THREE.DirectionalLight(0xfff0d0, 0.75)
    sun.position.set(40, 80, 20)
    this.scene.add(sun)
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.25))

    this.camera = new CameraRig(window.innerWidth / window.innerHeight)

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

  private mode(): 'timed' | 'career' {
    return this.pack?.city.mode === 'career' ? 'career' : 'timed'
  }

  private updatePlay(dt: number): void {
    if (!this.player || !this.world || !this.camera || !this.swallow) return
    if (this.currentCard) {
      this.emitHud()
      return
    }

    const mx = this.input.moveX
    const mz = this.input.moveZ
    if (mx || mz) this.movedDist += Math.hypot(mx, mz) * this.player.speed * dt

    this.player.update(dt, mx, mz, this.world.mapHalf, BOUNDARY)
    this.swallow.outlineHint = this.settings.outlineHint
    this.swallow.lockIcon = this.settings.lockIcon
    this.swallow.update(dt, this.player, this.world)

    this.hashRebuildTimer += dt
    if (this.hashRebuildTimer > 0.25) {
      this.hashRebuildTimer = 0
      this.world.rebuildHash()
    }

    this.camera.update(dt, this.player, this.settings.cameraShake)

    if (this.mode() === 'timed') {
      this.timeLeft -= dt
      if (this.timeLeft <= 0) {
        this.timeLeft = 0
        this.endRound()
        return
      }
      if (this.timeLeft <= 10 && Math.floor(this.timeLeft * 2) !== Math.floor((this.timeLeft + dt) * 2)) {
        this.audio.playWarn()
      }
    } else {
      this.rift = Math.max(0, this.rift - RIFT_DECAY_PER_SEC * dt)
      if (this.rift <= 0) {
        this.rift = 0
        this.showToast('裂隙未合拢，记忆暂存口袋，下次再来')
        this.endRound()
        return
      }
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

  private cityProg(): CityProgress {
    const id = this.pack?.city.packId ?? 'beijing'
    if (!this.profile.encyclopedia[id]) this.profile.encyclopedia[id] = emptyCityProgress()
    return this.profile.encyclopedia[id]
  }

  private unlockCard(id: string | null | undefined, autoShow: boolean): void {
    if (!id || !this.pack) return
    if (this.shownCards.has(id)) return
    this.shownCards.add(id)
    const card = cardById(this.pack, id)
    if (!card) return
    const prog = this.cityProg()
    if (!prog.cards.includes(id)) prog.cards.push(id)
    saveProfile(this.profile)
    if (autoShow) {
      this.cardQueue.push(card)
      if (!this.currentCard) this.currentCard = this.cardQueue.shift() ?? null
    }
  }

  acknowledgeCard(later: boolean): void {
    if (later && this.currentCard) this.deferredCards.push(this.currentCard)
    this.currentCard = this.cardQueue.shift() ?? null
    this.emitHud()
  }

  private handleDigest(obj: Eatable): void {
    if (!this.player || !this.world) return
    const reward = obj.rewardMass * this.massMul
    const leveled = this.player.addMass(reward)
    this.massGained += reward
    this.objectsEaten++
    this.tutorialEaten++
    this.world.leaveSpot(obj, 0x5eead4)
    this.rift = Math.min(100, this.rift + 1.4)

    if (this.comboTimer > 0) {
      this.combo++
      this.comboMult = Math.min(COMBO_MAX_MULT, 1 + (this.combo - 1) * 0.1)
    } else {
      this.combo = 1
      this.comboMult = 1
    }
    this.comboTimer = COMBO_WINDOW

    let add = (reward + 5) * this.comboMult

    if (obj.isLandmark && obj.interact === 'swallow') {
      this.landmarkEaten = true
      add += LANDMARK_BONUS
      this.audio.playLandmark()
      this.showToast(`${obj.name}已入库`)
      this.camera?.triggerShake(0.55)
      if (!this.perfectAwarded && this.mode() === 'timed') {
        this.perfectAwarded = true
        add += this.timeLeft * 2
      }
      if (obj.landmarkId) {
        this.cityProg().landmarks[obj.landmarkId] = 'archived'
        saveProfile(this.profile)
      }
    } else {
      this.audio.playArchive()
    }

    const lv = this.player.level
    if (lv >= 5 && !this.milestoneGiven.has(5)) {
      this.milestoneGiven.add(5)
      add += 500
      this.showToast('升级！民居博物生')
    }
    if (lv >= 7 && !this.milestoneGiven.has(7)) {
      this.milestoneGiven.add(7)
      add += 1000
      this.showToast('升级！城市讲解员')
    }
    if (lv >= 9 && !this.milestoneGiven.has(9)) {
      this.milestoneGiven.add(9)
      add += 2000
      this.showToast('升级！博物馆长')
    }

    this.score += Math.floor(add)

    if (leveled) {
      this.audio.playLevelUp()
      this.camera?.triggerPulse()
      if (this.settings.cameraShake) this.camera?.triggerShake(0.35)
    }

    this.unlockCard(obj.knowledgeCardId, true)
    if (this.objectsEaten === 1 && this.pack?.city.packId === 'beijing') {
      this.unlockCard('card-bj-capital', true)
    }
    if (this.objectsEaten === 8) this.showToast('再长大一点就能归档轿车了')
    if (this.player.level === 4 && this.pack?.city.packId === 'xingwan-training') {
      this.showToast('西侧是生活区，东北有训练地标')
    }
    if (this.player.level >= 3 && this.pack?.city.packId === 'beijing' && this.guarded === 0) {
      this.showToast('沿石板中轴往北，去环绕天安门致敬')
    }
  }

  private handleGuard(obj: Eatable): void {
    this.guarded++
    this.score += GUARD_BONUS
    this.rift = Math.min(100, this.rift + 10)
    this.audio.playGuard()
    this.world?.leaveSpot(obj, 0xfbbf24)
    this.showToast('守护完成 · 致敬卡已点亮')
    if (obj.landmarkId) {
      this.cityProg().landmarks[obj.landmarkId] = 'guarded'
      saveProfile(this.profile)
    }
    this.unlockCard(obj.knowledgeCardId, true)
    this.unlockCard('card-bj-capital', true)
    this.unlockCard('card-bj-axis', false)
  }

  private handleVisit(obj: Eatable): void {
    this.visited++
    this.score += VISIT_BONUS
    this.rift = Math.min(100, this.rift + 6)
    this.audio.playVisit()
    this.world?.leaveSpot(obj, 0x93c5fd)
    this.showToast(`参观记忆 · ${obj.name}`)
    if (obj.landmarkId) {
      this.cityProg().landmarks[obj.landmarkId] = 'visited'
      saveProfile(this.profile)
    }
    this.unlockCard(obj.knowledgeCardId, true)
  }

  private showToast(msg: string): void {
    this.toast = msg
    this.toastTimer = 3.2
  }

  private emitHud(): void {
    if (!this.player) return
    const aim = this.swallow?.aimHint ?? null
    this.onHud?.({
      level: this.player.level,
      levelLabel: LEVEL_LABELS[this.player.level] ?? '街角收集芽',
      mass: this.player.mass,
      progress: this.progressOf(this.player.mass),
      score: this.score,
      timeLeft: this.timeLeft,
      combo: this.combo,
      toast: this.tutorialStep > 0 ? this.tutorialText() : this.toast,
      mode: this.mode(),
      rift: this.rift,
      cityName: this.pack?.city.name ?? '',
      aim,
      card: this.currentCard,
      tutorial: this.tutorialStep > 0,
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
    const bj = this.pack?.city.packId === 'beijing'
    switch (this.tutorialStep) {
      case 1:
        return bj ? '推动黑洞，去南城公园收集小记忆' : '推动黑洞，去碰比你小的碎片'
      case 2:
        return '把碎片归档进博物馆入口，让洞变大'
      case 3:
        return bj
          ? '天安门请绕行一周致敬，不要往里冲。故宫走近即可参观。'
          : '洞口和质量都够了，才能归档更大的记忆。'
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

  async ensurePack(packId: string): Promise<void> {
    if (!this.scene) throw new Error('scene missing')
    if (this.currentPackId === packId && this.world && this.pack) return
    this.swallow?.dispose()
    this.world?.dispose()
    this.swallow = null
    this.world = null
    this.pack = await loadPack(packId)
    this.applyPalette(this.pack)
    this.world = new World(this.scene, this.pack)
    if (!this.player) this.player = new Player(this.scene)
    this.swallow = new SwallowSystem(this.scene, {
      onDigested: (obj) => this.handleDigest(obj),
      onBump: (_obj, hint) => {
        this.audio.playBump()
        if (hint.missing) this.showToast(hint.missing)
        if (this.tutorialStep === 3) this.advanceTutorial()
      },
      onGuardComplete: (obj) => this.handleGuard(obj),
      onVisit: (obj) => this.handleVisit(obj),
    })
    this.swallow.setThreshScale(this.threshScale)
    this.currentPackId = packId
    this.profile.packSwitchCount = (this.profile.packSwitchCount ?? 0) + 1
    saveProfile(this.profile)
  }

  private applyPalette(pack: LoadedPack): void {
    if (!this.scene) return
    const sky = new THREE.Color(pack.city.colorPalette.sky)
    const fogC = new THREE.Color(pack.city.colorPalette.fog)
    this.scene.background = sky
    if (this.fog) {
      this.fog.color.copy(fogC)
      this.fog.near = 80
      this.fog.far = 320
      this.scene.fog = this.fog
    }
  }

  openBriefing(packId: string): void {
    this.briefingPackId = packId
    this.audio.playUi()
    this.setScreen('briefing')
  }

  getBriefing(): { title: string; lines: string[]; packId: string } {
    if (this.briefingPackId === 'xingwan-training') {
      return {
        title: '训练场·星湾（虚构）',
        lines: [
          '这里是虚构训练场，不是中国任何一座真城。',
          '限时冲分，练习双阈值手感。',
          '练好了，再去记忆博物馆·北京上首都课。',
        ],
        packId: 'xingwan-training',
      }
    }
    return {
      title: '记忆博物馆·北京',
      lines: [
        '我们在首都北京。南边是公园，中间是中轴线，西边是胡同。',
        '天安门是国家象征，不能归档进洞。请绕着它走完一圈，完成守护致敬。',
        '故宫走近即可参观。生涯模式不倒计时，看裂隙稳定度。',
      ],
      packId: 'beijing',
    }
  }

  async startGame(packId?: string): Promise<void> {
    const id = packId ?? this.briefingPackId ?? 'xingwan-training'
    await this.audio.unlock()
    this.audio.playUi()
    const mul = difficultyMultipliers(this.settings.difficulty)
    this.massMul = mul.massMul
    this.threshScale = mul.threshScale

    await this.ensurePack(id)
    this.swallow?.setThreshScale(this.threshScale)

    this.timeLeft = this.settings.duration
    this.rift = 100
    this.score = 0
    this.massGained = 0
    this.objectsEaten = 0
    this.landmarkEaten = false
    this.guarded = 0
    this.visited = 0
    this.combo = 0
    this.comboTimer = 0
    this.comboMult = 1
    this.milestoneGiven.clear()
    this.toast = null
    this.perfectAwarded = false
    this.movedDist = 0
    this.tutorialEaten = 0
    this.resultData = null
    this.shownCards = new Set()
    this.currentCard = null
    this.deferredCards = []
    this.cardQueue = []
    this.quizSet = []
    this.quizIndex = 0
    this.quizAnswers = []
    this.quizSkipped = false

    const spawn = this.pack?.city.spawn ?? { x: 0, z: -90 }
    this.player?.reset(spawn.x, spawn.z)
    this.world?.reset()

    this.tutorialStep = this.profile.tutorialDone ? 0 : 1
    if (id === 'beijing') {
      this.unlockCard('card-bj-capital', true)
      this.unlockCard('card-bj-short', false)
    }
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
    let final = Math.floor(this.massGained) + this.objectsEaten * 5
    if (this.landmarkEaten) final += LANDMARK_BONUS
    final += this.guarded * GUARD_BONUS + this.visited * VISIT_BONUS
    if (this.landmarkEaten && !this.perfectAwarded && this.mode() === 'timed') {
      final += Math.floor(this.timeLeft * 2)
    }
    this.score = Math.max(this.score, final)

    let title = RESULT_TITLES[Math.min(9, this.player.level)] ?? '街角收集芽'
    if (this.guarded > 0) title += ' · 守护员'
    else if (this.landmarkEaten) title += ' · 镇馆入库'

    const isNew = this.score > this.profile.highScore
    if (isNew) this.profile.highScore = this.score
    if (this.player.mass > this.profile.maxMass) this.profile.maxMass = this.player.mass
    this.profile.gamesPlayed++
    saveProfile(this.profile)

    const hasQuiz = (this.pack?.quiz.questions.length ?? 0) >= 3 && this.pack?.city.packId === 'beijing'
    this.resultData = {
      score: this.score,
      highScore: this.profile.highScore,
      isNewRecord: isNew,
      title,
      level: this.player.level,
      mass: Math.floor(this.player.mass),
      eaten: this.objectsEaten,
      landmarkEaten: this.landmarkEaten,
      perfect: this.landmarkEaten || this.guarded > 0,
      archived: this.objectsEaten,
      guarded: this.guarded,
      visited: this.visited,
      rift: Math.round(this.rift),
      mode: this.mode(),
      cityName: this.pack?.city.name ?? '',
      deferredCards: this.deferredCards.slice(),
      hasQuiz,
    }
    this.currentCard = null
    this.setScreen('result')
  }

  beginQuiz(): void {
    if (!this.pack) {
      this.goTitle()
      return
    }
    this.quizSet = pickQuiz(this.pack, this.settings.ageBand, 3)
    this.quizIndex = 0
    this.quizAnswers = []
    this.quizSkipped = false
    this.audio.playUi()
    this.setScreen('quiz')
  }

  answerQuiz(choiceIndex: number): void {
    const q = this.quizSet[this.quizIndex]
    if (!q) return
    const correct = choiceIndex === q.answer
    this.quizAnswers.push({ id: q.id, correct })
    this.quizIndex++
    if (this.quizIndex >= this.quizSet.length) this.finishQuiz(false)
    else this.setScreen('quiz')
  }

  skipQuiz(): void {
    this.finishQuiz(true)
  }

  private finishQuiz(skipped: boolean): void {
    this.quizSkipped = skipped
    const prog = this.cityProg()
    if (skipped) {
      prog.quizSkipped = true
    } else {
      prog.quizAnswers = this.quizAnswers.slice()
      const right = this.quizAnswers.filter((a) => a.correct).length
      prog.doctorStar = this.quizAnswers.length === 3 && right >= 2
      prog.quizSkipped = false
    }
    saveProfile(this.profile)
    this.codexFocus = this.pack?.city.packId ?? 'beijing'
    if (this.screen === 'quiz') this.onScreenChange?.('quiz')
    else this.setScreen('quiz')
  }

  getQuizView(): { q: QuizQuestion | null; index: number; total: number; done: boolean; doctor: boolean; skipped: boolean } {
    return {
      q: this.quizSet[this.quizIndex] ?? null,
      index: this.quizIndex,
      total: this.quizSet.length,
      done: this.quizIndex >= this.quizSet.length || this.quizSkipped,
      doctor: this.cityProg().doctorStar,
      skipped: this.quizSkipped,
    }
  }

  getResult(): ResultSnapshot | null {
    return this.resultData
  }

  goTitle(): void {
    this.setScreen('title')
    this.audio.playUi()
  }

  openLobby(): void {
    this.audio.playUi()
    void this.prefetchBeijingCatalog()
    this.setScreen('lobby')
  }

  openCodex(focus = 'beijing'): void {
    this.codexFocus = focus
    this.audio.playUi()
    void this.prefetchBeijingCatalog().then(() => this.setScreen('codex'))
    this.setScreen('codex')
  }

  private async prefetchBeijingCatalog(): Promise<void> {
    if (this.beijingCatalog) return
    this.beijingCatalog = await loadPack('beijing')
  }

  getCodex(): {
    provinceName: string
    shortName: string
    capital: string
    region7: string
    region4: string
    climate: string
    blurb: string
    progress: CityProgress
    cards: KnowledgeCard[]
    landmarks: { id: string; name: string; mark: string }[]
  } {
    const prog = this.profile.encyclopedia.beijing ?? emptyCityProgress()
    const cat = this.beijingCatalog ?? (this.pack?.city.packId === 'beijing' ? this.pack : null)
    const cards = cat?.knowledge.cards ?? []
    const lms = cat?.layout.landmarks ?? []
    return {
      provinceName: '北京市',
      shortName: '京',
      capital: '北京',
      region7: '华北',
      region4: '北方地区',
      climate: '温带季风',
      blurb: '中华人民共和国首都。国家的心脏与书房。本切片可玩首都课，不宣称全国地级已收录。',
      progress: prog,
      cards: cards.filter((c) => prog.cards.includes(c.id)),
      landmarks: lms.map((l) => ({
        id: l.id,
        name: l.name,
        mark: prog.landmarks[l.id] ?? '未点亮',
      })),
    }
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

  getAgeBand(): AgeBand {
    return this.settings.ageBand
  }

  resetData(): void {
    resetAllData()
    this.settings = { ...DEFAULT_SETTINGS }
    this.profile = { ...DEFAULT_PROFILE, encyclopedia: {} }
    saveSettings(this.settings)
    saveProfile(this.profile)
    this.audio.updateSettings(this.settings)
    this.syncInputFromSettings()
  }
}
