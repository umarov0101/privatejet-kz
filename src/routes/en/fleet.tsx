import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/pages/FleetPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/en/fleet")({
  head: () =>
    seo({
      title: "Hyundai Staria LUXE fleet in Astana — Private Jet KZ",
      description:
        "Five identical Hyundai Staria LUXE vans with captain's leather seats for VIP transfer in Astana. Specs, equipment and interior photos.",
      path: "/fleet",
      locale: "en",
    }),
  component: FleetPage,
});
