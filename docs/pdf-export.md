# PDF export

Click "View PDF" on `/cv` and `components/DownloadButton.tsx` does the following:

1. Loads `html2pdf.js` 0.10.1 from cdnjs the first time (it is not an npm dependency).
2. Scrolls to the top and waits two `requestAnimationFrame` ticks. Otherwise html2canvas
   measures positions against the scrolled viewport and the capture comes out offset.
3. Captures `#resume` at `scale: 2` and creates an A4 portrait PDF with
   `pagebreak: { mode: "avoid-all" }`.
4. Draws a footer on every page with jsPDF: a rule, the name and "Page X of Y". The bottom
   margin is 12 mm to leave room for it.
5. Opens the PDF in a new tab. On failure it falls back to `window.print()`.

## Constraints that come from html2canvas

| Limitation | Workaround |
| --- | --- |
| Cannot parse `oklch()` / `lab()` | Hex overrides of the Tailwind palette in `app/globals.css`. Brand colour `NAVY` in `lib/site.ts`. Any new Tailwind colour family used on `/cv` needs a hex override too. |
| Ignores `object-fit` | In `onclone`, each `<img>` is drawn cover-cropped onto a canvas and replaced with a data URL. Images are matched by `alt`, so keep `alt` text unique. |
| Captures what is rendered | Hide on-screen-only UI with `print:hidden`. The `@media print` rules in `globals.css` also apply to `window.print()`. |

## After changing the CV layout

Run `npm run dev`, open `/cv`, generate the PDF and check:

- no blank first page, and nothing cut off between pages
- the profile photo is not stretched
- colours match the screen (a grey or missing colour usually means a non-hex colour slipped in)
- the footer appears on every page
