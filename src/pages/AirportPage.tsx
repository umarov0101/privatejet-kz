import { useLocale } from "@/i18n/context";
import { wa } from "@/i18n/dictionaries";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import airport from "@/assets/staria-airport-meet.webp";

export function AirportPage() {
  const { t } = useLocale();
  const p = t.airportPage;

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": p.faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-0 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">{p.eyebrow}</div>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">{p.h1}</h1>
              <p className="mt-6 max-w-xl text-foreground/70 text-lg leading-relaxed">{p.sub}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div>
                  <div className="font-display text-4xl gradient-gold-text">{p.priceFrom}</div>
                  <div className="text-xs text-foreground/50 mt-1">{p.priceNote}</div>
                </div>
                <a
                  href={wa(p.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-background bg-gradient-to-br from-[var(--gold-bright)] to-[var(--gold)] hover:to-[var(--gold-bright)] transition-all shadow-[var(--shadow-gold)]"
                >
                  {t.tariffs.book} →
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
                <img
                  src={airport}
                  alt="Встреча в аэропорту NQZ Астана — Hyundai Staria LUXE"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-center mb-14">{p.stepsTitle}</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {p.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="p-7 rounded-2xl border border-gold/15 bg-background h-full">
                  <div className="font-display text-5xl gradient-gold-text opacity-60">{s.n}</div>
                  <h3 className="mt-4 font-display text-xl">{s.t}</h3>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl mb-10">{p.includesTitle}</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {p.includes.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-3 p-5 rounded-2xl border border-gold/15 bg-[var(--surface)]">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl mb-10">{p.faqTitle}</h2>
          </Reveal>
          <div className="space-y-3">
            {p.faq.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="p-6 rounded-2xl border border-gold/15 bg-background">
                  <div className="font-display text-lg text-gold mb-2">{item.q}</div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
