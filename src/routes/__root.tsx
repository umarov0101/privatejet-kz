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
import heroImg from "@/assets/hero-staria-astana.webp";
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

const SITE_URL = "https://privatejet.kz";
const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

// Яндекс.Метрика — счётчик privatejet.kz
const METRIKA_ID = 109432829;
const METRIKA_SNIPPET = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}","ym");ym(${METRIKA_ID},"init",{ssr:true,webvisor:true,clickmap:true,accurateTrackBounce:true,trackLinks:true});`;

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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "6",
    "bestRating": "5",
    "worstRating": "5",
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Айгерим Сагатова" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Заказывали Staria на 3 дня в Боровое со съёмочной группой. Водитель Ербол приехал минута в минуту, помог с оборудованием, дорогой — тишина, можно было работать в ноутбуке. По возвращении машину подали к самому подъезду отеля. Уровень — как у частного джета, только на земле.",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Дмитрий Власов" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Нужно было доехать до Омска без пересадок и нервов. Согласовали маршрут в WhatsApp за 10 минут. Чистый салон, две остановки в пути по моему запросу. Обратно — та же машина, тот же водитель. Большая редкость в Казахстане.",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Алихан Бектуров" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Прилетаю в Астану 2-3 раза в месяц, всегда заказываю Private Jet KZ. Машина уже стоит у выхода NQZ с табличкой, бутылка воды в держателе, маршрут в офис согласован заранее. За 2 года — ни одного опоздания.",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Олег Краснов" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Принимали партнёров из ОАЭ — нужны были 3 одинаковые машины. Получили ровно то, что обещали: 3 чёрные Staria LUXE, вежливые водители, координатор на связи. Гости были в восторге от салона.",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Жанна Турлыбекова" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Заказала на полный день: 4 встречи, обед, ужин. Водитель Санжар знал город идеально, между встречами в машине было удобно работать и созваниваться. Ни одной задержки. Оплата прозрачная, без сюрпризов.",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Тимур Ахметов" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Брал две Staria на свадьбу для родителей и почётных гостей. Машины подъехали украшенные по нашему запросу, водители вежливые, помогли пожилым гостям сесть. Фото на фоне авто — просто огонь. Спасибо команде!",
    },
  ],
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Private Jet KZ — Аренда трансфера в Астане" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "geo.region", content: "KZ-AKM" },
      { name: "geo.placename", content: "Астана, Казахстан" },
      { name: "geo.position", content: "51.1801;71.4460" },
      { name: "ICBM", content: "51.1801, 71.4460" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Private Jet KZ" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Private Jet KZ — Аренда трансфера в Астане" },
      {
        name: "twitter:description",
        content: "VIP-трансфер на Hyundai Staria LUXE в Астане. Трансфер из аэропорта NQZ, встреча делегаций, почасовая аренда. WhatsApp +7 708 938 08 00.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "preload", href: heroImg, as: "image", type: "image/webp" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON_LD },
      { children: METRIKA_SNIPPET },
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
