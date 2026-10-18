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

// Inglés internacional. Los nombres propios de lugares, la dirección y las
// consultas `q` de Google Maps se mantienen en español a propósito: son lo que
// el huésped necesita buscar o mostrar tal cual estando en Chile.

const categories: Category[] = [
  { key: 'wifi', icon: WifiHigh, label: 'Wi-Fi', desc: 'Network and password' },
  { key: 'checkin', icon: Key, label: 'Check-in', desc: 'Access and times' },
  { key: 'rules', icon: Scroll, label: 'House rules', desc: 'What we ask' },
  {
    key: 'location',
    icon: MapPinLine,
    label: 'Getting here',
    desc: 'Map and driving',
  },
  { key: 'appliances', icon: Plug, label: 'Appliances', desc: 'How to use them' },
  {
    key: 'markets',
    icon: ShoppingCartSimple,
    label: 'Supermarkets',
    desc: 'Where to stock up',
  },
  { key: 'food', icon: ForkKnife, label: 'Where to eat', desc: 'Our picks' },
  {
    key: 'explore',
    icon: Compass,
    label: 'What to do',
    desc: 'Valdivia and beyond',
  },
  {
    key: 'checkout',
    icon: SuitcaseSimple,
    label: 'Before you go',
    desc: 'Check-out',
  },
  {
    key: 'contact',
    icon: ChatCircleDots,
    label: 'Contact',
    desc: 'Message me',
  },
];

const homeContent: HomeContent = {
  kicker: 'GUEST GUIDE',
  title: 'ENTRE RÍO Y NIEBLA',
  tagline: 'CABIN · VALDIVIA',
  welcome: 'So glad to have you here. Everything you need, one tap away.',
  checkinLabel: 'CHECK-IN',
  checkoutLabel: 'CHECK-OUT',
  wifiLabel: 'WI-FI',
  photoAlt: 'Entre Río y Niebla cabin',
  navLabel: 'Guide sections',
  farewell: 'Anything you need, I’m here to help.',
};

const wifiContent: WifiContent = {
  title: 'Wi-Fi',
  networkLabel: 'NETWORK',
  passLabel: 'PASSWORD',
  copyCta: 'COPY PASSWORD',
  copiedCta: 'PASSWORD COPIED!',
  hint: 'Copy the password and paste it into your phone’s Wi-Fi settings. There’s signal throughout the cabin and the terrace.',
};

const checkinContent: CheckinContent = {
  title: 'Check-in & access',
  arrivalLabel: 'ARRIVAL',
  departureLabel: 'DEPARTURE',
  stepsLabel: 'HOW TO GET IN',
  steps: [
    'Let me know when you’re on your way so we can coordinate your arrival.',
    'Access is through the Pino Huacho 2 area; the road has concrete tracks and any vehicle can make it up.',
    'When you arrive I hand over the keys and we walk through the cabin together. I’ll welcome you and show you how everything works.',
  ],
  parkingNote: 'Free parking on the property.',
};

const rulesContent: RulesContent = {
  title: 'House rules',
  sections: [
    {
      title: 'General Rules',
      items: [
        {
          icon: CigaretteSlash,
          title: 'Smoking area on the terrace',
          note: 'Please put cigarette butts in a bag and leave it in the terrace bin.',
        },
        {
          icon: Prohibit,
          title: 'Don’t flush paper down the toilet',
          note: 'The bathroom runs on a septic tank. Please don’t put paper or any other waste down the toilet, as it clogs. Use the bin instead.',
        },
        {
          icon: DropSlash,
          title: 'Don’t use the white towels to remove makeup',
          note: 'Use the makeup wipes instead. You’ll find them in the bathroom cabinet.',
        },
        {
          icon: Plant,
          title: 'The plants are real — care for them as you would at home',
          note: 'Both the indoor ones and those in the garden.',
        },
      ],
    },
    {
      title: 'Kitchen and Common Areas',
      items: [
        {
          icon: CookingPot,
          title: 'Leave the kitchen clean',
          note: 'The dishes, the oven and the pots should be clean after you use them.',
        },
        {
          icon: Flame,
          title: 'Clean the grill',
          note: 'If you use it, please leave it as clean as you found it.',
        },
      ],
    },
    {
      title: 'Before You Leave',
      items: [
        {
          icon: Trash,
          title: 'Trash goes in the terrace bin',
          note: 'Bathroom and kitchen trash goes in the large bin beside the terrace.',
        },
        {
          icon: Lightbulb,
          title: 'Turn off the lights, TV, stove and heating when you leave',
          note: '',
        },
        {
          icon: Drop,
          title: 'Turn off the taps',
          note: 'Please check that no water is left running in the cabin or the yard.',
        },
        {
          icon: Bag,
          title: 'Don’t forget your belongings',
          note: 'We can send on anything left behind, though shipping is at your cost.',
        },
      ],
    },
    {
      title: 'Using the Iron',
      items: [
        {
          icon: Wind,
          title: 'Steam iron available',
          note: 'It comes with its manual. If you’re not sure how to use it, just ask me.',
        },
      ],
    },
    {
      title: 'Extra Cleaning',
      items: [
        {
          icon: Sparkle,
          title: 'Leave it as you found it',
          note: 'If significant extra cleaning is needed at the end of your stay, a charge proportional to the extra work applies (CLP 80,000). This covers leaving the cabin excessively dirty, trash piled up, stained bed linen or towels, or any damage that needs deep cleaning.',
        },
      ],
    },
  ],
  farewell: 'Thank you for looking after this place as if it were your own.',
};

