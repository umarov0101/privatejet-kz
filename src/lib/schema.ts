import { SITE_URL } from "./site";
import { withLocale } from "@/i18n/path";
import type { Locale } from "@/i18n/dictionaries";
import type { Post } from "./blog";
import type { Direction } from "@/content/directions";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/apple-touch-icon.png`;
const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

const SAME_AS = [
  "https://wa.me/77089380800",
  "https://2gis.kz/astana/firm/privatejetkz",
  "https://www.instagram.com/private_jet.kz",
  "https://www.youtube.com/channel/UCAAx3YHdlbb7GMpiIXscRwA",
];

// Глобальный @graph: Organization + WebSite + LocalBusiness (со связанными @id).
// Отдаётся на всех страницах из __root.tsx.
export const ORGANIZATION_GRAPH = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Private Jet KZ",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO_URL },
      image: OG_IMAGE,
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Private Jet KZ",
      publisher: { "@id": ORG_ID },
      inLanguage: ["ru", "kk", "en"],
    },
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "Private Jet KZ",
      description:
        "VIP-трансфер с собственным автопарком в Астане на Hyundai Staria LUXE. Встреча делегаций, трансфер из аэропорта NQZ, почасовая аренда, междугородние поездки от 200 ₸/км.",
      url: SITE_URL,
      image: OG_IMAGE,
      telephone: "+77089380800",
      priceRange: "$$$$",
      parentOrganization: { "@id": ORG_ID },
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Толе би, 25/1",
        addressLocality: "Астана",
        addressRegion: "Акмолинская область",
        postalCode: "010000",
        addressCountry: "KZ",
      },
      geo: { "@type": "GeoCoordinates", latitude: "51.1801", longitude: "71.4460" },
      openingHours: "Mo-Su 00:00-23:59",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+77089380800",
        contactType: "reservations",
        availableLanguage: ["Russian", "Kazakh", "English"],
      },
      sameAs: SAME_AS,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "VIP трансфер Астана",
        itemListElement: [
          { "@type": "Offer", name: "VIP трансфер Астана", price: "25000", priceCurrency: "KZT" },
          {
            "@type": "Offer",
            name: "Аренда по часам (мин. 3 часа)",
            price: "15000",
            priceCurrency: "KZT",
          },
          {
            "@type": "Offer",
            name: "Аренда на полный день (12 часов)",
            price: "150000",
            priceCurrency: "KZT",
          },
          {
            "@type": "Offer",
            name: "Аренда Hyundai Staria без водителя (сутки)",
            price: "80000",
            priceCurrency: "KZT",
          },
          {
            "@type": "Offer",
            name: "Междугородние поездки (Боровое, Караганда)",
            price: "200",
            priceCurrency: "KZT",
          },
          { "@type": "Offer", name: "Встреча делегаций (от 2 машин)", priceCurrency: "KZT" },
        ],
      },
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: "51.1801", longitude: "71.4460" },
        geoRadius: "500000",
      },
    },
  ],
});

// ---------- Breadcrumbs ----------

export type PageKey = "airport" | "services" | "fleet" | "contact";

const HOME_LABEL: Record<Locale, string> = { ru: "Главная", kz: "Басты бет", en: "Home" };

const PAGE_LABEL: Record<PageKey, Record<Locale, string>> = {
  airport: { ru: "Трансфер из аэропорта", kz: "Әуежайдан трансфер", en: "Airport Transfer" },
  services: { ru: "Услуги", kz: "Қызметтер", en: "Services" },
  fleet: { ru: "Автопарк", kz: "Автопарк", en: "Fleet" },
  contact: { ru: "Контакты", kz: "Байланыс", en: "Contact" },
};

export function breadcrumbLd(locale: Locale, page: PageKey): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: HOME_LABEL[locale],
        item: `${SITE_URL}${withLocale(locale, "/")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: PAGE_LABEL[page][locale],
        item: `${SITE_URL}${withLocale(locale, `/${page}`)}`,
      },
    ],
  });
}

// ---------- Service / Product (локализованные) ----------

const provider = { "@type": "LocalBusiness", "@id": BUSINESS_ID, name: "Private Jet KZ" };

const cityArea: Record<Locale, string> = { ru: "Астана", kz: "Астана", en: "Astana" };
const countryArea: Record<Locale, string> = { ru: "Казахстан", kz: "Қазақстан", en: "Kazakhstan" };

