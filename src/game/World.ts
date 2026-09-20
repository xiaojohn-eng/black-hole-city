import * as THREE from 'three'
import { TIERS, type TierDef } from './constants'
import type { Eatable, InteractType } from './types'
import { SpatialHash } from './SpatialHash'
import type { LandmarkDef, LayoutDef, LoadedPack, ZoneDef } from '../content/types'
import { createLandmarkMesh, createSiheyuan, landmarkDims } from './LandmarkMeshes'

function rand(a: number, b: number): number {
  return a + Math.random() * (b - a)
}

function pickReward(tier: TierDef): number {
  return rand(tier.massRewardMin, tier.massRewardMax)
}

function hexColor(s: string): number {
  return Number.parseInt(s.replace('#', ''), 16)
}

function disposeObject3D(root: THREE.Object3D, disposeMat: boolean): void {
  root.traverse((c) => {
    const mesh = c as THREE.Mesh
    if (mesh.isMesh) {
      mesh.geometry?.dispose()
      if (disposeMat && mesh.material) {
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
        for (const m of mats) {
          const bm = m as THREE.MeshBasicMaterial
          if (bm.map) bm.map.dispose()
          m.dispose()
        }
      }
    }
    const spr = c as THREE.Sprite
    if (spr.isSprite) {
      spr.material.map?.dispose()
      if (disposeMat) spr.material.dispose()
    }
  })
}

export class World {
  group = new THREE.Group()
  objects: Eatable[] = []
  hash = new SpatialHash(12)
  layout: LayoutDef
  mapSize: number
  mapHalf: number
  packId: string
  private scene: THREE.Scene
  private mats: Record<string, THREE.MeshLambertMaterial> = {}
  private staticRoot = new THREE.Group()
  private dynamicRoot = new THREE.Group()
  private spotsRoot = new THREE.Group()
  private nextId = 1
  private disposed = false

  constructor(scene: THREE.Scene, pack: LoadedPack) {
    this.scene = scene
    this.layout = pack.layout
    this.packId = pack.city.packId
    this.mapSize = pack.layout.mapSize || pack.city.mapSize || 240
    this.mapHalf = this.mapSize / 2
    this.group.add(this.staticRoot)
    this.group.add(this.dynamicRoot)
    this.group.add(this.spotsRoot)
    scene.add(this.group)
    this.buildStaticCity(pack)
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

  private buildStaticCity(pack: LoadedPack): void {
    const pal = pack.city.colorPalette
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(this.mapSize + 16, this.mapSize + 16),
      new THREE.MeshLambertMaterial({ color: hexColor(pal.ground) }),
    )
    ground.rotation.x = -Math.PI / 2
    this.staticRoot.add(ground)

    for (const z of this.layout.zones) {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(z.w, z.d),
        new THREE.MeshLambertMaterial({ color: hexColor(z.color) }),
      )
      m.rotation.x = -Math.PI / 2
      m.position.set(z.x, 0.01, z.z)
      this.staticRoot.add(m)
    }

    const roadMat = new THREE.MeshLambertMaterial({ color: hexColor(pal.road) })
    const style = this.layout.roads.style
    if (style === 'hutong_axis') {
      this.buildBeijingRoads(roadMat)
      this.buildHutongCompounds()
      this.buildAxisRibbon()
    } else if (style === 'jiangnan_water') {
      this.buildGridRoads(roadMat)
      this.buildCanal()
      this.scatterWhiteWalls()
    } else if (style === 'qilou_street') {
      this.buildGridRoads(roadMat)
      this.scatterQilou()
    } else if (style === 'oasis_court') {
      this.buildSparseRoads(roadMat)
      this.scatterFlatRoofs()
    } else if (style === 'northeast_grid') {
      this.buildGridRoads(roadMat)
      this.buildRiverBand(0x7aa0b8, -70)
      this.scatterDecor()
    } else {
      this.buildGridRoads(roadMat)
      this.scatterDecor()
    }

