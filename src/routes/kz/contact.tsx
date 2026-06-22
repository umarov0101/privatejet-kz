import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { seo } from "@/lib/site";
import { breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/kz/contact")({
  head: () => {
    const base = seo({
      title: "Байланыс — VIP трансфер Астана | Private Jet KZ",
      description:
        "Астанада VIP трансфер тапсырыс беру үшін Private Jet KZ-пен байланысыңыз. WhatsApp және қоңырау 24/7, менеджер Санат. Бірнеше минут ішінде жауап.",
      path: "/contact",
      locale: "kz",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: breadcrumbLd("kz", "contact") }],
    };
  },
  component: ContactPage,
});
