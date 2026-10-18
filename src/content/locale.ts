export const LOCALES = ["es", "en", "zh"] as const;

export type Locale = (typeof LOCALES)[number];

// El export estático se prerenderiza en este idioma; el resto se resuelve en el
// cliente (ver `useLocale`).
export const DEFAULT_LOCALE: Locale = "es";

// Cada idioma se nombra en su propio idioma: así el selector es legible para
// quien todavía no entiende el idioma activo.
export const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  zh: "中文",
};

// Valor para el atributo `lang` del documento.
export const LOCALE_TAGS: Record<Locale, string> = {
  es: "es",
  en: "en",
  zh: "zh-CN",
};

export const LOCALE_STORAGE_KEY = "rn-locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
