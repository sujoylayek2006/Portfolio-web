import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairSerif = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sujoy Layek — Full-Stack Developer & Student",
  description:
    "Personal portfolio of Sujoy Layek, a Full-Stack Web Developer and B.Tech CSE student at NSHM Knowledge Campus Durgapur. Showcasing hackathon projects, developer tools, and verified engineering certifications.",
  keywords: [
    "Sujoy Layek",
    "Full-Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "NGO Digital Connect",
    "RenameX",
    "NSHM Knowledge Campus",
  ],
  authors: [{ name: "Sujoy Layek", url: "https://github.com/sujoylayek2006" }],
  openGraph: {
    title: "Sujoy Layek — Full-Stack Developer & Student",
    description:
      "Full-Stack Developer, CSE Student, and open-source creator. Explore hackathon projects, developer tools, and skills.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfairSerif.variable} dark scroll-smooth`}
    >
      <body className="bg-[#080808] text-[#e5e5e5] font-sans antialiased selection:bg-neutral-800 selection:text-white min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
