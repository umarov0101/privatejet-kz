import { useLocale } from "@/i18n/context";
import { PHONE, TEL, wa } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import skyline from "@/assets/astana-skyline-night.jpg";

export function FinalCTA() {
  const { t } = useLocale();
  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <img
        src={skyline}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-10 text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
            {t.finalCta.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-gold-text italic">{t.finalCta.title.split(" ").slice(-1)}</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-lg text-foreground/70">{t.finalCta.sub}</p>
        </Reveal>
        <Reveal delay={350}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton
              href={wa(t.cta.bookMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-medium text-background bg-gradient-to-br from-[var(--gold-bright)] to-[var(--gold)] shadow-[var(--shadow-gold)]"
            >
              {t.finalCta.button}
            </MagneticButton>
            <MagneticButton
              href={`tel:${TEL}`}
              strength={0.2}
              className="px-8 py-4 rounded-full font-medium border border-gold/40 hover:border-gold hover:bg-gold/5"
            >
              {PHONE}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
