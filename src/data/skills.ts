export interface SkillCategoryData {
  id: string;
  name: string;
  iconName: "Layers" | "Terminal" | "Server" | "Cpu" | "ShieldCheck" | "Wrench";
  color: string;
  accent: string;
  skills: string[];
}

export const skillCategories: SkillCategoryData[] = [
  {
    id: "frontend",
    name: "Frontend & UI Engineering",
    iconName: "Layers",
    color: "text-purple-400",
    accent: "from-purple-500/10 to-transparent",
    skills: [
      "React 18",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI Design",
      "HTML5 / Modern CSS",
      "Component Architecture",
    ],
  },
  {
    id: "backend",
    name: "Backend & Database Systems",
    iconName: "Server",
    color: "text-emerald-400",
    accent: "from-emerald-500/10 to-transparent",
    skills: [
      "Node.js & Express",
      "RESTful API Design",
      "SQL (Advanced Queries & CTEs)",
      "Serverless Functions",
      "Relational Schema Design",
      "Authentication Flows",
      "JSON Data Pipelines",
    ],
  },
  {
    id: "programming",
    name: "Programming Languages & Algorithms",
    iconName: "Terminal",
    color: "text-blue-400",
    accent: "from-blue-500/10 to-transparent",
    skills: [
      "Python (Automation & Scripting)",
      "C Programming",
      "TypeScript & JavaScript",
      "Data Structures & Algorithms",
      "Algorithmic Problem Solving",
      "Object-Oriented Design (OOP)",
    ],
  },
  {
    id: "ai",
    name: "Artificial Intelligence & GenAI",
    iconName: "Cpu",
    color: "text-amber-400",
    accent: "from-amber-500/10 to-transparent",
    skills: [
      "Generative AI & LLMs",
      "Autonomous AI Agent Architectures",
      "Prompt Engineering",
      "RAG & Vector Concepts",
      "OCI GenAI & AWS Bedrock",
      "AI-Assisted App Integration",
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Defense",
    iconName: "ShieldCheck",
    color: "text-cyan-400",
    accent: "from-cyan-500/10 to-transparent",
    skills: [
      "Network Defense & Architecture",
      "Vulnerability Assessment",
      "Enterprise Threat Modeling",
      "Cryptography Essentials",
      "Web Application Security",
      "Data Privacy & PII Protection",
    ],
  },
  {
    id: "tools",
    name: "DevOps, Tools & Environment",
    iconName: "Wrench",
    color: "text-pink-400",
    accent: "from-pink-500/10 to-transparent",
    skills: [
      "Git & GitHub Version Control",
      "Linux CLI & Bash",
      "Vercel Edge Deployment",
      "Vite Dev Server",
      "Postman API Testing",
      "ESLint & TypeScript Compiler",
      "VS Code Optimization",
    ],
  },
];
