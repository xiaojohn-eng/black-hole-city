import type { Eatable } from './types'

export class SpatialHash {
  private cellSize: number
  private cells = new Map<string, Eatable[]>()

  constructor(cellSize = 12) {
    this.cellSize = cellSize
  }

  clear(): void {
    this.cells.clear()
  }

  private key(cx: number, cz: number): string {
    return `${cx},${cz}`
  }

  private cellOf(x: number, z: number): [number, number] {
    return [Math.floor(x / this.cellSize), Math.floor(z / this.cellSize)]
  }

  insert(obj: Eatable): void {
    const [cx, cz] = this.cellOf(obj.x, obj.z)
    const k = this.key(cx, cz)
    let list = this.cells.get(k)
    if (!list) {
      list = []
      this.cells.set(k, list)
    }
    list.push(obj)
  }

  rebuild(objects: Eatable[]): void {
    this.clear()
    for (const o of objects) {
      if (o.state === 'digested') continue
      this.insert(o)
    }
  }

  query(x: number, z: number, radius: number): Eatable[] {
    const r = radius
    const [minX, minZ] = this.cellOf(x - r, z - r)
    const [maxX, maxZ] = this.cellOf(x + r, z + r)
    const out: Eatable[] = []
    const seen = new Set<number>()
    for (let cx = minX; cx <= maxX; cx++) {
      for (let cz = minZ; cz <= maxZ; cz++) {
        const list = this.cells.get(this.key(cx, cz))
        if (!list) continue
        for (const o of list) {
          if (seen.has(o.id) || o.state === 'digested') continue
          seen.add(o.id)
          out.push(o)
        }
      }
    }
    return out
  }
}
