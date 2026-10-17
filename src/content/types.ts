import type { Icon } from "@phosphor-icons/react";

// Claves de pantalla: tambien son los fragmentos hash de la URL (`#wifi`) y las
// llaves con las que `GuestGuide` resuelve que pantalla mostrar.
export const SCREEN_KEYS = [
  "home",
  "wifi",
  "checkin",
  "rules",
  "location",
  "appliances",
  "markets",
  "food",
  "explore",
  "checkout",
  "contact",
] as const;

export type ScreenKey = (typeof SCREEN_KEYS)[number];

export interface Category {
  key: ScreenKey;
  icon: Icon;
  label: string;
  desc: string;
}

export interface RuleItem {
  icon: Icon;
  title: string;
  note: string;
}

export interface RuleSection {
  title: string;
  items: RuleItem[];
}

export interface Appliance {
  icon: Icon;
  title: string;
  subtitle: string;
  steps: string[];
}

export interface Place {
  name: string;
  note: string;
  q: string;
}

export interface HomeContent {
  kicker: string;
  title: string;
  tagline: string;
  welcome: string;
  checkinLabel: string;
  checkoutLabel: string;
  wifiLabel: string;
  photoAlt: string;
  navLabel: string;
  farewell: string;
}

export interface WifiContent {
  title: string;
  networkLabel: string;
  passLabel: string;
  copyCta: string;
  copiedCta: string;
  hint: string;
}

export interface CheckinContent {
  title: string;
  arrivalLabel: string;
  departureLabel: string;
  stepsLabel: string;
  steps: string[];
  parkingNote: string;
}

export interface RulesContent {
  title: string;
  sections: RuleSection[];
  farewell: string;
}

export interface LocationContent {
  title: string;
  addressLabel: string;
  address: string;
  addressDetail: string;
  directionsUrl: string;
  directionsCta: string;
  photoAlt: string;
  roadNote: string;
}

export interface AppliancesContent {
  title: string;
  intro: string;
  items: Appliance[];
  helpNote: string;
}

export interface PlaceListContent {
  title: string;
  intro: string;
  icon: Icon;
  items: Place[];
}

export interface CheckoutContent {
  title: string;
  checkoutLabel: string;
  steps: string[];
  farewell: string;
}

export interface ContactContent {
  title: string;
  name: string;
  role: string;
  message: string;
  cta: string;
}

// Textos de chrome (no de contenido) que viven fuera de una pantalla concreta.
export interface UiContent {
  backLabel: string;
  languageLabel: string;
}

// Un idioma completo de la guia. `guides` en `guide.ts` indexa estos por locale.
export interface GuideContent {
  docTitle: string;
  ui: UiContent;
  categories: Category[];
  home: HomeContent;
  wifi: WifiContent;
  checkin: CheckinContent;
  rules: RulesContent;
  location: LocationContent;
  appliances: AppliancesContent;
  markets: PlaceListContent;
  food: PlaceListContent;
  explore: PlaceListContent;
  checkout: CheckoutContent;
  contact: ContactContent;
}
