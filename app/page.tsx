import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Parallax from "@/components/Parallax";
import Pinned from "@/components/Pinned";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import Closing from "@/components/Closing";

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <Parallax />
      <Pinned />
      <Marquee />
      <Gallery />
      <Closing />
    </main>
  );
}
