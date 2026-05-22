"use client";

const ITEMS = [
  "20+ years in channel development",
  "Strategic partnerships designed for mutual growth",
  "Customized programs, tailored every time",
  "Book a free discovery call",
];

export default function Marquee() {
  return (
    <div className="border-y border-line bg-surface py-3 text-ink">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_45s_linear_infinite] items-center gap-12 whitespace-nowrap pl-12 text-[12px] font-medium uppercase tracking-[0.22em]">
          {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
            <span key={i} className="flex items-center gap-12 text-ink/70">
              {t}
              <span aria-hidden className="text-copper">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
