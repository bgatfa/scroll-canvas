"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useRef } from "react";

const WORDS = [
  "Strategic Partnerships",
  "Business Development",
  "Marketing Strategy",
  "Channel Development",
  "Partner Programs",
  "Contract Negotiations",
  "Business Process Management",
  "Global Sales",
  "Product Line Expansion",
];

function Row({
  baseSpeed,
  reverse = false,
  italic = false,
}: {
  baseSpeed: number;
  reverse?: boolean;
  italic?: boolean;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVel = useVelocity(scrollY);
  const smoothVel = useSpring(scrollVel, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVel, [0, 1000], [0, 4], {
    clamp: false,
  });
  const skew = useTransform(smoothVel, [-2000, 0, 2000], [-8, 0, 8]);

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef(reverse ? -1 : 1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseSpeed * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = reverse ? 1 : -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = reverse ? -1 : 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const words = reverse ? [...WORDS].reverse() : WORDS;

  return (
    <motion.div
      style={{ x, skewX: skew }}
      className={`flex whitespace-nowrap font-display text-[clamp(4rem,12vw,11rem)] font-light leading-none ${
        italic ? "italic text-bone/25" : ""
      }`}
    >
      {[...Array(4)].map((_, repeatIdx) => (
        <span key={repeatIdx} className="flex">
          {words.map((w, i) => (
            <span key={`${repeatIdx}-${i}`} className="mx-8 inline-block">
              {w}
              {!italic && (
                <span className="mx-8 inline-block text-accent">•</span>
              )}
            </span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-bone/10 bg-ink py-20">
      <Row baseSpeed={2} />
      <div className="mt-2">
        <Row baseSpeed={2.4} reverse italic />
      </div>
    </section>
  );
}
