"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  by?: "char" | "word";
  once?: boolean;
};

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const item: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.025,
  by = "char",
  once = true,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-15% 0px -15% 0px" });

  const parts = by === "char" ? Array.from(text) : text.split(/(\s+)/);

  return (
    <motion.span
      ref={ref}
      variants={container}
      custom={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {parts.map((p, i) => {
        if (p.trim() === "") return <span key={i}>{p}</span>;
        return (
          <span
            key={i}
            aria-hidden
            className="inline-block overflow-hidden align-baseline"
          >
            <motion.span variants={item} className="inline-block">
              {p === " " ? " " : p}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
