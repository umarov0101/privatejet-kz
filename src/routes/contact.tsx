import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Контакты — Аренда частного джета в Астане | Private Jet KZ +7 708 938 08 00",
      description:
        "Закажите аренду частного джета или VIP-трансфер в Астане. WhatsApp 24/7: +7 708 938 08 00. Быстрый ответ. Казахстан.",
      keywords:
        "контакты Private Jet KZ, заказать VIP трансфер Астана, забронировать частный джет Астана, WhatsApp трансфер Астана, телефон аренда джета Казахстан",
      ogTitle: "Контакты — Private Jet KZ Астана",
      ogDescription: "Заказ VIP-трансфера и аренды в Астане. WhatsApp 24/7: +7 708 938 08 00.",
      path: "/contact",
      locale: "ru",
    }),
  component: ContactPage,
});
