import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/en/services")({
  head: () =>
    seo({
      title: "Services — VIP transfer, chauffeur car hire, delegations · Private Jet KZ",
      description:
        "Private Jet KZ services in Astana: airport VIP transfer, hourly Hyundai Staria chauffeur hire, full-day rental, intercity trips, delegation meet & greet. Prices and WhatsApp booking.",
      path: "/services",
      locale: "en",
    }),
  component: ServicesPage,
});
