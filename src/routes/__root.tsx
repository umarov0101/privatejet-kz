import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LocaleProvider } from "@/i18n/context";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl gradient-gold-text">404</h1>
        <p className="mt-4 text-foreground/70">Страница не найдена</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 rounded-full bg-gold text-background text-sm">
          На главную
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Что-то пошло не так</h1>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 px-6 py-3 rounded-full bg-gold text-background text-sm"
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}

const SITE_URL = "https://privatejetkz.com";
const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Private Jet KZ",
  "description": "VIP-трансфер с собственным автопарком в Астане на Hyundai Staria LUXE. Встреча делегаций, трансфер из аэропорта NQZ, почасовая аренда, междугородние поездки от 200 ₸/км.",
  "url": SITE_URL,
  "telephone": "+77089380800",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Толе би, 25/1",
    "addressLocality": "Астана",
    "addressRegion": "Акмолинская область",
    "postalCode": "010000",
    "addressCountry": "KZ",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.1801",
    "longitude": "71.4460",
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+77089380800",
    "contactType": "reservations",
    "availableLanguage": ["Russian", "Kazakh", "English"],
  },
  "sameAs": [
    "https://wa.me/77089380800",
    "https://2gis.kz/astana/firm/privatejetkz",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "VIP трансфер Астана",
    "itemListElement": [
      { "@type": "Offer", "name": "VIP трансфер Астана", "price": "25000", "priceCurrency": "KZT" },
      { "@type": "Offer", "name": "Аренда по часам", "price": "15000", "priceCurrency": "KZT" },
      { "@type": "Offer", "name": "Междугородние поездки (Боровое, Караганда)", "price": "200", "priceCurrency": "KZT" },
    ],
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "51.1801", "longitude": "71.4460" },
    "geoRadius": "500000",
  },
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Private Jet KZ — Аренда трансфера в Астане" },
      {
        name: "description",
        content:
          "VIP-трансфер на Hyundai Staria LUXE в Астане. Встреча в аэропорту NQZ, трансфер Астана–Боровое от 200 ₸/км, корпоративный трансфер, аренда минивэна. ул. Толе Би, 25/1. WhatsApp +7 708 938 08 00.",
      },
      {
        name: "keywords",
        content:
          "VIP трансфер Астана, аренда минивэна Астана, встреча в аэропорту NQZ Астана, трансфер Боровое из Астаны, корпоративный трансфер Казахстан, аренда частного джета Астана, частный джет Астана, Hyundai Staria аренда Астана, встреча делегаций Астана, межгород от 100000 тенге, трансфер аэропорт Нурсултан, аренда автомобиля с водителем Астана, бизнес трансфер Астана, Толе би 25/1 Астана, Private Jet KZ, жекеменшік джет жалға алу Астана",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "geo.region", content: "KZ-AKM" },
      { name: "geo.placename", content: "Астана, Казахстан" },
      { name: "geo.position", content: "51.1801;71.4460" },
      { name: "ICBM", content: "51.1801, 71.4460" },
      { name: "language", content: "Russian" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Private Jet KZ" },
      { property: "og:title", content: "Private Jet KZ — Аренда трансфера в Астане" },
      {
        property: "og:description",
        content:
          "Аренда частного джета и VIP-трансфер по Астане и Казахстану. Флот из 5 Hyundai Staria LUXE. Капитанские кресла. Подача вовремя. 10 лет на рынке.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "ru_KZ" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Private Jet KZ — Аренда трансфера в Астане" },
      {
        name: "twitter:description",
        content: "VIP-трансфер и аренда частного джет-минивэна в Астане. Казахстан. WhatsApp +7 708 938 08 00.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON_LD },
      // TODO: замените XXXXXXXX на ваш реальный ID счётчика Яндекс.Метрики
      // Зарегистрируйтесь на metrika.yandex.ru → Добавить счётчик → privatejetkz.com
      // { src: "https://mc.yandex.ru/metrika/tag.js", async: true },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head><HeadContent /></head>
      <body><div className="dark">{children}</div><Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <Header />
        <main className="pt-0">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </LocaleProvider>
    </QueryClientProvider>
  );
}
