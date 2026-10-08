export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  tags: string[];
  repo: string;
  live?: string;
  metrics?: string;
  image: string;
  screenshots?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: "Layout" | "Code2" | "Server" | "Wrench";
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  iconName: "Award" | "Database" | "Cloud" | "Shield";
  skills: string[];
}

export interface NavItem {
  name: string;
  href: string;
}
