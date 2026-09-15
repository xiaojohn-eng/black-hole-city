import './style.css'
import { Game } from './game/Game'
import { UIManager } from './ui/UIManager'

const app = document.querySelector<HTMLElement>('#app')
if (!app) throw new Error('#app missing')

const game = new Game(app)
new UIManager(app, game)
game.boot().catch((err) => {
  console.error(err)
  app.innerHTML = `<div style="color:#fff;padding:2rem;font-family:sans-serif">
    <h2>加载失败</h2>
    <p>资源加载失败，请刷新页面重试。</p>
  </div>`
})
