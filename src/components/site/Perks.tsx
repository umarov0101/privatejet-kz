import { useLocale } from "@/i18n/context";
import { Reveal } from "./Reveal";

export function Perks() {
  const { t } = useLocale();
  return (
    <section className="py-14 md:py-20 bg-[var(--surface)] border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl text-center max-w-2xl mx-auto">
            {t.perks.title}
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {t.perks.items.map((it, i) => (
            <Reveal
              key={it.t}
              delay={i * 80}
              className="bg-[var(--surface)] p-8 md:p-10 group hover:bg-background/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold text-sm font-display group-hover:bg-gold group-hover:text-background transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-2xl">{it.t}</h3>
                  <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{it.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
