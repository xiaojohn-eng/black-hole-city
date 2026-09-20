# 记忆黑洞 · 中国城市博物馆

操控地面上的记忆黑洞，把散落的城市记忆归档进博物馆。你是「记忆黑洞」的守护员，不是来拆城的。

> **本切片范围（M1 首都课打穿）：** 可玩 3D 只有 **训练场·星湾（虚构）** 与 **记忆博物馆·北京**。大厅可浏览 34 省，非北京为「记忆修复中」。**不宣称全国地级已收录，也没有 333 座城可玩。** 不上未审中国全图。上海 / 成都 3D 不在本切片。

旧方向见：[black-hole-devour](https://github.com/xiaojohn-eng/black-hole-devour)。

## 在线试玩

**GitHub Pages：** https://xiaojohn-eng.github.io/black-hole-city/

（若 404：仓库 Settings → Pages → Source 选 `gh-pages` 分支根目录。）

## 本地预览

```bash
npm install
npm run validate   # 名录计数 + 内容包 + 词表 + 无经纬度
npm run dev        # http://localhost:5173/black-hole-city/
npm run build      # 产出 dist/
npm run preview    # http://localhost:4173/black-hole-city/
```

## 怎么玩（双入口）

标题页两个主按钮：

1. **训练场·星湾（虚构）** — 限时冲分，练习双阈值手感。星湾不是中国任何一座真城。
2. **记忆博物馆·北京** — 首都课，生涯模式（不倒计时，看裂隙稳定度）。天安门 **GUARD**：绕行一周致敬，不可归档进洞；故宫 **VISIT**：走近参观。

另外可打开 **34 省大厅**：搜索省名或简称（如「京」「北京」）。只有北京市可进 3D 与图鉴。

| 输入 | 功能 |
|------|------|
| WASD / 方向键 | 移动黑洞 |
| 触控左侧拖拽 | 虚拟摇杆 |
| P / Esc | 暂停 |
| HUD ⏸ | 暂停 |

设置里 **学习年龄**（默认 9–12）和 **操作难度** 是分开的。最高分与图鉴存在浏览器 `localStorage`（前缀 `bhc:v2:`）。

## 玩法要点

1. **双阈值：** 洞口半径与质量都达标，才能把可归档物吸入。HUD 会分项提示缺哪一项。
2. **归档 ≠ 破坏：** 物体化为光粒入库，地面留下光斑。国家象征走守护仪式。
3. **知识卡：** 首次点亮弹出，可「稍后再读」，每卡每局最多一次。
4. **局后 3 题：** 可跳过，但跳过不点亮「小博士」。作答写入本城图鉴。
5. **训练场** 仍可限时；**北京** 用裂隙稳定度，归零则记忆暂存口袋离开。

## 数据与校验

- 全国名录：`data/admin_div.csv`（34 省级 + 333 地级占位行：293 市 + 30 州 + 7 地区 + 3 盟）
- 大厅用 `public/data/admin_index.json`（由校验脚本生成，**无 lat/lon**）
- 内容包：`public/packs/xingwan-training/` 与 `public/packs/beijing/`

```bash
npm run validate:cities   # A3 计数门禁，并回写 CSV / 大厅索引
npm run validate:packs    # 北京分区/地标/知识卡/测验最低集
npm run validate:lexicon  # A2 破坏向词表
npm run validate:coords   # A9 客户端无 lat/lon 字段
npm run test:logic        # 双阈值 + GUARD 环绕纯逻辑
```

构建后再扫产物：`npm run build && npm run validate:coords -- --dist`

## 手工验收（自动化覆盖不到的）

| ID | 怎么测 |
| --- | --- |
| A1 | 打开即见双入口；训练场按钮含「虚构」 |
| A4 | 标题 → 34 省大厅，1 分钟内找到「北京市」（搜「京」） |
| A5 | 北京鸟瞰：中轴石板 + 胡同院子 + 天安门城楼/故宫黄瓦/天坛圆殿，应能从京/沪/穗/蓉里认出北京 |
| A6 | 冲向天安门不会被吸入；绕黄圈走完一圈弹出致敬卡，图鉴记「已守护」 |
| A7 | 局后 3 题走完；再开一局点「稍后再答」，图鉴无小博士 |
| A8 | 同一知识卡连档不刷屏；「稍后再读」出现在结算汇总 |
| A10 | 标题里训练场/北京来回进 5 次，低档可玩 |
| A11 | 亲子小样本：能指北京在北方、能说首都或胡同/中轴/一种物产；破坏感应低 |
| A12 | 文案只出现「不宣称全国地级已收录」，没有「已收录可玩」的承诺 |

## 技术

Vite + TypeScript + Three.js。一城一包 `layout.json`，切包时 `World.dispose()`。GitHub Pages（`base: '/black-hole-city/'`）。

## 许可证

仅供试玩与演示。
