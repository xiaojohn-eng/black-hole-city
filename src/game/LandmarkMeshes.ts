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
    case 'canton_tower':
      return cantonTower(mat)
    case 'yellow_crane_tower':
      return yellowCraneTower(mat)
    case 'yangtze_bridge':
      return yangtzeBridge(mat)
    case 'bell_tower':
      return bellTower(mat)
    case 'dayan_pagoda':
      return dayanPagoda(mat)
    case 'city_wall_gate':
      return cityWallGate(mat)
    case 'qilou_arcade':
      return qilouArcade(mat)
    case 'wide_alley':
      return wideAlley(mat)
    case 'panda_grove':
      return pandaGrove(mat)
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
    case 'canton_tower':
      return { hw: 5, hd: 5, height: 50, isCircle: true }
    case 'yellow_crane_tower':
      return { hw: 8, hd: 8, height: 28, isCircle: false }
    case 'yangtze_bridge':
      return { hw: 22, hd: 6, height: 18, isCircle: false }
    case 'bell_tower':
      return { hw: 8, hd: 8, height: 22, isCircle: false }
    case 'dayan_pagoda':
      return { hw: 8, hd: 8, height: 32, isCircle: false }
    case 'city_wall_gate':
      return { hw: 14, hd: 6, height: 18, isCircle: false }
    case 'qilou_arcade':
      return { hw: 16, hd: 5, height: 12, isCircle: false }
    case 'wide_alley':
      return { hw: 16, hd: 6, height: 10, isCircle: false }
    case 'panda_grove':
      return { hw: 10, hd: 10, height: 8, isCircle: true }
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

function cantonTower(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 3.2, 40, 8), mat(0xd6d3d1))
  shaft.position.y = 20
  g.add(shaft)
  const waist = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.55, 8, 16), mat(0xfbbf24))
  waist.rotation.x = Math.PI / 2
  waist.position.y = 22
  g.add(waist)
  const pod = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.2, 3.2, 10), mat(0xf59e0b))
  pod.position.y = 36
  g.add(pod)
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.5, 10, 6), mat(0xe2e8f0))
  tip.position.y = 44
  g.add(tip)
  return g
}

function yellowCraneTower(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const base = new THREE.Mesh(new THREE.BoxGeometry(14, 2, 14), mat(0x9f1239))
  base.position.y = 1
  g.add(base)
  const stories = [
    { y: 5, w: 10, h: 5 },
    { y: 11, w: 8, h: 4.5 },
    { y: 16.2, w: 6, h: 4 },
  ]
  for (const s of stories) {
    const body = new THREE.Mesh(new THREE.BoxGeometry(s.w, s.h, s.w), mat(0xb91c1c))
    body.position.y = s.y
    g.add(body)
    const roof = new THREE.Mesh(new THREE.BoxGeometry(s.w + 3, 0.7, s.w + 3), mat(0xeab308))
    roof.position.y = s.y + s.h / 2 + 0.2
    g.add(roof)
  }
  const cap = new THREE.Mesh(new THREE.ConeGeometry(3.2, 4, 4), mat(0xfacc15))
  cap.position.y = 21
  g.add(cap)
  return g
}

function yangtzeBridge(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const deck = new THREE.Mesh(new THREE.BoxGeometry(42, 0.8, 8), mat(0x78716c))
  deck.position.y = 6
  g.add(deck)
  for (const ox of [-12, 12]) {
    const tower = new THREE.Mesh(new THREE.BoxGeometry(2.2, 16, 2.2), mat(0xd6d3d1))
    tower.position.set(ox, 8, 0)
    g.add(tower)
  }
  const cable = new THREE.Mesh(new THREE.BoxGeometry(26, 0.25, 0.25), mat(0xe5e7eb))
  cable.position.set(0, 14, 0)
  g.add(cable)
  return g
}

