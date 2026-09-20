/** One full lap around a GUARD landmark, in radians. */
export const GUARD_NEED = Math.PI * 2

export interface GuardOrbitResult {
  angle: number
  delta: number
  inRing: boolean
  dist: number
}

export function updateGuardOrbit(
  prevAngle: number,
  px: number,
  pz: number,
  lx: number,
  lz: number,
  innerR: number,
  outerR: number,
): GuardOrbitResult {
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

export function guardRing(hw: number, hd: number): { inner: number; outer: number } {
  const inner = Math.max(10, Math.max(hw, hd) + 4)
  const outer = inner + 12
  return { inner, outer }
}
