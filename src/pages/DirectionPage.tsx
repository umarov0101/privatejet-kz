import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { wa } from "@/i18n/dictionaries";
import type { Direction } from "@/content/directions";

export function DirectionPage({ dir }: { dir: Direction }) {
  const waText = `Здравствуйте! Хочу заказать трансфер Астана — ${dir.city}.`;

  return (
    <>
      <article className="pt-32 md:pt-40 pb-8 bg-background">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <Reveal>
            <Link
              to="/directions"
              className="text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-bright transition-colors"
            >
              ← Трансфер по направлениям
            </Link>
            <h1 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">{dir.h1}</h1>
            <p className="mt-5 text-foreground/80 leading-relaxed">{dir.intro}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                { k: "Расстояние", v: dir.distance },
                { k: "В пути", v: dir.duration },
                { k: "Цена", v: dir.price },
              ].map((f) => (
                <div
                  key={f.k}
                  className="rounded-xl border border-gold/20 bg-[var(--surface)]/60 p-4 text-center"
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                    {f.k}
                  </div>
                  <div className="mt-1 font-display text-lg gradient-gold-text">{f.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 relative aspect-[16/9] rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
              <img
                src={dir.image}
                width={dir.imageWidth}
                height={dir.imageHeight}
                alt={dir.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </article>

      <section className="pb-12 bg-background">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-[15px] md:text-base">
          {dir.sections.map((s) => (
            <div key={s.h2}>
              <h2 className="font-display text-2xl md:text-3xl mt-10 mb-4 leading-tight">{s.h2}</h2>
              {s.text && <p className="text-foreground/80 leading-relaxed mb-5">{s.text}</p>}
              {s.list && (
                <ul className="mb-6 space-y-2">
                  {s.list.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-foreground/80">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-12">
            <h2 className="font-display text-2xl md:text-3xl mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {dir.faq.map((f) => (
                <div key={f.q} className="rounded-xl border border-gold/15 bg-[var(--surface)] p-5">
                  <div className="font-display text-lg">{f.q}</div>
                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {dir.blogSlug && (
            <p className="mt-8 text-sm text-foreground/70">
              Подробный гид по маршруту:{" "}
              <Link
                to={`/blog/${dir.blogSlug}` as string}
                className="text-gold border-b border-gold/40 hover:border-gold transition-colors"
              >
                читать статью →
              </Link>
            </p>
          )}

          <div className="mt-12 rounded-2xl border border-gold/30 bg-[var(--surface)]/60 p-6 md:p-8 text-center">
            <p className="text-foreground/85">
              Нужен трансфер Астана — {dir.city}? Напишите в WhatsApp — рассчитаем и подтвердим за
              пару минут.
            </p>
            <a
              href={wa(waText)}
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
