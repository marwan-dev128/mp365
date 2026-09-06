# Project Architecture & Developer Guide

Welcome to the **mp Web Platform** codebase. This guide explains how the project is organized, how data flows from the JSON store to React components, how styling is managed with Tailwind CSS v4, and the best practices for extending the site.

---

## 🏗️ Directory Overview

```
site/
├── app/                        # Next.js 16 App Router (Routes & Layouts)
│   ├── globals.css             # Tailwind v4 Design Tokens & CSS Variables
│   ├── layout.tsx              # Root Layout (Header, Footer, Meta, Fonts)
│   ├── page.tsx                # Home Page (Composable section composition)
│   ├── blog/                   # Blog Listing & Dynamic Article Routes
│   ├── solutions/              # Solutions Pages
│   └── ...                     # Other static/dynamic pages
│
├── store/                      # Single Source of Truth (SSOT) Content in JSON
│   ├── index.ts                # Unified Store Export
│   ├── navigation.json         # Header announcement, logo, nav links, actions
│   ├── footer.json             # Footer help, socials, columns, legal & marquee
│   ├── hero.json               # Main hero headline, CTAs, rating, mockup
│   ├── clients.json            # Partner & client marquee logos
│   ├── integrations.json       # Integrations hero & floating widget specs
│   └── home/                   # Home page section data stores
│       ├── personas.json       # Stacked persona cards (Finance, Travel Manager, Travelers)
│       ├── solutions.json      # Expandable video solution carousel
│       ├── why-mp.json       # 3-card centered continuous carousel
│       ├── customer-stories.json # Customer stories accordion
│       ├── platform-showcase.json # Tabbed platform showcase
│       ├── features.json       # 4-column feature grid
│       ├── efficiency.json     # Boost efficiency 4-card grid
│       ├── support.json        # 4-card support grid
│       ├── visibility.json     # 3-card visibility grid
│       ├── editorial.json      # Editorial insight cards
│       ├── stats.json          # FlexiTravel 3-card stats
│       ├── dark-banner.json    # Dark highlight banner
│       ├── locations.json      # Global presence marquee & disclaimers
│       └── proof-metrics.json  # Proof metrics band
│
├── types/                      # Centralized TypeScript Definitions & Schemas
│   ├── index.ts                # Main export barrel
│   ├── store.ts                # Inferred and explicit store data types
│   ├── navigation.ts           # Header, Footer, NavLink types
│   └── home.ts                 # Types for all home components & sections
│
├── components/                 # Component Library (Decoupled & Reusable)
│   ├── index.ts                # Clean barrel export for components
│   ├── Header.tsx              # Reusable Header with banner & dropdown
│   ├── Footer.tsx              # Reusable Electric Lime & Parchment Footer
│   ├── ClientLogos.tsx         # Marquee client logo strip
│   ├── home/                   # Home section components (Props + JSON defaults)
│   ├── blog/                   # Blog components (ArticleBody, TOC, Sidebar, Cards)
│   ├── hero-section/           # Hero section variants (mpHero, IntegrationsHero)
│   ├── common/                 # Reusable shared marketing widgets
│   └── ui/                     # Atomic UI primitives (Buttons, Badges, Icons)
│
├── lib/                        # Business Logic, SEO, Utilities & Store Accessors
│   ├── store.ts                # Type-safe store helper functions
│   ├── schema.ts               # JSON-LD Schema.org generators
│   ├── metadata.ts             # Next.js Metadata generators
│   ├── config.ts               # Site constants, brand info, URLs
│   ├── data.ts                 # Dynamic content fetchers & database helpers
│   └── richtext.ts             # Rich text parsing and sanitization
│
├── public/                     # Static Assets (Images, SVGs, Videos, Favicons)
└── scripts/                    # Build & maintenance scripts
```

---

## 🧩 1. How Content & Data Work (`store/`)

All static copy, headlines, features, pricing, links, and carousel configurations live in the `store/` folder as structured JSON files.

### Why this is great:
1. **Zero Coding Needed for Copy Edits**: Non-engineers and content writers can edit `store/home/*.json` or `store/*.json` without touching TSX components.
2. **Predictable Layout**: Layout components never hardcode copy; they simply render data from the store or props passed to them.

### Accessing Store Data in TypeScript:
```tsx
import { getHomeStore, getNavigationStore } from "@/lib/store";

const homeData = getHomeStore();
console.log(homeData.personas.header.title);
```

---

## 🎨 2. Design Tokens & Styling (`app/globals.css`)

All colors and theme variables are standardized in `app/globals.css` using Tailwind CSS v4 `@theme inline`:

| Tailwind Class | Hex Value | Purpose |
| :--- | :--- | :--- |
| `bg-mp-lime` / `text-mp-lime` | `#BEFF50` | Electric lime brand accent |
| `bg-mp-lime-hover` | `#ABF23A` | Button & link hover state |
| `bg-mp-ink` / `text-mp-ink` | `#14140F` | Primary dark ink text and buttons |
| `bg-mp-parchment` | `#FBF9F4` | Warm parchment card & section background |
| `text-mp-secondary` | `#4B4B43` | Subtitles, body copy, and captions |
| `text-mp-muted` | `#707066` | Category labels, badges, and fine print |
| `border-mp-border` | `#EBE8DF` | Card borders, dividers, and outlines |

---

## 💡 3. Component Reusability Pattern

Every component in `components/` follows this standard pattern:

1. **Exports its own TypeScript interface** (e.g. `StackedPersonaCardsProps`).
2. **Imports default data** from `@/store/...`.
3. **Provides default values in parameter destructuring** so that calling `<StackedPersonaCards />` works out of the box with zero configuration.

```tsx
// components/home/StackedPersonaCards.tsx
import defaultData from "@/store/home/personas.json";
import type { PersonaCard } from "@/types/home";

export interface StackedPersonaCardsProps {
  header?: {
    tag: string;
    title: string;
    subtitle: string;
  };
  cards?: PersonaCard[];
}

export function StackedPersonaCards({
  header = defaultData.header,
  cards = defaultData.cards as PersonaCard[],
}: StackedPersonaCardsProps = {}) {
  // Rendering logic...
}
```

---

## 🚀 4. Available NPM Scripts

- `npm run dev`: Starts the Next.js development server with Turbopack on `http://localhost:3000`.
- `npm run build`: Generates the optimized production build and validates all TypeScript types across all 88 routes.
- `npm test`: Runs the Vitest test suite.
- `npm run lint`: Runs ESLint checks.

---

## 🛡️ 5. Golden Rules for Contributors

1. **Keep components decoupled**: Never hardcode page-specific copy inside UI components. Put default copy in `store/` and pass overrides via props.
2. **Use Tailwind theme variables**: Never use ad-hoc hex codes like `bg-[#beff50]`. Always use `bg-mp-lime`.
3. **Type everything**: Define all new data structures in `types/`.
4. **Always verify builds**: Ensure `npm run build` passes before submitting changes.
