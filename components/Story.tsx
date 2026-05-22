"use client";

import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

function Counter({
  progress,
  end,
  suffix,
}: {
  progress: MotionValue<number>;
  end: number;
  suffix?: string;
}) {
  const value = useTransform(progress, [0.1, 0.7], [0, end]);
  const [n, setN] = useState(0);
  useEffect(() => value.on("change", (v) => setN(Math.round(v))), [value]);
  return (
    <span>
      {n}
      {suffix ?? ""}
    </span>
  );
}

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section id="story" ref={ref} className="bg-cream py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow text-copper">Our story</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="font-display text-[clamp(7rem,18vw,16rem)] font-light leading-[0.9] tracking-[-0.04em] text-ink">
                <Counter progress={scrollYProgress} end={20} suffix="+" />
              </div>
              <p className="mt-3 max-w-xs text-[13px] uppercase tracking-[0.18em] text-muted">
                Years in channel development & market strategy
              </p>
            </Reveal>
          </div>

          <div className="space-y-8 md:col-span-7 md:pt-10">
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-light leading-[1.1] tracking-tight text-ink sm:text-5xl">
                A leading consulting firm built on{" "}
                <span className="serif-italic text-copper">
                  innovation and excellence.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-[15px] leading-relaxed text-ink/75">
                CGS brings seasoned expertise across channel development and
                market strategy. Our team draws on diverse industry backgrounds,
                so we tailor comprehensive solutions to each client&apos;s
                unique needs.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="text-[15px] leading-relaxed text-ink/75">
                Founded on principles of innovation and excellence, we&apos;ve
                helped organizations transform their business models and
                achieve sustainable growth through strategic partnerships and
                market expansion.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
