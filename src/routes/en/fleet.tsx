import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/pages/FleetPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/en/fleet")({
  head: () =>
    seo({
      title: "Hyundai Staria LUXE Fleet — VIP Minivan with Driver in Astana · Private Jet KZ",
      description:
        "Five identical Hyundai Staria LUXE vans with captain's leather seats — our minivan-with-driver fleet for VIP transfer, chauffeur service and group transfer in Astana. Specs, equipment and interior photos.",
      keywords:
        "VIP transfer Hyundai Staria LUXE, minivan with driver Astana, group transfer Astana, chauffeur service Astana, VIP transfer Astana, private car service Astana, Hyundai Staria LUXE Astana",
      path: "/fleet",
      locale: "en",
    }),
  component: FleetPage,
});
