import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/en/")({
  head: () =>
    seo({
      title: "Private Jet KZ — VIP transfer & chauffeur car rental in Astana",
      description:
        "VIP ground transfer in Astana with the Hyundai Staria LUXE: airport meet & greet at NQZ, hourly chauffeur hire, intercity trips, delegation support. 10 years on the market. Request via WhatsApp.",
      path: "/",
      locale: "en",
    }),
  component: HomePage,
});
