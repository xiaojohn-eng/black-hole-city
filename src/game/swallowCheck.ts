import type { TierDef } from './constants'

export interface SwallowBreakdown {
  sizeOk: boolean
  massOk: boolean
  can: boolean
  sizeNeed: number
  massNeed: number
  sizeHave: number
  massHave: number
}

export function swallowBreakdown(
  playerRadius: number,
  playerMass: number,
  tier: TierDef,
  thresholdScale = 1,
): SwallowBreakdown {
  const sizeNeed = tier.sizeThreshold * thresholdScale
  const massNeed = tier.massThreshold * thresholdScale
  const sizeOk = playerRadius >= sizeNeed
  const massOk = playerMass >= massNeed
  return {
    sizeOk,
    massOk,
    can: sizeOk && massOk,
    sizeNeed,
    massNeed,
    sizeHave: playerRadius,
    massHave: playerMass,
  }
}

export function missingHint(b: SwallowBreakdown): string {
  if (b.can) return ''
  if (!b.sizeOk && !b.massOk) return '再长大一点：洞口和质量都还不够'
  if (!b.sizeOk) return '再长大一点：洞口还不够大'
  return '再沉一点：质量还不够'
}
