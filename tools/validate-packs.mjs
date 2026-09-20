#!/usr/bin/env node
/**
 * Pack contract for M1: xingwan-training + beijing minimum set.
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

const manifestPath = path.join(root, 'public', 'packs', 'manifest.json')
if (!fs.existsSync(manifestPath)) fail('missing public/packs/manifest.json')
const manifest = readJson(manifestPath)
const ids = (manifest.packs ?? []).map((p) => p.id)
if (!ids.includes('xingwan-training')) fail('manifest missing xingwan-training')
if (!ids.includes('beijing')) fail('manifest missing beijing')

const bjDir = packDir('beijing')
const xwDir = packDir('xingwan-training')
for (const dir of [bjDir, xwDir]) {
  for (const f of ['city.json', 'layout.json', 'quiz.json', 'knowledge.json']) {
    if (!fs.existsSync(path.join(dir, f))) fail(`missing ${dir}/${f}`)
  }
}

const city = readJson(path.join(bjDir, 'city.json'))
const layout = readJson(path.join(bjDir, 'layout.json'))
const quiz = readJson(path.join(bjDir, 'quiz.json'))
const knowledge = readJson(path.join(bjDir, 'knowledge.json'))

if ((layout.zones ?? []).length < 4) fail(`beijing zones ${layout.zones?.length} < 4`)
const lms = layout.landmarks ?? city.landmarks ?? []
if (lms.length < 5) fail(`beijing landmarks ${lms.length} < 5`)
const interacts = new Set(lms.map((l) => l.interact))
if (!interacts.has('guard')) fail('beijing missing interact=guard (天安门)')
if (!interacts.has('visit')) fail('beijing missing interact=visit (故宫)')
const tiananmen = lms.find((l) => /天安门/.test(l.name) || l.id.includes('tiananmen'))
if (!tiananmen || tiananmen.interact !== 'guard') fail('天安门 must be GUARD')
const gugong = lms.find((l) => /故宫/.test(l.name) || l.id.includes('gugong'))
if (!gugong || gugong.interact !== 'visit') fail('故宫 must be VISIT')

const cards = knowledge.cards ?? []
if (cards.length < 8) fail(`knowledge cards ${cards.length} < 8`)
const blob = JSON.stringify(knowledge)
for (const need of ['首都', '京', '温带季风', '胡同', '中轴']) {
  if (!blob.includes(need)) fail(`knowledge cards missing theme ${need}`)
}

const q912 = (quiz.questions ?? []).filter((q) => (q.ageBand ?? q.ageBands ?? []).includes?.('9-12') || q.ageBand === '9-12' || (Array.isArray(q.ageBands) && q.ageBands.includes('9-12')))
const q68 = (quiz.questions ?? []).filter((q) => q.ageBand === '6-8' || (Array.isArray(q.ageBands) && q.ageBands.includes('6-8')))
if (q912.length < 5) fail(`9-12 quiz ${q912.length} < 5`)
if (q68.length < 4) fail(`6-8 quiz ${q68.length} < 4`)

const mods = city.gameplayModifiers ?? layout.variants ?? []
if (!mods.includes('hutong_maze') && !mods.includes('axis_guard')) {
  fail('beijing needs hutong_maze or axis_guard')
}

const xw = readJson(path.join(xwDir, 'city.json'))
if (!xw.fictional && xw.unitType !== 'training') fail('xingwan must be marked fictional/training')

if (process.exitCode) process.exit(process.exitCode)
console.log('validate:packs OK — beijing min set + two packs')
