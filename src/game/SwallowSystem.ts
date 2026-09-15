import * as THREE from 'three'
import {
  ATTRACT_ACCEL,
  ATTRACT_FACTOR,
  ATTRACT_TIMEOUT,
  MAX_SWALLOWING,
  SWALLOW_RADIUS_FACTOR,
  canSwallow,
} from './constants'
import type { Player } from './Player'
import type { World } from './World'
import type { Eatable } from './types'

export interface SwallowEvents {
  onDigested: (obj: Eatable) => void
  onBump: (obj: Eatable) => void
}

export class SwallowSystem {
  private swallowing = 0
  private bumpCooldown = 0
  private events: SwallowEvents
  private threshScale: number
  outlineHint: boolean
  lockIcon: boolean
  private lockSprites = new Map<number, { sprite: THREE.Sprite; ttl: number }>()
  private rings: { mesh: THREE.Mesh; ttl: number; dur: number }[] = []
  private scene: THREE.Scene

  constructor(scene: THREE.Scene, events: SwallowEvents, threshScale = 1) {
    this.scene = scene
    this.events = events
    this.threshScale = threshScale
    this.outlineHint = true
    this.lockIcon = true
  }

  setThreshScale(s: number): void {
    this.threshScale = s
  }

  update(dt: number, player: Player, world: World): void {
    if (this.bumpCooldown > 0) this.bumpCooldown -= dt
    this.updateFx(dt)

    // Minimum reach so the early game never feels like pixel-hunting;
    // at higher tiers the radius-scaled term dominates.
    const attractR = Math.max(player.radius * ATTRACT_FACTOR, player.radius + 0.6)
    const nearby = world.hash.query(player.x, player.z, Math.max(attractR, player.radius) + 8)

    for (const obj of nearby) {
      if (obj.state === 'digested') continue

      const dx = obj.x - player.x
      const dz = obj.z - player.z
      const dist = Math.hypot(dx, dz)
      const edgeDist = dist - (obj.isCircle ? obj.hw : Math.min(obj.hw, obj.hd) * 0.7)
      const can = canSwallow(player.radius, player.mass, obj.tier, this.threshScale)

      // Highlight
      obj.highlight = can && this.outlineHint
      this.applyHighlight(obj)

      if (obj.state === 'swallowing') {
        this.updateSwallowing(dt, obj, player)
        continue
      }

      if (obj.state === 'attracting') {
        this.updateAttracting(dt, obj, player, can)
        continue
      }

      // Idle
      if (can) {
        if (edgeDist < attractR) {
          if (edgeDist < player.radius * 0.15 || dist < player.radius * SWALLOW_RADIUS_FACTOR) {
            this.beginSwallow(obj)
          } else {
            obj.state = 'attracting'
            obj.attractTimer = 0
          }
        }
      } else {
        // Block collision
        const hit =
          dist < player.radius + (obj.isCircle ? obj.hw : 0) ||
          (!obj.isCircle &&
            player.x + player.radius > obj.x - obj.hw &&
            player.x - player.radius < obj.x + obj.hw &&
            player.z + player.radius > obj.z - obj.hd &&
            player.z - player.radius < obj.z + obj.hd)

        if (hit) {
          const pushed = world.resolveBlock(player.x, player.z, player.radius, obj)
          if (pushed) {
            player.x = pushed.x
            player.z = pushed.z
            player.mesh.position.set(player.x, 0, player.z)
          }
          if (this.bumpCooldown <= 0) {
            this.bumpCooldown = 0.15
            this.events.onBump(obj)
            if (this.lockIcon) this.showLock(obj)
          }
        }
      }
    }

    // Continue swallowing for objects not in nearby (edge case)
    for (const obj of world.objects) {
      if (obj.state === 'swallowing' && !nearby.includes(obj)) {
        this.updateSwallowing(dt, obj, player)
      }
      if (obj.state === 'attracting' && !nearby.includes(obj)) {
        obj.state = 'idle'
        obj.attractTimer = 0
        obj.mesh.position.x = obj.origX
        obj.mesh.position.z = obj.origZ
        obj.x = obj.origX
        obj.z = obj.origZ
        obj.mesh.scale.setScalar(obj.baseScale)
      }
    }
  }

  private applyHighlight(obj: Eatable): void {
    obj.mesh.traverse((c) => {
      const m = c as THREE.Mesh
      if (m.isMesh && m.material && (m.material as THREE.MeshLambertMaterial).emissive) {
        const mat = m.material as THREE.MeshLambertMaterial
        mat.emissive.setHex(obj.highlight ? 0x134e4a : 0x000000)
        mat.emissiveIntensity = obj.highlight ? 0.45 : 0
      }
    })
  }

