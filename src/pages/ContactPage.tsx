import { useLocale } from "@/i18n/context";
import { Reveal } from "@/components/site/Reveal";
import { PHONE, TEL, wa } from "@/i18n/dictionaries";
import skyline from "@/assets/astana-skyline-night.webp";
import { Instagram, Youtube } from "lucide-react";

const INSTAGRAM_URL = "#"; // TODO: вставьте ссылку
const YOUTUBE_URL = "#";   // TODO: вставьте ссылку

export function ContactPage() {
  const { t } = useLocale();
  const c = t.contactPage;
  return (
    <section className="relative min-h-screen pt-32 md:pt-44 pb-24 overflow-hidden">
      <img src={skyline} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative max-w-5xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">{t.nav.contact}</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">{c.title}</h1>
          <p className="mt-6 text-foreground/70 text-lg max-w-xl">{c.sub}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <a
              href={wa(t.cta.bookMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl border border-gold/30 bg-[var(--surface)] hover:border-gold transition-all group"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-gold">{c.waLabel}</div>
              <div className="mt-3 font-display text-3xl group-hover:gradient-gold-text transition-colors">{PHONE}</div>
              <div className="mt-2 text-sm text-foreground/60">WhatsApp · {"Менеджер · 24/7"}</div>
            </a>
            <a
              href={`tel:${TEL}`}
              className="p-8 rounded-2xl border border-gold/30 bg-[var(--surface)] hover:border-gold transition-all group"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-gold">{c.callLabel}</div>
              <div className="mt-3 font-display text-3xl group-hover:gradient-gold-text transition-colors">{PHONE}</div>
              <div className="mt-2 text-sm text-foreground/60">{"Менеджер · 24/7"}</div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">Мы в соцсетях</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 text-foreground/60 hover:text-gold hover:border-gold/50 transition-colors text-sm"
            >
              <Instagram size={15} /> Instagram
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 text-foreground/60 hover:text-gold hover:border-gold/50 transition-colors text-sm"
            >
              <Youtube size={15} /> YouTube
            </a>
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gold/15 bg-[var(--surface)]/60">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">{c.hoursTitle}</div>
              <div className="mt-2 font-display text-xl">{c.hoursValue}</div>
            </div>
            <div className="p-6 rounded-2xl border border-gold/15 bg-[var(--surface)]/60">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">{c.cityTitle}</div>
              <div className="mt-2 font-display text-xl">{c.cityValue}</div>
            </div>
            <div className="p-6 rounded-2xl border border-gold/15 bg-[var(--surface)]/60">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">{c.addressTitle}</div>
              <div className="mt-2 font-display text-xl">{c.addressValue}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
