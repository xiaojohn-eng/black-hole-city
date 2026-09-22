/**
 * M3a seven-region factory table + M3b1 provincial capitals.
 * Pipeline names are not a 333-complete or 293-complete claim.
 */

export const REGION7 = ['华北', '东北', '华东', '华中', '华南', '西南', '西北']

/** Directory ids. Keys are admin `name` as in CSV / extras. */
export const PACK_SLUGS = {
  北京市: 'beijing',
  北京主城: 'beijing',
  天津市: 'tianjin',
  天津主城: 'tianjin',
  上海市: 'shanghai',
  上海主城: 'shanghai',
  重庆市: 'chongqing',
  重庆主城: 'chongqing',
  哈尔滨市: 'harbin',
  石家庄市: 'shijiazhuang',
  保定市: 'baoding',
  太原市: 'taiyuan',
  呼和浩特市: 'hohhot',
  沈阳市: 'shenyang',
  长春市: 'changchun',
  南京市: 'nanjing',
  杭州市: 'hangzhou',
  合肥市: 'hefei',
  福州市: 'fuzhou',
  南昌市: 'nanchang',
  济南市: 'jinan',
  大连市: 'dalian',
  苏州市: 'suzhou',
  青岛市: 'qingdao',
  武汉市: 'wuhan',
  郑州市: 'zhengzhou',
  长沙市: 'changsha',
  洛阳市: 'luoyang',
  广州市: 'guangzhou',
  南宁市: 'nanning',
  海口市: 'haikou',
  深圳市: 'shenzhen',
  桂林市: 'guilin',
  成都市: 'chengdu',
  昆明市: 'kunming',
  贵阳市: 'guiyang',
  拉萨市: 'lhasa',
  遵义市: 'zunyi',
  西安市: 'xian',
  兰州市: 'lanzhou',
  西宁市: 'xining',
  银川市: 'yinchuan',
  乌鲁木齐市: 'urumqi',
  酒泉市: 'jiuquan',
  唐山市: 'tangshan',
  邯郸市: 'handan',
  吉林市: 'jilin',
  齐齐哈尔市: 'qiqihar',
  无锡市: 'wuxi',
  开封市: 'kaifeng',
  襄阳市: 'xiangyang',
  佛山市: 'foshan',
  乐山市: 'leshan',
  绵阳市: 'mianyang',
  宝鸡市: 'baoji',
  咸阳市: 'xianyang',
  台北教学包: 'taipei',
  台北市: 'taipei',
  香港主城: 'hongkong',
  香港特别行政区: 'hongkong',
  澳门主城: 'macau',
  澳门特别行政区: 'macau',
  大同市: 'datong',
  包头市: 'baotou',
  宁波市: 'ningbo',
  芜湖市: 'wuhu',
  厦门市: 'xiamen',
  景德镇市: 'jingdezhen',
  株洲市: 'zhuzhou',
  三亚市: 'sanya',
  曲靖市: 'qujing',
  日喀则市: 'shigatse',
  海东市: 'haidong',
  石嘴山市: 'shizuishan',
  克拉玛依市: 'kelamayi',
  运城市: 'yuncheng',
  赤峰市: 'chifeng',
  丹东市: 'dandong',
  松原市: 'songyuan',
  大庆市: 'daqing',
  绍兴市: 'shaoxing',
  蚌埠市: 'bengbu',
  泉州市: 'quanzhou',
  九江市: 'jiujiang',
  东营市: 'dongying',
  荆州市: 'jingzhou',
  岳阳市: 'yueyang',
  北海市: 'beihai',
  儋州市: 'danzhou',
  六盘水市: 'liupanshui',
  玉溪市: 'yuxi',
  山南市: 'shannan',
  天水市: 'tianshui',
  吴忠市: 'wuzhong',
  吐鲁番市: 'tulufan',
  临汾市: 'linfen',
  通辽市: 'tongliao',
  盘锦市: 'panjin',
  四平市: 'siping',
  佳木斯市: 'jiamusi',
  扬州市: 'yangzhou',
  嘉兴市: 'jiaxing',
  安庆市: 'anqing',
  漳州市: 'zhangzhou',
  赣州市: 'ganzhou',
  济宁市: 'jining',
  安阳市: 'anyang',
  宜昌市: 'yichang',
  衡阳市: 'hengyang',
  湛江市: 'zhanjiang',
  柳州市: 'liuzhou',
  宜宾市: 'yibin',
  铜仁市: 'tongren',
  昭通市: 'zhaotong',
  昌都市: 'changdu',
  汉中市: 'hanzhong',
  张掖市: 'zhangye',
  中卫市: 'zhongwei',
  哈密市: 'hami',
  秦皇岛市: 'qinhuangdao',
  长治市: 'changzhi',
  巴彦淖尔市: 'bayannur',
  锦州市: 'jinzhou',
  白城市: 'baicheng',
  黑河市: 'heihe',
  南通市: 'nantong',
  温州市: 'wenzhou',
  阜阳市: 'fuyang',
  宁德市: 'ningde',
  吉安市: 'jian',
  烟台市: 'yantai',
  信阳市: 'xinyang',
  黄冈市: 'huanggang',
  常德市: 'changde',
  汕头市: 'shantou',
  梧州市: 'wuzhou',
  南充市: 'nanchong',
  毕节市: 'bijie',
  普洱市: 'puer',
  那曲市: 'naqu',
  延安市: 'yanan',
  陇南市: 'longnan',
  固原市: 'guyuan',
  沧州市: 'cangzhou',
  晋中市: 'jinzhong',
  鄂尔多斯市: 'ordos',
  营口市: 'yingkou',
  通化市: 'tonghua',
  牡丹江市: 'mudanjiang',
  连云港市: 'lianyungang',
  台州市: 'taizhou',
  六安市: 'luan',
  南平市: 'nanping',
  上饶市: 'shangrao',
  临沂市: 'linyi',
  南阳市: 'nanyang',
  十堰市: 'shiyan',
  郴州市: 'chenzhou',
  肇庆市: 'zhaoqing',
  钦州市: 'qinzhou',
  泸州市: 'luzhou',
  安顺市: 'anshun',
  保山市: 'baoshan',
  林芝市: 'linzhi',
  榆林市: 'yulin',
  庆阳市: 'qingyang',
  衡水市: 'hengshui',
  朔州市: 'shuozhou',
  乌兰察布市: 'ulanqab',
  鞍山市: 'anshan',
  辽源市: 'liaoyuan',
  绥化市: 'suihua',
  徐州市: 'xuzhou',
  舟山市: 'zhoushan',
  滁州市: 'chuzhou',
  莆田市: 'putian',
  抚州市: 'fuzhoujx',
  潍坊市: 'weifang',
  商丘市: 'shangqiu',
  孝感市: 'xiaogan',
  益阳市: 'yiyang',
  珠海市: 'zhuhai',
  贵港市: 'guigang',
  德阳市: 'deyang',
  临沧市: 'lincang',
  渭南市: 'weinan',
  武威市: 'wuwei',
}

