import { SITE_URL } from "./site";
import { withLocale } from "../i18n/path";
import { LOCALES, type Locale } from "../i18n/dictionaries";
import { allPosts } from "./blog";
import { allDirections } from "../content/directions";

// hreflang-коды (казахский = kk)
const HREFLANG: Record<Locale, string> = { ru: "ru", kz: "kk", en: "en" };

// Дата последнего обновления статических страниц.
const SITE_UPDATED = "2026-06-16";

type PageDef = {
  path: string; // базовый путь без языкового префикса
  changefreq: string;
  /** Приоритет для основной (ru) версии; для kz/en вычитается 0.1. */
  priority: number;
  lastmod: string;
};

const STATIC_PAGES: PageDef[] = [
  { path: "/", changefreq: "weekly", priority: 1.0, lastmod: SITE_UPDATED },
  { path: "/airport", changefreq: "monthly", priority: 0.9, lastmod: SITE_UPDATED },
  { path: "/services", changefreq: "monthly", priority: 0.9, lastmod: SITE_UPDATED },
  { path: "/fleet", changefreq: "monthly", priority: 0.8, lastmod: SITE_UPDATED },
  { path: "/blog", changefreq: "weekly", priority: 0.7, lastmod: SITE_UPDATED },
  { path: "/contact", changefreq: "yearly", priority: 0.7, lastmod: SITE_UPDATED },
];

function altLinks(basePath: string): string {
  const alts = LOCALES.map(
    (l) =>
      `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${SITE_URL}${withLocale(l, basePath)}"/>`,
  );
  alts.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${withLocale("ru", basePath)}"/>`,
  );
  return alts.join("\n");
}

function urlEntry(
  basePath: string,
  locale: Locale,
  lastmod: string,
  changefreq: string,
  priority: number,
): string {
  const loc = `${SITE_URL}${withLocale(locale, basePath)}`;
  const prio = (locale === "ru" ? priority : Math.max(0.1, priority - 0.1)).toFixed(1);
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${prio}</priority>`,
    altLinks(basePath),
    "  </url>",
  ].join("\n");
}

// RU-only страница без hreflang-альтернатив (посадочные направлений).
function urlSimple(path: string, lastmod: string, changefreq: string, priority: string): string {
  return [
    "  <url>",
    `    <loc>${SITE_URL}${path}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

export function buildSitemap(): string {
  const entries: string[] = [];

  for (const page of STATIC_PAGES) {
    for (const locale of LOCALES) {
      entries.push(urlEntry(page.path, locale, page.lastmod, page.changefreq, page.priority));
    }
  }

  for (const post of allPosts()) {
    const lastmod = post.updated ?? post.date;
    for (const locale of LOCALES) {
      entries.push(urlEntry(`/blog/${post.slug}`, locale, lastmod, "monthly", 0.6));
    }
  }

  // Межгородские посадочные (RU, без локалей)
  entries.push(urlSimple("/directions", SITE_UPDATED, "weekly", "0.8"));
  for (const d of allDirections()) {
    entries.push(urlSimple(`/${d.slug}`, SITE_UPDATED, "monthly", "0.8"));
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;
}
