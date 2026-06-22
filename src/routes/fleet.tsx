import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/pages/FleetPage";
import { seo } from "@/lib/site";
import { fleetProductLd, breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/fleet")({
  head: () => {
    const base = seo({
      title: "Автопарк Hyundai Staria LUXE в Астане | Private Jet KZ",
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
      scripts: [
        { type: "application/ld+json", children: fleetProductLd("ru") },
        { type: "application/ld+json", children: breadcrumbLd("ru", "fleet") },
      ],
    };
  },
  component: FleetPage,
});
