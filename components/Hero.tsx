"use client";

import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import SplitText from "./SplitText";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const velocity = useVelocity(scrollY);
  const smoothVel = useSpring(velocity, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
  });
  const skew = useTransform(smoothVel, [-2000, 0, 2000], [-6, 0, 6]);

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY, scale: glowScale }}
        className="glow absolute inset-0"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 text-xs uppercase tracking-[0.5em] text-accent2"
        >
          A scroll experiment
        </motion.p>

        <motion.h1
          style={{ y: titleY, skewY: skew }}
          className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.95] tracking-tight"
        >
          <SplitText text="Move" className="block" stagger={0.04} />
          <SplitText
            text="slowly,"
                       className="block italic text-accent"
            stagger={0.04}
            delay={0.25}
          />
          <SplitText
            text="arrive somewhere."
                       className="block"
            stagger={0.025}
            delay={0.55}
          />
        </motion.h1>

        <motion.p
          style={{ y: subY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mx-auto mt-10 max-w-xl text-base text-bone/70 sm:text-lg"
        >
          Scroll. Every section reacts. Nothing waits for a click.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-bone/40"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          scroll ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
