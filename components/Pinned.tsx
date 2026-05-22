"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    eyebrow: "Phase 01",
    title: "Assess.",
    body: "We start with critical assessment — your current channel, partner mix, programs, and the operating model that surrounds them. The honest picture is the only place real progress begins.",
  },
  {
    eyebrow: "Phase 02",
    title: "Adjust.",
    body: "We make the adjustments that benefit both culture and bottom line — refined programs, sharper segmentation, the right partner tiers, and the enablement that makes selling easy.",
  },
  {
    eyebrow: "Phase 03",
    title: "Accelerate.",
    body: "With the foundation in place we coach and train your team to scale. Channel performance becomes measurable, predictable, and durable.",
  },
];

function Step({
  progress,
  step,
  index,
  total,
}: {
  progress: MotionValue<number>;
  step: (typeof STEPS)[number];
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], [40, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute right-0 top-1/2 max-w-sm -translate-y-1/2 px-8 text-right"
    >
      <p className="mb-3 font-mono text-xs text-accent2">{step.eyebrow}</p>
      <h3 className="font-display text-4xl font-light leading-tight sm:text-5xl">
        {step.title}
      </h3>
      <p className="mt-3 text-sm text-bone/60">{step.body}</p>
    </motion.div>
  );
}

export default function Pinned() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1.6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 270]);
  const radius = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "20%", "8%"]);
  const hue = useTransform(scrollYProgress, [0, 0.5, 1], [10, 190, 280]);
  const bg = useTransform(hue, (h) => `hsl(${h}, 85%, 60%)`);

  return (
    <section ref={ref} className="relative h-[320vh] bg-ink">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          aria-hidden
          style={{ scale, rotate, borderRadius: radius, background: bg }}
          className="absolute h-[40vmin] w-[40vmin] shadow-[0_0_120px_rgba(255,91,62,0.35)]"
        />

        <div className="relative z-10 mx-auto h-full w-full max-w-6xl">
          {STEPS.map((s, i) => (
            <Step
              key={s.eyebrow}
              progress={scrollYProgress}
              step={s}
              index={i}
              total={STEPS.length}
            />
          ))}
        </div>

        <div className="absolute left-8 top-8 font-mono text-xs uppercase tracking-widest text-bone/40">
          How we drive your success
        </div>
      </div>
    </section>
  );
}
