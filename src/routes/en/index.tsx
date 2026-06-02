import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/en/")({
  head: () =>
    seo({
      title: "Astana Airport Transfer & VIP Chauffeur Service — Private Jet KZ",
      description:
        "VIP transfer in Astana on the Hyundai Staria LUXE: airport transfer & meet-and-greet at NQZ, chauffeur service, executive & corporate transfer, English-speaking driver, delegation transport, group transfer and intercity trips (Astana–Borovoe/Burabay, Karaganda). 10 years on the market. Book on WhatsApp.",
      keywords:
        "VIP transfer Astana, Astana airport transfer, chauffeur service Astana, executive car service Astana, corporate transfer Astana, business chauffeur Astana, private car service Astana, private driver Astana, private driver Kazakhstan, English-speaking driver Astana, Astana city tour with driver, minivan with driver Astana, delegation transport Astana, group transfer Astana, Astana to Borovoe transfer, Astana to Burabay transfer, Astana to Karaganda private transfer, VIP transfer Hyundai Staria LUXE",
      ogTitle: "Astana Airport Transfer & VIP Chauffeur Service — Private Jet KZ",
      path: "/",
      locale: "en",
    }),
  component: HomePage,
});
