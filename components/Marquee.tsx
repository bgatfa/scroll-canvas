"use client";

const ITEMS = [
  "Strategic Partnerships",
  "Channel Development",
  "Partner Development",
  "Business Development",
  "Marketing Strategy",
  "Contract Negotiations",
  "Team Management",
  "Team Building",
  "Business Process Management",
  "Global Sales and Product Line Expansion",
  "SaaS Enterprise Software",
  "Cloud Solutions",
];

export default function Marquee() {
  return (
    <div className="border-y border-border bg-bg py-3">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_60s_linear_infinite] items-center gap-10 whitespace-nowrap pl-10 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <span aria-hidden className="text-subtle">/</span>
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
