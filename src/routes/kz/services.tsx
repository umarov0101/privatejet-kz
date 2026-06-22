import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";
import { seo } from "@/lib/site";
import { servicesLd, breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/kz/services")({
  head: () => {
    const base = seo({
      title: "Қызметтер — VIP трансфер Астанада | Private Jet KZ",
      description:
        "Астанада Private Jet KZ қызметтері: әуежайдан VIP трансфер, Hyundai Staria-ны жүргізушімен сағаттық жалдау, толық күн, қалааралық сапарлар, делегацияларды қарсы алу. Бағалар және WhatsApp-та өтінім.",
      path: "/services",
      locale: "kz",
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: servicesLd("kz") },
        { type: "application/ld+json", children: breadcrumbLd("kz", "services") },
      ],
    };
  },
  component: ServicesPage,
});
