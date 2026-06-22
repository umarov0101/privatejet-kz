import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/pages/BlogIndexPage";
import { seo } from "@/lib/site";
import { blogIndexBreadcrumbLd } from "@/lib/schema";

export const Route = createFileRoute("/en/blog/")({
  head: () => {
    const base = seo({
      title: "Blog — VIP Transfer in Astana | Private Jet KZ",
      description:
        "Articles about VIP transfer in the Hyundai Staria LUXE in Astana: routes, prices, airport meet & greet at NQZ and answers to common questions.",
      path: "/blog",
      locale: "en",
    });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: blogIndexBreadcrumbLd("en") }],
    };
  },
  component: BlogIndexPage,
});
