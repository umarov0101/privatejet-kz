import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/pages/FleetPage";
import { seo } from "@/lib/site";

const FLEET_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Hyundai Staria LUXE — аренда с водителем в Астане",
  "description": "VIP-минивэн Hyundai Staria LUXE в топовой комплектации с капитанскими кожаными креслами, панорамным люком и тонировкой. Аренда с водителем для VIP-трансфера по Астане и Казахстану.",
  "brand": { "@type": "Brand", "name": "Hyundai" },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "15000",
    "highPrice": "150000",
    "priceCurrency": "KZT",
    "offerCount": "5",
    "seller": { "@type": "LocalBusiness", "name": "Private Jet KZ" },
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Пассажиры", "value": "до 6" },
    { "@type": "PropertyValue", "name": "Тип кресел", "value": "Капитанские с оттоманками, кожа, подогрев" },
    { "@type": "PropertyValue", "name": "Люк", "value": "Панорамный, 2 ряда" },
    { "@type": "PropertyValue", "name": "Тонировка", "value": "Задние стёкла со шторами" },
    { "@type": "PropertyValue", "name": "Климат", "value": "Многозонный климат-контроль" },
  ],
});

export const Route = createFileRoute("/fleet")({
  head: () => {
    const base = seo({
      title: "Автопарк — Аренда Hyundai Staria LUXE с водителем в Астане | Private Jet KZ",
      description:
        "Флот из 5 одинаковых Hyundai Staria LUXE в топовой комплектации для аренды в Астане. Капитанские кресла, климат-контроль, тонировка. Фото и характеристики автомобиля.",
      keywords:
        "Hyundai Staria LUXE аренда Астана, флот VIP автомобилей Казахстан, минивэн с водителем Астана, капитанские кресла аренда, VIP минивэн Казахстан, аренда Staria Астана цена",
      ogTitle: "Автопарк Hyundai Staria LUXE — Аренда с водителем в Астане | Private Jet KZ",
      ogDescription:
        "5 идентичных Hyundai Staria LUXE для аренды с водителем в Астане. Капитанские кресла, тонировка, климат-контроль.",
      path: "/fleet",
      locale: "ru",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: FLEET_JSON_LD }],
    };
  },
  component: FleetPage,
});