function bellTower(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(14, 4, 14), mat(0xa8a29e))
  plinth.position.y = 2
  g.add(plinth)
  const hall = new THREE.Mesh(new THREE.BoxGeometry(9, 7, 9), mat(0x9f1239))
  hall.position.y = 8.5
  g.add(hall)
  const roof = new THREE.Mesh(new THREE.BoxGeometry(12, 1.2, 12), mat(0xeab308))
  roof.position.y = 12.6
  g.add(roof)
  const cap = new THREE.Mesh(new THREE.ConeGeometry(3.4, 4, 4), mat(0xca8a04))
  cap.position.y = 15.2
  g.add(cap)
  return g
}

function dayanPagoda(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const widths = [14, 12, 10, 8.2, 6.6, 5.2, 4]
  let y = 0
  for (let i = 0; i < widths.length; i++) {
    const h = i === 0 ? 5 : 3.6
    const body = new THREE.Mesh(new THREE.BoxGeometry(widths[i], h, widths[i]), mat(0xb7a07a))
    body.position.y = y + h / 2
    g.add(body)
    y += h
  }
  const cap = new THREE.Mesh(new THREE.ConeGeometry(2.2, 3.2, 4), mat(0xa16207))
  cap.position.y = y + 1.4
  g.add(cap)
  return g
}

function cityWallGate(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const wall = new THREE.Mesh(new THREE.BoxGeometry(28, 8, 6), mat(0x78716c))
  wall.position.y = 4
  g.add(wall)
  const arch = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 6.4), mat(0x1c1917))
  arch.position.set(0, 2.6, 0)
  g.add(arch)
  const tower = new THREE.Mesh(new THREE.BoxGeometry(16, 6, 8), mat(0x9f1239))
  tower.position.y = 11
  g.add(tower)
  const roof = new THREE.Mesh(new THREE.BoxGeometry(18, 1.2, 10), mat(0xeab308))
  roof.position.y = 14.4
  g.add(roof)
  return g
}

function qilouArcade(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const walk = new THREE.Mesh(new THREE.BoxGeometry(32, 0.2, 6), mat(0xd6c7b0))
  walk.position.y = 0.1
  g.add(walk)
  for (let i = -3; i <= 3; i++) {
    const col = new THREE.Mesh(new THREE.BoxGeometry(0.7, 4.2, 0.7), mat(0xd6b48a))
    col.position.set(i * 4.4, 2.1, 2.2)
    g.add(col)
    const bay = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 4), mat(0xe8d5b5))
    bay.position.set(i * 4.4, 7, 0)
    g.add(bay)
  }
  return g
}

function wideAlley(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const path = new THREE.Mesh(new THREE.BoxGeometry(8, 0.15, 28), mat(0xa8a29e))
  path.position.y = 0.08
  g.add(path)
  for (const side of [-5, 5]) {
    for (let i = -2; i <= 2; i++) {
      const shop = new THREE.Mesh(new THREE.BoxGeometry(4.2, 5.5, 4.5), mat(i % 2 ? 0xd6c7b0 : 0xb45309))
      shop.position.set(side, 2.75, i * 5)
      g.add(shop)
      const roof = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.5, 4.8), mat(0x1f2937))
      roof.position.set(side, 5.7, i * 5)
      g.add(roof)
    }
  }
  return g
}

function pandaGrove(mat: MatFn): THREE.Group {
  const g = new THREE.Group()
  const ground = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, 0.4, 12), mat(0x3f6212))
  ground.position.y = 0.2
  g.add(ground)
  for (const ox of [-3, 0, 3.5]) {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 6, 6), mat(0x365314))
    trunk.position.set(ox, 3, ox * 0.4)
    g.add(trunk)
  }
  const body = new THREE.Mesh(new THREE.SphereGeometry(1.6, 10, 8), mat(0xf8fafc))
  body.position.set(0, 1.8, 3)
  g.add(body)
  const earL = new THREE.Mesh(new THREE.SphereGeometry(0.55, 8, 6), mat(0x1c1917))
  earL.position.set(-0.9, 3.1, 3)
  g.add(earL)
  const earR = earL.clone()
  earR.position.set(0.9, 3.1, 3)
  g.add(earR)
  return g
}
