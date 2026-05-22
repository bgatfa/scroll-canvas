# Scroll Canvas

A scroll-driven web experience built with Next.js 15 + Framer Motion.

## Sections / techniques

- **Hero** — scroll-linked translate + fade on the title block, ambient glow drifts
- **Parallax** — multi-layer parallax with rotating shapes
- **Pinned scene** — `position: sticky` over a 3.2-screen-tall container; a shape morphs in scale, rotation, radius, and hue while three captions cross-fade in sync with scroll
- **Marquee** — two counter-direction horizontal scrolling rows driven by scroll progress
- **Gallery** — fade/slide reveals via `useInView`, plus a subtle parallax drift on the grid
- **Closing** — scale + blur reveal into a light scene

Top of page also has a scroll-progress bar tied to the global scroll.

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
```

## Deploy on Vercel

1. Push this directory to a GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Framework is auto-detected as Next.js. No env vars needed.
4. Click Deploy.

Or via the CLI:

```bash
npm i -g vercel
vercel        # follow prompts
vercel --prod # promote to production
```

## Customize

- Copy & headings: edit `components/Hero.tsx`, `components/Parallax.tsx`, `components/Pinned.tsx`, `components/Gallery.tsx`, `components/Closing.tsx`.
- Colors & fonts: `tailwind.config.ts` (`accent`, `accent2`, `ink`, `bone`) and `app/layout.tsx` (Google Fonts link).
- Add a section: drop a new component into `components/`, import it from `app/page.tsx`. Use the `Reveal` wrapper for entrance animations, or `useScroll({ target, offset })` + `useTransform` for scroll-linked motion.
