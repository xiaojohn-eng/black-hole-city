import * as THREE from 'three'
import { CAM_B, CAM_D0, CAM_FOV, CAM_PITCH } from './constants'
import type { Player } from './Player'

export class CameraRig {
  camera: THREE.PerspectiveCamera
  private look = new THREE.Vector3()
  private desired = new THREE.Vector3()
  private current = new THREE.Vector3()
  private pulse = 0
  private shake = 0
  private smoothDist = 0

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(CAM_FOV, aspect, 0.5, 500)
    this.current.set(0, 30, 20)
    this.camera.position.copy(this.current)
  }

  triggerPulse(): void {
    this.pulse = 0.3
  }

  triggerShake(amt = 0.4): void {
    this.shake = amt
  }

  update(dt: number, player: Player, enableShake: boolean): void {
    const targetDist = CAM_D0 + CAM_B * player.radius
    // Ease the follow distance separately so growth doesn't snap the zoom
    if (this.smoothDist <= 0) this.smoothDist = targetDist
    this.smoothDist += (targetDist - this.smoothDist) * (1 - Math.exp(-3.5 * dt))
    let dist = this.smoothDist
    if (this.pulse > 0) {
      this.pulse -= dt
      dist *= 1.08
    }
    const height = dist * Math.sin(CAM_PITCH)
    const back = dist * Math.cos(CAM_PITCH)
    // Velocity-scaled look-ahead: the camera leans into movement
    const lookAhead = 2.0
    const vx = player.dirX * lookAhead
    const vz = player.dirZ * lookAhead
    this.look.x += (player.x + vx - this.look.x) * (1 - Math.exp(-9 * dt))
    this.look.z += (player.z + vz - this.look.z) * (1 - Math.exp(-9 * dt))
    this.look.y = 0
    this.desired.set(this.look.x, height, this.look.z + back)

    // Frame-rate independent exponential smoothing — same feel at any FPS
    const k = 1 - Math.exp(-5.5 * dt)
    this.current.x += (this.desired.x - this.current.x) * k
    this.current.y += (this.desired.y - this.current.y) * k
    this.current.z += (this.desired.z - this.current.z) * k

    let sx = 0
    let sz = 0
    if (enableShake && this.shake > 0) {
      sx = (Math.random() - 0.5) * this.shake
      sz = (Math.random() - 0.5) * this.shake
      this.shake = Math.max(0, this.shake - dt * 2)
    }

    this.camera.position.set(this.current.x + sx, this.current.y, this.current.z + sz)
    this.camera.lookAt(this.look)
  }

  resize(aspect: number): void {
    this.camera.aspect = aspect
    this.camera.fov = aspect < 1 ? 55 : CAM_FOV
    this.camera.updateProjectionMatrix()
  }
}
