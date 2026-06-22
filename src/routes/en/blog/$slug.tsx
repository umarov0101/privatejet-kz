import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { seo, SITE_URL } from "@/lib/site";
import { getPost } from "@/lib/blog";
import { blogPostingLd, blogPostBreadcrumbLd, faqPageLd } from "@/lib/schema";

export const Route = createFileRoute("/en/blog/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) return {};
    const c = post.t.en;
    const base = seo({
      title: c.title,
      description: c.description,
      ogImage: `${SITE_URL}${post.image}`,
      ogType: "article",
      path: `/blog/${post.slug}`,
      locale: "en",
    });
    const scripts = [
      { type: "application/ld+json", children: blogPostingLd("en", post) },
      { type: "application/ld+json", children: blogPostBreadcrumbLd("en", post.slug, c.title) },
    ];
    if (c.faq && c.faq.length > 0) {
      scripts.push({ type: "application/ld+json", children: faqPageLd(c.faq) });
    }
    return { ...base, scripts };
  },
  loader: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
  },
  component: PostRoute,
});

function PostRoute() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  if (!post) throw notFound();
  return <BlogPostPage post={post} />;
}
