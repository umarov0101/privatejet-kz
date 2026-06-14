import { createFileRoute } from "@tanstack/react-router";
import { AirportPage } from "@/pages/AirportPage";
import { seo } from "@/lib/site";

const AIRPORT_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Трансфер из аэропорта Астаны NQZ на Hyundai Staria LUXE",
  "provider": { "@type": "LocalBusiness", "name": "Private Jet KZ" },
  "areaServed": { "@type": "City", "name": "Астана" },
  "description": "VIP-трансфер из аэропорта Астаны NQZ с водителем на Hyundai Staria LUXE. Встреча с именной табличкой, отслеживание рейса, ожидание до 60 минут, помощь с багажом. Работаем 24/7.",
  "offers": {
    "@type": "Offer",
    "price": "25000",
    "priceCurrency": "KZT",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "25000",
      "priceCurrency": "KZT",
      "unitText": "поездка",
    },
  },
});

export const Route = createFileRoute("/airport")({
  head: () => {
    const base = seo({
      title: "Трансфер из аэропорта Астаны NQZ — Встреча с табличкой | Private Jet KZ",
      description:
        "VIP-трансфер из аэропорта Астаны (NQZ) на Hyundai Staria LUXE. Водитель встретит с именной табличкой, поможет с багажом. Отслеживаем рейс, ожидание до 60 мин бесплатно. Работаем 24/7. От 25 000 ₸.",
      keywords:
        "трансфер из аэропорта Астана, трансфер аэропорт NQZ, встреча в аэропорту NQZ, встреча с табличкой аэропорт Астана, трансфер NQZ цена, VIP трансфер аэропорт Астана, трансфер из аэропорта Нурсултан, такси из аэропорта Астана, аэропорт NQZ трансфер Hyundai Staria",
      ogTitle: "Трансфер из аэропорта NQZ Астана — Private Jet KZ",
      ogDescription: "Встреча с именной табличкой, отслеживание рейса, Hyundai Staria LUXE. От 25 000 ₸. Работаем 24/7.",
      path: "/airport",
      locale: "ru",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: AIRPORT_JSON_LD }],
    };
  },
  component: AirportPage,
});
