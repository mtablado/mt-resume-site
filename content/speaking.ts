export type PublicationType = "talk" | "article" | "panel" | "press" | "podcast";

export interface Publication {
  type: PublicationType;
  title: string;
  venue: string;
  date: string;
  url: string;
  description: string;
  /** Canonical event/organizer name used for filtering, e.g. "Google Cloud", "Wake Up Spain" */
  event: string;
  /**
   * Editorial relevance tier for the default "Relevance" sort — 1 (most relevant) to 5
   * (least). Ties within a tier are broken by date (newest first). Inferred from
   * venue/partner prominence, content type (panels & talks over press soundbites), and
   * video availability. Independent of array order and of the "Date" sort.
   */
  relevance: 1 | 2 | 3 | 4 | 5;
  /** Path relative to public/, e.g. "/speaking/google-summit-madrid.jpg" */
  thumbnail?: string;
  /** YouTube (or similar) recording of the talk/interview, if one exists */
  videoUrl?: string;
  /** Highlights this entry in a standalone showcase above the regular grid */
  featured?: boolean;
  /** Short, prominent tag for a notable venue (e.g. "Google Summit"), shown as its own accent pill */
  eventBadge?: string;
  /** Show the thumbnail in full (letterboxed) instead of cropping it to fill the 16:9 frame */
  preserveThumbnail?: boolean;
}

export interface FeaturedAtLogo {
  name: string;
  /** Path relative to public/, e.g. "/logos/google-cloud.svg" */
  src: string;
  /** Logo is designed for a dark background (e.g. white/light wordmark) — render on a navy chip */
  dark?: boolean;
}

