import { useLocale } from "@/i18n/context";

export function Marquee() {
  const { t } = useLocale();
  const items = [...t.marquee, ...t.marquee];
  return (
    <section className="py-12 md:py-20 bg-background border-y border-gold/10 overflow-hidden marquee-wrap">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((it, i) => (
          <span
            key={i}
            className="font-display text-6xl md:text-9xl mx-8 md:mx-14 italic"
            style={{
              WebkitTextStroke: "1px oklch(0.82 0.12 85)",
              WebkitTextFillColor: "transparent",
            }}
          >
            {it}
            <span className="text-gold not-italic mx-6 md:mx-10">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
