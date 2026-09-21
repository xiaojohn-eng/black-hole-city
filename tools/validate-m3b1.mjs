#!/usr/bin/env node
/**
 * M3b1 gate: each of 34 provincial-level units has ≥1 live administrative center.
 * Does not claim 293 prefecture-cities or 333 complete.
 * Keeps M3a3: national non-capital live ≥21 (asserted here as a no-regression check).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PROVINCES, allRows } from './admin-div-data.mjs'
import {
  DISCLAIMER,
  M3A3_NONCAPITAL_LIVE,
  M3B1_CAPITALS,
  M3B1_CAPITAL_PACKS,
  M3B1_NEW_LIVE,
  isProvincialCapital,
} from './region7.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function fail(msg) {
  console.error(`validate:m3b1 FAIL — ${msg}`)
  process.exitCode = 1
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function packDir(id) {
  return path.join(root, 'public', 'packs', id)
}

if (M3B1_CAPITALS.length !== 34) fail(`M3B1_CAPITALS ${M3B1_CAPITALS.length} ≠ 34`)
if (M3B1_CAPITAL_PACKS.length !== 34) fail(`M3B1_CAPITAL_PACKS ${M3B1_CAPITAL_PACKS.length} ≠ 34`)
if (new Set(M3B1_CAPITAL_PACKS).size !== 34) fail('duplicate M3B1 packId')
if (new Set(M3B1_CAPITALS.map((c) => c.provinceAdcode)).size !== 34) fail('duplicate M3B1 provinceAdcode')

const provincial = new Set(PROVINCES.map((p) => p.adcode))
if (provincial.size !== 34) fail(`PROVINCES ${provincial.size} ≠ 34`)
for (const spec of M3B1_CAPITALS) {
  if (!provincial.has(spec.provinceAdcode)) fail(`unknown province ${spec.provinceAdcode} (${spec.packId})`)
}
for (const p of PROVINCES) {
  if (!M3B1_CAPITALS.some((c) => c.provinceAdcode === p.adcode)) fail(`province ${p.adcode} ${p.name} missing from M3B1_CAPITALS`)
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
  fail('disclaimer must state 34 省行政中心')
}
if (!/≥21|各 ≥3/.test(disc)) {
  fail('disclaimer must keep 非省会 live ≥21 / 各 ≥3')
}

const liveIds = new Set(manifest.liveCityPacks ?? [])
for (const id of M3B1_CAPITAL_PACKS) {
  if (!liveIds.has(id)) fail(`liveCityPacks missing capital ${id}`)
}
for (const id of M3A3_NONCAPITAL_LIVE) {
  if (!liveIds.has(id)) fail(`M3a3 non-capital live missing ${id} (regression)`)
}
for (const id of M3B1_NEW_LIVE) {
  if (!liveIds.has(id)) fail(`M3b1 new/promoted live missing ${id}`)
}

const rows = allRows()
const covered = new Set()

for (const spec of M3B1_CAPITALS) {
  const dir = packDir(spec.packId)
  for (const f of ['city.json', 'layout.json', 'knowledge.json', 'quiz.json']) {
    if (!fs.existsSync(path.join(dir, f))) fail(`capital ${spec.packId} missing ${f}`)
  }
  const city = readJson(path.join(dir, 'city.json'))
  const layout = readJson(path.join(dir, 'layout.json'))
  const knowledge = readJson(path.join(dir, 'knowledge.json'))
  const quiz = readJson(path.join(dir, 'quiz.json'))

  if (city.draft) fail(`${spec.packId} capital pack still draft`)
  if (city.fictional) fail(`${spec.packId} capital must not be fictional`)
  if (city.adcode !== spec.adcode) fail(`${spec.packId} adcode ${city.adcode} ≠ ${spec.adcode}`)
  if (city.region7 !== spec.region7) fail(`${spec.packId} region7 ${city.region7} ≠ ${spec.region7}`)
  if (['lat', 'lon', 'latitude', 'longitude'].some((k) => k in city)) fail(`${spec.packId} has coords`)

  const row = rows.find((x) => x.adcode === spec.adcode)
  if (!row) fail(`${spec.packId} missing admin row ${spec.adcode}`)
  if (row.packId !== spec.packId) fail(`${spec.adcode} packId ${row.packId} ≠ ${spec.packId}`)
  if (row.status !== 'live' || !row.playable_3d) fail(`${spec.adcode} must be live playable_3d`)
  if (!isProvincialCapital(row, PROVINCES)) fail(`${spec.packId} admin row is not an administrative center`)

  const zones = layout.zones ?? []
  if (zones.length < 3) fail(`${spec.packId} zones ${zones.length} < 3`)
  const lms = layout.landmarks ?? []
  if (lms.length < 5) fail(`${spec.packId} landmarks ${lms.length} < 5`)
  const interacts = new Set(lms.map((l) => l.interact))
  if (!interacts.has('guard')) fail(`${spec.packId} missing GUARD`)
  if (!interacts.has('visit')) fail(`${spec.packId} missing VISIT`)
  const cards = knowledge.cards ?? []
  if (cards.length < 8) fail(`${spec.packId} knowledge cards ${cards.length} < 8`)
  const questions = quiz.questions ?? []
  const q68 = questions.filter((q) => q.ageBand === '6-8')
  const q912 = questions.filter((q) => q.ageBand === '9-12')
  if (q68.length < 4) fail(`${spec.packId} 6-8 quiz ${q68.length} < 4`)
  if (q912.length < 5) fail(`${spec.packId} 9-12 quiz ${q912.length} < 5`)
  if (questions.length < 3) fail(`${spec.packId} quiz ${questions.length} < 3`)

  const entry = (manifest.packs ?? []).find((p) => p.id === spec.packId)
  if (!entry || entry.status !== 'live') fail(`manifest ${spec.packId} not live`)

  covered.add(spec.provinceAdcode)
}

if (covered.size !== 34) fail(`covered provinces ${covered.size} ≠ 34`)

if (specChongqingMountain()) fail('chongqing pack must not use mountain destruction default skin')

if (process.exitCode) process.exit(process.exitCode)

console.log('validate:m3b1 OK — 34 provincial admin centers live, not 293/333 complete')
console.log(`  capitals: ${M3B1_CAPITAL_PACKS.join(', ')}`)
console.log(`  this-slice new/promoted: ${M3B1_NEW_LIVE.join(', ')}`)
console.log(`  M3a3 non-capital live still ${M3A3_NONCAPITAL_LIVE.length}`)

function specChongqingMountain() {
  const dir = packDir('chongqing')
  const cityPath = path.join(dir, 'city.json')
  const layoutPath = path.join(dir, 'layout.json')
  if (!fs.existsSync(cityPath) || !fs.existsSync(layoutPath)) return true
  const city = readJson(cityPath)
  const layout = readJson(layoutPath)
  if (city.kitId !== 'jiangnan-water') return true
  const mods = [...(city.gameplayModifiers ?? []), ...(layout.variants ?? [])]
  if (mods.includes('mountain_layers')) return true
  const blob = JSON.stringify(city)
  if (/拆房|粉碎/.test(blob)) return true
  if (!/不是山城|两江博物馆/.test(blob)) return true
  return false
}
