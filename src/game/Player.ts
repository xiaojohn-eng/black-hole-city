import * as THREE from 'three'
import { M0, radiusFromMass, speedFromMass, levelFromMass } from './constants'

export class Player {
  mass = M0
  radius = radiusFromMass(M0)
  level = 1
  x = 0
  z = -90 // south park spawn
  dirX = 0
  dirZ = 1
  mesh: THREE.Group
  private disc: THREE.Mesh
  private rim: THREE.Mesh
  private speedBoost = 0
  private boostTimer = 0

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
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    })
    this.rim = new THREE.Mesh(rimGeo, rimMat)
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
    if (moveX !== 0 || moveZ !== 0) {
      this.dirX = moveX
      this.dirZ = moveZ
      this.x += moveX * this.speed * dt
      this.z += moveZ * this.speed * dt
    }
    const lim = mapHalf - boundary - this.radius
    this.x = Math.max(-lim, Math.min(lim, this.x))
    this.z = Math.max(-lim, Math.min(lim, this.z))
    this.mesh.position.set(this.x, 0, this.z)
    // Subtle rim pulse
    const pulse = 0.85 + Math.sin(performance.now() * 0.006) * 0.08
    this.rim.scale.setScalar(pulse)
  }

  reset(x = 0, z = -90): void {
    this.mass = M0
    this.radius = radiusFromMass(M0)
    this.level = 1
    this.x = x
    this.z = z
    this.dirX = 0
    this.dirZ = 1
    this.speedBoost = 0
    this.boostTimer = 0
    this.syncVisual()
  }
}
