#!/usr/bin/env node
/**
 * Pack contract: training + live city minimum sets (M3a).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function fail(msg) {
  console.error(`validate:packs FAIL — ${msg}`)
  process.exitCode = 1
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function packDir(id) {
  const a = path.join(root, 'public', 'packs', id)
  if (fs.existsSync(a)) return a
  return path.join(root, 'packs', id)
}

function questionsFor(quiz, band) {
  return (quiz.questions ?? []).filter(
    (q) => q.ageBand === band || (Array.isArray(q.ageBands) && q.ageBands.includes(band)),
  )
}

const manifestPath = path.join(root, 'public', 'packs', 'manifest.json')
if (!fs.existsSync(manifestPath)) fail('missing public/packs/manifest.json')
const manifest = readJson(manifestPath)
const ids = (manifest.packs ?? []).map((p) => p.id)
if (!ids.includes('xingwan-training')) fail('manifest missing xingwan-training')
for (const need of ['beijing', 'shanghai', 'harbin', 'guangzhou', 'wuhan', 'chengdu', 'xian']) {
  if (!ids.includes(need)) fail(`manifest missing ${need}`)
}

const liveCity = (manifest.liveCityPacks ?? []).filter(Boolean)
if (liveCity.length < 7) fail(`liveCityPacks ${liveCity.length} < 7`)
for (const need of ['beijing', 'shanghai', 'harbin', 'guangzhou', 'wuhan', 'chengdu', 'xian']) {
  if (!liveCity.includes(need)) fail(`liveCityPacks missing ${need}`)
}

const xwDir = packDir('xingwan-training')
for (const f of ['city.json', 'layout.json', 'quiz.json', 'knowledge.json']) {
  if (!fs.existsSync(path.join(xwDir, f))) fail(`missing ${xwDir}/${f}`)
}
const xw = readJson(path.join(xwDir, 'city.json'))
if (!xw.fictional && xw.unitType !== 'training') fail('xingwan must be marked fictional/training')

const cityRules = {
  beijing: {
    minZones: 4,
    minLandmarks: 5,
    guardName: /天安门/,
    visitName: /故宫/,
    themes: ['首都', '京', '温带季风', '胡同', '中轴'],
    modifiers: ['hutong_maze', 'axis_guard'],
    adcode: '110100',
    region7: '华北',
  },
  shanghai: {
    minZones: 4,
    minLandmarks: 5,
    guardName: /纪念碑/,
    visitName: /外滩/,
    themes: ['沪', '黄浦江', '亚热带季风', '里弄'],
    modifiers: ['river_front'],
    adcode: '310100',
    region7: '华东',
  },
  harbin: {
    minZones: 4,
    minLandmarks: 5,
    guardName: /防洪/,
    visitName: /索菲亚|教堂/,
    themes: ['黑', '松花江', '冰雪'],
    modifiers: ['cold_wide_street'],
    adcode: '230100',
    region7: '东北',
  },
  guangzhou: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /陈家祠|镇海|骑楼/,
    themes: ['粤', '珠江', '骑楼', '亚热带'],
    modifiers: ['qilou_arcade'],
    adcode: '440100',
    region7: '华南',
  },
  wuhan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /防汛|纪念|抗洪/,
    visitName: /黄鹤/,
    themes: ['鄂', '长江', '汉江', '两江'],
    modifiers: ['two_rivers_confluence'],
    adcode: '420100',
    region7: '华中',
  },
  chengdu: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /武侯|宽窄/,
    themes: ['川', '天府', '盆地', '都江堰'],
    modifiers: ['basin_fog'],
    adcode: '510100',
    region7: '西南',
  },
  xian: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /雁塔|城墙/,
    themes: ['陕', '渭河', '古都', '丝路'],
    modifiers: ['citywall_ring'],
    adcode: '610100',
    region7: '西北',
  },
  baoding: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /总督署|莲花/,
    themes: ['冀', '保定', '温带季风', '府河'],
    modifiers: ['hutong_maze'],
    adcode: '130600',
    region7: '华北',
  },
  shenyang: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /九一八|纪念/,
    visitName: /故宫/,
    themes: ['辽', '浑河', '沈阳'],
    modifiers: ['cold_wide_street'],
    adcode: '210100',
    region7: '东北',
  },
  dalian: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /中山|广场/,
    themes: ['辽', '大连', '黄海', '港口'],
    modifiers: ['coastal_band'],
    adcode: '210200',
    region7: '东北',
  },
  suzhou: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /拙政|寒山/,
    themes: ['苏', '苏州', '大运河', '太湖'],
    modifiers: ['river_front'],
    adcode: '320500',
    region7: '华东',
  },
  luoyang: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /龙门|白马/,
    themes: ['豫', '洛阳', '洛河', '古都'],
    modifiers: ['named_river'],
    adcode: '410300',
    region7: '华中',
  },
  shenzhen: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /大鹏|天后/,
    themes: ['粤', '深圳', '经济特区', '亚热带'],
    modifiers: ['qilou_arcade'],
    adcode: '440300',
    region7: '华南',
  },
  kunming: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /金马|滇池|金殿/,
    themes: ['云', '昆明', '滇池', '春城'],
    modifiers: ['plateau_lake'],
    adcode: '530100',
    region7: '西南',
  },
  zunyi: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /红军|纪念/,
    visitName: /会议会址|会址/,
    themes: ['贵', '遵义', '黔北'],
    modifiers: ['named_river'],
    adcode: '520300',
    region7: '西南',
  },
  jiuquan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /莫高|鼓楼/,
    themes: ['甘', '酒泉', '河西走廊', '绿洲'],
    modifiers: ['oasis_canal'],
    adcode: '620900',
    region7: '西北',
  },
  tangshan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /开滦|南湖|矿山/,
    themes: ['冀', '唐山', '渤海', '温带季风'],
    modifiers: ['coastal_band'],
    adcode: '130200',
    region7: '华北',
  },
  handan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /丛台/,
    themes: ['冀', '邯郸', '滏阳河', '温带季风'],
    modifiers: ['named_river'],
    adcode: '130400',
    region7: '华北',
  },
  jilin: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /北山|江岸/,
    themes: ['吉', '吉林', '松花江', '长春'],
    modifiers: ['named_river'],
    adcode: '220200',
    region7: '东北',
  },
  qiqihar: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /龙沙|扎龙/,
    themes: ['黑', '齐齐哈尔', '嫩江'],
    modifiers: ['named_river'],
    adcode: '230200',
    region7: '东北',
  },
  qingdao: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /栈桥|教堂/,
    themes: ['鲁', '青岛', '黄海', '温带季风'],
    modifiers: ['coastal_band'],
    adcode: '370200',
    region7: '华东',
  },
  wuxi: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /寄畅|南禅|太湖/,
    themes: ['苏', '无锡', '太湖', '大运河'],
    modifiers: ['river_front'],
    adcode: '320200',
    region7: '华东',
  },
  kaifeng: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /铁塔|相国/,
    themes: ['豫', '开封', '黄河', '古都'],
    modifiers: ['named_river'],
    adcode: '410200',
    region7: '华中',
  },
  xiangyang: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /城墙|汉江/,
    themes: ['鄂', '襄阳', '汉江'],
    modifiers: ['named_river'],
    adcode: '420600',
    region7: '华中',
  },
  guilin: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /王城|漓江/,
    themes: ['桂', '桂林', '漓江', '喀斯特'],
    modifiers: ['named_river'],
    adcode: '450300',
    region7: '华南',
  },
  foshan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /祖庙|骑楼/,
    themes: ['粤', '佛山', '珠江三角洲', '骑楼'],
    modifiers: ['qilou_arcade'],
    adcode: '440600',
    region7: '华南',
  },
  leshan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /大佛/,
    themes: ['川', '乐山', '岷江', '大佛'],
    modifiers: ['named_river'],
    adcode: '511100',
    region7: '西南',
  },
  mianyang: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /子云|涪江/,
    themes: ['川', '绵阳', '涪江'],
    modifiers: ['named_river'],
    adcode: '510700',
    region7: '西南',
  },
  baoji: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /金台|青铜|渭河/,
    themes: ['陕', '宝鸡', '渭河', '关中'],
    modifiers: ['named_river'],
    adcode: '610300',
    region7: '西北',
  },
  xianyang: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /城墙|渭河/,
    themes: ['陕', '咸阳', '渭河', '非省会'],
    modifiers: ['named_river'],
    adcode: '610400',
    region7: '西北',
  },
  shijiazhuang: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /隆兴|正定|滹沱/,
    themes: ['冀', '石家庄', '滹沱河'],
    modifiers: ['named_river'],
    adcode: '130100',
    region7: '华北',
  },
  changchun: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /南湖|文庙/,
    themes: ['吉', '长春', '伊通河'],
    modifiers: ['cold_wide_street'],
    adcode: '220100',
    region7: '东北',
  },
  changsha: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /岳麓/,
    themes: ['湘', '长沙', '湘江'],
    modifiers: ['named_river'],
    adcode: '430100',
    region7: '华中',
  },
  guiyang: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /甲秀/,
    themes: ['贵', '贵阳', '南明河'],
    modifiers: ['named_river'],
    adcode: '520100',
    region7: '西南',
  },
  urumqi: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /红山|巴扎/,
    themes: ['新', '乌鲁木齐', '天山', '绿洲'],
    modifiers: ['oasis_canal'],
    adcode: '650100',
    region7: '西北',
  },
  tianjin: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /五大道|海河|古文化/,
    themes: ['津', '天津', '海河'],
    modifiers: ['coastal_band'],
    adcode: '120100',
    region7: '华北',
  },
  taiyuan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /晋祠/,
    themes: ['晋', '太原', '汾河'],
    modifiers: ['named_river'],
    adcode: '140100',
    region7: '华北',
  },
  hohhot: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /大召/,
    themes: ['内蒙古', '呼和浩特'],
    modifiers: ['named_river'],
    adcode: '150100',
    region7: '华北',
  },
  nanjing: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念|雨花/,
    visitName: /夫子|城墙/,
    themes: ['苏', '南京', '长江'],
    modifiers: ['river_front'],
    adcode: '320100',
    region7: '华东',
  },
  hangzhou: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /西湖|断桥|灵隐/,
    themes: ['浙', '杭州', '西湖'],
    modifiers: ['river_front'],
    adcode: '330100',
    region7: '华东',
  },
  hefei: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念|渡江/,
    visitName: /包公/,
    themes: ['皖', '合肥', '巢湖'],
    modifiers: ['named_river'],
    adcode: '340100',
    region7: '华东',
  },
  fuzhou: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /三坊七巷/,
    themes: ['闽', '福州', '闽江'],
    modifiers: ['river_front'],
    adcode: '350100',
    region7: '华东',
  },
  nanchang: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /八一|纪念/,
    visitName: /滕王/,
    themes: ['赣', '南昌', '赣江'],
    modifiers: ['named_river'],
    adcode: '360100',
    region7: '华东',
  },
  jinan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /趵突|大明湖/,
    themes: ['鲁', '济南', '泉'],
    modifiers: ['named_river'],
    adcode: '370100',
    region7: '华东',
  },
  zhengzhou: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /商都|黄河/,
    themes: ['豫', '郑州', '黄河'],
    modifiers: ['named_river'],
    adcode: '410100',
    region7: '华中',
  },
  nanning: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /骑楼|邕江/,
    themes: ['桂', '南宁'],
    modifiers: ['qilou_arcade'],
    adcode: '450100',
    region7: '华南',
  },
  haikou: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /骑楼|海岸/,
    themes: ['琼', '海口'],
    modifiers: ['qilou_arcade'],
    adcode: '460100',
    region7: '华南',
  },
  chongqing: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /解放|纪念/,
    visitName: /湖广|两江/,
    themes: ['渝', '重庆', '长江', '嘉陵'],
    modifiers: ['two_rivers_confluence'],
    adcode: '500100',
    region7: '西南',
  },
  lhasa: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /布达拉|大昭/,
    themes: ['藏', '拉萨', '拉萨河'],
    modifiers: ['named_river'],
    adcode: '540100',
    region7: '西南',
  },
  lanzhou: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /铁桥|黄河/,
    themes: ['甘', '兰州', '黄河'],
    modifiers: ['named_river'],
    adcode: '620100',
    region7: '西北',
  },
  xining: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /东关|湟水/,
    themes: ['青', '西宁'],
    modifiers: ['named_river'],
    adcode: '630100',
    region7: '西北',
  },
  yinchuan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /海宝/,
    themes: ['宁', '银川', '黄河'],
    modifiers: ['oasis_canal'],
    adcode: '640100',
    region7: '西北',
  },
  taipei: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /北门|龙山|故宫/,
    themes: ['台', '台北', '淡水河', '教学'],
    modifiers: ['named_river'],
    adcode: '710100',
    region7: '华东',
  },
  hongkong: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /金紫荆|纪念/,
    visitName: /太平山|大馆/,
    themes: ['港', '香港', '特别行政区'],
    modifiers: ['qilou_arcade'],
    adcode: '810100',
    region7: '华南',
  },
  macau: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /金莲花|纪念/,
    visitName: /大三巴|妈阁/,
    themes: ['澳', '澳门', '特别行政区'],
    modifiers: ['qilou_arcade'],
    adcode: '820100',
    region7: '华南',
  },
  datong: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /云冈/,
    themes: ['晋', '大同', '御河'],
    modifiers: ['named_river'],
    adcode: '140200',
    region7: '华北',
  },
  baotou: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /五当召|黄河/,
    themes: ['内蒙古', '包头', '黄河'],
    modifiers: ['named_river'],
    adcode: '150200',
    region7: '华北',
  },
  ningbo: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /天一阁|甬江/,
    themes: ['浙', '宁波', '东海'],
    modifiers: ['coastal_band'],
    adcode: '330200',
    region7: '华东',
  },
  wuhu: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /广济|长江/,
    themes: ['皖', '芜湖', '长江'],
    modifiers: ['named_river'],
    adcode: '340200',
    region7: '华东',
  },
  xiamen: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /南普陀|骑楼|海峡/,
    themes: ['闽', '厦门', '海峡'],
    modifiers: ['qilou_arcade'],
    adcode: '350200',
    region7: '华东',
  },
  jingdezhen: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /御窑|昌江/,
    themes: ['赣', '景德镇', '昌江'],
    modifiers: ['named_river'],
    adcode: '360200',
    region7: '华东',
  },
  zhuzhou: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /神农|湘江/,
    themes: ['湘', '株洲', '湘江'],
    modifiers: ['named_river'],
    adcode: '430200',
    region7: '华中',
  },
  sanya: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /南山|南海|骑楼/,
    themes: ['琼', '三亚', '南海'],
    modifiers: ['coastal_band'],
    adcode: '460200',
    region7: '华南',
  },
  qujing: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /文庙|南盘江/,
    themes: ['云', '曲靖', '南盘江'],
    modifiers: ['named_river'],
    adcode: '530300',
    region7: '西南',
  },
  shigatse: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /扎什伦布|年楚|雅鲁藏布/,
    themes: ['藏', '日喀则', '雅鲁藏布江'],
    modifiers: ['named_river'],
    adcode: '540200',
    region7: '西南',
  },
  haidong: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /瞿昙|湟水/,
    themes: ['青', '海东', '湟水'],
    modifiers: ['named_river'],
    adcode: '630200',
    region7: '西北',
  },
  shizuishan: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /武当|黄河/,
    themes: ['宁', '石嘴山', '黄河'],
    modifiers: ['oasis_canal'],
    adcode: '640200',
    region7: '西北',
  },
  kelamayi: {
    minZones: 3,
    minLandmarks: 5,
    guardName: /纪念/,
    visitName: /工业遗产|水渠|绿洲/,
    themes: ['新', '克拉玛依', '绿洲'],
    modifiers: ['oasis_canal'],
    adcode: '650200',
    region7: '西北',
  },
}

for (const id of liveCity) {
  const dir = packDir(id)
  for (const f of ['city.json', 'layout.json', 'quiz.json', 'knowledge.json']) {
    if (!fs.existsSync(path.join(dir, f))) fail(`missing ${dir}/${f}`)
  }
  const city = readJson(path.join(dir, 'city.json'))
  const layout = readJson(path.join(dir, 'layout.json'))
  const quiz = readJson(path.join(dir, 'quiz.json'))
  const knowledge = readJson(path.join(dir, 'knowledge.json'))
  const rule = cityRules[id]

  if (city.fictional) fail(`${id} must not be fictional`)
  if (city.draft) fail(`${id} live pack must not set draft`)
  if (['lat', 'lon', 'latitude', 'longitude'].some((k) => k in city)) fail(`${id} city.json has coords`)
  if (!city.region7) fail(`${id} missing region7`)
  if (rule?.region7 && city.region7 !== rule.region7) fail(`${id} region7 ${city.region7} ≠ ${rule.region7}`)
  if (rule && city.adcode !== rule.adcode) fail(`${id} adcode ${city.adcode} ≠ ${rule.adcode}`)
  if ((layout.zones ?? []).length < (rule?.minZones ?? 3)) fail(`${id} zones ${layout.zones?.length} < ${rule?.minZones ?? 3}`)
  const lms = layout.landmarks ?? city.landmarks ?? []
  if (lms.length < (rule?.minLandmarks ?? 5)) fail(`${id} landmarks ${lms.length} < 5`)
  const interacts = new Set(lms.map((l) => l.interact))
  if (!interacts.has('guard')) fail(`${id} missing interact=guard`)
  if (!interacts.has('visit')) fail(`${id} missing interact=visit`)
  if (rule?.guardName) {
    const g = lms.find((l) => rule.guardName.test(l.name) || rule.guardName.test(l.id))
    if (!g || g.interact !== 'guard') fail(`${id} GUARD landmark missing (${rule.guardName})`)
  }
  if (rule?.visitName) {
    const v = lms.find((l) => rule.visitName.test(l.name) || rule.visitName.test(l.id))
    if (!v || v.interact !== 'visit') fail(`${id} VISIT landmark missing (${rule.visitName})`)
  }
  const cards = knowledge.cards ?? []
  if (cards.length < 8) fail(`${id} knowledge cards ${cards.length} < 8`)
  const blob = JSON.stringify(knowledge)
  for (const need of rule?.themes ?? []) {
    if (!blob.includes(need)) fail(`${id} knowledge missing theme ${need}`)
  }
  const q912 = questionsFor(quiz, '9-12')
  const q68 = questionsFor(quiz, '6-8')
  if (q912.length < 5) fail(`${id} 9-12 quiz ${q912.length} < 5`)
  if (q68.length < 4) fail(`${id} 6-8 quiz ${q68.length} < 4`)
  const mods = city.gameplayModifiers ?? layout.variants ?? []
  if (rule?.modifiers?.length) {
    const ok = rule.modifiers.some((m) => mods.includes(m))
    if (!ok) fail(`${id} needs modifier ${rule.modifiers.join('|')}`)
  }
}

if (process.exitCode) process.exit(process.exitCode)
console.log(`validate:packs OK — training + live cities: ${liveCity.join(', ')}`)
