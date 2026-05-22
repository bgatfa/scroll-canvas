"use client";

import Reveal from "./Reveal";

const PILLARS = [
  {
    label: "Honor · Respect · Authenticity",
    body: "We treat clients and community with honor, respect, and authenticity — relationship before transaction.",
  },
  {
    label: "Beyond Expectations",
    body: "We serve the clients and teammates we meet beyond what is typically expected in a business relationship.",
  },
  {
    label: "Growth · Improvement",
    body: "Growth and improvement make life and business exciting and challenging — we bring that energy to every engagement.",
  },
];

export default function Values() {
  return (
    <section className="border-y border-border bg-surface py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="label-mono">Values</p>
              <h2 className="mt-6 text-5xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-6xl">
                How we show up.
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card mt-12 p-8 sm:p-10">
            <p className="text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium leading-relaxed tracking-tight text-fg">
              We value treating our clients, and community with honor, respect,
              authenticity. We will work hard for our clients and want to help
              the clients and teammates we meet and serve them beyond what is
              typically expected in a business relationship. Growth and
              improvement make life and business exciting and challenging.
            </p>
          </div>
        </Reveal>

        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06} y={12}>
              <article className="card flex h-full flex-col p-6">
                <p className="label-mono">{p.label}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
