import { Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/context";
import { withLocale } from "@/i18n/path";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { wa } from "@/i18n/dictionaries";
import { getPost } from "@/lib/blog";
import type { Block, Post } from "@/lib/blog";
import { getDirection } from "@/content/directions";

const SERVICE_LINKS: Record<
  NonNullable<Post["service"]>,
  { to: string; label: Record<string, string> }
> = {
  services: {
    to: "/services",
    label: {
      ru: "Все услуги и цены",
      kz: "Барлық қызметтер мен бағалар",
      en: "All services & prices",
    },
  },
  airport: {
    to: "/airport",
    label: {
      ru: "Трансфер из аэропорта NQZ",
      kz: "NQZ әуежайынан трансфер",
      en: "Airport transfer NQZ",
    },
  },
  fleet: {
    to: "/fleet",
    label: {
      ru: "Автопарк Hyundai Staria LUXE",
      kz: "Hyundai Staria LUXE автопаркі",
      en: "Hyundai Staria LUXE fleet",
    },
  },
};

function formatDate(iso: string, locale: string) {
  const map: Record<string, string> = { ru: "ru-RU", kz: "kk-KZ", en: "en-US" };
  return new Intl.DateTimeFormat(map[locale] ?? "ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="font-display text-2xl md:text-3xl mt-10 mb-4 leading-tight">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="font-display text-xl md:text-2xl mt-8 mb-3 leading-tight">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-foreground/80 leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-6 space-y-2">
          {block.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-foreground/80">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-6 space-y-2 list-none">
          {block.items.map((it, n) => (
            <li key={it} className="flex items-start gap-3 text-foreground/80">
              <span className="font-display text-gold text-sm mt-0.5 flex-shrink-0">
                {String(n + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-8 border-l-2 border-gold pl-5 text-lg italic text-foreground/85"
        >
          {block.text}
        </blockquote>
      );
    case "table":
      return (
        <div key={i} className="my-6 overflow-x-auto rounded-xl border border-gold/15">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--surface)]">
                {block.head.map((h) => (
                  <th
                    key={h}
                    className="text-left font-display text-gold px-4 py-3 border-b border-gold/15"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, ri) => (
                <tr key={ri} className="border-b border-gold/10 last:border-0">
                  {r.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-foreground/80">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function BlogPostPage({ post }: { post: Post }) {
  const { t, locale } = useLocale();
  const c = post.t[locale];
  // Взаимная перелинковка: на RU-гиде ведём на коммерческую посадочную направления
  const direction = locale === "ru" && post.directionSlug ? getDirection(post.directionSlug) : null;

  return (
    <>
      <article className="pt-32 md:pt-40 pb-8 bg-background">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <Reveal>
            <Link
              to={withLocale(locale, "/blog")}
              className="text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-bright transition-colors"
            >
              ← {t.blog.backToBlog}
            </Link>
            <h1 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">{c.title}</h1>
            <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
              {formatDate(post.date, locale)} · {post.minutes} {t.blog.min}
              {post.updated && post.updated !== post.date && (
                <>
                  {" "}
                  · {t.blog.updated} {formatDate(post.updated, locale)}
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 relative aspect-[16/9] rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
              <img
                src={post.image}
                width={post.imageWidth}
                height={post.imageHeight}
                alt={c.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </article>

      <section className="pb-12 bg-background">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          {c.tldr && (
            <div className="mb-10 rounded-2xl border border-gold/25 bg-[var(--surface)]/60 p-5 md:p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                {t.blog.tldrTitle}
              </div>
              <p className="text-foreground/85 leading-relaxed">{c.tldr}</p>
            </div>
          )}

          <div className="text-[15px] md:text-base">{c.body.map(renderBlock)}</div>

          {direction && (
            <div className="mt-8 rounded-xl border border-gold/25 bg-[var(--surface)]/60 p-5">
              <p className="text-foreground/85">
                Готовы заказать?{" "}
                <Link
                  to={`/${direction.slug}` as string}
                  className="text-gold border-b border-gold/40 hover:border-gold transition-colors"
                >
                  Трансфер Астана — {direction.city}: цена и заказ →
                </Link>
              </p>
            </div>
          )}

          {c.faq && c.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6">FAQ</h2>
              <div className="space-y-4">
                {c.faq.map((f) => (
                  <div
                    key={f.q}
                    className="rounded-xl border border-gold/15 bg-[var(--surface)] p-5"
                  >
                    <div className="font-display text-lg">{f.q}</div>
                    <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {post.related && post.related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-2xl md:text-3xl mb-6">{t.blog.relatedTitle}</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {post.related.map((slug) => {
                  const rp = getPost(slug);
                  if (!rp) return null;
                  const rc = rp.t[locale];
                  return (
                    <Link
                      key={slug}
                      to={withLocale(locale, `/blog/${slug}`)}
                      className="group flex flex-col overflow-hidden rounded-xl border border-gold/15 bg-[var(--surface)] hover:border-gold/40 transition-colors"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={rp.image}
                          width={rp.imageWidth}
                          height={rp.imageHeight}
                          alt={rc.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="font-display text-base leading-tight group-hover:text-gold transition-colors">
                          {rc.title}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              {post.service && (
                <p className="mt-6 text-sm text-foreground/70">
                  {t.blog.serviceTitle}:{" "}
                  <Link
                    to={withLocale(locale, SERVICE_LINKS[post.service].to)}
                    className="text-gold border-b border-gold/40 hover:border-gold transition-colors"
                  >
                    {SERVICE_LINKS[post.service].label[locale]}
                  </Link>
                </p>
              )}
            </div>
          )}

          <div className="mt-12 rounded-2xl border border-gold/30 bg-[var(--surface)]/60 p-6 md:p-8 text-center">
            <p className="text-foreground/85">{t.blog.cta}</p>
            <a
              href={wa(c.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-background bg-gradient-to-br from-[var(--gold-bright)] to-[var(--gold)] shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-transform"
            >
              WhatsApp +7 708 938 08 00
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