const T = {
  airport: {
    name: {
      ru: "Трансфер из аэропорта Астаны NQZ на Hyundai Staria LUXE",
      kz: "Астана NQZ әуежайынан Hyundai Staria LUXE трансфері",
      en: "Astana NQZ airport transfer in Hyundai Staria LUXE",
    },
    desc: {
      ru: "VIP-трансфер из аэропорта Астаны NQZ с водителем на Hyundai Staria LUXE. Встреча с именной табличкой, отслеживание рейса, ожидание до 60 минут, помощь с багажом. Работаем 24/7.",
      kz: "Астана NQZ әуежайынан жүргізушімен Hyundai Staria LUXE VIP трансфер. Атыңыздағы тақтайшамен қарсы алу, рейсті бақылау, 60 минутқа дейін күту, багажға көмек. 24/7.",
      en: "VIP transfer from Astana NQZ airport with a driver in Hyundai Staria LUXE. Name-board meet & greet, flight tracking, up to 60 min waiting, luggage help. Open 24/7.",
    },
    unit: { ru: "поездка", kz: "сапар", en: "trip" },
  },
  trip: {
    name: {
      ru: "VIP трансфер по Астане",
      kz: "Астана бойынша VIP трансфер",
      en: "VIP transfer in Astana",
    },
    unit: { ru: "поездка", kz: "сапар", en: "trip" },
  },
  hourly: {
    name: {
      ru: "Почасовая аренда Hyundai Staria LUXE с водителем",
      kz: "Hyundai Staria LUXE сағаттық жүргізушімен жалдау",
      en: "Hourly Hyundai Staria LUXE chauffeur hire",
    },
    unit: { ru: "час", kz: "сағат", en: "hour" },
  },
  fullday: {
    name: {
      ru: "Аренда Hyundai Staria LUXE на полный день",
      kz: "Hyundai Staria LUXE толық күнге жалдау",
      en: "Full-day Hyundai Staria LUXE hire",
    },
  },
  intercity: {
    name: {
      ru: "Межгородной VIP-трансфер из Астаны",
      kz: "Астанадан қалааралық VIP трансфер",
      en: "Intercity VIP transfer from Astana",
    },
    unit: { ru: "км", kz: "км", en: "km" },
  },
  selfdrive: {
    name: {
      ru: "Аренда Hyundai Staria без водителя в Астане (8–11 мест)",
      kz: "Астанада Hyundai Staria жүргізушісіз жалдау (8–11 орын)",
      en: "Hyundai Staria self-drive rental in Astana (8–11 seats)",
    },
    unit: { ru: "сутки", kz: "тәулік", en: "day" },
  },
} as const;

function service(
  locale: Locale,
  name: string,
  area: "city" | "country",
  price: string,
  unit?: string,
) {
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    price,
    priceCurrency: "KZT",
  };
  if (unit) {
    offer.priceSpecification = {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: "KZT",
      unitText: unit,
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    provider,
    areaServed: {
      "@type": area === "city" ? "City" : "Country",
      name: (area === "city" ? cityArea : countryArea)[locale],
    },
    offers: offer,
  };
}

export function airportServiceLd(locale: Locale): string {
  return JSON.stringify({
    ...service(locale, T.airport.name[locale], "city", "25000", T.airport.unit[locale]),
    description: T.airport.desc[locale],
  });
}

export function servicesLd(locale: Locale): string {
  return JSON.stringify([
    service(locale, T.trip.name[locale], "city", "25000", T.trip.unit[locale]),
    service(locale, T.hourly.name[locale], "city", "15000", T.hourly.unit[locale]),
    service(locale, T.fullday.name[locale], "city", "150000"),
    service(locale, T.intercity.name[locale], "country", "200", T.intercity.unit[locale]),
    service(locale, T.selfdrive.name[locale], "city", "80000", T.selfdrive.unit[locale]),
  ]);
}

