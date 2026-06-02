import { withLocale } from "@/i18n/path";
import { LOCALES, type Locale } from "@/i18n/dictionaries";

// Основной домен сайта (на нём отдаётся privatejet.kz через Cloudflare)
export const SITE_URL = "https://privatejet.kz";

// og:locale для соцсетей
const OG_LOCALE: Record<Locale, string> = {
  ru: "ru_RU",
  kz: "kk_KZ",
  en: "en_US",
};

// hreflang-коды для поисковиков (казахский = kk)
const HREFLANG: Record<Locale, string> = {
  ru: "ru",
  kz: "kk",
  en: "en",
};

type SeoArgs = {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Базовый путь без языкового префикса, например "/" или "/services" */
  path: string;
  locale?: Locale;
};

/**
 * Формирует meta и links для страницы: title/description/og + canonical и
 * hreflang-альтернативы для всех языков. Глобальные теги (charset, geo, JSON-LD,
 * иконки, twitter:card) задаются в __root.tsx.
 */
export function seo({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  path,
  locale = "ru",
}: SeoArgs) {
  const url = `${SITE_URL}${withLocale(locale, path)}`;

  const meta = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { property: "og:title", content: ogTitle ?? title },
    { property: "og:description", content: ogDescription ?? description },
    { property: "og:url", content: url },
    { property: "og:locale", content: OG_LOCALE[locale] },
  ];

  const links = [
    { rel: "canonical", href: url },
    ...LOCALES.map((l) => ({
      rel: "alternate",
      hrefLang: HREFLANG[l],
      href: `${SITE_URL}${withLocale(l, path)}`,
    })),
    {
      rel: "alternate",
      hrefLang: "x-default",
      href: `${SITE_URL}${withLocale("ru", path)}`,
    },
  ];

  return { meta, links };
}
