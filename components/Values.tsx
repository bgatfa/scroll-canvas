"use client";

import Reveal from "./Reveal";

const VALUES = [
  {
    n: "01",
    title: "Honor, respect, authenticity.",
    body: "We treat our clients and our community with honor, respect, and authenticity. Relationship first.",
  },
  {
    n: "02",
    title: "Work hard for clients.",
    body: "When we take an engagement, we take it seriously. The bar is helping the client win — not delivering the deck.",
  },
  {
    n: "03",
    title: "Serve beyond expectations.",
    body: "We help the clients and teammates we meet, and we serve them beyond what is typically expected in a business relationship.",
  },
  {
    n: "04",
    title: "Growth keeps it exciting.",
    body: "Growth and improvement make life and business exciting and challenging. We bring that energy to every engagement.",
  },
];

export default function Values() {
  return (
    <section className="bg-surface py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow text-copper">Our values</p>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-6xl">
                How we show up{" "}
                <span className="serif-italic text-muted">
                  for the people we work with.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink/65 md:col-span-5 md:col-start-8 md:pt-3">
              The same four things, every engagement. They&apos;re how we make
              decisions when nobody is watching.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 border-t border-line">
          {VALUES.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.06} y={20}>
              <div className="group grid grid-cols-1 gap-6 border-b border-line py-10 transition md:grid-cols-12 md:gap-12 md:py-12">
                <span className="eyebrow text-muted md:col-span-2">{v.n}</span>
                <h3 className="font-display text-2xl font-light leading-tight tracking-tight text-ink md:col-span-5 sm:text-4xl">
                  {v.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/70 md:col-span-5">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
