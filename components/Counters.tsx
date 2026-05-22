"use client";

import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Sections animated", end: 8, suffix: "" },
  { label: "Scroll-linked values", end: 42, suffix: "" },
  { label: "Smoothness", end: 99, suffix: "%" },
  { label: "External assets", end: 0, suffix: "" },
];

function Counter({
  progress,
  end,
  suffix,
}: {
  progress: MotionValue<number>;
  end: number;
  suffix: string;
}) {
  const value = useTransform(progress, [0.1, 0.7], [0, end]);
  const [n, setN] = useState(0);
  useEffect(() => value.on("change", (v) => setN(Math.round(v))), [value]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

export default function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-bone/10 bg-ink py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-accent">
          By the numbers
        </p>
        <h2 className="mb-16 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl">
          Numbers that move when you do.
        </h2>

        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl font-light leading-none sm:text-7xl">
                <Counter
                  progress={scrollYProgress}
                  end={s.end}
                  suffix={s.suffix}
                />
              </div>
              <p className="mt-4 max-w-[12rem] text-xs uppercase tracking-widest text-bone/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
