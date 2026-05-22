"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const ITEMS = [
  {
    tag: "Case 01 · Cybersecurity",
    title: "From direct-led to MSSP-led in 18 months",
    detail: "Series C security vendor · ARR through partners: 9% → 41%",
    hue: 18,
  },
  {
    tag: "Case 02 · DevTools",
    title: "PLG, meet the channel",
    detail: "Open-source platform · 0 to 60 reseller partners, 3 hyperscaler co-sell motions live",
    hue: 200,
  },
  {
    tag: "Case 03 · Cloud infrastructure",
    title: "Marketplace as a primary sales motion",
    detail: "Infra vendor · $32M closed via AWS & Azure private offers in year one",
    hue: 320,
  },
  {
    tag: "Case 04 · AI platforms",
    title: "Channel-ready before Series B",
    detail: "AI infra startup · Program design, first 12 partner contracts, GTM playbook shipped",
    hue: 80,
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="bg-ink py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-accent">
            Selected work
          </p>
          <h2 className="mb-16 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl">
            Programs we&apos;ve built, scaled, or fixed.
          </h2>
        </Reveal>

        <motion.div style={{ y }} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.tag} delay={i * 0.08} y={48}>
              <TiltCard max={8}>
                <article className="group relative aspect-[4/3] overflow-hidden rounded-md border border-bone/10">
                  <div
                    className="absolute inset-0 transition-transform duration-[1200ms] ease-out"
                    style={{
                      background: `radial-gradient(120% 80% at 30% 20%, hsl(${item.hue}, 80%, 55%) 0%, hsl(${item.hue + 40}, 60%, 18%) 60%, #0a0a0f 100%)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-bone/60">
                      {item.tag}
                    </p>
                    <h3 className="font-display text-2xl font-light leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-bone/65">{item.detail}</p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <p className="mt-12 max-w-xl text-sm text-bone/50">
            Names withheld under NDA. Numbers are real and verifiable in
            reference calls.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
