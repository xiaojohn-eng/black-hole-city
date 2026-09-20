import * as THREE from 'three'
import {
  ATTRACT_ACCEL,
  ATTRACT_FACTOR,
  ATTRACT_TIMEOUT,
  MAX_SWALLOWING,
  SWALLOW_RADIUS_FACTOR,
} from './constants'
import type { Player } from './Player'
import type { World } from './World'
import type { AimHint, Eatable } from './types'
import { missingHint, swallowBreakdown } from './swallowCheck'
import { GUARD_NEED, guardRing, updateGuardOrbit } from './guardOrbit'

export interface SwallowEvents {
  onDigested: (obj: Eatable) => void
  onBump: (obj: Eatable, hint: AimHint) => void
  onGuardComplete: (obj: Eatable) => void
  onVisit: (obj: Eatable) => void
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
  aimHint: AimHint | null = null

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

    const attractR = Math.max(player.radius * ATTRACT_FACTOR, player.radius + 0.6)
    const nearby = world.hash.query(player.x, player.z, Math.max(attractR, player.radius) + 16)

    this.aimHint = this.pickAim(player, nearby)

    for (const obj of nearby) {
      if (obj.state === 'digested') continue

      if (obj.interact === 'guard') {
        this.updateGuard(dt, obj, player, world)
        continue
      }
      if (obj.interact === 'visit' || obj.interact === 'eco') {
        this.updateVisit(obj, player, world)
        continue
      }

      const dx = obj.x - player.x
      const dz = obj.z - player.z
      const dist = Math.hypot(dx, dz)
      const edgeDist = dist - (obj.isCircle ? obj.hw : Math.min(obj.hw, obj.hd) * 0.7)
      const br = swallowBreakdown(player.radius, player.mass, obj.tier, this.threshScale)
      const can = br.can

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
        const hit = this.hitsPlayer(player, obj, dist)
        if (hit) {
          this.blockAndBump(player, obj, world, br)
        }
      }
    }

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

  private pickAim(player: Player, nearby: Eatable[]): AimHint | null {
    let best: Eatable | null = null
    let bestD = 1e9
    for (const obj of nearby) {
      if (obj.state === 'digested') continue
      const d = Math.hypot(obj.x - player.x, obj.z - player.z)
      if (d < bestD) {
        bestD = d
        best = obj
      }
    }
    if (!best || bestD > player.radius * ATTRACT_FACTOR + 14) return null
    const br = swallowBreakdown(player.radius, player.mass, best.tier, this.threshScale)
    return {
      name: best.name || best.tier.name,
      interact: best.interact,
      sizeOk: br.sizeOk,
      massOk: br.massOk,
      can: best.interact === 'swallow' ? br.can : false,
      sizeHave: br.sizeHave,
      sizeNeed: br.sizeNeed,
      massHave: br.massHave,
      massNeed: br.massNeed,
      missing:
        best.interact === 'guard'
          ? best.guardDone
            ? '守护已完成'
            : '请绕行一周致敬（不可归档）'
          : best.interact === 'visit' || best.interact === 'eco'
            ? best.visitDone
              ? '参观记忆已点亮'
              : '走近即可参观（不可归档）'
            : missingHint(br),
      guardProgress: best.interact === 'guard' ? Math.min(1, best.guardAcc / GUARD_NEED) : 0,
    }
  }

  private hitsPlayer(player: Player, obj: Eatable, dist: number): boolean {
    return (
      dist < player.radius + (obj.isCircle ? obj.hw : 0) ||
      (!obj.isCircle &&
        player.x + player.radius > obj.x - obj.hw &&
        player.x - player.radius < obj.x + obj.hw &&
        player.z + player.radius > obj.z - obj.hd &&
        player.z - player.radius < obj.z + obj.hd)
    )
  }

  private blockAndBump(player: Player, obj: Eatable, world: World, br: ReturnType<typeof swallowBreakdown>): void {
    const pushed = world.resolveBlock(player.x, player.z, player.radius, obj)
    if (pushed) {
      player.x = pushed.x
      player.z = pushed.z
      player.mesh.position.set(player.x, 0, player.z)
    }
    if (this.bumpCooldown <= 0) {
      this.bumpCooldown = 0.18
      const hint: AimHint = {
        name: obj.name || obj.tier.name,
        interact: obj.interact,
        sizeOk: br.sizeOk,
        massOk: br.massOk,
        can: false,
        sizeHave: br.sizeHave,
        sizeNeed: br.sizeNeed,
        massHave: br.massHave,
        massNeed: br.massNeed,
        missing:
          obj.interact === 'guard'
            ? '这里不能归档，请绕行守护'
            : obj.interact === 'visit'
              ? '这里请参观，不要冲进去'
              : missingHint(br),
        guardProgress: obj.guardAcc / GUARD_NEED,
      }
      this.events.onBump(obj, hint)
      if (this.lockIcon && obj.interact === 'swallow') this.showLock(obj)
    }
  }

  private updateGuard(dt: number, obj: Eatable, player: Player, world: World): void {
    void dt
    obj.highlight = false
    this.applyHighlight(obj)
    const ring = guardRing(obj.hw, obj.hd)
    const prev = obj.lastGuardAngle ?? Math.atan2(player.z - obj.z, player.x - obj.x)
    const orbit = updateGuardOrbit(prev, player.x, player.z, obj.x, obj.z, ring.inner, ring.outer)
    obj.lastGuardAngle = orbit.angle
    if (!obj.guardDone && orbit.inRing) {
      obj.guardAcc += orbit.delta
      this.tintGuardRing(obj, Math.min(1, obj.guardAcc / GUARD_NEED))
      if (obj.guardAcc >= GUARD_NEED) {
        obj.guardDone = true
        obj.guardAcc = GUARD_NEED
        this.events.onGuardComplete(obj)
      }
    }
    const dist = Math.hypot(obj.x - player.x, obj.z - obj.z)
    if (this.hitsPlayer(player, obj, dist)) {
      const br = swallowBreakdown(player.radius, player.mass, obj.tier, this.threshScale)
      this.blockAndBump(player, obj, world, br)
    }
  }

  private tintGuardRing(obj: Eatable, t: number): void {
    obj.mesh.traverse((c) => {
      if (c.name !== '__guardRing') return
      const mesh = c as THREE.Mesh
      const mat = mesh.material as THREE.MeshBasicMaterial
      if (mat.color) {
        mat.opacity = 0.35 + t * 0.5
        mat.color.setHex(t >= 1 ? 0xfde68a : 0xfbbf24)
      }
    })
  }

  private updateVisit(obj: Eatable, player: Player, world: World): void {
    obj.highlight = !obj.visitDone && this.outlineHint
    this.applyHighlight(obj)
    const dist = Math.hypot(obj.x - player.x, obj.z - player.z)
    const near = dist < player.radius + Math.max(obj.hw, obj.hd) + 6
    if (near && !obj.visitDone) {
      obj.visitDone = true
      this.events.onVisit(obj)
    }
    if (this.hitsPlayer(player, obj, dist)) {
      const br = swallowBreakdown(player.radius, player.mass, obj.tier, this.threshScale)
      this.blockAndBump(player, obj, world, br)
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
    let entry = this.lockSprites.get(obj.id)
    if (!entry) {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')!
      ctx.fillStyle = '#fb923c'
      ctx.font = 'bold 42px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('!', 32, 34)
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
    const rec = this.rings.find((r) => r.mesh === ring)!
    rec.ttl = 0.45
    rec.dur = 0.45
    rec.mesh.userData.maxR = Math.max(1.5, radius * 2.2)
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
    if (obj.interact !== 'swallow') return
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
    obj.mesh.position.y = (obj.height / 2) * (1 - t)

    if (t >= 1) {
      obj.state = 'digested'
      obj.mesh.visible = false
      this.swallowing = Math.max(0, this.swallowing - 1)
      this.spawnRing(obj.x, obj.z, player.radius)
      this.events.onDigested(obj)
    }
  }

  dispose(): void {
    for (const entry of this.lockSprites.values()) {
      this.scene.remove(entry.sprite)
      entry.sprite.material.map?.dispose()
      entry.sprite.material.dispose()
    }
    this.lockSprites.clear()
    for (const r of this.rings) {
      this.scene.remove(r.mesh)
      r.mesh.geometry.dispose()
      ;(r.mesh.material as THREE.Material).dispose()
    }
    this.rings = []
    this.swallowing = 0
    this.aimHint = null
  }
}
