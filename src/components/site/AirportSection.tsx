import { useLocale } from "@/i18n/context";
import { Reveal } from "./Reveal";
import airport from "@/assets/staria-airport-meet.jpg";

export function AirportSection() {
  const { t } = useLocale();
  return (
    <section className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
            <img src={airport} alt="Airport meet" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">{t.airport.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">{t.airport.title}</h2>
            <p className="mt-6 text-foreground/70 text-lg max-w-md">{t.airport.sub}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
