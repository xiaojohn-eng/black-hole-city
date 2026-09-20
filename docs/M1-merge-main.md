# M1 合入 `origin/main` 笔记

日期：2026-09-20  
分支：`feat/m1-capital-slice` merge `origin/main`（`8e67484` 放宽 WebGL / 失败页 / 2D 兜底；`b322508` 密度与手感）。

## 保留（M1 产品身份）

- 标题双入口：「训练场·星湾（虚构）」/「记忆博物馆·北京」；全国 34 省大厅灰壳。
- 博物馆叙事：归档 / 守护 / 入库；破坏向词表仍由 `validate:lexicon` 门禁。
- 双包运行时：`xingwan-training` + `beijing`，切包 `dispose`。
- GUARD / VISIT、知识卡、局后测验、图鉴、学段与操作难度分列。
- 客户端禁 lat/lon；不上未审中国全图；不宣称 333 已收录。

## 合入（main 上有价值的改进）

- WebGL 探测与 `WebGLRenderer` 多组参数重试；失败则 `nowebgl`。
- 失败页：复制正式链接、iOS 锁定模式提示、Canvas 2D 兜底（`src/fallback/Fallback2D.ts`）。
- favicon。
- 镜头距离/朝向指数平滑（相机仍在玩家南侧，适配南城出生点）。
- 吸入环特效、门槛提示 TTL、最小吸引半径、升级 HUD 闪一下。
- 出生点保证可归档簇、填充物互斥采样、材质 clone（描边不串色）、公园树装饰。
- 暂停「先离开」两步确认（文案仍是记忆暂存，不是「放弃本局」）。
- Player / InputManager 手感（已无冲突，直接取 main）。

## 丢弃 / 不回退

- 标题「黑洞吞噬城市 / 从汽车吃到摩天楼」及结算「吞噬数量」。
- 硬编码 `zoneAt` / `QUOTAS` 星湾五区：World 已由 pack `layout.json` 驱动。
- 相机 `z + back` 北向机位：与北京南城出生、沿中轴北上冲突。
- 2D 兜底里的「吞噬」计数改为「归档」。

文案与结算服从博物馆叙事。
