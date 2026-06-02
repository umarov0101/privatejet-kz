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
import { VideoShowcase } from "@/components/site/VideoShowcase";
import { FAQ } from "@/components/site/FAQ";
import { Booking } from "@/components/site/Booking";
import { FinalCTA } from "@/components/site/FinalCTA";

export function HomePage() {
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
      <VideoShowcase />
      <FAQ />
      <Booking />
      <FinalCTA />
    </>
  );
}
