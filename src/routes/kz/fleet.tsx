import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/pages/FleetPage";
import { seo } from "@/lib/site";
import { fleetProductLd, breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/kz/fleet")({
  head: () => {
    const base = seo({
      title: "Hyundai Staria LUXE автопаркі — Private Jet KZ",
      description:
        "Астанадағы VIP трансфер үшін капитан кресілері бар 5 бірдей Hyundai Staria LUXE. Жинақталымы, жабдықталуы, салон фотолары.",
      path: "/fleet",
      locale: "kz",
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: fleetProductLd("kz") },
        { type: "application/ld+json", children: breadcrumbLd("kz", "fleet") },
      ],
    };
  },
  component: FleetPage,
});
