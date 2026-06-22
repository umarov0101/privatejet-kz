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
  /** Абсолютный URL для og:image / twitter:image (переопределяет дефолт из __root). */
  ogImage?: string;
  /** og:type страницы (по умолчанию "website"; для статей — "article"). */
  ogType?: string;
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
  ogImage,
  ogType,
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
    ...(ogType ? [{ property: "og:type", content: ogType }] : []),
    // Per-page Twitter title/description (переопределяют общие из __root)
    { name: "twitter:title", content: ogTitle ?? title },
    { name: "twitter:description", content: ogDescription ?? description },
    ...(ogImage
      ? [
          { property: "og:image", content: ogImage },
          { name: "twitter:image", content: ogImage },
        ]
      : []),
  ];

  const links = [
    { rel: "canonical", href: url },
    ...LOCALES.map((l) => ({
      rel: "alternate",
      hreflang: HREFLANG[l],
      href: `${SITE_URL}${withLocale(l, path)}`,
    })),
    {
      rel: "alternate",
      hreflang: "x-default",
      href: `${SITE_URL}${withLocale("ru", path)}`,
    },
  ];

  return { meta, links };
}

type SeoStandaloneArgs = {
  title: string;
  description: string;
  keywords?: string;
  /** Полный путь от корня, напр. "/transfer-astana-omsk". */
  path: string;
  ogImage?: string;
};

/**
 * SEO для одноязычных (RU) страниц без hreflang-альтернатив — посадочные
 * под Яндекс на корне (нет kz/en-версий, поэтому self-canonical без alternate).
 */
export function seoStandalone({ title, description, keywords, path, ogImage }: SeoStandaloneArgs) {
  const url = `${SITE_URL}${path}`;
  const meta = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:locale", content: "ru_RU" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(ogImage
      ? [
          { property: "og:image", content: ogImage },
          { name: "twitter:image", content: ogImage },
        ]
      : []),
  ];
  const links = [{ rel: "canonical", href: url }];
  return { meta, links };
}
