"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  max?: number;
};

export default function TiltCard({ children, className, max = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const px = useMotionValue(50);
  const py = useMotionValue(50);

  const srx = useSpring(rx, { stiffness: 220, damping: 18, mass: 0.4 });
  const sry = useSpring(ry, { stiffness: 220, damping: 18, mass: 0.4 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${srx}deg) rotateY(${sry}deg)`;
  const shine = useMotionTemplate`radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.18), transparent 50%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    rx.set((0.5 - y) * max * 2);
    ry.set((x - 0.5) * max * 2);
    px.set(x * 100);
    py.set(y * 100);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
    px.set(50);
    py.set(50);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      className={`relative ${className ?? ""}`}
      data-cursor="hover"
    >
      {children}
      <motion.div
        aria-hidden
        style={{ background: shine }}
        className="pointer-events-none absolute inset-0 rounded-md"
      />
    </motion.div>
  );
}
