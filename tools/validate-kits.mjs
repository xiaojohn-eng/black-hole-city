#!/usr/bin/env node
/**
 * Kit batch 0: at least 4 national kits.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dir = path.join(root, 'data', 'kits')

function fail(msg) {
  console.error(`validate:kits FAIL — ${msg}`)
  process.exitCode = 1
}

const required = ['north-brick-hutong', 'jiangnan-water', 'lingnan-qilou', 'oasis-flat']
if (!fs.existsSync(dir)) fail('missing data/kits/')
for (const id of required) {
  const p = path.join(dir, `${id}.json`)
  if (!fs.existsSync(p)) fail(`missing kit ${id}`)
  const kit = JSON.parse(fs.readFileSync(p, 'utf8'))
  if (kit.id !== id) fail(`${id} id mismatch`)
  if (!kit.palette || !kit.roads?.style) fail(`${id} missing palette/roads`)
  if (!kit.exportDraft?.command) fail(`${id} missing exportDraft.command`)
}

if (!fs.existsSync(path.join(dir, 'README.md'))) fail('missing data/kits/README.md')

if (process.exitCode) process.exit(process.exitCode)
console.log(`validate:kits OK — ${required.join(', ')}`)
