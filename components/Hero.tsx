"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream pt-40 sm:pt-48"
    >
      <motion.div
        aria-hidden
        style={{
          y: blobY,
          background:
            "radial-gradient(closest-side, rgba(168,123,80,0.45), rgba(168,123,80,0) 70%)",
        }}
        className="pointer-events-none absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl sm:-right-20"
      />
      <motion.div
        aria-hidden
        style={{
          y: blobY,
          background:
            "radial-gradient(closest-side, rgba(122,138,111,0.55), rgba(122,138,111,0) 70%)",
        }}
        className="pointer-events-none absolute -left-32 top-72 h-[22rem] w-[22rem] rounded-full opacity-40 blur-3xl"
      />

      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 pb-28 sm:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="eyebrow text-muted"
        >
          Channel Growth Strategies · est. 2003
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-5xl font-display text-[clamp(3rem,8.5vw,7.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-ink"
        >
          Channel coaching, partner programs, and{" "}
          <span className="serif-italic text-copper">market strategy</span>{" "}
          — engineered for growth.
        </motion.h1>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-xl text-base text-ink/75 md:col-span-6 md:col-start-7 sm:text-lg"
          >
            CGS exists to help businesses achieve success through making
            critical assessments and adjustments that benefit their culture and
            bottom line.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="https://calendly.com/bryan-cgs-llc"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition hover:bg-copper"
          >
            Schedule a discovery call
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition hover:border-ink"
          >
            See what we do
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
