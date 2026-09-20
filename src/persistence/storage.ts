const PREFIX = 'bhc:v2:'
const LEGACY = 'bhc:v1:'

export type Quality = 'low' | 'medium' | 'high'
export type Difficulty = 'easy' | 'normal' | 'hard'
export type Duration = 120 | 180 | 240
export type AgeBand = '6-8' | '9-12' | '13+'

export interface Settings {
  masterVolume: number
  bgmVolume: number
  sfxVolume: number
  muted: boolean
  quality: Quality
  particles: 'few' | 'normal'
  cameraShake: boolean
  mouseSteer: boolean
  forceJoystick: boolean
  difficulty: Difficulty
  duration: Duration
  outlineHint: boolean
  lockIcon: boolean
  sensitivity: number
  ageBand: AgeBand
}

export type LandmarkMark = 'archived' | 'guarded' | 'visited'

export interface CityProgress {
  cards: string[]
  landmarks: Record<string, LandmarkMark>
  quizAnswers: { id: string; correct: boolean }[]
  quizSkipped: boolean
  doctorStar: boolean
}

export interface Profile {
  nickname: string
  gamesPlayed: number
  highScore: number
  maxMass: number
  tutorialDone: boolean
  encyclopedia: Record<string, CityProgress>
  packSwitchCount: number
}

export const DEFAULT_SETTINGS: Settings = {
  masterVolume: 80,
  bgmVolume: 70,
  sfxVolume: 100,
  muted: false,
  quality: 'medium',
  particles: 'normal',
  cameraShake: true,
  mouseSteer: false,
  forceJoystick: false,
  difficulty: 'normal',
  duration: 180,
  outlineHint: true,
  lockIcon: true,
  sensitivity: 1,
  ageBand: '9-12',
}

export const DEFAULT_PROFILE: Profile = {
  nickname: '记忆守护员',
  gamesPlayed: 0,
  highScore: 0,
  maxMass: 10,
  tutorialDone: false,
  encyclopedia: {},
  packSwitchCount: 0,
}

export function emptyCityProgress(): CityProgress {
  return { cards: [], landmarks: {}, quizAnswers: [], quizSkipped: false, doctorStar: false }
}

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key) ?? localStorage.getItem(LEGACY + key)
    if (!raw) return { ...fallback }
    return { ...fallback, ...JSON.parse(raw) }
  } catch {
    return { ...fallback }
  }
}

function save(key: string, value: unknown): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch {
    /* ignore quota */
  }
}

export function loadSettings(): Settings {
  const s = load('settings', DEFAULT_SETTINGS)
  if (!localStorage.getItem(PREFIX + 'settings') && !localStorage.getItem(LEGACY + 'settings')) {
    const mobile = /Mobi|Android/i.test(navigator.userAgent)
    if (mobile) s.quality = 'low'
  }
  if (s.ageBand !== '6-8' && s.ageBand !== '9-12' && s.ageBand !== '13+') s.ageBand = '9-12'
  return s
}

export function saveSettings(s: Settings): void {
  save('settings', s)
}

export function loadProfile(): Profile {
  const p = load('profile', DEFAULT_PROFILE)
  if (!p.encyclopedia) p.encyclopedia = {}
  if (!p.nickname) p.nickname = DEFAULT_PROFILE.nickname
  return p
}

export function saveProfile(p: Profile): void {
  save('profile', p)
}

export function resetAllData(): void {
  ;['settings', 'profile', 'unlocked'].forEach((k) => {
    localStorage.removeItem(PREFIX + k)
    localStorage.removeItem(LEGACY + k)
  })
}

export function difficultyMultipliers(d: Difficulty): { massMul: number; threshScale: number; durationHint: number } {
  switch (d) {
    case 'easy':
      return { massMul: 1.25, threshScale: 0.9, durationHint: 240 }
    case 'hard':
      return { massMul: 0.85, threshScale: 1.1, durationHint: 150 }
    default:
      return { massMul: 1.0, threshScale: 1.0, durationHint: 180 }
  }
}