const locationContent: LocationContent = {
  title: 'Getting here',
  addressLabel: 'ADDRESS',
  address: 'Sector Pino Huacho 2',
  addressDetail: 'Valdivia, Los Ríos · Chile',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-39.865443,-73.375001&travelmode=driving',
  directionsCta: 'OPEN DIRECTIONS IN GOOGLE MAPS',
  photoAlt: 'Directions for driving up the hill',
  roadNote:
    'The road up is part of the charm: quiet and surrounded by nature. Some stretches are narrow and only fit one car at a time, so take it slowly. By law whoever is driving up has the right of way, but here we look out for our neighbors: if you see someone already coming down halfway, let them through. Drive slowly and pay attention and you’ll get here without trouble.',
};

const appliancesContent: AppliancesContent = {
  title: 'Appliances',
  intro: 'A quick guide to the cabin’s equipment. Just follow the steps for each one.',
  items: [
    {
      icon: ThermometerSimple,
      title: 'Heating',
      subtitle: 'Electric heater / split unit',
      steps: [
        'Turn it on with the remote or the power button.',
        'Set the temperature to around 21–22°C.',
        'Switch it off when you go out or go to sleep to save energy.',
      ],
    },
    {
      icon: TShirt,
      title: 'Steam iron',
      subtitle: 'In the hallway closet',
      steps: [
        'Fill the tank with water up to the mark.',
        'Plug it in and wait 1–2 minutes for it to heat up.',
        'Press the trigger to release the steam. Empty it when you’re done.',
      ],
    },
    {
      icon: Coffee,
      title: 'Kettle',
      subtitle: 'On the counter',
      steps: [
        'Fill it with water between the min and max marks.',
        'Set it on its base and press the switch.',
        'It switches off on its own once the water boils.',
      ],
    },
    {
      icon: TelevisionSimple,
      title: 'Television',
      subtitle: 'Smart TV with streaming',
      steps: [
        'Turn it on with the remote.',
        `Connect to the ${WIFI_NETWORK} Wi-Fi if it asks.`,
        'Press HOME to open the app you want. Zapping is installed for watching Chilean channels.',
        'Please log out of your apps (YouTube, Netflix, etc.) before you leave.',
      ],
    },
  ],
  helpNote: 'Something not working, or have a question? Message me on WhatsApp and I’ll help.',
};

const marketsContent: PlaceListContent = {
  title: 'Supermarkets',
  intro:
    'For stocking up in Valdivia. Tap to open in Google Maps. Jumbo, Lider and Unimarc deliver as far as the field (la cancha).',
  icon: ShoppingCartSimple,
  items: [
    {
      name: 'Jumbo Valdivia',
      note: 'The biggest one, has everything',
      q: 'Jumbo Valdivia',
    },
    {
      name: 'Líder Valdivia',
      note: 'Good variety and prices',
      q: 'Lider Valdivia',
    },
    { name: 'Unimarc', note: 'Central and handy', q: 'Unimarc Valdivia' },
    {
      name: 'Provisiones La Kathita',
      note: 'For quick, small shops. 0.5 km from the cabin',
      q: 'Provisiones La Kathita Valdivia',
    },
    {
      name: 'Minimercado Donde Tatuco',
      note: 'Drinks and groceries. 3 km from the cabin',
      q: 'Minimercado Donde Tatuco Valdivia',
    },
    {
      name: 'Caleta Los Molinos',
      note: 'Fresh fish and seafood. 6 km from the cabin',
      q: 'Caleta Los Molinos Valdivia',
    },
  ],
};

