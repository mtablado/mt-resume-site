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
    type: "panel",
    title: "People Management in Spain: How to Adapt Talent and Business Management by Industry",
    venue: "Factorial Summit (El Confidencial)",
    date: "October 8, 2025",
    url: "#",
    description:
      "Panelist in the 'Mesa Redonda Factorial Summit' round table, alongside Leticia Manero (Telefónica Pymes, Business Development), Patricia López (Mercer, Director of Strategic Health & Corporate Wellbeing Consulting), and Manuel Jiménez (Santander, Head of Talent and Culture), moderated by Lucía Puerto (El Confidencial). Discussed how people management in Spain — talent strategy, HR practices, and business management — needs to adapt depending on the industry.",
    thumbnail: "/speaking/factorial-summit-mesa-redonda.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ZBqDHXA5ubs",
  },
  {
    type: "panel",
    title: "Wake Up, Spain! 2026: Crecimiento, cohesión e incertidumbre",
    venue: "Wake Up Spain (El Español)",
    date: "April 15, 2026",
    url: "#",
    description:
      "Panelist at Wake Up, Spain! 2026, El Español's forum on growth, cohesion, and uncertainty in the Spanish economy.",
    thumbnail: "/speaking/wake-up-spain-2026.png",
    videoUrl: "https://www.youtube.com/live/4Bjge0QEV-0?t=8400s",
  },
  {
    type: "talk",
    title: "Agentic AI at Insurance Industry: From Vision to Reality",
    venue: "Semana del Seguro (INESE)",
    date: "February 2026",
    url: "https://www.linkedin.com/posts/mtablado_ia-agaezntica-seguros-activity-7432702373187301376-6qNP",
    description:
      "At Semana del Seguro 2026, I co-presented the Kyndryl session 'Agentic AI in Insurance: From Vision to Reality' with Juan José Cerrolaza, PhD, tackling one of the most profound shifts underway in the sector. Agentic AI isn't just advanced automation or a smarter chatbot — it's an operating model built on multi-agent systems that can reason, decide, act, and coordinate with each other within core processes. The demo showcased agents with interoperability across hybrid architectures, end-to-end observability, contextual decision-making, and integration with legacy systems. But the real challenge in insurance isn't technical — it's structural: highly regulated environments demand graduated autonomy (human-in-the-loop / human-on-the-loop), full decision traceability, data governance aligned with the AI Act and DORA, continuous monitoring of drift and emergent behavior, and resilient, scalable cloud architectures.",
    thumbnail: "/speaking/inese-semana-del-seguro-2026.png",
    eventBadge: "INESE",
  },
];
