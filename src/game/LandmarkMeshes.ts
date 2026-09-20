import * as THREE from 'three'

export type MatFn = (hex: number) => THREE.MeshLambertMaterial

export function createLandmarkMesh(kind: string, mat: MatFn): THREE.Group {
  switch (kind) {
    case 'tiananmen_gate':
      return tiananmen(mat)
    case 'forbidden_city':
      return forbiddenCity(mat)
    case 'temple_of_heaven':
      return templeOfHeaven(mat)
    case 'birds_nest':
      return birdsNest(mat)
    case 'cbd_tower':
      return cbdTower(mat)
    case 'monument_obelisk':
      return monumentObelisk(mat)
    case 'bund_colonnade':
      return bundColonnade(mat)
    case 'oriental_pearl':
      return orientalPearl(mat)
    case 'lujiazui_tower':
      return lujiazuiTower(mat)
    case 'city_god_temple':
      return cityGodTemple(mat)
    case 'flood_monument':
      return floodMonument(mat)
    case 'onion_dome':
      return onionDome(mat)
    case 'central_street':
      return centralStreet(mat)
    case 'ice_castle':
      return iceCastle(mat)
    case 'dragon_tower':
      return dragonTower(mat)
    case 'tv_tower':
    default:
      return tvTower(mat)
  }
}

export function landmarkDims(kind: string): { hw: number; hd: number; height: number; isCircle: boolean } {
  switch (kind) {
    case 'tiananmen_gate':
      return { hw: 16, hd: 6, height: 18, isCircle: false }
    case 'forbidden_city':
      return { hw: 16, hd: 22, height: 16, isCircle: false }
    case 'temple_of_heaven':
      return { hw: 8, hd: 8, height: 22, isCircle: true }
    case 'birds_nest':
      return { hw: 12, hd: 10, height: 14, isCircle: true }
    case 'cbd_tower':
      return { hw: 5, hd: 5, height: 44, isCircle: false }
    case 'monument_obelisk':
      return { hw: 6, hd: 6, height: 28, isCircle: false }
    case 'bund_colonnade':
      return { hw: 18, hd: 6, height: 18, isCircle: false }
    case 'oriental_pearl':
      return { hw: 6, hd: 6, height: 46, isCircle: true }
    case 'lujiazui_tower':
      return { hw: 5, hd: 5, height: 48, isCircle: false }
    case 'city_god_temple':
      return { hw: 8, hd: 8, height: 14, isCircle: false }
    case 'flood_monument':
      return { hw: 7, hd: 7, height: 26, isCircle: false }
    case 'onion_dome':
      return { hw: 8, hd: 8, height: 24, isCircle: false }
    case 'central_street':
      return { hw: 16, hd: 5, height: 12, isCircle: false }
    case 'ice_castle':
      return { hw: 10, hd: 10, height: 18, isCircle: false }
    case 'dragon_tower':
      return { hw: 4, hd: 4, height: 46, isCircle: true }
    default:
      return { hw: 3, hd: 3, height: 48, isCircle: false }
  }
}

function tvTower(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 2.2, 36, 8), mat(0xd4a017))
  shaft.position.y = 18
  g.add(shaft)
  const pod = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, 3, 8), mat(0xf59e0b))
  pod.position.y = 30
  g.add(pod)
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.6, 10, 6), mat(0xe2e8f0))
  tip.position.y = 40
  g.add(tip)
  return g
}

