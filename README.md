# 记忆黑洞 · 中国城市博物馆

操控地面上的记忆黑洞，把散落的城市记忆归档进博物馆。你是「记忆黑洞」的守护员，不是来拆城的。

> **本切片范围（M3a 七大区产能打穿）：** 可玩 3D = **训练场·星湾（虚构）** + 七大区各 1 座真城：**北京、上海、哈尔滨、武汉、广州、成都、西安**。大厅 34 省可点；同区另有草稿灰壳「记忆修复中」，**不可进 3D**。**不宣称全国地级已收录，也没有 333 座城可玩。** 不上未审中国全图。这是工厂复制，不是再堆一座网红城。

旧方向见：[black-hole-devour](https://github.com/xiaojohn-eng/black-hole-devour)。  
M1：`docs/M1-首都课打穿-交付说明.md`。M2：`docs/M2-省级工厂起步-交付说明.md`。M3a：`docs/M3a-七大区产能打穿-交付说明.md`。

## 在线试玩

**GitHub Pages：** https://xiaojohn-eng.github.io/black-hole-city/

（若 404：仓库 Settings → Pages → Source 选 `gh-pages` 分支根目录。）

## 本地预览

```bash
npm install
npm run validate   # 名录 + live 真城包 + 词表 + 无经纬度 + 34 省题 + 套件 + 七大区覆盖
npm run dev        # http://localhost:5173/black-hole-city/
npm run build      # 产出 dist/
npm run preview    # http://localhost:4173/black-hole-city/
```

无 WebGL 时会出现失败页：可复制正式链接，或试用 Canvas 2D 简化版。

## 怎么玩（双入口 + 省级大厅）

标题页两个主按钮：

1. **训练场·星湾（虚构）** — 限时冲分，练习双阈值手感。星湾不是中国任何一座真城。
2. **记忆博物馆·北京** — 首都课，生涯模式。天安门 **GUARD**；故宫 **VISIT**。

**34 省大厅：** 搜索省名或简称（「京」「沪」「粤」「川」）。七大区进度条可筛选。省内列出 live + 草稿：

| 七大区 | live 真城 | 同区草稿（灰壳） |
| --- | --- | --- |
| 华北 | 北京 | 石家庄、保定 |
| 东北 | 哈尔滨 | 沈阳、长春 |
| 华东 | 上海 | 苏州、青岛 |
| 华中 | 武汉 | 洛阳、长沙 |
| 华南 | 广州 | 深圳、桂林 |
| 西南 | 成都 | 昆明、贵阳 |
| 西北 | 西安 | 乌鲁木齐、酒泉 |

草稿显示「记忆修复中」，可看预览说明，**不能开 3D**。其余 31 省入口仍可点，未做城同样灰壳。非省会起步：苏州、青岛、洛阳、桂林、深圳、保定、酒泉。

大厅可 **抽 3 道 34 省简称题**。真城局后测验也会混入公共省级题。

| 输入 | 功能 |
|------|------|
| WASD / 方向键 | 移动黑洞 |
| 触控左侧拖拽 | 虚拟摇杆 |
| P / Esc | 暂停 |
| HUD ⏸ | 暂停 |

设置里 **学习年龄**（默认 9–12）和 **操作难度** 是分开的。最高分与图鉴存在浏览器 `localStorage`（前缀 `bhc:v2:`）。

## 玩法要点

1. **双阈值：** 洞口半径与质量都达标，才能把可归档物吸入。HUD 会分项提示缺哪一项。
2. **归档 ≠ 破坏：** 物体化为光粒入库，地面留下光斑。国家象征与纪念空间走守护仪式。
3. **知识卡：** 首次点亮弹出，可「稍后再读」，每卡每局最多一次。
4. **局后 3 题：** 可跳过，但跳过不点亮「小博士」。作答写入本城图鉴。
5. **训练场** 仍可限时；**真城课** 用裂隙稳定度，归零则记忆暂存口袋离开。

## 数据、套件与校验

- 全国名录：`data/admin_div.csv`（34 省级 + 333 地级占位行）
- 大厅用 `public/data/admin_index.json`（由校验脚本生成，**无 lat/lon**）
- live 包：`public/packs/{xingwan-training,beijing,shanghai,harbin,guangzhou,wuhan,chengdu,xian}/`
- 公共题库：`public/packs/_shared/province-abbr-quiz.json`
- 套件 0 号：`data/kits/`（北方砖+胡同、江南水岸、岭南骑楼、绿洲平顶）

```bash
npm run validate:cities          # 计数门禁，并回写 CSV / 大厅索引
npm run validate:packs           # live 真城分区/地标/知识卡/测验最低集
npm run validate:lexicon         # 破坏向词表
npm run validate:coords          # 客户端无 lat/lon 字段
npm run validate:province-quiz   # 34 省都有简称题
npm run validate:kits            # 套件 0 号四套齐
npm run validate:region7         # 七大区各 ≥1 live、管线 ≥3、非省会 ≥3
npm run test:logic               # 双阈值 + GUARD 环绕纯逻辑
npm run scaffold:city -- --adcode=320500   # 导出苏州 B 级草稿并写入 manifest（不 live）
npm run scaffold:region -- --region=华南   # 一次拉齐某区灰壳名单
```

构建后再扫产物：`npm run build && npm run validate:coords -- --dist`

## 手工验收

| 路径 | 怎么测 |
| --- | --- |
| 双入口 | 打开即见训练场（含「虚构」）与记忆博物馆·北京 |
| 大厅 | 34 省可点；七大区芯片可筛；搜「粤」进广州；草稿省显示灰壳 |
| 北京 | 天安门不可吞，绕行致敬；故宫参观 |
| 上海 | 江岸；纪念碑 GUARD；外滩/城隍庙 VISIT |
| 哈尔滨 | 松花江岸；防洪纪念塔 GUARD；教堂外观 VISIT |
| 广州 | 珠江/骑楼；解放纪念像 GUARD；陈家祠 VISIT |
| 武汉 | 两江；防汛纪念碑 GUARD；黄鹤楼 VISIT |
| 成都 | 盆地雾、巷子，不是山城毁城；纪念碑 GUARD；武侯祠 VISIT |
| 西安 | 城墙环；纪念空间 GUARD；雁塔/城墙 VISIT |
| 草稿 | 苏州/桂林等可点预览，不能进 3D |
| 省级题 | 大厅「抽 3 道 34 省简称题」能出题 |
| 灰壳 | 不得出现「全国地级已收录」或「333 完成」 |

## 技术

Vite + TypeScript + Three.js。一城一包 `layout.json`，切包时 `World.dispose()`。GitHub Pages（`base: '/black-hole-city/'`）。

## 许可证

仅供试玩与演示。
