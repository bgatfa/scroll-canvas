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
    <section id="system" className="bg-surface py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-copper">The System</p>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-6xl">
                How we drive your{" "}
                <span className="serif-italic text-muted">success.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink/65">
              Three phases. The same disciplined sequence, adapted to your
              business — not a template dressed up for one.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <ul className="flex flex-col gap-1 border-y border-line md:border-none">
              {PHASES.map((p, i) => (
                <li key={p.key}>
                  <button
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={`group flex w-full items-baseline justify-between border-line py-6 text-left transition-colors md:border-t ${
                      i === PHASES.length - 1 ? "border-b md:border-b-0" : ""
                    } ${active === i ? "text-ink" : "text-ink/40 hover:text-ink/70"}`}
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="eyebrow w-8 text-muted">{p.n}</span>
                      <span className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                        {p.title}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`mr-2 text-xl transition ${
                        active === i ? "text-copper" : "text-ink/30"
                      }`}
                    >
                      {active === i ? "●" : "○"}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-cream p-10 sm:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="eyebrow text-copper">Phase {phase.n}</p>
                  <h3 className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
                    {phase.headline}
                  </h3>
                  <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/75">
                    {phase.body}
                  </p>
                  <ul className="mt-10 grid grid-cols-1 gap-y-3 border-t border-line pt-8 sm:grid-cols-3">
                    {phase.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink/70"
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
