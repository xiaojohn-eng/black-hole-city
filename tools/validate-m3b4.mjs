#!/usr/bin/env node
/**
 * M3b4 gate: every province/AR with ≥3 eligible non-capital prefecture_city
 * rows must have ≥3 live non-capital prefecture_city.
 * Eligible excludes 三沙 (never playable). Qinghai exempt (only Haidong).
 * Hainan therefore has 2 playable non-caps (Sanya + Danzhou) and is exempt.
 * Municipalities / SARs / Taiwan teaching packs are exempt.
 * This slice is M3b's third batch — not 293 complete, not 333 complete.
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
  NEVER_PLAYABLE_ADCODES,
  isProvincialCapital,
} from './region7.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const SKIP_PARENT = new Set(['municipality', 'sar'])
const NEVER = new Set(NEVER_PLAYABLE_ADCODES)

function fail(msg) {
  console.error(`validate:m3b4 FAIL — ${msg}`)
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

if (M3B4_NEW_LIVE.length < 18 || M3B4_NEW_LIVE.length > 26) {
  fail(`M3B4_NEW_LIVE ${M3B4_NEW_LIVE.length} not in 18–26`)
}
if (new Set(M3B4_NEW_LIVE).size !== M3B4_NEW_LIVE.length) fail('duplicate M3B4 packId')
for (const id of M3B4_NEW_LIVE) {
  if (M3B3_NEW_LIVE.includes(id)) fail(`M3B4 pack ${id} already in M3B3_NEW_LIVE`)
  if (M3B2_NEW_LIVE.includes(id)) fail(`M3B4 pack ${id} already in M3B2_NEW_LIVE`)
  if (M3B1_CAPITAL_PACKS.includes(id)) fail(`M3B4 pack ${id} is an administrative center`)
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
if (!/≥3/.test(disc)) {
  fail('disclaimer must state 非省会 ≥3 / 省')
}
if (!/豁免青海|青海/.test(disc)) {
  fail('disclaimer must state 豁免青海')
}
if (!/非省会总数 <3|海南|三沙/.test(disc)) {
  fail('disclaimer must state 豁免非省会总数 <3 的省 / 海南三沙')
}
if (!/105\/293|约 105|prefecture_city live/.test(disc)) {
  fail('disclaimer must state prefecture_city live progress, not 293 complete')
}
if (!/非省会地级|每省/.test(disc)) {
  fail('disclaimer must keep 非省会地级市')
}
if (!/M3b4|第三批|批次管线/.test(disc + String(manifest.version || ''))) {
  fail('disclaimer/version must keep M3b4 batch pipeline wording')
}

const liveIds = new Set(manifest.liveCityPacks ?? [])
for (const id of M3B1_CAPITAL_PACKS) {
  if (!liveIds.has(id)) fail(`M3b1 capital live missing ${id} (regression)`)
}
for (const id of M3A3_NONCAPITAL_LIVE) {
  if (!liveIds.has(id)) fail(`M3a3 non-capital live missing ${id} (regression)`)
}
for (const id of M3B2_NEW_LIVE) {
  if (!liveIds.has(id)) fail(`M3b2 new live missing ${id} (regression)`)
}
for (const id of M3B3_NEW_LIVE) {
  if (!liveIds.has(id)) fail(`M3b3 new live missing ${id} (regression)`)
}
for (const id of M3B4_NEW_LIVE) {
  if (!liveIds.has(id)) fail(`M3b4 new live missing ${id}`)
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
  if (nonCap.length < 3) {
    exempt.push(`${prov.shortName}:${liveNonCap.map((c) => c.packId).join('/') || 'none'}`)
    continue
  }
  if (liveNonCap.length < 3) {
    gaps.push(`${prov.name}（${prov.adcode}） live=${liveNonCap.map((c) => c.packId).join('/') || '0'}`)
  } else {
    covered.push(`${prov.shortName}:${liveNonCap.map((c) => c.packId).join('/')}`)
  }
}

if (gaps.length) fail(`provinces with ≥3 eligible non-capital prefecture_city but <3 live: ${gaps.join(', ')}`)

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

const pcLive = PREFECTURES.filter((r) => r.unitType === 'prefecture_city' && r.status === 'live' && r.playable_3d && r.packId)
if (pcLive.length < 99) fail(`prefecture_city live ${pcLive.length} < 99 (M3b4 batch too small)`)
if (pcLive.length > 109) fail(`prefecture_city live ${pcLive.length} > 109 honest cap for this slice`)
if (pcLive.length >= 293) fail(`prefecture_city live ${pcLive.length} ≥ 293 — must not claim 293 complete`)

const BLOCK_CELEB = /丽江|张家界|大理/
for (const id of M3B4_NEW_LIVE) {
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
  if (BLOCK_CELEB.test(city.name) || BLOCK_CELEB.test(city.packId)) fail(`${id} celebrity mountain-city queue-jump`)

  const row = rows.find((x) => x.adcode === city.adcode)
  if (!row) fail(`${id} missing admin row ${city.adcode}`)
  if (row.packId !== id) fail(`${city.adcode} packId ${row.packId} ≠ ${id}`)
  if (row.status !== 'live' || !row.playable_3d) fail(`${city.adcode} must be live playable_3d`)
  if (isProvincialCapital(row, PROVINCES)) fail(`${id} is an administrative center and cannot count as 非省会`)
  if (NEVER.has(city.adcode)) fail(`${id} is never-playable and cannot pad live counts`)

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

  const blob = JSON.stringify(city) + JSON.stringify(layout)
  if (/mountain_layers/.test(blob)) fail(`${id} must not use mountain_layers default skin`)
}

const sansha = PREFECTURES.find((r) => r.adcode === '460300')
if (!sansha || sansha.playable_3d) fail('三沙市 must remain playable_3d=false')
if (M3B4_NEW_LIVE.includes('sansha') || liveIds.has('sansha')) fail('三沙 must not be used to pad live counts')

if (M3B4_NEW_LIVE.includes('lijiang') || M3B4_NEW_LIVE.includes('zhangjiajie') || M3B4_NEW_LIVE.includes('dali')) {
  fail('celebrity mountain-city queue-jump in M3B4_NEW_LIVE')
}

if (process.exitCode) process.exit(process.exitCode)

console.log('validate:m3b4 OK — provinces with ≥3 eligible non-capital prefecture_city have ≥3 live, not 293/333 complete')
console.log(`  this-slice new live (${M3B4_NEW_LIVE.length}): ${M3B4_NEW_LIVE.join(', ')}`)
console.log(`  provinces covered ≥3: ${covered.join(', ')}`)
console.log(`  exempt (<3 eligible non-cap prefecture_city): ${exempt.join(', ')}`)
console.log(`  prefecture_city live ${pcLive.length}/293`)
console.log(`  M3b1 capitals still ${M3B1_CAPITAL_PACKS.length}; M3b2 still ${M3B2_NEW_LIVE.length}; M3b3 still ${M3B3_NEW_LIVE.length}; M3a3 non-capital still ${M3A3_NONCAPITAL_LIVE.length}`)