const FLEET = {
  name: {
    ru: "Hyundai Staria LUXE — аренда с водителем в Астане",
    kz: "Hyundai Staria LUXE — Астанада жүргізушімен жалдау",
    en: "Hyundai Staria LUXE — chauffeur hire in Astana",
  },
  desc: {
    ru: "VIP-минивэн Hyundai Staria LUXE в топовой комплектации с капитанскими кожаными креслами, панорамным люком и тонировкой. Аренда с водителем для VIP-трансфера по Астане и Казахстану.",
    kz: "Топ жинақтағы VIP Hyundai Staria LUXE минивэні: капитан былғары кресілері, панорамалық люк, тонировка. Астана мен Қазақстан бойынша VIP трансфер үшін жүргізушімен жалдау.",
    en: "Top-trim VIP Hyundai Staria LUXE minivan with captain's leather seats, panoramic roof and tint. Chauffeur hire for VIP transfer across Astana and Kazakhstan.",
  },
  props: {
    ru: [
      ["Пассажиры", "до 6"],
      ["Тип кресел", "Капитанские с оттоманками, кожа, подогрев"],
      ["Люк", "Панорамный, 2 ряда"],
      ["Тонировка", "Задние стёкла со шторами"],
      ["Климат", "Многозонный климат-контроль"],
    ],
    kz: [
      ["Жолаушылар", "6-ға дейін"],
      ["Кресло түрі", "Оттоманкасы бар капитан, былғары, жылыту"],
      ["Люк", "Панорамалық, 2 қатар"],
      ["Тонировка", "Артқы әйнектер перделермен"],
      ["Климат", "Көп аймақты климат-бақылау"],
    ],
    en: [
      ["Passengers", "up to 6"],
      ["Seats", "Captain's with ottomans, leather, heated"],
      ["Roof", "Panoramic, 2 rows"],
      ["Tint", "Rear windows with curtains"],
      ["Climate", "Multi-zone climate control"],
    ],
  },
} as const;

export function fleetProductLd(locale: Locale): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: FLEET.name[locale],
    description: FLEET.desc[locale],
    image: OG_IMAGE,
    brand: { "@type": "Brand", name: "Hyundai" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "15000",
      highPrice: "150000",
      priceCurrency: "KZT",
      offerCount: "5",
      seller: { "@type": "LocalBusiness", "@id": BUSINESS_ID, name: "Private Jet KZ" },
    },
    additionalProperty: FLEET.props[locale].map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    })),
  });
}

// ---------- Blog ----------

const BLOG_LABEL: Record<Locale, string> = { ru: "Блог", kz: "Блог", en: "Blog" };

function crumb(locale: Locale, name: string, path: string) {
  return { name, item: `${SITE_URL}${withLocale(locale, path)}` };
}

function crumbsLd(locale: Locale, items: { name: string; item: string }[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  });
}

export function blogIndexBreadcrumbLd(locale: Locale): string {
  return crumbsLd(locale, [
    crumb(locale, HOME_LABEL[locale], "/"),
    crumb(locale, BLOG_LABEL[locale], "/blog"),
  ]);
}

export function blogPostBreadcrumbLd(locale: Locale, slug: string, title: string): string {
  return crumbsLd(locale, [
    crumb(locale, HOME_LABEL[locale], "/"),
    crumb(locale, BLOG_LABEL[locale], "/blog"),
    crumb(locale, title, `/blog/${slug}`),
  ]);
}

export function blogPostingLd(locale: Locale, post: Post): string {
  const c = post.t[locale];
  const url = `${SITE_URL}${withLocale(locale, `/blog/${post.slug}`)}`;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: c.title,
    description: c.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: `${post.date}T09:00:00+05:00`,
    dateModified: `${post.updated ?? post.date}T09:00:00+05:00`,
    inLanguage: locale === "kz" ? "kk" : locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  });
}

export function faqPageLd(items: { q: string; a: string }[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

// ---------- Межгородские направления (RU посадочные) ----------

const DIRECTIONS_LABEL = "Трансфер по направлениям";

export function directionServiceLd(dir: Direction): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Трансфер Астана — ${dir.city}`,
    serviceType: "Междугородний трансфер с водителем",
    provider: { "@type": "LocalBusiness", "@id": BUSINESS_ID, name: "Private Jet KZ" },
    areaServed: [
      { "@type": "City", name: "Астана" },
      { "@type": "City", name: dir.city },
    ],
    description: dir.description,
    offers: {
      "@type": "Offer",
      price: "200",
      priceCurrency: "KZT",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "200",
        priceCurrency: "KZT",
        unitText: "км",
      },
      url: `${SITE_URL}/${dir.slug}`,
    },
  });
}

export function directionBreadcrumbLd(dir: Direction): string {
  return crumbsLd("ru", [
    crumb("ru", HOME_LABEL.ru, "/"),
    { name: DIRECTIONS_LABEL, item: `${SITE_URL}/directions` },
    { name: `Астана — ${dir.city}`, item: `${SITE_URL}/${dir.slug}` },
  ]);
}

export function directionsHubBreadcrumbLd(): string {
  return crumbsLd("ru", [
    crumb("ru", HOME_LABEL.ru, "/"),
    { name: DIRECTIONS_LABEL, item: `${SITE_URL}/directions` },
  ]);
}
