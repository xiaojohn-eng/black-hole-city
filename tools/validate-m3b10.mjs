#!/usr/bin/env node
/**
 * M3b10 gate: every province/AR with ≥9 eligible non-capital prefecture_city
 * rows must have ≥9 live non-capital prefecture_city.
 * Eligible excludes 三沙 (never playable). Qinghai exempt (only Haidong).
 * Hainan therefore has 2 playable non-caps (Sanya + Danzhou) and is exempt.
 * Xinjiang has 3 non-capital prefecture_city and is exempt to ≥9 (keep ≥3).
 * Ningxia has 4 and is exempt to ≥9 (keep ≥4).
 * Guizhou / Tibet have 5 and are exempt to ≥9 (keep ≥5).
 * Jilin / Yunnan have 7, already all live, and are exempt to ≥9 (keep ≥7).
 * Inner Mongolia / Fujian have 8, already all live, and are exempt to ≥9 (keep ≥8).
 * Any province with <9 eligible non-cap is exempt to ≥9 but must not regress.
 * Municipalities / SARs / Taiwan teaching packs are exempt.
 * This slice is M3b's ninth batch — not 293 complete, not 333 complete.
 * 张家界 / 大理 / 黄山 / 泰安 stay grey. 伊春 stays grey.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PREFECTURES, PROVINCES, allRows } from './admin-div-data.mjs'
import {
  DISCLAIMER,
  M3A3_NONCAPITAL_LIVE,
  M3B1_CAPITAL_PACKS,
  M3B2_NEW_LIVE,
  M3B3_NEW_LIVE,
  M3B4_NEW_LIVE,
  M3B5_NEW_LIVE,
  M3B6_NEW_LIVE,
  M3B7_NEW_LIVE,
  M3B8_NEW_LIVE,
  M3B9_NEW_LIVE,
  M3B10_NEW_LIVE,
  NEVER_PLAYABLE_ADCODES,
  isProvincialCapital,
} from './region7.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const SKIP_PARENT = new Set(['municipality', 'sar'])
const NEVER = new Set(NEVER_PLAYABLE_ADCODES)
const EXEMPT_PARENT = new Set(['630000', '460000', '650000', '640000', '520000', '540000', '220000', '530000', '150000', '350000'])
const PREV = [M3B2_NEW_LIVE, M3B3_NEW_LIVE, M3B4_NEW_LIVE, M3B5_NEW_LIVE, M3B6_NEW_LIVE, M3B7_NEW_LIVE, M3B8_NEW_LIVE, M3B9_NEW_LIVE]

const MUST_TEACH = {
  xingtai: ['七里河'],
  jincheng: ['沁河', '不是山城'],
  fuxin: ['细河', '不拿本溪'],
  shuangyashan: ['安邦河', '不拿伊春'],
  suqian: ['骆马湖'],
  quzhou: ['衢江'],
  xuancheng: ['水阳江', '不拿黄山'],
  yingtan: ['信江', '不拿龙虎山'],
  heze: ['万福河', '不拿泰山'],
  zhumadian: ['汝河'],
  ezhou: ['梁子湖'],
  loudi: ['涟水', '不拿张家界'],
  heyuan: ['东江'],
  chongzuo: ['左江'],
  guangan: ['渠江', '不是山城'],
  tongchuan: ['漆水', '不是山城'],
  dingxi: ['祖厉河'],
}

function fail(msg) {
  console.error(`validate:m3b10 FAIL — ${msg}`)
  process.exitCode = 1
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function packDir(id) {
  return path.join(root, 'public', 'packs', id)
}

function eligibleNonCap(cities) {
  return cities.filter((r) => !isProvincialCapital(r, PROVINCES) && !NEVER.has(r.adcode))
}

if (M3B10_NEW_LIVE.length < 15 || M3B10_NEW_LIVE.length > 20) {
  fail(`M3B10_NEW_LIVE ${M3B10_NEW_LIVE.length} not in 15–20`)
}
if (M3B10_NEW_LIVE.length > 22) fail(`M3B10_NEW_LIVE ${M3B10_NEW_LIVE.length} > 22 honest cap`)
if (new Set(M3B10_NEW_LIVE).size !== M3B10_NEW_LIVE.length) fail('duplicate M3B10 packId')
for (const id of M3B10_NEW_LIVE) {
  for (const prev of PREV) {
    if (prev.includes(id)) fail(`M3B10 pack ${id} already in an earlier batch`)
  }
  if (M3B1_CAPITAL_PACKS.includes(id)) fail(`M3B10 pack ${id} is an administrative center`)
}
for (const banned of ['zhangjiajie', 'dali', 'huangshan', 'sansha', 'taian', 'yichunhlj']) {
  if (M3B10_NEW_LIVE.includes(banned)) fail(`celebrity or never-playable id: ${banned}`)
}

const manifestPath = path.join(root, 'public', 'packs', 'manifest.json')
if (!fs.existsSync(manifestPath)) fail('missing public/packs/manifest.json')
const manifest = readJson(manifestPath)
const disc = String(manifest.disclaimer || '') + DISCLAIMER
if (!disc.includes('不宣称') || !/不是 333/.test(disc)) {
  fail('disclaimer must state 不宣称 / 不是 333 完成')
}
if (!/不是 293|不宣称.*293/.test(disc)) {
  fail('disclaimer must state 不是 293 完成')
}
if (!/34 省|行政中心/.test(disc)) {
  fail('disclaimer must keep 34 省行政中心')
}
if (!/≥21|各 ≥3/.test(disc)) {
  fail('disclaimer must keep 非省会 live ≥21 / 各 ≥3')
}
if (!/≥9/.test(disc)) {
  fail('disclaimer must state 非省会 ≥9 / 省')
}
if (!/豁免青海|青海/.test(disc)) fail('disclaimer must state 豁免青海')
if (!/海南|三沙/.test(disc)) fail('disclaimer must state 豁免海南 / 三沙')
if (!/新疆/.test(disc)) fail('disclaimer must state 豁免新疆')
if (!/宁夏/.test(disc)) fail('disclaimer must state 豁免宁夏')
if (!/贵州/.test(disc)) fail('disclaimer must state 豁免贵州')
if (!/西藏/.test(disc)) fail('disclaimer must state 豁免西藏')
if (!/吉林/.test(disc)) fail('disclaimer must state 豁免吉林')
if (!/云南/.test(disc)) fail('disclaimer must state 豁免云南')
if (!/内蒙古/.test(disc)) fail('disclaimer must state 豁免内蒙古')
if (!/福建/.test(disc)) fail('disclaimer must state 豁免福建')
if (!/非省会总数 <9/.test(disc)) fail('disclaimer must state 豁免非省会总数 <9 的省')
if (!/230\/293|约 230/.test(disc)) {
  fail('disclaimer must state prefecture_city live 约 230/293, not 293 complete')
}
if (!/非省会地级|每省/.test(disc)) fail('disclaimer must keep 非省会地级市')
if (!/M3b10|第九批/.test(disc + String(manifest.version || ''))) {
  fail('disclaimer/version must keep M3b10 / 第九批 wording')
}

const liveIds = new Set(manifest.liveCityPacks ?? [])
for (const id of M3B1_CAPITAL_PACKS) {
  if (!liveIds.has(id)) fail(`M3b1 capital live missing ${id} (regression)`)
}
for (const id of M3A3_NONCAPITAL_LIVE) {
  if (!liveIds.has(id)) fail(`M3a3 non-capital live missing ${id} (regression)`)
}
for (const prev of PREV) {
  for (const id of prev) {
    if (!liveIds.has(id)) fail(`earlier batch live missing ${id} (regression)`)
  }
}
for (const id of M3B10_NEW_LIVE) {
  if (!liveIds.has(id)) fail(`M3b10 new live missing ${id}`)
}

const rows = allRows()
const gaps = []
const covered = []
const exempt = []

for (const prov of PROVINCES) {
  if (SKIP_PARENT.has(prov.unitType)) continue
  const cities = PREFECTURES.filter((r) => r.parentAdcode === prov.adcode && r.unitType === 'prefecture_city')
  if (cities.length === 0) continue
  const nonCap = eligibleNonCap(cities)
  if (nonCap.length === 0) continue
  const liveNonCap = nonCap.filter((r) => r.status === 'live' && r.playable_3d && r.packId)
  if (nonCap.length < 9) {
    exempt.push(`${prov.shortName}:${liveNonCap.map((c) => c.packId).join('/') || 'none'}`)
    continue
  }
  if (liveNonCap.length < 9) {
    gaps.push(`${prov.name}（${prov.adcode}） live=${liveNonCap.map((c) => c.packId).join('/') || '0'}`)
  } else {
    covered.push(`${prov.shortName}:${liveNonCap.map((c) => c.packId).join('/')}`)
  }
}

if (gaps.length) fail(`provinces with ≥9 eligible non-capital prefecture_city but <9 live: ${gaps.join(', ')}`)

const qinghai = PROVINCES.find((p) => p.adcode === '630000')
const qhNonCap = PREFECTURES.filter(
  (r) => r.parentAdcode === '630000' && r.unitType === 'prefecture_city' && !isProvincialCapital(r, PROVINCES),
)
if (!qinghai || qhNonCap.length !== 1 || qhNonCap[0].adcode !== '630200') {
  fail('青海 exemption expects exactly 1 non-capital prefecture_city (海东 630200)')
}
if (qhNonCap[0].status !== 'live' || !qhNonCap[0].playable_3d) {
  fail('海东 must remain live (Qinghai only non-capital prefecture_city)')
}

const hainanCities = PREFECTURES.filter((r) => r.parentAdcode === '460000' && r.unitType === 'prefecture_city')
const hainanEligible = eligibleNonCap(hainanCities)
const hainanLive = hainanEligible.filter((r) => r.status === 'live' && r.playable_3d && r.packId)
if (hainanEligible.length !== 2) fail(`海南 eligible non-cap ${hainanEligible.length} ≠ 2 (exclude 三沙)`)
if (hainanLive.length < 2) fail('海南 must keep 三亚+儋州 live')
if (!hainanLive.some((c) => c.packId === 'sanya') || !hainanLive.some((c) => c.packId === 'danzhou')) {
  fail('海南 live non-cap must remain 三亚 + 儋州')
}

function keepFloor(parentAdcode, label, eligibleN, minLive, requiredPack) {
  const cities = PREFECTURES.filter((r) => r.parentAdcode === parentAdcode && r.unitType === 'prefecture_city')
  const eligible = eligibleNonCap(cities)
  const live = eligible.filter((r) => r.status === 'live' && r.playable_3d && r.packId)
  if (eligible.length !== eligibleN) fail(`${label} eligible non-cap ${eligible.length} ≠ ${eligibleN}`)
  if (live.length < minLive) fail(`${label} must keep ≥${minLive} non-capital live`)
  if (requiredPack && !live.some((c) => c.packId === requiredPack)) {
    fail(`${label} must keep ${requiredPack} live`)
  }
}

keepFloor('650000', '新疆', 3, 3)
keepFloor('640000', '宁夏', 4, 4)
keepFloor('520000', '贵州', 5, 5)
keepFloor('540000', '西藏', 5, 5)
keepFloor('530000', '云南', 7, 7, 'lijiang')
keepFloor('220000', '吉林', 7, 7, 'baishan')
keepFloor('150000', '内蒙古', 8, 8, 'wuhai')
keepFloor('350000', '福建', 8, 8, 'sanming')

const pcLive = PREFECTURES.filter((r) => r.unitType === 'prefecture_city' && r.status === 'live' && r.playable_3d && r.packId)
if (pcLive.length < 228) fail(`prefecture_city live ${pcLive.length} < 228 (M3b10 batch too small)`)
if (pcLive.length > 233) fail(`prefecture_city live ${pcLive.length} > 233 honest window for this slice`)
if (pcLive.length >= 293) fail(`prefecture_city live ${pcLive.length} ≥ 293 — must not claim 293 complete`)

const BLOCK_QUEUE = /张家界|大理|黄山|三沙|泰山|伊春/
const seenParent = new Map()
for (const id of M3B10_NEW_LIVE) {
  const dir = packDir(id)
  for (const f of ['city.json', 'layout.json', 'knowledge.json', 'quiz.json']) {
    if (!fs.existsSync(path.join(dir, f))) fail(`${id} missing ${f}`)
  }
  const city = readJson(path.join(dir, 'city.json'))
  const layout = readJson(path.join(dir, 'layout.json'))
  const knowledge = readJson(path.join(dir, 'knowledge.json'))
  const quiz = readJson(path.join(dir, 'quiz.json'))

  if (city.draft) fail(`${id} still draft`)
  if (city.fictional) fail(`${id} must not be fictional`)
  if (city.unitType !== 'prefecture_city') fail(`${id} must be prefecture_city`)
  if (['lat', 'lon', 'latitude', 'longitude'].some((k) => k in city)) fail(`${id} has coords`)
  if (BLOCK_QUEUE.test(city.name) || BLOCK_QUEUE.test(city.packId)) fail(`${id} celebrity mountain-city queue-jump`)

  const row = rows.find((x) => x.adcode === city.adcode)
  if (!row) fail(`${id} missing admin row ${city.adcode}`)
  if (row.packId !== id) fail(`${city.adcode} packId ${row.packId} ≠ ${id}`)
  if (row.status !== 'live' || !row.playable_3d) fail(`${city.adcode} must be live playable_3d`)
  if (isProvincialCapital(row, PROVINCES)) fail(`${id} is an administrative center and cannot count as 非省会`)
  if (NEVER.has(city.adcode)) fail(`${id} is never-playable and cannot pad live counts`)
  if (EXEMPT_PARENT.has(row.parentAdcode)) fail(`${id} is in an exempt province`)
  if (seenParent.has(row.parentAdcode)) fail(`${id} duplicates province already filled by ${seenParent.get(row.parentAdcode)}`)
  seenParent.set(row.parentAdcode, id)

  const parentCities = PREFECTURES.filter((r) => r.parentAdcode === row.parentAdcode && r.unitType === 'prefecture_city')
  if (eligibleNonCap(parentCities).length < 9) fail(`${id} parent has <9 eligible non-cap`)

  const zones = layout.zones ?? []
  if (zones.length < 3) fail(`${id} zones ${zones.length} < 3`)
  const lms = layout.landmarks ?? []
  if (lms.length < 5) fail(`${id} landmarks ${lms.length} < 5`)
  const interacts = new Set(lms.map((l) => l.interact))
  if (!interacts.has('guard')) fail(`${id} missing GUARD`)
  if (!interacts.has('visit')) fail(`${id} missing VISIT`)
  const cards = knowledge.cards ?? []
  if (cards.length < 8) fail(`${id} knowledge cards ${cards.length} < 8`)
  const questions = quiz.questions ?? []
  const q68 = questions.filter((q) => q.ageBand === '6-8')
  const q912 = questions.filter((q) => q.ageBand === '9-12')
  if (q68.length < 4) fail(`${id} 6-8 quiz ${q68.length} < 4`)
  if (q912.length < 5) fail(`${id} 9-12 quiz ${q912.length} < 5`)
  if (questions.length < 3) fail(`${id} quiz ${questions.length} < 3`)

  const entry = (manifest.packs ?? []).find((p) => p.id === id)
  if (!entry || entry.status !== 'live') fail(`manifest ${id} not live`)

  const blob = JSON.stringify(city) + JSON.stringify(layout) + JSON.stringify(knowledge)
  if (/mountain_layers/.test(blob)) fail(`${id} must not use mountain_layers default skin`)
  for (const phrase of MUST_TEACH[id] ?? []) {
    if (!JSON.stringify(knowledge).includes(phrase)) fail(`${id} knowledge missing 「${phrase}」`)
  }
}

if (seenParent.size !== M3B10_NEW_LIVE.length) fail('M3b10 packs must be one city per gap province')

const sansha = PREFECTURES.find((r) => r.adcode === '460300')
if (!sansha || sansha.playable_3d) fail('三沙市 must remain playable_3d=false')
if (liveIds.has('sansha')) fail('三沙 must not be used to pad live counts')

for (const spec of [
  ['430800', '张家界'],
  ['341000', '黄山'],
  ['370900', '泰安'],
  ['230700', '伊春'],
]) {
  const row = PREFECTURES.find((r) => r.adcode === spec[0])
  if (!row || row.playable_3d || row.status === 'live') fail(`${spec[1]} must stay grey（不插队）`)
}
const dali = PREFECTURES.find((r) => r.name.startsWith('大理'))
if (!dali || dali.playable_3d || dali.status === 'live') fail('大理 must stay grey（不插队）')

if (process.exitCode) process.exit(process.exitCode)

console.log('validate:m3b10 OK — provinces with ≥9 eligible non-capital prefecture_city have ≥9 live, not 293/333 complete')
console.log(`  this-slice new live (${M3B10_NEW_LIVE.length}): ${M3B10_NEW_LIVE.join(', ')}`)
console.log(`  provinces covered ≥9: ${covered.join(', ')}`)
console.log(`  exempt (<9 eligible non-cap prefecture_city): ${exempt.join(', ')}`)
console.log(`  prefecture_city live ${pcLive.length}/293`)
console.log(`  M3b1 capitals still ${M3B1_CAPITAL_PACKS.length}; earlier batches kept; M3a3 non-capital still ${M3A3_NONCAPITAL_LIVE.length}`)
