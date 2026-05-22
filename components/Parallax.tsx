"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const back = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const mid = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const front = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section
      ref={ref}
      className="relative flex h-[140vh] items-center justify-center overflow-hidden bg-ink"
    >
      <motion.div
        aria-hidden
        style={{ y: back }}
        className="absolute -left-20 top-10 text-[24vw] font-display font-light leading-none text-bone/[0.04]"
      >
        CHANNEL
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: mid, rotate }}
        className="absolute right-[8%] top-[28%] h-48 w-48 rounded-full border border-accent2/30 sm:h-72 sm:w-72"
      />

      <motion.div
        aria-hidden
        style={{ y: mid }}
        className="absolute left-[10%] top-[55%] h-32 w-32 rounded-sm bg-accent/20 sm:h-44 sm:w-44"
      />

      <motion.div
        style={{ y: front }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-accent">
          The thesis
        </p>
        <h2 className="font-display text-5xl font-light leading-tight sm:text-7xl">
          Direct sales hits a ceiling. The channel is how you cross it.
        </h2>
        <p className="mt-6 text-bone/60 sm:text-lg">
          The vendors winning today aren&apos;t the loudest. They&apos;re the
          easiest to sell, the easiest to co-sell with, and the easiest to be
          paid by. We engineer that.
        </p>
      </motion.div>
    </section>
  );
}
