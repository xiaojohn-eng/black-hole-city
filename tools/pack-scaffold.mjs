#!/usr/bin/env node
/**
 * Editor v0.1: export a non-live B-grade city pack draft from CSV/kit.
 * Usage: npm run scaffold:city -- --adcode=320100 [--kit=jiangnan-water] [--force]
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PROVINCES, PREFECTURES, EXTRAS, allRows } from './admin-div-data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function arg(name, fallback = '') {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`))
  if (hit) return hit.slice(name.length + 3)
  if (process.argv.includes(`--${name}`)) return '1'
  return fallback
}

const adcode = arg('adcode')
const force = Boolean(arg('force'))
if (!/^\d{6}$/.test(adcode)) {
  console.error('usage: npm run scaffold:city -- --adcode=320100 [--kit=jiangnan-water]')
  process.exit(1)
}

const LIVE_BLOCK = new Set(['110100', '310100', '230100', '000000'])
const row = allRows().find((r) => r.adcode === adcode) ?? PREFECTURES.concat(EXTRAS).find((r) => r.adcode === adcode)
if (!row) {
  console.error(`scaffold: unknown adcode ${adcode}`)
  process.exit(1)
}
if (LIVE_BLOCK.has(adcode) && !force) {
  console.error(`scaffold: ${adcode} is a live pack. Refusing to overwrite (pass --force).`)
  process.exit(1)
}

const parent = PROVINCES.find((p) => p.adcode === row.parentAdcode) ?? PROVINCES.find((p) => p.adcode === adcode)
const region7 = row.region7 || parent?.region7 || '华北'
const kitId = arg('kit') || defaultKit(region7)
const kitPath = path.join(root, 'data', 'kits', `${kitId}.json`)
if (!fs.existsSync(kitPath)) {
  console.error(`scaffold: missing kit ${kitId}`)
  process.exit(1)
}
const kit = JSON.parse(fs.readFileSync(kitPath, 'utf8'))

const packId = slugPack(row.name, adcode)
const outDir = path.join(root, 'public', 'packs', packId)
if (fs.existsSync(path.join(outDir, 'city.json')) && !force) {
  console.error(`scaffold: ${outDir} exists. Pass --force to overwrite a draft.`)
  process.exit(1)
}

const shortName = parent?.shortName || row.shortName || row.name.slice(0, 1)
const display = row.name.replace(/主城$/, '')
const capital = parent?.capital || row.capital || display.replace(/市$/, '')

const city = {
  adcode,
  packId,
  name: display,
  alias: [display.replace(/市$/, ''), shortName].filter(Boolean),
  shortName,
  unitType: row.unitType,
  parentProvince: row.provinceName || parent?.name || '',
  region7,
  region4: row.region4 || parent?.region4 || '',
  locationDesc: `位于${region7}，行政关系见名录。草稿坐标是关卡网格，不是经纬度。`,
  climateBand: kit.climateHint?.[0] || '待补',
  landform: ['待补'],
  riversLakes: ['待补'],
  neighbors: [],
  cityFunction: [row.unitType === 'prefecture_city' ? '地级市' : '行政区'],
  storyTitle: `${display}记忆草稿`,
  storyLogline: `B 级草稿：用套件「${kit.name}」铺底，尚未四审，不可 live。`,
  storyBeats: ['从南侧公园起步', '沿套件街道收集', '参观一处文保剪影', '环绕纪念空间致敬'],
  gameplayModifiers: [],
  bgmPalette: ['程序音回退'],
  colorPalette: {
    sky: kit.palette.sky,
    fog: kit.palette.fog,
    ground: kit.palette.ground,
    road: kit.palette.road,
  },
  spawn: { x: 0, z: -96 },
  mapSize: 240,
  mode: 'career',
  fictional: false,
  kitId,
  startCards: ['card-draft-place'],
  briefing: [
    `这是 ${display} 的 B 级草稿，尚未标成 live。`,
    '纪念空间请绕行，文保建筑只参观。',
    '请按 data/kits/README.md 补地标与审校后再申请入库。',
  ],
  draft: true,
}

const layout = {
  mapSize: 240,
  roads: kit.roads,
  variants: [],
  kitId,
  draft: true,
  zones: [
    zone('south_park', '南侧起步公园', 0, -80, 240, 80, kit.palette.ground, true, { L1: 16, L2: 12, L3: 8, L4: 4 }),
    zone('old_town', '旧城民居', -70, 8, 100, 96, kit.palette.wall, false, { L1: 8, L2: 8, L3: 8, L4: 6, L6: 6, L7: 2 }),
    zone('civic', '纪念与参观', 0, 40, 48, 120, kit.palette.accent, false, { L1: 4, L2: 4, L3: 2 }),
    zone('new_town', '当代楼宇', 78, 12, 84, 110, '#4a5568', false, { L4: 8, L5: 6, L7: 4, L8: 2, L9: 1 }),
  ],
  landmarks: [
    {
      id: `${packId}-guard`,
      name: `${display}纪念空间（草稿）`,
      mesh: 'monument_obelisk',
      interact: 'guard',
      x: 0,
      z: 32,
      tier: 10,
      zone: 'civic',
      knowledgeCardId: 'card-draft-guard',
      whyHere: '占位 GUARD。人工替换为该城真实纪念空间。',
      silhouette: '方尖碑草稿',
    },
    {
      id: `${packId}-visit-a`,
      name: `${display}文保剪影（草稿）`,
      mesh: kitId === 'jiangnan-water' ? 'bund_colonnade' : kitId === 'oasis-flat' ? 'onion_dome' : 'city_god_temple',
      interact: 'visit',
      x: -40,
      z: 20,
      tier: 10,
      zone: 'old_town',
      knowledgeCardId: 'card-draft-visit',
      whyHere: '占位 VISIT。宗教/文保只参观。',
      silhouette: '连排或殿宇草稿',
    },
    {
      id: `${packId}-visit-b`,
      name: `${display}街道（草稿）`,
      mesh: 'central_street',
      interact: 'visit',
      x: -70,
      z: -10,
      tier: 9,
      zone: 'old_town',
      knowledgeCardId: 'card-draft-place',
      whyHere: '占位街道参观。',
      silhouette: '长街',
    },
    {
      id: `${packId}-sky-a`,
      name: `${display}塔楼剪影（草稿）`,
      mesh: 'cbd_tower',
      interact: 'swallow',
      x: 88,
      z: 40,
      tier: 10,
      zone: 'new_town',
      knowledgeCardId: 'card-draft-sky',
      whyHere: '可归档当代天际线草稿。',
      silhouette: '高楼',
    },
    {
      id: `${packId}-sky-b`,
      name: `${display}高塔（草稿）`,
      mesh: 'tv_tower',
      interact: 'swallow',
      x: 96,
      z: -8,
      tier: 9,
      zone: 'new_town',
      knowledgeCardId: 'card-draft-sky',
      whyHere: '可归档高塔草稿。',
      silhouette: '细塔',
    },
  ],
}

const knowledge = {
  draft: true,
  cards: [
    { id: 'card-draft-place', title: `${display}在哪里`, body: `${display}属于${row.provinceName || parent?.name}，七大区「${region7}」。这是套件草稿，地理细节待四审。`, tags: ['位置'], ageBand: ['6-8', '9-12'] },
    { id: 'card-draft-short', title: `省简称「${shortName}」`, body: `${parent?.name || row.provinceName}的简称是「${shortName}」。`, tags: ['简称', shortName], ageBand: ['6-8', '9-12'] },
    { id: 'card-draft-climate', title: '气候草稿', body: `套件提示气候：${(kit.climateHint || []).join('、') || '待补'}。禁止半自动写民族与国界。`, tags: ['气候'], ageBand: ['9-12'] },
    { id: 'card-draft-kit', title: `民居套件：${kit.name}`, body: kit.fill?.notes || '用全国套件铺底，再换本地剪影。', tags: ['民居', '套件'], ageBand: ['9-12'] },
    { id: 'card-draft-guard', title: '纪念空间：守护', body: '纪念空间不可归档，请绕行一周致敬。', tags: ['GUARD'], ageBand: ['6-8', '9-12', '13+'] },
    { id: 'card-draft-visit', title: '文保：参观', body: '文保与宗教外观只参观，不做崩塌。', tags: ['VISIT'], ageBand: ['6-8', '9-12'] },
    { id: 'card-draft-sky', title: '当代天际线', body: '可归档的是当代公共建筑剪影，不是国家象征。', tags: ['当代'], ageBand: ['9-12'] },
    { id: 'card-draft-warn', title: '这是草稿', body: '本包 status=draft，不进大厅 live 列表。补齐四审前不要宣称可玩。', tags: ['工厂'], ageBand: ['13+'] },
  ],
}

const quiz = {
  draft: true,
  questions: [
    { id: 'q-draft-01', ageBand: '6-8', type: 'mc', prompt: `${display}属于哪个省级行政区？`, choices: four(parent?.name || row.provinceName, PROVINCES.map((p) => p.name)), answer: 0, explain: `${display}属于${parent?.name || row.provinceName}。` },
    { id: 'q-draft-02', ageBand: '6-8', type: 'mc', prompt: `${parent?.name || '本省'}的简称是？`, choices: four(shortName, PROVINCES.map((p) => p.shortName)), answer: 0, explain: `简称「${shortName}」。` },
    { id: 'q-draft-03', ageBand: '6-8', type: 'mc', prompt: '纪念空间应该怎么对待？', choices: ['吸入归档', '绕行一周致敬', '推倒', '忽略'], answer: 1, explain: 'GUARD：绕行致敬。' },
    { id: 'q-draft-04', ageBand: '6-8', type: 'mc', prompt: '文保建筑的正确交互是？', choices: ['吸入', '参观外观', '改造成游乐场', '删除'], answer: 1, explain: 'VISIT：只参观。' },
    { id: 'q-draft-05', ageBand: '9-12', type: 'mc', prompt: `${display}在七大区中属于？`, choices: four(region7, ['华北', '东北', '华东', '华中', '华南', '西南', '西北']), answer: 0, explain: `七大区：${region7}。` },
    { id: 'q-draft-06', ageBand: '9-12', type: 'mc', prompt: '本草稿用的民居套件是？', choices: four(kit.name, ['北方砖 + 胡同', '江南水岸', '岭南骑楼', '绿洲平顶']), answer: 0, explain: `套件 ${kit.id}。` },
    { id: 'q-draft-07', ageBand: '9-12', type: 'mc', prompt: '客户端为什么不能写 lat/lon？', choices: ['好看', '审图与隐私：关卡只用局部网格', 'Three.js 不支持', 'CSV 没有名字'], answer: 1, explain: '网格坐标不是地理坐标。' },
    { id: 'q-draft-08', ageBand: '9-12', type: 'mc', prompt: '草稿能否宣称全国地级已收录？', choices: ['能', '不能', '做满 10 座就能', '看心情'], answer: 1, explain: 'B 级草稿不是 live，更不是 333。' },
    { id: 'q-draft-09', ageBand: '9-12', type: 'mc', prompt: `${capital}是？`, choices: four(capital, ['北京', '上海', '广州', '成都', '哈尔滨', capital]), answer: 0, explain: `行政中心教学名：${capital}。` },
  ],
}

fs.mkdirSync(outDir, { recursive: true })
write('city.json', city)
write('layout.json', layout)
write('knowledge.json', knowledge)
write('quiz.json', quiz)

console.log(`scaffold:city OK — draft pack ${packId}`)
console.log(`  adcode ${adcode}  kit ${kitId}`)
console.log(`  wrote ${path.relative(root, outDir)}/{city,layout,knowledge,quiz}.json`)
console.log('  not live: 不会写入 manifest，也不会改 admin playable_3d')

function write(name, obj) {
  fs.writeFileSync(path.join(outDir, name), JSON.stringify(obj, null, 2) + '\n')
}

function zone(id, name, x, z, w, d, color, spawn, quotas) {
  const zdef = { id, name, x, z, w, d, color, quotas }
  if (spawn) zdef.spawn = true
  return zdef
}

function slugPack(name, code) {
  const map = { 南京市: 'nanjing', 杭州市: 'hangzhou', 广州市: 'guangzhou', 乌鲁木齐市: 'urumqi', 成都市: 'chengdu' }
  if (map[name]) return map[name]
  return `city-${code}`
}

function defaultKit(r7) {
  if (r7 === '华东' || r7 === '华中') return 'jiangnan-water'
  if (r7 === '华南') return 'lingnan-qilou'
  if (r7 === '西北') return 'oasis-flat'
  return 'north-brick-hutong'
}

function four(correct, pool) {
  const rest = [...new Set(pool.filter((x) => x && x !== correct))]
  const picks = []
  for (const x of rest) {
    if (picks.length >= 3) break
    picks.push(x)
  }
  while (picks.length < 3) picks.push('待补')
  return [correct, ...picks.slice(0, 3)]
}
