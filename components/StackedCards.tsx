"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CARDS = [
  {
    tag: "01 · Principle",
    title: "Partners are a market, not a megaphone.",
    body: "If your partner program is just a press release and a logo wall, you don't have a channel — you have a brochure. Treat partners like a segment with P&L, ICP, and a buying journey.",
    hue: 14,
  },
  {
    tag: "02 · Principle",
    title: "Ease beats incentive.",
    body: "Partners sell what's easy to quote, easy to demo, easy to renew, and easy to get paid for. Margin matters; friction matters more. We obsess over the second.",
    hue: 180,
  },
  {
    tag: "03 · Principle",
    title: "Co-sell or be sold against.",
    body: "Your hyperscaler reps and SI partners are quoting somebody this quarter. If it isn't you, it's the competitor who showed up with a private offer and a joint plan.",
    hue: 280,
  },
  {
    tag: "04 · Principle",
    title: "Pipeline is the only proof.",
    body: "Signed partners, certified engineers, MDF spent — none of it matters without sourced and influenced pipeline. We build programs measured the way your board measures the business.",
    hue: 50,
  },
];

function Card({
  card,
  index,
  total,
  progress,
}: {
  card: (typeof CARDS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = 1;
  const scale = useTransform(progress, [start, end], [1, 1 - (total - index - 1) * 0.04]);
  const y = useTransform(progress, [start, end], [0, -(total - index - 1) * 18]);
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [
    1,
    1,
    1 - (total - index - 1) * 0.12,
    1 - (total - index - 1) * 0.12,
  ]);

  return (
    <div
      className="sticky flex items-center justify-center px-6"
      style={{ top: `${10 + index * 4}vh`, height: "100vh" }}
    >
      <motion.article
        style={{ scale, y, opacity }}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-bone/10 bg-ink p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-14"
      >
        <div
          aria-hidden
          className="absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: `hsl(${card.hue}, 90%, 55%)` }}
        />
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/50">
          {card.tag}
        </p>
        <h3 className="mt-6 font-display text-4xl font-light leading-tight sm:text-6xl">
          {card.title}
        </h3>
        <p className="mt-6 max-w-lg text-bone/65">{card.body}</p>
      </motion.article>
    </div>
  );
}

export default function StackedCards() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative bg-ink">
      <div className="mx-auto max-w-6xl px-6 pt-32 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-accent">
          How we think
        </p>
        <h2 className="mx-auto max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl">
          Four principles for building a channel that holds.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-bone/60">
          We&apos;ve seen the shortcuts. None of them worked. These did.
        </p>
      </div>

      <div className="relative">
        {CARDS.map((c, i) => (
          <Card
            key={c.tag}
            card={c}
            index={i}
            total={CARDS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <div className="h-[20vh]" />
    </section>
  );
}
