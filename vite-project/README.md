# Helio — React + Tailwind Final Project

Live demo: (deploy to Vercel or Netlify; see Deployment below)

## Brand Identity
- **Name:** Helio
- **Tagline:** Illuminate better workflows
- **Value proposition:** Helio helps product teams centralize feedback, ship faster, and delight customers with fewer meetings.
- **Target audience:** Product teams, PMs, designers and small engineering teams at early-stage startups
- **Brand voice:** Confident, clear, empathetic

## Color System
All colors were selected for clarity and accessibility. The theme includes five tokens:
- **Primary:** `#0F3D91` — dependable, trustworthy blue used for CTAs and key highlights.
- **Secondary:** `#1F7A6E` — calm teal for supportive accents and labels.
- **Accent:** `#FFB020` — warm amber to draw attention to actions or highlights.
- **Neutral dark:** `#0B1220` — deep almost-black for text and high-contrast elements.
- **Neutral light:** `#F7FAFC` — very light background to keep the layout airy.

Color psychology:
- Blue (primary) conveys trust and reliability — ideal for product tools.
- Teal (secondary) suggests calmness and collaboration.
- Amber (accent) provides energetic calls-to-action without overpowering.

WCAG: chosen colors aim for AA contrast on neutral-light backgrounds; verify with an automated contrast checker for final content combinations.

## Typography
- **Font families:** `Inter` (UI / body), `Merriweather` (display / headings)
- **Weights used:** 300, 400, 600, 700
- **Type scale (examples):**
  - h1: 48px / 700
  - h2: 28px / 700
  - h3: 20px / 600
  - body: 16px / 400
  - small: 14px / 400

## Design Decisions
- Layout uses a centered max width `max-w-7xl` with consistent `px-6` (sm) and `px-8` (md+) paddings.
- Breakpoints configured to match requirements: `sm <=640px`, `md 641–1023px`, `lg >=1024px`.
- The LG (desktop) layout is implemented with a two-column hero and a 3-column features grid. Spacing uses Tailwind's spacing scale for pixel-consistent gaps.

## Component Architecture
- `Header.jsx` — top navigation and brand mark.
- `Navigation.jsx` — primary nav links.
- `Hero.jsx` — headline, subhead, CTA, and illustration (lazy loaded).
- `Features.jsx` — grid of `Card` components.
- `Card.jsx` — small content card used across features.
- `Button.jsx` — `PrimaryButton`, `SecondaryButton`, `OutlineButton` variants.
- `Section.jsx` — wrapper for consistent spacing and max-width.
- `Footer.jsx` — footer with small links.

All components use Tailwind utility classes only.

## Performance & Accessibility
- Images use `loading="lazy"` for deferred loading.
- Semantic HTML elements (`header`, `main`, `section`, `nav`, `article`, `footer`) are used.
- ARIA attributes present for nav landmarks and descriptive labels.
- Focus-visible styles are included for keyboard navigation.

Recommended Lighthouse targets and optimizations:
- Use compressed images (WebP) and properly sized responsive images.
- Enable HTTP/2 or CDN on the hosting platform.
- Tree-shake unused code and enable production builds (`vite build`).

## Setup (local)
1. Install dependencies:

```bash
cd vite-project
npm install
# or: npm i --save-dev tailwindcss postcss autoprefixer && npx tailwindcss init -p
```

2. Start dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Deployment (Vercel / Netlify)
- Vercel: Connect the repository, point to the `vite-project` directory as root (if monorepo), set build command `npm run build` and output directory `dist`. Vercel automatically installs dependencies.
- Netlify: Add `vite-project` as the publish directory. Build command: `npm run build`, publish directory: `dist`. Add an environment variable `NODE_ENV=production`.

Extra optimizations for both:
- Enable image optimization (Vercel Image Optimization or Netlify Large Media).
- Configure Brotli/Gzip on server or CDN.

## Image Credits
- Placeholder SVGs come from the Vite starter assets. Replace with your branded imagery and include proper credits as needed.

## Challenges & Solutions
- Pixel-perfect replication requires the original LG design asset. I built an accurate two-column hero + 3-column grid pattern that mirrors typical LG spacing and alignment. If you provide the exact LG design file (Figma or PNG), I will refine spacing to match pixel-perfect values.

## Future Improvements
- Add responsive images (`<picture>` with multiple sizes) and WebP fallbacks.
- Add storybook for component testing and visual regression.
- Add unit and integration tests for critical components.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
