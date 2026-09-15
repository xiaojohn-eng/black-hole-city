import type { Settings } from '../persistence/storage'

/** Procedural WebAudio SFX — no external assets needed */
export class AudioEngine {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private sfxGain: GainNode | null = null
  private bgmGain: GainNode | null = null
  private bgmTimer: number | null = null
  private settings: Settings
  private unlocked = false

  constructor(settings: Settings) {
    this.settings = settings
  }

  updateSettings(s: Settings): void {
    this.settings = s
    this.applyVolumes()
  }

  async unlock(): Promise<void> {
    if (this.unlocked) return
    try {
      this.ctx = new AudioContext()
      this.master = this.ctx.createGain()
      this.sfxGain = this.ctx.createGain()
      this.bgmGain = this.ctx.createGain()
      this.sfxGain.connect(this.master)
      this.bgmGain.connect(this.master)
      this.master.connect(this.ctx.destination)
      this.applyVolumes()
      if (this.ctx.state === 'suspended') await this.ctx.resume()
      this.unlocked = true
      this.startBgm()
    } catch {
      /* silent */
    }
  }

  private applyVolumes(): void {
    if (!this.master || !this.sfxGain || !this.bgmGain) return
    const mute = this.settings.muted ? 0 : 1
    this.master.gain.value = (this.settings.masterVolume / 100) * mute
    this.sfxGain.gain.value = this.settings.sfxVolume / 100
    this.bgmGain.gain.value = this.settings.bgmVolume / 100
  }

  private tone(
    freq: number,
    dur: number,
    type: OscillatorType = 'sine',
    vol = 0.15,
    dest?: GainNode,
  ): void {
    if (!this.ctx || !this.sfxGain) return
    const t = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t)
    g.gain.setValueAtTime(vol, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + dur)
    osc.connect(g)
    g.connect(dest ?? this.sfxGain)
    osc.start(t)
    osc.stop(t + dur + 0.05)
  }

  playSwallow(tier: number, combo = 1): void {
    const base = 180 + tier * 40
    const pitch = Math.min(6, combo) * 20
    this.tone(base + pitch, 0.12, 'triangle', 0.18)
    this.tone(base * 1.5 + pitch, 0.18, 'sine', 0.1)
  }

  playBump(): void {
    this.tone(80, 0.08, 'square', 0.08)
    this.tone(60, 0.12, 'sawtooth', 0.05)
  }

  playLevelUp(): void {
    ;[440, 554, 659, 880].forEach((f, i) => {
      setTimeout(() => this.tone(f, 0.2, 'sine', 0.12), i * 70)
    })
  }

  playUi(): void {
    this.tone(520, 0.06, 'sine', 0.1)
  }

  playWarn(): void {
    this.tone(320, 0.15, 'square', 0.08)
  }

  playLandmark(): void {
    ;[220, 330, 440, 660, 880].forEach((f, i) => {
      setTimeout(() => this.tone(f, 0.35, 'triangle', 0.14), i * 90)
    })
  }

  private startBgm(): void {
    if (!this.ctx || !this.bgmGain) return
    const playChord = () => {
      if (!this.ctx || !this.bgmGain || this.settings.muted) return
      const notes = [130.81, 164.81, 196.0, 246.94]
      const t = this.ctx.currentTime
      notes.forEach((f, i) => {
        const osc = this.ctx!.createOscillator()
        const g = this.ctx!.createGain()
        osc.type = 'sine'
        osc.frequency.value = f
        g.gain.setValueAtTime(0.025, t + i * 0.02)
        g.gain.exponentialRampToValueAtTime(0.001, t + 2.2)
        osc.connect(g)
        g.connect(this.bgmGain!)
        osc.start(t)
        osc.stop(t + 2.4)
      })
    }
    playChord()
    this.bgmTimer = window.setInterval(playChord, 2400)
  }

  stopBgm(): void {
    if (this.bgmTimer != null) {
      clearInterval(this.bgmTimer)
      this.bgmTimer = null
    }
  }

  dispose(): void {
    this.stopBgm()
    this.ctx?.close()
    this.ctx = null
  }
}
