/**
 * Canonical administrative division table for M1.
 * Counts locked to PRD §3.1: 34 provincial + 333 prefecture-level
 * (293 cities + 30 autonomous prefectures + 7 prefectures + 3 leagues).
 * No lat/lon fields by design.
 */

/** @typedef {'municipality'|'province'|'autonomous_region'|'sar'|'prefecture_city'|'autonomous_prefecture'|'prefecture'|'league'|'municipality_city'|'province_directly'} UnitType */

/**
 * @typedef {object} DivRow
 * @property {string} adcode
 * @property {string} name
 * @property {string} shortName
 * @property {UnitType} unitType
 * @property {string} parentAdcode
 * @property {string} provinceName
 * @property {string} region7
 * @property {string} region4
 * @property {string} capital
 * @property {boolean} playable_3d
 * @property {string} contentTier
 * @property {string} packId
 * @property {string} status
 * @property {string} aliases
 */

/**
 * @param {Partial<DivRow> & Pick<DivRow,'adcode'|'name'|'unitType'>} p
 * @returns {DivRow}
 */
function r(p) {
  return {
    adcode: p.adcode,
    name: p.name,
    shortName: p.shortName ?? '',
    unitType: p.unitType,
    parentAdcode: p.parentAdcode ?? '',
    provinceName: p.provinceName ?? p.name,
    region7: p.region7 ?? '',
    region4: p.region4 ?? '',
    capital: p.capital ?? '',
    playable_3d: p.playable_3d ?? false,
    contentTier: p.contentTier ?? 'B',
    packId: p.packId ?? '',
    status: p.status ?? 'placeholder',
    aliases: p.aliases ?? '',
  }
}

/** @type {DivRow[]} */
export const PROVINCES = [
  r({ adcode: '110000', name: '北京市', shortName: '京', unitType: 'municipality', region7: '华北', region4: '北方地区', capital: '北京', contentTier: 'S', packId: 'beijing', status: 'live', aliases: '京,首都' }),
  r({ adcode: '120000', name: '天津市', shortName: '津', unitType: 'municipality', region7: '华北', region4: '北方地区', capital: '天津', contentTier: 'A', packId: 'tianjin', status: 'live', aliases: '津' }),
  r({ adcode: '130000', name: '河北省', shortName: '冀', unitType: 'province', region7: '华北', region4: '北方地区', capital: '石家庄', packId: 'shijiazhuang', status: 'live', aliases: '冀' }),
  r({ adcode: '140000', name: '山西省', shortName: '晋', unitType: 'province', region7: '华北', region4: '北方地区', capital: '太原', packId: 'taiyuan', status: 'live', aliases: '晋' }),
  r({ adcode: '150000', name: '内蒙古自治区', shortName: '内蒙古', unitType: 'autonomous_region', region7: '华北', region4: '北方地区', capital: '呼和浩特', packId: 'hohhot', status: 'live', aliases: '内蒙古,内蒙' }),
  r({ adcode: '210000', name: '辽宁省', shortName: '辽', unitType: 'province', region7: '东北', region4: '北方地区', capital: '沈阳', packId: 'shenyang', status: 'live', aliases: '辽' }),
  r({ adcode: '220000', name: '吉林省', shortName: '吉', unitType: 'province', region7: '东北', region4: '北方地区', capital: '长春', packId: 'changchun', status: 'live', aliases: '吉' }),
  r({ adcode: '230000', name: '黑龙江省', shortName: '黑', unitType: 'province', region7: '东北', region4: '北方地区', capital: '哈尔滨', contentTier: 'A', packId: 'harbin', status: 'live', aliases: '黑' }),
  r({ adcode: '310000', name: '上海市', shortName: '沪', unitType: 'municipality', region7: '华东', region4: '南方地区', capital: '上海', contentTier: 'S', packId: 'shanghai', status: 'live', aliases: '沪,申' }),
  r({ adcode: '320000', name: '江苏省', shortName: '苏', unitType: 'province', region7: '华东', region4: '南方地区', capital: '南京', packId: 'nanjing', status: 'live', aliases: '苏' }),
  r({ adcode: '330000', name: '浙江省', shortName: '浙', unitType: 'province', region7: '华东', region4: '南方地区', capital: '杭州', packId: 'hangzhou', status: 'live', aliases: '浙' }),
  r({ adcode: '340000', name: '安徽省', shortName: '皖', unitType: 'province', region7: '华东', region4: '南方地区', capital: '合肥', packId: 'hefei', status: 'live', aliases: '皖' }),
  r({ adcode: '350000', name: '福建省', shortName: '闽', unitType: 'province', region7: '华东', region4: '南方地区', capital: '福州', packId: 'fuzhou', status: 'live', aliases: '闽' }),
  r({ adcode: '360000', name: '江西省', shortName: '赣', unitType: 'province', region7: '华东', region4: '南方地区', capital: '南昌', packId: 'nanchang', status: 'live', aliases: '赣' }),
  r({ adcode: '370000', name: '山东省', shortName: '鲁', unitType: 'province', region7: '华东', region4: '北方地区', capital: '济南', packId: 'jinan', status: 'live', aliases: '鲁' }),
  r({ adcode: '410000', name: '河南省', shortName: '豫', unitType: 'province', region7: '华中', region4: '北方地区', capital: '郑州', packId: 'zhengzhou', status: 'live', aliases: '豫' }),
  r({ adcode: '420000', name: '湖北省', shortName: '鄂', unitType: 'province', region7: '华中', region4: '南方地区', capital: '武汉', contentTier: 'A', packId: 'wuhan', status: 'live', aliases: '鄂' }),
  r({ adcode: '430000', name: '湖南省', shortName: '湘', unitType: 'province', region7: '华中', region4: '南方地区', capital: '长沙', packId: 'changsha', status: 'live', aliases: '湘' }),
  r({ adcode: '440000', name: '广东省', shortName: '粤', unitType: 'province', region7: '华南', region4: '南方地区', capital: '广州', contentTier: 'S', packId: 'guangzhou', status: 'live', aliases: '粤' }),
  r({ adcode: '450000', name: '广西壮族自治区', shortName: '桂', unitType: 'autonomous_region', region7: '华南', region4: '南方地区', capital: '南宁', packId: 'nanning', status: 'live', aliases: '桂,广西' }),
  r({ adcode: '460000', name: '海南省', shortName: '琼', unitType: 'province', region7: '华南', region4: '南方地区', capital: '海口', packId: 'haikou', status: 'live', aliases: '琼' }),
  r({ adcode: '500000', name: '重庆市', shortName: '渝', unitType: 'municipality', region7: '西南', region4: '南方地区', capital: '重庆', contentTier: 'S', packId: 'chongqing', status: 'live', aliases: '渝' }),
  r({ adcode: '510000', name: '四川省', shortName: '川', unitType: 'province', region7: '西南', region4: '南方地区', capital: '成都', contentTier: 'S', packId: 'chengdu', status: 'live', aliases: '川,蜀' }),
  r({ adcode: '520000', name: '贵州省', shortName: '贵', unitType: 'province', region7: '西南', region4: '南方地区', capital: '贵阳', packId: 'guiyang', status: 'live', aliases: '贵,黔' }),
  r({ adcode: '530000', name: '云南省', shortName: '云', unitType: 'province', region7: '西南', region4: '南方地区', capital: '昆明', packId: 'kunming', status: 'live', aliases: '云,滇' }),
  r({ adcode: '540000', name: '西藏自治区', shortName: '藏', unitType: 'autonomous_region', region7: '西南', region4: '青藏地区', capital: '拉萨', packId: 'lhasa', status: 'live', aliases: '藏,西藏' }),
  r({ adcode: '610000', name: '陕西省', shortName: '陕', unitType: 'province', region7: '西北', region4: '北方地区', capital: '西安', contentTier: 'S', packId: 'xian', status: 'live', aliases: '陕,秦' }),
  r({ adcode: '620000', name: '甘肃省', shortName: '甘', unitType: 'province', region7: '西北', region4: '西北地区', capital: '兰州', packId: 'lanzhou', status: 'live', aliases: '甘,陇' }),
  r({ adcode: '630000', name: '青海省', shortName: '青', unitType: 'province', region7: '西北', region4: '青藏地区', capital: '西宁', packId: 'xining', status: 'live', aliases: '青' }),
  r({ adcode: '640000', name: '宁夏回族自治区', shortName: '宁', unitType: 'autonomous_region', region7: '西北', region4: '西北地区', capital: '银川', packId: 'yinchuan', status: 'live', aliases: '宁,宁夏' }),
  r({ adcode: '650000', name: '新疆维吾尔自治区', shortName: '新', unitType: 'autonomous_region', region7: '西北', region4: '西北地区', capital: '乌鲁木齐', packId: 'urumqi', status: 'live', aliases: '新,新疆' }),
  r({ adcode: '710000', name: '台湾省', shortName: '台', unitType: 'province', region7: '华东', region4: '南方地区', capital: '台北', contentTier: 'D', packId: 'taipei', status: 'live', aliases: '台,台湾' }),
  r({ adcode: '810000', name: '香港特别行政区', shortName: '港', unitType: 'sar', region7: '华南', region4: '南方地区', capital: '香港', contentTier: 'S', packId: 'hongkong', status: 'live', aliases: '港,香港' }),
  r({ adcode: '820000', name: '澳门特别行政区', shortName: '澳', unitType: 'sar', region7: '华南', region4: '南方地区', capital: '澳门', contentTier: 'A', packId: 'macau', status: 'live', aliases: '澳,澳门' }),
]

