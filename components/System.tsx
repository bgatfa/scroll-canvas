"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "./Reveal";

const PHASES = [
  {
    n: "I",
    key: "assess",
    title: "Assess",
    headline: "Start with the honest picture.",
    body: "We begin with critical assessment — your current channel, partner mix, programs, and the operating model around them. The honest picture is the only place real progress begins.",
    bullets: [
      "Channel performance audit",
      "Partner & program review",
      "Gap analysis vs. target market",
    ],
  },
  {
    n: "II",
    key: "adjust",
    title: "Adjust",
    headline: "Make the moves that benefit culture and the bottom line.",
    body: "Refined programs, sharper segmentation, the right partner tiers, and the enablement that makes selling easy. Adjustments are practical and prioritized by impact.",
    bullets: [
      "Program redesign & tiering",
      "Partner enablement & onboarding",
      "Process & operating-model fixes",
    ],
  },
  {
    n: "III",
    key: "accelerate",
    title: "Accelerate",
    headline: "Coach the team that runs the engine.",
    body: "With the foundation in place we coach and train the team to scale. Channel performance becomes measurable, predictable, and durable.",
    bullets: [
      "Leadership & seller coaching",
      "Metrics, dashboards, cadence",
      "Quarterly optimization rhythm",
    ],
  },
];

export default function System() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = v >= 0.66 ? 2 : v >= 0.33 ? 1 : 0;
    setActive((prev) => (prev === next ? prev : next));
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scrollToPhase = (i: number) => {
    setActive(i);
    const el = trackRef.current;
    if (!el) return;
    const absoluteTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    const targetProgress = (i + 0.5) / PHASES.length;
    const top = absoluteTop + scrollable * targetProgress;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="system" className="relative bg-bg">
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-10 sm:pt-40">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-mono">The System</p>
              <h2 className="mt-6 max-w-2xl text-5xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-6xl">
                How we drive your success.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              Three phases. The same disciplined sequence, adapted to your
              business — not a template dressed up for one.
            </p>
          </div>
        </Reveal>
      </div>

      <div ref={trackRef} className="relative h-[260vh] pb-32 sm:pb-40">
        <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-px bg-border"
                  />
                  <motion.span
                    aria-hidden
                    style={{ height: progressHeight }}
                    className="absolute left-0 top-0 w-px bg-fg"
                  />
                  <ul className="flex flex-col">
                    {PHASES.map((p, i) => {
                      const isActive = active === i;
                      return (
                        <li key={p.key}>
                          <button
                            onClick={() => scrollToPhase(i)}
                            aria-pressed={isActive}
                            className={`flex w-full items-baseline justify-between pl-4 py-4 text-left transition-colors ${
                              isActive
                                ? "text-fg"
                                : "text-muted hover:text-fg"
                            }`}
                          >
                            <span className="flex items-baseline gap-4">
                              <span className="font-mono text-[11px] uppercase tracking-widest2 text-subtle">
                                {p.n}
                              </span>
                              <span className="font-mono text-[12px] uppercase tracking-[0.16em]">
                                {p.title}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-8">
                <div className="card relative overflow-hidden p-8 sm:p-10">
                  <div className="grid">
                    {PHASES.map((p, i) => {
                      const isActive = active === i;
                      return (
                        <motion.div
                          key={p.key}
                          aria-hidden={!isActive}
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 8,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{
                            gridColumn: 1,
                            gridRow: 1,
                            pointerEvents: isActive ? "auto" : "none",
                          }}
                        >
                          <p className="label-mono">Phase {p.n}</p>
                          <h3 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl">
                            {p.headline}
                          </h3>
                          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
                            {p.body}
                          </p>
                          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-border pt-6 sm:grid-cols-3">
                            {p.bullets.map((b) => (
                              <li
                                key={b}
                                className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
                              >
                                {b}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
