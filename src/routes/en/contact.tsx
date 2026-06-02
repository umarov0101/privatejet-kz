import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/en/contact")({
  head: () =>
    seo({
      title: "Contact Private Jet KZ — VIP Transfer & Chauffeur Service in Astana · WhatsApp +7 708 938 08 00",
      description:
        "Get in touch with Private Jet KZ to book a VIP transfer, airport transfer or chauffeur service in Astana with an English-speaking driver. WhatsApp and calls 24/7, manager Sanat. Reply within minutes.",
      keywords:
        "VIP transfer Astana, Astana airport transfer, chauffeur service Astana, English-speaking driver Astana, private driver Astana, book transfer Astana WhatsApp",
      path: "/contact",
      locale: "en",
    }),
  component: ContactPage,
});
