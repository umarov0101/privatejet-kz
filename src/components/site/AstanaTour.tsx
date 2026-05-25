import { useEffect, useRef, useCallback } from "react";
import { useLocale } from "@/i18n/context";
import skyline from "@/assets/astana-skyline-night.jpg";
import staria from "@/assets/hero-staria-astana.jpg";

const STOPS: Record<"ru" | "kz" | "en", { title: string; sub: string }[]> = {
  ru: [
    { title: "Аэропорт NQZ", sub: "Встречаем с табличкой за 30 минут до прилёта" },
    { title: "Байтерек", sub: "Сердце столицы — ваш первый кадр для Stories" },
    { title: "Хан Шатыр", sub: "Шопинг и обед в panoramic-зоне" },
    { title: "Дворец Независимости", sub: "Деловые встречи и приёмы" },
    { title: "EXPO / Astana Hub", sub: "Бизнес-район — туда, где принимаются решения" },
  ],
  kz: [
    { title: "NQZ әуежайы", sub: "Ұшып келуден 30 минут бұрын тақтайшамен қарсы аламыз" },
    { title: "Бәйтерек", sub: "Елорданың жүрегі — Stories үшін бірінші кадр" },
    { title: "Хан Шатыр", sub: "Шопинг және panoramic-аймақта түскі ас" },
    { title: "Тәуелсіздік сарайы", sub: "Іскерлік кездесулер мен қабылдаулар" },
    { title: "EXPO / Astana Hub", sub: "Іскерлік аудан — шешімдер қабылданатын жер" },
  ],
  en: [
    { title: "NQZ Airport", sub: "Meet & greet with a sign 30 min before arrival" },
    { title: "Bayterek", sub: "Heart of the capital — your first Stories shot" },
    { title: "Khan Shatyr", sub: "Shopping and lunch in the panoramic zone" },
    { title: "Independence Palace", sub: "Business meetings and receptions" },
    { title: "EXPO / Astana Hub", sub: "Business district — where decisions are made" },
  ],
};

const HEADERS: Record<"ru" | "kz" | "en", { eyebrow: string; title: string }> = {
  ru: { eyebrow: "Тур по Астане", title: "Один водитель — весь город" },
  kz: { eyebrow: "Астана бойынша тур", title: "Бір жүргізуші — бүкіл қала" },
  en: { eyebrow: "Astana tour", title: "One driver — the entire city" },
};

export function AstanaTour() {
  const { locale } = useLocale();
  const stops = STOPS[locale];
  const head = HEADERS[locale];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const skylineRef = useRef<HTMLDivElement | null>(null);
  const carRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height - vh;
    const p = Math.max(0, Math.min(1, -rect.top / total));

    const trackShift = p * (100 - 100 / stops.length);

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${trackShift}%)`;
    }
    if (skylineRef.current) {
      skylineRef.current.style.transform = `translateX(${-p * 15}%) scale(1.1)`;
    }
    if (carRef.current) {
      carRef.current.style.left = `${p * 80}vw`;
    }
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${p * 100}%`;
    }
  }, [stops.length]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress]);

  return (
    <section ref={sectionRef} className="relative bg-background" style={{ height: `${stops.length * 90}svh` }}>
      <div className="sticky top-0 overflow-hidden" style={{ height: "100svh" }}>
        {/* Skyline backdrop with parallax */}
        <div ref={skylineRef} className="absolute inset-0 will-change-transform" style={{ transform: "translateX(0%) scale(1.1)" }}>
          <img src={skyline} alt="" aria-hidden className="w-full h-full object-cover opacity-50" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        </div>

        {/* Header */}
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-20">
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-3">{head.eyebrow}</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">{head.title}</h2>
        </div>

        {/* Horizontal track */}
        <div className="absolute inset-x-0 bottom-0 top-[40%]">
          <div
            ref={trackRef}
            className="flex h-full will-change-transform"
            style={{
              width: `${stops.length * 100}%`,
              transform: "translateX(0%)",
            }}
          >
            {stops.map((s, i) => (
              <div
                key={i}
                className="h-full flex items-end justify-start px-5 md:px-16 pb-16"
                style={{ width: `${100 / stops.length}%` }}
              >
                <div className="max-w-sm rounded-2xl border border-gold/30 bg-background/70 backdrop-blur-md p-6 md:p-8 shadow-luxe">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                    {String(i + 1).padStart(2, "0")} / {String(stops.length).padStart(2, "0")}
                  </div>
                  <div className="font-display text-2xl md:text-3xl leading-tight">{s.title}</div>
                  <p className="mt-3 text-sm text-foreground/70">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Driving Staria silhouette */}
        <div
          ref={carRef}
          className="absolute bottom-8 will-change-transform pointer-events-none hidden md:block"
          style={{
            left: "0vw",
            width: "32vw",
            maxWidth: 540,
          }}
        >
          <img src={staria} alt="" aria-hidden className="w-full h-auto opacity-80 drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)]" />
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gold/10">
          <div ref={progressBarRef} className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)]" style={{ width: "0%" }} />
        </div>
      </div>
    </section>
  );
}
