"use client";

import Reveal from "./Reveal";

const ROWS = [
  {
    label: "Founder",
    value: "Bryan Keepers",
    href: undefined,
  },
  {
    label: "Scheduling",
    value: "calendly.com/bryan-cgs-llc",
    href: "https://calendly.com/bryan-cgs-llc",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bryan-keepers",
    href: "https://www.linkedin.com/in/bryan-keepers-577a922/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-bg py-32 sm:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="label-mono">Get Started</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-5xl font-medium leading-[1.02] tracking-tightest text-fg sm:text-7xl">
                Ready to Transform Your Channel Strategy?
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-muted">
                Let&apos;s discuss how we can help you achieve your channel
                growth objectives.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://calendly.com/bryan-cgs-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-btn bg-fg px-5 py-3 text-sm font-medium text-bg transition hover:bg-fg/90"
                >
                  Schedule a Discovery Call
                </a>
                <a
                  href="https://www.linkedin.com/in/bryan-keepers-577a922/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-btn border border-border px-5 py-3 text-sm font-medium text-fg transition hover:border-borderStrong"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <div className="border-t border-border">
                {ROWS.map((r) => (
                  <div
                    key={r.label}
                    className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-b border-border py-4"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                      {r.label}
                    </span>
                    {r.href ? (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-fg underline-offset-4 hover:underline"
                      >
                        {r.value}
                      </a>
                    ) : (
                      <span className="text-[14px] text-fg">{r.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
