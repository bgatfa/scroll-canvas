"use client";

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-32 text-cream sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow text-clay">Let&apos;s talk</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 font-display text-5xl font-light leading-[1.02] tracking-tight sm:text-8xl">
                Ready to transform{" "}
                <span className="serif-italic text-clay">
                  your channel strategy?
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-10 max-w-md text-[15px] leading-relaxed text-cream/75">
                Book a free 30-minute discovery call to discuss your needs and
                how we can help you reach your channel growth objectives.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href="https://calendly.com/bryan-cgs-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm font-medium text-ink transition hover:bg-copper hover:text-cream"
                >
                  Schedule a discovery call
                  <span
                    aria-hidden
                    className="transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bryan-keepers-577a922/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream transition hover:border-cream"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:border-l md:border-cream/10 md:pl-12">
            <Reveal delay={0.1}>
              <div className="space-y-10">
                <div>
                  <p className="eyebrow text-cream/40">Bryan Keepers</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/80">
                    Channel coaching, partner programs, and market strategy —
                    twenty-plus years.
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-cream/40">Scheduling</p>
                  <a
                    href="https://calendly.com/bryan-cgs-llc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[15px] text-cream/90 underline-offset-4 hover:underline"
                  >
                    calendly.com/bryan-cgs-llc
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-cream/40">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/bryan-keepers-577a922/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[15px] text-cream/90 underline-offset-4 hover:underline"
                  >
                    linkedin.com/in/bryan-keepers
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