    const wallMat = new THREE.MeshLambertMaterial({ color: 0x1e293b })
    const wallH = 4
    const h = this.mapHalf
    const edges = [
      { x: 0, z: -h - 2, w: this.mapSize + 20, d: 4 },
      { x: 0, z: h + 2, w: this.mapSize + 20, d: 4 },
      { x: -h - 2, z: 0, w: 4, d: this.mapSize + 20 },
      { x: h + 2, z: 0, w: 4, d: this.mapSize + 20 },
    ]
    for (const e of edges) {
      const w = new THREE.Mesh(new THREE.BoxGeometry(e.w, wallH, e.d), wallMat)
      w.position.set(e.x, wallH / 2, e.z)
      this.staticRoot.add(w)
    }
  }

  private buildGridRoads(roadMat: THREE.MeshLambertMaterial): void {
    const roadW = this.layout.roads.width
    const spacing = this.layout.roads.spacing
    for (let i = -this.mapHalf + 20; i <= this.mapHalf - 20; i += spacing) {
      const ns = new THREE.Mesh(new THREE.PlaneGeometry(roadW, this.mapSize - 16), roadMat)
      ns.rotation.x = -Math.PI / 2
      ns.position.set(i, 0.02, 0)
      this.staticRoot.add(ns)
      const ew = new THREE.Mesh(new THREE.PlaneGeometry(this.mapSize - 16, roadW), roadMat)
      ew.rotation.x = -Math.PI / 2
      ew.position.set(0, 0.02, i)
      this.staticRoot.add(ew)
    }
  }

  private buildBeijingRoads(roadMat: THREE.MeshLambertMaterial): void {
    const wide = new THREE.Mesh(new THREE.PlaneGeometry(18, this.mapSize - 24), this.mat(0xc4b49a))
    wide.rotation.x = -Math.PI / 2
    wide.position.set(0, 0.03, 10)
    this.staticRoot.add(wide)
    const redL = new THREE.Mesh(new THREE.PlaneGeometry(1.2, this.mapSize - 28), this.mat(0x9f1239))
    redL.rotation.x = -Math.PI / 2
    redL.position.set(-8.5, 0.04, 10)
    this.staticRoot.add(redL)
    const redR = redL.clone()
    redR.position.set(8.5, 0.04, 10)
    this.staticRoot.add(redR)

    for (const x of [-90, -50, 50, 90]) {
      const ns = new THREE.Mesh(new THREE.PlaneGeometry(8, this.mapSize - 16), roadMat)
      ns.rotation.x = -Math.PI / 2
      ns.position.set(x, 0.02, 0)
      this.staticRoot.add(ns)
    }
    for (const z of [-90, -50, 10, 50, 90]) {
      const ew = new THREE.Mesh(new THREE.PlaneGeometry(this.mapSize - 16, 8), roadMat)
      ew.rotation.x = -Math.PI / 2
      ew.position.set(0, 0.02, z)
      this.staticRoot.add(ew)
    }

    const hutong = this.layout.zones.find((z) => z.id === 'hutong')
    if (hutong) {
      for (let x = hutong.x - hutong.w / 2 + 8; x < hutong.x + hutong.w / 2 - 8; x += 16) {
        const alley = new THREE.Mesh(new THREE.PlaneGeometry(3.2, hutong.d - 8), this.mat(0x57534e))
        alley.rotation.x = -Math.PI / 2
        alley.position.set(x, 0.025, hutong.z)
        this.staticRoot.add(alley)
      }
      for (let z = hutong.z - hutong.d / 2 + 8; z < hutong.z + hutong.d / 2 - 8; z += 16) {
        const alley = new THREE.Mesh(new THREE.PlaneGeometry(hutong.w - 8, 3.2), this.mat(0x57534e))
        alley.rotation.x = -Math.PI / 2
        alley.position.set(hutong.x, 0.025, z)
        this.staticRoot.add(alley)
      }
    }

    const plaza = new THREE.Mesh(new THREE.CircleGeometry(16, 24), this.mat(0x6d7f52))
    plaza.rotation.x = -Math.PI / 2
    plaza.position.set(28, 0.03, -82)
    this.staticRoot.add(plaza)
  }

  private buildAxisRibbon(): void {
    const stone = this.mat(0xd6c4a8)
    for (let z = -20; z <= 110; z += 18) {
      const slab = new THREE.Mesh(new THREE.BoxGeometry(12, 0.25, 14), stone)
      slab.position.set(0, 0.12, z)
      this.staticRoot.add(slab)
    }
  }

  private buildHutongCompounds(): void {
    const hutong = this.layout.zones.find((z) => z.id === 'hutong')
    if (!hutong) return
    const xs = [hutong.x - 28, hutong.x - 10, hutong.x + 10]
    const zs = [hutong.z - 28, hutong.z - 10, hutong.z + 12, hutong.z + 30]
    for (const x of xs) {
      for (const z of zs) {
        if (Math.abs(x) < 22) continue
        const yard = createSiheyuan((hex) => this.mat(hex))
        yard.position.set(x, 0, z)
        this.staticRoot.add(yard)
      }
    }
  }

  private scatterDecor(): void {
    const trunkMat = this.mat(0x6b4a2f)
    const leafMat = this.mat(0x2f6b3a)
    let placed = 0
    for (let i = 0; i < 400 && placed < 90; i++) {
      const x = rand(-112, 112)
      const z = rand(-112, 112)
      if (Math.hypot(x, z + 90) < 18) continue
      if (Math.abs(x % 40) < 8 || Math.abs(z % 40) < 8) continue
      const h = rand(1.6, 2.6)
      const tree = new THREE.Group()
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, h, 6), trunkMat)
      trunk.position.y = h / 2
      tree.add(trunk)
      const crown = new THREE.Mesh(new THREE.ConeGeometry(rand(0.9, 1.4), h * 1.6, 7), leafMat)
      crown.position.y = h + h * 0.7
      tree.add(crown)
      tree.position.set(x, 0, z)
      this.staticRoot.add(tree)
      placed++
    }
  }

  private buildCanal(): void {
    const water = new THREE.Mesh(new THREE.PlaneGeometry(22, this.mapSize - 20), this.mat(0x3b82a8))
    water.rotation.x = -Math.PI / 2
    water.position.set(18, 0.04, 0)
    this.staticRoot.add(water)
    for (const z of [-60, 0, 60]) {
      const bridge = new THREE.Mesh(new THREE.BoxGeometry(26, 0.6, 8), this.mat(0xa8a29e))
      bridge.position.set(18, 0.4, z)
      this.staticRoot.add(bridge)
    }
  }

  private buildRiverBand(color: number, z: number): void {
    const water = new THREE.Mesh(new THREE.PlaneGeometry(this.mapSize - 24, 28), this.mat(color))
    water.rotation.x = -Math.PI / 2
    water.position.set(0, 0.04, z)
    this.staticRoot.add(water)
  }

  private scatterWhiteWalls(): void {
    const wall = this.mat(0xf4f1ea)
    const roof = this.mat(0x1f2937)
    for (const x of [-90, -74, -58, -42]) {
      for (const z of [-20, -4, 12, 28, 44]) {
        const body = new THREE.Mesh(new THREE.BoxGeometry(10, 4, 8), wall)
        body.position.set(x, 2, z)
        this.staticRoot.add(body)
        const r = new THREE.Mesh(new THREE.BoxGeometry(11, 0.7, 9), roof)
        r.position.set(x, 4.4, z)
        this.staticRoot.add(r)
      }
    }
  }

  private scatterQilou(): void {
    const wall = this.mat(0xe8d5b5)
    const col = this.mat(0xd6b48a)
    for (let x = -80; x <= 80; x += 12) {
      const body = new THREE.Mesh(new THREE.BoxGeometry(10, 7, 6), wall)
      body.position.set(x, 3.5, -8)
      this.staticRoot.add(body)
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.6, 3.2, 0.6), col)
      pillar.position.set(x - 4, 1.6, -4.2)
      this.staticRoot.add(pillar)
      const pillar2 = pillar.clone()
      pillar2.position.set(x + 4, 1.6, -4.2)
      this.staticRoot.add(pillar2)
    }
  }

  private buildSparseRoads(roadMat: THREE.MeshLambertMaterial): void {
    const roadW = this.layout.roads.width
    const spacing = Math.max(this.layout.roads.spacing, 48)
    for (let i = -this.mapHalf + 28; i <= this.mapHalf - 28; i += spacing) {
      const ns = new THREE.Mesh(new THREE.PlaneGeometry(roadW, this.mapSize - 24), roadMat)
      ns.rotation.x = -Math.PI / 2
      ns.position.set(i, 0.02, 0)
      this.staticRoot.add(ns)
    }
    const canal = new THREE.Mesh(new THREE.PlaneGeometry(this.mapSize - 40, 10), this.mat(0x0e7490))
    canal.rotation.x = -Math.PI / 2
    canal.position.set(0, 0.03, 20)
    this.staticRoot.add(canal)
  }

  private scatterFlatRoofs(): void {
    const wall = this.mat(0xd6c0a0)
    const roof = this.mat(0xb08968)
    for (const x of [-70, -40, 40, 70]) {
      for (const z of [-30, 0, 40]) {
        const body = new THREE.Mesh(new THREE.BoxGeometry(14, 3.2, 12), wall)
        body.position.set(x, 1.6, z)
        this.staticRoot.add(body)
        const r = new THREE.Mesh(new THREE.BoxGeometry(14.4, 0.35, 12.4), roof)
        r.position.set(x, 3.35, z)
        this.staticRoot.add(r)
      }
    }
  }

  private blockedByCivicAxis(x: number, z: number): boolean {
    const style = this.layout.roads.style
    if (style === 'hutong_axis' && Math.abs(x) < 12) return true
    if (style === 'jiangnan_water' && Math.abs(x - 18) < 12) return true
    if (style === 'northeast_grid' && Math.abs(z + 70) < 14) return true
    return false
  }

  private zoneBounds(zone: ZoneDef): { x0: number; x1: number; z0: number; z1: number } {
    return {
      x0: zone.x - zone.w / 2 + 4,
      x1: zone.x + zone.w / 2 - 4,
      z0: zone.z - zone.d / 2 + 4,
      z1: zone.z + zone.d / 2 - 4,
    }
  }

  private spawnObjects(): void {
    const spawnZone = this.layout.zones.find((z) => z.spawn)
    const sx = spawnZone?.x ?? 0
    const sz = spawnZone ? spawnZone.z - spawnZone.d / 2 + 16 : -90

    for (const zone of this.layout.zones) {
      const quotas = zone.quotas
      for (const key of Object.keys(quotas) as (keyof typeof quotas)[]) {
        const count = quotas[key] ?? 0
        const lv = Number(String(key).slice(1))
        if (!lv || count <= 0) continue
        for (let i = 0; i < count; i++) this.spawnFill(zone, lv)
      }
    }

    for (const lm of this.layout.landmarks) this.spawnLandmark(lm)
    this.sprinkleNearSpawn(sx, sz)

    for (const o of this.objects) {
      if (Math.hypot(o.x - sx, o.z - sz) < 16 && o.tier.level > 4 && o.interact === 'swallow' && !o.isLandmark) {
        o.state = 'digested'
        o.mesh.visible = false
      }
    }
    this.objects = this.objects.filter((o) => o.state !== 'digested')
  }

  private sprinkleNearSpawn(sx: number, sz: number): void {
    for (let i = 0; i < 14; i++) {
      const ang = (i / 14) * Math.PI * 2
      const r = 7 + (i % 3) * 3
      const tier = TIERS[i % 3 === 2 ? 1 : 0]
      const x = sx + Math.cos(ang) * r
      const z = sz + Math.sin(ang) * r
      const mesh = this.createFillMesh(tier)
      this.cloneMeshMaterials(mesh)
      const dims = this.dimsFor(tier, false)
      mesh.position.set(x, dims.height / 2, z)
      this.dynamicRoot.add(mesh)
      this.objects.push(this.makeEatable(tier, x, z, dims, mesh, false, 'swallow', '记忆碎片', null, null))
    }
  }

  private cloneMeshMaterials(root: THREE.Object3D): void {
    root.traverse((c) => {
      const m = c as THREE.Mesh
      if (m.isMesh && m.material) {
        m.material = (m.material as THREE.Material).clone()
      }
    })
  }

  private spawnFill(zone: ZoneDef, tierLevel: number): void {
    const tier = TIERS[Math.min(10, Math.max(1, tierLevel)) - 1]
    const b = this.zoneBounds(zone)
    const dims = this.dimsFor(tier, false)
    const myR = Math.max(dims.hw, dims.hd)
    let x = rand(b.x0, b.x1)
    let z = rand(b.z0, b.z1)
    for (let attempt = 0; attempt < 12; attempt++) {
      const cx = rand(b.x0, b.x1)
      const cz = rand(b.z0, b.z1)
      if (this.blockedByCivicAxis(cx, cz)) continue
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
    if (this.blockedByCivicAxis(x, z)) return
    const mesh = this.createFillMesh(tier)
    this.cloneMeshMaterials(mesh)
    mesh.position.set(x, dims.height / 2, z)
    this.dynamicRoot.add(mesh)
    this.objects.push(this.makeEatable(tier, x, z, dims, mesh, false, 'swallow', zone.name, null, null))
  }

  private spawnLandmark(lm: LandmarkDef): void {
    const tier = TIERS[Math.min(10, Math.max(1, lm.tier)) - 1]
    const mesh = createLandmarkMesh(lm.mesh, (hex) => this.mat(hex))
    const dims = landmarkDims(lm.mesh)
    mesh.position.set(lm.x, 0, lm.z)
    this.dynamicRoot.add(mesh)
    const obj = this.makeEatable(
      tier,
      lm.x,
      lm.z,
      dims,
      mesh,
      true,
      lm.interact,
      lm.name,
      lm.knowledgeCardId ?? null,
      lm.id,
    )
    if (lm.interact === 'swallow' && lm.tier >= 10) obj.rewardMass = 6500
    this.objects.push(obj)
  }

  private makeEatable(
    tier: TierDef,
    x: number,
    z: number,
    dims: { hw: number; hd: number; height: number; isCircle: boolean },
    mesh: THREE.Object3D,
    isLandmark: boolean,
    interact: InteractType,
    name: string,
    knowledgeCardId: string | null,
    landmarkId: string | null,
  ): Eatable {
    return {
      id: this.nextId++,
      tier,
      x,
      z,
      hw: dims.hw,
      hd: dims.hd,
      height: dims.height,
      isCircle: dims.isCircle,
      isLandmark,
      rewardMass: isLandmark && interact === 'swallow' ? 6500 : pickReward(tier),
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
      interact,
      name,
      knowledgeCardId,
      landmarkId,
      guardAcc: 0,
      lastGuardAngle: null,
      visitDone: false,
      guardDone: false,
    }
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

  private createFillMesh(tier: TierDef): THREE.Object3D {
    const g = new THREE.Group()
    const mat = this.mat(tier.color)
    const d = this.dimsFor(tier, false)
    if (tier.level <= 2) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(d.hw * 2, d.height, d.hd * 2), mat)
      g.add(m)
    } else if (tier.level <= 5) {
      const body = new THREE.Mesh(new THREE.BoxGeometry(d.hw * 2, d.height * 0.7, d.hd * 2), mat)
      body.position.y = d.height * 0.15
      g.add(body)
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(d.hw * 1.6, d.height * 0.5, d.hd * 0.8), this.mat(0x94a3b8))
      cabin.position.set(0, d.height * 0.55, -d.hd * 0.2)
      g.add(cabin)
    } else {
      const b = new THREE.Mesh(new THREE.BoxGeometry(d.hw * 2, d.height, d.hd * 2), mat)
      g.add(b)
      if (tier.level >= 7) {
        const win = new THREE.Mesh(new THREE.BoxGeometry(d.hw * 1.7, d.height * 0.85, 0.15), this.mat(0x93c5fd))
        win.position.set(0, 0, d.hd + 0.05)
        g.add(win)
      }
    }
    return g
  }

  leaveSpot(obj: Eatable, color = 0x5eead4): void {
    const r = Math.max(0.7, Math.min(obj.hw, obj.hd) * 0.45)
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(r, 16),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.4, side: THREE.DoubleSide }),
    )
    disc.rotation.x = -Math.PI / 2
    disc.position.set(obj.origX, 0.05, obj.origZ)
    this.spotsRoot.add(disc)
  }

  rebuildHash(): void {
    this.hash.rebuild(this.objects)
  }

  reset(): void {
    if (this.disposed) return
    for (const o of this.objects) {
      this.dynamicRoot.remove(o.mesh)
      disposeObject3D(o.mesh, false)
      o.mesh.traverse((c) => {
        const mesh = c as THREE.Mesh
        if (!mesh.isMesh || !mesh.material) return
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
        for (const m of mats) {
          if (m.type === 'MeshBasicMaterial') {
            const bm = m as THREE.MeshBasicMaterial
            bm.map?.dispose()
            bm.dispose()
          }
        }
      })
    }
    this.objects = []
    while (this.spotsRoot.children.length) {
      const c = this.spotsRoot.children[0]
      this.spotsRoot.remove(c)
      disposeObject3D(c, true)
    }
    this.nextId = 1
    this.spawnObjects()
    this.hash.rebuild(this.objects)
  }

  meshCount(): number {
    let n = 0
    this.group.traverse((c) => {
      if ((c as THREE.Mesh).isMesh) n++
    })
    return n
  }

  dispose(): void {
    if (this.disposed) return
    this.disposed = true
    this.scene.remove(this.group)
    disposeObject3D(this.group, true)
    this.mats = {}
    this.objects = []
    this.hash.clear()
    this.group.clear()
  }

  resolveBlock(px: number, pz: number, pr: number, obj: Eatable): { x: number; z: number } | null {
    const cx = Math.max(obj.x - obj.hw, Math.min(px, obj.x + obj.hw))
    const cz = Math.max(obj.z - obj.hd, Math.min(pz, obj.z + obj.hd))
    let dx = px - cx
    let dz = pz - cz
    const dist = Math.hypot(dx, dz)
    if (dist >= pr || dist < 1e-6) {
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
