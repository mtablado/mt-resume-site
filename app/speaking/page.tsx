import type { Metadata } from "next";
import { contact as CONTACT } from "@/content/resume";
import ExpandableText from "./ExpandableText";
import {
  introStatement,
  publications,
  type Publication,
  type PublicationType,
} from "@/content/speaking";

export const metadata: Metadata = { title: "Speaking & Thought Leadership" };

const NAVY = "#1e3a5f";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const TYPE_STYLES: Record<PublicationType, { label: string; color: string }> = {
  talk: { label: "Talk", color: "#4285F4" },
  article: { label: "Article", color: "#0f9d58" },
  panel: { label: "Panel", color: "#a142f4" },
  press: { label: "Press", color: "#b45309" },
  podcast: { label: "Podcast", color: "#14b8a6" },
};

function VideoThumb({ pub, className }: { pub: Publication; className: string }) {
  const hasVideo = Boolean(pub.videoUrl && pub.videoUrl !== "#");
  if (!pub.thumbnail) return null;

  return (
    <a
      href={hasVideo ? pub.videoUrl : undefined}
      target={hasVideo ? "_blank" : undefined}
      rel={hasVideo ? "noopener noreferrer" : undefined}
      aria-label={hasVideo ? `Watch: ${pub.title}` : undefined}
      className={`relative block group ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE}${pub.thumbnail}`} alt={pub.title} className="w-full h-full object-cover" />
      {hasVideo && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
          <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6 ml-1" fill={NAVY}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      )}
    </a>
  );
}

function CtaButtons({ pub }: { pub: Publication }) {
  const hasVideo = Boolean(pub.videoUrl && pub.videoUrl !== "#");
  const hasLink = Boolean(pub.url && pub.url !== "#");
  if (!hasVideo && !hasLink) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {hasVideo && (
        <a
          href={pub.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: NAVY }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch on YouTube
        </a>
      )}
      {hasLink && (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full border transition-colors hover:bg-gray-50"
          style={{ color: NAVY, borderColor: NAVY }}
        >
          View →
        </a>
      )}
    </div>
  );
}

export default function SpeakingPage() {
  const featuredPublications = publications.filter((pub) => pub.featured);
  const gridPublications = publications.filter((pub) => !pub.featured);

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
          Speaking &amp; Thought Leadership
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#bfdbfe" }}>
          {introStatement}
        </p>
      </section>

      {/* ── Featured ──────────────────────────────────────────────────────── */}
      {featuredPublications.length > 0 && (
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center" style={{ color: NAVY }}>
              Highlight
            </p>
            <h2 className="text-4xl font-bold text-gray-900 text-center leading-tight mb-4">
              A Career Highlight
            </h2>
            <div className="text-center mb-16">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border"
                style={{ color: "#d97706", borderColor: "#d97706" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#d97706" }} />
                In Progress — More To Come
              </span>
            </div>

            {featuredPublications.map((pub) => {
              const typeStyle = TYPE_STYLES[pub.type];
              return (
                <div
                  key={pub.title}
                  className="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                  style={{ backgroundColor: "#f1f5f9" }}
                >
                  <VideoThumb pub={pub} className="aspect-video md:aspect-auto md:w-2/5 md:flex-shrink-0" />
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {pub.eventBadge && (
                        <span
                          className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full text-white"
                          style={{ backgroundColor: "#4285F4" }}
                        >
                          {pub.eventBadge}
                        </span>
                      )}
                      <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: typeStyle.color }}>
                        {typeStyle.label}
                      </p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-5">
                      {pub.venue} · {pub.date}
                    </p>
                    <ExpandableText text={pub.description} className="mb-8 flex-1" />
                    <CtaButtons pub={pub} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Publications & talks ─────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#f1f5f9" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center" style={{ color: NAVY }}>
            Selected Work
          </p>
          <h2 className="text-4xl font-bold text-gray-900 text-center leading-tight mb-16">
            Talks, Articles &amp; Participations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridPublications.map((pub) => {
              const typeStyle = TYPE_STYLES[pub.type];
              const hasVideo = Boolean(pub.videoUrl && pub.videoUrl !== "#");

              return (
                <div key={pub.title} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col">
                  <VideoThumb pub={pub} className="aspect-video" />

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {pub.eventBadge && (
                        <span
                          className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full text-white"
                          style={{ backgroundColor: "#4285F4" }}
                        >
                          {pub.eventBadge}
                        </span>
                      )}
                      <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: typeStyle.color }}>
                        {typeStyle.label}
                      </p>
                      {hasVideo && !pub.thumbnail && (
                        <span className="text-xs font-semibold" style={{ color: NAVY }}>
                          ▶ Video available
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{pub.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {pub.venue} · {pub.date}
                    </p>
                    <ExpandableText text={pub.description} className="mb-6 flex-1" />
                    <CtaButtons pub={pub} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
