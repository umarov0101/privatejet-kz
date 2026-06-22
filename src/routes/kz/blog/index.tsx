import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/pages/BlogIndexPage";
import { seo } from "@/lib/site";
import { blogIndexBreadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/kz/blog/")({
  head: () => {
    const base = seo({
      title: "Блог — Астанадағы VIP трансфер | Private Jet KZ",
      description:
        "Астанада Hyundai Staria LUXE VIP трансфері туралы мақалалар: маршруттар, бағалар, NQZ әуежайында қарсы алу және жиі сұрақтарға жауаптар.",
      path: "/blog",
      locale: "kz",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: blogIndexBreadcrumbLd("kz") }],
    };
  },
  component: BlogIndexPage,
});
