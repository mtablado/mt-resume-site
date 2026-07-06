import type { Metadata } from "next";
import { contact as CONTACT } from "@/content/resume";
import { featuredAtLogos, introStatement, publications } from "@/content/speaking";
import PublicationsExplorer from "./PublicationsExplorer";
import { NAVY, BASE } from "./shared";

export const metadata: Metadata = { title: "Public Presence & Thought Leadership" };

export default function SpeakingPage() {
  return (
    <main className="flex-1 flex flex-col">

      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: NAVY }}
      >
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#93c5fd" }}>
          Thought Leadership
        </p>
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Public Presence &amp; Thought Leadership
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#bfdbfe" }}>
          {introStatement}
        </p>
      </section>

      {/* ── Featured at ───────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-center text-gray-400 mb-10">
            Featured At
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {featuredAtLogos.map((logo) => (
              <div
                key={logo.name}
                className={`flex items-center ${logo.dark ? "rounded-md px-3 py-2" : ""}`}
                style={logo.dark ? { backgroundColor: NAVY } : undefined}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${BASE}${logo.src}`}
                  alt={logo.name}
                  title={logo.name}
                  className="h-7 sm:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlight + Selected work (search, sort, filter) ─────────────── */}
      <PublicationsExplorer publications={publications} />

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: NAVY }}>
        <p className="text-lg mb-4" style={{ color: "#bfdbfe" }}>
          Let&apos;s connect and keep the conversation going.
        </p>
        <a
          href={`https://${CONTACT.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#ffffff", color: NAVY }}
        >
          Connect on LinkedIn
        </a>
      </section>

    </main>
  );
}