  private showLock(obj: Eatable): void {
    // Simple canvas sprite
    let entry = this.lockSprites.get(obj.id)
    if (!entry) {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')!
      ctx.fillStyle = '#ef4444'
      ctx.font = 'bold 48px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('🔒', 32, 34)
      const tex = new THREE.CanvasTexture(canvas)
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false })
      const sprite = new THREE.Sprite(mat)
      sprite.scale.set(2.5, 2.5, 1)
      entry = { sprite, ttl: 0 }
      this.lockSprites.set(obj.id, entry)
      this.scene.add(sprite)
    }
    entry.sprite.position.set(obj.x, obj.height + 2, obj.z)
    entry.sprite.visible = true
    entry.ttl = 0.6
  }

  /** Expanding digest ring — juice for every swallowed object */
  private spawnRing(x: number, z: number, radius: number): void {
    let ring = this.rings.find((r) => r.ttl <= 0)?.mesh
    if (!ring) {
      const geo = new THREE.RingGeometry(0.85, 1, 40)
      const mat = new THREE.MeshBasicMaterial({
        color: 0x2dd4bf,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
      })
      ring = new THREE.Mesh(geo, mat)
      ring.rotation.x = -Math.PI / 2
      this.scene.add(ring)
      this.rings.push({ mesh: ring, ttl: 0, dur: 0 })
    }
    ring.position.set(x, 0.09, z)
    ring.visible = true
    const r = this.rings.find((r) => r.mesh === ring)!
    r.ttl = 0.45
    r.dur = 0.45
    r.mesh.userData.maxR = Math.max(1.5, radius * 2.2)
  }

  private updateFx(dt: number): void {
    for (const entry of this.lockSprites.values()) {
      if (entry.ttl > 0) {
        entry.ttl -= dt
        if (entry.ttl <= 0) entry.sprite.visible = false
      }
    }
    for (const r of this.rings) {
      if (r.ttl <= 0) continue
      r.ttl -= dt
      if (r.ttl <= 0) {
        r.mesh.visible = false
        continue
      }
      const t = 1 - r.ttl / r.dur
      const maxR = (r.mesh.userData.maxR as number) ?? 2
      r.mesh.scale.setScalar(0.4 + t * maxR)
      ;(r.mesh.material as THREE.MeshBasicMaterial).opacity = 0.8 * (1 - t)
    }
  }

  private beginSwallow(obj: Eatable): void {
    if (this.swallowing >= MAX_SWALLOWING) return
    obj.state = 'swallowing'
    obj.swallowTimer = 0
    this.swallowing++
  }

  private updateAttracting(dt: number, obj: Eatable, player: Player, can: boolean): void {
    if (!can) {
      obj.state = 'idle'
      return
    }
    obj.attractTimer += dt
    const dx = player.x - obj.x
    const dz = player.z - obj.z
    const dist = Math.hypot(dx, dz) || 1
    const ax = (dx / dist) * ATTRACT_ACCEL
    const az = (dz / dist) * ATTRACT_ACCEL
    obj.velX += ax * dt
    obj.velZ += az * dt
    const spd = Math.hypot(obj.velX, obj.velZ)
    if (spd > 18) {
      obj.velX = (obj.velX / spd) * 18
      obj.velZ = (obj.velZ / spd) * 18
    }
    obj.x += obj.velX * dt
    obj.z += obj.velZ * dt
    const scale = Math.max(0.7, 1 - obj.attractTimer * 0.25)
    obj.mesh.scale.setScalar(obj.baseScale * scale)
    obj.mesh.position.x = obj.x
    obj.mesh.position.z = obj.z

    if (dist < player.radius * SWALLOW_RADIUS_FACTOR) {
      this.beginSwallow(obj)
      return
    }
    if (obj.attractTimer > ATTRACT_TIMEOUT) {
      obj.state = 'idle'
      obj.attractTimer = 0
      obj.velX = 0
      obj.velZ = 0
      obj.x = obj.origX
      obj.z = obj.origZ
      obj.mesh.position.x = obj.x
      obj.mesh.position.z = obj.z
      obj.mesh.scale.setScalar(obj.baseScale)
    }
  }

  private updateSwallowing(dt: number, obj: Eatable, player: Player): void {
    obj.swallowTimer += dt
    const t = Math.min(1, obj.swallowTimer / obj.swallowDuration)
    const scale = (1 - t) * 0.7
    obj.mesh.scale.setScalar(obj.baseScale * scale)
    obj.mesh.rotation.y += dt * 8
    obj.x += (player.x - obj.x) * Math.min(1, 10 * dt)
    obj.z += (player.z - obj.z) * Math.min(1, 10 * dt)
    obj.mesh.position.x = obj.x
    obj.mesh.position.z = obj.z
    obj.mesh.position.y = obj.height / 2 * (1 - t)

    if (t >= 1) {
      obj.state = 'digested'
      obj.mesh.visible = false
      this.swallowing = Math.max(0, this.swallowing - 1)
      this.spawnRing(obj.x, obj.z, player.radius)
      // mass applied by Game via onDigested
      this.events.onDigested(obj)
    }
  }

  dispose(): void {
    for (const entry of this.lockSprites.values()) {
      this.scene.remove(entry.sprite)
    }
    this.lockSprites.clear()
    for (const r of this.rings) {
      this.scene.remove(r.mesh)
      r.mesh.geometry.dispose()
      ;(r.mesh.material as THREE.Material).dispose()
    }
    this.rings = []
  }
}
