import type { Metadata } from "next";
import { experience as EXPERIENCE } from "@/content/resume";

export const metadata: Metadata = { title: "Experience" };

const NAVY = "#1e3a5f";

export default function ExperiencePage() {
  return (
    <main className="flex-1 flex flex-col">

      {/* Page hero */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: NAVY }}>
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#93c5fd" }}>
          Career
        </p>
        <h1 className="text-5xl font-bold text-white tracking-tight">Experience</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#bfdbfe" }}>
          Over two decades of progressive roles across engineering, architecture, and executive leadership.
        </p>
      </section>

      {/* Experience entries */}
      {EXPERIENCE.map((exp, i) => (
        <section
          key={i}
          className="px-6 py-16"
          style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f1f5f9" }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Role header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  {exp.title}
                </h2>
                <p className="text-lg font-semibold mt-1" style={{ color: NAVY }}>
                  {exp.company}
                </p>
              </div>
              <div className="text-sm text-gray-500 sm:text-right shrink-0">
                <p className="font-medium">{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 mb-6" style={{ borderColor: NAVY }} />

            {/* Bullets */}
            <ul className="space-y-3">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 items-start text-gray-700">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: NAVY }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

    </main>
  );
}
