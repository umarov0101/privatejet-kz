import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/kz/services")({
  head: () =>
    seo({
      title: "Қызметтер — VIP трансфер, жүргізушімен авто жалдау, делегациялар · Private Jet KZ",
      description:
        "Астанада Private Jet KZ қызметтері: әуежайдан VIP трансфер, Hyundai Staria-ны жүргізушімен сағаттық жалдау, толық күн, қалааралық сапарлар, делегацияларды қарсы алу. Бағалар және WhatsApp-та өтінім.",
      path: "/services",
      locale: "kz",
    }),
  component: ServicesPage,
});
