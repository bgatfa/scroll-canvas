"use client";

import Reveal from "./Reveal";

const AREAS = [
  "Strategic Partnerships",
  "Channel Development",
  "Partner Development",
  "Business Development",
  "Marketing Strategy",
  "Contract Negotiations",
  "Team Management",
  "Team Building",
  "Business Process Management",
  "Global Sales and Product Line Expansion",
  "SaaS Enterprise Software",
  "Cloud Solutions",
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-bg py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-mono">Areas of Expertise</p>
              <h2 className="mt-6 max-w-2xl text-5xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-6xl">
                What we work on with you.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              Twelve practices we draw from. Engagements pick the right ones —
              not all of them.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {AREAS.map((title, i) => (
            <Reveal key={title} delay={i * 0.04} y={12}>
              <article className="card group flex h-full items-center justify-between p-5">
                <h3 className="text-[13px] font-medium text-fg">{title}</h3>
                <span className="font-mono text-[10px] text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
