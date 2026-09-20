import type { AgeBand, QuizQuestion } from './types'

export interface SharedQuizBank {
  id: string
  title: string
  disclaimer: string
  questions: QuizQuestion[]
}

let cache: SharedQuizBank | null = null

export async function loadSharedQuiz(): Promise<SharedQuizBank> {
  if (cache) return cache
  const url = `${import.meta.env.BASE_URL}packs/_shared/province-abbr-quiz.json`
  const res = await fetch(url)
  if (!res.ok) throw new Error('省级题库加载失败')
  cache = (await res.json()) as SharedQuizBank
  return cache
}

export function pickSharedQuiz(bank: SharedQuizBank, band: AgeBand, n: number): QuizQuestion[] {
  const pool = bank.questions.filter((q) => q.ageBand === band).slice()
  if (pool.length < n) {
    const extra = bank.questions.filter((q) => q.ageBand !== band)
    pool.push(...extra)
  }
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = pool[i]
    pool[i] = pool[j]
    pool[j] = tmp
  }
  return pool.slice(0, Math.min(n, pool.length))
}
