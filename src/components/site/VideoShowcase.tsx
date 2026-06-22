import { useState, useEffect } from "react";
import { useLocale } from "@/i18n/context";
import { Reveal } from "./Reveal";
import { Play, X } from "lucide-react";

// ───────────────────────────────────────────────────────────────
// Сюда добавляйте YouTube-ролики. id — это часть ссылки после "v=".
// Пример: https://www.youtube.com/watch?v=ABC123xyz  →  id: "ABC123xyz"
// Короткая ссылка https://youtu.be/ABC123xyz  →  id: "ABC123xyz"
// Блок появляется на сайте только когда тут есть хотя бы один ролик.
// Ролики на русском — показываем на RU и KZ страницах (не на EN).
const VIDEOS: { id: string; title: string }[] = [
  { id: "56csF7W4tEg", title: "VIP-трансфер на Hyundai Staria LUXE" },
  { id: "qL-DUnUerGw", title: "Встреча в аэропорту Астаны" },
  { id: "h9mKXloR4t0", title: "Салон Staria LUXE изнутри" },
  { id: "cv4cy8lyYmk", title: "Поездка по Астане" },
  { id: "EJAi1ESlmrg", title: "VIP-трансфер по Астане" },
];

export function VideoShowcase() {
  const { locale, t } = useLocale();
  const [active, setActive] = useState<string | null>(null);

  // Закрытие плеера по Escape + блокировка прокрутки фона, пока открыт ролик
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  // На английской странице русские ролики не показываем
  if (locale === "en") return null;
  // Пока ролики не добавлены — блок скрыт, сайт выглядит чисто
  if (VIDEOS.length === 0) return null;

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-3 text-center">
            {t.videos.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-center leading-[1.05] mb-3">
            {t.videos.title}
          </h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">{t.videos.sub}</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={i * 60}>
              <button
                type="button"
                onClick={() => setActive(v.id)}
                aria-label={v.title}
                className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-gold/15 bg-[var(--surface)] group block"
              >
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  width={480}
                  height={360}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold/90 text-background flex items-center justify-center shadow-luxe transition-transform duration-300 group-hover:scale-110">
                  <Play size={26} className="ml-1" fill="currentColor" />
                </span>
                {v.title && (
                  <span className="absolute bottom-0 left-0 right-0 p-4 text-left text-sm font-display bg-gradient-to-t from-background/90 to-transparent">
                    {v.title}
                  </span>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Закрыть"
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full border border-gold/30 text-foreground/80 hover:text-gold hover:border-gold/60 flex items-center justify-center transition-colors"
          >
            <X size={22} />
          </button>
          <div
            className="relative w-[min(94vw,440px)] aspect-[9/16] max-h-[88vh] rounded-2xl overflow-hidden shadow-luxe border border-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${active}?autoplay=1&rel=0`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
