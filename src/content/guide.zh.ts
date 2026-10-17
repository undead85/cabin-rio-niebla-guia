import {
  Bag,
  ChatCircleDots,
  CigaretteSlash,
  Coffee,
  Compass,
  CookingPot,
  Drop,
  DropSlash,
  Flame,
  ForkKnife,
  Key,
  Lightbulb,
  MapPinLine,
  Plant,
  Plug,
  Prohibit,
  Scroll,
  ShoppingCartSimple,
  Sparkle,
  SuitcaseSimple,
  TShirt,
  TelevisionSimple,
  ThermometerSimple,
  Trash,
  WifiHigh,
  Wind,
} from '@phosphor-icons/react';
import { WIFI_NETWORK } from './site';
import type {
  AppliancesContent,
  Category,
  CheckinContent,
  CheckoutContent,
  ContactContent,
  GuideContent,
  HomeContent,
  LocationContent,
  PlaceListContent,
  RulesContent,
  WifiContent,
} from './types';

// Chino simplificado (zh-CN). Los nombres propios de lugares, la dirección y
// las consultas `q` de Google Maps se mantienen en español a propósito: son lo
// que el huésped necesita buscar o mostrar tal cual estando en Chile.

const categories: Category[] = [
  { key: 'wifi', icon: WifiHigh, label: 'Wi-Fi', desc: '网络与密码' },
  { key: 'checkin', icon: Key, label: '入住', desc: '进门方式与时间' },
  { key: 'rules', icon: Scroll, label: '住宿规则', desc: '居家须知' },
  {
    key: 'location',
    icon: MapPinLine,
    label: '如何前往',
    desc: '地图与驾车',
  },
  { key: 'appliances', icon: Plug, label: '电器', desc: '使用方法' },
  {
    key: 'markets',
    icon: ShoppingCartSimple,
    label: '超市',
    desc: '采购补给',
  },
  { key: 'food', icon: ForkKnife, label: '去哪里吃', desc: '推荐餐厅' },
  {
    key: 'explore',
    icon: Compass,
    label: '玩些什么',
    desc: '瓦尔迪维亚及周边',
  },
  {
    key: 'checkout',
    icon: SuitcaseSimple,
    label: '离开之前',
    desc: '退房',
  },
  {
    key: 'contact',
    icon: ChatCircleDots,
    label: '联系方式',
    desc: '给我留言',
  },
];

const homeContent: HomeContent = {
  kicker: '住客指南',
  title: 'ENTRE RÍO Y NIEBLA',
  tagline: '小木屋 · 瓦尔迪维亚',
  welcome: '很高兴你来到这里。所需的一切，轻触即得。',
  checkinLabel: '入住',
  checkoutLabel: '退房',
  wifiLabel: 'WI-FI',
  photoAlt: 'Entre Río y Niebla 小木屋',
  navLabel: '指南栏目',
  farewell: '有任何需要，我随时为你帮忙。',
};

const wifiContent: WifiContent = {
  title: 'Wi-Fi',
  networkLabel: '网络名称',
  passLabel: '密码',
  copyCta: '复制密码',
  copiedCta: '密码已复制！',
  hint: '复制密码后粘贴到手机的 Wi-Fi 设置里。木屋内和露台全区域都有信号。',
};

const checkinContent: CheckinContent = {
  title: '入住与进门',
  arrivalLabel: '抵达',
  departureLabel: '离开',
  stepsLabel: '进门步骤',
  steps: [
    '出发前请告诉我，方便我安排接待你抵达。',
    '从 Pino Huacho 2 区域进入；上山路铺有水泥车辙，任何车型都能开上来。',
    '抵达后交接钥匙并一起查看木屋。我会迎接你，并说明屋内各项设施怎么用。',
  ],
  parkingNote: '院内可免费停车。',
};

