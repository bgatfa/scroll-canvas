"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Nav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200, 400], [0, 0, 1]);
  const y = useTransform(scrollY, [0, 400], [-20, 0]);
  const blur = useTransform(scrollY, [0, 400], [0, 12]);
  const backdropFilter = useTransform(blur, (b) => `blur(${b}px) saturate(120%)`);

  return (
    <motion.header
      style={{ opacity, y, backdropFilter }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-bone/5 bg-ink/40"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          data-cursor="hover"
          className="flex items-center gap-2 text-sm font-medium tracking-tight"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent"
          />
          Conduit Partners
        </a>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-bone/60 sm:flex">
          <a href="#services" data-cursor="hover" className="hover:text-bone">
            Services
          </a>
          <a href="#work" data-cursor="hover" className="hover:text-bone">
            Work
          </a>
          <a href="#contact" data-cursor="hover" className="hover:text-bone">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          data-cursor="hover"
          className="rounded-full border border-bone/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-bone transition hover:border-accent hover:bg-accent hover:text-ink"
        >
          Book intro
        </a>
      </div>
    </motion.header>
  );
}
