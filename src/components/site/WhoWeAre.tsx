import { useLocale } from "@/i18n/context";
import { useEffect, useRef, useState } from "react";
import sideOpen from "@/assets/staria-side-open.jpg";
import interior from "@/assets/staria-interior-captain.jpg";

export function WhoWeAre() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const p = Math.max(0, Math.min(1, -rect.top / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // door fully opens between progress 0.05 and 0.55
  const doorShift = Math.max(0, Math.min(1, (progress - 0.05) / 0.5));

  return (
    <section ref={ref} className="relative h-[110vh] md:h-[150vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">{t.who.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">{t.who.title}</h2>
            <p className="mt-6 text-foreground/75 text-base md:text-lg max-w-md">{t.who.p1}</p>
            <p className="mt-4 text-foreground/60 text-base max-w-md">{t.who.p2}</p>
            <div className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold/80">
              <span className="block w-8 h-px bg-gold" />
              {t.who.hint}
            </div>
          </div>

          {/* Door reveal stack */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
            {/* Interior backdrop (revealed when door slides) */}
            <img
              src={interior}
              alt="Interior captain seats"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, oklch(0.78 0.10 85 / 0.25), transparent 70%)",
                opacity: doorShift,
              }}
            />
            {/* Door slides right */}
            <img
              src={sideOpen}
              alt="Staria side door opening"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              style={{
                transform: `translateX(${doorShift * 115}%)`,
                transition: "transform 0.1s linear",
              }}
            />
            {/* Edge gradient for cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
