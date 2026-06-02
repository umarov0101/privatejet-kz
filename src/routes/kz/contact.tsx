import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/kz/contact")({
  head: () =>
    seo({
      title: "Байланыс — Private Jet KZ VIP трансфер Астана · WhatsApp +7 708 938 08 00",
      description:
        "Астанада VIP трансфер тапсырыс беру үшін Private Jet KZ-пен байланысыңыз. WhatsApp және қоңырау 24/7, менеджер Санат. Бірнеше минут ішінде жауап.",
      path: "/contact",
      locale: "kz",
    }),
  component: ContactPage,
});
