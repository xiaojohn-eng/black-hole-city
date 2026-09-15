/** PRD-aligned game constants */

export const M0 = 10
export const R0 = 0.6
export const K_RADIUS = 0.42

export const S_BASE = 12
export const S_MIN = 4.5
export const S_MAX = 14
export const SPEED_A = 0.55

export const ATTRACT_FACTOR = 1.35
export const ATTRACT_ACCEL = 25
export const SWALLOW_RADIUS_FACTOR = 0.8
export const ATTRACT_TIMEOUT = 1.2
export const MAX_SWALLOWING = 8

export const MAP_SIZE = 240
export const MAP_HALF = MAP_SIZE / 2
export const BOUNDARY = 8

export const CAM_D0 = 18
export const CAM_B = 2.8
export const CAM_PITCH = (58 * Math.PI) / 180
export const CAM_FOV = 50

export const LANDMARK_BONUS = 8000
export const COMBO_WINDOW = 2.0
export const COMBO_MAX_MULT = 2.0

export const LEVEL_LABELS: Record<number, string> = {
  1: '街头小洞',
  2: '巷口黑洞',
  3: '吞车之洞',
  4: '公交克星',
  5: '拆房小队',
  6: '街区粉碎机',
  7: '城市饥渴',
  8: '摩天克星',
  9: '终焉之洞',
}

export const RESULT_TITLES: Record<number, string> = {
  1: '街头试吃',
  2: '街头试吃',
  3: '车流清道夫',
  4: '车流清道夫',
  5: '拆房小队',
  6: '拆房小队',
  7: '街区粉碎机',
  8: '摩天克星',
  9: '终焉之洞',
}

/** Level thresholds by mass (display level) */
export const LEVEL_MASS: number[] = [10, 35, 70, 140, 260, 520, 1100, 2200, 4000]

export interface TierDef {
  level: number
  name: string
  sizeThreshold: number
  massThreshold: number
  massRewardMin: number
  massRewardMax: number
  color: number
}

export const TIERS: TierDef[] = [
  { level: 1, name: '垃圾', sizeThreshold: 0.55, massThreshold: 8, massRewardMin: 2, massRewardMax: 4, color: 0x6b7280 },
  { level: 2, name: '路障', sizeThreshold: 0.85, massThreshold: 18, massRewardMin: 6, massRewardMax: 10, color: 0xf59e0b },
  { level: 3, name: '小型载具', sizeThreshold: 1.2, massThreshold: 35, massRewardMin: 15, massRewardMax: 25, color: 0x3b82f6 },
  { level: 4, name: '汽车', sizeThreshold: 1.9, massThreshold: 70, massRewardMin: 40, massRewardMax: 60, color: 0xef4444 },
  { level: 5, name: '公交卡车', sizeThreshold: 3.2, massThreshold: 140, massRewardMin: 90, massRewardMax: 130, color: 0x8b5cf6 },
  { level: 6, name: '小屋', sizeThreshold: 4.5, massThreshold: 260, massRewardMin: 180, massRewardMax: 250, color: 0xd97706 },
  { level: 7, name: '公寓', sizeThreshold: 7.0, massThreshold: 520, massRewardMin: 400, massRewardMax: 550, color: 0x059669 },
  { level: 8, name: '商场', sizeThreshold: 11.0, massThreshold: 1100, massRewardMin: 900, massRewardMax: 1200, color: 0x0ea5e9 },
  { level: 9, name: '摩天楼', sizeThreshold: 16.0, massThreshold: 2200, massRewardMin: 2000, massRewardMax: 2800, color: 0x64748b },
  { level: 10, name: '地标', sizeThreshold: 22.0, massThreshold: 4000, massRewardMin: 5000, massRewardMax: 8000, color: 0xfbbf24 },
]

export function radiusFromMass(mass: number): number {
  return R0 * Math.pow(mass / M0, K_RADIUS)
}

export function speedFromMass(mass: number): number {
  const s = S_BASE / (1 + SPEED_A * Math.log10(Math.max(mass / M0, 1)))
  return Math.min(S_MAX, Math.max(S_MIN, s))
}

export function levelFromMass(mass: number): number {
  let lv = 1
  for (let i = 0; i < LEVEL_MASS.length; i++) {
    if (mass >= LEVEL_MASS[i]) lv = i + 1
  }
  return Math.min(lv, 9)
}

export function levelProgress(mass: number): number {
  const lv = levelFromMass(mass)
  const lo = LEVEL_MASS[lv - 1] ?? 10
  const hi = LEVEL_MASS[lv] ?? lo * 2
  if (lv >= 9) return 1
  return Math.min(1, Math.max(0, (mass - lo) / (hi - lo)))
}

export function canSwallow(
  playerRadius: number,
  playerMass: number,
  tier: TierDef,
  thresholdScale = 1,
): boolean {
  return (
    playerRadius >= tier.sizeThreshold * thresholdScale &&
    playerMass >= tier.massThreshold * thresholdScale
  )
}

export type ZoneId = 'S' | 'W' | 'E' | 'N' | 'L'

export function zoneAt(x: number, z: number): ZoneId {
  // Map: x west-east (-120..120), z south-north (-120..120)
  // S: z < -40
  // N industrial: z > 40 && x < 20
  // Landmark NE: z > 40 && x >= 20
  // W residential: z -40..40 && x < 0
  // E commercial: z -40..40 && x >= 0
  if (z < -40) return 'S'
  if (z > 40) return x >= 20 ? 'L' : 'N'
  return x < 0 ? 'W' : 'E'
}
