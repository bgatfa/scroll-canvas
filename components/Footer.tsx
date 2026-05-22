export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-10 sm:flex-row sm:items-center sm:px-10">
        <div className="space-y-2">
          <p className="font-display text-base font-medium text-cream">
            Channel Growth Strategies
          </p>
          <p className="text-[12px] uppercase tracking-[0.18em] text-cream/40">
            © {year} CGS LLC · All rights reserved
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-[12px] uppercase tracking-[0.18em]">
          <a href="#services" className="hover:text-cream">
            Services
          </a>
          <a href="#system" className="hover:text-cream">
            System
          </a>
          <a href="#expertise" className="hover:text-cream">
            Expertise
          </a>
          <a href="#story" className="hover:text-cream">
            Story
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-keepers-577a922/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
