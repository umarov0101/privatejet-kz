import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import interior from "@/assets/staria-interior-captain.webp";
import detail from "@/assets/staria-airport-fleet.webp";
import front from "@/assets/staria-front-headlights.webp";
import heroFleet from "@/assets/hero-staria-astana.webp";
import real1 from "@/assets/fleet-real-1.webp";
import real2 from "@/assets/fleet-real-2.webp";
import real3 from "@/assets/fleet-real-3.webp";
import real4 from "@/assets/fleet-real-4.webp";
import real5 from "@/assets/fleet-real-5.webp";

const REAL_PHOTOS = [
  { src: real1, caption: "VIP-терминал T1 · Ночной рейс" },
  { src: real2, caption: "Rixos Borovoye · Встреча гостей" },
  { src: real3, caption: "Назарбаев Университет · Астана" },
  { src: real4, caption: "Saltanat Saray · Кортеж" },
  { src: real5, caption: "Терминал бизнес-авиации · Астана" },
];

export function FleetPage() {
  const { t } = useLocale();
  const f = t.fleetPage;
  return (
    <>
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">{t.nav.fleet}</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">{f.title}</h1>
            <p className="mt-6 max-w-xl text-foreground/70 text-lg">{f.sub}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12 relative aspect-[16/9] rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
              <img src={heroFleet} alt="Hyundai Staria LUXE в Астане" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-[9px] uppercase tracking-[0.3em] text-gold mb-3">{f.specTitle}</div>
          <div className="grid md:grid-cols-2 gap-px bg-gold/10 rounded-2xl overflow-hidden">
            {f.spec.map((s) => (
              <div key={s.label} className="bg-[var(--surface)] p-5 flex justify-between items-baseline gap-6">
                <span className="text-foreground/60 text-sm">{s.label}</span>
                <span className="font-display text-lg text-gold-bright">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        {/* Все фото в единой сетке — одинаковый размер, авто целиком в кадре */}
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {REAL_PHOTOS.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/15 hover:border-gold/40 transition-colors bg-[var(--surface)]">
                  <img
                    src={p.src}
                    alt={p.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-background/80 to-transparent">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold/80">{p.caption}</span>
                  </div>
                </div>
              </Reveal>
            ))}
            {[
              { src: interior, caption: "Капитанские кресла · Салон" },
              { src: detail,   caption: "Аэропорт NQZ · Флот" },
              { src: front,    caption: "Hyundai Staria LUXE · Астана" },
            ].map((p, i) => (
              <Reveal key={`int-${i}`} delay={(5 + i) * 60}>
                <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/15 hover:border-gold/40 transition-colors bg-[var(--surface)]">
                  <img
                    src={p.src}
                    alt={p.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold/80">{p.caption}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-10 mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {f.feature.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <div className="p-6 border border-gold/15 rounded-2xl bg-[var(--surface)] h-full">
                <div className="text-gold text-2xl font-display">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-xl">{it.t}</h3>
                <p className="mt-2 text-sm text-foreground/65">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
