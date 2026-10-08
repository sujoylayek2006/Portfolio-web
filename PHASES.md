# PHASES.md — Build Phases & Roadmap
**Project Name:** Sujoy Layek — Developer Portfolio  
**Version:** 1.0.0  
**Status:** Approved  
**Date:** 2026-10-08  

---

## 1. Build Strategy

We follow a **thin vertical slice** strategy:
1. Establish a solid Next.js + Tailwind CSS + TypeScript foundation first with strict linting and green builds (Phase 0).
2. Build the aesthetic shell with dark ambient mesh lighting, navigation, and hero section (Phase 1).
3. Implement the flagship interactive laptop mockups for *NGO Digital Connect* and *RenameX* (Phase 2).
4. Build the About section, skills matrix, and verified certifications badges (Phase 3).
5. Integrate the functional contact form, custom cursor, micro-interactions, and mobile responsiveness (Phase 4).
6. Perform production build optimization, Lighthouse performance audit, and Vercel deployment preparation (Phase 5).

---

## 2. Phase Summary Table

| Phase | Name | Goal | Status |
|---|---|---|---|
| **Phase 0** | Project Setup & Foundation | Initialize Next.js project with Tailwind CSS, TypeScript, and Framer Motion | ✅ Completed |
| **Phase 1** | Shell, Hero & Ambient Aesthetic | Build the editorial header, navigation, and hero section with dark mesh gradients | ✅ Completed |
| **Phase 2** | Project Showcase & Device Mockups | Construct interactive laptop frames displaying *NGO Digital Connect* and *RenameX* | ✅ Completed |
| **Phase 3** | About, Skills & Certifications | Build About Me with portrait, skills matrix, and IBM/Oracle/AWS/Udemy badges | ✅ Completed |
| **Phase 4** | Contact Form, Cursor & Polish | Implement functional contact form, custom cursor, and responsive mobile adjustments | ✅ Completed |
| **Phase 6** | High-Fidelity Experience | Implement 3D particle galaxy, condensed hero, infinite ticker, 3D laptop slider stage & contrast footer | ✅ Completed |
| **Phase 5** | Production Audit & Deployment | Run lint/typecheck/build, audit Lighthouse score, and deploy to Vercel | 🔵 Planned |

---

## 3. Detailed Phase Breakdown

### Phase 0 — Project Setup & Foundation
- **Goal in one sentence:** Initialize a clean Next.js 14+ (App Router) project with Tailwind CSS, TypeScript, Framer Motion, and Lucide Icons, ensuring a green build and zero lint errors.
- **What is included:** FR-001 (scaffolding), tooling, package configuration, font setup (Playfair/editorial serif and Inter/Geist sans).
- **Depends on:** Nothing (starting phase).
- **Deliverables:** Working Next.js project directory, configured `tailwind.config.ts`, TypeScript config, asset folders with Sujoy's portrait image.
- **Definition of Done:** `npm run build` runs and finishes with exit code 0; dev server runs with zero console errors.
- **Human checkpoint:** Human verifies package setup and initial project directory.
- **Main risks:** Version mismatch in packages; Windows path/PowerShell execution quirks.

### Phase 1 — Shell, Hero & Ambient Aesthetic
- **Goal in one sentence:** Create the high-end Lewis Zhang editorial layout with navbar ("Sujoy.", "Back.", sound toggle placeholder, "Menu"), ambient glowing mesh background, and hero typography.
- **What is included:** FR-001 (Hero Section), FR-010 (Resume button in nav).
- **Depends on:** Phase 0.
- **Deliverables:** `Header` / `Navbar` component, `Hero` component, background ambient radial mesh gradients, smooth entrance transitions.
- **Definition of Done:** Hero section renders cleanly with editorial typography and responsive header; build passes with exit code 0.
- **Human checkpoint:** Human reviews visual style and verifies Lewis Zhang aesthetic fidelity.
- **Main risks:** Overly complex CSS gradients causing layout jitter or repaint slowdowns.

### Phase 2 — Project Showcase & Device Mockups
- **Goal in one sentence:** Build interactive laptop device mockup components featuring *NGO Digital Connect* and *RenameX* with live demo and GitHub buttons.
- **What is included:** FR-003 (NGO Digital Connect mockup), FR-004 (RenameX showcase).
- **Depends on:** Phase 1.
- **Deliverables:** `ProjectShowcase` component, `LaptopMockup` frame component, project metadata cards (Role, Year, Tech Stack, Live/Repo links).
- **Definition of Done:** Both projects render inside responsive mockup frames; external links open safely in new tabs (`rel="noopener noreferrer"`); zero layout shift.
- **Human checkpoint:** Human verifies project descriptions and mockup appearances.
- **Main risks:** Mockup responsiveness on smaller screens; high-res image loading performance.

