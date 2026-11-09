# CLAUDE.md

Personal resume site for Miguel Tablado: a static Next.js export hosted on GitHub Pages.
Visitors browse the sections and download an A4 PDF of the CV.

## This is NOT the Next.js you know

Next.js 16 has breaking changes. APIs, conventions and file structure may differ from your
training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing
Next.js code, and heed deprecation notices.

## Commands

```bash
npm run dev     # dev server, http://localhost:3000
npm run build   # static export to out/ (also type-checks)
npm run lint    # ESLint
```

Done means `npm run lint` and `npm run build` both pass. After visual changes, check the
page in `npm run dev`. A clean build does not prove the layout or the PDF looks right.

## Where things go

| Change | Location |
| --- | --- |
| Resume text (summary, skills, experience, education, awards list on the CV) | `content/resume.ts` |
| Speaking / press entries and "Featured at" logos | `content/speaking.ts` (rules in `content/CLAUDE.md`) |
| Images, logos, thumbnails | `public/` (reference them with `asset()`) |
| A page | `app/<route>/page.tsx`; add it to `links` in `components/NavHeader.tsx` |
| Page-specific client components | next to the page, e.g. `app/speaking/*.tsx` |
| Components used by several pages | `components/` |
| Shared constants (brand colour, basePath) | `lib/site.ts` |
| Originals the site does not load (award emails, PDFs, raw images) | `sources/` |

Pages: `/` home, `/experience`, `/education`, `/speaking` (titled "Public Presence"),
`/awards`, `/cv` (print layout plus the PDF button). `/awards` is still hardcoded JSX
rather than reading `content/resume.ts`.

## Rules

- **Static export only** (`output: "export"`). No API routes, server actions, SSR, middleware
  or runtime data fetching. Anything interactive is a `"use client"` component.
- **Content lives in `content/`.** Pages render it; don't hardcode resume text in JSX.
- **Colours must be hex.** html2canvas (used by the PDF export) cannot parse `oklch()` or
  `lab()`. Tailwind's palette is overridden with hex values in `app/globals.css`. Use those
  classes or `NAVY` from `lib/site.ts`. Never redefine the colour locally.
- **Image paths go through `asset()`** from `lib/site.ts`. The site is served under
  `/mt-resume-site` on GitHub Pages, so a bare `"/profile.png"` breaks in production.
- Keep layouts responsive and print-friendly. Hide UI chrome with `print:hidden`.
- Commit messages: imperative, one change per commit. Example: "Add Codemotion 2024 panel".

## PDF export

`components/DownloadButton.tsx` loads html2pdf.js 0.10.1 from cdnjs at click time and
captures `#resume` on `/cv`. Read [docs/pdf-export.md](docs/pdf-export.md) before you
change the CV layout or the button, and generate the PDF to check the result.

## Deployment

A push to `main` runs `.github/workflows/deploy.yml`. It builds with
`NEXT_PUBLIC_BASE_PATH=/mt-resume-site` and publishes `out/` to GitHub Pages.
