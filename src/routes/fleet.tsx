import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/pages/FleetPage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/fleet")({
  head: () =>
    seo({
      title: "Автопарк — Hyundai Staria LUXE в Астане | Private Jet KZ",
      description:
        "Флот из 5 одинаковых Hyundai Staria LUXE с капитанскими креслами для аренды в Астане, Казахстан. Премиум-комплектация, климат-контроль, тонировка. Фото и характеристики.",
      keywords:
        "Hyundai Staria LUXE аренда Астана, флот VIP автомобилей Казахстан, минивэн с водителем Астана, капитанские кресла аренда, VIP минивэн Казахстан",
      ogTitle: "Автопарк Hyundai Staria LUXE — Private Jet KZ",
      ogDescription:
        "5 идентичных Hyundai Staria LUXE для аренды в Астане. Капитанские кресла, премиум-комплектация.",
      path: "/fleet",
      locale: "ru",
    }),
  component: FleetPage,
});