### Phase 3 — About, Skills & Certifications
- **Goal in one sentence:** Build the About Me section featuring Sujoy's portrait photo, NSHM CSE background, technical skills matrix, and interactive certification badges.
- **What is included:** FR-005 (About Me & Portrait), FR-006 (Skills Matrix), FR-007 (Certifications & Accreditations: IBM, Oracle, AWS, Udemy).
- **Depends on:** Phase 2.
- **Deliverables:** `About` component with Sujoy's suit photo, `Skills` grid component, `Certifications` interactive credential cards with verification links.
- **Definition of Done:** Profile photo loads crisp in WebP format; all skills rendered cleanly; certificate badges interactive and accessible.
- **Human checkpoint:** Human reviews biography text and certification card details.
- **Main risks:** Image aspect ratio distortion; excessive text clutter.

### Phase 4 — Contact Form, Cursor & Polish
- **Goal in one sentence:** Implement the functional serverless contact form, 1-click copy email button, custom interactive cursor, and finalize responsive styling.
- **What is included:** FR-002 (Custom Cursor), FR-008 (Working Contact Form), FR-009 (Copy Email & Socials), FR-011 (Mobile & Tablet Responsiveness).
- **Depends on:** Phase 3.
- **Deliverables:** `ContactForm` component connected to Web3Forms/Formspree forwarding to `sujoylayek.rampur.2006@gmail.com`, `CustomCursor` component, responsive layout refinements.
- **Definition of Done:** Contact form submission succeeds and displays clear confirmation; 1-click email copy works with toast/feedback; mobile drawer menu works smoothly.
- **Human checkpoint:** Human tests the contact form by sending a test inquiry.
- **Main risks:** Form submission rate limits or spam (mitigated with honeypot field).

### Phase 6 — High-Fidelity Experience (Lewis Zhang Video Reference)
- **Goal in one sentence:** Elevate the portfolio to exact visual fidelity with Lewis Zhang by implementing an interactive 3D particle vortex, condensed bold hero typography, continuous marquee banner, 3D laptop drag/carousel stage, and high-contrast footer.
- **What is included:** FR-012, FR-014, FR-015, FR-016, FR-017, FR-018.
- **Depends on:** Phase 4.
- **Deliverables:** `ParticleGalaxy.tsx`, updated `Hero.tsx` with condensed headline, `MarqueeBanner.tsx`, updated `ProjectShowcase.tsx` with multi-project 3D stage and drag navigation, updated `Contact.tsx` with high-contrast footer and back-to-top button.
- **Definition of Done:** 60fps particle simulation with zero jank; 3D laptop slides between projects upon dragging/clicking; marquee runs smoothly; build and lint exit code 0.
- **Human checkpoint:** Human inspects visuals in browser to verify match with video.
- **Main risks:** High CPU utilization from unthrottled canvas animations (mitigate using `requestAnimationFrame`, device pixel ratio clamping, and visibility observer).

### Phase 5 — Production Audit & Deployment
- **Goal in one sentence:** Run full lint, typecheck, production build, performance audits, and guide deployment to Vercel.
- **What is included:** Non-Functional Requirements (Lighthouse 90+, SEO meta tags, OpenGraph preview cards).
- **Depends on:** Phase 4.
- **Deliverables:** Production build bundle, robots.txt, sitemap.xml, social share preview metadata, deployment documentation.
- **Definition of Done:** `npm run build` succeeds; 0 lint errors; Lighthouse score >= 90; deployment verified on Vercel.
- **Human checkpoint:** Human approves final production release and deployment.
- **Main risks:** Vercel environment variables or build configuration discrepancies.

---

## 4. Phase Order Rules

1. **No Jumping Ahead:** Strictly follow Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5. Never start Phase 3 before Phase 2 is verified.
2. **Definition of Done is Absolute:** A phase is only complete when its deliverables are built, verified by running real commands with exit code 0, and inspected visually.
3. **Human Approval at Checkpoints:** Proceeding from one phase to the next requires presenting progress and receiving human approval.
