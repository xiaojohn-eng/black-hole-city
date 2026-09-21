#!/usr/bin/env node
/**
 * M3b2 gate: every province/AR that has prefecture_city rows must have
 * ≥1 live non-capital prefecture_city.
 * Municipalities / SARs / Taiwan teaching packs are exempt.
 * This slice is a batch — not 293 complete, not 333 complete.
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
  isProvincialCapital,
} from './region7.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function fail(msg) {
  console.error(`validate:m3b2 FAIL — ${msg}`)
  process.exitCode = 1
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function packDir(id) {
  return path.join(root, 'public', 'packs', id)
}

if (M3B2_NEW_LIVE.length < 12 || M3B2_NEW_LIVE.length > 20) {
  fail(`M3B2_NEW_LIVE ${M3B2_NEW_LIVE.length} not in 12–20`)
}
if (new Set(M3B2_NEW_LIVE).size !== M3B2_NEW_LIVE.length) fail('duplicate M3B2 packId')

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
if (!/非省会地级|每省/.test(disc)) {
  fail('disclaimer must state 每省 ≥1 非省会地级市')
}
if (!/61\/293|约 61|prefecture_city live/.test(disc)) {
  fail('disclaimer must state prefecture_city live progress, not 293 complete')
}

const liveIds = new Set(manifest.liveCityPacks ?? [])
for (const id of M3B1_CAPITAL_PACKS) {
  if (!liveIds.has(id)) fail(`M3b1 capital live missing ${id} (regression)`)
}
for (const id of M3A3_NONCAPITAL_LIVE) {
  if (!liveIds.has(id)) fail(`M3a3 non-capital live missing ${id} (regression)`)
}
for (const id of M3B2_NEW_LIVE) {
  if (!liveIds.has(id)) fail(`M3b2 new live missing ${id}`)
}

const SKIP_PARENT = new Set(['municipality', 'sar'])
const rows = allRows()
const gaps = []
const covered = []

for (const prov of PROVINCES) {
  if (SKIP_PARENT.has(prov.unitType)) continue
  const cities = PREFECTURES.filter((r) => r.parentAdcode === prov.adcode && r.unitType === 'prefecture_city')
  if (cities.length === 0) continue
  const nonCap = cities.filter((r) => !isProvincialCapital(r, PROVINCES))
  if (nonCap.length === 0) continue
  const liveNonCap = nonCap.filter((r) => r.status === 'live' && r.playable_3d && r.packId)
  if (liveNonCap.length < 1) {
    gaps.push(`${prov.name}（${prov.adcode}）`)
  } else {
    covered.push(`${prov.shortName}:${liveNonCap.map((c) => c.packId).join('/')}`)
  }
}

if (gaps.length) fail(`provinces with prefecture_city but no non-capital live: ${gaps.join(', ')}`)

const pcLive = PREFECTURES.filter((r) => r.unitType === 'prefecture_city' && r.status === 'live' && r.playable_3d && r.packId)
if (pcLive.length < 60) fail(`prefecture_city live ${pcLive.length} < 60 (M3b2 batch too small)`)
if (pcLive.length >= 293) fail(`prefecture_city live ${pcLive.length} ≥ 293 — must not claim 293 complete`)

for (const id of M3B2_NEW_LIVE) {
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

  const row = rows.find((x) => x.adcode === city.adcode)
  if (!row) fail(`${id} missing admin row ${city.adcode}`)
  if (row.packId !== id) fail(`${city.adcode} packId ${row.packId} ≠ ${id}`)
  if (row.status !== 'live' || !row.playable_3d) fail(`${city.adcode} must be live playable_3d`)
  if (isProvincialCapital(row, PROVINCES)) fail(`${id} is an administrative center and cannot count as 非省会`)

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

if (process.exitCode) process.exit(process.exitCode)

console.log('validate:m3b2 OK — each province with prefecture_city has ≥1 non-capital live, not 293/333 complete')
console.log(`  this-slice new live (${M3B2_NEW_LIVE.length}): ${M3B2_NEW_LIVE.join(', ')}`)
console.log(`  provinces covered: ${covered.join(', ')}`)
console.log(`  prefecture_city live ${pcLive.length}/293`)
console.log(`  M3b1 capitals still ${M3B1_CAPITAL_PACKS.length}; M3a3 non-capital still ${M3A3_NONCAPITAL_LIVE.length}`)
