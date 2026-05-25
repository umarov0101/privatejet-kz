import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { HeadlightsSection } from "@/components/site/HeadlightsSection";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { Perks } from "@/components/site/Perks";
import { Tariffs } from "@/components/site/Tariffs";
import { Marquee } from "@/components/site/Marquee";
import { InteriorZoom } from "@/components/site/InteriorZoom";
import { AirportSection } from "@/components/site/AirportSection";
import { AstanaTour } from "@/components/site/AstanaTour";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { Booking } from "@/components/site/Booking";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Private Jet KZ — Аренда трансфера в Астане | VIP минивэн Hyundai Staria LUXE" },
      {
        name: "description",
        content:
          "VIP-трансфер на Hyundai Staria LUXE в Астане и по всему Казахстану. Трансфер из аэропорта NQZ, встреча делегаций, почасовая аренда, междугородние поездки. 10 лет опыта. +7 708 938 08 00.",
      },
      {
        name: "keywords",
        content:
          "VIP трансфер Астана, аренда минивэна Астана, Hyundai Staria LUXE аренда, трансфер аэропорт NQZ Астана, встреча делегаций Астана, почасовая аренда авто Астана, аренда автомобиля с водителем Астана, бизнес трансфер Астана, междугородние поездки Казахстан, трансфер Боровое из Астаны",
      },
      { property: "og:title", content: "Private Jet KZ — Аренда трансфера в Астане" },
      {
        property: "og:description",
        content:
          "VIP-трансфер на Hyundai Staria LUXE в Астане. Аэропорт, делегации, почасовая аренда. Подача вовремя. Казахстан.",
      },
      { property: "og:url", content: "https://privatejetkz.com/" },
      { rel: "canonical", href: "https://privatejetkz.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <HeadlightsSection />
      <WhoWeAre />
      <Perks />
      <Marquee />
      <Tariffs />
      <InteriorZoom />
      <AstanaTour />
      <AirportSection />
      <Reviews />
      <FAQ />
      <Booking />
      <FinalCTA />
    </>
  );
}