const rulesContent: RulesContent = {
  title: '住宿规则',
  sections: [
    {
      title: '一般规定',
      items: [
        {
          icon: CigaretteSlash,
          title: '吸烟请到露台',
          note: '烟头请装进袋子里，再丢到露台的垃圾桶。',
        },
        {
          icon: Prohibit,
          title: '请勿把纸丢进马桶',
          note: '卫生间接的是化粪池。请不要把卫生纸或其他垃圾丢进马桶，否则会堵塞。请使用垃圾桶。',
        },
        {
          icon: DropSlash,
          title: '卸妆请不要用白毛巾',
          note: '请使用卸妆湿巾，就放在卫生间的柜子里。',
        },
        {
          icon: Plant,
          title: '这里的植物都是真的 —— 请像在自己家一样照顾它们',
          note: '室内和花园里的都一样。',
        },
      ],
    },
    {
      title: '厨房与公共区域',
      items: [
        {
          icon: CookingPot,
          title: '请让厨房保持干净',
          note: '餐具、烤箱和锅具用完后请清洗干净。',
        },
        {
          icon: Flame,
          title: '请清理烤架',
          note: '如果你用了烤架，请把它恢复成你看到时的干净样子。',
        },
      ],
    },
    {
      title: '离开之前',
      items: [
        {
          icon: Trash,
          title: '垃圾请丢到露台的垃圾桶',
          note: '卫生间和厨房的垃圾都丢进露台旁边的大垃圾桶。',
        },
        {
          icon: Lightbulb,
          title: '离开时请关掉灯、电视、炉灶和暖气',
          note: '',
        },
        {
          icon: Drop,
          title: '请关好水龙头',
          note: '请检查木屋和院子里的水龙头都没有在流水。',
        },
        {
          icon: Bag,
          title: '别忘了随身物品',
          note: '遗留的东西我们可以寄给你，不过运费需要你承担。',
        },
      ],
    },
    {
      title: '熨斗的使用',
      items: [
        {
          icon: Wind,
          title: '备有蒸汽熨斗',
          note: '附有使用说明书。如果不清楚怎么用，随时问我。',
        },
      ],
    },
    {
      title: '额外清洁',
      items: [
        {
          icon: Sparkle,
          title: '请保持和你入住时一样',
          note: '如果退房后需要大量额外清洁，将按额外工作量收取相应费用（80.000 智利比索）。这包括屋内留有过多污渍、堆积的垃圾、床品或毛巾被染污，以及任何需要深度清洁的损坏。',
        },
      ],
    },
  ],
  farewell: '感谢你像爱护自己的家一样爱护这个地方。',
};

const locationContent: LocationContent = {
  title: '如何前往',
  addressLabel: '地址',
  address: 'Sector Pino Huacho 2',
  addressDetail: '瓦尔迪维亚，洛斯里奥斯大区 · 智利',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-39.865443,-73.375001&travelmode=driving',
  directionsCta: '用 GOOGLE 地图导航',
  photoAlt: '上山行车指示',
  roadNote:
    '上山的路本身就是这里的魅力之一：安静，一路被自然环绕。有些路段比较窄，只能一辆车通过，建议你慢慢开。按规定上行车辆有优先权，不过这里邻里之间互相照应：如果看到有车已经下到半路，就让对方先过。放慢速度、留意路况，你会顺利抵达。',
};

const appliancesContent: AppliancesContent = {
  title: '电器怎么用',
  intro: '木屋内设备的快速指南。请按每一项的步骤操作。',
  items: [
    {
      icon: ThermometerSimple,
      title: '暖气',
      subtitle: '电暖器 / 分体空调',
      steps: [
        '用遥控器或电源键开启。',
        '把温度调到 21–22°C 左右。',
        '外出或睡觉时请关掉，以节约用电。',
      ],
    },
    {
      icon: TShirt,
      title: '蒸汽熨斗',
      subtitle: '在走廊的衣柜里',
      steps: [
        '往水箱加水到刻度线。',
        '插上电源，等 1–2 分钟预热。',
        '按压扳机喷出蒸汽。用完请把水倒掉。',
      ],
    },
    {
      icon: Coffee,
      title: '电热水壶',
      subtitle: '在厨房台面上',
      steps: [
        '加水到最低与最高刻度之间。',
        '放回底座，按下开关。',
        '水烧开后会自动断电。',
      ],
    },
    {
      icon: TelevisionSimple,
      title: '电视',
      subtitle: '智能电视，可看流媒体',
      steps: [
        '用遥控器开机。',
        `如果提示联网，请连接 Wi-Fi ${WIFI_NETWORK}。`,
        '按 HOME 键进入你想看的应用。屋里装了 Zapping，可以收看智利本地频道。',
        '离开前请退出各个应用的账号（YouTube、Netflix 等）。',
      ],
    },
  ],
  helpNote: '有东西不好用，或者有任何疑问？用 WhatsApp 给我留言，我来帮你。',
};

const marketsContent: PlaceListContent = {
  title: '超市',
  intro:
    '在瓦尔迪维亚采购补给。轻触即可在 Google 地图中打开。Jumbo、Lider 和 Unimarc 可以配送到球场（la cancha）。',
  icon: ShoppingCartSimple,
  items: [
    {
      name: 'Jumbo Valdivia',
      note: '最大的一家，什么都有',
      q: 'Jumbo Valdivia',
    },
    {
      name: 'Líder Valdivia',
      note: '种类多，价格实惠',
      q: 'Lider Valdivia',
    },
    { name: 'Unimarc', note: '位置靠市中心，方便', q: 'Unimarc Valdivia' },
    {
      name: 'Provisiones La Kathita',
      note: '买少量急需的东西。距木屋 0.5 公里',
      q: 'Provisiones La Kathita Valdivia',
    },
    {
      name: 'Minimercado Donde Tatuco',
      note: '酒类与杂货。距木屋 3 公里',
      q: 'Minimercado Donde Tatuco Valdivia',
    },
    {
      name: 'Caleta Los Molinos',
      note: '新鲜的鱼类与海鲜。距木屋 6 公里',
      q: 'Caleta Los Molinos Valdivia',
    },
  ],
};

