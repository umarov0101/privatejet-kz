import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { allDirections } from "@/content/directions";

export function DirectionsHubPage() {
  const directions = allDirections();

  return (
    <>
      <section className="pt-32 md:pt-44 pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">Межгород</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
              Трансфер по направлениям
            </h1>
            <p className="mt-6 max-w-2xl text-foreground/70 text-lg">
              Междугородние и международные поездки из Астаны на Hyundai Staria LUXE с водителем —
              от 200 ₸/км. Выберите направление: цена, время в пути и заказ в WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80}>
                <Link
                  to={`/${d.slug}` as string}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-[var(--surface)] hover:border-gold/40 transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={d.image}
                      width={d.imageWidth}
                      height={d.imageHeight}
                      alt={d.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-2xl leading-tight group-hover:text-gold transition-colors">
                      Астана — {d.city}
                    </h2>
                    <div className="mt-3 text-sm text-foreground/60">
                      {d.distance} · {d.duration} · {d.price}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold border-b border-gold/40 group-hover:border-gold pb-1 self-start transition-colors">
                      Подробнее и заказ
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
