#!/usr/bin/env node
/**
 * A2: destructive titles must be zero in product copy (not in PRD/eval docs).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const FORBIDDEN = /拆房|粉碎|终焉|破塔者|摧毁/
const SKIP_DIR = new Set(['node_modules', 'dist', 'docs', '.git'])
const ALLOW_EXT = new Set(['.ts', '.tsx', '.js', '.mjs', '.css', '.html', '.json', '.md', '.svg'])

/** @type {string[]} */
const hits = []

function walk(dir) {
  if (!fs.existsSync(dir)) return
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      if (SKIP_DIR.has(ent.name)) continue
      walk(p)
      continue
    }
    const ext = path.extname(ent.name)
    if (!ALLOW_EXT.has(ext)) continue
    if (ent.name.includes('check-lexicon')) continue
    const text = fs.readFileSync(p, 'utf8')
    const lines = text.split('\n')
    lines.forEach((line, i) => {
      if (FORBIDDEN.test(line)) hits.push(`${path.relative(root, p)}:${i + 1}: ${line.trim()}`)
    })
  }
}

walk(path.join(root, 'src'))
walk(path.join(root, 'public'))
walk(path.join(root, 'packs'))
;['index.html', 'README.md'].forEach((f) => {
  const p = path.join(root, f)
  if (fs.existsSync(p)) {
    const lines = fs.readFileSync(p, 'utf8').split('\n')
    lines.forEach((line, i) => {
      if (FORBIDDEN.test(line)) hits.push(`${f}:${i + 1}: ${line.trim()}`)
    })
  }
})

if (hits.length) {
  console.error('validate:lexicon FAIL — found destructive copy:')
  hits.forEach((h) => console.error('  ' + h))
  process.exit(1)
}
console.log('validate:lexicon OK — no 拆房/粉碎/终焉/破塔者/摧毁 in product copy')
