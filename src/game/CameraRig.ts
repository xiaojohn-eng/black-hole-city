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

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(CAM_FOV, aspect, 0.5, 500)
    this.current.set(0, 30, -20)
    this.camera.position.copy(this.current)
  }

  triggerPulse(): void {
    this.pulse = 0.3
  }

  triggerShake(amt = 0.4): void {
    this.shake = amt
  }

  update(dt: number, player: Player, enableShake: boolean): void {
    let dist = CAM_D0 + CAM_B * player.radius
    if (this.pulse > 0) {
      this.pulse -= dt
      dist *= 1.08
    }
    const height = dist * Math.sin(CAM_PITCH)
    const back = dist * Math.cos(CAM_PITCH)
    const lookAhead = 2.0
    this.look.set(
      player.x + player.dirX * lookAhead,
      0,
      player.z + player.dirZ * lookAhead,
    )
    this.desired.set(this.look.x, height, this.look.z - back)

    // Spring follow
    const stiff = 8
    this.current.x += (this.desired.x - this.current.x) * Math.min(1, stiff * dt)
    this.current.y += (this.desired.y - this.current.y) * Math.min(1, stiff * dt)
    this.current.z += (this.desired.z - this.current.z) * Math.min(1, stiff * dt)

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
