import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import System from "@/components/System";
import Quote from "@/components/Quote";
import Expertise from "@/components/Expertise";
import Story from "@/components/Story";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main id="top" className="bg-bg text-fg">
      <SmoothScroll />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <System />
      <Quote />
      <Expertise />
      <Story />
      <Values />
      <Contact />
      <Footer />
    </main>
  );
}