const P = Object.fromEntries(PROVINCES.map((x) => [x.adcode, x]))

/**
 * @param {string} parentAdcode
 * @param {UnitType} unitType
 * @param {string} adcode
 * @param {string} name
 * @param {string} [contentTier]
 */
function child(parentAdcode, unitType, adcode, name, contentTier) {
  const p = P[parentAdcode]
  if (!p) throw new Error(`unknown parent ${parentAdcode} for ${name}`)
  return r({
    adcode,
    name,
    unitType,
    parentAdcode,
    provinceName: p.name,
    region7: p.region7,
    region4: p.region4,
    capital: name.replace(/(市|地区|盟)$/, '').replace(/族自治州$/, '').replace(/自治州$/, ''),
    contentTier: contentTier ?? (unitType === 'prefecture_city' ? 'B' : 'C'),
  })
}

/** @type {DivRow[]} */
export const PREFECTURES = [
  // 河北 11
  child('130000', 'prefecture_city', '130100', '石家庄市', 'A'),
  child('130000', 'prefecture_city', '130200', '唐山市'),
  child('130000', 'prefecture_city', '130300', '秦皇岛市'),
  child('130000', 'prefecture_city', '130400', '邯郸市'),
  child('130000', 'prefecture_city', '130500', '邢台市'),
  child('130000', 'prefecture_city', '130600', '保定市'),
  child('130000', 'prefecture_city', '130700', '张家口市'),
  child('130000', 'prefecture_city', '130800', '承德市'),
  child('130000', 'prefecture_city', '130900', '沧州市'),
  child('130000', 'prefecture_city', '131000', '廊坊市'),
  child('130000', 'prefecture_city', '131100', '衡水市'),
  // 山西 11
  child('140000', 'prefecture_city', '140100', '太原市', 'A'),
  child('140000', 'prefecture_city', '140200', '大同市'),
  child('140000', 'prefecture_city', '140300', '阳泉市'),
  child('140000', 'prefecture_city', '140400', '长治市'),
  child('140000', 'prefecture_city', '140500', '晋城市'),
  child('140000', 'prefecture_city', '140600', '朔州市'),
  child('140000', 'prefecture_city', '140700', '晋中市'),
  child('140000', 'prefecture_city', '140800', '运城市'),
  child('140000', 'prefecture_city', '140900', '忻州市'),
  child('140000', 'prefecture_city', '141000', '临汾市'),
  child('140000', 'prefecture_city', '141100', '吕梁市'),
  // 内蒙古 9 市 + 3 盟
  child('150000', 'prefecture_city', '150100', '呼和浩特市', 'A'),
  child('150000', 'prefecture_city', '150200', '包头市'),
  child('150000', 'prefecture_city', '150300', '乌海市'),
  child('150000', 'prefecture_city', '150400', '赤峰市'),
  child('150000', 'prefecture_city', '150500', '通辽市'),
  child('150000', 'prefecture_city', '150600', '鄂尔多斯市'),
  child('150000', 'prefecture_city', '150700', '呼伦贝尔市'),
  child('150000', 'prefecture_city', '150800', '巴彦淖尔市'),
  child('150000', 'prefecture_city', '150900', '乌兰察布市'),
  child('150000', 'league', '152200', '兴安盟'),
  child('150000', 'league', '152500', '锡林郭勒盟'),
  child('150000', 'league', '152900', '阿拉善盟'),
  // 辽宁 14
  child('210000', 'prefecture_city', '210100', '沈阳市', 'A'),
  child('210000', 'prefecture_city', '210200', '大连市', 'A'),
  child('210000', 'prefecture_city', '210300', '鞍山市'),
  child('210000', 'prefecture_city', '210400', '抚顺市'),
  child('210000', 'prefecture_city', '210500', '本溪市'),
  child('210000', 'prefecture_city', '210600', '丹东市'),
  child('210000', 'prefecture_city', '210700', '锦州市'),
  child('210000', 'prefecture_city', '210800', '营口市'),
  child('210000', 'prefecture_city', '210900', '阜新市'),
  child('210000', 'prefecture_city', '211000', '辽阳市'),
  child('210000', 'prefecture_city', '211100', '盘锦市'),
  child('210000', 'prefecture_city', '211200', '铁岭市'),
  child('210000', 'prefecture_city', '211300', '朝阳市'),
  child('210000', 'prefecture_city', '211400', '葫芦岛市'),
  // 吉林 8 市 + 1 州
  child('220000', 'prefecture_city', '220100', '长春市', 'A'),
  child('220000', 'prefecture_city', '220200', '吉林市'),
  child('220000', 'prefecture_city', '220300', '四平市'),
  child('220000', 'prefecture_city', '220400', '辽源市'),
  child('220000', 'prefecture_city', '220500', '通化市'),
  child('220000', 'prefecture_city', '220600', '白山市'),
  child('220000', 'prefecture_city', '220700', '松原市'),
  child('220000', 'prefecture_city', '220800', '白城市'),
  child('220000', 'autonomous_prefecture', '222400', '延边朝鲜族自治州'),
  // 黑龙江 12 市 + 1 地区
  child('230000', 'prefecture_city', '230100', '哈尔滨市', 'A'),
  child('230000', 'prefecture_city', '230200', '齐齐哈尔市'),
  child('230000', 'prefecture_city', '230300', '鸡西市'),
  child('230000', 'prefecture_city', '230400', '鹤岗市'),
  child('230000', 'prefecture_city', '230500', '双鸭山市'),
  child('230000', 'prefecture_city', '230600', '大庆市'),
  child('230000', 'prefecture_city', '230700', '伊春市'),
  child('230000', 'prefecture_city', '230800', '佳木斯市'),
  child('230000', 'prefecture_city', '230900', '七台河市'),
  child('230000', 'prefecture_city', '231000', '牡丹江市'),
  child('230000', 'prefecture_city', '231100', '黑河市'),
  child('230000', 'prefecture_city', '231200', '绥化市'),
  child('230000', 'prefecture', '232700', '大兴安岭地区'),
  // 江苏 13
  child('320000', 'prefecture_city', '320100', '南京市', 'S'),
  child('320000', 'prefecture_city', '320200', '无锡市'),
  child('320000', 'prefecture_city', '320300', '徐州市'),
  child('320000', 'prefecture_city', '320400', '常州市'),
  child('320000', 'prefecture_city', '320500', '苏州市', 'A'),
  child('320000', 'prefecture_city', '320600', '南通市'),
  child('320000', 'prefecture_city', '320700', '连云港市'),
  child('320000', 'prefecture_city', '320800', '淮安市'),
  child('320000', 'prefecture_city', '320900', '盐城市'),
  child('320000', 'prefecture_city', '321000', '扬州市'),
  child('320000', 'prefecture_city', '321100', '镇江市'),
  child('320000', 'prefecture_city', '321200', '泰州市'),
  child('320000', 'prefecture_city', '321300', '宿迁市'),
  // 浙江 11
  child('330000', 'prefecture_city', '330100', '杭州市', 'S'),
  child('330000', 'prefecture_city', '330200', '宁波市', 'A'),
  child('330000', 'prefecture_city', '330300', '温州市'),
  child('330000', 'prefecture_city', '330400', '嘉兴市'),
  child('330000', 'prefecture_city', '330500', '湖州市'),
  child('330000', 'prefecture_city', '330600', '绍兴市'),
  child('330000', 'prefecture_city', '330700', '金华市'),
  child('330000', 'prefecture_city', '330800', '衢州市'),
  child('330000', 'prefecture_city', '330900', '舟山市'),
  child('330000', 'prefecture_city', '331000', '台州市'),
  child('330000', 'prefecture_city', '331100', '丽水市'),
  // 安徽 16
  child('340000', 'prefecture_city', '340100', '合肥市', 'A'),
  child('340000', 'prefecture_city', '340200', '芜湖市'),
  child('340000', 'prefecture_city', '340300', '蚌埠市'),
  child('340000', 'prefecture_city', '340400', '淮南市'),
  child('340000', 'prefecture_city', '340500', '马鞍山市'),
  child('340000', 'prefecture_city', '340600', '淮北市'),
  child('340000', 'prefecture_city', '340700', '铜陵市'),
  child('340000', 'prefecture_city', '340800', '安庆市'),
  child('340000', 'prefecture_city', '341000', '黄山市'),
  child('340000', 'prefecture_city', '341100', '滁州市'),
  child('340000', 'prefecture_city', '341200', '阜阳市'),
  child('340000', 'prefecture_city', '341300', '宿州市'),
  child('340000', 'prefecture_city', '341500', '六安市'),
  child('340000', 'prefecture_city', '341600', '亳州市'),
  child('340000', 'prefecture_city', '341700', '池州市'),
  child('340000', 'prefecture_city', '341800', '宣城市'),
  // 福建 9
  child('350000', 'prefecture_city', '350100', '福州市', 'A'),
  child('350000', 'prefecture_city', '350200', '厦门市', 'A'),
  child('350000', 'prefecture_city', '350300', '莆田市'),
  child('350000', 'prefecture_city', '350400', '三明市'),
  child('350000', 'prefecture_city', '350500', '泉州市'),
  child('350000', 'prefecture_city', '350600', '漳州市'),
  child('350000', 'prefecture_city', '350700', '南平市'),
  child('350000', 'prefecture_city', '350800', '龙岩市'),
  child('350000', 'prefecture_city', '350900', '宁德市'),
  // 江西 11
  child('360000', 'prefecture_city', '360100', '南昌市', 'A'),
  child('360000', 'prefecture_city', '360200', '景德镇市'),
  child('360000', 'prefecture_city', '360300', '萍乡市'),
  child('360000', 'prefecture_city', '360400', '九江市'),
  child('360000', 'prefecture_city', '360500', '新余市'),
  child('360000', 'prefecture_city', '360600', '鹰潭市'),
  child('360000', 'prefecture_city', '360700', '赣州市'),
  child('360000', 'prefecture_city', '360800', '吉安市'),
  child('360000', 'prefecture_city', '360900', '宜春市'),
  child('360000', 'prefecture_city', '361000', '抚州市'),
  child('360000', 'prefecture_city', '361100', '上饶市'),
  // 山东 16
  child('370000', 'prefecture_city', '370100', '济南市', 'A'),
  child('370000', 'prefecture_city', '370200', '青岛市', 'A'),
  child('370000', 'prefecture_city', '370300', '淄博市'),
  child('370000', 'prefecture_city', '370400', '枣庄市'),
  child('370000', 'prefecture_city', '370500', '东营市'),
  child('370000', 'prefecture_city', '370600', '烟台市'),
  child('370000', 'prefecture_city', '370700', '潍坊市'),
  child('370000', 'prefecture_city', '370800', '济宁市'),
  child('370000', 'prefecture_city', '370900', '泰安市'),
  child('370000', 'prefecture_city', '371000', '威海市'),
  child('370000', 'prefecture_city', '371100', '日照市'),
  child('370000', 'prefecture_city', '371300', '临沂市'),
  child('370000', 'prefecture_city', '371400', '德州市'),
  child('370000', 'prefecture_city', '371500', '聊城市'),
  child('370000', 'prefecture_city', '371600', '滨州市'),
  child('370000', 'prefecture_city', '371700', '菏泽市'),
  // 河南 17
  child('410000', 'prefecture_city', '410100', '郑州市', 'A'),
  child('410000', 'prefecture_city', '410200', '开封市'),
  child('410000', 'prefecture_city', '410300', '洛阳市'),
  child('410000', 'prefecture_city', '410400', '平顶山市'),
  child('410000', 'prefecture_city', '410500', '安阳市'),
  child('410000', 'prefecture_city', '410600', '鹤壁市'),
  child('410000', 'prefecture_city', '410700', '新乡市'),
  child('410000', 'prefecture_city', '410800', '焦作市'),
  child('410000', 'prefecture_city', '410900', '濮阳市'),
  child('410000', 'prefecture_city', '411000', '许昌市'),
  child('410000', 'prefecture_city', '411100', '漯河市'),
  child('410000', 'prefecture_city', '411200', '三门峡市'),
  child('410000', 'prefecture_city', '411300', '南阳市'),
  child('410000', 'prefecture_city', '411400', '商丘市'),
  child('410000', 'prefecture_city', '411500', '信阳市'),
  child('410000', 'prefecture_city', '411600', '周口市'),
  child('410000', 'prefecture_city', '411700', '驻马店市'),
  // 湖北 12 市 + 1 州
  child('420000', 'prefecture_city', '420100', '武汉市', 'S'),
  child('420000', 'prefecture_city', '420200', '黄石市'),
  child('420000', 'prefecture_city', '420300', '十堰市'),
  child('420000', 'prefecture_city', '420500', '宜昌市'),
  child('420000', 'prefecture_city', '420600', '襄阳市'),
  child('420000', 'prefecture_city', '420700', '鄂州市'),
  child('420000', 'prefecture_city', '420800', '荆门市'),
  child('420000', 'prefecture_city', '420900', '孝感市'),
  child('420000', 'prefecture_city', '421000', '荆州市'),
  child('420000', 'prefecture_city', '421100', '黄冈市'),
  child('420000', 'prefecture_city', '421200', '咸宁市'),
  child('420000', 'prefecture_city', '421300', '随州市'),
  child('420000', 'autonomous_prefecture', '422800', '恩施土家族苗族自治州'),
  // 湖南 13 市 + 1 州
  child('430000', 'prefecture_city', '430100', '长沙市', 'A'),
  child('430000', 'prefecture_city', '430200', '株洲市'),
  child('430000', 'prefecture_city', '430300', '湘潭市'),
  child('430000', 'prefecture_city', '430400', '衡阳市'),
  child('430000', 'prefecture_city', '430500', '邵阳市'),
  child('430000', 'prefecture_city', '430600', '岳阳市'),
  child('430000', 'prefecture_city', '430700', '常德市'),
  child('430000', 'prefecture_city', '430800', '张家界市'),
  child('430000', 'prefecture_city', '430900', '益阳市'),
  child('430000', 'prefecture_city', '431000', '郴州市'),
  child('430000', 'prefecture_city', '431100', '永州市'),
  child('430000', 'prefecture_city', '431200', '怀化市'),
  child('430000', 'prefecture_city', '431300', '娄底市'),
  child('430000', 'autonomous_prefecture', '433100', '湘西土家族苗族自治州'),
  // 广东 21
  child('440000', 'prefecture_city', '440100', '广州市', 'S'),
  child('440000', 'prefecture_city', '440200', '韶关市'),
  child('440000', 'prefecture_city', '440300', '深圳市', 'S'),
  child('440000', 'prefecture_city', '440400', '珠海市'),
  child('440000', 'prefecture_city', '440500', '汕头市'),
  child('440000', 'prefecture_city', '440600', '佛山市'),
  child('440000', 'prefecture_city', '440700', '江门市'),
  child('440000', 'prefecture_city', '440800', '湛江市'),
  child('440000', 'prefecture_city', '440900', '茂名市'),
  child('440000', 'prefecture_city', '441200', '肇庆市'),
  child('440000', 'prefecture_city', '441300', '惠州市'),
  child('440000', 'prefecture_city', '441400', '梅州市'),
  child('440000', 'prefecture_city', '441500', '汕尾市'),
  child('440000', 'prefecture_city', '441600', '河源市'),
  child('440000', 'prefecture_city', '441700', '阳江市'),
  child('440000', 'prefecture_city', '441800', '清远市'),
  child('440000', 'prefecture_city', '441900', '东莞市'),
  child('440000', 'prefecture_city', '442000', '中山市'),
  child('440000', 'prefecture_city', '445100', '潮州市'),
  child('440000', 'prefecture_city', '445200', '揭阳市'),
  child('440000', 'prefecture_city', '445300', '云浮市'),
  // 广西 14
  child('450000', 'prefecture_city', '450100', '南宁市', 'A'),
  child('450000', 'prefecture_city', '450200', '柳州市'),
  child('450000', 'prefecture_city', '450300', '桂林市'),
  child('450000', 'prefecture_city', '450400', '梧州市'),
  child('450000', 'prefecture_city', '450500', '北海市'),
  child('450000', 'prefecture_city', '450600', '防城港市'),
  child('450000', 'prefecture_city', '450700', '钦州市'),
  child('450000', 'prefecture_city', '450800', '贵港市'),
  child('450000', 'prefecture_city', '450900', '玉林市'),
  child('450000', 'prefecture_city', '451000', '百色市'),
  child('450000', 'prefecture_city', '451100', '贺州市'),
  child('450000', 'prefecture_city', '451200', '河池市'),
  child('450000', 'prefecture_city', '451300', '来宾市'),
  child('450000', 'prefecture_city', '451400', '崇左市'),
  // 海南 4
  child('460000', 'prefecture_city', '460100', '海口市', 'A'),
  child('460000', 'prefecture_city', '460200', '三亚市'),
  child('460000', 'prefecture_city', '460300', '三沙市', 'N'),
  child('460000', 'prefecture_city', '460400', '儋州市'),
  // 四川 18 市 + 3 州
  child('510000', 'prefecture_city', '510100', '成都市', 'S'),
  child('510000', 'prefecture_city', '510300', '自贡市'),
  child('510000', 'prefecture_city', '510400', '攀枝花市'),
  child('510000', 'prefecture_city', '510500', '泸州市'),
  child('510000', 'prefecture_city', '510600', '德阳市'),
  child('510000', 'prefecture_city', '510700', '绵阳市'),
  child('510000', 'prefecture_city', '510800', '广元市'),
  child('510000', 'prefecture_city', '510900', '遂宁市'),
  child('510000', 'prefecture_city', '511000', '内江市'),
  child('510000', 'prefecture_city', '511100', '乐山市'),
  child('510000', 'prefecture_city', '511300', '南充市'),
  child('510000', 'prefecture_city', '511400', '眉山市'),
  child('510000', 'prefecture_city', '511500', '宜宾市'),
  child('510000', 'prefecture_city', '511600', '广安市'),
  child('510000', 'prefecture_city', '511700', '达州市'),
  child('510000', 'prefecture_city', '511800', '雅安市'),
  child('510000', 'prefecture_city', '511900', '巴中市'),
  child('510000', 'prefecture_city', '512000', '资阳市'),
  child('510000', 'autonomous_prefecture', '513200', '阿坝藏族羌族自治州'),
  child('510000', 'autonomous_prefecture', '513300', '甘孜藏族自治州'),
  child('510000', 'autonomous_prefecture', '513400', '凉山彝族自治州'),
  // 贵州 6 市 + 3 州
  child('520000', 'prefecture_city', '520100', '贵阳市', 'A'),
  child('520000', 'prefecture_city', '520200', '六盘水市'),
  child('520000', 'prefecture_city', '520300', '遵义市'),
  child('520000', 'prefecture_city', '520400', '安顺市'),
  child('520000', 'prefecture_city', '520500', '毕节市'),
  child('520000', 'prefecture_city', '520600', '铜仁市'),
  child('520000', 'autonomous_prefecture', '522300', '黔西南布依族苗族自治州'),
  child('520000', 'autonomous_prefecture', '522600', '黔东南苗族侗族自治州'),
  child('520000', 'autonomous_prefecture', '522700', '黔南布依族苗族自治州'),
  // 云南 8 市 + 8 州
  child('530000', 'prefecture_city', '530100', '昆明市', 'A'),
  child('530000', 'prefecture_city', '530300', '曲靖市'),
  child('530000', 'prefecture_city', '530400', '玉溪市'),
  child('530000', 'prefecture_city', '530500', '保山市'),
  child('530000', 'prefecture_city', '530600', '昭通市'),
  child('530000', 'prefecture_city', '530700', '丽江市'),
  child('530000', 'prefecture_city', '530800', '普洱市'),
  child('530000', 'prefecture_city', '530900', '临沧市'),
  child('530000', 'autonomous_prefecture', '532300', '楚雄彝族自治州'),
  child('530000', 'autonomous_prefecture', '532500', '红河哈尼族彝族自治州'),
  child('530000', 'autonomous_prefecture', '532600', '文山壮族苗族自治州'),
  child('530000', 'autonomous_prefecture', '532800', '西双版纳傣族自治州'),
  child('530000', 'autonomous_prefecture', '532900', '大理白族自治州'),
  child('530000', 'autonomous_prefecture', '533100', '德宏傣族景颇族自治州'),
  child('530000', 'autonomous_prefecture', '533300', '怒江傈僳族自治州'),
  child('530000', 'autonomous_prefecture', '533400', '迪庆藏族自治州'),
  // 西藏 6 市 + 1 地区
  child('540000', 'prefecture_city', '540100', '拉萨市', 'A'),
  child('540000', 'prefecture_city', '540200', '日喀则市'),
  child('540000', 'prefecture_city', '540300', '昌都市'),
  child('540000', 'prefecture_city', '540400', '林芝市'),
  child('540000', 'prefecture_city', '540500', '山南市'),
  child('540000', 'prefecture_city', '540600', '那曲市'),
  child('540000', 'prefecture', '542500', '阿里地区'),
  // 陕西 10
  child('610000', 'prefecture_city', '610100', '西安市', 'S'),
  child('610000', 'prefecture_city', '610200', '铜川市'),
  child('610000', 'prefecture_city', '610300', '宝鸡市'),
  child('610000', 'prefecture_city', '610400', '咸阳市'),
  child('610000', 'prefecture_city', '610500', '渭南市'),
  child('610000', 'prefecture_city', '610600', '延安市'),
  child('610000', 'prefecture_city', '610700', '汉中市'),
  child('610000', 'prefecture_city', '610800', '榆林市'),
  child('610000', 'prefecture_city', '610900', '安康市'),
  child('610000', 'prefecture_city', '611000', '商洛市'),
  // 甘肃 12 市 + 2 州
  child('620000', 'prefecture_city', '620100', '兰州市', 'A'),
  child('620000', 'prefecture_city', '620200', '嘉峪关市'),
  child('620000', 'prefecture_city', '620300', '金昌市'),
  child('620000', 'prefecture_city', '620400', '白银市'),
  child('620000', 'prefecture_city', '620500', '天水市'),
  child('620000', 'prefecture_city', '620600', '武威市'),
  child('620000', 'prefecture_city', '620700', '张掖市'),
  child('620000', 'prefecture_city', '620800', '平凉市'),
  child('620000', 'prefecture_city', '620900', '酒泉市'),
  child('620000', 'prefecture_city', '621000', '庆阳市'),
  child('620000', 'prefecture_city', '621100', '定西市'),
  child('620000', 'prefecture_city', '621200', '陇南市'),
  child('620000', 'autonomous_prefecture', '622900', '临夏回族自治州'),
  child('620000', 'autonomous_prefecture', '623000', '甘南藏族自治州'),
  // 青海 2 市 + 6 州
  child('630000', 'prefecture_city', '630100', '西宁市', 'A'),
  child('630000', 'prefecture_city', '630200', '海东市'),
  child('630000', 'autonomous_prefecture', '632200', '海北藏族自治州'),
  child('630000', 'autonomous_prefecture', '632300', '黄南藏族自治州'),
  child('630000', 'autonomous_prefecture', '632500', '海南藏族自治州'),
  child('630000', 'autonomous_prefecture', '632600', '果洛藏族自治州'),
  child('630000', 'autonomous_prefecture', '632700', '玉树藏族自治州'),
  child('630000', 'autonomous_prefecture', '632800', '海西蒙古族藏族自治州'),
  // 宁夏 5
  child('640000', 'prefecture_city', '640100', '银川市', 'A'),
  child('640000', 'prefecture_city', '640200', '石嘴山市'),
  child('640000', 'prefecture_city', '640300', '吴忠市'),
  child('640000', 'prefecture_city', '640400', '固原市'),
  child('640000', 'prefecture_city', '640500', '中卫市'),
  // 新疆 4 市 + 5 州 + 5 地区
  child('650000', 'prefecture_city', '650100', '乌鲁木齐市', 'S'),
  child('650000', 'prefecture_city', '650200', '克拉玛依市'),
  child('650000', 'prefecture_city', '650400', '吐鲁番市'),
  child('650000', 'prefecture_city', '650500', '哈密市'),
  child('650000', 'autonomous_prefecture', '652300', '昌吉回族自治州'),
  child('650000', 'autonomous_prefecture', '652700', '博尔塔拉蒙古自治州'),
  child('650000', 'autonomous_prefecture', '652800', '巴音郭楞蒙古自治州'),
  child('650000', 'prefecture', '652900', '阿克苏地区'),
  child('650000', 'autonomous_prefecture', '653000', '克孜勒苏柯尔克孜自治州'),
  child('650000', 'prefecture', '653100', '喀什地区'),
  child('650000', 'prefecture', '653200', '和田地区'),
  child('650000', 'autonomous_prefecture', '654000', '伊犁哈萨克自治州'),
  child('650000', 'prefecture', '654200', '塔城地区'),
  child('650000', 'prefecture', '654300', '阿勒泰地区'),
]