function tiananmen(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const podium = new THREE.Mesh(new THREE.BoxGeometry(34, 3.2, 12), mat(0x7f1d1d))
  podium.position.y = 1.6
  g.add(podium)
  const wall = new THREE.Mesh(new THREE.BoxGeometry(32, 8, 4.5), mat(0x9f1239))
  wall.position.y = 7.2
  g.add(wall)
  for (const ox of [-12, -6, 0, 6, 12]) {
    const door = new THREE.Mesh(new THREE.BoxGeometry(ox === 0 ? 3.2 : 2.4, 4.2, 1.2), mat(0x1c1917))
    door.position.set(ox, 5.2, 2.2)
    g.add(door)
  }
  const tower = new THREE.Mesh(new THREE.BoxGeometry(22, 7, 6), mat(0xb91c1c))
  tower.position.y = 14.2
  g.add(tower)
  const roof = new THREE.Mesh(new THREE.BoxGeometry(24, 1.4, 8), mat(0xeab308))
  roof.position.y = 18.1
  g.add(roof)
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(20, 0.6, 1.2), mat(0xca8a04))
  ridge.position.y = 19
  g.add(ridge)
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(14, 24, 48),
    new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.35, side: THREE.DoubleSide }),
  )
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.08
  ring.name = '__guardRing'
  g.add(ring)
  return g
}

function forbiddenCity(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const court = new THREE.Mesh(new THREE.BoxGeometry(30, 0.4, 42), mat(0xb45309))
  court.position.y = 0.2
  g.add(court)
  const wallMat = mat(0x9f1239)
  const n = new THREE.Mesh(new THREE.BoxGeometry(32, 4, 1.2), wallMat)
  n.position.set(0, 2, 20)
  g.add(n)
  const s = n.clone()
  s.position.set(0, 2, -20)
  g.add(s)
  const e = new THREE.Mesh(new THREE.BoxGeometry(1.2, 4, 42), wallMat)
  e.position.set(15.4, 2, 0)
  g.add(e)
  const w = e.clone()
  w.position.set(-15.4, 2, 0)
  g.add(w)
  const halls = [
    { z: -10, w: 14, h: 6, d: 8 },
    { z: 2, w: 16, h: 8, d: 9 },
    { z: 13, w: 12, h: 7, d: 8 },
  ]
  for (const h of halls) {
    const body = new THREE.Mesh(new THREE.BoxGeometry(h.w, h.h, h.d), mat(0xb91c1c))
    body.position.set(0, h.h / 2 + 0.4, h.z)
    g.add(body)
    const roof = new THREE.Mesh(new THREE.BoxGeometry(h.w + 2, 1.2, h.d + 2), mat(0xeab308))
    roof.position.set(0, h.h + 1.2, h.z)
    g.add(roof)
  }
  return g
}

function templeOfHeaven(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const terrace = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 0.8, 24), mat(0xa8a29e))
  terrace.position.y = 0.4
  g.add(terrace)
  const b1 = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 6.2, 4, 16), mat(0xb91c1c))
  b1.position.y = 2.8
  g.add(b1)
  const r1 = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 0.7, 16), mat(0x1d4ed8))
  r1.position.y = 5.1
  g.add(r1)
  const b2 = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 5, 3.5, 16), mat(0xb91c1c))
  b2.position.y = 7.2
  g.add(b2)
  const r2 = new THREE.Mesh(new THREE.CylinderGeometry(5.6, 5.6, 0.6, 16), mat(0x1d4ed8))
  r2.position.y = 9.1
  g.add(r2)
  const b3 = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 3.6, 3.2, 16), mat(0xb91c1c))
  b3.position.y = 11
  g.add(b3)
  const cap = new THREE.Mesh(new THREE.ConeGeometry(4.2, 5, 16), mat(0x1e3a8a))
  cap.position.y = 15.2
  g.add(cap)
  const gold = new THREE.Mesh(new THREE.SphereGeometry(0.7, 8, 8), mat(0xfbbf24))
  gold.position.y = 18
  g.add(gold)
  return g
}

function birdsNest(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const bowl = new THREE.Mesh(
    new THREE.SphereGeometry(10, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55),
    mat(0x44403c),
  )
  bowl.scale.set(1.15, 0.55, 1)
  bowl.position.y = 4
  g.add(bowl)
  for (let i = 0; i < 10; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 20), mat(0x292524))
    bar.position.y = 6
    bar.rotation.y = (i / 10) * Math.PI
    bar.rotation.z = 0.35
    g.add(bar)
  }
  const field = new THREE.Mesh(new THREE.CircleGeometry(7, 16), mat(0x166534))
  field.rotation.x = -Math.PI / 2
  field.position.y = 2.2
  g.add(field)
  return g
}

