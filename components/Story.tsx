"use client";

import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="bg-bg py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <p className="label-mono">About</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-[clamp(6rem,16vw,14rem)] font-medium leading-[0.9] tracking-tightest text-fg">
                20+
              </div>
              <p className="mt-4 max-w-xs font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Years in channel development &amp; market strategy
              </p>
            </Reveal>
          </div>

          <div className="space-y-6 md:col-span-7 md:pt-8">
            <Reveal delay={0.08}>
              <h2 className="text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl">
                CGS is a leading consulting firm with over two decades of
                experience in channel development and market strategy.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-[15px] leading-relaxed text-muted">
                Our team of seasoned professionals brings diverse expertise from
                various industries, allowing us to provide comprehensive
                solutions tailored to each client&apos;s unique needs.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="text-[15px] leading-relaxed text-muted">
                Founded on principles of innovation and excellence, we&apos;ve
                helped countless organizations transform their business models
                and achieve sustainable growth through strategic partnerships
                and market expansion.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="card mt-16 grid grid-cols-1 gap-8 p-8 md:grid-cols-12 md:p-10">
            <div className="md:col-span-4">
              <p className="label-mono">Founder</p>
              <p className="mt-4 text-xl font-medium text-fg">Bryan Keepers</p>
              <a
                href="https://www.linkedin.com/in/bryan-keepers-577a922/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-fg"
              >
                linkedin.com/in/bryan-keepers →
              </a>
            </div>
            <p className="text-[15px] leading-relaxed text-muted md:col-span-8">
              Bryan is a seasoned sales and marketing professional, who brings a
              track record of excellence in building and managing channel sales
              teams and marketing programs while with Wasp Barcode Technologies
              and Opengear. He has also designed and implemented sales and
              marketing initiatives in various markets including direct market,
              corporate, retail, value-added reseller, distribution, e-commerce,
              and enterprise segments, where he has driven revenue growth,
              established strong and robust partnerships, and has navigated
              complex sales landscapes to deliver impactful and measurable
              results.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
