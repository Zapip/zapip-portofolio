# DESIGN.md — Zafif Hilmi Portfolio Design System

> Single source of truth for the visual language of this portfolio.
> If a value exists here, do not invent a new one — extend this file instead.

## 1. Design concept

**Modern professional · clean minimalism · premium technology aesthetic.**

- **Bento grid** is the primary visual system (homepage, achievements, certifications).
- Editorial and restrained: one accent color, flat surfaces, hairline borders, no gradients or glassmorphism beyond the navbar blur.
- "Fun but restrained" — personality comes from the lime accent, oversized display type, and hover micro-motion, not from decoration.
- Combines résumé clarity (dense metadata, tags, timelines) with contemporary product-site appeal (large type, generous whitespace).

## 2. Color

All colors are semantic tokens defined in `app/global.css` (Tailwind v4 `@theme inline` + `:root` / `.dark`). Never hardcode hex values or raw utilities like `text-white` / `bg-black` in components.

### Light theme (default)

| Token | Value (oklch) | Use |
|---|---|---|
| `background` | `0.975 0.004 90` | Page background (warm off-white) |
| `foreground` | `0.19 0.015 250` | Primary text (near-black, cool) |
| `card` | `1 0 0` | Card / surface background |
| `primary` | `0.32 0.12 260` | Primary buttons, active states (deep indigo) |
| `secondary` / `muted` | `0.945 0.004 90` | Subtle fills, segmented controls |
| `muted-foreground` | `0.49 0.012 250` | Secondary text, eyebrows, tags |
| `accent` | `0.92 0.045 260` | Soft highlight backgrounds |
| `border` / `input` | `0.89 0.006 90` | Hairline borders, input outlines |
| `ring` | `0.45 0.12 260` | Focus outlines |
| `lime` | `0.88 0.19 126` | Signature accent — brand mark, featured pill, selection |
| `lime-foreground` | `0.19 0.015 250` | Text on lime |
| `destructive` | `0.58 0.21 25` | Errors |

### Dark theme (`.dark` class)

| Token | Value (oklch) | Use |
|---|---|---|
| `background` | `0.14 0.012 250` | Page background |
| `foreground` | `0.96 0.004 90` | Primary text |
| `card` | `0.20 0.013 250` | Card / surface background |
| `primary` / `ring` | `0.78 0.11 256` | Primary buttons, focus (light indigo) |
| `border` / `input` | `0.34 0.01 250` | Hairline borders |
| `lime` | `0.84 0.17 126` | Signature accent (slightly deepened) |
| `ink` / `ink-foreground` | `0.10 / 0.97` | Ink panel (near-black block with light text) |

**Rules**
- The lime accent is scarce by design: brand mark, featured pills, `::selection`, and occasional emphasis only. It never fills large areas.
- `primary` indigo handles interactive emphasis; lime handles brand personality. Do not mix them inside one element.
- Theme switching toggles the `.dark` class on `<html>` (see `PortfolioShell`); components must only use semantic utilities (`bg-background`, `text-muted-foreground`, …) so both themes work automatically.

## 3. Typography

| Role | Font | Style |
|---|---|---|
| Display / headings | **Space Grotesk** (`font-display`) | Bold, tight leading (1.07–1.2) |
| Body / UI | **DM Sans** (`font-sans`) | Regular, relaxed leading (1.5–1.7) |

Scale (fluid via `clamp()`):

| Utility | Size | Notes |
|---|---|---|
| `page-title` | `clamp(2.6rem, 5vw, 4.8rem)` | H1 per page; max-width 850px |
| `section-title` | `clamp(1.5rem, 3vw, 2.1rem)` | Section headings |
| Body | `1rem` (up to `1.125rem` on md) | `text-muted-foreground` for intros |
| `eyebrow` | `0.7rem`, uppercase, `letter-spacing: .13em`, weight 700 | Label above every heading |

## 4. Layout & spacing

