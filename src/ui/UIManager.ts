import type { Game, Screen, HudSnapshot } from '../game/Game'
import { Fallback2D } from '../fallback/Fallback2D'
import { OFFICIAL_URL, levelFromMass } from '../game/constants'
import type { Settings, Quality, Difficulty, Duration, AgeBand } from '../persistence/storage'
import { loadAdminIndex, filterProvinces } from '../content/loadAdmin'
import type { AdminIndex, AdminPrefecture } from '../content/types'

function fmtScore(n: number): string {
  return Math.floor(n).toLocaleString('zh-CN')
}

function fmtTime(s: number): string {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

const REGION_ORDER = ['华北', '东北', '华东', '华中', '华南', '西南', '西北']

export class UIManager {
  private root: HTMLElement
  private game: Game
  private layer: HTMLElement
  private settingsBack: Screen = 'title'
  private admin: AdminIndex | null = null
  private searchQ = ''
  private openProvince: string | null = '110000'
  private lastHud: HudSnapshot | null = null

  constructor(root: HTMLElement, game: Game) {
    this.root = root
    this.game = game
    this.layer = document.createElement('div')
    this.layer.id = 'ui-layer'
    this.layer.setAttribute('data-ui', '1')
    root.appendChild(this.layer)

    game.onScreenChange = (s) => void this.render(s)
    game.onHud = (h) => this.updateHud(h)
  }

  private async render(screen: Screen): Promise<void> {
    switch (screen) {
      case 'loading':
        this.layer.innerHTML = `<div class="panel center"><div class="spinner"></div><p>正在打开记忆博物馆…</p></div>`
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
      case 'lobby':
        await this.renderLobby()
        break
      case 'codex':
        this.renderCodex()
        break
      case 'briefing':
        this.renderBriefing()
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
      case 'quiz':
        this.renderQuiz()
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
          <h1>记忆黑洞</h1>
          <p class="subtitle">中国城市博物馆</p>
          <p class="version">M2 省级工厂起步 · 收回散落的城市记忆</p>
        </div>
        <div class="btn-col wide">
          <button class="btn secondary" id="btn-train">训练场·星湾（虚构）</button>
          <button class="btn primary museum" id="btn-beijing">记忆博物馆·北京</button>
          <button class="btn secondary" id="btn-lobby">打开 34 省大厅</button>
          <button class="btn ghost" id="btn-howto">如何游玩</button>
        </div>
        <div class="stats-line">最高分：${high}　最大体型：L${maxLv}　身份：${p.nickname}</div>
        <p class="footnote">不宣称全国地级已收录 · live：训练场 / 北京 / 上海 / 哈尔滨</p>
      </div>`
    this.bind('btn-train', () => this.game.openBriefing('xingwan-training'))
    this.bind('btn-beijing', () => this.game.openBriefing('beijing'))
    this.bind('btn-lobby', () => this.game.openLobby())
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
            <li>你是记忆守护员。吸入碎片 = 把记忆归档进博物馆。</li>
            <li>洞口够大、质量够沉，才能归档（双阈值）。</li>
            <li>训练场·星湾是虚构练习；真城课请从大厅选北京、上海或哈尔滨。</li>
            <li>纪念空间不可归档，请绕行一周完成守护致敬。</li>
            <li>局后有 3 道小测验，可跳过，但跳过不会点亮「小博士」。</li>
          </ol>
          <p class="hint">桌面：WASD　移动端：左侧拖动摇杆　P/Esc 暂停</p>
          <button class="btn primary" id="btn-ok">知道了</button>
        </div>
      </div>`
    this.bind('btn-ok', () => this.game.goTitle())
  }

  private renderBriefing(): void {
    const b = this.game.getBriefing()
    this.layer.innerHTML = `
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal">
          <h2>${b.title}</h2>
          ${b.lines.map((l) => `<p class="brief-line">${l}</p>`).join('')}
          <div class="btn-row" style="margin-top:1.2rem">
            <button class="btn primary" id="btn-go">${b.packId === 'xingwan-training' ? '开始练习' : '开始守护'}</button>
            <button class="btn secondary" id="btn-back">返回</button>
          </div>
        </div>
      </div>`
    this.bind('btn-go', () => void this.game.startGame(b.packId))
    this.bind('btn-back', () => this.game.goTitle())
  }

  private renderSettings(): void {
    const s = this.game.getSettings()
    this.layer.innerHTML = `
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal settings-modal">
          <h2>设置</h2>
          <div class="settings-grid">
            <p class="hint">学习年龄决定测验题目；操作难度只改变归档门槛。</p>
            <label>学习年龄
              <select id="s-age">
                <option value="6-8" ${s.ageBand === '6-8' ? 'selected' : ''}>6–8 岁</option>
                <option value="9-12" ${s.ageBand === '9-12' ? 'selected' : ''}>9–12 岁（默认）</option>
                <option value="13+" ${s.ageBand === '13+' ? 'selected' : ''}>13 岁以上</option>
              </select>
            </label>
            <label>操作难度
              <select id="s-diff">
                <option value="easy" ${s.difficulty === 'easy' ? 'selected' : ''}>轻松</option>
                <option value="normal" ${s.difficulty === 'normal' ? 'selected' : ''}>标准</option>
                <option value="hard" ${s.difficulty === 'hard' ? 'selected' : ''}>困难</option>
              </select>
            </label>
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
            <label>训练场时长
              <select id="s-dur">
                <option value="120" ${s.duration === 120 ? 'selected' : ''}>120 秒</option>
                <option value="180" ${s.duration === 180 ? 'selected' : ''}>180 秒</option>
                <option value="240" ${s.duration === 240 ? 'selected' : ''}>240 秒</option>
              </select>
            </label>
            <p class="hint">生涯模式（真城课）不使用倒计时，只看裂隙稳定度。</p>
            <label><input type="checkbox" id="s-shake" ${s.cameraShake ? 'checked' : ''}/> 镜头震动</label>
            <label><input type="checkbox" id="s-outline" ${s.outlineHint ? 'checked' : ''}/> 可归档物体描边</label>
            <label><input type="checkbox" id="s-lock" ${s.lockIcon ? 'checked' : ''}/> 门槛提示</label>
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
        ageBand: (document.getElementById('s-age') as HTMLSelectElement).value as AgeBand,
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
      if (confirm('将清除最高分、图鉴与设置，且不可恢复。确定吗？')) {
        this.game.resetData()
        this.renderSettings()
      }
    })
  }

  private async renderLobby(): Promise<void> {
    if (!this.admin) {
      this.layer.innerHTML = `<div class="panel center"><div class="spinner"></div><p>正在展开 34 省大厅…</p></div>`
      try {
        this.admin = await loadAdminIndex()
      } catch {
        this.layer.innerHTML = `<div class="panel center"><p>名录加载失败。</p><button class="btn" id="btn-back">返回</button></div>`
        this.bind('btn-back', () => this.game.goTitle())
        return
      }
    }
    const q = this.searchQ
    const list = filterProvinces(this.admin, q)
    const grouped = new Map<string, typeof list>()
    for (const p of list) {
      const g = grouped.get(p.region7) ?? []
      g.push(p)
      grouped.set(p.region7, g)
    }
    const sections = REGION_ORDER.filter((r) => grouped.has(r))
      .map((r) => {
        const cards = grouped.get(r)!
          .map((p) => {
            const n = this.liveCitiesOf(p.adcode).length
            const playable = n > 0 || p.playable
            return `<button class="prov-card ${playable ? 'live' : 'repair'}" data-adcode="${p.adcode}">
              <span class="prov-name">${p.name}</span>
              <span class="prov-short">${p.shortName}</span>
              <span class="prov-cap">行政中心 ${p.capital}</span>
              <span class="prov-st">${playable ? `可玩 · ${n} 座` : '记忆修复中'}</span>
            </button>`
          })
          .join('')
        return `<h3 class="region-h">${r}</h3><div class="prov-grid">${cards}</div>`
      })
      .join('')

    const open = this.openProvince
    let detail = ''
    if (open) {
      const prov = this.admin.provinces.find((p) => p.adcode === open)
      const children: AdminPrefecture[] = this.admin.prefectures.filter((c) => c.parentAdcode === open)
      if (prov) {
        const live = this.liveCitiesOf(open)
        const rows = children
          .map((c) => {
            const openable = c.playable_3d && c.packId
            return `<li class="${openable ? 'live' : ''}">
              ${c.name}${openable ? ' · 可玩' : ' · 记忆修复中'}
              ${openable ? `<button class="btn tiny" data-pack="${c.packId}">进入</button>` : ''}
            </li>`
          })
          .join('')
        const enterBtns = live
          .map((c) => `<button class="btn primary" data-pack="${c.packId}">进入 ${c.name.replace(/主城$/, '')}</button>`)
          .join('')
        const first = live[0]
        detail = `<div class="prov-detail">
          <h3>${prov.name}（${prov.shortName}）</h3>
          <p>${prov.region7} / ${prov.region4} · 行政中心 ${prov.capital}</p>
          <p class="hint">${live.length ? '本省已开放行政中心或代表城 3D。未列城仍是灰壳。' : '本省入口可点，城包尚未制作，显示「记忆修复中」。不宣称全国地级已收录。'}</p>
          ${rows ? `<ul class="city-mini">${rows}</ul>` : '<p class="hint">省级单位，见主城入口。</p>'}
          <div class="btn-row wrap">
            ${enterBtns}
            ${first ? `<button class="btn secondary" id="btn-codex" data-pack="${first.packId}">本城图鉴</button>` : ''}
          </div>
        </div>`
      }
    }

    this.layer.innerHTML = `
      <div class="overlay lobby-screen" data-ui="1">
        <div class="lobby-head">
          <button class="icon-btn" id="btn-back" title="返回">←</button>
          <div>
            <h2>全国大厅</h2>
            <p class="hint">34 省可点 · 省内仅行政中心与已做代表城可进 · 其余「记忆修复中」· 不上未审中国全图</p>
          </div>
        </div>
        <input class="search" id="lobby-search" placeholder="搜索省名 / 简称（试试「京」「沪」「黑」）" value="${q}"/>
        <p class="footnote">${this.admin.disclaimer}</p>
        <div class="lobby-body">
          <div class="lobby-list">${sections || '<p>没有匹配的省。</p>'}</div>
          ${detail}
        </div>
        ${this.game.hasSharedQuiz() ? '<div class="btn-row" style="margin:0.8rem 1rem 1.2rem"><button class="btn secondary" id="btn-prov-quiz">抽 3 道 34 省简称题</button></div>' : ''}
      </div>`

    this.bind('btn-back', () => this.game.goTitle())
    const search = document.getElementById('lobby-search') as HTMLInputElement | null
    search?.addEventListener('input', () => {
      this.searchQ = search.value
      void this.renderLobby()
    })
    if (search && q) {
      search.focus()
      search.setSelectionRange(q.length, q.length)
    }
    this.layer.querySelectorAll<HTMLButtonElement>('.prov-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.openProvince = btn.dataset.adcode ?? null
        void this.renderLobby()
      })
    })
    this.layer.querySelectorAll<HTMLButtonElement>('[data-pack]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const packId = btn.dataset.pack
        if (!packId) return
        if (btn.id === 'btn-codex') this.game.openCodex(packId)
        else this.game.openBriefing(packId)
      })
    })
    this.bind('btn-prov-quiz', () => this.game.beginProvinceQuiz())
  }

  private liveCitiesOf(provinceAdcode: string): AdminPrefecture[] {
    if (!this.admin) return []
    return this.admin.prefectures.filter((c) => c.parentAdcode === provinceAdcode && c.playable_3d && c.packId)
  }

  private renderCodex(): void {
    const c = this.game.getCodex()
    const doctor = c.progress.doctorStar ? '★ 小博士已点亮' : '小博士未点亮（完成局后 3 题且答对至少 2 题）'
    const cards = c.cards.map((k) => `<article class="kcard"><h4>${k.title}</h4><p>${k.body}</p></article>`).join('')
    const lms = c.landmarks
      .map((l) => `<li>${l.name} · ${l.mark === '未点亮' ? '未点亮' : l.mark === 'guarded' ? '已守护' : l.mark === 'visited' ? '已参观' : '已入库'}</li>`)
      .join('')
    this.layer.innerHTML = `
      <div class="overlay lobby-screen" data-ui="1">
        <div class="lobby-head">
          <button class="icon-btn" id="btn-back">←</button>
          <h2>图鉴 · ${c.capital || c.provinceName}</h2>
        </div>
        <div class="codex">
          <section class="prov-hero">
            <h3>${c.provinceName}</h3>
            <p>简称 <b>${c.shortName}</b> · ${c.capital}</p>
            <p>${c.region7} / ${c.region4} · ${c.climate}</p>
            <p>${c.blurb}</p>
            <p class="doctor">${doctor}</p>
          </section>
          <section>
            <h3>本城地标</h3>
            <ul>${lms || '<li>去 3D 课里点亮 GUARD / VISIT 地标。</li>'}</ul>
          </section>
          <section>
            <h3>已收知识卡 ${c.cards.length}</h3>
            ${cards || '<p class="hint">玩一局真城课，归档或守护后会点亮卡片。也可从大厅直接打开本页。</p>'}
          </section>
        </div>
        <div class="btn-row" style="margin:1rem">
          <button class="btn primary" id="btn-play">进入 3D</button>
          <button class="btn secondary" id="btn-lobby">回大厅</button>
        </div>
      </div>`
    this.bind('btn-back', () => this.game.goTitle())
    this.bind('btn-play', () => this.game.openBriefing(c.packId))
    this.bind('btn-lobby', () => this.game.openLobby())
  }

  private renderHud(): void {
    this.layer.innerHTML = `
      <div class="hud" data-ui="1">
        <div class="hud-top">
          <div class="hud-left">
            <div class="level-line"><span id="hud-city"></span> · <span id="hud-level">L1</span></div>
            <div class="bar"><div class="bar-fill" id="hud-bar" style="width:0%"></div></div>
            <div class="score-line">博物馆能量 <span id="hud-score">0</span></div>
            <div class="dual" id="hud-dual" style="display:none">
              <div class="dual-name" id="dual-name"></div>
              <div class="dual-row">洞口 <div class="bar mini"><div class="bar-fill" id="bar-size"></div></div></div>
              <div class="dual-row">质量 <div class="bar mini"><div class="bar-fill mass" id="bar-mass"></div></div></div>
              <div class="dual-miss" id="dual-miss"></div>
            </div>
          </div>
          <div class="hud-right">
            <div class="timer" id="hud-timer">03:00</div>
            <button class="icon-btn pause-btn" id="btn-pause" title="暂停">⏸</button>
          </div>
        </div>
        <div class="combo" id="hud-combo" style="display:none">连击 x2</div>
        <div class="toast" id="hud-toast" style="display:none"></div>
        <button class="skip-tut" id="btn-skip-tut" style="display:none">跳过引导</button>
        <div class="kmodal" id="kmodal" style="display:none">
          <div class="kmodal-card">
            <h3 id="k-title"></h3>
            <p id="k-body"></p>
            <div class="btn-row">
              <button class="btn primary" id="k-ok">知道了</button>
              <button class="btn secondary" id="k-later">稍后再读</button>
            </div>
          </div>
        </div>
      </div>`
    this.bind('btn-pause', () => this.game.pause())
    this.bind('btn-skip-tut', () => {
      this.game.skipTutorial()
      const t = document.getElementById('btn-skip-tut')
      if (t) t.style.display = 'none'
    })
    this.bind('k-ok', () => this.game.acknowledgeCard(false))
    this.bind('k-later', () => this.game.acknowledgeCard(true))
    if (this.lastHud) this.updateHud(this.lastHud)
  }

  private lastHudLevel = 0

  private updateHud(h: HudSnapshot): void {
    this.lastHud = h
    if (this.game.screen !== 'playing') return
    const lv = document.getElementById('hud-level')
    const city = document.getElementById('hud-city')
    if (lv && h.level !== this.lastHudLevel) {
      if (this.lastHudLevel > 0 && h.level > this.lastHudLevel) {
        lv.classList.remove('level-flash')
        void lv.offsetWidth
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
    if (city) city.textContent = h.cityName
    if (lv) lv.textContent = `L${h.level} ${h.levelLabel}`
    if (bar) bar.style.width = `${Math.round(h.progress * 100)}%`
    if (score) score.textContent = fmtScore(h.score)
    if (timer) {
      if (h.mode === 'career') {
        timer.textContent = `裂隙 ${Math.round(h.rift)}`
        timer.classList.toggle('warn', h.rift <= 30)
        timer.classList.toggle('danger', h.rift <= 12)
      } else {
        timer.textContent = fmtTime(h.timeLeft)
        timer.classList.toggle('warn', h.timeLeft <= 30)
        timer.classList.toggle('danger', h.timeLeft <= 10)
      }
    }
    if (combo) {
      if (h.combo >= 2) {
        combo.style.display = 'block'
        combo.textContent = `连击 x${h.combo}`
      } else combo.style.display = 'none'
    }
    if (toast) {
      if (h.toast && !h.card) {
        toast.style.display = 'block'
        toast.textContent = h.toast
        if (skip) skip.style.display = h.tutorial ? 'block' : 'none'
      } else {
        toast.style.display = 'none'
        if (skip) skip.style.display = 'none'
      }
    }
    const dual = document.getElementById('hud-dual')
    if (dual) {
      if (h.aim) {
        dual.style.display = 'block'
        const dn = document.getElementById('dual-name')
        const dm = document.getElementById('dual-miss')
        const bs = document.getElementById('bar-size')
        const bm = document.getElementById('bar-mass')
        if (dn) dn.textContent = `瞄准：${h.aim.name}`
        if (dm) dm.textContent = h.aim.missing
        if (bs) bs.style.width = `${Math.min(100, Math.round((h.aim.sizeHave / Math.max(h.aim.sizeNeed, 0.01)) * 100))}%`
        if (bm) bm.style.width = `${Math.min(100, Math.round((h.aim.massHave / Math.max(h.aim.massNeed, 0.01)) * 100))}%`
      } else dual.style.display = 'none'
    }
    const modal = document.getElementById('kmodal')
    if (modal) {
      if (h.card) {
        modal.style.display = 'flex'
        const t = document.getElementById('k-title')
        const b = document.getElementById('k-body')
        if (t) t.textContent = h.card.title
        if (b) b.textContent = h.card.body
      } else modal.style.display = 'none'
    }
  }

  private renderPaused(): void {
    this.layer.innerHTML = `
      <div class="overlay modal-wrap dim" data-ui="1">
        <div class="modal">
          <h2>暂停</h2>
          <p class="hint">记忆还在口袋里，不会消失。</p>
          <div class="btn-col">
            <button class="btn primary" id="btn-resume">继续</button>
            <button class="btn secondary" id="btn-set">设置</button>
            <button class="btn danger" id="btn-quit">先离开（记忆暂存）</button>
          </div>
        </div>
      </div>`
    this.bind('btn-resume', () => this.game.resume())
    this.bind('btn-set', () => {
      this.settingsBack = 'paused'
      this.game.openSettings()
    })
    this.bind('btn-quit', () => {
      const btn = document.getElementById('btn-quit')
      if (!btn) return
      if (btn.dataset.armed === '1') {
        this.game.abandon()
        return
      }
      btn.dataset.armed = '1'
      btn.textContent = '确认离开？'
      window.setTimeout(() => {
        if (!document.getElementById('btn-quit')) return
        btn.dataset.armed = '0'
        btn.textContent = '先离开（记忆暂存）'
      }, 3000)
    })
  }

  private renderResult(): void {
    const r = this.game.getResult()
    if (!r) return
    const deferred = r.deferredCards
      .map((c) => `<p class="k-sum"><b>${c.title}</b>：${c.body}</p>`)
      .join('')
    this.layer.innerHTML = `
      <div class="overlay modal-wrap dim" data-ui="1">
        <div class="modal">
          <h2>${r.mode === 'career' ? '裂隙暂合拢，记忆已入库' : '训练场结算'}</h2>
          <p class="result-title">${r.title}</p>
          <p class="result-score">博物馆能量：${fmtScore(r.score)}${r.isNewRecord ? ' <span class="new-rec">新纪录！</span>' : ''}</p>
          <p>本局入库件数：${r.archived}　参观：${r.visited}　守护：${r.guarded}</p>
          <p>最终体型：L${r.level} · 质量 ${r.mass}${r.mode === 'career' ? ` · 裂隙 ${r.rift}` : ''}</p>
          ${deferred ? `<div class="deferred"><h3>稍后再读</h3>${deferred}</div>` : ''}
          <div class="btn-row" style="margin-top:1.2rem">
            ${r.hasQuiz ? '<button class="btn primary" id="btn-quiz">局后 3 题</button>' : ''}
            <button class="btn ${r.hasQuiz ? 'secondary' : 'primary'}" id="btn-again">再来一局</button>
            <button class="btn secondary" id="btn-home">返回标题</button>
          </div>
        </div>
      </div>`
    this.bind('btn-quiz', () => this.game.beginQuiz())
    this.bind('btn-again', () => void this.game.startGame())
    this.bind('btn-home', () => this.game.goTitle())
  }

  private renderQuiz(): void {
    const v = this.game.getQuizView()
    if (v.done) {
      const right = this.game.quizAnswers.filter((a) => a.correct).length
      const msg = v.skipped
        ? '已跳过测验，本局不点亮小博士星。作答记录未写入。'
        : `答对 ${right} / ${v.total}。${v.doctor ? '点亮小博士星！' : '再试一次也许能点亮小博士。'}`
      this.layer.innerHTML = `
        <div class="overlay modal-wrap" data-ui="1">
          <div class="modal">
            <h2>测验结束</h2>
            <p>${msg}</p>
            <button class="btn primary" id="btn-codex">${this.game.quizReturn === 'lobby' ? '回大厅' : '查看图鉴'}</button>
          </div>
        </div>`
      this.bind('btn-codex', () => {
        if (this.game.quizReturn === 'lobby') this.game.openLobby()
        else this.game.openCodex(this.game.codexFocus)
      })
      return
    }
    const q = v.q
    if (!q) return
    const choices = q.choices
      .map((c, i) => `<button class="btn secondary quiz-choice" data-i="${i}">${c}</button>`)
      .join('')
    this.layer.innerHTML = `
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal">
          <p class="hint">第 ${v.index + 1} / ${v.total} 题 · 可跳过（不点亮小博士）</p>
          <h2>${q.prompt}</h2>
          <div class="btn-col">${choices}</div>
          <button class="btn ghost" id="btn-skip" style="margin-top:1rem">稍后再答（不点亮小博士）</button>
        </div>
      </div>`
    this.layer.querySelectorAll<HTMLButtonElement>('.quiz-choice').forEach((btn) => {
      btn.addEventListener('click', () => this.game.answerQuiz(Number(btn.dataset.i)))
    })
    this.bind('btn-skip', () => this.game.skipQuiz())
  }

  private bind(id: string, fn: () => void): void {
    const el = document.getElementById(id)
    el?.addEventListener('click', (e) => {
      e.stopPropagation()
      fn()
    })
  }
}
