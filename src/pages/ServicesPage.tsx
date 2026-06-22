import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { wa } from "@/i18n/dictionaries";

export function ServicesPage() {
  const { t } = useLocale();
  const s = t.servicesPage;
  return (
    <>
      <section className="pt-32 md:pt-44 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">
              {t.nav.services}
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">{s.title}</h1>
            <p className="mt-6 max-w-xl text-foreground/70 text-lg">{s.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-5xl mx-auto px-5 md:px-10 space-y-6">
          {s.items.map((it, i) => (
            <Reveal key={it.name} delay={i * 100}>
              <div className="group p-7 md:p-10 rounded-2xl border border-gold/15 bg-[var(--surface)] hover:border-gold/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl md:text-4xl">{it.name}</h3>
                  <div className="text-2xl font-display gradient-gold-text italic">{it.price}</div>
                </div>
                <p className="mt-4 text-foreground/70">{it.desc}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/75">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(it.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm text-gold border-b border-gold/40 hover:border-gold pb-1 transition-colors"
                >
                  {t.tariffs.book}{" "}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
