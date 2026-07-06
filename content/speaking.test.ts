import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { featuredAtLogos, publications } from "@/content/speaking";

const PUBLIC_DIR = path.join(__dirname, "..", "public");

function assetExists(relativePath: string): boolean {
  return fs.existsSync(path.join(PUBLIC_DIR, relativePath));
}

describe("publications", () => {
  it("has a unique title per entry (used as the React list key)", () => {
    const titles = publications.map((pub) => pub.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("keeps relevance within the documented 1-5 tier range", () => {
    for (const pub of publications) {
      expect(pub.relevance).toBeGreaterThanOrEqual(1);
      expect(pub.relevance).toBeLessThanOrEqual(5);
      expect(Number.isInteger(pub.relevance)).toBe(true);
    }
  });

  it("references thumbnail files that exist in public/", () => {
    for (const pub of publications) {
      if (pub.thumbnail) {
        expect(assetExists(pub.thumbnail), `${pub.thumbnail} referenced by "${pub.title}"`).toBe(true);
      }
    }
  });

  it("only sets preserveThumbnail on entries that have a thumbnail", () => {
    for (const pub of publications) {
      if (pub.preserveThumbnail) {
        expect(pub.thumbnail).toBeTruthy();
      }
    }
  });
});

describe("featuredAtLogos", () => {
  it("references logo files that exist in public/", () => {
    for (const logo of featuredAtLogos) {
      expect(assetExists(logo.src), `${logo.src} referenced by "${logo.name}"`).toBe(true);
    }
  });
});
