import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Контакты — VIP-трансфер в Астане | Private Jet KZ +7 708 938 08 00",
      description:
        "Закажите VIP-трансфер на Hyundai Staria LUXE в Астане. WhatsApp 24/7: +7 708 938 08 00. Быстрый ответ. Казахстан.",
      keywords:
        "контакты Private Jet KZ, заказать VIP трансфер Астана, WhatsApp трансфер Астана, телефон VIP трансфер Казахстан, трансфер аэропорт NQZ заказать",
      ogTitle: "Контакты — Private Jet KZ Астана",
      ogDescription: "Заказ VIP-трансфера в Астане на Hyundai Staria LUXE. WhatsApp 24/7: +7 708 938 08 00.",
      path: "/contact",
      locale: "ru",
    }),
  component: ContactPage,
});
