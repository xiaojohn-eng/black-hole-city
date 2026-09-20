#!/usr/bin/env node
/**
 * 34 省简称公共题库：每省至少 1 道简称题。
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PROVINCES } from './admin-div-data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function fail(msg) {
  console.error(`validate:province-quiz FAIL — ${msg}`)
  process.exitCode = 1
}

const p = path.join(root, 'public', 'packs', '_shared', 'province-abbr-quiz.json')
if (!fs.existsSync(p)) fail('missing public/packs/_shared/province-abbr-quiz.json')
const bank = JSON.parse(fs.readFileSync(p, 'utf8'))
const qs = bank.questions ?? []
if (qs.length < 34) fail(`questions ${qs.length} < 34`)

for (const row of PROVINCES) {
  const hit = qs.find(
    (q) =>
      q.provinceAdcode === row.adcode &&
      (String(q.prompt).includes('简称') || q.id.includes('-short')),
  )
  if (!hit) fail(`no 简称 question for ${row.adcode} ${row.name}`)
  if (!JSON.stringify(hit).includes(row.shortName)) fail(`${row.name} question missing shortName ${row.shortName}`)
}

const bands = new Set(qs.map((q) => q.ageBand))
if (!bands.has('9-12')) fail('need 9-12 questions')
if (!bands.has('6-8')) fail('need 6-8 questions')

if (process.exitCode) process.exit(process.exitCode)
console.log(`validate:province-quiz OK — ${PROVINCES.length} 省简称题 live, ${qs.length} questions`)
