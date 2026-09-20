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
