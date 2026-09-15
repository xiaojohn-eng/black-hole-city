export class InputManager {
  private keys = new Set<string>()
  moveX = 0
  moveZ = 0
  pausePressed = 0
  private joystickActive = false
  private joyOrigin = { x: 0, y: 0 }
  private joyVec = { x: 0, y: 0 }
  private pointerId: number | null = null
  private el: HTMLElement
  private joyBase: HTMLElement | null = null
  private joyKnob: HTMLElement | null = null
  forceJoystick = false
  sensitivity = 1
  mouseSteer = false
  private mouseDown = false
  private mouseNX = 0
  private mouseNY = 0
  enabled = true

  constructor(el: HTMLElement) {
    this.el = el
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
    el.addEventListener('pointerdown', this.onPointerDown)
    el.addEventListener('pointermove', this.onPointerMove)
    el.addEventListener('pointerup', this.onPointerUp)
    el.addEventListener('pointercancel', this.onPointerUp)
    this.createJoystickDom()
  }

  private createJoystickDom(): void {
    const base = document.createElement('div')
    base.id = 'virtual-joystick'
    base.style.cssText =
      'display:none;position:absolute;width:128px;height:128px;border-radius:50%;' +
      'background:rgba(255,255,255,0.12);border:2px solid rgba(255,255,255,0.25);' +
      'pointer-events:none;z-index:40;transform:translate(-50%,-50%);'
    const knob = document.createElement('div')
    knob.style.cssText =
      'position:absolute;width:56px;height:56px;border-radius:50%;left:50%;top:50%;' +
      'transform:translate(-50%,-50%);background:rgba(45,212,191,0.7);' +
      'border:2px solid rgba(255,255,255,0.5);'
    base.appendChild(knob)
    this.el.appendChild(base)
    this.joyBase = base
    this.joyKnob = knob
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    this.keys.add(e.code)
    if (e.code === 'Escape' || e.code === 'KeyP') this.pausePressed++
  }

  private onKeyUp = (e: KeyboardEvent): void => {
    this.keys.delete(e.code)
  }

  private isTouchLike(e: PointerEvent): boolean {
    return e.pointerType === 'touch' || this.forceJoystick
  }

  private onPointerDown = (e: PointerEvent): void => {
    if (!this.enabled) return
    const target = e.target as HTMLElement
    if (target.closest('[data-ui]')) return
    if (this.isTouchLike(e) || (this.forceJoystick && e.pointerType === 'mouse')) {
      if (this.pointerId != null) return
      // Only left half for joystick on touch
      if (e.pointerType === 'touch' && e.clientX > window.innerWidth * 0.65) return
      this.pointerId = e.pointerId
      this.joystickActive = true
      this.joyOrigin = { x: e.clientX, y: e.clientY }
      this.joyVec = { x: 0, y: 0 }
      if (this.joyBase) {
        this.joyBase.style.display = 'block'
        this.joyBase.style.left = `${e.clientX}px`
        this.joyBase.style.top = `${e.clientY}px`
      }
      this.el.setPointerCapture(e.pointerId)
    } else if (this.mouseSteer && e.pointerType === 'mouse' && e.button === 0) {
      this.mouseDown = true
      this.updateMouseDir(e)
    }
  }

  private onPointerMove = (e: PointerEvent): void => {
    if (!this.enabled) return
    if (this.joystickActive && e.pointerId === this.pointerId) {
      const dx = e.clientX - this.joyOrigin.x
      const dy = e.clientY - this.joyOrigin.y
      const max = 48
      const len = Math.hypot(dx, dy)
      const dead = 12
      if (len < dead) {
        this.joyVec = { x: 0, y: 0 }
      } else {
        const clamped = Math.min(len, max)
        const nx = (dx / len) * clamped
        const ny = (dy / len) * clamped
        this.joyVec = { x: nx / max, y: ny / max }
      }
      if (this.joyKnob) {
        const kx = this.joyVec.x * 48
        const ky = this.joyVec.y * 48
        this.joyKnob.style.transform = `translate(calc(-50% + ${kx}px), calc(-50% + ${ky}px))`
      }
    } else if (this.mouseDown && this.mouseSteer) {
      this.updateMouseDir(e)
    }
  }

  private updateMouseDir(e: PointerEvent): void {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const len = Math.hypot(dx, dy) || 1
    this.mouseNX = dx / len
    this.mouseNY = dy / len
  }

  private onPointerUp = (e: PointerEvent): void => {
    if (!this.enabled) return
    if (e.pointerId === this.pointerId) {
      this.pointerId = null
      this.joystickActive = false
      this.joyVec = { x: 0, y: 0 }
      if (this.joyBase) this.joyBase.style.display = 'none'
      if (this.joyKnob) this.joyKnob.style.transform = 'translate(-50%,-50%)'
    }
    if (e.pointerType === 'mouse') this.mouseDown = false
  }

  consumePause(): boolean {
    if (this.pausePressed > 0) {
      this.pausePressed = 0
      return true
    }
    return false
  }

  update(): void {
    let x = 0
    let z = 0
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) z -= 1
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) z += 1
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1

    if (this.joystickActive) {
      x = this.joyVec.x
      z = this.joyVec.y
    } else if (this.mouseDown && this.mouseSteer) {
      x = this.mouseNX
      z = this.mouseNY
    }

    const len = Math.hypot(x, z)
    if (len > 1) {
      x /= len
      z /= len
    }
    this.moveX = x * this.sensitivity
    this.moveZ = z * this.sensitivity
  }

  dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
  }
}
