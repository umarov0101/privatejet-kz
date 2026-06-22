import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { localeFromPath } from "@/i18n/path";
import { ORGANIZATION_GRAPH } from "@/lib/schema";

import appCss from "../styles.css?url";
import heroImg from "@/assets/hero-staria-astana.webp";
import hero768 from "@/assets/hero-staria-astana-768.webp";
import hero1152 from "@/assets/hero-staria-astana-1152.webp";
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
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 rounded-full bg-gold text-background text-sm"
        >
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
          onClick={() => {
            router.invalidate();
            reset();
          }}
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

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Meta (Facebook) Pixel — для ретаргетинга/таргета
const META_PIXEL_ID = "1726212895062213";
const META_PIXEL_SNIPPET = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;

const JSON_LD = ORGANIZATION_GRAPH;

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
        content:
          "VIP-трансфер на Hyundai Staria LUXE в Астане. Трансфер из аэропорта NQZ, встреча делегаций, почасовая аренда. WhatsApp +7 708 938 08 00.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: hero768,
        imagesrcset: `${hero768} 768w, ${hero1152} 1152w, ${heroImg} 1536w`,
        imagesizes: "100vw",
        type: "image/webp",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON_LD },
      { children: METRIKA_SNIPPET },
      { children: META_PIXEL_SNIPPET },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const lang = locale === "kz" ? "kk" : locale;
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <div className="dark">{children}</div>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Meta Pixel: клики по WhatsApp = Lead, по телефону = Contact (делегирование, ловит все ссылки)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      const a = el?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const fbq = window.fbq;
      if (typeof fbq !== "function") return;
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        fbq("track", "Lead", { content_name: "WhatsApp" });
      } else if (href.startsWith("tel:")) {
        fbq("track", "Contact", { content_name: "Phone" });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

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
