#!/usr/bin/env node
/**
 * A9: client bundles and pack JSON must not ship lat/lon fields.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const FIELD = /"(lat|lon|latitude|longitude)"\s*:/i

const distOnly = process.argv.includes('--dist')

/** @type {string[]} */
const hits = []

function walk(dir) {
  if (!fs.existsSync(dir)) return
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules') continue
      walk(p)
      continue
    }
    if (!/\.(json|js|mjs|ts|csv)$/.test(ent.name)) continue
    const text = fs.readFileSync(p, 'utf8')
    const lines = text.split('\n')
    lines.forEach((line, i) => {
      if (FIELD.test(line)) hits.push(`${path.relative(root, p)}:${i + 1}: ${line.trim()}`)
    })
  }
}

if (distOnly) {
  walk(path.join(root, 'dist'))
} else {
  walk(path.join(root, 'src'))
  walk(path.join(root, 'public'))
  walk(path.join(root, 'packs'))
  walk(path.join(root, 'data'))
}

if (hits.length) {
  console.error('validate:coords FAIL — lat/lon field found:')
  hits.forEach((h) => console.error('  ' + h))
  process.exit(1)
}
console.log(`validate:coords OK${distOnly ? ' (dist)' : ' (src/public/data/packs)'}`)
