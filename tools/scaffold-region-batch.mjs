#!/usr/bin/env node
/**
 * Pull a region's gray-shell draft list (or all M3a drafts) through scaffold:city.
 * Usage:
 *   npm run scaffold:region -- --region=华南
 *   npm run scaffold:region -- --all-drafts
 *   npm run scaffold:region -- --all-drafts --force
 */
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { M3A_PIPELINE, REGION7 } from './region7.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function arg(name, fallback = '') {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`))
  if (hit) return hit.slice(name.length + 3)
  if (process.argv.includes(`--${name}`)) return '1'
  return fallback
}

const region = arg('region')
const allDrafts = Boolean(arg('all-drafts'))
const force = Boolean(arg('force'))

if (!region && !allDrafts) {
  console.error('usage: npm run scaffold:region -- --region=华南 | --all-drafts [--force]')
  process.exit(1)
}
if (region && !REGION7.includes(region)) {
  console.error(`scaffold:region unknown region ${region}. need one of ${REGION7.join('/')}`)
  process.exit(1)
}

let jobs = M3A_PIPELINE.filter((p) => p.status === 'draft')
if (region) jobs = jobs.filter((p) => p.region7 === region)
if (!jobs.length) {
  console.log('scaffold:region nothing to do')
  process.exit(0)
}

let failed = 0
for (const job of jobs) {
  const args = [path.join('tools', 'pack-scaffold.mjs'), `--adcode=${job.adcode}`, `--kit=${job.kit}`]
  if (force) args.push('--force')
  console.log(`\n→ ${job.region7} ${job.packId} ${job.adcode} kit=${job.kit}`)
  const r = spawnSync(process.execPath, args, { cwd: root, stdio: 'inherit' })
  if (r.status !== 0) {
    failed += 1
    console.error(`scaffold:region FAIL ${job.packId} exit ${r.status}`)
  }
}

if (failed) {
  console.error(`scaffold:region done with ${failed} failure(s) / ${jobs.length}`)
  process.exit(1)
}
console.log(`\nscaffold:region OK — ${jobs.length} draft(s) for ${region || 'all regions'}`)
