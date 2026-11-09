# content/ — site data

Typed TypeScript data rendered by the pages. Only `.ts` data files belong here. Originals
such as emails, PDFs and raw images go in `/sources`, and published images go in `/public`.

- `resume.ts`: name, title, contact, summary, skills, languages, experience, education,
  awards. Used by `/`, `/experience`, `/education` and `/cv`.
- `speaking.ts`: `publications` (the `/speaking` explorer), `featuredAtLogos`, `introStatement`.

## Writing style

- Write in English with concise, achievement-focused bullets. Write "Led…", not "Was responsible for…".
- Take facts from Miguel's LinkedIn profile or what he provides. Never invent dates, numbers or venues. If something is missing, ask.
- Dates in `speaking.ts` are shown as written and sorted with `Date.parse`. Use
  `"May 25, 2026"` or `"June 2026"`.

## Adding a publication (`speaking.ts`)

1. Put the thumbnail in `public/speaking/<kebab-slug>.<png|jpg>` and set
   `thumbnail: "/speaking/<file>"`. Leave out the basePath because the page adds it.
2. Choose `type` from `talk | article | panel | press | podcast`.
3. Set `relevance` using the rules below.
4. If you add a logo to `featuredAtLogos`, put the file in `public/logos/`. Set `dark: true`
   when the logo needs a navy background to be visible.

### Relevance

`relevance` is a tier from `1` (most relevant) to `5` (least), with no decimals. The
"Relevance" sort uses it. Ties are broken by date, newest first. Don't keep tiers unique
and don't re-balance existing entries; pick the tier that fits. It is an editorial
judgment. Apply these criteria roughly in order:

1. **Featured / career highlight.** `featured: true` is always tier 1.
2. **Venue or partner prominence.** Major platforms and well-known brand partners (Google
   Cloud, Dynatrace + CaixaBank) rank above regional forums or niche trade press.
3. **Content type.** Panels and talks rank above press soundbites and interviews.
4. **Video.** An entry with a recording usually ranks above a text-only one.
