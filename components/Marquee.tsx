"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WORDS = ["Motion", "Depth", "Rhythm", "Weight", "Pause", "Drift"];

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-bone/10 bg-ink py-20"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex whitespace-nowrap font-display text-[clamp(4rem,12vw,11rem)] font-light leading-none"
      >
        {[...WORDS, ...WORDS].map((w, i) => (
          <span key={i} className="mx-8 inline-block">
            {w}
            <span className="mx-8 inline-block text-accent">•</span>
          </span>
        ))}
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="mt-2 flex whitespace-nowrap font-display text-[clamp(4rem,12vw,11rem)] font-light italic leading-none text-bone/20"
      >
        {[...WORDS, ...WORDS].reverse().map((w, i) => (
          <span key={i} className="mx-8 inline-block">
            {w}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
