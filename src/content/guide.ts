import { enGuide } from './guide.en';
import { esGuide } from './guide.es';
import { zhGuide } from './guide.zh';
import type { Locale } from './locale';
import type { GuideContent } from './types';

// Un diccionario completo por idioma. Agregar un idioma = agregar un
// `guide.<locale>.ts` y su entrada aquí (más el locale en `locale.ts`).
export const guides: Record<Locale, GuideContent> = {
  es: esGuide,
  en: enGuide,
  zh: zhGuide,
};
