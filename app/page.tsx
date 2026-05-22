import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Parallax from "@/components/Parallax";
import HorizontalPanels from "@/components/HorizontalPanels";
import Pinned from "@/components/Pinned";
import StackedCards from "@/components/StackedCards";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import Counters from "@/components/Counters";
import Closing from "@/components/Closing";

export default function Page() {
  return (
    <main id="top">
      <SmoothScroll />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Parallax />
      <section id="services">
        <HorizontalPanels />
      </section>
      <Pinned />
      <StackedCards />
      <Marquee />
      <section id="expertise">
        <Gallery />
      </section>
      <Counters />
      <Closing />
    </main>
  );
}
