import { createFileRoute } from "@tanstack/react-router";
import { DirectionPage } from "@/pages/DirectionPage";
import { seoStandalone, SITE_URL } from "@/lib/site";
import { getDirection } from "@/content/directions";
import { directionServiceLd, directionBreadcrumbLd, faqPageLd } from "@/lib/schema";

const dir = getDirection("transfer-astana-kostanay")!;

export const Route = createFileRoute("/transfer-astana-kostanay")({
  head: () => {
    const base = seoStandalone({
      title: dir.title,
      description: dir.description,
      keywords: dir.keywords,
      path: `/${dir.slug}`,
      ogImage: `${SITE_URL}${dir.image}`,
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: directionServiceLd(dir) },
        { type: "application/ld+json", children: faqPageLd(dir.faq) },
        { type: "application/ld+json", children: directionBreadcrumbLd(dir) },
      ],
    };
  },
  component: () => <DirectionPage dir={dir} />,
});
