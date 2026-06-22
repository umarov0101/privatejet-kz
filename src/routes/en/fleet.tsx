import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/pages/FleetPage";
import { seo } from "@/lib/site";
import { fleetProductLd, breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/en/fleet")({
  head: () => {
    const base = seo({
      title: "Hyundai Staria LUXE Fleet in Astana — Private Jet KZ",
      description:
        "Five identical Hyundai Staria LUXE vans with captain's leather seats — our minivan-with-driver fleet for VIP transfer, chauffeur service and group transfer in Astana. Specs, equipment and interior photos.",
      keywords:
        "VIP transfer Hyundai Staria LUXE, minivan with driver Astana, group transfer Astana, chauffeur service Astana, VIP transfer Astana, private car service Astana, Hyundai Staria LUXE Astana",
      path: "/fleet",
      locale: "en",
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: fleetProductLd("en") },
        { type: "application/ld+json", children: breadcrumbLd("en", "fleet") },
      ],
    };
  },
  component: FleetPage,
});
