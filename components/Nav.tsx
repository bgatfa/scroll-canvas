"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "System", href: "#system" },
  { label: "Expertise", href: "#expertise" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const navAlpha = useTransform(scrollY, [0, 80], [0, 0.7]);
  const bg = useMotionTemplate`rgba(var(--nav-bg), ${navAlpha})`;

  return (
    <motion.header
      style={{ backgroundColor: bg }}
      className="fixed left-0 right-0 top-0 z-40 backdrop-blur-xl"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute inset-x-0 bottom-0 hairline"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-[15px] font-medium tracking-tight text-fg">
            CGS
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-widest2 text-subtle sm:inline">
            Channel Growth Strategies
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted transition hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://calendly.com/bryan-cgs-llc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-btn bg-fg px-4 py-1.5 text-[13px] font-medium text-bg transition hover:bg-fg/90"
          >
            Book a call
          </a>
        </div>
      </div>
    </motion.header>
  );
}
