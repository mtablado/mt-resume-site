import type { Metadata } from "next";
import { education as EDUCATION } from "@/content/resume";

export const metadata: Metadata = { title: "Education" };

const NAVY = "#1e3a5f";

export default function EducationPage() {
  return (
    <main className="flex-1 flex flex-col">

      {/* Page hero */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: NAVY }}>
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#93c5fd" }}>
          Academic Background
        </p>
        <h1 className="text-5xl font-bold text-white tracking-tight">Education</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#bfdbfe" }}>
          Formal degrees and executive programmes spanning computer science, data science, and artificial intelligence.
        </p>
      </section>

      {/* Education entries */}
      {EDUCATION.map((edu, i) => (
        <section
          key={i}
          className="px-6 py-16"
          style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f1f5f9" }}
        >
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                {edu.degree}
              </h2>
              <p className="text-lg font-semibold mt-1" style={{ color: NAVY }}>
                {edu.institution}
              </p>
            </div>
            <div
              className="text-sm font-bold uppercase tracking-widest shrink-0 px-4 py-2 rounded-full text-white"
              style={{ backgroundColor: NAVY }}
            >
              {edu.period}
            </div>
          </div>
        </section>
      ))}

    </main>
  );
}
