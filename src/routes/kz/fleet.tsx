import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/pages/FleetPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/kz/fleet")({
  head: () =>
    seo({
      title: "Hyundai Staria LUXE автопаркі Астанада — Private Jet KZ",
      description:
        "Астанадағы VIP трансфер үшін капитан кресілері бар 5 бірдей Hyundai Staria LUXE. Жинақталымы, жабдықталуы, салон фотолары.",
      path: "/fleet",
      locale: "kz",
    }),
  component: FleetPage,
});