const foodContent: PlaceListContent = {
  title: '去哪里吃',
  intro: '我们的最爱。轻触即可在地图上查看。',
  icon: ForkKnife,
  items: [
    {
      name: 'Encuentro Costumbrista',
      note: '智利家常菜与精酿啤酒',
      q: 'Encuentro Costumbrista Valdivia',
    },
    {
      name: 'El Huairavo',
      note: '餐吧，下午开始营业',
      q: 'El Huairavo Valdivia',
    },
    {
      name: 'La Motoneta',
      note: '咖啡餐厅，早午餐和多人分享的菜',
      q: 'La Motoneta Valdivia',
    },
    {
      name: 'Restaurant Entrecosta',
      note: '鱼类与海鲜。',
      q: 'Restaurant Entrecosta Valdivia',
    },
    {
      name: 'Cervecería Kunstmann',
      note: '精酿啤酒与德式菜肴',
      q: 'Cerveceria Kunstmann Valdivia',
    },
    {
      name: 'Café Haussmann',
      note: '生牛肉塔塔（crudos）和德式蛋糕，当地经典',
      q: 'Cafe Haussmann Valdivia',
    },
    {
      name: 'Entrelagos',
      note: '巧克力、咖啡与下午茶',
      q: 'Entrelagos Valdivia',
    },
    {
      name: 'Bar Bundor',
      note: '精酿啤酒、酸橘汁腌鱼与快餐',
      q: 'Bar Bundor Valdivia',
    },
    {
      name: 'Caleta Los Molinos',
      note: '餐厅与渔人码头',
      q: 'Restaurante Caleta Los Molinos y muelle de pescadores Valdivia',
    },
  ],
};

const exploreContent: PlaceListContent = {
  title: '玩些什么',
  intro: '瓦尔迪维亚及周边最值得去的地方。',
  icon: Compass,
  items: [
    {
      name: 'Castillos de Niebla y Corral',
      note: '历史海防炮台',
      q: 'Castillo de Niebla Valdivia',
    },
    {
      name: 'Playa Isla del Rey',
      note: '天气晴朗时，不可错过的一趟',
      q: 'Playa de Isla del Rey, carboneros.',
    },
    {
      name: 'Parques Nacionales y Reserva Costera Valdiviana',
      note: '自然与户外。建议联系当地向导。',
      q: 'Playa Colun Valdivia',
    },
    {
      name: 'Punta Curiñanco',
      note: '海滩与原生森林',
      q: 'Punta Curiñanco Valdivia',
    },
    {
      name: 'Mercado Fluvial',
      note: '河边的海狮',
      q: 'Mercado Fluvial Valdivia',
    },
    {
      name: 'Costanera de Valdivia',
      note: '沿着河岸散步',
      q: 'Costanera Valdivia',
    },
    {
      name: 'Jardín Botánico UACh',
      note: 'Isla Teja 的植物园',
      q: 'Jardin Botanico Universidad Austral Valdivia',
    },
    {
      name: 'Parque Saval',
      note: '湖泊与步道',
      q: 'Parque Saval Valdivia',
    },
    {
      name: 'Museo de Arte Contemporáneo',
      note: 'Isla Teja 的当代艺术馆',
      q: 'Museo de Arte Contemporaneo Valdivia',
    },
  ],
};

const checkoutContent: CheckoutContent = {
  title: '离开之前',
  checkoutLabel: '退房',
  steps: [
    '把钥匙放在入住时约好的地方。',
    '关灯、关暖气，并关好窗户。',
    '把垃圾拿到指定的地方。',
    '餐具请洗干净；其余的我来处理。',
  ],
  farewell: '谢谢你的到访！期待很快再见。',
};

const contactContent: ContactContent = {
  title: '联系方式',
  name: 'Anita',
  role: '你的房东',
  message:
    '这份指南几乎回答了所有问题，但如果你还需要什么，请用 WhatsApp 给我留言。我随时为你帮忙。',
  cta: '用 WHATSAPP 留言',
};

export const zhGuide: GuideContent = {
  docTitle: '住客指南 · Entre Río y Niebla',
  ui: {
    backLabel: '返回首页',
    languageLabel: '语言',
  },
  categories,
  home: homeContent,
  wifi: wifiContent,
  checkin: checkinContent,
  rules: rulesContent,
  location: locationContent,
  appliances: appliancesContent,
  markets: marketsContent,
  food: foodContent,
  explore: exploreContent,
  checkout: checkoutContent,
  contact: contactContent,
};
