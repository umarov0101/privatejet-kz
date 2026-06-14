import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";
import { seo } from "@/lib/site";

const SERVICES_JSON_LD = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "VIP трансфер по Астане",
    "provider": { "@type": "LocalBusiness", "name": "Private Jet KZ" },
    "areaServed": { "@type": "City", "name": "Астана" },
    "offers": {
      "@type": "Offer",
      "price": "25000",
      "priceCurrency": "KZT",
      "priceSpecification": { "@type": "UnitPriceSpecification", "price": "25000", "priceCurrency": "KZT", "unitText": "поездка" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Почасовая аренда Hyundai Staria LUXE с водителем",
    "provider": { "@type": "LocalBusiness", "name": "Private Jet KZ" },
    "areaServed": { "@type": "City", "name": "Астана" },
    "offers": {
      "@type": "Offer",
      "price": "15000",
      "priceCurrency": "KZT",
      "priceSpecification": { "@type": "UnitPriceSpecification", "price": "15000", "priceCurrency": "KZT", "unitText": "час" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Аренда Hyundai Staria LUXE на полный день",
    "provider": { "@type": "LocalBusiness", "name": "Private Jet KZ" },
    "areaServed": { "@type": "City", "name": "Астана" },
    "offers": { "@type": "Offer", "price": "150000", "priceCurrency": "KZT" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Межгородной VIP-трансфер из Астаны",
    "provider": { "@type": "LocalBusiness", "name": "Private Jet KZ" },
    "areaServed": { "@type": "Country", "name": "Казахстан" },
    "offers": {
      "@type": "Offer",
      "price": "200",
      "priceCurrency": "KZT",
      "priceSpecification": { "@type": "UnitPriceSpecification", "price": "200", "priceCurrency": "KZT", "unitText": "км" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Аренда Hyundai Staria без водителя в Астане (8–11 мест)",
    "provider": { "@type": "LocalBusiness", "name": "Private Jet KZ" },
    "areaServed": { "@type": "City", "name": "Астана" },
    "offers": {
      "@type": "Offer",
      "price": "69000",
      "priceCurrency": "KZT",
      "priceSpecification": { "@type": "UnitPriceSpecification", "price": "69000", "priceCurrency": "KZT", "unitText": "сутки" },
    },
  },
]);

export const Route = createFileRoute("/services")({
  head: () => {
    const base = seo({
      title: "Услуги VIP-трансфера в Астане — Аренда Hyundai Staria LUXE | Private Jet KZ",
      description:
        "VIP-трансфер в Астане на Hyundai Staria LUXE: трансфер из аэропорта NQZ, почасовая аренда, аренда на полный день, межгород, встреча делегаций. Цены от 15 000 тенге.",
      keywords:
        "VIP трансфер Астана цена, почасовая аренда авто с водителем Астана, встреча делегаций Астана, трансфер из аэропорта NQZ, аренда минивэна на день Казахстан, межгород VIP трансфер Казахстан, корпоративный трансфер Астана, Hyundai Staria аренда Астана, аренда авто без водителя Астана, прокат Hyundai Staria Астана, аренда минивэна без водителя Астана",
      ogTitle: "Услуги VIP-трансфера в Астане — Hyundai Staria LUXE | Private Jet KZ",
      ogDescription:
        "VIP-трансфер, почасовая аренда, встреча делегаций в Астане. Hyundai Staria LUXE. Прозрачные цены.",
      path: "/services",
      locale: "ru",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: SERVICES_JSON_LD }],
    };
  },
  component: ServicesPage,
});
