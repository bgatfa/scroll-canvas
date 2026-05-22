"use client";

import Reveal from "./Reveal";

const AREAS = [
  {
    title: "Strategic Partnerships",
    body: "Comprehensive partnership solutions for sustainable, mutual growth.",
    hue: "from-copper/30 via-clay/10 to-transparent",
  },
  {
    title: "Business Development",
    body: "Strategic business expansion grounded in market insight.",
    hue: "from-sage/30 via-clay/10 to-transparent",
  },
  {
    title: "Marketing Strategy",
    body: "Customized strategies that align with objectives and unlock channel growth.",
    hue: "from-clay/45 via-copper/10 to-transparent",
  },
  {
    title: "Channel Development",
    body: "Strategic channel planning, optimization, and execution.",
    hue: "from-sage/35 via-copper/10 to-transparent",
  },
  {
    title: "Partner Programs",
    body: "Programs designed for tiering, benefits, and long-term engagement.",
    hue: "from-copper/30 via-sage/10 to-transparent",
  },
  {
    title: "Contract Negotiations",
    body: "Structured agreements that protect both sides of the partnership.",
    hue: "from-clay/40 via-sage/10 to-transparent",
  },
  {
    title: "Business Process Management",
    body: "Operating models that scale without losing what made them work.",
    hue: "from-sage/30 via-clay/10 to-transparent",
  },
  {
    title: "Global Sales & Product Expansion",
    body: "Channel development across geographies and product lines.",
    hue: "from-copper/30 via-clay/15 to-transparent",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-surface py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 sm:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-copper">Areas of expertise</p>
                <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-6xl">
                  What we work on when{" "}
                  <span className="serif-italic text-muted">we work with you.</span>
                </h2>
              </div>
              <p className="max-w-sm text-[15px] leading-relaxed text-ink/65">
                Eight practices we draw from. Engagements pick the right ones —
                not all of them.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="hide-scrollbar mt-16 flex gap-5 overflow-x-auto px-6 pb-6 sm:px-10 [scroll-snap-type:x_mandatory]">
            {AREAS.map((a, i) => (
              <article
                key={a.title}
                className="group relative flex w-[78vw] shrink-0 flex-col justify-between rounded-2xl border border-line bg-cream p-8 transition hover:border-ink/30 sm:w-[44vw] sm:p-10 md:w-[28rem] [scroll-snap-align:start]"
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-gradient-to-bl ${a.hue} opacity-90 blur-2xl`}
                />
                <header className="flex items-baseline justify-between">
                  <span className="eyebrow text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="text-ink/30">
                    ✦
                  </span>
                </header>
                <div className="mt-24">
                  <h3 className="font-display text-2xl font-light leading-tight tracking-tight text-ink sm:text-3xl">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
                    {a.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 px-6 text-[13px] uppercase tracking-[0.18em] text-muted sm:px-10">
            Industries served · SaaS Enterprise Software
          </p>
        </Reveal>
      </div>
    </section>
  );
}
