// Placeholder content — replace with real talks/articles/press from LinkedIn.

export type PublicationType = "talk" | "article" | "panel" | "press" | "podcast";

export interface Publication {
  type: PublicationType;
  title: string;
  venue: string;
  date: string;
  url: string;
  description: string;
  /** Path relative to public/, e.g. "/speaking/google-summit-madrid.jpg" */
  thumbnail?: string;
  /** YouTube (or similar) recording of the talk/interview, if one exists */
  videoUrl?: string;
  /** Highlights this entry in a standalone showcase above the regular grid */
  featured?: boolean;
  /** Short, prominent tag for a notable venue (e.g. "Google Summit"), shown as its own accent pill */
  eventBadge?: string;
}

export const introStatement: string =
  "Beyond my day-to-day role as CTO, I'm a frequent voice in the industry conversation around " +
  "Agentic AI, cloud architecture, and technology leadership — recognized as a LinkedIn Top Voice " +
  "and one of Kyndryl's featured representatives. Here's a selection of the talks, articles, and " +
  "conversations I've been part of.";

export const publications: Publication[] = [
  {
    type: "panel",
    title: "Business Observability and Operational Excellence: A Conversation with CaixaBank",
    venue: "Dynatrace Innovate Roadshow Madrid — Motor and Sport Institute",
    date: "June 2026",
    url: "https://www.linkedin.com/posts/mtablado_atenci%C3%B3n-quiero-anunciar-la-participaci%C3%B3n-ugcPost-7465033167037538305-S-AO/",
    description:
      "Joined Enrique García (CaixaBank) for a joint session on Business Observability and Operational Excellence at Dynatrace's Innovate Roadshow Madrid — the largest observability event in Spain — reinforcing our shared mission for CaixaBank to lead the observability space, always. Kyndryl joined Abast, Devoteam, and Inetum as sponsors of the event, as highlighted by Dynatrace Country Manager José Matías.",
    thumbnail: "/speaking/dynatrace-innovate-roadshow-madrid-2026.png",
  },
  {
    type: "panel",
    title: "IBSALUT & KYNDRYL - IA Avanzada en Entornos Regulados con Gemini",
    venue: "Google Cloud AI Live, Madrid 2026 (Google Summit) — IFEMA, Madrid",
    date: "May 25, 2026",
    url: "https://www.linkedin.com/posts/mtablado_atenci%C3%B3n-quiero-anunciar-la-participaci%C3%B3n-activity-7465033168249671680-_vb4",
    description:
      "Invited to speak at Google Cloud AI Live, Madrid 2026 — Google's flagship regional Summit — as a panelist alongside Alberto Guzmán (Google) and Miguel Ángel Benito (IBSalut). We discussed how Kyndryl helped IBSalut build their Genomic Platform of Expert Analysis for Precision Medicine — a clinical-genomic platform developed with the Govern de les Illes Balears and GenIB6P, running advanced AI in a regulated healthcare environment with Gemini. My segment appears in the final 15 minutes of the recording.",
    thumbnail: "/speaking/ibsalut-kyndryl-genomic-platform-gemini.png",
    videoUrl: "https://youtu.be/bTpH4Wt5w-U",
    featured: true,
    eventBadge: "Google Summit",
  },
  {
    type: "talk",
    title: "Agentic AI in the Enterprise: From Pilots to Production",
    venue: "Google Cloud Summit Madrid",
    date: "May 2025",
    url: "#",
    description:
      "A look at how enterprises can scale agentic AI patterns beyond proof-of-concept, with a focus on regulated industries.",
    thumbnail: "/speaking/google-summit-madrid-2025.jpg",
    videoUrl: "https://www.youtube.com/watch?v=REPLACE_ME_1",
  },
  {
    type: "article",
    title: "Why Every CTO Needs an AI Adoption Playbook",
    venue: "LinkedIn Articles",
    date: "February 2025",
    url: "#",
    description:
      "A pragmatic perspective on sequencing AI adoption and governance for technology leaders.",
    thumbnail: "/speaking/ai-adoption-playbook-article.jpg",
  },
  {
    type: "panel",
    title: "The Future of Data Platforms in Financial Services",
    venue: "WakeUp! Spain",
    date: "November 2024",
    url: "#",
    description:
      "Panel discussion with banking and utilities leaders on modern data platform strategy.",
    thumbnail: "/speaking/wakeup-spain-panel-2024.jpg",
    videoUrl: "https://www.youtube.com/watch?v=REPLACE_ME_2",
  },
  {
    type: "press",
    title: "Kyndryl's Top Voices on AI Transformation in Iberia",
    venue: "Forbes España",
    date: "September 2024",
    url: "#",
    description: "Feature interview on leading AI transformation initiatives across Spain and Portugal.",
    thumbnail: "/speaking/forbes-espana-feature-2024.jpg",
  },
  {
    type: "podcast",
    title: "Scaling Cloud-Native Architectures with Agentic AI",
    venue: "CloudTalks Podcast",
    date: "July 2024",
    url: "#",
    description: "A conversation on combining cloud-native architecture with emerging agentic AI patterns.",
    thumbnail: "/speaking/cloudtalks-podcast-2024.jpg",
  },
  {
    type: "talk",
    title: "Building the Kyndryl AI Lab: Lessons from the Field",
    venue: "Kyndryl Iberia Innovation Day",
    date: "March 2024",
    url: "#",
    description: "Keynote on standing up an internal AI innovation lab and the lessons learned along the way.",
    thumbnail: "/speaking/kyndryl-innovation-day-2024.jpg",
    videoUrl: "https://www.youtube.com/watch?v=REPLACE_ME_3",
  },
];
