import type { LoadedPack } from './types'

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`加载失败 ${url} (${res.status})`)
  return (await res.json()) as T
}

export async function loadPack(packId: string): Promise<LoadedPack> {
  const base = `${import.meta.env.BASE_URL}packs/${packId}`
  const [city, layout, knowledge, quiz] = await Promise.all([
    fetchJson<LoadedPack['city']>(`${base}/city.json`),
    fetchJson<LoadedPack['layout']>(`${base}/layout.json`),
    fetchJson<LoadedPack['knowledge']>(`${base}/knowledge.json`),
    fetchJson<LoadedPack['quiz']>(`${base}/quiz.json`),
  ])
  return { city, layout, knowledge, quiz }
}

export function cardById(pack: LoadedPack, id: string) {
  return pack.knowledge.cards.find((c) => c.id === id) ?? null
}

export function quizForBand(pack: LoadedPack, band: LoadedPack['quiz']['questions'][number]['ageBand']) {
  return pack.quiz.questions.filter((q) => q.ageBand === band)
}

export function pickQuiz(pack: LoadedPack, band: LoadedPack['quiz']['questions'][number]['ageBand'], n = 3) {
  const pool = quizForBand(pack, band).slice()
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = pool[i]
    pool[i] = pool[j]
    pool[j] = tmp
  }
  return pool.slice(0, Math.min(n, pool.length))
}
