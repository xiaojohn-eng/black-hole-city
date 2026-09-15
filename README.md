# 黑洞吞噬城市（Black Hole City）

操控地面上的城市黑洞，在「星湾市·中央区」移动、吸引并吞噬垃圾、汽车、建筑直至地标，限时冲分。

> 本作为 **城市地面黑洞** 玩法，不是太空/天体主题。旧方向见归档说明：[black-hole-devour](https://github.com/xiaojohn-eng/black-hole-devour)。

## 在线试玩

**GitHub Pages：** https://xiaojohn-eng.github.io/black-hole-city/

（若 404：仓库 Settings → Pages → Source 选 `gh-pages` 分支根目录。）

## 本地预览

```bash
npm install
npm run dev      # http://localhost:5173/black-hole-city/
npm run build    # 产出 dist/
npm run preview  # http://localhost:4173/black-hole-city/
```

## 操作

| 输入 | 功能 |
|------|------|
| WASD / 方向键 | 移动黑洞 |
| 触控左侧拖拽 | 虚拟摇杆 |
| P / Esc | 暂停 |
| HUD ⏸ | 暂停 |

设置中可调：音量、灵敏度、局时（120/180/240）、画质、难度等。最高分存于浏览器 `localStorage`（前缀 `bhc:v1:`）。

## 玩法（对齐 PRD M1）

1. **双阈值吞噬**：半径与质量均达标才能吸入（L1 垃圾 → L10 地标）。
2. **成长**：吞噬增加质量，洞口变大，相机俯斜跟拍并拉远。
3. **地图**：五分区（南起步 / 西住宅 / 东商业 / 北工业 / 东北地标），道路网格；MVP 物体不刷新。
4. **限时冲分**：默认 180 秒；吃主地标「星湾塔」获完美/破塔者标记。
5. **计分**：`mass_gained + objects×5 + 地标奖励 +（完美时）剩余时间×2`，含连击与升级里程碑分。

## 技术

Vite + TypeScript + Three.js，程序化低模城市，DOM HUD，WebAudio 程序音效，GitHub Pages 部署（`base: '/black-hole-city/'`）。

## 与 PRD 对齐 / 已知简化

- 已实现：标题→游玩→暂停→结算→再来；摇杆+键鼠；引导 3 步；设置与最高分；L1–L10；主地标；中文 UI；WebGL 降级提示。
- 简化：同屏物体密度低于 PRD 满配额；无行人 AI / 刷新 / 多城 / 成就皮肤；BGM 为程序和弦非完整曲目。

## 许可证

仅供试玩与演示。
