import * as THREE from 'three'
import { TIERS, MAP_HALF, MAP_SIZE, type TierDef } from './constants'
import type { Eatable } from './types'
import { SpatialHash } from './SpatialHash'

let nextId = 1

function rand(a: number, b: number): number {
  return a + Math.random() * (b - a)
}

function pickReward(tier: TierDef): number {
  return rand(tier.massRewardMin, tier.massRewardMax)
}

/** Object quotas: ~65% of PRD 4.3 (within the 60–80% target band) */
const QUOTAS: Record<string, [number, number, number, number, number]> = {
  // L1-2, L3-4, L5-6, L7-8, L9-10   (PRD: S 80/35/4/0/0 · W 40/50/25/12/0 · E 30/45/30/18/6 · N 25/40/28/10/2 · L 15/10/8/4/2)
  S: [52, 23, 3, 0, 0],
  W: [26, 33, 16, 8, 0],
  E: [20, 29, 20, 12, 4],
  N: [16, 26, 18, 7, 1],
  L: [10, 7, 5, 3, 2],
}

export class World {
  group = new THREE.Group()
  objects: Eatable[] = []
  hash = new SpatialHash(12)
  private mats: Record<string, THREE.MeshLambertMaterial> = {}
  private groundMat: THREE.MeshLambertMaterial
  private roadMat: THREE.MeshLambertMaterial

  constructor(scene: THREE.Scene) {
    this.groundMat = new THREE.MeshLambertMaterial({ color: 0x3d4a3a })
    this.roadMat = new THREE.MeshLambertMaterial({ color: 0x3a3f4a })
    scene.add(this.group)
    this.buildStaticCity()
    this.spawnObjects()
    this.hash.rebuild(this.objects)
  }

  private mat(hex: number): THREE.MeshLambertMaterial {
    const key = hex.toString(16)
    if (!this.mats[key]) {
      this.mats[key] = new THREE.MeshLambertMaterial({ color: hex })
    }
    return this.mats[key]
  }

  private buildStaticCity(): void {
    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(MAP_SIZE + 16, MAP_SIZE + 16),
      this.groundMat,
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = 0
    this.group.add(ground)

    // Zone tint patches
    const zones: { x: number; z: number; w: number; d: number; c: number }[] = [
      { x: 0, z: -80, w: 240, d: 80, c: 0x4a5c3a }, // S park-ish
      { x: -60, z: 0, w: 120, d: 80, c: 0x4a6b4a }, // W residential green
      { x: 60, z: 0, w: 120, d: 80, c: 0x3a4555 }, // E commercial
      { x: -50, z: 80, w: 140, d: 80, c: 0x555045 }, // N industrial
      { x: 70, z: 80, w: 100, d: 80, c: 0x3a5548 }, // Landmark park
    ]
    for (const z of zones) {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(z.w, z.d),
        new THREE.MeshLambertMaterial({ color: z.c }),
      )
      m.rotation.x = -Math.PI / 2
      m.position.set(z.x, 0.01, z.z)
      this.group.add(m)
    }

    // Road grid
    const roadW = 10
    const spacing = 40
    for (let i = -MAP_HALF + 20; i <= MAP_HALF - 20; i += spacing) {
      // NS roads
      const ns = new THREE.Mesh(new THREE.PlaneGeometry(roadW, MAP_SIZE - 16), this.roadMat)
      ns.rotation.x = -Math.PI / 2
      ns.position.set(i, 0.02, 0)
      this.group.add(ns)
      // EW roads
      const ew = new THREE.Mesh(new THREE.PlaneGeometry(MAP_SIZE - 16, roadW), this.roadMat)
      ew.rotation.x = -Math.PI / 2
      ew.position.set(0, 0.02, i)
      this.group.add(ew)
    }

