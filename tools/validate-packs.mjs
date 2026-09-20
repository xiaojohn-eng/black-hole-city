#!/usr/bin/env node
/**
 * Pack contract: training + live city minimum sets (M2).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function fail(msg) {
  console.error(`validate:packs FAIL — ${msg}`)
  process.exitCode = 1
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function packDir(id) {
  const a = path.join(root, 'public', 'packs', id)
  if (fs.existsSync(a)) return a
  return path.join(root, 'packs', id)
}

function questionsFor(quiz, band) {
  return (quiz.questions ?? []).filter(
    (q) => q.ageBand === band || (Array.isArray(q.ageBands) && q.ageBands.includes(band)),
  )
}

const manifestPath = path.join(root, 'public', 'packs', 'manifest.json')
if (!fs.existsSync(manifestPath)) fail('missing public/packs/manifest.json')
const manifest = readJson(manifestPath)
const ids = (manifest.packs ?? []).map((p) => p.id)
if (!ids.includes('xingwan-training')) fail('manifest missing xingwan-training')
for (const need of ['beijing', 'shanghai', 'harbin']) {
  if (!ids.includes(need)) fail(`manifest missing ${need}`)
}

const liveCity = (manifest.liveCityPacks ?? ['beijing', 'shanghai', 'harbin']).filter(Boolean)
if (liveCity.length < 3) fail('liveCityPacks must include at least beijing, shanghai, harbin')

const xwDir = packDir('xingwan-training')
for (const f of ['city.json', 'layout.json', 'quiz.json', 'knowledge.json']) {
  if (!fs.existsSync(path.join(xwDir, f))) fail(`missing ${xwDir}/${f}`)
}
const xw = readJson(path.join(xwDir, 'city.json'))
if (!xw.fictional && xw.unitType !== 'training') fail('xingwan must be marked fictional/training')

const cityRules = {
  beijing: {
    minZones: 4,
    minLandmarks: 5,
    guardName: /天安门/,
    visitName: /故宫/,
    themes: ['首都', '京', '温带季风', '胡同', '中轴'],
    modifiers: ['hutong_maze', 'axis_guard'],
    adcode: '110100',
  },
  shanghai: {
    minZones: 4,
    minLandmarks: 5,
    guardName: /纪念碑/,
    visitName: /外滩/,
    themes: ['沪', '黄浦江', '亚热带季风', '里弄'],
    modifiers: ['river_front'],
    adcode: '310100',
  },
  harbin: {
    minZones: 4,
    minLandmarks: 5,
    guardName: /防洪/,
    visitName: /索菲亚|教堂/,
    themes: ['黑', '松花江', '冰雪'],
    modifiers: ['cold_wide_street'],
    adcode: '230100',
  },
}

for (const id of liveCity) {
  const dir = packDir(id)
  for (const f of ['city.json', 'layout.json', 'quiz.json', 'knowledge.json']) {
    if (!fs.existsSync(path.join(dir, f))) fail(`missing ${dir}/${f}`)
  }
  const city = readJson(path.join(dir, 'city.json'))
  const layout = readJson(path.join(dir, 'layout.json'))
  const quiz = readJson(path.join(dir, 'quiz.json'))
  const knowledge = readJson(path.join(dir, 'knowledge.json'))
  const rule = cityRules[id]

  if (city.fictional) fail(`${id} must not be fictional`)
  if (['lat', 'lon', 'latitude', 'longitude'].some((k) => k in city)) fail(`${id} city.json has coords`)
  if (rule && city.adcode !== rule.adcode) fail(`${id} adcode ${city.adcode} ≠ ${rule.adcode}`)
  if ((layout.zones ?? []).length < (rule?.minZones ?? 4)) fail(`${id} zones ${layout.zones?.length} < 4`)
  const lms = layout.landmarks ?? city.landmarks ?? []
  if (lms.length < (rule?.minLandmarks ?? 5)) fail(`${id} landmarks ${lms.length} < 5`)
  const interacts = new Set(lms.map((l) => l.interact))
  if (!interacts.has('guard')) fail(`${id} missing interact=guard`)
  if (!interacts.has('visit')) fail(`${id} missing interact=visit`)
  if (rule?.guardName) {
    const g = lms.find((l) => rule.guardName.test(l.name) || rule.guardName.test(l.id))
    if (!g || g.interact !== 'guard') fail(`${id} GUARD landmark missing (${rule.guardName})`)
  }
  if (rule?.visitName) {
    const v = lms.find((l) => rule.visitName.test(l.name) || rule.visitName.test(l.id))
    if (!v || v.interact !== 'visit') fail(`${id} VISIT landmark missing (${rule.visitName})`)
  }
  const cards = knowledge.cards ?? []
  if (cards.length < 8) fail(`${id} knowledge cards ${cards.length} < 8`)
  const blob = JSON.stringify(knowledge)
  for (const need of rule?.themes ?? []) {
    if (!blob.includes(need)) fail(`${id} knowledge missing theme ${need}`)
  }
  const q912 = questionsFor(quiz, '9-12')
  const q68 = questionsFor(quiz, '6-8')
  if (q912.length < 5) fail(`${id} 9-12 quiz ${q912.length} < 5`)
  if (q68.length < 4) fail(`${id} 6-8 quiz ${q68.length} < 4`)
  const mods = city.gameplayModifiers ?? layout.variants ?? []
  if (rule?.modifiers?.length) {
    const ok = rule.modifiers.some((m) => mods.includes(m))
    if (!ok) fail(`${id} needs modifier ${rule.modifiers.join('|')}`)
  }
}

if (process.exitCode) process.exit(process.exitCode)
console.log(`validate:packs OK — training + live cities: ${liveCity.join(', ')}`)