- **`site-container`**: max-width `80rem`, inline padding `1.25rem` (mobile) / `2rem` (md+). Use for all page content. The navbar/footer use `max-w-7xl` + `px-5 md:px-8` (equivalent rhythm).
- Grid: CSS grid with explicit `col-span` / `row-span` per card at `md:`/`lg:` breakpoints; mobile-first stacking (1 column) by default.
- Page rhythm: `page-heading` = `4.5rem` top / `3rem` bottom padding, then sections separated by consistent vertical margins (≈ `py-12` to `py-16`).
- Radius scale: `4px` (tags, pills inputs) → `6px` (small controls) → `8px` (cards, buttons). No pill-shaped cards.
- Borders are always 1px `border-border` — elevation comes from hover shadow, not resting shadows.

## 5. Core components & utilities

Defined as Tailwind v4 `@utility` classes in `src/styles.css`:

| Utility | Purpose |
|---|---|
| `bento-card` | White/dark surface card, 1px border, radius 8, hover: `translateY(-3px)` + soft shadow. Base of every grid tile. |
| `project-card` | Same as bento-card with media on top; used for archive listings. |
| `tag` | Small bordered label (`.69rem`, muted) for technologies/categories. |
| `featured-pill` | Lime badge marking featured projects (`.65rem`, bold). |
| `eyebrow` | Uppercase section label (see §3). |
| `page-title` / `section-title` | Heading scale (see §3). |
| `brand-mark` | 2rem lime square with monogram "Z." — logo. |
| `nav-link` | `.79rem` semi-bold muted link; `:hover`/`.active` → foreground. |
| `mobile-nav` | Off-canvas nav panel under the header. |
| `back-link` | Muted inline link back to a listing. |
| `page-enter` | Route-entry fade/rise (see §7). |

Shared React components:

- `PortfolioShell` (`src/components/portfolio-shell.tsx`) — sticky navbar, EN/ID locale context (`useLocale`, `useCopy`), theme toggle, footer. Every page renders inside it.
- `PageHeading` / `Eyebrow` — standard page header block (eyebrow → title → intro).
- `ProjectCard` (`src/components/project-card.tsx`) — archive card.
- `RecordDetail` (`src/components/record-detail.tsx`) — shared layout for project/achievement/certification detail pages.

shadcn-style primitives live in `src/components/ui/` (e.g. `Button` variants: `default`, `ghost`; sizes `sm`, `icon`).

## 6. Motion

Subtle only — no parallax, no cursor gimmicks, no entrance choreography chains.

| Interaction | Spec |
|---|---|
| Card hover | `translateY(-3px)` + soft shadow, `250ms ease` |
| Link/button transitions | `color`/opacity `200ms` |
| Page transitions | `page-enter`: opacity 0→1 + `translateY(8px)`→0, `350ms ease`, keyed by pathname |
| Smooth scrolling | `scroll-behavior: smooth` on `html` |

**Reduced motion:** the global `prefers-reduced-motion: reduce` block in `src/styles.css` collapses all animation/transition durations to ~0 and disables smooth scroll. Never add motion that bypasses it.

## 7. Imagery & media

- Editorial, high-contrast screenshots/mockups; landscape, `object-cover`, media on top of cards.
- Content images live in `src/assets/` and are imported as ES modules.
- Current images (`project-dashboard.jpg`, `project-workspace.jpg`) are **illustrative placeholders** — replace with real project media before publishing.
- Favicon: `public/favicon.svg` — lime square, dark monogram "Z.".

## 8. Accessibility (WCAG 2.2 AA)

- Visible focus: 2px `--ring` outline with `3px` offset on `:focus-visible`.
- Icon-only buttons carry `aria-label` (theme, menu, close); language switch uses `aria-pressed`.
- Navigation is landmarks + labeled (`aria-label="Main navigation"`); mobile menu closes on route change.
- Color contrast: muted-foreground is tuned for AA on both backgrounds; do not lighten it further.
- Reduced motion respected globally (§6).

## 9. Internationalization

- All user-facing copy is bilingual EN/ID via the locale context in `PortfolioShell`.
- Pattern: `const label = useCopy("English copy", "Teks bahasa Indonesia")`.
- New UI text must be added bilingually — never hardcode a single language.

## 10. Content voice

- First-person, confident, concise; metadata-heavy (year, role, org) presented as small muted text.
- Everything not yet verified by the owner is clearly marked **illustrative/sample** in `src/lib/portfolio-data.ts` and must be replaced before publishing.
