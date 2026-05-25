import { Reveal } from "./Reveal";
import { useLocale } from "@/i18n/context";
import img1 from "@/assets/fleet-real-1.jpg";
import img2 from "@/assets/fleet-real-2.jpg";
import img3 from "@/assets/fleet-real-3.jpg";
import img4 from "@/assets/fleet-real-4.jpg";
import img5 from "@/assets/fleet-real-5.jpg";

const PHOTOS = [
  { src: img1, alt: "Hyundai Staria LUXE у VIP-терминала T1 ночью", caption: "VIP-терминал T1 · Ночной рейс" },
  { src: img2, alt: "Два Hyundai Staria LUXE у отеля Rixos Borovoye", caption: "Rixos Borovoye · Встреча гостей" },
  { src: img3, alt: "Hyundai Staria LUXE у Назарбаев Университета", caption: "Назарбаев Университет · Астана" },
  { src: img4, alt: "Два Hyundai Staria LUXE у Saltanat Saray ночью", caption: "Saltanat Saray · Кортеж" },
  { src: img5, alt: "Два Hyundai Staria LUXE у терминала бизнес-авиации", caption: "Терминал бизнес-авиации · Астана" },
];

function GalleryCard({ photo }: { photo: typeof PHOTOS[0] }) {
  return (
    <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/15 hover:border-gold/40 transition-colors">
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
      <div className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.2em] text-gold/80">
        {photo.caption}
      </div>
    </div>
  );
}

export function FleetGallery() {
  const { t } = useLocale();
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">
            {t.fleetGallery.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] max-w-xl">
            {t.fleetGallery.title}
          </h2>
          <p className="mt-4 text-foreground/60 text-base max-w-lg">
            {t.fleetGallery.sub}
          </p>
        </Reveal>

        {/* Верхняя строка — 2 равных фото */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 gap-3">
          {PHOTOS.slice(0, 2).map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <GalleryCard photo={p} />
            </Reveal>
          ))}
        </div>

        {/* Средняя строка — 2 равных фото */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          {PHOTOS.slice(2, 4).map((p, i) => (
            <Reveal key={i + 2} delay={(i + 2) * 80}>
              <GalleryCard photo={p} />
            </Reveal>
          ))}
        </div>

        {/* Нижняя строка — 1 широкое фото на всю ширину */}
        <Reveal delay={320}>
          <div className="mt-3">
            <div className="group relative aspect-[21/9] rounded-xl overflow-hidden border border-gold/15 hover:border-gold/40 transition-colors">
              <img
                src={PHOTOS[4].src}
                alt={PHOTOS[4].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.2em] text-gold/80">
                {PHOTOS[4].caption}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
