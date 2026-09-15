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

/** Scaled MVP quotas (~35–45% of PRD) but zones recognizable */
const QUOTAS: Record<string, [number, number, number, number, number]> = {
  // L1-2, L3-4, L5-6, L7-8, L9-10
  S: [36, 16, 2, 0, 0],
  W: [18, 22, 12, 6, 0],
  E: [14, 20, 14, 8, 3],
  N: [12, 18, 12, 5, 1],
  L: [8, 6, 4, 2, 2],
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

  private scatterDecor(): void {
    const decorMat = new THREE.MeshLambertMaterial({ color: 0x475569 })
    for (let i = 0; i < 40; i++) {
      const x = rand(-110, 110)
      const z = rand(-110, 110)
      if (Math.hypot(x, z + 90) < 18) continue // keep spawn clear
      const h = rand(1, 3)
      const box = new THREE.Mesh(new THREE.BoxGeometry(rand(1, 2), h, rand(1, 2)), decorMat)
      box.position.set(x, h / 2, z)
      this.group.add(box)
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

    // Clear spawn area of >L4
    for (const o of this.objects) {
      if (Math.hypot(o.x - 0, o.z - -90) < 15 && o.tier.level > 4) {
        o.state = 'digested'
        o.mesh.visible = false
      }
    }
    this.objects = this.objects.filter((o) => o.state !== 'digested')
  }

  private spawnOne(zone: string, tierLevel: number, forceLandmark: boolean): void {
    const tier = TIERS[tierLevel - 1]
    const b = this.zoneBounds(zone)
    let x = rand(b.x0, b.x1)
    let z = rand(b.z0, b.z1)
    if (forceLandmark) {
      x = 75
      z = 85
    }
    // Avoid roads center slightly
    const mesh = this.createMesh(tier, forceLandmark)
    const { hw, hd, height, isCircle } = this.dimsFor(tier, forceLandmark)
    mesh.position.set(x, isCircle ? height / 2 : height / 2, z)
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
        if ((c as THREE.Mesh).geometry) (c as THREE.Mesh).geometry.dispose()
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
