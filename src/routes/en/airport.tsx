import { createFileRoute } from "@tanstack/react-router";
import { AirportPage } from "@/pages/AirportPage";
import { seo } from "@/lib/site";
import { airportServiceLd, breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/en/airport")({
  head: () => {
    const base = seo({
      title: "Astana Airport Transfer NQZ — Private Jet KZ",
      description:
        "VIP airport transfer from Astana NQZ airport in Hyundai Staria LUXE. Driver meets you with a name board, helps with luggage. Real-time flight tracking, 60 min free waiting. 24/7. From 25,000 ₸.",
      keywords:
        "Astana airport transfer, NQZ airport transfer, transfer from Astana airport, NQZ transfer price, VIP airport transfer Astana, meet and greet NQZ, Hyundai Staria airport transfer Astana, private car from Astana airport",
      ogTitle: "Airport Transfer Astana NQZ — Private Jet KZ",
      ogDescription:
        "Name board meet & greet, real-time flight tracking, Hyundai Staria LUXE. From 25,000 ₸. 24/7.",
      path: "/airport",
      locale: "en",
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: airportServiceLd("en") },
        { type: "application/ld+json", children: breadcrumbLd("en", "airport") },
      ],
    };
  },
  component: AirportPage,
});
