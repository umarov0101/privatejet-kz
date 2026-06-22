import { Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/context";
import { withLocale } from "@/i18n/path";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { allPosts } from "@/lib/blog";

function formatDate(iso: string, locale: string) {
  const map: Record<string, string> = { ru: "ru-RU", kz: "kk-KZ", en: "en-US" };
  return new Intl.DateTimeFormat(map[locale] ?? "ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function BlogIndexPage() {
  const { t, locale } = useLocale();
  const posts = allPosts();

  return (
    <>
      <section className="pt-32 md:pt-44 pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">
              {t.blog.eyebrow}
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">{t.blog.title}</h1>
            <p className="mt-6 max-w-xl text-foreground/70 text-lg">{t.blog.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => {
              const c = p.t[locale];
              return (
                <Reveal key={p.slug} delay={i * 90}>
                  <Link
                    to={withLocale(locale, `/blog/${p.slug}`)}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-[var(--surface)] hover:border-gold/40 transition-colors"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        width={p.imageWidth}
                        height={p.imageHeight}
                        alt={c.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                        {formatDate(p.date, locale)} · {p.minutes} {t.blog.min}
                      </div>
                      <h2 className="mt-3 font-display text-2xl leading-tight group-hover:text-gold transition-colors">
                        {c.title}
                      </h2>
                      <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                        {c.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold border-b border-gold/40 group-hover:border-gold pb-1 self-start transition-colors">
                        {t.blog.readMore}
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