function markLiveCity(adcode, packId, tier = 'A') {
  const row = PREFECTURES.find((x) => x.adcode === adcode)
  if (!row) throw new Error(`missing prefecture ${adcode}`)
  row.playable_3d = true
  row.packId = packId
  row.status = 'live'
  row.contentTier = tier
}

function markDraftCity(adcode, packId, tier = 'B') {
  const row = PREFECTURES.find((x) => x.adcode === adcode)
  if (!row) throw new Error(`missing prefecture ${adcode}`)
  row.playable_3d = false
  row.packId = packId
  row.status = 'draft'
  row.contentTier = tier
}

markLiveCity('230100', 'harbin', 'A')
markLiveCity('420100', 'wuhan', 'A')
markLiveCity('440100', 'guangzhou', 'A')
markLiveCity('510100', 'chengdu', 'A')
markLiveCity('610100', 'xian', 'A')
markLiveCity('130600', 'baoding', 'B')
markLiveCity('210100', 'shenyang', 'A')
markLiveCity('210200', 'dalian', 'B')
markLiveCity('320500', 'suzhou', 'A')
markLiveCity('410300', 'luoyang', 'B')
markLiveCity('440300', 'shenzhen', 'A')
markLiveCity('530100', 'kunming', 'A')
markLiveCity('520300', 'zunyi', 'B')
markLiveCity('620900', 'jiuquan', 'B')
markLiveCity('130200', 'tangshan', 'B')
markLiveCity('130400', 'handan', 'B')
markLiveCity('220200', 'jilin', 'B')
markLiveCity('230200', 'qiqihar', 'B')
markLiveCity('370200', 'qingdao', 'A')
markLiveCity('320200', 'wuxi', 'B')
markLiveCity('410200', 'kaifeng', 'B')
markLiveCity('420600', 'xiangyang', 'B')
markLiveCity('450300', 'guilin', 'B')
markLiveCity('440600', 'foshan', 'B')
markLiveCity('511100', 'leshan', 'B')
markLiveCity('510700', 'mianyang', 'B')
markLiveCity('610300', 'baoji', 'B')
markLiveCity('610400', 'xianyang', 'B')
markLiveCity('130100', 'shijiazhuang', 'A')
markLiveCity('140100', 'taiyuan', 'A')
markLiveCity('150100', 'hohhot', 'A')
markLiveCity('220100', 'changchun', 'A')
markLiveCity('320100', 'nanjing', 'S')
markLiveCity('330100', 'hangzhou', 'S')
markLiveCity('340100', 'hefei', 'A')
markLiveCity('350100', 'fuzhou', 'A')
markLiveCity('360100', 'nanchang', 'A')
markLiveCity('370100', 'jinan', 'A')
markLiveCity('410100', 'zhengzhou', 'A')
markLiveCity('430100', 'changsha', 'A')
markLiveCity('450100', 'nanning', 'A')
markLiveCity('460100', 'haikou', 'A')
markLiveCity('520100', 'guiyang', 'A')
markLiveCity('540100', 'lhasa', 'A')
markLiveCity('620100', 'lanzhou', 'A')
markLiveCity('630100', 'xining', 'A')
markLiveCity('640100', 'yinchuan', 'A')
markLiveCity('650100', 'urumqi', 'S')
markLiveCity('140200', 'datong', 'B')
markLiveCity('150200', 'baotou', 'B')
markLiveCity('330200', 'ningbo', 'A')
markLiveCity('340200', 'wuhu', 'B')
markLiveCity('350200', 'xiamen', 'A')
markLiveCity('360200', 'jingdezhen', 'B')
markLiveCity('430200', 'zhuzhou', 'B')
markLiveCity('460200', 'sanya', 'B')
markLiveCity('530300', 'qujing', 'B')
markLiveCity('540200', 'shigatse', 'B')
markLiveCity('630200', 'haidong', 'B')
markLiveCity('640200', 'shizuishan', 'B')
markLiveCity('650200', 'kelamayi', 'B')
markLiveCity('140800', 'yuncheng', 'B')
markLiveCity('150400', 'chifeng', 'B')
markLiveCity('210600', 'dandong', 'B')
markLiveCity('220700', 'songyuan', 'B')
markLiveCity('230600', 'daqing', 'B')
markLiveCity('330600', 'shaoxing', 'A')
markLiveCity('340300', 'bengbu', 'B')
markLiveCity('350500', 'quanzhou', 'A')
markLiveCity('360400', 'jiujiang', 'B')
markLiveCity('370500', 'dongying', 'B')
markLiveCity('421000', 'jingzhou', 'B')
markLiveCity('430600', 'yueyang', 'B')
markLiveCity('450500', 'beihai', 'B')
markLiveCity('460400', 'danzhou', 'B')
markLiveCity('520200', 'liupanshui', 'B')
markLiveCity('530400', 'yuxi', 'B')
markLiveCity('540500', 'shannan', 'B')
markLiveCity('620500', 'tianshui', 'B')
markLiveCity('640300', 'wuzhong', 'B')
markLiveCity('650400', 'tulufan', 'B')
markLiveCity('141000', 'linfen', 'B')
markLiveCity('150500', 'tongliao', 'B')
markLiveCity('211100', 'panjin', 'B')
markLiveCity('220300', 'siping', 'B')
markLiveCity('230800', 'jiamusi', 'B')
markLiveCity('321000', 'yangzhou', 'A')
markLiveCity('330400', 'jiaxing', 'B')
markLiveCity('340800', 'anqing', 'B')
markLiveCity('350600', 'zhangzhou', 'B')
markLiveCity('360700', 'ganzhou', 'B')
markLiveCity('370800', 'jining', 'B')
markLiveCity('410500', 'anyang', 'B')
markLiveCity('420500', 'yichang', 'B')
markLiveCity('430400', 'hengyang', 'B')
markLiveCity('440800', 'zhanjiang', 'B')
markLiveCity('450200', 'liuzhou', 'B')
markLiveCity('511500', 'yibin', 'B')
markLiveCity('520600', 'tongren', 'B')
markLiveCity('530600', 'zhaotong', 'B')
markLiveCity('540300', 'changdu', 'B')
markLiveCity('610700', 'hanzhong', 'B')
markLiveCity('620700', 'zhangye', 'B')
markLiveCity('640500', 'zhongwei', 'B')
markLiveCity('650500', 'hami', 'B')
markLiveCity('130300', 'qinhuangdao', 'B')
markLiveCity('140400', 'changzhi', 'B')
markLiveCity('150800', 'bayannur', 'B')
markLiveCity('210700', 'jinzhou', 'B')
markLiveCity('220800', 'baicheng', 'B')
markLiveCity('231100', 'heihe', 'B')
markLiveCity('320600', 'nantong', 'A')
markLiveCity('330300', 'wenzhou', 'B')
markLiveCity('341200', 'fuyang', 'B')
markLiveCity('350900', 'ningde', 'B')
markLiveCity('360800', 'jian', 'B')
markLiveCity('370600', 'yantai', 'A')
markLiveCity('411500', 'xinyang', 'B')
markLiveCity('421100', 'huanggang', 'B')
markLiveCity('430700', 'changde', 'B')
markLiveCity('440500', 'shantou', 'A')
markLiveCity('450400', 'wuzhou', 'B')
markLiveCity('511300', 'nanchong', 'B')
markLiveCity('520500', 'bijie', 'B')
markLiveCity('530800', 'puer', 'B')
markLiveCity('540600', 'naqu', 'B')
markLiveCity('610600', 'yanan', 'B')
markLiveCity('621200', 'longnan', 'B')
markLiveCity('640400', 'guyuan', 'B')

