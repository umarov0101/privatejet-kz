import { useLocale } from "@/i18n/context";
import { wa } from "@/i18n/dictionaries";
import heroImg from "@/assets/hero-staria-astana.webp";
import hero768 from "@/assets/hero-staria-astana-768.webp";
import hero1152 from "@/assets/hero-staria-astana-1152.webp";
import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setProgress(Math.min(1, y / window.innerHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[560px] overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `scale(${1.1 + progress * 0.1}) translateY(${progress * 60}px)`,
        }}
      >
        <img
          src={heroImg}
          srcSet={`${hero768} 768w, ${hero1152} 1152w, ${heroImg} 1536w`}
          sizes="100vw"
          width={1536}
          height={1024}
          alt="Hyundai Staria LUXE для VIP-трансфера в Астане"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
      </div>

      <Particles />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-end pb-16 md:pb-24 pt-24">
        <h1 className="font-display text-[clamp(2.25rem,7.5vw,8rem)] leading-[0.95] tracking-tight max-w-5xl">
          <span className="block">{t.hero.title1}</span>
          <span className="block gradient-gold-text">{t.hero.title2}</span>
        </h1>
        <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-foreground/75">
          {t.hero.subtitle}
        </p>
        <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
          <MagneticButton
            href={wa(t.cta.bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full text-sm font-medium text-background bg-gradient-to-br from-[var(--gold-bright)] to-[var(--gold)] hover:to-[var(--gold-bright)] shadow-[var(--shadow-gold)]"
          >
            {t.cta.book}
          </MagneticButton>
          <MagneticButton
            href="#tariffs"
            strength={0.2}
            className="px-6 py-3.5 rounded-full text-sm font-medium text-foreground border border-gold/40 hover:border-gold hover:bg-gold/5"
          >
            {t.cta.viewTariffs}
          </MagneticButton>
        </div>

        <div className="mt-10 md:mt-14 mb-10 md:mb-14 flex flex-wrap gap-x-6 gap-y-2 text-[11px] md:text-xs uppercase tracking-[0.2em] text-foreground/60">
          <Badge>{t.hero.badge1}</Badge>
          <Badge>{t.hero.badge2}</Badge>
          <Badge>{t.hero.badge3}</Badge>
          <Badge>{t.hero.badge4}</Badge>
          <Badge>{t.hero.badge5}</Badge>
          <Badge>{t.hero.badge6}</Badge>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold/70">
        <span>{t.hero.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold animate-[scrollDot_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-110vh) translateX(40px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-gold">
      {children}
    </span>
  );
}

function Particles() {
  const dots = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((_, i) => {
        const left = (i * 137) % 100;
        const size = 1 + ((i * 13) % 3);
        const dur = 14 + ((i * 7) % 14);
        const delay = (i * 0.7) % 8;
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-gold/60"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animation: `floatUp ${dur}s linear ${delay}s infinite`,
              boxShadow: "0 0 8px var(--gold)",
            }}
          />
        );
      })}
    </div>
  );
}
