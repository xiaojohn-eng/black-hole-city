type Kind = 'trash' | 'car' | 'house' | 'tower'

interface Entity {
  x: number
  y: number
  size: number
  mass: number
  value: number
  kind: Kind
  color: string
  angle: number
  vx: number
  vy: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  color: string
}

interface Callbacks {
  onQuit: () => void
}

const WORLD = 2400
const DURATION = 180
const KIND_STYLE: Record<Kind, { min: number; max: number; mass: number; value: number; colors: string[] }> = {
  trash: { min: 5, max: 9, mass: 1, value: 5, colors: ['#9ca3af', '#6b7280', '#d1d5db'] },
  car: { min: 11, max: 17, mass: 3, value: 15, colors: ['#ef4444', '#3b82f6', '#f59e0b', '#10b981', '#e5e7eb'] },
  house: { min: 22, max: 44, mass: 10, value: 50, colors: ['#a8a29e', '#78716c', '#c4b5fd', '#93c5fd'] },
  tower: { min: 55, max: 85, mass: 60, value: 300, colors: ['#64748b', '#475569', '#8b5cf6'] },
}

function rand(a: number, b: number): number {
  return a + Math.random() * (b - a)
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export class Fallback2D {
  private root: HTMLElement
  private cb: Callbacks
  private host: HTMLElement
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private overlay: HTMLElement
  private raf = 0
  private lastT = 0
  private running = false

  private px = WORLD / 2
  private py = WORLD / 2
  private pvx = 0
  private pvy = 0
  private pr = 14
  private pmass = 10
  private score = 0
  private eaten = 0
  private timeLeft = DURATION
  private entities: Entity[] = []
  private particles: Particle[] = []
  private pointer: { x: number; y: number } | null = null
  private keys = new Set<string>()
  private ended = false

  private onKeyDown = (e: KeyboardEvent): void => {
    this.keys.add(e.code)
  }
  private onKeyUp = (e: KeyboardEvent): void => {
    this.keys.delete(e.code)
  }
  private onResize = (): void => {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  constructor(root: HTMLElement, cb: Callbacks) {
    this.root = root
    this.cb = cb
    this.host = document.createElement('div')
    this.host.style.cssText = 'position:absolute;inset:0;z-index:5;background:#0a0e14;'
    this.canvas = document.createElement('canvas')
    this.canvas.style.cssText = 'display:block;width:100%;height:100%;touch-action:none;'
    this.host.appendChild(this.canvas)
    const ctx = this.canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas 2D unavailable')
    this.ctx = ctx
    root.appendChild(this.host)

    this.overlay = document.createElement('div')
    this.overlay.setAttribute('data-ui', '1')
    this.overlay.style.cssText =
      'position:absolute;top:10px;right:10px;z-index:6;display:flex;gap:8px;'
    const quit = document.createElement('button')
    quit.className = 'btn secondary'
    quit.style.cssText = 'min-height:36px;padding:0.4rem 0.9rem;font-size:0.9rem;'
    quit.textContent = '退出 2D 版'
    quit.addEventListener('click', (e) => {
      e.stopPropagation()
      this.cb.onQuit()
    })
    this.overlay.appendChild(quit)
    this.host.appendChild(this.overlay)

    this.canvas.addEventListener('pointerdown', this.onPointerDown)
    this.canvas.addEventListener('pointermove', this.onPointerMove)
    window.addEventListener('pointerup', this.onPointerUp)
    window.addEventListener('pointercancel', this.onPointerUp)
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }

  start(): void {
    this.spawnInitial()
    this.running = true
    this.lastT = performance.now()
    const loop = (t: number) => {
      if (!this.running) return
      this.raf = requestAnimationFrame(loop)
      const dt = Math.min(0.05, (t - this.lastT) / 1000)
      this.lastT = t
      this.tick(dt)
      this.draw()
    }
    this.raf = requestAnimationFrame(loop)
  }

  destroy(): void {
    this.running = false
    cancelAnimationFrame(this.raf)
    window.removeEventListener('pointerup', this.onPointerUp)
    window.removeEventListener('pointercancel', this.onPointerUp)
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
    window.removeEventListener('resize', this.onResize)
    this.host.remove()
  }

  private onPointerDown = (e: PointerEvent): void => {
    this.pointer = { x: e.clientX, y: e.clientY }
    this.canvas.setPointerCapture(e.pointerId)
  }
  private onPointerMove = (e: PointerEvent): void => {
    if (this.pointer) this.pointer = { x: e.clientX, y: e.clientY }
  }
  private onPointerUp = (): void => {
    this.pointer = null
  }

  private spawnInitial(): void {
    const counts: Array<[Kind, number]> = [
      ['trash', 220],
      ['car', 130],
      ['house', 80],
      ['tower', 10],
    ]
    for (const [kind, n] of counts) {
      for (let i = 0; i < n; i++) this.entities.push(this.makeEntity(kind))
    }
  }

  private makeEntity(kind: Kind): Entity {
    const st = KIND_STYLE[kind]
    return {
      x: rand(60, WORLD - 60),
      y: rand(60, WORLD - 60),
      size: rand(st.min, st.max),
      mass: st.mass,
      value: st.value,
      kind,
      color: pick(st.colors),
      angle: rand(0, Math.PI * 2),
      vx: kind === 'car' ? rand(-30, 30) : 0,
      vy: kind === 'car' ? rand(-30, 30) : 0,
    }
  }

  private level(): number {
    if (this.pr < 18) return 1
    if (this.pr < 26) return 2
    if (this.pr < 38) return 3
    if (this.pr < 54) return 4
    if (this.pr < 74) return 5
    if (this.pr < 100) return 6
    if (this.pr < 132) return 7
    return 8
  }

  private tick(dt: number): void {
    if (this.ended) return
    this.timeLeft -= dt
    if (this.timeLeft <= 0) {
      this.timeLeft = 0
      this.endRound()
      return
    }

    const speed = Math.max(120, 300 - this.pr * 0.8)
    let ax = 0
    let ay = 0
    if (this.pointer) {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = this.pointer.x - cx
      const dy = this.pointer.y - cy
      const len = Math.hypot(dx, dy)
      if (len > 12) {
        ax = (dx / len) * speed
        ay = (dy / len) * speed
      }
    }
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) ay -= speed
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) ay += speed
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) ax -= speed
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) ax += speed

    this.pvx += (ax - this.pvx) * Math.min(1, dt * 8)
    this.pvy += (ay - this.pvy) * Math.min(1, dt * 8)
    this.px = Math.min(WORLD - 20, Math.max(20, this.px + this.pvx * dt))
    this.py = Math.min(WORLD - 20, Math.max(20, this.py + this.pvy * dt))

    for (const e of this.entities) {
      if (e.kind === 'car') {
        e.x += e.vx * dt
        e.y += e.vy * dt
        if (e.x < 40 || e.x > WORLD - 40) e.vx *= -1
        if (e.y < 40 || e.y > WORLD - 40) e.vy *= -1
      }
      const d = Math.hypot(e.x - this.px, e.y - this.py)
      if (d < this.pr * 1.6 && e.size <= this.pr * 0.95) {
        const pull = (this.pr * 1.6 - d) * 6
        e.x -= ((e.x - this.px) / (d || 1)) * pull * dt
        e.y -= ((e.y - this.py) / (d || 1)) * pull * dt
      }
      if (d < this.pr * 0.7 && e.size <= this.pr * 0.95) {
        this.eat(e)
      }
    }
    this.entities = this.entities.filter((e) => !('dead' in e && (e as { dead?: boolean }).dead))

    for (const p of this.particles) {
      p.x += p.vx * dt
      p.y += p.vy * dt
      p.life -= dt
    }
    this.particles = this.particles.filter((p) => p.life > 0)
  }

  private eat(e: Entity): void {
    ;(e as { dead?: boolean }).dead = true
    this.pmass += e.mass
    this.pr = 14 * Math.cbrt(this.pmass / 10)
    this.score += e.value
    this.eaten++
    for (let i = 0; i < 6; i++) {
      const a = rand(0, Math.PI * 2)
      this.particles.push({
        x: e.x,
        y: e.y,
        vx: Math.cos(a) * rand(20, 80),
        vy: Math.sin(a) * rand(20, 80),
        life: rand(0.2, 0.5),
        color: e.color,
      })
    }
    this.entities.push(this.makeEntity(e.kind))
  }

  private endRound(): void {
    this.ended = true
    const ov = document.createElement('div')
    ov.setAttribute('data-ui', '1')
    ov.style.cssText =
      'position:absolute;inset:0;z-index:7;display:flex;align-items:center;justify-content:center;background:rgba(4,10,20,0.8);'
    ov.innerHTML = `
      <div class="modal" style="text-align:center;max-width:320px;padding:1.5rem;">
        <h2>时间到！</h2>
        <p style="font-size:1.2rem;margin:0.6rem 0;">分数：<b>${this.score}</b></p>
        <p>体型：L${this.level()} · 吞噬 ${this.eaten} 个</p>
        <p style="opacity:0.7;font-size:0.85rem;">这是无 WebGL 环境下的 2D 简化版</p>
        <div class="btn-col" style="margin:1rem auto 0;">
          <button class="btn primary" id="f2-again">再来一局</button>
          <button class="btn secondary" id="f2-quit">退出</button>
        </div>
      </div>`
    this.host.appendChild(ov)
    ov.querySelector('#f2-again')?.addEventListener('click', (ev) => {
      ev.stopPropagation()
      ov.remove()
      this.restart()
    })
    ov.querySelector('#f2-quit')?.addEventListener('click', (ev) => {
      ev.stopPropagation()
      this.cb.onQuit()
    })
  }

  private restart(): void {
    this.px = WORLD / 2
    this.py = WORLD / 2
    this.pvx = 0
    this.pvy = 0
    this.pr = 14
    this.pmass = 10
    this.score = 0
    this.eaten = 0
    this.timeLeft = DURATION
    this.ended = false
  }

  private draw(): void {
    const ctx = this.ctx
    const W = this.canvas.width
    const H = this.canvas.height
    const camX = this.px - W / 2
    const camY = this.py - H / 2

    ctx.fillStyle = '#0d1520'
    ctx.fillRect(0, 0, W, H)

    ctx.strokeStyle = 'rgba(148,163,184,0.08)'
    ctx.lineWidth = 1
    const grid = 120
    const gx0 = Math.floor(camX / grid) * grid
    const gy0 = Math.floor(camY / grid) * grid
    ctx.beginPath()
    for (let x = gx0; x < camX + W; x += grid) {
      ctx.moveTo(x - camX, 0)
      ctx.lineTo(x - camX, H)
    }
    for (let y = gy0; y < camY + H; y += grid) {
      ctx.moveTo(0, y - camY)
      ctx.lineTo(W, y - camY)
    }
    ctx.stroke()

    ctx.strokeStyle = 'rgba(45,212,191,0.5)'
    ctx.lineWidth = 4
    ctx.strokeRect(-camX, -camY, WORLD, WORLD)

    for (const e of this.entities) {
      const sx = e.x - camX
      const sy = e.y - camY
      if (sx < -100 || sx > W + 100 || sy < -100 || sy > H + 100) continue
      const edible = e.size <= this.pr * 0.95
      ctx.globalAlpha = edible ? 1 : 0.45
      ctx.fillStyle = e.color
      if (e.kind === 'trash') {
        ctx.beginPath()
        ctx.arc(sx, sy, e.size, 0, Math.PI * 2)
        ctx.fill()
      } else {
        const s = e.size
        ctx.save()
        ctx.translate(sx, sy)
        if (e.kind === 'car') ctx.rotate(Math.atan2(e.vy, e.vx))
        ctx.fillRect(-s / 2, -s / 2, s, s)
        if (e.kind === 'tower') {
          ctx.fillStyle = 'rgba(255,255,255,0.25)'
          const w = s / 6
          for (let i = -1; i <= 1; i++) ctx.fillRect(i * w * 2 - w / 2, -s / 2, w, s)
        }
        ctx.restore()
      }
      ctx.globalAlpha = 1
    }

    for (const p of this.particles) {
      ctx.globalAlpha = Math.max(0, p.life * 2)
      ctx.fillStyle = p.color
      ctx.fillRect(p.x - camX - 2, p.y - camY - 2, 4, 4)
    }
    ctx.globalAlpha = 1

    const psx = this.px - camX
    const psy = this.py - camY
    const grad = ctx.createRadialGradient(psx, psy, this.pr * 0.2, psx, psy, this.pr)
    grad.addColorStop(0, '#000000')
    grad.addColorStop(0.8, '#050508')
    grad.addColorStop(1, 'rgba(139,92,246,0.9)')
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(psx, psy, this.pr, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = 'rgba(45,212,191,0.35)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(psx, psy, this.pr * 1.15, 0, Math.PI * 2)
    ctx.stroke()

    const m = Math.floor(this.timeLeft / 60)
    const sec = Math.floor(this.timeLeft % 60)
    ctx.fillStyle = 'rgba(15,23,42,0.7)'
    ctx.fillRect(10, 10, 220, 64)
    ctx.fillStyle = '#e2e8f0'
    ctx.font = 'bold 20px system-ui, sans-serif'
    ctx.fillText(`分数 ${this.score}`, 22, 36)
    ctx.font = '16px system-ui, sans-serif'
    ctx.fillStyle = this.timeLeft <= 20 ? '#f87171' : '#2dd4bf'
    ctx.fillText(`时间 ${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`, 22, 60)
    ctx.fillStyle = '#94a3b8'
    ctx.fillText(`L${this.level()} · 吞噬 ${this.eaten}`, 130, 60)
  }
}
