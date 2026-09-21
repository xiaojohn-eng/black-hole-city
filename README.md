# 记忆黑洞 · 中国城市博物馆

操控地面上的记忆黑洞，把散落的城市记忆归档进博物馆。你是「记忆黑洞」的守护员，不是来拆城的。

> **本切片范围（M3b2 每省 ≥1 非省会地级市）：** 可玩 3D = **训练场·星湾（虚构）** + **34 省各 ≥1 座行政中心 live** + **凡有地级市的省各 ≥1 座非省会地级市 live** + 七大区各 ≥3 座非省会 live（全国 ≥21）。`prefecture_city` live **约 61/293**。大厅 34 省可点；未 live 地级灰壳「记忆修复中」，**不可进 3D**。**不宣称全国地级已收录：不是 293 完成，更不是 333 完成。** 不上未审中国全图。这是 M3b 第一批扩面，不是全量。

旧方向见：[black-hole-devour](https://github.com/xiaojohn-eng/black-hole-devour)。  
M1：`docs/M1-首都课打穿-交付说明.md`。M2：`docs/M2-省级工厂起步-交付说明.md`。M3a：`docs/M3a-七大区产能打穿-交付说明.md`。M3a2：`docs/M3a2-七大区非省会可玩-交付说明.md`。M3a3：`docs/M3a3-七大区非省会×3-交付说明.md`。M3b1：`docs/M3b1-34省行政中心-交付说明.md`。M3b2：`docs/M3b2-地级市扩面每省非省会-交付说明.md`。

## 在线试玩

**GitHub Pages：** https://xiaojohn-eng.github.io/black-hole-city/

（若 404：仓库 Settings → Pages → Source 选 `gh-pages` 分支根目录。）

## 本地预览

```bash
npm install
npm run validate   # 名录 + live 真城包 + 词表 + 无经纬度 + 34 省题 + 套件 + 七大区/非省会 + 34 省行政中心 + 每省非省会地级市
npm run dev        # http://localhost:5173/black-hole-city/
npm run build      # 产出 dist/
npm run preview    # http://localhost:4173/black-hole-city/
```

无 WebGL 时会出现失败页：可复制正式链接，或试用 Canvas 2D 简化版。

## 怎么玩（双入口 + 省级大厅）

标题页两个主按钮：

1. **训练场·星湾（虚构）** — 限时冲分，练习双阈值手感。星湾不是中国任何一座真城。
2. **记忆博物馆·北京** — 首都课，生涯模式。天安门 **GUARD**；故宫 **VISIT**。

**34 省大厅：** 搜索省名或简称（「京」「沪」「粤」「川」）。进度条写清「34 省行政中心可玩 + 每省 ≥1 非省会地级市 / prefecture 约 61/293 / 管线」。省内列出 live 行政中心 + 非省会；其余地级灰壳。

| 七大区 | 行政中心 live | 非省会 live（M3a3 ≥3 不回退；M3b2 扩面） |
| --- | --- | --- |
| 华北 | 北京、天津、石家庄、太原、呼和浩特 | 保定、唐山、邯郸、大同、包头 |
| 东北 | 沈阳、长春、哈尔滨 | 大连、吉林市、齐齐哈尔 |
| 华东 | 上海、南京、杭州、合肥、福州、南昌、济南、台北教学包 | 苏州、青岛、无锡、宁波、芜湖、厦门、景德镇 |
| 华中 | 郑州、武汉、长沙 | 洛阳、开封、襄阳、株洲 |
| 华南 | 广州、南宁、海口、香港、澳门 | 深圳、桂林、佛山、三亚 |
| 西南 | 重庆、成都、贵阳、昆明、拉萨 | 遵义、乐山、绵阳、曲靖、日喀则 |
| 西北 | 西安、兰州、西宁、银川、乌鲁木齐 | 酒泉、宝鸡、咸阳、海东、石嘴山、克拉玛依 |

未做地级显示「记忆修复中」，**不能开 3D**。**不是 333 完成，也不是 293 完成。**

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
- live 包：训练场 + 34 省行政中心 + 每省 ≥1 非省会地级市（`prefecture_city` 约 61/293，见 `public/packs/manifest.json` 的 `liveCityPacks`）
- 公共题库：`public/packs/_shared/province-abbr-quiz.json`
- 套件 0 号：`data/kits/`（北方砖+胡同、江南水岸、岭南骑楼、绿洲平顶）

```bash
npm run validate:cities          # 计数门禁，并回写 CSV / 大厅索引
npm run validate:packs           # live 真城分区/地标/知识卡/测验最低集
npm run validate:lexicon         # 破坏向词表
npm run validate:coords          # 客户端无 lat/lon 字段
npm run validate:province-quiz   # 34 省都有简称题
npm run validate:kits            # 套件 0 号四套齐
npm run validate:region7         # 七大区各 ≥1 live、各 ≥3 非省会 live、全国非省会 live ≥21
npm run validate:m3a3            # 同上（M3a3 门禁别名）
npm run validate:m3b1            # 34 省各 ≥1 行政中心 live（不是 293/333）
npm run validate:m3b2            # 有地级市的省各 ≥1 非省会 live（不是 293/333）
npm run test:logic               # 双阈值 + GUARD 环绕纯逻辑
npm run scaffold:city -- --adcode=330200   # 导出一座 B 级草稿并写入 manifest（不 live）
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
| 保定 | 府河；烈士纪念碑 GUARD；总督署 VISIT |
| 唐山 | 渤海；抗震纪念碑 GUARD；开滦矿山公园 VISIT |
| 邯郸 | 滏阳河；纪念碑 GUARD；丛台 VISIT |
| 大连 | 黄海；纪念碑 GUARD；中山广场 VISIT |
| 吉林市 | 松花江；纪念碑 GUARD；北山古庙 VISIT（≠长春） |
| 齐齐哈尔 | 嫩江；纪念碑 GUARD；龙沙/扎龙 VISIT |
| 苏州 | 运河/太湖；纪念碑 GUARD；拙政园/寒山寺 VISIT |
| 青岛 | 黄海；纪念碑 GUARD；栈桥/教堂 VISIT |
| 无锡 | 太湖/运河；纪念碑 GUARD；寄畅园/南禅寺 VISIT |
| 洛阳 | 洛河；纪念碑 GUARD；龙门/白马寺 VISIT |
| 开封 | 黄河/汴河；纪念碑 GUARD；铁塔/相国寺 VISIT（≠郑州） |
| 襄阳 | 汉江；纪念碑 GUARD；古城墙 VISIT（≠长沙） |
| 深圳 | 珠江口；纪念碑 GUARD；大鹏所城/天后宫 VISIT（无乐园商标） |
| 桂林 | 漓江；纪念碑 GUARD；靖江王城 VISIT（≠南宁） |
| 佛山 | 珠江三角洲；纪念碑 GUARD；祖庙/骑楼 VISIT |
| 遵义 | 黔北河谷；红军纪念碑 GUARD；会议会址 VISIT（博物馆叙事） |
| 乐山 | 三江汇合；纪念碑 GUARD；大佛 VISIT（不是山城毁城秀） |
| 绵阳 | 涪江；纪念碑 GUARD；子云亭 VISIT |
| 酒泉 | 河西绿洲；纪念碑 GUARD；鼓楼/莫高窟 VISIT |
| 宝鸡 | 渭河；纪念碑 GUARD；金台观/青铜器博物院 VISIT（≠兰州） |
| 咸阳 | 渭河；纪念碑 GUARD；城墙 VISIT（≠西安/乌鲁木齐） |
| 行政中心 | 34 省均可进省会/首府/主城/教学包 3D |
| 石家庄 | 滹沱河；纪念碑 GUARD；隆兴寺 VISIT |
| 乌鲁木齐 | 天山绿洲；纪念碑 GUARD；红山亭/巴扎 VISIT |
| 杭州 / 南京 | 西湖或长江；纪念碑 GUARD；断桥或夫子庙 VISIT |
| 重庆 | 两江；解放纪念碑 GUARD；湖广会馆 VISIT（不是山城毁城秀） |
| 呼和浩特 / 拉萨 | 首府课；纪念碑 GUARD；大召或布达拉外观 VISIT |
| 大同 | 御河；纪念碑 GUARD；云冈石窟 VISIT（≠太原） |
| 包头 | 黄河；纪念碑 GUARD；五当召 VISIT（≠呼和浩特） |
| 宁波 | 甬江/东海；纪念碑 GUARD；天一阁 VISIT（≠杭州） |
| 芜湖 | 长江；纪念碑 GUARD；广济寺 VISIT（≠合肥） |
| 厦门 | 台湾海峡；纪念碑 GUARD；南普陀/骑楼 VISIT（≠福州） |
| 景德镇 | 昌江；纪念碑 GUARD；御窑厂 VISIT（≠南昌） |
| 株洲 | 湘江；纪念碑 GUARD；神农城 VISIT（≠长沙） |
| 三亚 | 南海；纪念碑 GUARD；南山寺 VISIT（≠海口；三沙不可玩） |
| 曲靖 | 南盘江；纪念碑 GUARD；文庙 VISIT（≠昆明；丽江仍灰壳） |
| 日喀则 | 雅鲁藏布；纪念碑 GUARD；扎什伦布寺 VISIT（≠拉萨；不是山城毁城秀） |
| 海东 | 湟水；纪念碑 GUARD；瞿昙寺 VISIT（≠西宁） |
| 石嘴山 | 黄河；纪念碑 GUARD；武当庙 VISIT（≠银川） |
| 克拉玛依 | 绿洲；纪念碑 GUARD；工业遗产 VISIT（≠乌鲁木齐） |
| 台北教学包 | 淡水河；和平纪念 GUARD；北门/龙山寺 VISIT（不用首都符号） |
| 未做地级 | 灰壳「记忆修复中」，不能进 3D |
| 省级题 | 大厅「抽 3 道 34 省简称题」能出题 |
| 灰壳 | 不得出现「全国地级已收录」「293 完成」或「333 完成」 |

## 技术

Vite + TypeScript + Three.js。一城一包 `layout.json`，切包时 `World.dispose()`。GitHub Pages（`base: '/black-hole-city/'`）。

## 许可证

仅供试玩与演示。
