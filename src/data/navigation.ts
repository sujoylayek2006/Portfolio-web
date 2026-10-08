export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/sujoylayek2006",
  linkedin: "https://linkedin.com/in/sujoy-layek-6a206b338",
  email: "sujoylayek.rampur.2006@gmail.com",
  resume: "/resume.pdf",
};
