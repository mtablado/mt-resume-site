import type { Metadata } from "next";

export const metadata: Metadata = { title: "Awards & Recognitions" };

const NAVY = "#1e3a5f";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function AwardsPage() {
  return (
    <main className="flex-1 flex flex-col">

      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: NAVY }}
      >
        <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#93c5fd" }}>
          Recognition
        </p>
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Awards &amp; Recognitions
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#bfdbfe" }}>
          A selection of honours received for contributions to AI, cloud, and
          technology leadership.
        </p>
      </section>

      {/* ── Google Cloud Partner All-star ─────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#4285F4" }}>
            Google Cloud · 2025
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-3">
            Google Cloud Partner All-star
          </h2>
          <h3 className="text-xl font-semibold mb-10" style={{ color: "#4285F4" }}>
            AI Innovation
          </h3>

          {/* Award image */}
          <div className="rounded-2xl overflow-hidden mb-10 shadow-xl max-w-3xl mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/awards/Miguel Tablado AI Innovation Headshot _ 2025 Partner All-stars_.png`}
              alt="Miguel Tablado León — Google Cloud 2025 Partner All-star AI Innovation"
              className="w-full object-cover"
            />
          </div>

          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Recognised by Google Cloud as a Partner All-star for AI Innovation —
            awarded to a select group of individuals whose work has driven{" "}
            <strong>exceptional outcomes in artificial intelligence solutions</strong>{" "}
            and partner ecosystem impact.
          </p>
        </div>
      </section>

      {/* ── The Heart of Kyndryl ──────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0d2137" }}>
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center" style={{ color: "#93c5fd" }}>
            Kyndryl · 2024
          </p>
          <h2 className="text-4xl font-bold text-white text-center leading-tight mb-3">
            The Heart of Kyndryl
          </h2>
          <h3 className="text-xl font-semibold text-center mb-16" style={{ color: "#93c5fd" }}>
            Inaugural Honoree
          </h3>

          {/* Award banner image */}
          <div className="rounded-2xl overflow-hidden mb-10 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/awards/heart_of_kyndryl_24.png`}
              alt="The Heart of Kyndryl — 2024 Honorees"
              className="w-full object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-lg text-center max-w-3xl mx-auto mb-16" style={{ color: "#bfdbfe" }}>
            The Heart of Kyndryl was established to recognise and celebrate outstanding
            Kyndryls from across the global business who are at the heart of its
            progress — exemplifying and advancing The Kyndryl Way and enabling shared
            success for the company and customers. Honoured in its inaugural year.
          </p>

          {/* Spanish honorees image */}
          <h3 className="text-2xl font-semibold text-white text-center mb-6">
            List of Honorees
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/awards/heart_of_kyndryl_24_spanish_honorees.png`}
              alt="Heart of Kyndryl 2024 — Spain & Portugal Honorees"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