function cbdTower(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const shaft = new THREE.Mesh(new THREE.BoxGeometry(8, 36, 8), mat(0x64748b))
  shaft.position.y = 18
  g.add(shaft)
  const mid = new THREE.Mesh(new THREE.BoxGeometry(10, 4, 10), mat(0x94a3b8))
  mid.position.y = 28
  g.add(mid)
  const top = new THREE.Mesh(new THREE.BoxGeometry(5, 10, 5), mat(0x475569))
  top.position.y = 40
  g.add(top)
  const win = new THREE.Mesh(new THREE.BoxGeometry(7.2, 28, 0.2), mat(0x93c5fd))
  win.position.set(0, 16, 4.1)
  g.add(win)
  return g
}

export function createSiheyuan(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const court = new THREE.Mesh(new THREE.BoxGeometry(10, 0.15, 10), mat(0xa8a29e))
  court.position.y = 0.08
  g.add(court)
  const n = new THREE.Mesh(new THREE.BoxGeometry(9, 3.2, 2.2), mat(0xa16207))
  n.position.set(0, 1.6, 4)
  g.add(n)
  const s = new THREE.Mesh(new THREE.BoxGeometry(9, 2.4, 2), mat(0x92400e))
  s.position.set(0, 1.2, -4)
  g.add(s)
  const e = new THREE.Mesh(new THREE.BoxGeometry(2, 2.6, 6), mat(0xb45309))
  e.position.set(4, 1.3, 0)
  g.add(e)
  const w = e.clone()
  w.position.set(-4, 1.3, 0)
  g.add(w)
  return g
}

function addGuardRing(g: THREE.Group, inner: number, outer: number): void {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(inner, outer, 48),
    new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.35, side: THREE.DoubleSide }),
  )
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.08
  ring.name = '__guardRing'
  g.add(ring)
}

function monumentObelisk(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const base = new THREE.Mesh(new THREE.BoxGeometry(10, 2.2, 10), mat(0x9ca3af))
  base.position.y = 1.1
  g.add(base)
  const body = new THREE.Mesh(new THREE.BoxGeometry(3.2, 22, 3.2), mat(0xd1d5db))
  body.position.y = 13
  g.add(body)
  const cap = new THREE.Mesh(new THREE.ConeGeometry(2.4, 4, 4), mat(0xe5e7eb))
  cap.position.y = 26
  g.add(cap)
  addGuardRing(g, 8, 16)
  return g
}

function bundColonnade(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  for (let i = -3; i <= 3; i++) {
    const bay = new THREE.Mesh(new THREE.BoxGeometry(4.2, 10 + (i === 0 ? 4 : 0), 8), mat(i % 2 ? 0xd6c7b0 : 0xc4b49a))
    bay.position.set(i * 5, 5 + (i === 0 ? 2 : 0), 0)
    g.add(bay)
    const roof = new THREE.Mesh(new THREE.BoxGeometry(4.6, 1.2, 8.6), mat(0x57534e))
    roof.position.set(i * 5, 10.8 + (i === 0 ? 4 : 0), 0)
    g.add(roof)
    if (i === 0) {
      const dome = new THREE.Mesh(new THREE.SphereGeometry(2.4, 10, 8), mat(0xa8a29e))
      dome.position.set(0, 16, 0)
      g.add(dome)
    }
  }
  return g
}

function orientalPearl(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.1, 36, 8), mat(0xe2e8f0))
  shaft.position.y = 18
  g.add(shaft)
  const low = new THREE.Mesh(new THREE.SphereGeometry(4.2, 12, 10), mat(0xef4444))
  low.position.y = 12
  g.add(low)
  const hi = new THREE.Mesh(new THREE.SphereGeometry(2.6, 12, 10), mat(0xf87171))
  hi.position.y = 28
  g.add(hi)
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.5, 8, 6), mat(0xf8fafc))
  tip.position.y = 38
  g.add(tip)
  return g
}

