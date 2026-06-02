import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      title: "Услуги аренды частного джета в Астане — VIP трансфер | Private Jet KZ",
      description:
        "Аренда частного джет-минивэна в Астане: почасовая аренда, аренда на день, межгород, встреча делегаций и VIP-гостей из аэропорта Нурсултан. Цены от 15 000 тенге.",
      keywords:
        "аренда частного джета Астана цена, почасовая аренда VIP авто Астана, встреча делегаций Астана, трансфер из аэропорта Нурсултан, аренда джета на день Казахстан, межгород VIP трансфер Казахстан, корпоративный трансфер Астана",
      ogTitle: "Услуги аренды частного джета в Астане — Private Jet KZ",
      ogDescription:
        "VIP-трансфер, почасовая аренда, встреча делегаций в Астане. Hyundai Staria LUXE. Цены и условия.",
      path: "/services",
      locale: "ru",
    }),
  component: ServicesPage,
});
