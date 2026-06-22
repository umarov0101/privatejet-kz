import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { seo } from "@/lib/site";
import { breadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/en/contact")({
  head: () => {
    const base = seo({
      title: "Contact — VIP Transfer in Astana | Private Jet KZ",
      description:
        "Get in touch with Private Jet KZ to book a VIP transfer, airport transfer or chauffeur service in Astana with an English-speaking driver. WhatsApp and calls 24/7, manager Sanat. Reply within minutes.",
      keywords:
        "VIP transfer Astana, Astana airport transfer, chauffeur service Astana, English-speaking driver Astana, private driver Astana, book transfer Astana WhatsApp",
      path: "/contact",
      locale: "en",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: breadcrumbLd("en", "contact") }],
    };
  },
  component: ContactPage,
});
