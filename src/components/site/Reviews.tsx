import { useLocale } from "@/i18n/context";
import { Reveal } from "./Reveal";

export function Reviews() {
  const { t } = useLocale();
  const r = t.reviews;
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">{r.eyebrow}</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">{r.title}</h2>
          <p className="mt-5 max-w-xl text-foreground/65">{r.sub}</p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {r.items.map((it, i) => (
            <Reveal key={it.name} delay={i * 80}>
              <article className="group h-full p-7 rounded-2xl border border-gold/15 bg-[var(--surface)] hover:border-gold/40 transition-colors relative overflow-hidden">
                <div className="absolute -top-6 -left-2 font-display text-[7rem] leading-none text-gold/10 select-none pointer-events-none">
                  “
                </div>
                <div className="relative">
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <svg key={k} viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.9z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-foreground/85 text-[15px] leading-relaxed">{it.text}</p>
                  <div className="mt-6 pt-5 border-t border-gold/10">
                    <div className="font-display text-lg">{it.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-gold/80 mt-1">
                      {it.role}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
