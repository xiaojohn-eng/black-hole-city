#!/usr/bin/env node
/**
 * Promote M3b12 non-capital prefecture-city packs to B-grade live.
 * Factory path: scaffold:city + kits, then this writer fills knowledge/quiz.
 * Run: node tools/write-m3b12-packs.mjs
 * This slice: ≥11 non-capital prefecture_city live in every province/AR that
 * has ≥11 eligible non-capital prefecture_city rows, except Heilongjiang
 * (only remaining city is 伊春). Qinghai / Hainan / Xinjiang / Ningxia /
 * Guizhou / Tibet / Jilin / Yunnan / Inner Mongolia / Fujian / Shaanxi /
 * Hebei / Shanxi / Zhejiang / Jiangxi / provinces with <11 non-cap are exempt.
 * Not 293 / 333 complete. M3b eleventh batch.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DISCLAIMER, M3A_LIVE_PACKS, M3A_DRAFT_PACKS, M3B12_NEW_LIVE } from './region7.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const packsRoot = path.join(root, 'public', 'packs')

function writeJson(file, obj) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n')
}

function zones(names, colors) {
  return [
    { id: 'south_park', name: names[0], x: 0, z: -80, w: 240, d: 80, color: colors[0], spawn: true, quotas: { L1: 16, L2: 12, L3: 8, L4: 4 } },
    { id: 'old_town', name: names[1], x: -70, z: 8, w: 100, d: 96, color: colors[1], quotas: { L1: 8, L2: 8, L3: 8, L4: 6, L6: 6, L7: 2 } },
    { id: 'civic', name: names[2], x: 0, z: 40, w: 56, d: 120, color: colors[2], quotas: { L1: 4, L2: 4, L3: 2 } },
    { id: 'modern', name: names[3], x: 78, z: 12, w: 84, d: 110, color: colors[3], quotas: { L4: 8, L5: 6, L7: 4, L8: 2, L9: 1 } },
  ]
}

function lm(p) {
  return {
    id: p.id,
    name: p.name,
    mesh: p.mesh,
    interact: p.interact,
    x: p.x,
    z: p.z,
    tier: p.tier ?? 10,
    zone: p.zone,
    knowledgeCardId: p.card,
    whyHere: p.why,
    silhouette: p.sil,
  }
}

function card(id, title, body, tags, ageBand) {
  return { id, title, body, tags, ageBand }
}

function q(id, ageBand, prompt, choices, answer, explain, curriculumTag) {
  const row = { id, ageBand, type: 'mc', prompt, choices, answer, explain }
  if (curriculumTag) row.curriculumTag = curriculumTag
  return row
}

const PAL = {
  north: { sky: '#8ec0e0', fog: '#9ec6d8', ground: '#5c584e', road: '#4b4550' },
  jiangnan: { sky: '#9ec9d8', fog: '#b7d4dc', ground: '#6b7a68', road: '#5b6570' },
  lingnan: { sky: '#7eb8d4', fog: '#9cc9d6', ground: '#6a6e58', road: '#4a5560' },
  oasis: { sky: '#d4c4a8', fog: '#cbb892', ground: '#c4a574', road: '#8a7a62' },
}

const ROAD = {
  north: { style: 'hutong_axis', spacing: 36, width: 8 },
  jiangnan: { style: 'jiangnan_water', spacing: 32, width: 7 },
  lingnan: { style: 'qilou_street', spacing: 28, width: 8 },
  oasis: { style: 'oasis_court', spacing: 48, width: 7 },
}

const ZN = ['#5c584e', '#9a7560', '#8a7048', '#4a5568']
const ZJ = ['#6b7a68', '#8a9a88', '#5a7a72', '#4a5568']
const ZL = ['#6a6e58', '#8a9070', '#5a6a58', '#4a5560']
const ZO = ['#c4a574', '#a89070', '#8a7048', '#6a5a48']

function noncapQuiz(s) {
  return [
    q(`q-${s.px}-01`, '6-8', '本省级行政区的简称是？', [s.shortWrong[0], s.short, s.shortWrong[1], s.shortWrong[2]], 1, s.provinceExplain, 'geo.2022.cn.province'),
    q(`q-${s.px}-02`, '6-8', s.riverQ, [s.riverWrong[0], s.riverA, s.riverWrong[1], s.riverWrong[2]], 1, `${s.riverA}。`),
    q(`q-${s.px}-03`, '6-8', '纪念空间应该怎么对待？', ['吸入归档', '绕着它走一圈，完成守护致敬', '推倒', '忽略'], 1, '纪念空间只可守护。'),
    q(`q-${s.px}-04`, '6-8', s.visitQ, ['吸入', '参观外观', '改造成游乐场', '搬走'], 1, '文保只参观。'),
    q(`q-${s.px}-05`, '9-12', s.extraQ, [s.extraWrong[0], s.extraA, s.extraWrong[1], s.extraWrong[2]], 1, `${s.extraA}是行政中心，本城是非省会。`, 'geo.2022.cn.province'),
    q(`q-${s.px}-06`, '9-12', '这座城在七大区中属于？', [s.regionWrong[0], s.region, s.regionWrong[1], s.regionWrong[2]], 1, `七大区：${s.region}。`),
    q(`q-${s.px}-07`, '9-12', s.climateQ, [s.climateWrong[0], s.climateA, s.climateWrong[1], s.climateWrong[2]], 1, `${s.climateA}。`, 'geo.2022.cn.climate'),
    q(`q-${s.px}-08`, '9-12', '本切片能不能宣称全国地级已收录？', ['能', '不能，不是 333 也不是 293 完成', '做满每省十一座就能', '看心情'], 1, 'M3b12 只做非省会 ≥11 的省各 ≥11 座非省会地级市（豁免青海、海南、新疆、宁夏、贵州、西藏、吉林、云南、内蒙古、福建、陕西、河北、山西、浙江、江西、黑龙江与非省会总数 <11 的省），不是 293 / 333 完成。'),
    q(`q-${s.px}-09`, '9-12', '客户端为什么不能写 lat/lon？', ['好看', '审图与隐私：关卡只用局部网格', 'Three.js 不支持', 'CSV 没有名字'], 1, '网格坐标不是地理坐标。'),
    q(`q-${s.px}-10`, '6-8', s.selfQ, ['是', s.selfA, '是首都北京', '是训练场'], 1, s.selfA + '。'),
  ]
}

function emit(s) {
  const px = s.px
  const cityShort = s.name.replace(/市$/, '')
  return {
    city: {
      adcode: s.adcode,
      packId: s.packId,
      name: s.name,
      alias: s.alias || [cityShort],
      shortName: s.short,
      unitType: 'prefecture_city',
      parentProvince: s.province,
      region7: s.region7,
      region4: s.region4,
      locationDesc: s.locationDesc,
      climateBand: s.climate,
      landform: s.landform,
      riversLakes: s.rivers,
      neighbors: s.neighbors,
      cityFunction: ['地级市', '非省会', ...(s.functions || [])],
      storyTitle: s.storyTitle,
      storyLogline: s.storyLogline,
      storyBeats: s.storyBeats,
      gameplayModifiers: s.mods,
      bgmPalette: s.bgm,
      colorPalette: s.pal,
      spawn: { x: 0, z: -96 },
      mapSize: 240,
      mode: 'career',
      fictional: false,
      kitId: s.kit,
      startCards: [`card-${px}-river`, `card-${px}-short`],
      briefing: s.briefing,
    },
    roads: s.roads,
    variants: s.mods,
    zoneNames: s.zoneNames,
    zoneColors: s.zoneColors,
    landmarks: [
      lm({ id: `${px}-guard`, name: s.guardName, mesh: 'monument_obelisk', interact: 'guard', x: 0, z: 32, zone: 'civic', card: `card-${px}-guard`, why: '纪念空间。环绕守护一周，不可归档进洞。', sil: '纪念碑' }),
      lm({ id: `${px}-visit`, name: s.visitName, mesh: s.visitMesh, interact: 'visit', x: -40, z: 20, zone: 'old_town', card: `card-${px}-visit`, why: s.visitWhy, sil: s.visitSil }),
      lm({ id: `${px}-water`, name: s.waterName, mesh: s.waterMesh || 'yangtze_bridge', interact: 'visit', x: 12, z: -28, zone: 'south_park', card: `card-${px}-river`, why: s.waterWhy, sil: s.waterSil }),
      lm({ id: `${px}-street`, name: s.streetName, mesh: s.streetMesh || 'wide_alley', interact: 'visit', x: -64, z: -8, zone: 'old_town', card: `card-${px}-place`, why: s.streetWhy, sil: s.streetSil || '旧巷店铺' }),
      lm({ id: `${px}-sky`, name: s.skyName || '当代楼宇', mesh: 'cbd_tower', interact: 'swallow', x: 88, z: 40, zone: 'modern', card: `card-${px}-noncap`, why: s.skyWhy || '可归档的当代公共建筑。', sil: '高楼' }),
    ],
    knowledge: [
      card(`card-${px}-river`, s.kRiverTitle, s.kRiverBody, s.kRiverTags, ['6-8', '9-12', '13+']),
      card(`card-${px}-short`, `省简称是「${s.short}」`, `${s.province}的简称是「${s.short}」。${cityShort}属于本省，但行政中心是${s.capital}。`, ['简称', s.short], ['6-8', '9-12']),
      card(`card-${px}-climate`, s.climate, s.kClimateBody, ['气候', s.climate], ['9-12', '13+']),
      card(`card-${px}-visit`, `${s.visitName}：参观`, s.kVisitBody, [s.visitTag || s.visitName, 'VISIT'], ['6-8', '9-12', '13+']),
      card(`card-${px}-guard`, '烈士纪念碑：守护致敬', '纪念碑是纪念空间，请绕行一周致敬。', ['GUARD', '纪念'], ['6-8', '9-12', '13+']),
      card(`card-${px}-place`, s.kPlaceTitle, s.kPlaceBody, s.kPlaceTags, ['9-12']),
      card(`card-${px}-kit`, s.kKitTitle, s.kKitBody, ['套件'], ['9-12']),
      card(`card-${px}-noncap`, '不是本省行政中心', `${s.province}行政中心是${s.capital}。${cityShort}是非省会地级市。本刀不是 293 完成，更不是 333 完成。`, ['非省会'], ['9-12', '13+']),
    ],
    quiz: noncapQuiz({
      px,
      short: s.short,
      shortWrong: s.shortWrong,
      provinceExplain: s.provinceExplain,
      riverQ: s.riverQ,
      riverA: s.riverA,
      riverWrong: s.riverWrong,
      visitQ: `${s.visitName}在本课里应该？`,
      region: s.region7,
      regionWrong: s.regionWrong,
      climateQ: `${cityShort}主要属于哪种气候？`,
      climateA: s.climate,
      climateWrong: s.climateWrong,
      extraQ: `${s.province}的行政中心是？`,
      extraA: s.capital,
      extraWrong: s.extraWrong,
      selfQ: `${cityShort}是不是${s.province}的行政中心？`,
      selfA: `不是，行政中心是${s.capital}`,
    }),
  }
}

function city(s) {
  const short = s.name.replace(/市$/, '')
  return emit({
    guardName: `${short}革命烈士纪念碑`,
    visitName: `${short}文庙`,
    visitMesh: 'city_god_temple',
    visitWhy: '文庙外观只参观。',
    visitSil: '飞檐殿宇',
    visitTag: '文庙',
    waterSil: '河桥',
    streetName: `${short}旧街`,
    streetWhy: '旧街参观。',
    streetSil: '旧巷',
    kVisitBody: `${short}文庙是文庙外观。走近点亮参观记忆。`,
    mods: ['named_river'],
    ...s,
  })
}

const CITIES = [
  city({
    px: 'fsn',
    adcode: '210400',
    packId: 'fushun',
    name: '抚顺市',
    short: '辽',
    province: '辽宁省',
    capital: '沈阳',
    region7: '东北',
    region4: '北方地区',
    locationDesc: '在辽宁东部，浑河上游。辽宁省的地级市，不是本省行政中心。',
    climate: '温带季风',
    landform: ['河谷', '丘陵'],
    rivers: ['浑河'],
    neighbors: ['沈阳', '铁岭', '辽阳'],
    functions: ['浑河上游教学点'],
    storyTitle: '浑河上游记忆',
    storyLogline: '河谷的风把文庙前的路牌吹斜。你沿浑河上游把它们收回博物馆。',
    storyBeats: ['从浑河岸起步', '旧街砖巷收集市井记忆', '参观抚顺文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['河谷风', '砖巷'],
    pal: PAL.north,
    kit: 'north-brick-hutong',
    roads: ROAD.north,
    zoneNames: ['浑河岸', '旧街砖巷', '文庙与纪念', '当代楼宇'],
    zoneColors: ZN,
    briefing: [
      '我们在抚顺，辽宁省的地级市，不是本省行政中心。沈阳才是辽宁省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。浑河上游从抚顺流向沈阳。沈阳认城区里的浑河。不拿本溪水洞，也不选辽阳重复太子河。',
    ],
    waterName: '浑河岸',
    waterWhy: '河桥剪影。参观，认识浑河上游。',
    kRiverTitle: '浑河上游在抚顺',
    kRiverBody: '抚顺在辽宁东部。浑河上游从这里流向沈阳。沈阳认城区里的浑河，鞍山认太子河，铁岭认辽河。抚顺补浑河出山后的上游，不选辽阳重复太子河。不拿本溪水洞。',
    kRiverTags: ['浑河', '抚顺'],
    kClimateBody: '抚顺是温带季风气候，比辽西的阜新湿一点。本课用北方砖。不拿本溪。',
    kPlaceTitle: '同一条浑河的上游',
    kPlaceBody: '儿童说法：沈阳在下游城区，抚顺在上游。太子河是另一条河。不拿本溪。',
    kPlaceTags: ['浑河', '上游'],
    kKitTitle: '北方砖套件',
    kKitBody: '辽东河谷用北方砖。不拿本溪水洞。',
    shortWrong: ['吉', '黑', '冀'],
    provinceExplain: '辽宁简称「辽」。',
    riverQ: '流过抚顺、再到沈阳的河是？',
    riverA: '浑河',
    riverWrong: ['太子河', '辽河', '大凌河'],
    regionWrong: ['华北', '华东', '西北'],
    climateWrong: ['亚热带季风', '热带雨林', '高原山地'],
    extraWrong: ['抚顺', '大连', '长春'],
  }),
  city({
    px: 'zhen',
    adcode: '321100',
    packId: 'zhenjiang',
    name: '镇江市',
    short: '苏',
    province: '江苏省',
    capital: '南京',
    region7: '华东',
    region4: '南方地区',
    locationDesc: '在长江南岸，运河过江的地方，古称京口。江苏省的地级市，不是本省行政中心。',
    climate: '亚热带季风',
    landform: ['江岸', '平原'],
    rivers: ['长江', '京杭运河'],
    neighbors: ['南京', '扬州', '常州'],
    functions: ['运河过江教学点'],
    storyTitle: '京口记忆',
    storyLogline: '江风把文庙前的路牌打湿。你在京口把运河过江的记忆收回博物馆。',
    storyBeats: ['从长江岸起步', '水巷收集市井记忆', '参观镇江文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['江风', '水巷'],
    pal: PAL.jiangnan,
    kit: 'jiangnan-water',
    roads: ROAD.jiangnan,
    zoneNames: ['长江岸', '水巷', '文庙与纪念', '当代楼宇'],
    zoneColors: ZJ,
    briefing: [
      '我们在镇江，江苏省的地级市，不是本省行政中心。南京才是江苏省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。镇江古称京口，在长江南岸。京杭运河从这里过江，北岸是扬州。泰州讲里下河，苏州讲太湖。',
    ],
    waterName: '京口江岸',
    waterWhy: '江桥剪影。参观，认识运河过江。',
    kRiverTitle: '运河在京口过长江',
    kRiverBody: '镇江在长江南岸，古称京口。京杭运河从这里过江，北岸是扬州。苏州讲太湖，泰州讲里下河，南通讲长江口，淮安讲淮河。本课认运河过江，不把镇江再讲成一座太湖城。',
    kRiverTags: ['京口', '长江'],
    kClimateBody: '镇江在淮河以南，亚热带季风气候。本课用水岸套件。',
    kPlaceTitle: '南岸过江，不是里下河',
    kPlaceBody: '儿童说法：运河是一条线。它在京口过长江。里下河是泰州那片水网，不是这里。',
    kPlaceTags: ['运河过江', '京口'],
    kKitTitle: '江南水岸套件',
    kKitBody: '江岸用水岸剪影。不是山城毁城秀。',
    shortWrong: ['浙', '皖', '沪'],
    provinceExplain: '江苏简称「苏」。',
    riverQ: '镇江这一课要认清的是？',
    riverA: '运河在京口过长江',
    riverWrong: ['里下河', '太湖', '骆马湖'],
    regionWrong: ['华北', '华南', '西北'],
    climateWrong: ['温带大陆性', '热带雨林', '高原山地'],
    extraWrong: ['镇江', '苏州', '杭州'],
  }),
  city({
    px: 'chiz',
    adcode: '341700',
    packId: 'chizhou',
    name: '池州市',
    short: '皖',
    province: '安徽省',
    capital: '合肥',
    region7: '华东',
    region4: '南方地区',
    locationDesc: '在长江南岸，秋浦河入江的地方。安徽省的地级市，不是本省行政中心。',
    climate: '亚热带季风',
    landform: ['江岸', '河谷'],
    rivers: ['秋浦河', '长江'],
    neighbors: ['安庆', '铜陵', '芜湖'],
    functions: ['秋浦河教学点'],
    storyTitle: '秋浦河记忆',
    storyLogline: '江风把文庙前的路牌打湿。你沿秋浦河把它们收回博物馆。',
    storyBeats: ['从秋浦河岸起步', '水巷收集市井记忆', '参观池州文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['江风', '水巷'],
    pal: PAL.jiangnan,
    kit: 'jiangnan-water',
    roads: ROAD.jiangnan,
    zoneNames: ['秋浦河岸', '水巷', '文庙与纪念', '当代楼宇'],
    zoneColors: ZJ,
    briefing: [
      '我们在池州，安徽省的地级市，不是本省行政中心。合肥才是安徽省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。秋浦河向北流入长江。芜湖和安庆讲长江干流。不拿九华山，不拿黄山。',
    ],
    waterName: '秋浦河岸',
    waterWhy: '河桥剪影。参观，认识秋浦河。',
    kRiverTitle: '秋浦河流入长江',
    kRiverBody: '池州在长江南岸。秋浦河从这里向北流入长江。安庆和芜湖讲长江干流，蚌埠讲淮河，淮北讲濉河，宣城讲水阳江。池州补秋浦河。不拿九华山，不拿黄山，不是山城毁城秀。',
    kRiverTags: ['秋浦河', '池州'],
    kClimateBody: '池州在长江以南，亚热带季风气候。本课用水岸套件。不拿黄山，不拿九华山。',
    kPlaceTitle: '认河，不认山',
    kPlaceBody: '儿童说法：黄山是另一座城，九华山不是本课。池州认秋浦河。不是山城毁城秀。',
    kPlaceTags: ['秋浦河', '长江'],
    kKitTitle: '江南水岸套件',
    kKitBody: '沿江河谷用水岸剪影。不拿九华山，不拿黄山，不是山城毁城秀。',
    shortWrong: ['苏', '赣', '浙'],
    provinceExplain: '安徽简称「皖」。',
    riverQ: '在池州流入长江的河是？',
    riverA: '秋浦河',
    riverWrong: ['淮河', '濉河', '青弋江'],
    regionWrong: ['华北', '华南', '西北'],
    climateWrong: ['温带大陆性', '热带雨林', '高原山地'],
    extraWrong: ['池州', '芜湖', '南京'],
  }),
  city({
    px: 'binz',
    adcode: '371600',
    packId: 'binzhou',
    name: '滨州市',
    short: '鲁',
    province: '山东省',
    capital: '济南',
    region7: '华东',
    region4: '北方地区',
    locationDesc: '在山东北部，黄河入海之前。山东省的地级市，不是本省行政中心。',
    climate: '温带季风',
    landform: ['平原', '河岸'],
    rivers: ['黄河'],
    neighbors: ['东营', '德州', '淄博'],
    functions: ['黄河下游教学点'],
    storyTitle: '入海前的黄河',
    storyLogline: '河风把文庙前的路牌吹斜。你沿入海前的黄河把它们收回博物馆。',
    storyBeats: ['从黄河岸起步', '旧街砖巷收集市井记忆', '参观滨州文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['河风', '砖巷'],
    pal: PAL.north,
    kit: 'north-brick-hutong',
    roads: ROAD.north,
    zoneNames: ['黄河岸', '旧街砖巷', '文庙与纪念', '当代楼宇'],
    zoneColors: ZN,
    briefing: [
      '我们在滨州，山东省的地级市，不是本省行政中心。济南才是山东省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。黄河从滨州流向东营，再入渤海。东营讲入海口。不拿泰山。',
    ],
    waterName: '黄河岸',
    waterWhy: '河桥剪影。参观，认识入海前的黄河。',
    kRiverTitle: '黄河还没入海的一段',
    kRiverBody: '滨州在山东北部。黄河从这里继续流向东营，然后入渤海。东营讲入海口，德州讲运河和徒骇河，青岛讲黄海，日照讲付疃河。滨州补入海前的黄河。不拿泰山。',
    kRiverTags: ['黄河', '滨州'],
    kClimateBody: '滨州靠黄河下游，温带季风气候。本课用北方砖。不拿泰山。',
    kPlaceTitle: '入海口在下一座城',
    kPlaceBody: '儿童说法：东营是黄河入海的地方。滨州在入海之前。泰山在泰安，不拿来插队。',
    kPlaceTags: ['黄河', '渤海'],
    kKitTitle: '北方砖套件',
    kKitBody: '黄河北岸平原用北方砖。不拿泰山。',
    shortWrong: ['冀', '豫', '苏'],
    provinceExplain: '山东简称「鲁」。',
    riverQ: '从滨州流向东营入海的河是？',
    riverA: '黄河',
    riverWrong: ['徒骇河', '付疃河', '淄河'],
    regionWrong: ['华北', '华南', '西北'],
    climateWrong: ['亚热带季风', '热带雨林', '高原山地'],
    extraWrong: ['滨州', '青岛', '南京'],
  }),
  city({
    px: 'hebi',
    adcode: '410600',
    packId: 'hebi',
    name: '鹤壁市',
    short: '豫',
    province: '河南省',
    capital: '郑州',
    region7: '华中',
    region4: '北方地区',
    locationDesc: '在河南北部，淇河边。河南省的地级市，不是本省行政中心。',
    climate: '温带季风',
    landform: ['平原', '河谷'],
    rivers: ['淇河'],
    neighbors: ['安阳', '新乡', '濮阳'],
    functions: ['淇河教学点'],
    storyTitle: '淇河记忆',
    storyLogline: '河风把文庙前的路牌吹斜。你沿淇河把它们收回博物馆。',
    storyBeats: ['从淇河岸起步', '旧街砖巷收集市井记忆', '参观鹤壁文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['河风', '砖巷'],
    pal: PAL.north,
    kit: 'north-brick-hutong',
    roads: ROAD.north,
    zoneNames: ['淇河岸', '旧街砖巷', '文庙与纪念', '当代楼宇'],
    zoneColors: ZN,
    briefing: [
      '我们在鹤壁，河南省的地级市，不是本省行政中心。郑州才是河南省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。淇河向南汇入卫河。安阳讲洹河，新乡讲卫河。课认淇河，不拿山。',
    ],
    waterName: '淇河岸',
    waterWhy: '河桥剪影。参观，认识淇河。',
    kRiverTitle: '淇河汇入卫河',
    kRiverBody: '鹤壁在河南北部。淇河向南汇入卫河。安阳讲洹河，新乡讲卫河，漯河讲沙河，周口讲颍河。鹤壁补淇河。先认河，再认河南省的非省会。',
    kRiverTags: ['淇河', '鹤壁'],
    kClimateBody: '鹤壁在黄河以北，温带季风气候。本课用北方砖。',
    kPlaceTitle: '三条河不要认混',
    kPlaceBody: '儿童说法：洹河在安阳，卫河在新乡，淇河在鹤壁。淇河最后汇入卫河，但本课先认淇河。',
    kPlaceTags: ['淇河', '卫河'],
    kKitTitle: '北方砖套件',
    kKitBody: '河南北部平原用北方砖。不是山城毁城秀。',
    shortWrong: ['冀', '鲁', '鄂'],
    provinceExplain: '河南简称「豫」。',
    riverQ: '流过鹤壁、汇入卫河的河是？',
    riverA: '淇河',
    riverWrong: ['洹河', '卫河', '沙河'],
    regionWrong: ['华北', '华东', '西北'],
    climateWrong: ['亚热带季风', '热带雨林', '高原山地'],
    extraWrong: ['鹤壁', '洛阳', '武汉'],
  }),
  city({
    px: 'jmen',
    adcode: '420800',
    packId: 'jingmen',
    name: '荆门市',
    short: '鄂',
    province: '湖北省',
    capital: '武汉',
    region7: '华中',
    region4: '南方地区',
    locationDesc: '在江汉平原中部，漳河边。湖北省的地级市，不是本省行政中心。',
    climate: '亚热带季风',
    landform: ['平原', '河岸'],
    rivers: ['漳河'],
    neighbors: ['襄阳', '荆州', '宜昌'],
    functions: ['漳河教学点'],
    storyTitle: '漳河记忆',
    storyLogline: '平原的风把文庙前的路牌打湿。你沿漳河把它们收回博物馆。',
    storyBeats: ['从漳河岸起步', '水巷收集市井记忆', '参观荆门文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['平原风', '水巷'],
    pal: PAL.jiangnan,
    kit: 'jiangnan-water',
    roads: ROAD.jiangnan,
    zoneNames: ['漳河岸', '水巷', '文庙与纪念', '当代楼宇'],
    zoneColors: ZJ,
    briefing: [
      '我们在荆门，湖北省的地级市，不是本省行政中心。武汉才是湖北省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。漳河在荆门聚成水库，再向南汇入长江。襄阳讲汉江，荆州讲长江干流。',
    ],
    waterName: '漳河岸',
    waterWhy: '河桥剪影。参观，认识漳河。',
    kRiverTitle: '漳河在荆门',
    kRiverBody: '荆门在江汉平原中部。漳河在这里聚成水库，再向南汇入长江。襄阳讲汉江，荆州讲长江干流，宜昌讲江出峡谷，咸宁讲陆水。荆门补漳河，不把汉江再讲一遍。',
    kRiverTags: ['漳河', '荆门'],
    kClimateBody: '荆门在长江中游平原，亚热带季风气候。本课用水岸套件。',
    kPlaceTitle: '不是又一座汉江城',
    kPlaceBody: '儿童说法：汉江的课在襄阳。荆门认漳河。长江干流的课在荆州。',
    kPlaceTags: ['漳河', '长江'],
    kKitTitle: '江南水岸套件',
    kKitBody: '平原河岸用水岸剪影。不是山城毁城秀。',
    shortWrong: ['湘', '豫', '赣'],
    provinceExplain: '湖北简称「鄂」。',
    riverQ: '在荆门聚成水库、再入长江的河是？',
    riverA: '漳河',
    riverWrong: ['汉江', '长江', '陆水'],
    regionWrong: ['华东', '华南', '西北'],
    climateWrong: ['温带大陆性', '热带雨林', '高原山地'],
    extraWrong: ['荆门', '宜昌', '长沙'],
  }),
  city({
    px: 'huah',
    adcode: '431200',
    packId: 'huaihua',
    name: '怀化市',
    short: '湘',
    province: '湖南省',
    capital: '长沙',
    region7: '华中',
    region4: '南方地区',
    locationDesc: '在湖南西部，沅江中游。湖南省的地级市，不是本省行政中心。',
    climate: '亚热带季风',
    landform: ['河谷', '盆地'],
    rivers: ['沅江', '舞水'],
    neighbors: ['邵阳', '常德', '娄底'],
    functions: ['沅江教学点'],
    storyTitle: '沅江记忆',
    storyLogline: '河谷的雾把文庙前的路牌打湿。你沿沅江把它们收回博物馆。',
    storyBeats: ['从沅江岸起步', '水巷收集市井记忆', '参观怀化文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['河谷雾', '水巷'],
    pal: PAL.jiangnan,
    kit: 'jiangnan-water',
    roads: ROAD.jiangnan,
    zoneNames: ['沅江岸', '水巷', '文庙与纪念', '当代楼宇'],
    zoneColors: ZJ,
    briefing: [
      '我们在怀化，湖南省的地级市，不是本省行政中心。长沙才是湖南省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。沅江从怀化流向常德，再入洞庭。舞水在这里汇入沅江。不拿张家界。',
    ],
    waterName: '沅江岸',
    waterWhy: '江桥剪影。参观，认识沅江。',
    kRiverTitle: '沅江中游在怀化',
    kRiverBody: '怀化在湖南西部。沅江从这里流向常德，再入洞庭。舞水在怀化汇入沅江。常德讲入湖，邵阳讲资江，株洲讲湘江，岳阳讲洞庭。怀化补沅江中游。不拿张家界，不是山城毁城秀。',
    kRiverTags: ['沅江', '怀化'],
    kClimateBody: '怀化在湘西河谷，亚热带季风气候。本课用水岸套件。不拿张家界，不是山城毁城秀。',
    kPlaceTitle: '认沅江，不认张家界',
    kPlaceBody: '儿童说法：常德是沅江入洞庭的地方。怀化在中游。张家界仍是灰壳，不拿来插队。不是山城毁城秀。',
    kPlaceTags: ['沅江', '舞水'],
    kKitTitle: '江南水岸套件',
    kKitBody: '河谷用水岸剪影。不拿张家界，不是山城毁城秀。',
    shortWrong: ['鄂', '赣', '粤'],
    provinceExplain: '湖南简称「湘」。',
    riverQ: '流过怀化、再到常德入洞庭的江是？',
    riverA: '沅江',
    riverWrong: ['资江', '湘江', '澧水'],
    regionWrong: ['华南', '华东', '西南'],
    climateWrong: ['温带大陆性', '热带雨林', '高原山地'],
    extraWrong: ['怀化', '岳阳', '武汉'],
  }),
  city({
    px: 'maom',
    adcode: '440900',
    packId: 'maoming',
    name: '茂名市',
    short: '粤',
    province: '广东省',
    capital: '广州',
    region7: '华南',
    region4: '南方地区',
    locationDesc: '在粤西海岸，鉴江入南海的地方。广东省的地级市，不是本省行政中心。',
    climate: '亚热带季风',
    landform: ['沿海平原', '河谷'],
    rivers: ['鉴江'],
    neighbors: ['阳江', '湛江', '云浮'],
    functions: ['鉴江教学点'],
    storyTitle: '鉴江记忆',
    storyLogline: '海风把文庙前的路牌打湿。你沿鉴江把它们收回博物馆。',
    storyBeats: ['从鉴江岸起步', '骑楼街收集市井记忆', '参观茂名文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['海风', '骑楼'],
    pal: PAL.lingnan,
    kit: 'lingnan-qilou',
    roads: ROAD.lingnan,
    zoneNames: ['鉴江岸', '骑楼旧街', '文庙与纪念', '当代楼宇'],
    zoneColors: ZL,
    briefing: [
      '我们在茂名，广东省的地级市，不是本省行政中心。广州才是广东省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。鉴江向南独自流入南海，不进珠江。阳江讲漠阳江，河源讲东江。',
    ],
    waterName: '鉴江岸',
    waterWhy: '江桥剪影。参观，认识鉴江。',
    streetMesh: 'qilou_arcade',
    streetSil: '骑楼',
    kRiverTitle: '鉴江独自流入南海',
    kRiverBody: '茂名在粤西。鉴江向南独自流入南海，不进珠江。阳江讲漠阳江，湛江讲雷州半岛，河源讲东江，肇庆讲西江，韶关讲北江，汕头讲韩江。茂名补鉴江。',
    kRiverTags: ['鉴江', '茂名'],
    kClimateBody: '茂名靠南海，亚热带季风气候，比粤北湿。本课用岭南骑楼。',
    kPlaceTitle: '珠江以外的又一条江',
    kPlaceBody: '儿童说法：漠阳江在阳江入海，鉴江在茂名入海。两条河都不是珠江。',
    kPlaceTags: ['鉴江', '南海'],
    kKitTitle: '岭南骑楼套件',
    kKitBody: '粤西海岸用骑楼剪影。不是山城毁城秀。',
    shortWrong: ['桂', '闽', '琼'],
    provinceExplain: '广东简称「粤」。',
    riverQ: '在茂名独自流入南海的江是？',
    riverA: '鉴江',
    riverWrong: ['漠阳江', '东江', '韩江'],
    regionWrong: ['华东', '华中', '西北'],
    climateWrong: ['温带大陆性', '高原山地', '寒带冰原'],
    extraWrong: ['茂名', '深圳', '南宁'],
  }),
  city({
    px: 'hezh',
    adcode: '451100',
    packId: 'hezhou',
    name: '贺州市',
    short: '桂',
    province: '广西壮族自治区',
    capital: '南宁',
    region7: '华南',
    region4: '南方地区',
    locationDesc: '在广西东部，贺江边上。广西壮族自治区的地级市，不是本区行政中心。',
    climate: '亚热带季风',
    landform: ['河谷', '丘陵'],
    rivers: ['贺江'],
    neighbors: ['梧州', '桂林'],
    functions: ['贺江教学点'],
    storyTitle: '贺江记忆',
    storyLogline: '河谷的风把文庙前的路牌打湿。你沿贺江把它们收回博物馆。',
    storyBeats: ['从贺江岸起步', '水巷收集市井记忆', '参观贺州文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['河谷风', '水巷'],
    pal: PAL.jiangnan,
    kit: 'jiangnan-water',
    roads: ROAD.jiangnan,
    zoneNames: ['贺江岸', '水巷', '文庙与纪念', '当代楼宇'],
    zoneColors: ZJ,
    briefing: [
      '我们在贺州，广西壮族自治区的地级市，不是本区行政中心。南宁才是广西壮族自治区行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。贺江向南进入广东，再汇入西江。梧州讲西江干流，桂林讲漓江。',
    ],
    waterName: '贺江岸',
    waterWhy: '江桥剪影。参观，认识贺江。',
    kRiverTitle: '贺江流向广东',
    kRiverBody: '贺州在广西东部。贺江向南进入广东，再汇入西江。梧州讲西江干流，桂林讲漓江，百色讲右江，北海讲北部湾。贺州补贺江，不把西江再讲一遍。',
    kRiverTags: ['贺江', '贺州'],
    kClimateBody: '贺州在桂东河谷，亚热带季风气候。本课用水岸套件。不是山城毁城秀。',
    kPlaceTitle: '一条流出广西的江',
    kPlaceBody: '儿童说法：漓江在桂林，贺江在贺州。贺江出了广西才汇入西江。不是山城毁城秀。',
    kPlaceTags: ['贺江', '西江'],
    kKitTitle: '江南水岸套件',
    kKitBody: '桂东河谷用水岸剪影。不是山城毁城秀。',
    shortWrong: ['粤', '湘', '贵'],
    provinceExplain: '广西简称「桂」。',
    riverQ: '流过贺州、再进入广东的江是？',
    riverA: '贺江',
    riverWrong: ['漓江', '右江', '左江'],
    regionWrong: ['西南', '华东', '华北'],
    climateWrong: ['温带大陆性', '热带雨林', '高原山地'],
    extraWrong: ['贺州', '桂林', '广州'],
  }),
  city({
    px: 'bazh',
    adcode: '511900',
    packId: 'bazhong',
    name: '巴中市',
    short: '川',
    province: '四川省',
    capital: '成都',
    region7: '西南',
    region4: '南方地区',
    locationDesc: '在四川东北，巴河边。四川省的地级市，不是本省行政中心。',
    climate: '亚热带湿润',
    landform: ['盆地', '河谷'],
    rivers: ['巴河'],
    neighbors: ['达州', '广元', '南充'],
    functions: ['巴河教学点'],
    storyTitle: '巴河记忆',
    storyLogline: '盆地的雾把文庙前的路牌打湿。你沿巴河把它们收回博物馆。',
    storyBeats: ['从巴河岸起步', '水巷收集市井记忆', '参观巴中文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['盆地雾', '江岸'],
    pal: PAL.jiangnan,
    kit: 'jiangnan-water',
    roads: ROAD.jiangnan,
    zoneNames: ['巴河岸', '水巷', '文庙与纪念', '当代楼宇'],
    zoneColors: ZJ,
    briefing: [
      '我们在巴中，四川省的地级市，不是本省行政中心。成都才是四川省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。巴河向南汇入渠江。广安讲渠江干流，南充讲嘉陵江。不拿光雾山，不是山城毁城秀。',
    ],
    waterName: '巴河岸',
    waterWhy: '河桥剪影。参观，认识巴河。',
    kRiverTitle: '巴河汇入渠江',
    kRiverBody: '巴中在四川东北。巴河向南流，汇入渠江。广安讲渠江干流，南充讲嘉陵江，遂宁讲涪江，泸州讲沱江。巴中补巴河，不选达州重复渠江。不拿光雾山，不是山城毁城秀。',
    kRiverTags: ['巴河', '巴中'],
    kClimateBody: '巴中在盆地东北，亚热带湿润气候。本课用水岸套件。不拿光雾山，不是山城毁城秀。',
    kPlaceTitle: '支流和干流要分开',
    kPlaceBody: '儿童说法：渠江的课在广安。巴河是汇入渠江之前的支流，课在巴中。不是山城毁城秀。',
    kPlaceTags: ['巴河', '渠江'],
    kKitTitle: '江南水岸套件',
    kKitBody: '盆地河谷用水岸剪影。不拿光雾山，不是山城毁城秀。',
    shortWrong: ['渝', '贵', '云'],
    provinceExplain: '四川简称「川」。',
    riverQ: '流过巴中、再汇入渠江的河是？',
    riverA: '巴河',
    riverWrong: ['渠江', '嘉陵江', '涪江'],
    regionWrong: ['西北', '华南', '华北'],
    climateWrong: ['温带大陆性', '热带雨林', '高原山地'],
    extraWrong: ['巴中', '绵阳', '重庆'],
  }),
  city({
    px: 'jinc',
    adcode: '620300',
    packId: 'jinchang',
    name: '金昌市',
    short: '甘',
    province: '甘肃省',
    capital: '兰州',
    region7: '西北',
    region4: '西北地区',
    locationDesc: '在河西走廊东段，金川河边。甘肃省的地级市，不是本省行政中心。',
    climate: '温带大陆性（干旱）',
    landform: ['绿洲', '戈壁'],
    rivers: ['金川河'],
    neighbors: ['武威'],
    functions: ['金川河教学点'],
    storyTitle: '金川河记忆',
    storyLogline: '戈壁的风把文庙前的路牌吹斜。你沿金川河把它们收回博物馆。',
    storyBeats: ['从金川河岸起步', '绿洲旧街收集市井记忆', '参观金昌文庙', '环绕革命烈士纪念碑致敬'],
    bgm: ['戈壁风', '绿洲'],
    pal: PAL.oasis,
    kit: 'oasis-flat',
    roads: ROAD.oasis,
    zoneNames: ['金川河岸', '绿洲旧街', '文庙与纪念', '当代楼宇'],
    zoneColors: ZO,
    briefing: [
      '我们在金昌，甘肃省的地级市，不是本省行政中心。兰州才是甘肃省行政中心。',
      '革命烈士纪念碑是纪念空间，不能归档进洞。请绕着它走完一圈。',
      '文庙只参观。金川河经过金昌，进入石羊河水系。武威认石羊河绿洲。不拿祁连山做山城秀。',
    ],
    waterName: '金川河岸',
    waterWhy: '河岸剪影。参观，认识金川河。',
    kRiverTitle: '金川河进入石羊河水系',
    kRiverBody: '金川河从祁连山北麓出来，经过金昌，进入石羊河水系。武威认石羊河绿洲，张掖认黑河，嘉峪关认讨赖河，酒泉把讨赖河和疏勒河放在一起。金昌只认金川河。不拿祁连山做山城秀。',
    kRiverTags: ['金川河', '金昌'],
    kClimateBody: '金昌干旱，是温带大陆性气候。城在绿洲上，本课用绿洲平顶。不拿祁连山做山城秀。',
    kPlaceTitle: '绿洲上的一条支流',
    kPlaceBody: '儿童说法：武威认石羊河。金昌认汇进这套水系的金川河。不拿祁连山。',
    kPlaceTags: ['金川河', '绿洲'],
    kKitTitle: '绿洲平顶套件',
    kKitBody: '河西绿洲用绿洲平顶。不拿祁连山做山城秀。',
    shortWrong: ['青', '陕', '宁'],
    provinceExplain: '甘肃简称「甘」。',
    riverQ: '流过金昌、进入石羊河水系的河是？',
    riverA: '金川河',
    riverWrong: ['石羊河', '黑河', '讨赖河'],
    regionWrong: ['华北', '西南', '华东'],
    climateWrong: ['亚热带季风', '热带雨林', '寒带冰原'],
    extraWrong: ['金昌', '酒泉', '西安'],
  }),
]

if (CITIES.length !== M3B12_NEW_LIVE.length) {
  console.error(`writer city count ${CITIES.length} ≠ M3B12_NEW_LIVE ${M3B12_NEW_LIVE.length}`)
  process.exit(1)
}

for (const spec of CITIES) {
  if (!M3B12_NEW_LIVE.includes(spec.city.packId)) {
    console.error(`writer pack ${spec.city.packId} not in M3B12_NEW_LIVE`)
    process.exit(1)
  }
  if (/张家界|大理市|黄山市|三沙|泰安|伊春|本溪/.test(spec.city.name)) {
    console.error(`writer refused celebrity queue-jump ${spec.city.name}`)
    process.exit(1)
  }
}

for (const spec of CITIES) {
  const dir = path.join(packsRoot, spec.city.packId)
  writeJson(path.join(dir, 'city.json'), spec.city)
  writeJson(path.join(dir, 'layout.json'), {
    mapSize: 240,
    roads: spec.roads,
    variants: spec.variants,
    kitId: spec.city.kitId,
    zones: zones(spec.zoneNames, spec.zoneColors),
    landmarks: spec.landmarks,
  })
  writeJson(path.join(dir, 'knowledge.json'), { cards: spec.knowledge })
  writeJson(path.join(dir, 'quiz.json'), { questions: spec.quiz })
  console.log('wrote', spec.city.packId)
}

const manifestPath = path.join(packsRoot, 'manifest.json')
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
manifest.version = 'm3b12-noncap11-per-province'
manifest.disclaimer = DISCLAIMER
manifest.liveCityPacks = [...M3A_LIVE_PACKS]
manifest.draftCityPacks = [...M3A_DRAFT_PACKS]

const byId = new Map(manifest.packs.map((p) => [p.id, p]))
function upsert(entry) {
  const prev = byId.get(entry.id)
  if (prev) Object.assign(prev, entry)
  else {
    manifest.packs.push(entry)
    byId.set(entry.id, entry)
  }
}

for (const spec of CITIES) {
  upsert({
    id: spec.city.packId,
    kind: 'city',
    adcode: spec.city.adcode,
    name: spec.city.name,
    fictional: false,
    mode: 'career',
    status: 'live',
    region7: spec.city.region7,
    kitId: spec.city.kitId,
  })
}

for (const id of M3A_LIVE_PACKS) {
  const p = byId.get(id)
  if (p) p.status = 'live'
}
for (const id of M3A_DRAFT_PACKS) {
  const p = byId.get(id)
  if (p) p.status = 'draft'
}

writeJson(manifestPath, manifest)
console.log('manifest updated', manifest.liveCityPacks.length, 'live,', manifest.draftCityPacks.length, 'draft')
console.log('M3b12: ≥11 non-capital prefecture_city per eligible province (Qinghai/Hainan/Xinjiang/Ningxia/Guizhou/Tibet/Jilin/Yunnan/Inner Mongolia/Fujian/Shaanxi/Hebei/Shanxi/Zhejiang/Jiangxi/Heilongjiang and <11 eligible exempt), not 293/333 complete')
