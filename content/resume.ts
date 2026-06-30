export const name = "Miguel Tablado León";
export const title = "Chief Technology Officer · Applications, Data & AI";

export const contact = {
  email: "migueltablado@gmail.com",
  linkedin: "linkedin.com/in/mtablado",
  phone: "", // add if desired
  location: "Barcelona, Catalonia, Spain",
};

export const summary =
  "With over two decades of experience across software engineering, cloud architecture, and Agentic AI. " +
  "I bridge the gap between technical complexity and business strategy, leading high-performing engineering teams " +
  "to deliver transformative solutions. My leadership style is rooted in respect and mentorship, fostering personal " +
  "growth and driving sustained team engagement. I partner closely with customers to translate their requirements " +
  "into scalable success, and I am a frequent public speaker at industry forums, including Google Summit, WakeUp! Spain, " +
  "and Forbes.";

export const skills: Record<string, string[]> = {
  "AI & Data": [
    "Data Science", "Agentic AI", "LangGraph", "AI Solutions Design",
    "MLOps", "AgentOps",
    "Data Frameworks & Platforms", "Data Streaming"
  ],
  "Cloud & Containers": [
    "Hyperscalers", "Hybrid Cloud", "Google MVP Partner", 
    "Landing Zones", "Kubernetes", "OpenShift",
    "Cloud Native Solutions",
  ],
  "Applications ": [
    "Solution Design", "Observability", "SDLC", "Agentic Development",
  ],
  "Leadership": [
    "Leading by Example", "Innovation", "Public Speaking", "Coach & Mentor", "Strategic Thinking", "FDE",
  ],
};

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "Catalan", level: "Native" },
  { name: "English", level: "C2" },
];

export const experience: {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}[] = [
  {
    title: "CTO for Applications, Data & AI (ADAI)",
    company: "Kyndryl Spain & Portugal",
    period: "November 2021 – Present",
    location: "Barcelona, Spain",
    bullets: [
      "Head the Forward Deployed Engineering team, delivering strategic AI engagements and accelerating customer adoption of innovative AI solutions.",
      "Lead the creation and execution of the Kyndryl AI Lab in Iberia, driving the development of agentic AI prototypes and customer-focused innovation initiatives.",
      "Lead the transformation of Kyndryl Managed Services across Iberia through the adoption of agentic AI, accelerating service innovation, increasing automation, and improving operational efficiency.",
      "Defining and implementing Agentic platforms and solutions in Finantial and Utilities sectors",
      "Defined the solution of a large advance analytics platform for a bank within Google, including Data and AI implementation and operations",
      "Defined and led the implementation of a new Genomics Platform based on Healthcare Data and AI Platform for Institut Balear de Salud",
      "Defined the strategy of Observability adoption with Dynatrace for one of the largest Spanish banks",
      "Defined the portfolio of Applications, Observability, Data and Artificial Intelligence",
      "Led expert team to define and deliver ADAI solutions for enterprise customers, creating the ADAI portfolio from the ground up after Kyndryl's spin-off from IBM.",
      "Multiplied ×4 business results on signings within the ADAI practice.",
      "Kyndryl Top Voice in Spain & Portugal on Data and AI — publications, conferences and panel member at industry events.",
      "Led Cloud Advisory Services team, creating the Enterprise Landing Zone concept to design and deploy landing zones automatically.",
    ],
  },
  {
    title: "Client Solutions Executive & Lead European Architect",
    company: "IBM GTS",
    period: "May 2018 – November 2021",
    location: "Madrid, Spain",
    bullets: [
      "Lead European Architect for pre-sales and consultancy, with 50+ projects sold and implemented using Kubernetes, OpenShift and Cloud platforms.",
      "Key role in IBM Services for Container Platforms strategy definition and architecture design.",
      "Led T&T projects in Financial, Retail, Logistics and Aircraft MRO sectors using Blockchain, Microservices, Elasticsearch and Kafka.",
    ],
  },
  {
    title: "Chief Architect / Technical Director",
    company: "Innofis ESGM",
    period: "November 2016 – May 2018",
    location: "Barcelona, Spain",
    bullets: [
      "Defined and led Innofis' digital banking products and solutions, introducing Netflix Microservices, DevOps strategies and OpenShift.",
      "Pre-sales key role — built technical strategies and participated in every stage of the sales process.",
      "Led transition from custom monolith deployments to configurable microservices on OpenShift and Docker.",
      "Managed Technology Office resources alongside project managers to ensure quality of deliverables.",
    ],
  },
  {
    title: "Technical Architecture Consultant",
    company: "Accenture",
    period: "July 2015 – November 2016",
    location: "Barcelona, Spain",
    bullets: [
      "Project Manager of the Development Architecture workstream for Banc Sabadell's integration of TSB bank.",
      "Defined and executed CI/CD lifecycle for AngularJS SPA, Spring Cloud microservices and TIBCO SOA services.",
      "Defined Container Architecture Reference (Docker) to guide the bank's PaaS selection for a hybrid Cloud.",
    ],
  },
  {
    title: "JEE Architect",
    company: "Indra Sistemas S.A.",
    period: "February 2006 – July 2015",
    location: "Barcelona, Spain",
    bullets: [
      "Technical leader for large-scale government tax-collection systems as Java Architect team lead.",
      "Defined and implemented end-to-end JEE n-tier architectures with a focus on system quality and maintainability.",
      "Applied Enterprise Integration Patterns via Apache Camel; drove CI adoption with Maven across multiple project types.",
      "Managed architecture team planning, developer training and technical committee leadership.",
    ],
  },
  {
    title: "Java Analyst",
    company: "KEAPPS Consultores Información S.L.",
    period: "November 2004 – January 2006",
    location: "Spain",
    bullets: [
      "Java programmer and analyst, working as a contractor embedded within Indra projects.",
    ],
  },
  {
    title: "Visual Basic Analyst",
    company: "vMark Software España S.A.",
    period: "May 2001 – November 2004",
    location: "Spain",
    bullets: [
      "Progressed from programmer to analyst on small and mid-size projects using Visual Basic and UniVerse database.",
    ],
  },
];

export const education: {
  degree: string;
  institution: string;
  period: string;
}[] = [
  {
    degree: "Certificate Program in Agentic AI",
    institution: "Johns Hopkins University",
    period: "2026",
  },
  {
    degree: "Masters Degree in Data Science",
    institution: "Universitat Oberta de Catalunya (UOC)",
    period: "2021 – 2023",
  },
  {
    degree: "Bachelor’s Degree in Information Systems Engineering",
    institution: "Universitat Autònoma de Barcelona (UAB)",
    period: "2001 – 2005",
  },
];

export const awards: {
  title: string;
  issuer: string;
  year: string;
}[] = [
  {
    title: "Google Cloud Partner All-star — AI Innovation",
    issuer: "Google Cloud",
    year: "2025",
  },
  {
    title: "The Heart of Kyndryl — Inaugural Honoree",
    issuer: "Kyndryl",
    year: "2024",
  },
  {
    title: "Kyndryl Top Voice — Data, AI & Cloud",
    issuer: "Kyndryl Spain & Portugal",
    year: "2022–present",
  },
  {
    title: "Member, Fundación COTEC",
    issuer: "Fundación COTEC para la Innovación",
    year: "2022",
  },
];
