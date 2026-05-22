"use client";

import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Number({
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
      id="story"
      ref={ref}
      className="relative overflow-hidden border-y border-bone/10 bg-ink py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-accent">
            Our story
          </p>
          <div className="font-display text-[clamp(6rem,18vw,16rem)] font-light leading-none">
            <Number progress={scrollYProgress} end={20} suffix="+" />
          </div>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-bone/50">
            Years in channel development
          </p>
        </div>

        <div className="space-y-6 text-bone/75 md:col-span-7 md:pt-12">
          <h2 className="font-display text-4xl font-light leading-tight text-bone sm:text-5xl">
            A leading consulting firm with over two decades of experience.
          </h2>
          <p>
            CGS brings seasoned expertise across channel development and market
            strategy. Our team draws on diverse industry backgrounds, so we
            tailor comprehensive solutions to each client&apos;s unique needs.
          </p>
          <p>
            Founded on principles of innovation and excellence, we&apos;ve
            helped organizations transform their business models and achieve
            sustainable growth through strategic partnerships and market
            expansion.
          </p>
        </div>
      </div>
    </section>
  );
}
