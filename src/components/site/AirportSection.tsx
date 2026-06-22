import { Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/context";
import { withLocale } from "@/i18n/path";
import { Reveal } from "./Reveal";
import airport from "@/assets/staria-airport-meet.webp";

export function AirportSection() {
  const { t, locale } = useLocale();
  return (
    <section className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
            <img
              src={airport}
              width={1536}
              height={1024}
              alt="Встреча в аэропорту NQZ Астана"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">
              {t.airport.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">{t.airport.title}</h2>
            <p className="mt-6 text-foreground/70 text-lg max-w-md">{t.airport.sub}</p>
            <Link
              to={withLocale(locale, "/airport")}
              className="mt-8 inline-flex items-center gap-2 text-sm text-gold border-b border-gold/40 hover:border-gold pb-1 transition-colors"
            >
              {locale === "en" ? "More details" : locale === "kz" ? "Толығырақ" : "Подробнее"} →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
