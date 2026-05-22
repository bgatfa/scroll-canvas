"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const ITEMS = [
  { tag: "Field 01", title: "Slow morning, fast light", hue: 18 },
  { tag: "Field 02", title: "Concrete, but blooming", hue: 200 },
  { tag: "Field 03", title: "Edges sharpen at dusk", hue: 320 },
  { tag: "Field 04", title: "A room that listens back", hue: 80 },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="bg-ink py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-accent">
            Chapter III
          </p>
          <h2 className="mb-16 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl">
            Reveals are the punctuation of a scroll.
          </h2>
        </Reveal>

        <motion.div style={{ y }} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.tag} delay={i * 0.08} y={48}>
              <TiltCard max={8}>
                <article className="group relative aspect-[4/3] overflow-hidden rounded-md border border-bone/10">
                  <div
                    className="absolute inset-0 transition-transform duration-[1200ms] ease-out"
                    style={{
                      background: `radial-gradient(120% 80% at 30% 20%, hsl(${item.hue}, 80%, 55%) 0%, hsl(${item.hue + 40}, 60%, 18%) 60%, #0a0a0f 100%)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-bone/60">
                      {item.tag}
                    </p>
                    <h3 className="font-display text-2xl font-light">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
