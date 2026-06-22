import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/kz/")({
  head: () =>
    seo({
      title: "Астанада VIP трансфер және авто жалдау | Private Jet KZ",
      description:
        "Астанада Hyundai Staria LUXE көлігімен VIP трансфер: NQZ әуежайынан қарсы алу, жүргізушімен сағаттық жалдау, қалааралық сапарлар, делегацияларды сүйемелдеу. Нарықта 10 жыл. WhatsApp-та өтінім.",
      path: "/",
      locale: "kz",
    }),
  component: HomePage,
});
