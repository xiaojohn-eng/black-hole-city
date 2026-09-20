#!/usr/bin/env node
/**
 * Pure-logic self-test for dual-threshold and GUARD orbit (no Three.js).
 * Keep in sync with src/game/swallowCheck.ts and src/game/guardOrbit.ts.
 */

function swallowBreakdown(playerRadius, playerMass, tier, thresholdScale = 1) {
  const sizeNeed = tier.sizeThreshold * thresholdScale
  const massNeed = tier.massThreshold * thresholdScale
  const sizeOk = playerRadius >= sizeNeed
  const massOk = playerMass >= massNeed
  return { sizeOk, massOk, can: sizeOk && massOk, sizeNeed, massNeed }
}

const GUARD_NEED = Math.PI * 2

function updateGuardOrbit(prevAngle, px, pz, lx, lz, innerR, outerR) {
  const dx = px - lx
  const dz = pz - lz
  const dist = Math.hypot(dx, dz)
  const inRing = dist >= innerR && dist <= outerR
  const angle = Math.atan2(dz, dx)
  let delta = 0
  if (inRing) {
    delta = angle - prevAngle
    while (delta > Math.PI) delta -= Math.PI * 2
    while (delta < -Math.PI) delta += Math.PI * 2
    delta = Math.abs(delta)
  }
  return { angle, delta, inRing, dist }
}

function assert(cond, msg) {
  if (!cond) {
    console.error('logic-selftest FAIL —', msg)
    process.exit(1)
  }
}

const tier = { sizeThreshold: 1.9, massThreshold: 70 }
const a = swallowBreakdown(1.0, 200, tier, 1)
assert(!a.can && !a.sizeOk && a.massOk, 'mass-ok size-fail should not swallow')
const b = swallowBreakdown(2.0, 50, tier, 1)
assert(!b.can && b.sizeOk && !b.massOk, 'size-ok mass-fail should not swallow')
const c = swallowBreakdown(2.0, 80, tier, 1)
assert(c.can && c.sizeOk && c.massOk, 'both ok should swallow')

let acc = 0
let prev = 0
const steps = 36
for (let i = 0; i <= steps; i++) {
  const t = (i / steps) * Math.PI * 2
  const x = 16 * Math.cos(t)
  const z = 16 * Math.sin(t)
  const r = updateGuardOrbit(prev, x, z, 0, 0, 10, 22)
  if (i > 0 && r.inRing) acc += r.delta
  prev = r.angle
}
assert(acc >= GUARD_NEED * 0.95, `full circle acc ${acc} should reach ~2π`)

const out = updateGuardOrbit(0, 80, 0, 0, 0, 10, 22)
assert(!out.inRing && out.delta === 0, 'outside ring should not accumulate')

console.log('logic-selftest OK')