/** Companies, events, and media outlets to showcase as a "Featured At" logo strip */
export const featuredAtLogos: FeaturedAtLogo[] = [
  { name: "Google Cloud AI Live", src: "/logos/google-cloud.svg" },
  { name: "Dynatrace", src: "/logos/dynatrace.png" },
  { name: "Factorial", src: "/logos/factorial.svg" },
  { name: "El Confidencial", src: "/logos/el-confidencial.png" },
  { name: "El Español", src: "/logos/el-espanol.svg" },
  { name: "INESE", src: "/logos/inese.png" },
  { name: "Wake Up! Spain", src: "/logos/wake-up-spain.svg", dark: true },
  { name: "Codemotion", src: "/logos/codemotion.png" },
  { name: "DISRUPTORES", src: "/logos/disruptores.png" },
  { name: "Invertia", src: "/logos/invertia.png" },
];

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
    event: "Dynatrace",
    relevance: 2,
  },
  {
    type: "panel",
    title: "IBSalut & Kyndryl - Advanced AI in Regulated Industries with Gemini",
    venue: "Google Cloud AI Live, Madrid 2026 (Google Summit) — IFEMA, Madrid",
    date: "May 25, 2026",
    url: "https://www.linkedin.com/posts/mtablado_atenci%C3%B3n-quiero-anunciar-la-participaci%C3%B3n-activity-7465033168249671680-_vb4",
    description:
      "Invited to speak at Google Cloud AI Live, Madrid 2026 — Google's flagship regional Summit — as a panelist alongside Alberto Guzmán (Google) and Miguel Ángel Benito (IBSalut). We discussed how Kyndryl helped IBSalut build their Genomic Platform of Expert Analysis for Precision Medicine — a clinical-genomic platform developed with the Govern de les Illes Balears and GenIB6P, running advanced AI in a regulated healthcare environment with Gemini. My segment appears in the final 15 minutes of the recording.",
    thumbnail: "/speaking/ibsalut-kyndryl-genomic-platform-gemini.png",
    videoUrl: "https://youtu.be/bTpH4Wt5w-U",
    eventBadge: "Google Summit",
    event: "Google Cloud",
    relevance: 1,
  },
  {
    type: "talk",
    title: "Project ARDORA: Bankinter's Big Data Migration to Advanced Analytics on Google Cloud",
    venue: "Google Cloud Summit, Madrid 2025 (Google Summit)",
    date: "May 22, 2025",
    url: "#",
    description:
      "Presented Project ARDORA, executed by Bankinter on Google Cloud — an innovative project showcasing how to build a new advanced-analytics platform using BigQuery as the data lake and Vertex AI for running models. The session took place after the project's successful completion, covering the challenges and achievements, the execution plan, and the key success factors. Delivered alongside Rafael Salcedo (CTO, Bankinter) and Santiago Cepas (Google Cloud Engineer).",
    thumbnail: "/speaking/google-summit-madrid-2025-bankinter-ardora.png",
    videoUrl: "https://www.youtube.com/watch?v=oNmWLqrkl_s&t=1686s",
    eventBadge: "Google Summit",
    event: "Google Cloud",
    relevance: 2,
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
    event: "Factorial",
    relevance: 3,
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
    event: "Wake Up Spain",
    relevance: 3,
  },
  {
    type: "press",
    title: "From Copilot to IoT: How AI Is Reshaping Everyday Work",
    venue: "Wake Up Spain (El Español)",
    date: "April 2024",
    url: "#",
    description:
      "On-camera interview with EL ESPAÑOL at the IV edition of Wake Up, Spain!, sharing perspective as Kyndryl Spain's CTO of Data & AI on the themes of the forum. Miguel explains that the primary objective for most organizations is to use artificial intelligence to improve productivity, highlighting how large language models and tools such as Copilot are already helping employees and students write, summarize, and better understand information — making AI a practical part of everyday work. Looking ahead, he says the next step is to apply AI to more complex business processes by integrating it with technologies such as robotics, cameras, and IoT. Reflecting on his own experience using AI to improve presentations and written content, he concludes that AI is already transforming daily work and will eventually become so integrated into everyday life that people will no longer notice it as a distinct technology.",
    thumbnail: "/speaking/wake-up-spain-2024-interview.jpg",
    videoUrl: "https://www.dailymotion.com/video/x8wzsy2",
    event: "Wake Up Spain",
    relevance: 5,
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
    event: "INESE",
    relevance: 4,
  },
  {
    type: "press",
    title: "Kyndryl Drives Agentic AI Adoption Across Industries",
    venue: "directorTIC.es",
    date: "March 2026",
    url: "https://directortic.es/entrevista/kyndryl-impulsa-la-adopcion-de-ia-agentica-en-diferentes-sectores-2026031047995.htm",
    description:
      "Interview with directorTIC.es on how agentic AI is moving from experimentation to operational deployment in mission-critical sectors. In healthcare, AI supports personalized medicine through genomic analysis and administrative automation, while financial institutions use agentic systems to speed up incident response. Miguel discusses why successful adoption requires cultural transformation, robust data platforms, observability, and governance — including Kyndryl's 'policy as code' approach, which translates regulatory requirements into machine-readable policies. As he puts it: 'I've moved from knowing the process I need to protect to understanding a system with decision-making freedom.' Originally shared on LinkedIn by Inma Elizalde.",
    thumbnail: "/speaking/kyndryl-agentic-ai-directortic-2026.png",
    event: "directorTIC.es",
    relevance: 5,
  },
  {
    type: "talk",
    title: "Kyndryl AI360: Ascenso hacia un modelo MLOps",
    venue: "SILC 2024 — Comillas Pontifical University, Santander",
    date: "October 7, 2024",
    url: "https://www.linkedin.com/posts/mtablado_the-second-day-of-silc-2024-is-over-and-so-activity-7245377477093584896-zyg4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAILaNcB1cpdF4v8DfOBDg5FsZNqTit1mvM",
    description:
      "The presentation was delivered by Miguel Tablado, Chief Technology Officer at Kyndryl, and Javier Menéndez Pallo, the company's Artificial Intelligence Advisor and co-creator of the Spanish chapter of the Global AI Community. Their session, focused on the integration of Artificial Intelligence (AI) in various industries, centered on building a 360-degree AI model. They provided several real-world examples of how AI is transforming industrial processes, emphasizing the importance of strategic partnerships in designing effective AI strategies.",
    thumbnail: "/speaking/silc-2024-comillas-ai360-mlops.png",
    preserveThumbnail: true,
    event: "SILC",
    relevance: 4,
  },
  {
    type: "panel",
    title: "CTO Panel: Transicionando al liderazgo futuro",
    venue: "Codemotion Madrid 2024",
    date: "May 21, 2024",
    url: "https://www.linkedin.com/posts/mtablado_codemotionmadrid24-kyndryl-activity-7199059991033442306-tXwf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAILaNcB1cpdF4v8DfOBDg5FsZNqTit1mvM",
    description:
      "Panelist in 'CTO Panel: Transicionando al liderazgo futuro' at Codemotion Madrid 2024, alongside Álvaro Moya (CTO & Founder, LIDR.co), Rafael Serrano (CTO, Civitatis), and Miriam Bayona (CTO, Quipu). In this panel I shared how AI is shifting developers' activities and routines, and how Agile methodologies and leadership require human-being KPIs to be implemented to adjust how team performance is measured. The leader must apply a corrective factor to 'objective' KPIs, even more so in the era of AI.",
    thumbnail: "/speaking/codemotion-madrid-2024-cto-panel.png",
    preserveThumbnail: true,
    event: "Codemotion",
    relevance: 2,
  },
  {
    type: "panel",
    title: "Roundtable 'Technology': The Challenges of Reconstruction and Progress",
    venue: "III Foro Económico de la Comunitat Valenciana (DISRUPTORES / INVERTIA / El Español), Valencia",
    date: "December 18, 2024",
    url: "https://www.elespanol.com/eventos/2024/foro-economico-de-la-comunitat-valenciana/20241218/tecnologia-pone-servicio-reconstruccion-dana-dentro-desgracia-oportunidad/909659498_0.html",
    description:
      "Panelist in the 'Tecnología' round table at the III Foro Económico de la Comunitat Valenciana, organized by DISRUPTORES, INVERTIA, and El Español weeks after the devastating DANA floods, under the theme 'Los desafíos de la reconstrucción y el progreso' (The challenges of reconstruction and progress). Shared how technology can help families, businesses, and the environment recover and rebuild.",
    thumbnail: "/speaking/foro-economico-comunitat-valenciana-2024.png",
    videoUrl: "https://www.youtube.com/watch?v=ZpUHzt2sHNQ&t=686s",
    event: "Foro Económico CV",
    relevance: 3,
  },
  {
    type: "panel",
    title: "Wake Up, Spain! 2024: Roundtable: AI and Its Real-World Application",
    venue: "IV Wake Up Spain (El Español / Invertia / DISRUPTORES)",
    date: "April 18, 2024",
    url: "https://www.linkedin.com/posts/mtablado_ia-ia360-wakeupspain24-activity-7187044716692070400-kyaO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAILaNcB1cpdF4v8DfOBDg5FsZNqTit1mvM",
    description:
      "Panelist at IV Wake Up Spain, organized by EL ESPAÑOL, Invertia, and DISRUPTORES, in a round table on AI and its real-world application. Discussed the gap between companies' AI aspirations and reality, the shift toward world models, and how Kyndryl's AI360 helps clients across three pillars: Use Cases, Platforms & Architectures, and AI Governance & Operations. Shared the stage — impeccably and warmly moderated by Beatriz Aznar Millán — with Fernando Lázaro (CEO, SuperReal / MIO Group), Félix Gil (CEO, Integra Tecnología), Alberto García Arrieta (Managing Director of AI & Data, Accenture), and Miguel Lucas (Global Innovation Director, LLYC).",
    thumbnail: "/speaking/wake-up-spain-2024-panel.png",
    videoUrl: "https://www.youtube.com/watch?v=KH_8Bxfi6_c&t=10244s",
    event: "Wake Up Spain",
    relevance: 3,
  },
];
