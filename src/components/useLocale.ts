import { useSyncExternalStore } from "react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from "@/content/locale";

// El HTML estático se prerenderiza en `DEFAULT_LOCALE`, así que el idioma real
// sólo puede resolverse en el cliente. `useSyncExternalStore` con un snapshot
// de servidor distinto es la vía soportada para eso: React hidrata con el valor
// del servidor y vuelve a renderizar con el del cliente, sin desajuste.
let current: Locale | null = null;
const listeners = new Set<() => void>();

function storedLocale(): Locale | null {
  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(saved) ? saved : null;
  } catch {
    // Safari en navegación privada puede lanzar al tocar localStorage.
    return null;
  }
}

function browserLocale(): Locale {
  // Defensivo a propósito: esto corre dentro del render, así que una excepción
  // aquí dejaría la guía en blanco.
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  // `navigator.languages` viene ordenado por preferencia, así que gana la
  // primera coincidencia: con ["en-US", "es"] el huésped abre en inglés.
  // Las variantes se reducen a la base (`zh-TW` y `zh-CN` caen en `zh`).
  for (const tag of tags) {
    if (typeof tag !== "string") continue;
    const base = tag.toLowerCase().split("-")[0];
    const match = LOCALES.find((locale) => locale === base);
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): Locale {
  // Se resuelve una vez y se cachea: `getSnapshot` debe ser estable entre
  // renders mientras nadie cambie el idioma.
  current ??= storedLocale() ?? browserLocale();
  return current;
}

const getServerSnapshot = (): Locale => DEFAULT_LOCALE;

export function setLocale(next: Locale) {
  if (getSnapshot() === next) return;
  current = next;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  } catch {
    // Sin persistencia la elección vale sólo para esta visita.
  }
  for (const listener of listeners) listener();
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
