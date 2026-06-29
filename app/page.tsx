import Link from "next/link";
import {
  name as NAME,
  title as TITLE,
  contact as CONTACT,
  skills as SKILLS,
} from "@/content/resume";

const NAVY = "#1e3a5f";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero */}
      <section
        className="flex-1 flex items-center justify-center px-6 py-20"
        style={{ backgroundColor: NAVY }}
      >
        <div className="text-center max-w-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE}/profile.png`}
            alt={NAME}
            className="rounded-full object-cover object-center mx-auto mb-6"
            style={{
              width: 160,
              height: 160,
              border: "4px solid rgba(255,255,255,0.25)",
            }}
          />
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            {NAME}
          </h1>
          <p className="text-lg font-medium mb-1" style={{ color: "#93c5fd" }}>
            {TITLE}
          </p>
          <p className="text-sm mb-6" style={{ color: "#bfdbfe" }}>
            {CONTACT.location}
          </p>

          {/* Contact links */}
          <div className="flex justify-center gap-5 text-sm mb-8" style={{ color: "#bfdbfe" }}>
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:text-white transition-colors"
            >
              {CONTACT.email}
            </a>
            <a
              href={`https://${CONTACT.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {CONTACT.linkedin}
            </a>
          </div>

          {/* CTAs */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/cv"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#ffffff", color: NAVY }}
            >
              View CV
            </Link>
            <a
              href={`mailto:${CONTACT.email}`}
              className="px-6 py-2.5 rounded-full text-sm font-semibold border border-white/40 text-white hover:border-white/80 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Skills snapshot */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xs font-bold uppercase tracking-[0.15em] text-center mb-10"
            style={{ color: NAVY }}
          >
            What I do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="rounded-xl p-5" style={{ backgroundColor: "#f1f5f9" }}>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-3"
                  style={{ color: NAVY }}
                >
                  {category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded-full bg-white text-gray-600 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
