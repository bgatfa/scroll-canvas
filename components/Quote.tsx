"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-32 sm:py-40">
      <motion.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(168,123,80,0.25), rgba(168,123,80,0) 70%)",
          }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-10">
        <p className="eyebrow text-copper">Our mission</p>
        <blockquote className="mt-10 font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.1] tracking-tight text-ink">
          To become the most trusted{" "}
          <span className="serif-italic text-copper">channel coaching</span> and
          training business in the Americas.
        </blockquote>
        <p className="mx-auto mt-10 max-w-xl text-[15px] leading-relaxed text-ink/65">
          The standard we hold ourselves to in every engagement, every quarter,
          every relationship.
        </p>
      </div>
    </section>
  );
}
