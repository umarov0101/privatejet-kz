import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";
import { seo } from "@/lib/site";
import { servicesLd, breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/services")({
  head: () => {
    const base = seo({
      title: "Услуги VIP-трансфера Hyundai Staria | Private Jet KZ",
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
      scripts: [
        { type: "application/ld+json", children: servicesLd("ru") },
        { type: "application/ld+json", children: breadcrumbLd("ru", "services") },
      ],
    };
  },
  component: ServicesPage,
});
