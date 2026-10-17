import { useLocale, setLocale } from "@/components/useLocale";
import { guides } from "@/content/guide";
import { LOCALES, LOCALE_LABELS, LOCALE_TAGS } from "@/content/locale";

// Chrome de la app, no contenido: lee el idioma del store en vez de recibirlo
// por props, para poder colgarse de cualquier cabecera.
export default function LocaleToggle() {
  const locale = useLocale();

  return (
    <div
      role="group"
      aria-label={guides[locale].ui.languageLabel}
      className="flex flex-none items-center gap-px rounded-full bg-cream/12 p-px"
    >
      {LOCALES.map((option) => {
        const active = option === locale;
        return (
          <button
            key={option}
            type="button"
            lang={LOCALE_TAGS[option]}
            aria-pressed={active}
            onClick={() => setLocale(option)}
            className={`cursor-pointer appearance-none rounded-full px-[11px] py-[5px] text-[11px] font-bold tracking-[0.06em] ${
              active ? "bg-cream text-primary" : "text-accent-light"
            }`}
          >
            {LOCALE_LABELS[option]}
          </button>
        );
      })}
    </div>
  );
}