const foodContent: PlaceListContent = {
  title: 'Where to eat',
  intro: 'Our favorites. Tap to see them on the map.',
  icon: ForkKnife,
  items: [
    {
      name: 'Encuentro Costumbrista',
      note: 'Chilean cooking and craft beer',
      q: 'Encuentro Costumbrista Valdivia',
    },
    {
      name: 'El Huairavo',
      note: 'Restobar, opens in the afternoon',
      q: 'El Huairavo Valdivia',
    },
    {
      name: 'La Motoneta',
      note: 'Café restaurant, brunch and dishes to share',
      q: 'La Motoneta Valdivia',
    },
    {
      name: 'Restaurant Entrecosta',
      note: 'Fish and seafood.',
      q: 'Restaurant Entrecosta Valdivia',
    },
    {
      name: 'Cervecería Kunstmann',
      note: 'Craft beer and German cooking',
      q: 'Cerveceria Kunstmann Valdivia',
    },
    {
      name: 'Café Haussmann',
      note: 'Crudos and kuchen, a local classic',
      q: 'Cafe Haussmann Valdivia',
    },
    {
      name: 'Entrelagos',
      note: 'Chocolates, coffee and afternoon tea',
      q: 'Entrelagos Valdivia',
    },
    {
      name: 'Bar Bundor',
      note: 'Craft brewery, ceviche and fast food',
      q: 'Bar Bundor Valdivia',
    },
    {
      name: 'Caleta Los Molinos',
      note: 'Restaurant and fishermen’s pier',
      q: 'Restaurante Caleta Los Molinos y muelle de pescadores Valdivia',
    },
  ],
};

const exploreContent: PlaceListContent = {
  title: 'What to do',
  intro: 'The best of Valdivia and its surroundings.',
  icon: Compass,
  items: [
    {
      name: 'Castillos de Niebla y Corral',
      note: 'Historic forts',
      q: 'Castillo de Niebla Valdivia',
    },
    {
      name: 'Playa Isla del Rey',
      note: 'On a sunny day, a trip not to miss',
      q: 'Playa de Isla del Rey, carboneros.',
    },
    {
      name: 'Parques Nacionales y Reserva Costera Valdiviana',
      note: 'Nature and the outdoors. We recommend contacting local guides.',
      q: 'Playa Colun Valdivia',
    },
    {
      name: 'Punta Curiñanco',
      note: 'Beach and native forest',
      q: 'Punta Curiñanco Valdivia',
    },
    {
      name: 'Mercado Fluvial',
      note: 'Sea lions by the river',
      q: 'Mercado Fluvial Valdivia',
    },
    {
      name: 'Costanera de Valdivia',
      note: 'A walk along the riverfront',
      q: 'Costanera Valdivia',
    },
    {
      name: 'Jardín Botánico UACh',
      note: 'Nature on Isla Teja',
      q: 'Jardin Botanico Universidad Austral Valdivia',
    },
    {
      name: 'Parque Saval',
      note: 'Lagoons and trails',
      q: 'Parque Saval Valdivia',
    },
    {
      name: 'Museo de Arte Contemporáneo',
      note: 'Art on Isla Teja',
      q: 'Museo de Arte Contemporaneo Valdivia',
    },
  ],
};

const checkoutContent: CheckoutContent = {
  title: 'Before you go',
  checkoutLabel: 'CHECK-OUT',
  steps: [
    'Leave the keys where we agreed when you arrived.',
    'Turn off the lights and the heating, and close the windows.',
    'Take the trash out to the spot I showed you.',
    'Leave the dishes clean; I’ll take care of the rest.',
  ],
  farewell: 'Thank you for visiting! Come back soon.',
};

const contactContent: ContactContent = {
  title: 'Contact',
  name: 'Anita',
  role: 'YOUR HOST',
  message:
    'This guide answers almost everything, but if you need anything, message me on WhatsApp. I’m here to help.',
  cta: 'MESSAGE ON WHATSAPP',
};

export const enGuide: GuideContent = {
  docTitle: 'Guest Guide · Entre Río y Niebla',
  ui: {
    backLabel: 'Back to home',
    languageLabel: 'Language',
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
