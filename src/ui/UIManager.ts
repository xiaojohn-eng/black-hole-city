import type { Game, Screen, HudSnapshot } from '../game/Game'
import { Fallback2D } from '../fallback/Fallback2D'
import { OFFICIAL_URL } from '../game/constants'
import type { Settings, Quality, Difficulty, Duration } from '../persistence/storage'
import { levelFromMass } from '../game/constants'

function fmtScore(n: number): string {
  return Math.floor(n).toLocaleString('zh-CN')
}

function fmtTime(s: number): string {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

export class UIManager {
  private root: HTMLElement
  private game: Game
  private layer: HTMLElement
  private settingsBack: Screen = 'title'

  constructor(root: HTMLElement, game: Game) {
    this.root = root
    this.game = game
    this.layer = document.createElement('div')
    this.layer.id = 'ui-layer'
    this.layer.setAttribute('data-ui', '1')
    root.appendChild(this.layer)

    game.onScreenChange = (s) => this.render(s)
    game.onHud = (h) => this.updateHud(h)
  }

  private render(screen: Screen): void {
    switch (screen) {
      case 'loading':
        this.layer.innerHTML = `<div class="panel center"><div class="spinner"></div><p>正在铺开星湾市…</p></div>`
        break
      case 'nowebgl':
        this.renderNowebgl()
        break
      case 'title':
        this.renderTitle()
        break
      case 'howto':
        this.renderHowto()
        break
      case 'settings':
        this.renderSettings()
        break
      case 'playing':
        this.renderHud()
        break
      case 'paused':
        this.renderPaused()
        break
      case 'result':
        this.renderResult()
        break
    }
  }

  private fallback2d: Fallback2D | null = null

  private renderNowebgl(): void {
    const isAppleMobile = /iPhone|iPad|iPod/.test(navigator.userAgent)
    this.layer.innerHTML = `
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal nowebgl-modal">
          <h2>无法运行 3D 版</h2>
          <p>本游戏需要 <b>WebGL</b> 图形支持，<br>当前浏览器没有启用 WebGL，或被系统限制。</p>
          ${isAppleMobile ? `
          <div class="tip-box">
            <b>iPhone / iPad 用户请尝试：</b><br>
            1. 关闭「锁定模式」：设置 → 隐私与安全性 → 锁定模式 → 关闭<br>
            2. 用系统 <b>Safari</b> 或 <b>Chrome</b> 打开本页面<br>
            3. 不要用 App 内置浏览器（如某些 App 的网页容器）
          </div>` : `
          <div class="tip-box">
            请换用最新版 Chrome / Edge / Safari，<br>并确认浏览器设置中没有禁用「硬件加速」。
          </div>`}
          <p>推荐从正式链接进入：</p>
          <div class="link-row">
            <code class="link-box">${OFFICIAL_URL}</code>
            <button class="btn secondary" id="btn-copy-link">复制链接</button>
          </div>
          <p class="copy-tip" id="copy-tip" style="display:none">已复制到剪贴板 ✓</p>
          <div class="btn-col" style="margin:1rem auto 0;">
            <button class="btn primary" id="btn-try2d">试用 2D 简化版</button>
          </div>
          <p class="hint">2D 版不需要 WebGL，可直接玩一局（俯视视角，触控拖动）。</p>
        </div>
      </div>`
    this.bind('btn-copy-link', () => this.copyOfficialLink())
    this.bind('btn-try2d', () => this.startFallback2D())
  }

  private copyOfficialLink(): void {
    const done = () => {
      const t = document.getElementById('copy-tip')
      if (!t) return
      t.style.display = 'block'
      window.setTimeout(() => {
        t.style.display = 'none'
      }, 2000)
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(OFFICIAL_URL).then(done, () => this.copyFallback(done))
    } else {
      this.copyFallback(done)
    }
  }

  private copyFallback(done: () => void): void {
    const ta = document.createElement('textarea')
    ta.value = OFFICIAL_URL
    ta.style.cssText = 'position:fixed;opacity:0;'
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
      done()
    } catch {
      // 复制失败时用户可长按链接手动复制
    }
    ta.remove()
  }

  private startFallback2D(): void {
    if (this.fallback2d) return
    this.layer.style.display = 'none'
    this.game.setInputEnabled(false)
    try {
      this.fallback2d = new Fallback2D(this.root, {
        onQuit: () => {
          this.fallback2d?.destroy()
          this.fallback2d = null
          this.game.setInputEnabled(true)
          this.layer.style.display = ''
          this.render('nowebgl')
        },
      })
      this.fallback2d.start()
    } catch {
      this.fallback2d = null
      this.game.setInputEnabled(true)
      this.layer.style.display = ''
      this.render('nowebgl')
    }
  }

  private renderTitle(): void {
    const p = this.game.getProfile()
    const high = p.highScore > 0 ? fmtScore(p.highScore) : '—'
    const maxLv = levelFromMass(p.maxMass)
    this.layer.innerHTML = `
      <div class="overlay title-screen" data-ui="1">
        <div class="top-bar">
          <button class="icon-btn" id="btn-settings" title="设置">⚙</button>
          <button class="icon-btn" id="btn-mute" title="静音">${this.game.getSettings().muted ? '🔇' : '🔊'}</button>
        </div>
        <div class="title-block">
          <div class="hole-icon">●</div>
          <h1>黑洞吞噬城市</h1>
          <p class="subtitle">从汽车吃到摩天楼</p>
          <p class="version">v0.2 · 星湾市·中央区</p>
        </div>
        <div class="btn-col">
          <button class="btn primary" id="btn-start">开始游戏</button>
          <button class="btn secondary" id="btn-howto">如何游玩</button>
        </div>
        <div class="stats-line">最高分：${high}　最大体型：L${maxLv}</div>
        <p class="footnote">一局约 3 分钟 · 无需安装</p>
      </div>`
    this.bind('btn-start', () => this.game.startGame())
    this.bind('btn-howto', () => this.game.openHowto())
    this.bind('btn-settings', () => {
      this.settingsBack = 'title'
      this.game.openSettings()
    })
    this.bind('btn-mute', () => {
      const m = !this.game.getSettings().muted
      this.game.applySettings({ muted: m })
      this.renderTitle()
    })
  }

  private renderHowto(): void {
    this.layer.innerHTML = `
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal">
          <h2>如何游玩</h2>
          <ol class="howto-list">
            <li>移动黑洞（WASD / 虚拟摇杆）</li>
            <li>只吃体型够小的目标（够大才能吞）</li>
            <li>变大，吃更大的，在时间结束前冲分或挑战地标</li>
          </ol>
          <p class="hint">桌面：WASD　移动端：左侧拖动摇杆　P/Esc 暂停</p>
          <button class="btn primary" id="btn-ok">知道了</button>
        </div>
      </div>`
    this.bind('btn-ok', () => this.game.goTitle())
  }

  private renderSettings(): void {
    const s = this.game.getSettings()
    this.layer.innerHTML = `
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal settings-modal">
          <h2>设置</h2>
          <div class="settings-grid">
            <label>主音量 <input type="range" id="s-master" min="0" max="100" value="${s.masterVolume}"/></label>
            <label>音乐 <input type="range" id="s-bgm" min="0" max="100" value="${s.bgmVolume}"/></label>
            <label>音效 <input type="range" id="s-sfx" min="0" max="100" value="${s.sfxVolume}"/></label>
            <label><input type="checkbox" id="s-mute" ${s.muted ? 'checked' : ''}/> 静音</label>
            <label>画质
              <select id="s-quality">
                <option value="low" ${s.quality === 'low' ? 'selected' : ''}>低</option>
                <option value="medium" ${s.quality === 'medium' ? 'selected' : ''}>中</option>
                <option value="high" ${s.quality === 'high' ? 'selected' : ''}>高</option>
              </select>
            </label>
            <label>灵敏度 <input type="range" id="s-sens" min="50" max="150" value="${Math.round(s.sensitivity * 100)}"/></label>
            <label>每局时长
              <select id="s-dur">
                <option value="120" ${s.duration === 120 ? 'selected' : ''}>120 秒</option>
                <option value="180" ${s.duration === 180 ? 'selected' : ''}>180 秒</option>
                <option value="240" ${s.duration === 240 ? 'selected' : ''}>240 秒</option>
              </select>
            </label>
            <label>难度
              <select id="s-diff">
                <option value="easy" ${s.difficulty === 'easy' ? 'selected' : ''}>轻松</option>
                <option value="normal" ${s.difficulty === 'normal' ? 'selected' : ''}>标准</option>
                <option value="hard" ${s.difficulty === 'hard' ? 'selected' : ''}>困难</option>
              </select>
            </label>
            <label><input type="checkbox" id="s-shake" ${s.cameraShake ? 'checked' : ''}/> 镜头震动</label>
            <label><input type="checkbox" id="s-outline" ${s.outlineHint ? 'checked' : ''}/> 可吞物体描边</label>
            <label><input type="checkbox" id="s-lock" ${s.lockIcon ? 'checked' : ''}/> 吃不下提示</label>
            <label><input type="checkbox" id="s-mouse" ${s.mouseSteer ? 'checked' : ''}/> 鼠标指向移动</label>
            <label><input type="checkbox" id="s-joy" ${s.forceJoystick ? 'checked' : ''}/> 始终显示摇杆</label>
          </div>
          <div class="btn-row">
            <button class="btn danger" id="btn-reset">重置本地数据</button>
            <button class="btn primary" id="btn-back">返回</button>
          </div>
        </div>
      </div>`

    const apply = () => {
      const partial: Partial<Settings> = {
        masterVolume: num('s-master'),
        bgmVolume: num('s-bgm'),
        sfxVolume: num('s-sfx'),
        muted: checked('s-mute'),
        quality: (document.getElementById('s-quality') as HTMLSelectElement).value as Quality,
        sensitivity: num('s-sens') / 100,
        duration: Number((document.getElementById('s-dur') as HTMLSelectElement).value) as Duration,
        difficulty: (document.getElementById('s-diff') as HTMLSelectElement).value as Difficulty,
        cameraShake: checked('s-shake'),
        outlineHint: checked('s-outline'),
        lockIcon: checked('s-lock'),
        mouseSteer: checked('s-mouse'),
        forceJoystick: checked('s-joy'),
      }
      this.game.applySettings(partial)
    }
    const num = (id: string) => Number((document.getElementById(id) as HTMLInputElement).value)
    const checked = (id: string) => (document.getElementById(id) as HTMLInputElement).checked

    this.layer.querySelectorAll('input, select').forEach((el) => {
      el.addEventListener('change', apply)
      el.addEventListener('input', apply)
    })
    this.bind('btn-back', () => {
      apply()
      if (this.settingsBack === 'paused') this.game.closeOverlayTo('paused')
      else this.game.goTitle()
    })
    this.bind('btn-reset', () => {
      if (confirm('将清除最高分与设置，且不可恢复。确定吗？')) {
        this.game.resetData()
        this.renderSettings()
      }
    })
  }

  private renderHud(): void {
    this.layer.innerHTML = `
      <div class="hud" data-ui="1">
        <div class="hud-top">
          <div class="hud-left">
            <div class="level-line"><span id="hud-level">L1 街头小洞</span></div>
            <div class="bar"><div class="bar-fill" id="hud-bar" style="width:0%"></div></div>
            <div class="score-line">分数 <span id="hud-score">0</span></div>
          </div>
          <div class="hud-right">
            <div class="timer" id="hud-timer">03:00</div>
            <button class="icon-btn pause-btn" id="btn-pause" title="暂停">⏸</button>
          </div>
        </div>
        <div class="combo" id="hud-combo" style="display:none">连击 x2</div>
        <div class="toast" id="hud-toast" style="display:none"></div>
        <button class="skip-tut" id="btn-skip-tut" style="display:none">跳过引导</button>
      </div>`
    this.bind('btn-pause', () => this.game.pause())
    this.bind('btn-skip-tut', () => {
      this.game.skipTutorial()
      const t = document.getElementById('btn-skip-tut')
      if (t) t.style.display = 'none'
    })
  }

  private lastHudLevel = 0

  private updateHud(h: HudSnapshot): void {
    if (this.game.screen !== 'playing') return
    const lv = document.getElementById('hud-level')
    if (lv && h.level !== this.lastHudLevel) {
      if (this.lastHudLevel > 0 && h.level > this.lastHudLevel) {
        lv.classList.remove('level-flash')
        void lv.offsetWidth // restart the CSS animation
        lv.classList.add('level-flash')
      }
      this.lastHudLevel = h.level
    }
    const bar = document.getElementById('hud-bar')
    const score = document.getElementById('hud-score')
    const timer = document.getElementById('hud-timer')
    const combo = document.getElementById('hud-combo')
    const toast = document.getElementById('hud-toast')
    const skip = document.getElementById('btn-skip-tut')
    if (lv) lv.textContent = `L${h.level} ${h.levelLabel}`
    if (bar) bar.style.width = `${Math.round(h.progress * 100)}%`
    if (score) score.textContent = fmtScore(h.score)
    if (timer) {
      timer.textContent = fmtTime(h.timeLeft)
      timer.classList.toggle('warn', h.timeLeft <= 30)
      timer.classList.toggle('danger', h.timeLeft <= 10)
    }
    if (combo) {
      if (h.combo >= 2) {
        combo.style.display = 'block'
        combo.textContent = `连击 x${h.combo}`
      } else combo.style.display = 'none'
    }
    if (toast) {
      if (h.toast) {
        toast.style.display = 'block'
        toast.textContent = h.toast
        if (skip) skip.style.display = h.toast.includes('推动') || h.toast.includes('吸入') || h.toast.includes('洞够大') ? 'block' : 'none'
      } else {
        toast.style.display = 'none'
        if (skip) skip.style.display = 'none'
      }
    }
  }

  private renderPaused(): void {
    this.layer.innerHTML = `
      <div class="overlay modal-wrap dim" data-ui="1">
        <div class="modal">
          <h2>暂停</h2>
          <div class="btn-col">
            <button class="btn primary" id="btn-resume">继续游戏</button>
            <button class="btn secondary" id="btn-set">设置</button>
            <button class="btn danger" id="btn-quit">放弃本局</button>
          </div>
        </div>
      </div>`
    this.bind('btn-resume', () => this.game.resume())
    this.bind('btn-set', () => {
      this.settingsBack = 'paused'
      this.game.openSettings()
    })
    this.bind('btn-quit', () => {
      // Two-step inline confirm — native confirm() blocks the render loop
      const btn = document.getElementById('btn-quit')
      if (!btn) return
      if (btn.dataset.armed === '1') {
        this.game.abandon()
        return
      }
      btn.dataset.armed = '1'
      btn.textContent = '确认放弃？'
      window.setTimeout(() => {
        if (!document.getElementById('btn-quit')) return
        btn.dataset.armed = '0'
        btn.textContent = '放弃本局'
      }, 3000)
    })
  }

  private renderResult(): void {
    const r = this.game.getResult()
    if (!r) return
    this.layer.innerHTML = `
      <div class="overlay modal-wrap dim" data-ui="1">
        <div class="modal">
          <h2>本局结束</h2>
          <p class="result-title">${r.title}</p>
          <p class="result-score">分数：${fmtScore(r.score)}${r.isNewRecord ? ' <span class="new-rec">新纪录！</span>' : ''}</p>
          <p>最终体型：L${r.level} · 质量 ${r.mass}</p>
          <p>吞噬数量：${r.eaten}</p>
          <p>${r.landmarkEaten ? '地标：星湾塔已入洞 ★' : '地标：尚未吞噬'}</p>
          <div class="btn-row" style="margin-top:1.2rem">
            <button class="btn primary" id="btn-again">再来一局</button>
            <button class="btn secondary" id="btn-home">返回标题</button>
          </div>
        </div>
      </div>`
    this.bind('btn-again', () => this.game.startGame())
    this.bind('btn-home', () => this.game.goTitle())
  }

  private bind(id: string, fn: () => void): void {
    const el = document.getElementById(id)
    el?.addEventListener('click', (e) => {
      e.stopPropagation()
      fn()
    })
  }
}
