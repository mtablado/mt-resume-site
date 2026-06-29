import type { Metadata } from "next";
import DownloadButton from "@/components/DownloadButton";
import {
  name as NAME,
  title as TITLE,
  contact as CONTACT,
  summary as SUMMARY,
  skills as SKILLS,
  languages as LANGUAGES,
  experience as EXPERIENCE,
  education as EDUCATION,
  awards as AWARDS,
} from "@/content/resume";

export const metadata: Metadata = { title: "CV" };

// ─── Layout constants ─────────────────────────────────────────────────────────

const NAVY = "#1e3a5f";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[10px] font-bold uppercase tracking-[0.15em] pb-1 mb-3 border-b-2"
      style={{ color: NAVY, borderColor: NAVY }}
    >
      {children}
    </h2>
  );
}

function Sidebar() {
  return (
    <aside
      className="w-[215px] shrink-0 px-6 py-7 space-y-6 text-sm"
      style={{ backgroundColor: "#f1f5f9" }}
    >
      <section>
        <SectionHeading>Summary</SectionHeading>
        <p className="text-gray-600 leading-relaxed">{SUMMARY}</p>
      </section>

      <section>
        <SectionHeading>Skills</SectionHeading>
        <div className="space-y-2">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category}>
              <p className="font-semibold text-gray-800 text-[11px] uppercase tracking-wide">
                {category}
              </p>
              <p className="text-gray-600 mt-0.5">{skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-3">
          {EDUCATION.map((edu) => (
            <div key={edu.institution}>
              <p className="font-semibold text-gray-800">{edu.degree}</p>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-400 text-xs mt-0.5">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Awards &amp; Recognition</SectionHeading>
        <div className="space-y-2">
          {AWARDS.map((award) => (
            <div key={award.title}>
              <p className="font-semibold text-gray-800">{award.title}</p>
              <p className="text-gray-500 text-xs">
                {award.issuer} &middot; {award.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Languages</SectionHeading>
        <div className="space-y-1">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="flex justify-between">
              <span className="text-gray-800 font-medium">{lang.name}</span>
              <span className="text-gray-500">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="flex-1 px-8 py-7">
      <section>
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-5">
          {EXPERIENCE.map((exp, i) => (
            <div key={i}>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="font-bold text-gray-900 text-sm">{exp.title}</p>
                  <p className="text-sm font-medium mt-0.5" style={{ color: NAVY }}>
                    {exp.company}
                  </p>
                </div>
                <div className="text-right text-xs text-gray-500 shrink-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <span
                      className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: NAVY }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CVPage() {
  return (
    <>
      <DownloadButton />

      {/* Page background */}
      <div className="pb-10 print:pb-0" style={{ backgroundColor: "#d1d5db" }}>
        {/* Resume document — this element is captured by html2pdf */}
        <div
          id="resume"
          className="mx-auto bg-white shadow-2xl print:shadow-none"
          style={{ width: 794 }}
        >
          {/* Header */}
          <header
            className="px-10 py-7 flex gap-7 items-center"
            style={{ backgroundColor: NAVY }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/profile.png`}
              alt={NAME}
              className="rounded-full object-cover object-center shrink-0"
              style={{
                width: 108,
                height: 108,
                border: "3px solid rgba(255,255,255,0.25)",
              }}
            />
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                {NAME}
              </h1>
              <p className="text-base mt-1 font-medium" style={{ color: "#93c5fd" }}>
                {TITLE}
              </p>
              <div
                className="flex flex-wrap gap-x-5 gap-y-0.5 mt-2.5 text-xs"
                style={{ color: "#bfdbfe" }}
              >
                <span>{CONTACT.email}</span>
                <span>{CONTACT.linkedin}</span>
                {CONTACT.phone && <span>{CONTACT.phone}</span>}
                <span>{CONTACT.location}</span>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="flex" style={{ minHeight: 1013 }}>
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </>
  );
}
