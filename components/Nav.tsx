"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "The System", href: "#system" },
  { label: "Expertise", href: "#expertise" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bg = useTransform(scrollY, [0, 80], ["rgba(239,235,226,0)", "rgba(239,235,226,0.92)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg }}
      className="fixed left-0 right-0 top-0 z-40 backdrop-blur-md"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute inset-x-0 bottom-0 hairline"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-lg font-medium tracking-tight text-ink">
            Channel Growth Strategies
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-ink/70 transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://calendly.com/bryan-cgs-llc"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2 text-[13px] font-medium text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
        >
          Book a call
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </motion.header>
  );
}
