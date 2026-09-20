import type { AdminIndex } from './types'

let cache: AdminIndex | null = null

export async function loadAdminIndex(): Promise<AdminIndex> {
  if (cache) return cache
  const url = `${import.meta.env.BASE_URL}data/admin_index.json`
  const res = await fetch(url)
  if (!res.ok) throw new Error('全国名录加载失败')
  cache = (await res.json()) as AdminIndex
  return cache
}

export function filterProvinces(index: AdminIndex, q: string) {
  const s = q.trim().toLowerCase()
  if (!s) return index.provinces
  return index.provinces.filter((p) => {
    if (p.name.toLowerCase().includes(s)) return true
    if (p.shortName.toLowerCase() === s || p.shortName.toLowerCase().includes(s)) return true
    if (p.aliases.some((a) => a.toLowerCase() === s || a.toLowerCase().includes(s))) return true
    if (s.length >= 2 && p.capital.toLowerCase().includes(s)) return true
    return false
  })
}
