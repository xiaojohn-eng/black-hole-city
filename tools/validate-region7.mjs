#!/usr/bin/env node
/**
 * M3a + M3a2: seven-region coverage gate.
 * Each region ≥1 live real city + ≥3 names in pipeline (live|draft).
 * M3a2: each region ≥1 true non-capital live; national non-capital live ≥7.
 * Never claims 333 complete.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PROVINCES, allRows } from './admin-div-data.mjs'
import {
  DISCLAIMER,
  M3A_LIVE_PACKS,
  M3A_PIPELINE,
  M3A2_NAMED_LIVE,
  M3A2_NONCAPITAL_LIVE,
  REGION7,
  isProvincialCapital,
} from './region7.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function fail(msg) {
  console.error(`validate:region7 FAIL — ${msg}`)
  process.exitCode = 1
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function packDir(id) {
  return path.join(root, 'public', 'packs', id)
}

const manifestPath = path.join(root, 'public', 'packs', 'manifest.json')
if (!fs.existsSync(manifestPath)) fail('missing public/packs/manifest.json')
const manifest = readJson(manifestPath)

const disc = String(manifest.disclaimer || '')
if (!disc.includes('不宣称') || !/不是 333|不宣称全国/.test(disc + JSON.stringify(manifest.version))) {
  fail('manifest disclaimer must state 不宣称全国收录 / 不是 333 完成')
}

const liveIds = [...new Set(manifest.liveCityPacks ?? [])]
if (liveIds.length < 7) fail(`liveCityPacks ${liveIds.length} < 7`)
for (const id of M3A_LIVE_PACKS) {
  if (!liveIds.includes(id)) fail(`liveCityPacks missing ${id}`)
}
for (const id of M3A2_NAMED_LIVE) {
  if (!liveIds.includes(id)) fail(`M3a2 named live missing ${id}`)
}
for (const id of M3A2_NONCAPITAL_LIVE) {
  if (!liveIds.includes(id)) fail(`M3a2 non-capital live missing ${id}`)
}

const packById = new Map()
for (const p of manifest.packs ?? []) packById.set(p.id, p)

/** @type {Map<string, { live: object[], pipeline: object[] }>} */
const byRegion = new Map(REGION7.map((r) => [r, { live: [], pipeline: [] }]))

for (const id of liveIds) {
  const dir = packDir(id)
  const cityPath = path.join(dir, 'city.json')
  if (!fs.existsSync(cityPath)) {
    fail(`live pack missing ${id}/city.json`)
    continue
  }
  const city = readJson(cityPath)
  if (city.draft) fail(`${id} is in liveCityPacks but city.draft=true`)
  if (city.fictional) fail(`${id} live city must not be fictional`)
  const r7 = city.region7
  if (!REGION7.includes(r7)) fail(`${id} missing/invalid region7 ${r7}`)
  byRegion.get(r7).live.push({ id, city })
  byRegion.get(r7).pipeline.push({ id, status: 'live', city })
}

const draftIds = (manifest.draftCityPacks ?? []).concat(
  (manifest.packs ?? []).filter((p) => p.status === 'draft').map((p) => p.id),
)
const draftSet = new Set(draftIds)
for (const id of draftSet) {
  if (liveIds.includes(id)) fail(`${id} listed as both live and draft`)
  const dir = packDir(id)
  for (const f of ['city.json', 'layout.json', 'knowledge.json', 'quiz.json']) {
    if (!fs.existsSync(path.join(dir, f))) fail(`draft ${id} missing ${f}`)
  }
  const city = readJson(path.join(dir, 'city.json'))
  if (!city.draft) fail(`${id} manifest draft but city.draft is not true`)
  const r7 = city.region7
  if (!REGION7.includes(r7)) fail(`draft ${id} missing/invalid region7`)
  byRegion.get(r7).pipeline.push({ id, status: 'draft', city })
}

for (const r of REGION7) {
  const slot = byRegion.get(r)
  if (slot.live.length < 1) fail(`region ${r} has no live real city`)
  if (slot.pipeline.length < 3) fail(`region ${r} pipeline ${slot.pipeline.length} < 3 (need 1 live + ≥2 more)`)
}

const rows = allRows()
const nonCap = []
const nonCapLiveByRegion = new Map(REGION7.map((r) => [r, []]))
for (const id of [...liveIds, ...draftSet]) {
  const cityPath = path.join(packDir(id), 'city.json')
  if (!fs.existsSync(cityPath)) continue
  const city = readJson(cityPath)
  if (city.fictional) continue
  const row = rows.find((x) => x.adcode === city.adcode) || rows.find((x) => x.packId === id)
  if (!row) continue
  if (isProvincialCapital(row, PROVINCES)) continue
  const status = liveIds.includes(id) ? 'live' : 'draft'
  nonCap.push({ id, name: city.name, status, region7: city.region7 })
  if (status === 'live' && REGION7.includes(city.region7)) {
    nonCapLiveByRegion.get(city.region7).push(id)
  }
}
if (nonCap.length < 3) fail(`non-capital live|draft ${nonCap.length} < 3`)
const nonCapLive = nonCap.filter((x) => x.status === 'live')
if (nonCapLive.length < 7) fail(`non-capital live ${nonCapLive.length} < 7`)
for (const r of REGION7) {
  const ids = nonCapLiveByRegion.get(r)
  if (!ids.length) fail(`region ${r} has no non-capital live city`)
}

for (const spec of M3A_PIPELINE) {
  const dir = packDir(spec.packId)
  if (!fs.existsSync(path.join(dir, 'city.json'))) fail(`pipeline missing pack ${spec.packId}`)
  const city = readJson(path.join(dir, 'city.json'))
  if (city.adcode !== spec.adcode) fail(`${spec.packId} adcode ${city.adcode} ≠ ${spec.adcode}`)
  if (city.region7 !== spec.region7) fail(`${spec.packId} region7 ${city.region7} ≠ ${spec.region7}`)
  if (spec.status === 'live' && city.draft) fail(`${spec.packId} should be live`)
  if (spec.status === 'draft' && !city.draft) fail(`${spec.packId} should remain draft`)
}

const rowLive = rows.filter((r) => r.status === 'live' && r.playable_3d && r.packId)
for (const id of M3A_LIVE_PACKS) {
  if (!rowLive.some((r) => r.packId === id)) fail(`admin_div missing live row for ${id}`)
}

if (process.exitCode) process.exit(process.exitCode)

console.log('validate:region7 OK — factory coverage, not 333 complete')
console.log(`  disclaimer: ${DISCLAIMER.slice(0, 40)}…`)
console.log('  live cities:')
for (const id of liveIds) {
  const city = readJson(path.join(packDir(id), 'city.json'))
  console.log(`    ${id.padEnd(12)} ${city.adcode}  ${city.region7}  ${city.name}`)
}
console.log('  seven-region:')
for (const r of REGION7) {
  const slot = byRegion.get(r)
  const live = slot.live.map((x) => x.id).join(',')
  const rest = slot.pipeline.filter((x) => x.status !== 'live').map((x) => x.id)
  const nc = nonCapLiveByRegion.get(r).join(',')
  console.log(`    ${r}  live=${live}  noncap=${nc}  pipeline=${slot.pipeline.length}  drafts=${rest.join(',') || '—'}`)
}
console.log(`  non-capital live (${nonCapLive.length}): ${nonCapLive.map((x) => x.id).join(', ')}`)
console.log(`  non-capital live|draft (${nonCap.length}): ${nonCap.map((x) => x.id).join(', ')}`)
