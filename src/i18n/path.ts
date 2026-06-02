import type { Locale } from "./dictionaries";

// Определяем язык по URL: /kz/... → kz, /en/... → en, иначе ru
export function localeFromPath(pathname: string): Locale {
  if (pathname === "/kz" || pathname.startsWith("/kz/")) return "kz";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "ru";
}

// Убираем языковой префикс: /kz/services → /services, /en → /
export function stripLocale(pathname: string): string {
  if (pathname === "/kz" || pathname === "/en") return "/";
  if (pathname.startsWith("/kz/") || pathname.startsWith("/en/")) {
    return pathname.slice(3) || "/";
  }
  return pathname || "/";
}

// Добавляем языковой префикс к базовому пути: (kz, /services) → /kz/services, (ru, /services) → /services
export function withLocale(locale: Locale, basePath: string): string {
  const base = basePath.startsWith("/") ? basePath : `/${basePath}`;
  if (locale === "ru") return base;
  return base === "/" ? `/${locale}` : `/${locale}${base}`;
}