/**
 * M3a live representatives + M3a2/M3a3 promotions + M3b1 capitals.
 * 非省会 = 地级且不是本省行政中心（见 isProvincialCapital）。
 * 直辖市 / 自治区首府 / 本省行政中心都不算非省会。
 * M3a3：七大区各 ≥3 座真正非省会 live，全国 ≥21。不是 333 完成。
 * M3b1：34 省各 ≥1 座行政中心 live。不是 293 / 333 完成。
 * M3b2：凡有地级市的省各 ≥1 座非省会 prefecture_city live。
 * M3b3：非省会 prefecture_city ≥2 的省各 ≥2 座非省会 live（豁免青海）。
 * M3b4：非省会 prefecture_city ≥3 的省各 ≥3 座非省会 live（豁免青海与非省会总数 <3 的省；三沙不可玩故海南按可玩非省会=2 豁免）。
 * M3b5：非省会 prefecture_city ≥4 的省各 ≥4 座非省会 live（豁免青海、海南与非省会总数 <4 的省；新疆非省会仅 3 座故豁免到 ≥4）。
 * M3b6：非省会 prefecture_city ≥5 的省各 ≥5 座非省会 live（豁免青海、海南、新疆与非省会总数 <5 的省）。
 * M3b7：非省会 prefecture_city ≥6 的省各 ≥6 座非省会 live（豁免青海、海南、新疆、宁夏与非省会总数 <6 的省）。本刀是 M3b 第六批，不是 293 / 333 完成。
 * @type {{ adcode: string, packId: string, region7: string, status: 'live'|'draft', kit: string }[]}
 */
