<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Conventions — Feature Module Pattern

## Struktur fitur
Setiap page di `app/[locale]/<route>/page.tsx` hanya bertugas:
1. Ekspor `metadata` (SEO)
2. Render root component fitur dari `common/modules/<feature>`

Logic, state, dan UI dipindah ke module:

```
common/modules/<feature>/
├── index.tsx              # feature root, default export, orchestrator
└── components/            # sub-komponen spesifik fitur
    └── <section>.tsx
```

## Aturan
- `page.tsx` tetap server component (handle metadata + render client module)
- `modules/<feature>/index.tsx` pakai `"use client"` (client island)
- Sub-komponen tidak perlu `"use client"` bila induk sudah client
- Pakai shared elements (`Container`, `Button`) dari `common/components/elements/`
- Pakai utility classes dari `app/globals.css` (`page-title`, `eyebrow`, `tag`, `bento-card`, dll)
- Token semantic wajib (`border-border`, `text-foreground`, `bg-secondary`), dilarang `neutral-*`
- Semua teks user-facing wajib bilingual via `useTranslations` dari `messages/*.json`
- Teks dilarang hardcode di komponen
- Logic (useEffect, side-effect) diekstrak ke `common/hooks/`
- Data/konstanta diekstrak ke `common/constants/`
