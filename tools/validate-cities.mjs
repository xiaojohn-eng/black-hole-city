#!/usr/bin/env node
/**
 * Count-gate for national coverage (PRD §3.1 / eval A3).
 * Writes data/admin_div.csv and public/data/admin_index.json (no lat/lon).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PROVINCES, PREFECTURES, EXTRAS, CSV_HEADER, allRows, toCsvLine } from './admin-div-data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const EXPECT = {
  provinces: 34,
  prefectureTotal: 333,
  prefecture_city: 293,
  autonomous_prefecture: 30,
  prefecture: 7,
  league: 3,
}

function fail(msg) {
  console.error(`validate:cities FAIL — ${msg}`)
  process.exitCode = 1
}

function countBy(rows, type) {
  return rows.filter((r) => r.unitType === type).length
}

const provincialTypes = new Set(['municipality', 'province', 'autonomous_region', 'sar'])
const prefectureTypes = new Set(['prefecture_city', 'autonomous_prefecture', 'prefecture', 'league'])

const provinces = PROVINCES
const prefectures = PREFECTURES

if (provinces.length !== EXPECT.provinces) fail(`provincial rows ${provinces.length} ≠ ${EXPECT.provinces}`)
if (prefectures.length !== EXPECT.prefectureTotal) fail(`prefecture rows ${prefectures.length} ≠ ${EXPECT.prefectureTotal}`)

const pc = countBy(prefectures, 'prefecture_city')
const zhou = countBy(prefectures, 'autonomous_prefecture')
const diqu = countBy(prefectures, 'prefecture')
const meng = countBy(prefectures, 'league')
if (pc !== EXPECT.prefecture_city) fail(`prefecture_city ${pc} ≠ ${EXPECT.prefecture_city}`)
if (zhou !== EXPECT.autonomous_prefecture) fail(`autonomous_prefecture ${zhou} ≠ ${EXPECT.autonomous_prefecture}`)
if (diqu !== EXPECT.prefecture) fail(`prefecture(地区) ${diqu} ≠ ${EXPECT.prefecture}`)
if (meng !== EXPECT.league) fail(`league(盟) ${meng} ≠ ${EXPECT.league}`)

const mun = countBy(provinces, 'municipality')
const prov = countBy(provinces, 'province')
const ar = countBy(provinces, 'autonomous_region')
const sar = countBy(provinces, 'sar')
if (mun !== 4) fail(`municipalities ${mun} ≠ 4`)
if (prov !== 23) fail(`provinces ${prov} ≠ 23`)
if (ar !== 5) fail(`autonomous_region ${ar} ≠ 5`)
if (sar !== 2) fail(`sar ${sar} ≠ 2`)

const codes = new Set()
for (const row of allRows()) {
  if (!/^\d{6}$/.test(row.adcode)) fail(`bad adcode ${row.adcode}`)
  if (codes.has(row.adcode)) fail(`duplicate adcode ${row.adcode}`)
  codes.add(row.adcode)
  if ('lat' in row || 'lon' in row) fail(`${row.adcode} has lat/lon`)
}

const beijing = allRows().find((r) => r.adcode === '110100')
if (!beijing || beijing.status !== 'live' || beijing.packId !== 'beijing' || !beijing.playable_3d) {
  fail('110100 北京主城 must be live / packId=beijing / playable_3d')
}

const sansha = prefectures.find((r) => r.adcode === '460300')
if (!sansha || sansha.playable_3d) fail('三沙市 must exist and playable_3d=false')

const csvDir = path.join(root, 'data')
fs.mkdirSync(csvDir, { recursive: true })
const csvPath = path.join(csvDir, 'admin_div.csv')
const csv = [CSV_HEADER.join(','), ...allRows().map(toCsvLine)].join('\n') + '\n'
fs.writeFileSync(csvPath, csv, 'utf8')

const parsed = fs.readFileSync(csvPath, 'utf8').trim().split('\n')
const header = parsed[0].split(',')
if (header.includes('lat') || header.includes('lon') || header.includes('latitude') || header.includes('longitude')) {
  fail('CSV must not contain lat/lon columns')
}
const body = parsed.slice(1).map((line) => {
  const cols = line.split(',')
  const obj = {}
  header.forEach((h, i) => {
    obj[h] = cols[i]
  })
  return obj
})
const csvProv = body.filter((r) => provincialTypes.has(r.unitType)).length
const csvPref = body.filter((r) => prefectureTypes.has(r.unitType))
if (csvProv !== 34) fail(`CSV provincial ${csvProv} ≠ 34`)
if (csvPref.length !== 333) fail(`CSV prefecture ${csvPref.length} ≠ 333`)
if (csvPref.filter((r) => r.unitType === 'prefecture_city').length !== 293) fail('CSV city count')
if (csvPref.filter((r) => r.unitType === 'autonomous_prefecture').length !== 30) fail('CSV zhou count')
if (csvPref.filter((r) => r.unitType === 'prefecture').length !== 7) fail('CSV diqu count')
if (csvPref.filter((r) => r.unitType === 'league').length !== 3) fail('CSV meng count')

const publicDir = path.join(root, 'public', 'data')
fs.mkdirSync(publicDir, { recursive: true })
const index = {
  disclaimer: '本切片不宣称全国地级已收录可玩。333 地级行为占位名录，仅北京市主城 3D 可玩。',
  counts: {
    provincial: 34,
    prefectureTotal: 333,
    prefecture_city: 293,
    autonomous_prefecture: 30,
    diqu: 7,
    league: 3,
  },
  provinces: provinces.map((p) => ({
    adcode: p.adcode,
    name: p.name,
    shortName: p.shortName,
    unitType: p.unitType,
    region7: p.region7,
    region4: p.region4,
    capital: p.capital,
    status: p.status,
    packId: p.packId,
    playable: p.status === 'live' && p.packId === 'beijing',
    aliases: p.aliases ? p.aliases.split(',') : [],
  })),
  prefectures: prefectures.concat(EXTRAS).map((c) => ({
    adcode: c.adcode,
    name: c.name,
    unitType: c.unitType,
    parentAdcode: c.parentAdcode,
    provinceName: c.provinceName,
    status: c.status,
    packId: c.packId,
    playable_3d: c.playable_3d,
  })),
}

const indexPath = path.join(publicDir, 'admin_index.json')
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n', 'utf8')

if (process.exitCode) {
  process.exit(process.exitCode)
}

console.log('validate:cities OK')
console.log(`  省级 ${provinces.length}（直辖市${mun} 省${prov} 自治区${ar} 特区${sar}）`)
console.log(`  地级 ${prefectures.length}（市${pc} 州${zhou} 地区${diqu} 盟${meng}）`)
console.log(`  extras ${EXTRAS.length}（不计入 333）`)
console.log(`  wrote ${path.relative(root, csvPath)}`)
console.log(`  wrote ${path.relative(root, indexPath)}`)
