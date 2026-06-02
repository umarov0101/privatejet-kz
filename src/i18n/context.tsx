import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { dictionaries, type Dict, type Locale } from "./dictionaries";
import { localeFromPath, stripLocale, withLocale } from "./path";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // Язык берём из URL — у каждого языка свой адрес (/kz, /en), русский на корне
  const locale = localeFromPath(pathname);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "kz" ? "kk" : locale;
    }
  }, [locale]);

  // Переключение языка = переход на тот же раздел в другом языковом разделе
  const setLocale = (l: Locale) => {
    const base = stripLocale(pathname);
    navigate({ to: withLocale(l, base) });
  };

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, pathname],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}