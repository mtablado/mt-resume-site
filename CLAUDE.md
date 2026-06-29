# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project goal

A static resume website hosted on GitHub Pages. Visitors can view the resume and download a formatted PDF (A4). Content comes from Miguel Tablado's LinkedIn profile.

## Stack

- **Next.js** (static export — no backend, pure client-side)
- **Tailwind CSS** for styling
- **html2pdf.js** loaded from CDN (no build-time dependency)
- **GitHub Pages** for hosting

## Key constraints

The site is a pure static export. `next.config.ts` sets `output: 'export'`. This means:
- No server components with dynamic data, no API routes, no SSR
- All data must be hardcoded or fetched client-side at runtime
- Build output goes to `out/`

## Common commands

```bash
npm run dev       # local dev server with Turbopack (http://localhost:3000)
npm run build     # static export → out/
npm run lint      # ESLint
```

## Project structure

```
app/              # App Router — layout.tsx + page.tsx
components/       # Reusable UI components
public/           # Static assets (fonts, images)
```

## PDF generation

html2pdf.js is loaded from CDN at runtime. The download button lives in a `'use client'` component. Target A4 paper size. The resume layout must render well in print mode.

## Design requirements

- Clean, professional design
- Mobile-friendly (responsive)
- Print-friendly — PDF export targets A4
