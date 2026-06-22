import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";
import { seo } from "@/lib/site";
import { servicesLd, breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/en/services")({
  head: () => {
    const base = seo({
      title: "VIP Transfer & Chauffeur Service Astana — Private Jet KZ",
      description:
        "Private Jet KZ services in Astana: airport transfer & VIP meet-and-greet at NQZ, executive & corporate transfer, hourly Hyundai Staria chauffeur hire, full-day private car service, delegation transport, group transfer and intercity trips (Astana–Borovoe/Burabay, Karaganda). Prices and WhatsApp booking.",
      keywords:
        "VIP transfer Astana, Astana airport transfer, chauffeur service Astana, executive car service Astana, corporate transfer Astana, business chauffeur Astana, private car service Astana, delegation transport Astana, group transfer Astana, minivan with driver Astana, Astana to Borovoe transfer, Astana to Burabay transfer, Astana to Karaganda private transfer, Hyundai Staria self-drive rental Astana, car rental without driver Astana, minivan rental Astana",
      path: "/services",
      locale: "en",
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: servicesLd("en") },
        { type: "application/ld+json", children: breadcrumbLd("en", "services") },
      ],
    };
  },
  component: ServicesPage,
});
