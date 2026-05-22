"use client";

import Image from "next/image";
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
          <div className="card mt-16 grid grid-cols-1 gap-8 p-8 md:grid-cols-12 md:gap-10 md:p-10">
            <div className="md:col-span-3">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full border border-border bg-surface2 md:mx-0 md:w-full md:max-w-[200px]">
                <Image
                  src="/bryan.webp"
                  alt="Bryan Keepers, Founder of Channel Growth Strategies"
                  fill
                  sizes="(min-width: 768px) 200px, 160px"
                  className="object-contain grayscale contrast-[1.05]"
                  priority={false}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 50% 0%, transparent 55%, var(--surface) 100%)",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border"
                />
              </div>
            </div>
            <div className="md:col-span-9">
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
              <p className="mt-6 text-[15px] leading-relaxed text-muted">
                Bryan is a seasoned sales and marketing professional, who brings
                a track record of excellence in building and managing channel
                sales teams and marketing programs while with Wasp Barcode
                Technologies and Opengear. He has also designed and implemented
                sales and marketing initiatives in various markets including
                direct market, corporate, retail, value-added reseller,
                distribution, e-commerce, and enterprise segments, where he has
                driven revenue growth, established strong and robust
                partnerships, and has navigated complex sales landscapes to
                deliver impactful and measurable results.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