export const M3A_PIPELINE = [
  { adcode: '110100', packId: 'beijing', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '130100', packId: 'shijiazhuang', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '130600', packId: 'baoding', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '130200', packId: 'tangshan', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '130400', packId: 'handan', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '230100', packId: 'harbin', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '210100', packId: 'shenyang', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '220100', packId: 'changchun', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '210200', packId: 'dalian', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '220200', packId: 'jilin', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '230200', packId: 'qiqihar', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '310100', packId: 'shanghai', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '320500', packId: 'suzhou', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '370200', packId: 'qingdao', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '320200', packId: 'wuxi', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '420100', packId: 'wuhan', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '410300', packId: 'luoyang', region7: '华中', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '430100', packId: 'changsha', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '410200', packId: 'kaifeng', region7: '华中', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '420600', packId: 'xiangyang', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '440100', packId: 'guangzhou', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '440300', packId: 'shenzhen', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '450300', packId: 'guilin', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '440600', packId: 'foshan', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '510100', packId: 'chengdu', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '530100', packId: 'kunming', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '520100', packId: 'guiyang', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '520300', packId: 'zunyi', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '511100', packId: 'leshan', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '510700', packId: 'mianyang', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '610100', packId: 'xian', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '650100', packId: 'urumqi', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '620900', packId: 'jiuquan', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '610300', packId: 'baoji', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '610400', packId: 'xianyang', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '120100', packId: 'tianjin', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '140100', packId: 'taiyuan', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '150100', packId: 'hohhot', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '320100', packId: 'nanjing', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '330100', packId: 'hangzhou', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '340100', packId: 'hefei', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '350100', packId: 'fuzhou', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '360100', packId: 'nanchang', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '370100', packId: 'jinan', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '410100', packId: 'zhengzhou', region7: '华中', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '450100', packId: 'nanning', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '460100', packId: 'haikou', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '500100', packId: 'chongqing', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '540100', packId: 'lhasa', region7: '西南', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '620100', packId: 'lanzhou', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '630100', packId: 'xining', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '640100', packId: 'yinchuan', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '710100', packId: 'taipei', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '810100', packId: 'hongkong', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '820100', packId: 'macau', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '140200', packId: 'datong', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '150200', packId: 'baotou', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '330200', packId: 'ningbo', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '340200', packId: 'wuhu', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '350200', packId: 'xiamen', region7: '华东', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '360200', packId: 'jingdezhen', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '430200', packId: 'zhuzhou', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '460200', packId: 'sanya', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '530300', packId: 'qujing', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '540200', packId: 'shigatse', region7: '西南', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '630200', packId: 'haidong', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '640200', packId: 'shizuishan', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '650200', packId: 'kelamayi', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '140800', packId: 'yuncheng', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '150400', packId: 'chifeng', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '210600', packId: 'dandong', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '220700', packId: 'songyuan', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '230600', packId: 'daqing', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '330600', packId: 'shaoxing', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '340300', packId: 'bengbu', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '350500', packId: 'quanzhou', region7: '华东', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '360400', packId: 'jiujiang', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '370500', packId: 'dongying', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '421000', packId: 'jingzhou', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '430600', packId: 'yueyang', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '450500', packId: 'beihai', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '460400', packId: 'danzhou', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '520200', packId: 'liupanshui', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '530400', packId: 'yuxi', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '540500', packId: 'shannan', region7: '西南', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '620500', packId: 'tianshui', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '640300', packId: 'wuzhong', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '650400', packId: 'tulufan', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '141000', packId: 'linfen', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '150500', packId: 'tongliao', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '211100', packId: 'panjin', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '220300', packId: 'siping', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '230800', packId: 'jiamusi', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '321000', packId: 'yangzhou', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '330400', packId: 'jiaxing', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '340800', packId: 'anqing', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '350600', packId: 'zhangzhou', region7: '华东', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '360700', packId: 'ganzhou', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '370800', packId: 'jining', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '410500', packId: 'anyang', region7: '华中', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '420500', packId: 'yichang', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '430400', packId: 'hengyang', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '440800', packId: 'zhanjiang', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '450200', packId: 'liuzhou', region7: '华南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '511500', packId: 'yibin', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '520600', packId: 'tongren', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '530600', packId: 'zhaotong', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '540300', packId: 'changdu', region7: '西南', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '610700', packId: 'hanzhong', region7: '西北', status: 'live', kit: 'jiangnan-water' },
  { adcode: '620700', packId: 'zhangye', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '640500', packId: 'zhongwei', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '650500', packId: 'hami', region7: '西北', status: 'live', kit: 'oasis-flat' },
  { adcode: '130300', packId: 'qinhuangdao', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '140400', packId: 'changzhi', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '150800', packId: 'bayannur', region7: '华北', status: 'live', kit: 'oasis-flat' },
  { adcode: '210700', packId: 'jinzhou', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '220800', packId: 'baicheng', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '231100', packId: 'heihe', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '320600', packId: 'nantong', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '330300', packId: 'wenzhou', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '341200', packId: 'fuyang', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '350900', packId: 'ningde', region7: '华东', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '360800', packId: 'jian', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '370600', packId: 'yantai', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '411500', packId: 'xinyang', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '421100', packId: 'huanggang', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '430700', packId: 'changde', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '440500', packId: 'shantou', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '450400', packId: 'wuzhou', region7: '华南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '511300', packId: 'nanchong', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '520500', packId: 'bijie', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '530800', packId: 'puer', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '540600', packId: 'naqu', region7: '西南', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '610600', packId: 'yanan', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '621200', packId: 'longnan', region7: '西北', status: 'live', kit: 'jiangnan-water' },
  { adcode: '640400', packId: 'guyuan', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '130900', packId: 'cangzhou', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '140700', packId: 'jinzhong', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '150600', packId: 'ordos', region7: '华北', status: 'live', kit: 'oasis-flat' },
  { adcode: '210800', packId: 'yingkou', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '220500', packId: 'tonghua', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '231000', packId: 'mudanjiang', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '320700', packId: 'lianyungang', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '331000', packId: 'taizhou', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '341500', packId: 'luan', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '350700', packId: 'nanping', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '361100', packId: 'shangrao', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '371300', packId: 'linyi', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '411300', packId: 'nanyang', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '420300', packId: 'shiyan', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '431000', packId: 'chenzhou', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '441200', packId: 'zhaoqing', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '450700', packId: 'qinzhou', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '510500', packId: 'luzhou', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '520400', packId: 'anshun', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '530500', packId: 'baoshan', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '540400', packId: 'linzhi', region7: '西南', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '610800', packId: 'yulin', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '621000', packId: 'qingyang', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '131100', packId: 'hengshui', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '140600', packId: 'shuozhou', region7: '华北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '150900', packId: 'ulanqab', region7: '华北', status: 'live', kit: 'oasis-flat' },
  { adcode: '210300', packId: 'anshan', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '220400', packId: 'liaoyuan', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '231200', packId: 'suihua', region7: '东北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '320300', packId: 'xuzhou', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '330900', packId: 'zhoushan', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '341100', packId: 'chuzhou', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '350300', packId: 'putian', region7: '华东', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '361000', packId: 'fuzhoujx', region7: '华东', status: 'live', kit: 'jiangnan-water' },
  { adcode: '370700', packId: 'weifang', region7: '华东', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '411400', packId: 'shangqiu', region7: '华中', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '420900', packId: 'xiaogan', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '430900', packId: 'yiyang', region7: '华中', status: 'live', kit: 'jiangnan-water' },
  { adcode: '440400', packId: 'zhuhai', region7: '华南', status: 'live', kit: 'lingnan-qilou' },
  { adcode: '450800', packId: 'guigang', region7: '华南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '510600', packId: 'deyang', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '530900', packId: 'lincang', region7: '西南', status: 'live', kit: 'jiangnan-water' },
  { adcode: '610500', packId: 'weinan', region7: '西北', status: 'live', kit: 'north-brick-hutong' },
  { adcode: '620600', packId: 'wuwei', region7: '西北', status: 'live', kit: 'oasis-flat' },
]

/** Task-named promotions (沈阳/昆明 are provincial capitals of other provinces). */
export const M3A2_NAMED_LIVE = ['baoding', 'shenyang', 'suzhou', 'luoyang', 'shenzhen', 'kunming', 'jiuquan']

/** True non-capitals: not the administrative center of their parent province. One per region (M3a2). */
export const M3A2_NONCAPITAL_LIVE = ['baoding', 'dalian', 'suzhou', 'luoyang', 'shenzhen', 'zunyi', 'jiuquan']

/**
 * M3a3: three true non-capitals per region (21).
 * 不含石家庄/长春/沈阳/长沙/郑州/广州/贵阳/昆明/乌鲁木齐/兰州等行政中心。
 */
export const M3A3_NONCAPITAL_LIVE = [
  'baoding',
  'tangshan',
  'handan',
  'dalian',
  'jilin',
  'qiqihar',
  'suzhou',
  'qingdao',
  'wuxi',
  'luoyang',
  'kaifeng',
  'xiangyang',
  'shenzhen',
  'guilin',
  'foshan',
  'zunyi',
  'leshan',
  'mianyang',
  'jiuquan',
  'baoji',
  'xianyang',
]

export const M3A3_NEW_LIVE = M3A3_NONCAPITAL_LIVE.filter((id) => !M3A2_NONCAPITAL_LIVE.includes(id))

/**
 * M3b1: one administrative-center pack per provincial-level unit (34).
 * 省=省会；自治区=首府；直辖市=主城包；特区=教学包行政中心；台湾省=台北教学包。
 * 不是 293 地级市完成，更不是 333 完成。
 */
export const M3B1_CAPITALS = [
  { provinceAdcode: '110000', province: '北京市', packId: 'beijing', adcode: '110100', name: '北京市', region7: '华北' },
  { provinceAdcode: '120000', province: '天津市', packId: 'tianjin', adcode: '120100', name: '天津市', region7: '华北' },
  { provinceAdcode: '130000', province: '河北省', packId: 'shijiazhuang', adcode: '130100', name: '石家庄市', region7: '华北' },
  { provinceAdcode: '140000', province: '山西省', packId: 'taiyuan', adcode: '140100', name: '太原市', region7: '华北' },
  { provinceAdcode: '150000', province: '内蒙古自治区', packId: 'hohhot', adcode: '150100', name: '呼和浩特市', region7: '华北' },
  { provinceAdcode: '210000', province: '辽宁省', packId: 'shenyang', adcode: '210100', name: '沈阳市', region7: '东北' },
  { provinceAdcode: '220000', province: '吉林省', packId: 'changchun', adcode: '220100', name: '长春市', region7: '东北' },
  { provinceAdcode: '230000', province: '黑龙江省', packId: 'harbin', adcode: '230100', name: '哈尔滨市', region7: '东北' },
  { provinceAdcode: '310000', province: '上海市', packId: 'shanghai', adcode: '310100', name: '上海市', region7: '华东' },
  { provinceAdcode: '320000', province: '江苏省', packId: 'nanjing', adcode: '320100', name: '南京市', region7: '华东' },
  { provinceAdcode: '330000', province: '浙江省', packId: 'hangzhou', adcode: '330100', name: '杭州市', region7: '华东' },
  { provinceAdcode: '340000', province: '安徽省', packId: 'hefei', adcode: '340100', name: '合肥市', region7: '华东' },
  { provinceAdcode: '350000', province: '福建省', packId: 'fuzhou', adcode: '350100', name: '福州市', region7: '华东' },
  { provinceAdcode: '360000', province: '江西省', packId: 'nanchang', adcode: '360100', name: '南昌市', region7: '华东' },
  { provinceAdcode: '370000', province: '山东省', packId: 'jinan', adcode: '370100', name: '济南市', region7: '华东' },
  { provinceAdcode: '410000', province: '河南省', packId: 'zhengzhou', adcode: '410100', name: '郑州市', region7: '华中' },
  { provinceAdcode: '420000', province: '湖北省', packId: 'wuhan', adcode: '420100', name: '武汉市', region7: '华中' },
  { provinceAdcode: '430000', province: '湖南省', packId: 'changsha', adcode: '430100', name: '长沙市', region7: '华中' },
  { provinceAdcode: '440000', province: '广东省', packId: 'guangzhou', adcode: '440100', name: '广州市', region7: '华南' },
  { provinceAdcode: '450000', province: '广西壮族自治区', packId: 'nanning', adcode: '450100', name: '南宁市', region7: '华南' },
  { provinceAdcode: '460000', province: '海南省', packId: 'haikou', adcode: '460100', name: '海口市', region7: '华南' },
  { provinceAdcode: '500000', province: '重庆市', packId: 'chongqing', adcode: '500100', name: '重庆市', region7: '西南' },
  { provinceAdcode: '510000', province: '四川省', packId: 'chengdu', adcode: '510100', name: '成都市', region7: '西南' },
  { provinceAdcode: '520000', province: '贵州省', packId: 'guiyang', adcode: '520100', name: '贵阳市', region7: '西南' },
  { provinceAdcode: '530000', province: '云南省', packId: 'kunming', adcode: '530100', name: '昆明市', region7: '西南' },
  { provinceAdcode: '540000', province: '西藏自治区', packId: 'lhasa', adcode: '540100', name: '拉萨市', region7: '西南' },
  { provinceAdcode: '610000', province: '陕西省', packId: 'xian', adcode: '610100', name: '西安市', region7: '西北' },
  { provinceAdcode: '620000', province: '甘肃省', packId: 'lanzhou', adcode: '620100', name: '兰州市', region7: '西北' },
  { provinceAdcode: '630000', province: '青海省', packId: 'xining', adcode: '630100', name: '西宁市', region7: '西北' },
  { provinceAdcode: '640000', province: '宁夏回族自治区', packId: 'yinchuan', adcode: '640100', name: '银川市', region7: '西北' },
  { provinceAdcode: '650000', province: '新疆维吾尔自治区', packId: 'urumqi', adcode: '650100', name: '乌鲁木齐市', region7: '西北' },
  { provinceAdcode: '710000', province: '台湾省', packId: 'taipei', adcode: '710100', name: '台北教学包', region7: '华东' },
  { provinceAdcode: '810000', province: '香港特别行政区', packId: 'hongkong', adcode: '810100', name: '香港主城', region7: '华南' },
  { provinceAdcode: '820000', province: '澳门特别行政区', packId: 'macau', adcode: '820100', name: '澳门主城', region7: '华南' },
]

export const M3B1_CAPITAL_PACKS = M3B1_CAPITALS.map((c) => c.packId)

/** This slice: 5 draft promotions + 20 newly scaffolded capitals. */
export const M3B1_NEW_LIVE = [
  'shijiazhuang',
  'changchun',
  'changsha',
  'guiyang',
  'urumqi',
  'tianjin',
  'taiyuan',
  'hohhot',
  'nanjing',
  'hangzhou',
  'hefei',
  'fuzhou',
  'nanchang',
  'jinan',
  'zhengzhou',
  'nanning',
  'haikou',
  'chongqing',
  'lhasa',
  'lanzhou',
  'xining',
  'yinchuan',
  'taipei',
  'hongkong',
  'macau',
]

/**
 * M3b2: first prefecture-city expansion batch.
 * One non-capital prefecture_city live in every province/AR that has prefecture_city rows.
 * Municipalities / SARs / Taiwan teaching packs are exempt.
 * 12–20 new live this slice — not 293 complete, not 333 complete.
 */
export const M3B2_NEW_LIVE = [
  'datong',
  'baotou',
  'ningbo',
  'wuhu',
  'xiamen',
  'jingdezhen',
  'zhuzhou',
  'sanya',
  'qujing',
  'shigatse',
  'haidong',
  'shizuishan',
  'kelamayi',
]

/**
 * M3b3: second prefecture-city expansion batch.
 * Every province/AR with ≥2 non-capital prefecture_city rows gets ≥2 live.
 * Qinghai is exempt (only Haidong besides Xining). Municipalities / SARs / Taiwan exempt.
 * 18–24 new live this slice (honest cap 26) — not 293 complete, not 333 complete.
 */
export const M3B3_NEW_LIVE = [
  'yuncheng',
  'chifeng',
  'dandong',
  'songyuan',
  'daqing',
  'shaoxing',
  'bengbu',
  'quanzhou',
  'jiujiang',
  'dongying',
  'jingzhou',
  'yueyang',
  'beihai',
  'danzhou',
  'liupanshui',
  'yuxi',
  'shannan',
  'tianshui',
  'wuzhong',
  'tulufan',
]

/**
 * M3b4: third prefecture-city expansion batch.
 * Every province/AR with ≥3 non-capital prefecture_city rows gets ≥3 live.
 * Qinghai exempt (only Haidong). Hainan exempt to ≥3: Sansha is never playable,
 * so playable non-capital prefecture_city = Sanya + Danzhou = 2.
 * Municipalities / SARs / Taiwan teaching packs are exempt.
 * 18–26 new live this slice (honest cap 28) — not 293 complete, not 333 complete.
 */
export const M3B4_NEW_LIVE = [
  'linfen',
  'tongliao',
  'panjin',
  'siping',
  'jiamusi',
  'yangzhou',
  'jiaxing',
  'anqing',
  'zhangzhou',
  'ganzhou',
  'jining',
  'anyang',
  'yichang',
  'hengyang',
  'zhanjiang',
  'liuzhou',
  'yibin',
  'tongren',
  'zhaotong',
  'changdu',
  'hanzhong',
  'zhangye',
  'zhongwei',
  'hami',
]

/**
 * M3b5: fourth prefecture-city expansion batch.
 * Every province/AR with ≥4 non-capital prefecture_city rows gets ≥4 live.
 * Qinghai exempt (only Haidong). Hainan exempt to ≥4: Sansha is never playable,
 * so playable non-capital prefecture_city = Sanya + Danzhou = 2.
 * Xinjiang exempt to ≥4: only 3 non-capital prefecture_city (already ≥3 live).
 * Municipalities / SARs / Taiwan teaching packs are exempt.
 * 18–28 new live this slice (honest cap 30) — not 293 complete, not 333 complete.
 */
export const M3B5_NEW_LIVE = [
  'qinhuangdao',
  'changzhi',
  'bayannur',
  'jinzhou',
  'baicheng',
  'heihe',
  'nantong',
  'wenzhou',
  'fuyang',
  'ningde',
  'jian',
  'yantai',
  'xinyang',
  'huanggang',
  'changde',
  'shantou',
  'wuzhou',
  'nanchong',
  'bijie',
  'puer',
  'naqu',
  'yanan',
  'longnan',
  'guyuan',
]

/**
 * M3b6: fifth prefecture-city expansion batch.
 * Every province/AR with ≥5 non-capital prefecture_city rows gets ≥5 live.
 * Qinghai exempt (only Haidong). Hainan exempt to ≥5: Sansha is never playable,
 * so playable non-capital prefecture_city = Sanya + Danzhou = 2.
 * Xinjiang exempt to ≥5: only 3 non-capital prefecture_city (keep ≥3).
 * Provinces with <5 eligible non-cap (Ningxia =4) exempt to ≥5 but keep ≥4.
 * Municipalities / SARs / Taiwan teaching packs are exempt.
 * 18–28 new live this slice (honest cap 30) — not 293 complete, not 333 complete.
 */
export const M3B6_NEW_LIVE = [
  'cangzhou',
  'jinzhong',
  'ordos',
  'yingkou',
  'tonghua',
  'mudanjiang',
  'lianyungang',
  'taizhou',
  'luan',
  'nanping',
  'shangrao',
  'linyi',
  'nanyang',
  'shiyan',
  'chenzhou',
  'zhaoqing',
  'qinzhou',
  'luzhou',
  'anshun',
  'baoshan',
  'linzhi',
  'yulin',
  'qingyang',
]

/**
 * M3b7: sixth prefecture-city expansion batch.
 * Every province/AR with ≥6 non-capital prefecture_city rows gets ≥6 live.
 * Qinghai exempt (only Haidong). Hainan exempt to ≥6: Sansha is never playable,
 * so playable non-capital prefecture_city = Sanya + Danzhou = 2.
 * Xinjiang exempt to ≥6: only 3 non-capital prefecture_city (keep ≥3).
 * Ningxia exempt to ≥6: only 4 non-capital prefecture_city (keep ≥4).
 * Guizhou / Tibet have 5 non-capital prefecture_city (keep ≥5, cannot reach 6).
 * Municipalities / SARs / Taiwan teaching packs are exempt.
 * 18–28 new live this slice (honest cap 30) — not 293 complete, not 333 complete.
 */
export const M3B7_NEW_LIVE = [
  'hengshui',
  'shuozhou',
  'ulanqab',
  'anshan',
  'liaoyuan',
  'suihua',
  'xuzhou',
  'zhoushan',
  'chuzhou',
  'putian',
  'fuzhoujx',
  'weifang',
  'shangqiu',
  'xiaogan',
  'yiyang',
  'zhuhai',
  'guigang',
  'deyang',
  'lincang',
  'weinan',
  'wuwei',
]

/** 三沙：永远不可玩，不能拿来充非省会 live。计「可玩非省会」时排除。 */
export const NEVER_PLAYABLE_ADCODES = ['460300']

export const M3A_LIVE_PACKS = M3A_PIPELINE.filter((p) => p.status === 'live').map((p) => p.packId)

export const M3A_DRAFT_PACKS = M3A_PIPELINE.filter((p) => p.status === 'draft').map((p) => p.packId)

export function defaultKit(region7) {
  if (region7 === '华东' || region7 === '华中') return 'jiangnan-water'
  if (region7 === '华南') return 'lingnan-qilou'
  if (region7 === '西北') return 'oasis-flat'
  return 'north-brick-hutong'
}

export function slugPack(name, adcode) {
  if (PACK_SLUGS[name]) return PACK_SLUGS[name]
  const stripped = String(name || '').replace(/主城$/, '').replace(/教学包$/, '')
  if (PACK_SLUGS[stripped]) return PACK_SLUGS[stripped]
  return `city-${adcode}`
}

/**
 * 省会 / 直辖市主城 / 首府. 非省会 = 地级且不是本省行政中心.
 * @param {{ unitType?: string, name?: string, parentAdcode?: string, capital?: string }} row
 * @param {{ adcode: string, capital: string, unitType: string }[]} provinces
 */
export function isProvincialCapital(row, provinces) {
  const ut = row.unitType || ''
  if (ut === 'municipality' || ut === 'municipality_city' || ut === 'sar') return true
  const parent = provinces.find((p) => p.adcode === row.parentAdcode)
  if (!parent) return false
  const cap = parent.capital
  const name = String(row.name || '').replace(/主城$/, '').replace(/教学包$/, '')
  return name === cap || name === `${cap}市` || name.startsWith(cap)
}

export const DISCLAIMER =
  '本切片不宣称全国地级已收录可玩。live 3D：训练场 + 34 省各 ≥1 座行政中心 + 凡有地级市的省各 ≥1 座非省会地级市 + 非省会 prefecture_city ≥2 的省各 ≥2 座非省会 live（豁免青海）+ 非省会 prefecture_city ≥3 的省各 ≥3 座非省会 live（豁免青海与非省会总数 <3 的省；海南三沙不可玩）+ 非省会 prefecture_city ≥4 的省各 ≥4 座非省会 live（豁免青海、海南与非省会总数 <4 的省）+ 非省会 prefecture_city ≥5 的省各 ≥5 座非省会 live（豁免青海、海南、新疆与非省会总数 <5 的省）+ 非省会 prefecture_city ≥6 的省各 ≥6 座非省会 live（豁免青海、海南、新疆、宁夏与非省会总数 <6 的省）+ 七大区各 ≥3 座非省会 live（全国非省会 live ≥21）。prefecture_city live 约 173/293（M3b7 批次管线，不是 293 完成）。其余地级为草稿或名录灰壳。不是 333 完成，也不是 293 完成。'
