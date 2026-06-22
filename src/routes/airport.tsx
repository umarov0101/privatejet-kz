import { createFileRoute } from "@tanstack/react-router";
import { AirportPage } from "@/pages/AirportPage";
import { seo } from "@/lib/site";
import { airportServiceLd, breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/airport")({
  head: () => {
    const base = seo({
      title: "Трансфер из аэропорта NQZ Астана — встреча | Private Jet KZ",
      description:
        "VIP-трансфер из аэропорта Астаны (NQZ) на Hyundai Staria LUXE. Водитель встретит с именной табличкой, поможет с багажом. Отслеживаем рейс, ожидание до 60 мин бесплатно. Работаем 24/7. От 25 000 ₸.",
      keywords:
        "трансфер из аэропорта Астана, трансфер аэропорт NQZ, встреча в аэропорту NQZ, встреча с табличкой аэропорт Астана, трансфер NQZ цена, VIP трансфер аэропорт Астана, трансфер из аэропорта Нурсултан, такси из аэропорта Астана, аэропорт NQZ трансфер Hyundai Staria",
      ogTitle: "Трансфер из аэропорта NQZ Астана — Private Jet KZ",
      ogDescription:
        "Встреча с именной табличкой, отслеживание рейса, Hyundai Staria LUXE. От 25 000 ₸. Работаем 24/7.",
      path: "/airport",
      locale: "ru",
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: airportServiceLd("ru") },
        { type: "application/ld+json", children: breadcrumbLd("ru", "airport") },
      ],
    };
  },
  component: AirportPage,
});
