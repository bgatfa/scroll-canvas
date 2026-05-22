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
      id="contact"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bone px-6 py-24 text-ink"
    >
      <motion.div style={{ scale, opacity, filter }} className="text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-accent">
          Let&apos;s talk
        </p>
        <h2 className="font-display text-5xl font-light italic leading-none sm:text-8xl">
          Your channel,
          <br />
          <span className="not-italic">engineered.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-ink/70">
          Tell us about your product, your direct motion, and where the channel
          fits. We&apos;ll come back in 48 hours with a one-page diagnostic and
          a recommendation.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="mailto:hello@conduitpartners.co"
            data-cursor="hover"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-medium text-bone transition hover:bg-accent hover:text-ink"
          >
            hello@conduitpartners.co
            <span aria-hidden>→</span>
          </a>
          <a
            href="https://cal.com/conduit"
            data-cursor="hover"
            className="text-sm uppercase tracking-[0.3em] text-ink/70 underline-offset-8 hover:underline"
          >
            Book a 30-min intro
          </a>
        </div>
      </motion.div>

      <footer className="absolute bottom-8 left-1/2 flex w-full max-w-6xl -translate-x-1/2 items-center justify-between px-6 text-[10px] uppercase tracking-[0.4em] text-ink/50">
        <span>Conduit Partners · Channel sales consulting</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
