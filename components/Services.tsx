"use client";

import Reveal from "./Reveal";

const SERVICES = [
  {
    n: "01",
    tag: "Distribution",
    title: "Channel Development",
    body: "Build and optimize the distribution network — partner recruitment, onboarding, enablement, and management that maximize market reach.",
    swatch: "from-copper/35 to-clay/20",
  },
  {
    n: "02",
    tag: "Programs",
    title: "Partner Programs",
    body: "Design and implement programs that drive mutual success — partner tiers, benefits, and engagement models that foster long-term relationships.",
    swatch: "from-sage/35 to-clay/20",
  },
  {
    n: "03",
    tag: "Growth",
    title: "Marketing Strategy",
    body: "Customized growth strategies aligned with your objectives, combining market insights, channel optimization, and partner development.",
    swatch: "from-clay/45 to-copper/15",
  },
  {
    n: "04",
    tag: "Insight",
    title: "Market Analysis",
    body: "Data-driven analysis of industry trends, competitor landscapes, and opportunities — so decisions for strategic growth are informed.",
    swatch: "from-sage/30 to-copper/15",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow text-copper">Services</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Four practices.{" "}
            <span className="serif-italic text-muted">
              One operating model for growth.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} y={32}>
              <article
                className={`group relative flex h-full flex-col justify-between bg-surface p-8 transition-colors duration-700 hover:bg-cream sm:p-12`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br ${s.swatch} opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100`}
                />
                <header className="flex items-start justify-between">
                  <span className="eyebrow text-muted">
                    {s.n} · {s.tag}
                  </span>
                  <span
                    aria-hidden
                    className="text-ink/40 transition group-hover:translate-x-1 group-hover:text-ink"
                  >
                    →
                  </span>
                </header>
                <div className="mt-16">
                  <h3 className="font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/70">
                    {s.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