function lujiazuiTower(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const shaft = new THREE.Mesh(new THREE.BoxGeometry(7, 40, 7), mat(0x64748b))
  shaft.position.y = 20
  g.add(shaft)
  const taper = new THREE.Mesh(new THREE.BoxGeometry(4, 12, 4), mat(0x94a3b8))
  taper.position.y = 42
  g.add(taper)
  const win = new THREE.Mesh(new THREE.BoxGeometry(6.2, 32, 0.2), mat(0x7dd3fc))
  win.position.set(0, 18, 3.6)
  g.add(win)
  return g
}

function cityGodTemple(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const court = new THREE.Mesh(new THREE.BoxGeometry(16, 0.3, 16), mat(0xb45309))
  court.position.y = 0.15
  g.add(court)
  const hall = new THREE.Mesh(new THREE.BoxGeometry(10, 6, 8), mat(0x9f1239))
  hall.position.y = 3.2
  g.add(hall)
  const roof = new THREE.Mesh(new THREE.BoxGeometry(12, 1.4, 10), mat(0xeab308))
  roof.position.y = 7
  g.add(roof)
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(8, 0.5, 1), mat(0xca8a04))
  ridge.position.y = 7.8
  g.add(ridge)
  return g
}

function floodMonument(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const base = new THREE.Mesh(new THREE.CylinderGeometry(6, 7, 2, 10), mat(0x9ca3af))
  base.position.y = 1
  g.add(base)
  const col = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.8, 18, 8), mat(0xd6d3d1))
  col.position.y = 11
  g.add(col)
  const top = new THREE.Mesh(new THREE.SphereGeometry(2.2, 10, 8), mat(0xe7e5e4))
  top.position.y = 21
  g.add(top)
  addGuardRing(g, 9, 17)
  return g
}

function onionDome(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const body = new THREE.Mesh(new THREE.BoxGeometry(12, 10, 12), mat(0x9f1239))
  body.position.y = 5
  g.add(body)
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.6, 4, 10), mat(0xb91c1c))
  drum.position.y = 12
  g.add(drum)
  const dome = new THREE.Mesh(new THREE.SphereGeometry(3.6, 10, 8), mat(0x16a34a))
  dome.position.y = 16
  g.add(dome)
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.6, 4, 6), mat(0xeab308))
  tip.position.y = 20
  g.add(tip)
  return g
}

function centralStreet(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const pavement = new THREE.Mesh(new THREE.BoxGeometry(32, 0.2, 8), mat(0xa8a29e))
  pavement.position.y = 0.1
  g.add(pavement)
  for (let i = -2; i <= 2; i++) {
    const facade = new THREE.Mesh(new THREE.BoxGeometry(5.5, 9, 3.5), mat(i % 2 ? 0xd6c7b0 : 0xc4b49a))
    facade.position.set(i * 6, 4.5, -2)
    g.add(facade)
  }
  return g
}

function iceCastle(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const keep = new THREE.Mesh(new THREE.BoxGeometry(12, 8, 12), mat(0xbae6fd))
  keep.position.y = 4
  g.add(keep)
  for (const ox of [-6, 6]) {
    const t = new THREE.Mesh(new THREE.CylinderGeometry(2, 2.4, 14, 8), mat(0x7dd3fc))
    t.position.set(ox, 7, ox)
    g.add(t)
    const cap = new THREE.Mesh(new THREE.ConeGeometry(2.6, 5, 8), mat(0xe0f2fe))
    cap.position.set(ox, 16, ox)
    g.add(cap)
  }
  const gate = new THREE.Mesh(new THREE.BoxGeometry(4, 5, 1), mat(0x0369a1))
  gate.position.set(0, 2.5, 6)
  g.add(gate)
  return g
}

function dragonTower(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 2, 38, 8), mat(0xcbd5e1))
  shaft.position.y = 19
  g.add(shaft)
  const pod = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 3, 10), mat(0x38bdf8))
  pod.position.y = 28
  g.add(pod)
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.5, 8, 6), mat(0xf8fafc))
  tip.position.y = 40
  g.add(tip)
  return g
}
