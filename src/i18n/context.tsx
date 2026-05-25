import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionaries, LOCALES, type Dict, type Locale } from "./dictionaries";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LocaleContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "pj_locale";

function detectLocale(): Locale {
  // 1. Проверяем сохранённый язык
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && LOCALES.includes(saved)) return saved;
  } catch { }

  // 2. Определяем язык браузера
  const browserLangs = navigator.languages ?? [navigator.language];
  for (const lang of browserLangs) {
    const code = lang.toLowerCase();
    if (code.startsWith("kk") || code.startsWith("kz")) return "kz";
    if (code.startsWith("en")) return "en";
    if (code.startsWith("ru")) return "ru";
  }

  // 3. По умолчанию русский
  return "ru";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "kz" ? "kk" : locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch { }
  };

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}