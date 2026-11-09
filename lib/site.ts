// Shared site-wide constants. Import from here instead of redefining per file.

/** Brand colour. Must stay hex: html2canvas (PDF export) cannot parse oklch()/lab(). */
export const NAVY = "#1e3a5f";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public path with the GitHub Pages basePath, e.g. asset("/profile.png"). */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
