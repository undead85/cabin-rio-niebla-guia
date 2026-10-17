"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import AppliancesScreen from "@/components/screens/AppliancesScreen";
import CheckinScreen from "@/components/screens/CheckinScreen";
import CheckoutScreen from "@/components/screens/CheckoutScreen";
import ContactScreen from "@/components/screens/ContactScreen";
import HomeScreen from "@/components/screens/HomeScreen";
import LocationScreen from "@/components/screens/LocationScreen";
import PlaceListScreen from "@/components/screens/PlaceListScreen";
import RulesScreen from "@/components/screens/RulesScreen";
import WifiScreen from "@/components/screens/WifiScreen";
import { useLocale } from "@/components/useLocale";
import { guides } from "@/content/guide";
import { LOCALE_TAGS } from "@/content/locale";
import { SCREEN_KEYS, type ScreenKey } from "@/content/types";

function screenFromHash(): ScreenKey {
  const hash = window.location.hash.slice(1);
  return (SCREEN_KEYS as readonly string[]).includes(hash) ? (hash as ScreenKey) : "home";
}

function subscribeToHistory(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

const getServerScreen = (): ScreenKey => "home";

export default function GuestGuide() {
  const screen = useSyncExternalStore(subscribeToHistory, screenFromHash, getServerScreen);
  const locale = useLocale();
  const guide = guides[locale];
  const paneRef = useRef<HTMLDivElement>(null);
  const skipFocus = useRef(true);

  useEffect(() => {
    const onPopState = () => window.scrollTo(0, 0);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // El HTML estático sale en el idioma por defecto; al cambiarlo hay que poner
  // al día el documento para lectores de pantalla y la pestaña.
  useEffect(() => {
    document.documentElement.lang = LOCALE_TAGS[locale];
    document.title = guide.docTitle;
  }, [locale, guide.docTitle]);

  useEffect(() => {
    if (skipFocus.current) {
      skipFocus.current = false;
      return;
    }
    paneRef.current?.focus({ preventScroll: true });
  }, [screen]);

  function go(next: ScreenKey) {
    window.history.pushState({ guide: true }, "", "#" + next);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  function goHome() {
    if (window.history.state?.guide) {
      window.history.back();
    } else {
      window.history.replaceState(null, "", window.location.pathname);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }

  return (
    <div
      data-locale={locale}
      className="relative mx-auto min-h-screen max-w-[440px] overflow-hidden bg-background shadow-frame"
    >
      {/* `key` sólo depende de la pantalla: al cambiar idioma el árbol se
          actualiza en sitio y el foco se queda en el selector. */}
      <div
        key={screen}
        ref={paneRef}
        tabIndex={-1}
        className="outline-none motion-safe:animate-[rnfade_0.3s_ease_both]"
      >
        {screen === "home" && (
          <HomeScreen content={guide.home} categories={guide.categories} onNavigate={go} />
        )}
        {screen === "wifi" && <WifiScreen content={guide.wifi} onBack={goHome} />}
        {screen === "checkin" && <CheckinScreen content={guide.checkin} onBack={goHome} />}
        {screen === "rules" && <RulesScreen content={guide.rules} onBack={goHome} />}
        {screen === "location" && <LocationScreen content={guide.location} onBack={goHome} />}
        {screen === "appliances" && (
          <AppliancesScreen content={guide.appliances} onBack={goHome} />
        )}
        {screen === "markets" && <PlaceListScreen content={guide.markets} onBack={goHome} />}
        {screen === "food" && <PlaceListScreen content={guide.food} onBack={goHome} />}
        {screen === "explore" && <PlaceListScreen content={guide.explore} onBack={goHome} />}
        {screen === "checkout" && <CheckoutScreen content={guide.checkout} onBack={goHome} />}
        {screen === "contact" && <ContactScreen content={guide.contact} onBack={goHome} />}
      </div>
      <footer className="-mt-4 pb-6 text-center text-[9px] font-semibold tracking-[0.3em] text-faint">
        v{process.env.NEXT_PUBLIC_APP_VERSION}
      </footer>
    </div>
  );
}
