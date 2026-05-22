"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Closing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <section
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-bone text-ink"
    >
      <motion.div
        style={{ scale, opacity, filter }}
        className="text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-accent">
          End of scroll
        </p>
        <h2 className="font-display text-6xl font-light italic leading-none sm:text-9xl">
          Thank you for
          <br />
          <span className="not-italic">scrolling.</span>
        </h2>
      </motion.div>

      <footer className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ink/50">
        Built with Next.js & Framer Motion · Deployed on Vercel
      </footer>
    </section>
  );
}
