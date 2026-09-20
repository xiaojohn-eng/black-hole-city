export type InteractType = 'swallow' | 'guard' | 'visit' | 'eco'
export type AgeBand = '6-8' | '9-12' | '13+'
export type PlayMode = 'timed' | 'career'

export interface ColorPalette {
  sky: string
  fog: string
  ground: string
  road: string
}

export interface CityDef {
  adcode: string
  packId: string
  name: string
  alias: string[]
  shortName?: string
  unitType: string
  parentProvince: string
  region7: string
  region4: string
  locationDesc: string
  climateBand: string
  landform: string[]
  riversLakes: string[]
  neighbors: string[]
  cityFunction: string[]
  storyTitle: string
  storyLogline: string
  storyBeats: string[]
  gameplayModifiers: string[]
  bgmPalette: string[]
  colorPalette: ColorPalette
  spawn: { x: number; z: number }
  mapSize: number
  mode: PlayMode
  fictional?: boolean
  kitId?: string
  startCards?: string[]
  briefing: string[]
}

export interface ZoneQuotas {
  L1?: number
  L2?: number
  L3?: number
  L4?: number
  L5?: number
  L6?: number
  L7?: number
  L8?: number
  L9?: number
  L10?: number
}

export interface ZoneDef {
  id: string
  name: string
  x: number
  z: number
  w: number
  d: number
  color: string
  spawn?: boolean
  quotas: ZoneQuotas
}

export interface LandmarkDef {
  id: string
  name: string
  mesh: string
  interact: InteractType
  x: number
  z: number
  tier: number
  zone: string
  knowledgeCardId?: string
  whyHere: string
  silhouette: string
}

export type RoadStyle =
  | 'grid'
  | 'hutong_axis'
  | 'jiangnan_water'
  | 'qilou_street'
  | 'oasis_court'
  | 'northeast_grid'

export interface LayoutDef {
  mapSize: number
  roads: { style: RoadStyle; spacing: number; width: number }
  zones: ZoneDef[]
  landmarks: LandmarkDef[]
  variants: string[]
  kitId?: string
}

export interface KnowledgeCard {
  id: string
  title: string
  body: string
  tags: string[]
  ageBand: AgeBand[]
}

export interface QuizQuestion {
  id: string
  ageBand: AgeBand
  type: 'mc' | 'match'
  prompt: string
  choices: string[]
  answer: number
  explain: string
  curriculumTag?: string
  provinceAdcode?: string
  provinceName?: string
  shortName?: string
}

export interface LoadedPack {
  city: CityDef
  layout: LayoutDef
  knowledge: { cards: KnowledgeCard[] }
  quiz: { questions: QuizQuestion[] }
}

export interface AdminProvince {
  adcode: string
  name: string
  shortName: string
  unitType: string
  region7: string
  region4: string
  capital: string
  status: string
  packId: string
  playable: boolean
  aliases: string[]
}

export interface AdminPrefecture {
  adcode: string
  name: string
  unitType: string
  parentAdcode: string
  provinceName: string
  status: string
  packId: string
  playable_3d: boolean
}

export interface AdminIndex {
  disclaimer: string
  counts: {
    provincial: number
    prefectureTotal: number
    prefecture_city: number
    autonomous_prefecture: number
    diqu: number
    league: number
  }
  provinces: AdminProvince[]
  prefectures: AdminPrefecture[]
}
