import * as THREE from 'three'
import { M0, radiusFromMass, speedFromMass, levelFromMass } from './constants'

export class Player {
  mass = M0
  radius = radiusFromMass(M0)
  level = 1
  x = 0
  z = -90 // south park spawn
  dirX = 0
  dirZ = -1
  mesh: THREE.Group
  private disc: THREE.Mesh
  private rim: THREE.Mesh
  private rimMat: THREE.MeshBasicMaterial
  private speedBoost = 0
  private boostTimer = 0
  private velX = 0
  private velZ = 0
  private rimFlash = 0

  constructor(scene: THREE.Scene) {
    this.mesh = new THREE.Group()
    // Dark hole disc
    const discGeo = new THREE.CircleGeometry(1, 48)
    const discMat = new THREE.MeshBasicMaterial({ color: 0x050508 })
    this.disc = new THREE.Mesh(discGeo, discMat)
    this.disc.rotation.x = -Math.PI / 2
    this.disc.position.y = 0.05
    this.mesh.add(this.disc)

    // Teal rim ring
    const rimGeo = new THREE.RingGeometry(0.85, 1.05, 48)
    this.rimMat = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    })
    this.rim = new THREE.Mesh(rimGeo, this.rimMat)
    this.rim.rotation.x = -Math.PI / 2
    this.rim.position.y = 0.06
    this.mesh.add(this.rim)

    // Inner swirl hint
    const innerGeo = new THREE.CircleGeometry(0.5, 32)
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x111827, transparent: true, opacity: 0.95 })
    const inner = new THREE.Mesh(innerGeo, innerMat)
    inner.rotation.x = -Math.PI / 2
    inner.position.y = 0.07
    this.mesh.add(inner)

    scene.add(this.mesh)
    this.syncVisual()
  }

  get speed(): number {
    const base = speedFromMass(this.mass)
    return base * (1 + this.speedBoost)
  }

  addMass(amount: number): boolean {
    const prev = this.level
    this.mass += amount
    this.radius = radiusFromMass(this.mass)
    this.level = levelFromMass(this.mass)
    this.syncVisual()
    if (this.level > prev) {
      this.speedBoost = 0.15
      this.boostTimer = 0.4
      this.rimFlash = 0.6
      return true
    }
    return false
  }

  private syncVisual(): void {
    this.mesh.scale.setScalar(this.radius)
    this.mesh.position.set(this.x, 0, this.z)
  }

  update(dt: number, moveX: number, moveZ: number, mapHalf: number, boundary: number): void {
    if (this.boostTimer > 0) {
      this.boostTimer -= dt
      if (this.boostTimer <= 0) this.speedBoost = 0
    }

    // Acceleration smoothing: velocity chases the target velocity so
    // starts/stops feel soft while the hole stays glued to the ground.
    const targetVX = moveX * this.speed
    const targetVZ = moveZ * this.speed
    const blend = 1 - Math.exp(-10 * dt)
    this.velX += (targetVX - this.velX) * blend
    this.velZ += (targetVZ - this.velZ) * blend
    this.x += this.velX * dt
    this.z += this.velZ * dt

    const spd = Math.hypot(this.velX, this.velZ)
    if (spd > 0.5) {
      this.dirX = this.velX / spd
      this.dirZ = this.velZ / spd
    }

    const lim = mapHalf - boundary - this.radius
    this.x = Math.max(-lim, Math.min(lim, this.x))
    this.z = Math.max(-lim, Math.min(lim, this.z))
    this.mesh.position.set(this.x, 0, this.z)

    // Subtle rim pulse + level-up flash
    if (this.rimFlash > 0) {
      this.rimFlash -= dt
      const f = Math.max(0, this.rimFlash) / 0.6
      this.rimMat.color.setHex(0xfbbf24)
      this.rimMat.opacity = 0.5 + f * 0.5
      this.rim.scale.setScalar(0.9 + (1 - f) * 0.8)
      if (this.rimFlash <= 0) {
        this.rimMat.color.setHex(0x2dd4bf)
        this.rimMat.opacity = 0.9
      }
    } else {
      const pulse = 0.85 + Math.sin(performance.now() * 0.006) * 0.08
      this.rim.scale.setScalar(pulse)
    }
  }

  reset(): void {
    this.mass = M0
    this.radius = radiusFromMass(M0)
    this.level = 1
    this.x = 0
    this.z = -90
    this.speedBoost = 0
    this.boostTimer = 0
    this.velX = 0
    this.velZ = 0
    this.rimFlash = 0
    this.rimMat.color.setHex(0x2dd4bf)
    this.rimMat.opacity = 0.9
    this.syncVisual()
  }
}
