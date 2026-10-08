export interface ShowcaseProject {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  badgeColor: string;
  role: string;
  year: string;
  description: string;
  highlights: string[];
  techStack: string[];
  urlBar: string;
  mainImage: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl: string;
}

export const projects: ShowcaseProject[] = [
  {
    id: "ngo-digital-connect",
    index: "01",
    title: "NGO Digital Connect",
    subtitle: "Traceable Social Impact Ecosystem",
    category: "Hackathon Flagship",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    role: "Full-Stack Developer & Architect",
    year: "2026",
    description:
      "An integrated, traceable social impact platform connecting NGOs, donors, volunteers, and beneficiaries in a single transparent lifecycle. Built with AI-assisted natural language intake, status-driven case tracking, and dynamic impact milestones.",
    highlights: [
      "AI natural language intake for beneficiary triage",
      "Real-time campaign capital & volunteer hub",
      "Strict PII data privacy and audit compliance",
      "Audited spend ledger against project milestones",
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "Node.js",
      "Vite",
      "Tailwind CSS",
      "AI Triage",
      "Vercel",
    ],
    urlBar: "ngo-digital-connect.vercel.app",
    mainImage: "/images/projects/NGO1.png",
    gallery: [
      "/images/projects/NGO1.png",
      "/images/projects/NGO2.png",
      "/images/projects/NGO3.png",
      "/images/projects/NGO4.png",
    ],
    liveUrl: "https://ngo-digital-connect.vercel.app",
    githubUrl: "https://github.com/StackAttack-Org/NGO-Digital-Connect.git",
  },
  {
    id: "renamex",
    index: "02",
    title: "RenameX",
    subtitle: "High-Speed Batch Extension Modifier",
    category: "Python Automation",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    role: "Creator & Python Developer",
    year: "2026",
    description:
      "A fast, secure bulk file extension modifier and batch renamer engineered with Python. Designed for rapid developer productivity across deep directory structures with pattern matching, dry-run safety verification, and dual CLI & GUI workflows.",
    highlights: [
      "Instant batch modification across deep directory trees",
      "Dry-run simulation mode to prevent accidental renames",
      "Custom regex and file prefix/suffix transformations",
      "Cross-platform support for Windows, Linux, and macOS",
    ],
    techStack: [
      "Python",
      "CLI & GUI",
      "File System API",
      "Batch Renaming",
      "Automation",
      "MIT License",
    ],
    urlBar: "github.com/sujoylayek2006/RenameX",
    mainImage: "/images/projects/RenameX.png",
    githubUrl: "https://github.com/sujoylayek2006/RenameX",
  },
  {
    id: "multifilemaker",
    index: "03",
    title: "MultiFileMaker",
    subtitle: "Automated Directory & File Scaffolding",
    category: "Developer Productivity",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    role: "Creator & Automation Engineer",
    year: "2026",
    description:
      "A high-speed batch file creation and directory scaffolding utility in Python. Allows developers and educators to generate templated project structures, dummy mock files, and boilerplate assets with custom extensions and naming schemas in seconds.",
    highlights: [
      "Rapid mass file generation for benchmarking & testing",
      "Flexible naming schemas with sequential counters",
      "Custom boilerplate injection during creation",
      "Clean interactive command-line and graphical interface",
    ],
    techStack: [
      "Python",
      "File Scaffolding",
      "Developer Tools",
      "Automation Engine",
      "Scripting",
    ],
    urlBar: "github.com/sujoylayek2006/MultiFileMaker",
    mainImage: "/images/projects/MultiFileMaker.png",
    githubUrl: "https://github.com/sujoylayek2006/MultiFileMaker",
  },
];
