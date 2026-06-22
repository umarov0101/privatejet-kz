import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "VIP-трансфер в Астане на Hyundai Staria | Private Jet KZ",
      description:
        "VIP-трансфер на Hyundai Staria LUXE в Астане и по всему Казахстану. Трансфер из аэропорта NQZ, встреча делегаций, почасовая аренда, междугородние поездки. 10 лет опыта. +7 708 938 08 00.",
      keywords:
        "VIP трансфер Астана, аренда минивэна Астана, Hyundai Staria LUXE аренда, трансфер аэропорт NQZ Астана, встреча делегаций Астана, почасовая аренда авто Астана, аренда автомобиля с водителем Астана, бизнес трансфер Астана, междугородние поездки Казахстан, трансфер Боровое из Астаны",
      ogTitle: "Private Jet KZ — Аренда трансфера в Астане",
      ogDescription:
        "VIP-трансфер на Hyundai Staria LUXE в Астане. Аэропорт, делегации, почасовая аренда. Подача вовремя. Казахстан.",
      path: "/",
      locale: "ru",
    }),
  component: HomePage,
});
