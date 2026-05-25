import { useLocale } from "@/i18n/context";
import { wa } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { useRef } from "react";

export function Tariffs() {
  const { t } = useLocale();
  return (
    <section id="tariffs" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4 text-center">
            {t.tariffs.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-center max-w-3xl mx-auto leading-[1.05]">
            {t.tariffs.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {t.tariffs.items.slice(0, 3).map((it, i) => (
            <Reveal key={it.name} delay={i * 120}>
              <TariffCard item={it} t={t} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {t.tariffs.items.slice(3).map((it, i) => (
            <Reveal key={it.name} delay={i * 120}>
              <TariffCard item={it} t={t} compact />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-xs text-muted-foreground max-w-xl mx-auto">
            {t.tariffs.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TariffCard({
  item,
  t,
  compact = false,
}: {
  item: ReturnType<typeof useLocale>["t"]["tariffs"]["items"][number];
  t: ReturnType<typeof useLocale>["t"];
  compact?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  };
  const reset = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  const numeric = /^\d/.test(item.price);
  const number = numeric ? parseInt(item.price.replace(/\s/g, ""), 10) : null;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group relative h-full rounded-2xl border border-gold/20 bg-gradient-to-b from-[var(--surface)] to-background p-7 md:p-9 transition-transform duration-300 will-change-transform overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--x,50%) var(--y,50%), oklch(0.82 0.12 85 / 0.18), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: "inset 0 0 0 1px oklch(0.82 0.12 85 / 0.5)" }}
      />

      <div className="relative">
        <div className="text-xs uppercase tracking-[0.25em] text-gold">{item.name}</div>
        <div className={`mt-5 ${compact ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"} font-display leading-none`}>
          {number !== null ? (
            <>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mr-2 align-middle">
                {t.tariffs.fromLabel}
              </span>
              <CountUp end={number} />
            </>
          ) : (
            <span className="gradient-gold-text italic">{item.price}</span>
          )}
        </div>
        {item.unit && (
          <div className="mt-2 text-sm text-foreground/60">{item.unit}</div>
        )}
        <p className={`mt-5 text-sm text-foreground/70 leading-relaxed ${compact ? "" : "min-h-[5rem]"}`}>
          {item.desc}
        </p>
        <a
          href={wa(item.waText)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm text-gold border-b border-gold/40 hover:border-gold pb-1 transition-colors"
        >
          {t.tariffs.book}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
}
