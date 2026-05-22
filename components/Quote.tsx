"use client";

export default function Quote() {
  return (
    <section className="relative border-y border-border bg-surface py-32 sm:py-40">
      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-10">
        <p className="label-mono">Mission</p>
        <blockquote className="mt-10 text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.1] tracking-tightest text-fg">
          Our mission is to become the most trusted channel coaching and
          training business in the Americas.
        </blockquote>
        <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-muted">
          At CGS, we exist to help businesses achieve success through making
          critical assessments and adjustments to benefit their culture and
          bottom line.
        </p>
      </div>
    </section>
  );
}
