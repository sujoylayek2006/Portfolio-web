export interface CertificationData {
  issuer: string;
  shortIssuer?: string;
  badgeColor: string;
  accentBorder: string;
  title: string;
  subtitle: string;
  year: string;
  credentialUrl: string;
}

export const certifications: CertificationData[] = [
  {
    issuer: "IBM",
    badgeColor: "from-blue-600/20 to-indigo-600/10",
    accentBorder: "group-hover:border-blue-500/40",
    title: "IBM Full-Stack Software Developer",
    subtitle: "Web Architecture, Node.js & Cloud Foundations",
    year: "Certified",
    credentialUrl: "https://www.credly.com/organizations/ibm",
  },
  {
    issuer: "Oracle",
    badgeColor: "from-red-600/20 to-amber-600/10",
    accentBorder: "group-hover:border-red-500/40",
    title: "Oracle Certified Foundations",
    subtitle: "Database Engineering & Java Programming Principles",
    year: "Certified",
    credentialUrl: "https://education.oracle.com/",
  },
  {
    issuer: "Amazon Web Services",
    shortIssuer: "AWS",
    badgeColor: "from-amber-600/20 to-orange-600/10",
    accentBorder: "group-hover:border-amber-500/40",
    title: "AWS Cloud Fundamentals & Architecture",
    subtitle: "Cloud Infrastructure, Storage & Compute Foundations",
    year: "Certified",
    credentialUrl: "https://aws.amazon.com/certification/",
  },
  {
    issuer: "Udemy",
    badgeColor: "from-purple-600/20 to-pink-600/10",
    accentBorder: "group-hover:border-purple-500/40",
    title: "Full-Stack Web Development & Python Automation",
    subtitle: "Advanced JavaScript, React Ecosystem & Python Scripting",
    year: "Completed",
    credentialUrl: "https://www.udemy.com/",
  },
];
