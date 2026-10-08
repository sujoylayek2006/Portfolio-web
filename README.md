# Sujoy Layek — Editorial Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS%204-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<p align="center">
  A high-end, editorial personal portfolio built with <b>Next.js 16 (App Router)</b>, <b>React 19</b>, <b>Tailwind CSS 4</b>, and <b>Framer Motion</b>.
</p>

### 🌐 [Explore Live Portfolio — sujoylayek.vercel.app](https://sujoylayek.vercel.app)

[Live Demo](https://sujoylayek.vercel.app) • [GitHub](https://github.com/sujoylayek2006) • [LinkedIn](https://linkedin.com/in/sujoy-layek-6a206b338) • [Email](mailto:sujoylayek.rampur.2006@gmail.com)

</div>

---

## ✨ Overview

This portfolio showcases the engineering work, full-stack systems, developer tooling, and accredited certifications of **Sujoy Layek**, a B.Tech Computer Science & Engineering student at NSHM Knowledge Campus Durgapur.

Designed with an **editorial dark luxury aesthetic** (inspired by Lewis Zhang), featuring smooth micro-interactions, responsive 3D perspective hardware stages, animated proficiency meters, and lightning-fast static prerendering with Next.js Turbopack.

---

## 🚀 Key Features

- **Editorial Aesthetic & Ambient Radial Lighting:** GPU-accelerated glow mesh orbs, luxury serif typography (`Playfair Display` + `Geist Sans`), and a dark `#080808` low-contrast palette.
- **Narrative Section Flow:** Clean, natural storytelling structure:
  1. **Hero:** Monumental headline, status pill, and domain focus tags (Full-Stack, Cybersecurity, Ethical Hacking, AI).
  2. **About & Background:** Personal engineering narrative, B.Tech CSE background, and professional portrait.
  3. **Vision Marquee:** Infinite hardware-accelerated ticker loop showcasing engineering philosophies.
  4. **Selected Works:** 3D interactive laptop perspective stage showcasing featured applications.
  5. **Technical Stack:** 6-category matrix with animated proficiency progress bars and percentage meters.
  6. **Accreditations:** 21 verified certifications across 5 organizations, organized strictly from Beginner to Pro with level badges.
  7. **Contact & Editorial Footer:** Zero-serverless contact pipeline with instant direct Gmail fallback.
- **3D Interactive Laptop Stage:** Perspective carousel presenting projects inside a custom-rendered MacBook hardware mockup with real UI captures.
- **Curated Projects Showcase:**
  - **NGO Digital Connect:** Full-stack NGO discovery and donation platform with real-time intake and AI verification.
  - **RenameX:** High-efficiency batch file renamer and developer automation utility.
  - **MultiFileMaker:** Scalable multi-file generation tool for rapid workspace scaffolding.
- **Interactive Organization Drawer:** Click-to-toggle accordion drawers for **HackerRank**, **IBM**, **Oracle**, **AWS**, and **CISCO**, all starting in a tidy collapsed state.
- **Dynamic OpenGraph Social Card:** Built-in `opengraph-image.tsx` generating automated 1200x630 rich preview cards for WhatsApp, LinkedIn, and Twitter/X.
- **Branded "SL" Favicon:** Custom multi-resolution icon (`16x16`, `32x32`, `48x48`, `64x64`) and dynamic App Router icon.
- **Dual-Engine Contact Delivery:** Serverless FormSubmit API integration with automatic anti-spam honeypot + 1-click **"Send via Gmail Web"** compose link fallback.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 16 (App Router / Turbopack)](https://nextjs.org/) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom Brand Glyphs |
| **Deployment & Edge** | [Vercel](https://vercel.com/) |

---

## 📊 Technical Capabilities

- **Frontend & UI Engineering (80%):** React 18/19, Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Responsive UI.
- **Backend & Database Systems (80%):** Node.js, Express, RESTful APIs, SQL (Advanced CTEs & Queries), Serverless Functions.
- **Programming & Algorithms (80%):** Python, C, Data Structures & Algorithms, Object-Oriented Design.
- **Artificial Intelligence & GenAI (60%):** Generative AI, Large Language Models, Autonomous Agents, Prompt Engineering, OCI GenAI.
- **Cybersecurity & Defense (60%):** Network Defense, Vulnerability Assessment, Threat Modeling, Web App Security.
- **DevOps, Tools & Environment (70%):** Git & GitHub, Linux CLI/Bash, Vercel Edge, Vite, Postman, ESLint.

---

## 📂 Project Structure

```text
├── docs/
│   ├── PRD.md               # Product Requirements Document
│   └── architecture.md      # System design & architecture specification
├── public/
│   ├── favicon.ico          # Multi-resolution branded SL favicon
│   ├── fonts/               # Custom typography
│   ├── images/
│   │   ├── projects/        # Real application screenshots (NGO1, RenameX, MFM)
│   │   └── sujoy-profile.jpg# Professional portrait photo
│   └── models/              # 3D assets & particle buffers
├── src/
│   ├── app/                 # Next.js App Router (layout, routes & metadata)
│   │   ├── favicon.ico
│   │   ├── globals.css      # Design tokens & ambient utilities
│   │   ├── icon.tsx         # Dynamic high-DPI SL app icon
│   │   ├── layout.tsx       # Root layout & OpenGraph metadataBase
│   │   ├── opengraph-image.tsx # Dynamic 1200x630 social card generator
│   │   ├── page.tsx         # Portfolio single-page layout & narrative flow
│   │   ├── robots.ts        # Search crawler rules
│   │   └── sitemap.ts       # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── sections/        # Page sections
│   │   │   ├── About.tsx    # Portrait & personal story
│   │   │   ├── Certifications.tsx # Organization drawers (Beginner to Pro)
│   │   │   ├── Contact.tsx  # Serverless contact form & Gmail compose
│   │   │   ├── Hero.tsx     # Monumental headline & interest tags
│   │   │   ├── MarqueeBanner.tsx # Infinite typography ticker
│   │   │   ├── ProjectShowcase.tsx # 3D MacBook perspective stage
│   │   │   └── Skills.tsx   # 6-category matrix with proficiency bars
│   │   ├── ui/              # Reusable UI primitives
│   │   │   ├── AmbientBackground.tsx
│   │   │   ├── Icons.tsx
│   │   │   ├── LaptopMockup.tsx
│   │   │   └── Navbar.tsx   # Minimal header & fullscreen drawer menu
│   │   └── archive/         # Archived experimental components
│   │       ├── CustomCursor.tsx
│   │       └── ParticleGalaxy.tsx
│   ├── data/                # Decoupled content data layer
│   │   ├── certifications.ts# 21 certifications ordered Beginner to Pro
│   │   ├── navigation.ts    # Nav links, social profiles & resume link
│   │   ├── projects.ts      # Featured projects data & highlights
│   │   └── skills.ts        # Skill categories & proficiency data
│   ├── lib/                 # Utility helpers
│   │   └── utils.ts         # Tailwind class merging helper (cn)
│   └── types/               # TypeScript interfaces
│       └── index.ts         # Shared portfolio type definitions
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.18.0 or later (v20+ recommended)
- **npm**: v9+ or **pnpm** / **yarn**

### 2. Clone the Repository
```bash
git clone https://github.com/sujoylayek2006/Portfolio-web.git
cd Portfolio-web
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 👤 Author

**Sujoy Layek**  
- **Portfolio:** [sujoylayek.vercel.app](https://sujoylayek.vercel.app)  
- **GitHub:** [@sujoylayek2006](https://github.com/sujoylayek2006)  
- **LinkedIn:** [Sujoy Layek](https://linkedin.com/in/sujoy-layek-6a206b338)  
- **Email:** [sujoylayek.rampur.2006@gmail.com](mailto:sujoylayek.rampur.2006@gmail.com)  
- **Education:** B.Tech in Computer Science & Engineering, NSHM Knowledge Campus Durgapur  

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).