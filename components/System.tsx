"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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
  const [active, setActive] = useState(0);
  const phase = PHASES[active];

  return (
    <section id="system" className="bg-bg py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
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

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <ul className="flex flex-col">
              {PHASES.map((p, i) => {
                const isActive = active === i;
                return (
                  <li key={p.key}>
                    <button
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={`flex w-full items-baseline justify-between border-l-2 pl-4 py-4 text-left transition-colors ${
                        isActive
                          ? "border-fg text-fg"
                          : "border-border text-muted hover:text-fg"
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

          <div className="md:col-span-8">
            <div className="card relative overflow-hidden p-8 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="label-mono">Phase {phase.n}</p>
                  <h3 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl">
                    {phase.headline}
                  </h3>
                  <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
                    {phase.body}
                  </p>
                  <ul className="mt-8 grid grid-cols-1 gap-y-3 border-t border-border pt-6 sm:grid-cols-3">
                    {phase.bullets.map((b) => (
                      <li
                        key={b}
                        className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
