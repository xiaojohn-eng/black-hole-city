import type { Object3D } from 'three'
import type { TierDef } from './constants'

export type EatState = 'idle' | 'attracting' | 'swallowing' | 'digested'

export interface Eatable {
  id: number
  tier: TierDef
  x: number
  z: number
  /** half extents for AABB (buildings) or radius for circles */
  hw: number
  hd: number
  height: number
  isCircle: boolean
  isLandmark: boolean
  rewardMass: number
  state: EatState
  attractTimer: number
  swallowTimer: number
  swallowDuration: number
  mesh: Object3D
  baseScale: number
  origX: number
  origZ: number
  velX: number
  velZ: number
  highlight: boolean
}

export type GamePhase = 'title' | 'playing' | 'paused' | 'result' | 'tutorial'
