import { createFileRoute } from "@tanstack/react-router";
import { AirportPage } from "@/pages/AirportPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/kz/airport")({
  head: () =>
    seo({
      title: "Астана NQZ әуежайынан трансфер — Тақтайшамен қарсы алу | Private Jet KZ",
      description:
        "Астана (NQZ) әуежайынан Hyundai Staria LUXE-те VIP трансфер. Жүргізуші атыңыздағы тақтайшамен қарсы алады, багажға көмектеседі. Рейсті бақылаймыз, 60 минутқа дейін күту тегін. 24/7. 25 000 ₸-ден.",
      path: "/airport",
      locale: "kz",
    }),
  component: AirportPage,
});
