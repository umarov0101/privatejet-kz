import { useLocale } from "@/i18n/context";
import { useEffect, useRef, useState } from "react";
import interior from "@/assets/staria-interior-captain.jpg";
import detail from "@/assets/staria-interior-rear.jpg";

export function InteriorZoom() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      setP(Math.max(0, Math.min(1, -rect.top / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative h-[180vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          src={interior}
          alt="Interior"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{ transform: `scale(${1 + p * 0.4})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-background/30" />
        <img
          src={detail}
          alt="Detail"
          className="hidden md:block absolute right-10 bottom-10 w-72 lg:w-96 aspect-[3/2] object-cover rounded-xl border border-gold/30 shadow-luxe will-change-transform"
          style={{
            transform: `translateY(${(1 - p) * 80}px)`,
            opacity: 0.4 + p * 0.6,
          }}
        />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-10 flex items-center">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">{t.interior.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">{t.interior.title}</h2>
            <p className="mt-6 text-foreground/70 text-lg">{t.interior.sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