/** Extra rows (not in 333). Beijing city pack uses 110100. */
export const EXTRAS = [
  r({
    adcode: '110100',
    name: '北京主城',
    shortName: '京',
    unitType: 'municipality_city',
    parentAdcode: '110000',
    provinceName: '北京市',
    region7: '华北',
    region4: '北方地区',
    capital: '北京',
    playable_3d: true,
    contentTier: 'S',
    packId: 'beijing',
    status: 'live',
    aliases: '北京,首都,京',
  }),
  r({
    adcode: '310100',
    name: '上海主城',
    shortName: '沪',
    unitType: 'municipality_city',
    parentAdcode: '310000',
    provinceName: '上海市',
    region7: '华东',
    region4: '南方地区',
    capital: '上海',
    playable_3d: true,
    contentTier: 'A',
    packId: 'shanghai',
    status: 'live',
    aliases: '上海,沪,申',
  }),
  r({
    adcode: '120100',
    name: '天津主城',
    shortName: '津',
    unitType: 'municipality_city',
    parentAdcode: '120000',
    provinceName: '天津市',
    region7: '华北',
    region4: '北方地区',
    capital: '天津',
    playable_3d: true,
    contentTier: 'A',
    packId: 'tianjin',
    status: 'live',
    aliases: '天津,津',
  }),
  r({
    adcode: '500100',
    name: '重庆主城',
    shortName: '渝',
    unitType: 'municipality_city',
    parentAdcode: '500000',
    provinceName: '重庆市',
    region7: '西南',
    region4: '南方地区',
    capital: '重庆',
    playable_3d: true,
    contentTier: 'S',
    packId: 'chongqing',
    status: 'live',
    aliases: '重庆,渝',
  }),
  r({
    adcode: '710100',
    name: '台北教学包',
    shortName: '台',
    unitType: 'province_directly',
    parentAdcode: '710000',
    provinceName: '台湾省',
    region7: '华东',
    region4: '南方地区',
    capital: '台北',
    playable_3d: true,
    contentTier: 'D',
    packId: 'taipei',
    status: 'live',
    aliases: '台北,台',
  }),
  r({
    adcode: '810100',
    name: '香港主城',
    shortName: '港',
    unitType: 'municipality_city',
    parentAdcode: '810000',
    provinceName: '香港特别行政区',
    region7: '华南',
    region4: '南方地区',
    capital: '香港',
    playable_3d: true,
    contentTier: 'S',
    packId: 'hongkong',
    status: 'live',
    aliases: '香港,港',
  }),
  r({
    adcode: '820100',
    name: '澳门主城',
    shortName: '澳',
    unitType: 'municipality_city',
    parentAdcode: '820000',
    provinceName: '澳门特别行政区',
    region7: '华南',
    region4: '南方地区',
    capital: '澳门',
    playable_3d: true,
    contentTier: 'A',
    packId: 'macau',
    status: 'live',
    aliases: '澳门,澳',
  }),
  r({ adcode: '419001', name: '济源市', unitType: 'province_directly', parentAdcode: '410000', provinceName: '河南省', region7: '华中', region4: '北方地区', capital: '济源', contentTier: 'D' }),
  r({ adcode: '429004', name: '仙桃市', unitType: 'province_directly', parentAdcode: '420000', provinceName: '湖北省', region7: '华中', region4: '南方地区', capital: '仙桃', contentTier: 'D' }),
  r({ adcode: '429005', name: '潜江市', unitType: 'province_directly', parentAdcode: '420000', provinceName: '湖北省', region7: '华中', region4: '南方地区', capital: '潜江', contentTier: 'D' }),
  r({ adcode: '429006', name: '天门市', unitType: 'province_directly', parentAdcode: '420000', provinceName: '湖北省', region7: '华中', region4: '南方地区', capital: '天门', contentTier: 'D' }),
  r({ adcode: '429021', name: '神农架林区', unitType: 'province_directly', parentAdcode: '420000', provinceName: '湖北省', region7: '华中', region4: '南方地区', capital: '神农架', contentTier: 'D' }),
]

export const CSV_HEADER = [
  'adcode',
  'name',
  'shortName',
  'unitType',
  'parentAdcode',
  'provinceName',
  'region7',
  'region4',
  'capital',
  'playable_3d',
  'contentTier',
  'packId',
  'status',
  'aliases',
]

/** @returns {DivRow[]} */
export function allRows() {
  return [...PROVINCES, ...PREFECTURES, ...EXTRAS]
}

/** @param {DivRow} row */
export function toCsvLine(row) {
  const vals = CSV_HEADER.map((k) => {
    const v = row[/** @type {keyof DivRow} */ (k)]
    if (typeof v === 'boolean') return v ? 'true' : 'false'
    const s = String(v ?? '')
    return s.includes(',') || s.includes('"') ? `"${s.replaceAll('"', '""')}"` : s
  })
  return vals.join(',')
}
