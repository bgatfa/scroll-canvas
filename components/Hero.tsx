"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CHIPS = [
  "Channel Development",
  "Partner Programs",
  "Market Analysis",
  "Growth Strategy",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-bg pt-40 sm:pt-48"
    >
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 -z-0"
      />

      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 pb-28 sm:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="label-mono"
        >
          CGS · Channel Growth Strategies
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-5xl text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-tightest text-fg"
        >
          Transform Your Channel Strategy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted"
        >
          Unlock growth potential with expert channel development and strategic
          partnerships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex max-w-xl items-center gap-2 rounded-btn border border-border bg-surface px-2 py-2"
        >
          <span className="flex items-center pl-2 text-subtle">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </span>
          <span className="flex-1 px-1 text-sm text-subtle">
            Find your growth strategy…
          </span>
          <a
            href="https://calendly.com/bryan-cgs-llc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-btn bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:bg-fg/90"
          >
            Schedule a Discovery Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {CHIPS.map((c) => (
            <a
              key={c}
              href="#services"
              className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-widest2 text-muted transition hover:border-borderStrong hover:text-fg"
            >
              {c}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