    // Boundary walls (visual)
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x1e293b })
    const wallH = 4
    const edges = [
      { x: 0, z: -MAP_HALF - 2, w: MAP_SIZE + 20, d: 4 },
      { x: 0, z: MAP_HALF + 2, w: MAP_SIZE + 20, d: 4 },
      { x: -MAP_HALF - 2, z: 0, w: 4, d: MAP_SIZE + 20 },
      { x: MAP_HALF + 2, z: 0, w: 4, d: MAP_SIZE + 20 },
    ]
    for (const e of edges) {
      const w = new THREE.Mesh(new THREE.BoxGeometry(e.w, wallH, e.d), wallMat)
      w.position.set(e.x, wallH / 2, e.z)
      this.group.add(w)
    }

    // Decorative static blocks (non-eatable scenery fillers in background density)
    this.scatterDecor()
  }

  /** Park trees: pure decoration, kept off roads and the spawn clearing */
  private scatterDecor(): void {
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x6b4a2f })
    const leafMat = new THREE.MeshLambertMaterial({ color: 0x2f6b3a })
    let placed = 0
    for (let i = 0; i < 400 && placed < 90; i++) {
      const x = rand(-112, 112)
      const z = rand(-112, 112)
      if (Math.hypot(x, z + 90) < 18) continue // keep spawn clear
      if (Math.abs(x % 40) < 8 || Math.abs(z % 40) < 8) continue // keep roads clear
      const h = rand(1.6, 2.6)
      const tree = new THREE.Group()
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, h, 6), trunkMat)
      trunk.position.y = h / 2
      tree.add(trunk)
      const crown = new THREE.Mesh(new THREE.ConeGeometry(rand(0.9, 1.4), h * 1.6, 7), leafMat)
      crown.position.y = h + h * 0.7
      tree.add(crown)
      tree.position.set(x, 0, z)
      this.group.add(tree)
      placed++
    }
  }

  private zoneBounds(zone: string): { x0: number; x1: number; z0: number; z1: number } {
    switch (zone) {
      case 'S':
        return { x0: -110, x1: 110, z0: -115, z1: -42 }
      case 'W':
        return { x0: -115, x1: -5, z0: -38, z1: 38 }
      case 'E':
        return { x0: 5, x1: 115, z0: -38, z1: 38 }
      case 'N':
        return { x0: -115, x1: 15, z0: 42, z1: 115 }
      case 'L':
        return { x0: 25, x1: 115, z0: 42, z1: 115 }
      default:
        return { x0: -50, x1: 50, z0: -50, z1: 50 }
    }
  }

  private spawnObjects(): void {
    for (const zone of Object.keys(QUOTAS)) {
      const q = QUOTAS[zone]
      const pairs: [number, number][] = [
        [1, q[0]],
        [3, q[1]],
        [5, q[2]],
        [7, q[3]],
        [9, q[4]],
      ]
      for (const [baseLv, count] of pairs) {
        for (let i = 0; i < count; i++) {
          // Split pair into two adjacent tiers roughly
          const tierLv = baseLv + (i % 2 === 0 ? 0 : 1)
          const clamped = Math.min(10, Math.max(1, tierLv))
          // For odd counts of L9-10 in landmark, ensure one true L10 landmark
          this.spawnOne(zone, clamped, false)
        }
      }
    }
    // Ensure main landmark (TV tower)
    this.spawnOne('L', 10, true)

    // Guaranteed starter cluster: first swallows within seconds of spawning
    for (let i = 0; i < 14; i++) {
      const ang = (i / 14) * Math.PI * 2
      const r = 7 + (i % 3) * 3
      const tier = i % 3 === 2 ? 2 : 1
      this.spawnOneAt(Math.cos(ang) * r, -90 + Math.sin(ang) * r, tier)
    }

    // Clear spawn area of >L4
    for (const o of this.objects) {
      if (Math.hypot(o.x - 0, o.z - -90) < 15 && o.tier.level > 4) {
        o.state = 'digested'
        o.mesh.visible = false
      }
    }
    this.objects = this.objects.filter((o) => o.state !== 'digested')
  }

  private spawnOneAt(x: number, z: number, tierLevel: number): void {
    this.spawnOne('S', tierLevel, false, x, z)
  }

  private spawnOne(zone: string, tierLevel: number, forceLandmark: boolean, fixedX?: number, fixedZ?: number): void {
    const tier = TIERS[tierLevel - 1]
    const b = this.zoneBounds(zone)
    let x = fixedX ?? rand(b.x0, b.x1)
    let z = fixedZ ?? rand(b.z0, b.z1)
    if (fixedX !== undefined) {
      // fixed-position spawn: skip separation sampling
    } else if (forceLandmark) {
      x = 75
      z = 85
    } else {
      // Rejection sampling: keep objects from stacking inside each other
      const dims = this.dimsFor(tier, false)
      const myR = Math.max(dims.hw, dims.hd)
      for (let attempt = 0; attempt < 12; attempt++) {
        const cx = rand(b.x0, b.x1)
        const cz = rand(b.z0, b.z1)
        let ok = true
        for (const o of this.objects) {
          const oR = Math.max(o.hw, o.hd)
          if (Math.hypot(cx - o.x, cz - o.z) < (myR + oR) * 0.9 + 0.4) {
            ok = false
            break
          }
        }
        x = cx
        z = cz
        if (ok) break
      }
    }
    // Avoid roads center slightly
    const mesh = this.createMesh(tier, forceLandmark)
    // Clone materials per object: highlight/emissive effects must not leak
    // between objects that would otherwise share a cached material.
    mesh.traverse((c) => {
      const m = c as THREE.Mesh
      if (m.isMesh) m.material = (m.material as THREE.Material).clone()
    })
    const { hw, hd, height, isCircle } = this.dimsFor(tier, forceLandmark)
    mesh.position.set(x, height / 2, z)
    this.group.add(mesh)

    const obj: Eatable = {
      id: nextId++,
      tier,
      x,
      z,
      hw,
      hd,
      height,
      isCircle,
      isLandmark: forceLandmark || tier.level === 10,
      rewardMass: forceLandmark ? 6500 : pickReward(tier),
      state: 'idle',
      attractTimer: 0,
      swallowTimer: 0,
      swallowDuration: 0.25 + tier.level * 0.03,
      mesh,
      baseScale: 1,
      origX: x,
      origZ: z,
      velX: 0,
      velZ: 0,
      highlight: false,
    }
    this.objects.push(obj)
  }

  private dimsFor(tier: TierDef, landmark: boolean): { hw: number; hd: number; height: number; isCircle: boolean } {
    if (landmark) return { hw: 3, hd: 3, height: 48, isCircle: false }
    switch (tier.level) {
      case 1:
        return { hw: 0.35, hd: 0.35, height: 0.5, isCircle: true }
      case 2:
        return { hw: 0.4, hd: 0.4, height: 0.9, isCircle: true }
      case 3:
        return { hw: 0.6, hd: 1.2, height: 0.8, isCircle: false }
      case 4:
        return { hw: 1.0, hd: 2.2, height: 1.0, isCircle: false }
      case 5:
        return { hw: 1.4, hd: 4.0, height: 1.6, isCircle: false }
      case 6:
        return { hw: 3.5, hd: 3.5, height: 4, isCircle: false }
      case 7:
        return { hw: 5, hd: 6, height: 14, isCircle: false }
      case 8:
        return { hw: 10, hd: 12, height: 12, isCircle: false }
      case 9:
        return { hw: 8, hd: 8, height: 36, isCircle: false }
      case 10:
        return { hw: 4, hd: 4, height: 42, isCircle: false }
      default:
        return { hw: 1, hd: 1, height: 1, isCircle: true }
    }
  }

  private createMesh(tier: TierDef, landmark: boolean): THREE.Object3D {
    const g = new THREE.Group()
    const color = landmark ? 0xfbbf24 : tier.color
    const mat = this.mat(color)
    const d = this.dimsFor(tier, landmark)

    if (landmark) {
      // TV tower: shaft + observation + tip
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 2.2, 36, 8), mat)
      shaft.position.y = 18
      g.add(shaft)
      const pod = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, 3, 8), this.mat(0xf59e0b))
      pod.position.y = 30
      g.add(pod)
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.6, 10, 6), this.mat(0xe2e8f0))
      tip.position.y = 40
      g.add(tip)
      return g
    }

    if (tier.level <= 2) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(d.hw * 2, d.height, d.hd * 2),
        mat,
      )
      m.position.y = 0
      g.add(m)
    } else if (tier.level <= 5) {
      // Vehicles
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(d.hw * 2, d.height * 0.7, d.hd * 2),
        mat,
      )
      body.position.y = d.height * 0.15
      g.add(body)
      const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(d.hw * 1.6, d.height * 0.5, d.hd * 0.8),
        this.mat(0x94a3b8),
      )
      cabin.position.set(0, d.height * 0.55, -d.hd * 0.2)
      g.add(cabin)
    } else {
      // Buildings
      const b = new THREE.Mesh(
        new THREE.BoxGeometry(d.hw * 2, d.height, d.hd * 2),
        mat,
      )
      b.position.y = 0
      g.add(b)
      // Window strips
      if (tier.level >= 7) {
        const win = new THREE.Mesh(
          new THREE.BoxGeometry(d.hw * 1.7, d.height * 0.85, 0.15),
          this.mat(0x93c5fd),
        )
        win.position.set(0, 0, d.hd + 0.05)
        g.add(win)
      }
    }
    return g
  }

  rebuildHash(): void {
    this.hash.rebuild(this.objects)
  }

  reset(): void {
    for (const o of this.objects) {
      this.group.remove(o.mesh)
      o.mesh.traverse((c) => {
        const m = c as THREE.Mesh
        if (m.geometry) m.geometry.dispose()
        const mat = m.material as THREE.Material | undefined
        if (mat) mat.dispose()
      })
    }
    this.objects = []
    nextId = 1
    this.spawnObjects()
    this.hash.rebuild(this.objects)
  }

  /** Separate player circle from blocking AABB */
  resolveBlock(
    px: number,
    pz: number,
    pr: number,
    obj: Eatable,
  ): { x: number; z: number } | null {
    // Closest point on AABB to circle center
    const cx = Math.max(obj.x - obj.hw, Math.min(px, obj.x + obj.hw))
    const cz = Math.max(obj.z - obj.hd, Math.min(pz, obj.z + obj.hd))
    let dx = px - cx
    let dz = pz - cz
    const dist = Math.hypot(dx, dz)
    if (dist >= pr || dist < 1e-6) {
      // If center inside AABB
      if (px >= obj.x - obj.hw && px <= obj.x + obj.hw && pz >= obj.z - obj.hd && pz <= obj.z + obj.hd) {
        const left = px - (obj.x - obj.hw)
        const right = obj.x + obj.hw - px
        const top = pz - (obj.z - obj.hd)
        const bot = obj.z + obj.hd - pz
        const m = Math.min(left, right, top, bot)
        if (m === left) return { x: obj.x - obj.hw - pr, z: pz }
        if (m === right) return { x: obj.x + obj.hw + pr, z: pz }
        if (m === top) return { x: px, z: obj.z - obj.hd - pr }
        return { x: px, z: obj.z + obj.hd + pr }
      }
      return null
    }
    const push = (pr - dist) / dist
    return { x: px + dx * push, z: pz + dz * push }
  }
}
