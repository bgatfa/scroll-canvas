"use client";

import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Channel Development",
    body: "Strategic channel growth and optimization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v4M12 11l-7 6M12 11l7 6" />
      </svg>
    ),
  },
  {
    title: "Partner Programs",
    body: "Develop and optimize partner programs that drive mutual growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M8 12 4 8l4-4M16 12l4-4-4-4M4 8h16" />
        <path d="M8 20l-4-4 4-4M16 20l4-4-4-4M4 16h16" />
      </svg>
    ),
  },
  {
    title: "Market Analysis",
    body: "Data-driven market insights and opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M3 20h18M6 17V9M11 17V5M16 17v-7M21 17v-4" />
      </svg>
    ),
  },
  {
    title: "Growth Strategy",
    body: "Customized strategies for sustainable growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <p className="label-mono">Services</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-6xl">
            Everything you need to grow your channel.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="card group relative flex h-full flex-col p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface2 text-fg">
                  {s.icon}
                </div>
                <h3 className="mt-6 text-[15px] font-medium text-fg">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {s.body}
                </p>
                <span
                  aria-hidden
                  className="mt-6 inline-flex w-fit items-center text-subtle transition group-hover:translate-x-0.5 group-hover:text-fg"
                >
                  →
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
