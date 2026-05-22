"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PANELS = [
  {
    n: "I",
    title: "Strategy",
    body: "Channel GTM design, partner segmentation, routes-to-market, and the financial model that makes the program defensible to your CFO.",
  },
  {
    n: "II",
    title: "Enablement",
    body: "Partner-ready messaging, sales plays, technical certifications, and the onboarding tracks that get a new partner to first deal in 60 days.",
  },
  {
    n: "III",
    title: "Operations",
    body: "Deal registration, MDF, rebates, SPIFFs, tiering, and the PRM stack — built so partners get paid fast and your team isn't drowning in tickets.",
  },
  {
    n: "IV",
    title: "Co-sell",
    body: "Hyperscaler alignment (AWS, Azure, GCP), marketplace listings, private offers, and the rep-to-rep motions that turn a logo into pipeline.",
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
