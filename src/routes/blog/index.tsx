import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/pages/BlogIndexPage";
import { seo } from "@/lib/site";
import { blogIndexBreadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/blog/")({
  head: () => {
    const base = seo({
      title: "Блог о VIP-трансфере в Астане | Private Jet KZ",
      description:
        "Статьи о VIP-трансфере на Hyundai Staria LUXE в Астане: маршруты, цены, встреча в аэропорту NQZ и ответы на частые вопросы.",
      path: "/blog",
      locale: "ru",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: blogIndexBreadcrumbLd("ru") }],
    };
  },
  component: BlogIndexPage,
});
