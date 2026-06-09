import { useLocale } from "@/i18n/context";
import { useEffect, useRef, useState } from "react";
import headlightsImg from "@/assets/staria-front-headlights.webp";

export function HeadlightsSection() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setOn(true)),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
          <img
            src={headlightsImg}
            alt="Staria headlights"
            className={`w-full h-full object-cover transition-all duration-[2000ms] ${
              on ? "brightness-100" : "brightness-50"
            }`}
          />
          {/* Beam glow */}
          <div
            className={`absolute inset-0 transition-opacity duration-[2500ms] ${
              on ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(ellipse at 32% 60%, oklch(0.85 0.14 88 / 0.35), transparent 35%), radial-gradient(ellipse at 68% 60%, oklch(0.85 0.14 88 / 0.35), transparent 35%)",
            }}
          />
          <div className="absolute inset-0 shimmer pointer-events-none mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">{t.headlights.eyebrow}</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            {t.headlights.title}
          </h2>
          <p className="mt-6 text-foreground/70 text-lg max-w-md">{t.headlights.sub}</p>
        </div>
      </div>
    </section>
  );
}
