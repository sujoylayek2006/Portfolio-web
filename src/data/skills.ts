export interface SkillCategoryData {
  id: string;
  name: string;
  iconName: "Layers" | "Terminal" | "Server" | "Wrench";
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
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 / CSS3",
      "Responsive Design",
    ],
  },
  {
    id: "programming",
    name: "Programming Languages & Algorithms",
    iconName: "Terminal",
    color: "text-blue-400",
    accent: "from-blue-500/10 to-transparent",
    skills: [
      "Python (Automation, Scripting)",
      "C Programming",
      "TypeScript",
      "JavaScript",
      "Data Structures",
      "Algorithms & Problem Solving",
      "Object-Oriented Design",
    ],
  },
  {
    id: "backend",
    name: "Backend & Systems",
    iconName: "Server",
    color: "text-emerald-400",
    accent: "from-emerald-500/10 to-transparent",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "Serverless Functions",
      "Authentication Flows",
      "JSON Data Modeling",
    ],
  },
  {
    id: "tools",
    name: "Tools, DevOps & Environment",
    iconName: "Wrench",
    color: "text-pink-400",
    accent: "from-pink-500/10 to-transparent",
    skills: [
      "Git & GitHub",
      "Linux CLI / Bash",
      "Vercel Deployment",
      "Vite Dev Server",
      "ESLint & PostCSS",
      "Postman API Testing",
      "VS Code",
    ],
  },
];
