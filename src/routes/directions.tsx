import { createFileRoute } from "@tanstack/react-router";
import { DirectionsHubPage } from "@/pages/DirectionsHubPage";
import { seoStandalone } from "@/lib/site";
import { directionsHubBreadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/directions")({
  head: () => {
    const base = seoStandalone({
      title: "Трансфер по направлениям из Астаны | Private Jet KZ",
      description:
        "Междугородние трансферы из Астаны на Hyundai Staria LUXE: Боровое, Караганда, Кокшетау, Омск, Челябинск, Барнаул, Магнитогорск. Цены, время в пути и заказ.",
      keywords:
        "трансфер из астаны, межгород астана, междугородний трансфер астана, заказать трансфер астана",
      path: "/directions",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: directionsHubBreadcrumbLd() }],
    };
  },
  component: DirectionsHubPage,
});
