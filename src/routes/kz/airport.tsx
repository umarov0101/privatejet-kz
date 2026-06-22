import { createFileRoute } from "@tanstack/react-router";
import { AirportPage } from "@/pages/AirportPage";
import { seo } from "@/lib/site";
import { airportServiceLd, breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/kz/airport")({
  head: () => {
    const base = seo({
      title: "Астана NQZ әуежайынан трансфер | Private Jet KZ",
      description:
        "Астана (NQZ) әуежайынан Hyundai Staria LUXE-те VIP трансфер. Жүргізуші атыңыздағы тақтайшамен қарсы алады, багажға көмектеседі. Рейсті бақылаймыз, 60 минутқа дейін күту тегін. 24/7. 25 000 ₸-ден.",
      path: "/airport",
      locale: "kz",
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: airportServiceLd("kz") },
        { type: "application/ld+json", children: breadcrumbLd("kz", "airport") },
      ],
    };
  },
  component: AirportPage,
});
