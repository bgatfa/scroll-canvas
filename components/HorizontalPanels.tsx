"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PANELS = [
  {
    n: "I",
    title: "Channel Development",
    body: "We help businesses build and optimize their distribution network — comprehensive strategies for partner recruitment, onboarding, enablement, and management that maximize your market reach.",
  },
  {
    n: "II",
    title: "Partner Programs",
    body: "We design and implement partner programs that drive mutual success: structured frameworks for partner tiers, benefits, and engagement models that foster long-term relationships.",
  },
  {
    n: "III",
    title: "Marketing Strategy",
    body: "We develop customized growth strategies aligned with your business objectives, combining market insights, channel optimization, and partner development to accelerate expansion.",
  },
  {
    n: "IV",
    title: "Market Analysis",
    body: "Through data-driven market analysis we help you understand industry trends, competitor landscapes, and opportunities — so decision-making for strategic growth is informed.",
  },
];

export default function HorizontalPanels() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-ink">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="absolute left-8 top-8 z-20 font-mono text-xs uppercase tracking-widest text-bone/40">
          Services
        </div>
        <motion.div style={{ x }} className="flex h-[70vh] gap-6 pl-[10vw]">
          {PANELS.map((p, i) => (
            <article
              key={p.n}
              className="relative flex h-full w-[80vw] shrink-0 flex-col justify-between overflow-hidden rounded-lg border border-bone/10 p-10 sm:w-[70vw] md:w-[60vw]"
              style={{
                background: `linear-gradient(135deg, hsl(${i * 60 + 10}, 70%, 18%) 0%, #0a0a0f 80%)`,
              }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-bone/50">
                  Panel {p.n}
                </span>
                <span className="font-mono text-xs text-accent2">
                  0{i + 1} / 0{PANELS.length}
                </span>
              </div>

              <div>
                <h3 className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95]">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-bone/60">{p.body}</p>
              </div>

              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-50 blur-3xl"
                style={{ background: `hsl(${i * 60 + 10}, 90%, 50%)` }}
              />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
