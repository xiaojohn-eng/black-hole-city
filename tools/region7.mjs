/**
 * M3a seven-region factory table.
 * Pipeline names are not a 333-complete claim.
 */

export const REGION7 = ['华北', '东北', '华东', '华中', '华南', '西南', '西北']

/** Directory ids. Keys are admin `name` as in CSV / extras. */
export const PACK_SLUGS = {
  北京市: 'beijing',
  北京主城: 'beijing',
  上海市: 'shanghai',
  上海主城: 'shanghai',
  哈尔滨市: 'harbin',
  石家庄市: 'shijiazhuang',
  保定市: 'baoding',
  沈阳市: 'shenyang',
  长春市: 'changchun',
  南京市: 'nanjing',
  杭州市: 'hangzhou',
  苏州市: 'suzhou',
  青岛市: 'qingdao',
  武汉市: 'wuhan',
  长沙市: 'changsha',
  洛阳市: 'luoyang',
  广州市: 'guangzhou',
  深圳市: 'shenzhen',
  桂林市: 'guilin',
  成都市: 'chengdu',
  昆明市: 'kunming',
  贵阳市: 'guiyang',
  西安市: 'xian',
  乌鲁木齐市: 'urumqi',
  酒泉市: 'jiuquan',
}

/**
 * ≥1 live A/B + ≥2 more names per region.
 * Non-capitals (苏州/青岛/洛阳/深圳/桂林/保定/酒泉) start the 非省会占比.
 * @type {{ adcode: string, packId: string, region7: string, status: 'live'|'draft', kit: string }[]}
 */
export const M3A_PIPELINE = [
  { adcode: '110100', packId: 'beijing', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '130100', packId: 'shijiazhuang', region7: '华北', status: 'draft', kit: 'north-brick-hutong' },
  { adcode: '130600', packId: 'baoding', region7: '华北', status: 'draft', kit: 'north-brick-hutong' },
  { adcode: '230100', packId: 'harbin', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '210100', packId: 'shenyang', region7: '东北', status: 'draft', kit: 'north-brick-hutong' },
  { adcode: '220100', packId: 'changchun', region7: '东北', status: 'draft', kit: 'north-brick-hutong' },
  { adcode: '310100', packId: 'shanghai', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '320500', packId: 'suzhou', region7: '华东', status: 'draft', kit: 'jiangnan-water' },
  { adcode: '370200', packId: 'qingdao', region7: '华东', status: 'draft', kit: 'jiangnan-water' },
  { adcode: '420100', packId: 'wuhan', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '410300', packId: 'luoyang', region7: '华中', status: 'draft', kit: 'jiangnan-water' },
  { adcode: '430100', packId: 'changsha', region7: '华中', status: 'draft', kit: 'jiangnan-water' },
  { adcode: '440100', packId: 'guangzhou', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '440300', packId: 'shenzhen', region7: '华南', status: 'draft', kit: 'lingnan-qilou' },
  { adcode: '450300', packId: 'guilin', region7: '华南', status: 'draft', kit: 'lingnan-qilou' },
  { adcode: '510100', packId: 'chengdu', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '530100', packId: 'kunming', region7: '西南', status: 'draft', kit: 'jiangnan-water' },
  { adcode: '520100', packId: 'guiyang', region7: '西南', status: 'draft', kit: 'north-brick-hutong' },
  { adcode: '610100', packId: 'xian', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '650100', packId: 'urumqi', region7: '西北', status: 'draft', kit: 'oasis-flat' },
  { adcode: '620900', packId: 'jiuquan', region7: '西北', status: 'draft', kit: 'oasis-flat' },
]

export const M3A_LIVE_PACKS = M3A_PIPELINE.filter((p) => p.status === 'live').map((p) => p.packId)

export const M3A_DRAFT_PACKS = M3A_PIPELINE.filter((p) => p.status === 'draft').map((p) => p.packId)

export function defaultKit(region7) {
  if (region7 === '华东' || region7 === '华中') return 'jiangnan-water'
  if (region7 === '华南') return 'lingnan-qilou'
  if (region7 === '西北') return 'oasis-flat'
  return 'north-brick-hutong'
}

export function slugPack(name, adcode) {
  if (PACK_SLUGS[name]) return PACK_SLUGS[name]
  const stripped = String(name || '').replace(/主城$/, '')
  if (PACK_SLUGS[stripped]) return PACK_SLUGS[stripped]
  return `city-${adcode}`
}

/**
 * 省会 / 直辖市主城 / 首府. 非省会 = 地级且不是本省行政中心.
 * @param {{ unitType?: string, name?: string, parentAdcode?: string, capital?: string }} row
 * @param {{ adcode: string, capital: string, unitType: string }[]} provinces
 */
export function isProvincialCapital(row, provinces) {
  const ut = row.unitType || ''
  if (ut === 'municipality' || ut === 'municipality_city' || ut === 'sar') return true
  const parent = provinces.find((p) => p.adcode === row.parentAdcode)
  if (!parent) return false
  const cap = parent.capital
  const name = String(row.name || '').replace(/主城$/, '')
  return name === cap || name === `${cap}市` || name.startsWith(cap)
}

export const DISCLAIMER =
  '本切片不宣称全国地级已收录可玩。live 3D：训练场 + 七大区各 1 座真城（北京、上海、哈尔滨、武汉、广州、成都、西安）。其余为草稿或名录灰壳。不是 333 完成。'
