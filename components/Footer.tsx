const LINKS = [
  { label: "Services", href: "#services" },
  { label: "System", href: "#system" },
  { label: "Expertise", href: "#expertise" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bryan-keepers-577a922/",
  },
  { label: "Calendly", href: "https://calendly.com/bryan-cgs-llc" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg text-muted">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-10">
        <div className="flex items-baseline gap-3">
          <span className="text-[15px] font-medium text-fg">CGS</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            © {year} Channel Growth Strategies LLC
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-5">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
