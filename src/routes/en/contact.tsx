import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/en/contact")({
  head: () =>
    seo({
      title: "Contact Private Jet KZ — VIP transfer in Astana · WhatsApp +7 708 938 08 00",
      description:
        "Get in touch with Private Jet KZ to book a VIP transfer in Astana. WhatsApp and calls 24/7, manager Sanat. Reply within minutes.",
      path: "/contact",
      locale: "en",
    }),
  component: ContactPage,
});
