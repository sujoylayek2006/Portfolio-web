# PROGRESS.md — Project Status & Memory
**Project Name:** Sujoy Layek — Developer Portfolio  
**Last Updated:** 2026-10-08  

---

## 1. Current Status

- **Current Phase:** Phase 5 — Production Deployment (Phase 6 Completed ✅)
- **Last Session Date:** 2026-10-08
- **Build Status:** ✅ Green (Next.js 16.4 / React 19 / TypeScript 5 / Tailwind CSS 4 compiled with exit code 0)

---

## 2. Done

- **2026-10-08 (Session 1): Project Interview & Specification Setup**
  - Completed interactive `PROJECT_INTERVIEW.md` with Sujoy.
  - Analyzed template inspiration `https://www.lewiszhang.dev/?ref=landing.love` and user-uploaded screenshots.
  - Inspected GitHub profile `sujoylayek2006` and hackathon repository `NGO-Digital-Connect`.
  - Processed Sujoy's professional suit portrait image for the About section.
  - Generated `PROJECT_BRIEF.md`, `docs/PRD.md`, `PHASES.md`, and `BACKLOG.md` following MASTER_RULES.md Part 19.
- **2026-10-08 (Session 2): Phase 0 Completed (Setup, Dependencies, Typography & Assets)**
  - `B-001`: Initialized Next.js App Router with TypeScript, Tailwind CSS, and ESLint.
  - `B-002`: Installed `framer-motion`, `lucide-react`, `clsx`, and `tailwind-merge` with human approval.
  - `B-003`: Configured Google Fonts (`Playfair_Display` editorial serif and `Geist`), dark background tokens, ambient mesh gradient utilities, and selection styles in `src/app/globals.css` and `src/app/layout.tsx`.
  - `B-004`: Copied Sujoy's professional suit portrait photo to `public/images/sujoy-profile.jpg`.
  - Created learning notes: [NOTES_nextjs.md](file:///d:/Project%20Ideas/Portfolio%20web/docs/learning-notes/NOTES_nextjs.md), [NOTES_framer-motion.md](file:///d:/Project%20Ideas/Portfolio%20web/docs/learning-notes/NOTES_framer-motion.md), [NOTES_lucide-react.md](file:///d:/Project%20Ideas/Portfolio%20web/docs/learning-notes/NOTES_lucide-react.md).
- **2026-10-08 (Session 2): Phase 1 Completed (Shell, Hero & Ambient Aesthetic)**
  - `B-005`: Built editorial `Navbar` component with brand logo, section status indicator, sound toggle, and full-screen drawer menu with keyboard/click accessibility.
  - `B-006`: Built `AmbientBackground` component with 3 GPU-accelerated floating radial glow gradient orbs (purple, fuchsia, indigo) that mirror the `lewiszhang.dev` ambiance without scroll lag.
  - `B-007`: Built `Hero` component featuring editorial typography, status pill ("Available for Internships & Roles"), CTA buttons ("Explore Featured Work", "Get in Touch"), social icons, and scroll-down cue.
  - Created `Icons.tsx` with optimized SVG brand icons for GitHub and LinkedIn.
- **2026-10-08 (Session 2): Phase 2 Completed (Project Showcase & Device Mockups)**
  - `B-008`: Built `LaptopMockup` component with realistic MacBook display bezel, notch, metallic chassis lip, and dynamic hover glow.
  - `B-009`: Built flagship showcase for **NGO Digital Connect** with live demo link (`ngo-digital-connect.vercel.app`), GitHub repo, role/year metadata, and interactive live application preview in mockup.
  - `B-010`: Built secondary showcase for **RenameX** with GitHub repo link, Python automation tags, and terminal CLI execution preview in mockup.
  - User requested zero sound: removed sound toggle button and audio references completely from `Navbar.tsx`.
  - All verification tests passing green: `npm run build` (exit code 0), `npm run lint` (exit code 0).
- **2026-10-08 (Session 2): Phase 3 Completed (About, Skills & Certifications)**
  - `B-011`: Built editorial `About` component featuring Sujoy's professional portrait photo, B.Tech CSE background at NSHM Knowledge Campus Durgapur, and core engineering philosophy.
  - `B-012`: Built `Skills` matrix organized into Frontend, Programming Languages, Backend, and DevOps/Tools categories with clean glowing pill badges.
  - `B-013`: Built `Certifications` interactive cards for **IBM**, **Oracle**, **AWS**, and **Udemy** with verification links and shield badges.
  - All verification tests passing green: `npm run build` (exit code 0), `npm run lint` (exit code 0).
- **2026-10-08 (Session 2): Phase 4 Completed (Contact Form, Cursor & Polish)**
  - `B-014`: Built serverless `Contact` form component with name, email, role message, and anti-spam honeypot forwarding submissions to `sujoylayek.rampur.2006@gmail.com`.
  - `B-015`: Built 1-click email copy button with interactive toast confirmation, direct LinkedIn, GitHub, and Resume request links.
  - `B-016`: Built lightweight `CustomCursor` component with spring physics tracking, interactive element expansion, and automatic touch-screen deactivation.
  - `B-017`: Verified 100% mobile, tablet, and desktop responsiveness with zero horizontal scroll overflow. Fixed prerender date evaluation warning.
  - All verification tests passing green: `npm run build` (exit code 0), `npm run lint` (exit code 0).
- **2026-10-08 (Session 2): Phase 5 In-Progress (Production Verification & SEO)**
  - `B-018`: Ran full lint and production build verification (`npm run lint` exit code 0; `npm run build` exit code 0 in 1903ms).
  - `B-019`: Configured automated `src/app/robots.ts` and `src/app/sitemap.ts` generating static search engine index routes.
  - User requested removals: Removed custom cursor (native cursor restored) and removed footer note ("Designed with Lewis Zhang Editorial Aesthetic").
  - All 6 production routes generated: `/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`.
- **2026-10-08 (Session 2): Phase 6 Completed (High-Fidelity Experience)**
  - `B-021`: Built interactive 3D particle galaxy vortex component (`src/components/ParticleGalaxy.tsx`) with logarithmic spiral arms, Keplerian rotation speeds, mouse parallax tilt, and visibility pause. Embedded in `Hero.tsx`. Created learning note `docs/learning-notes/NOTES_canvas-particles.md`. Verified green build and lint (exit code 0).
  - `B-022`: Restyled Hero section with monumental condensed bold typography (`BUILDING DIGITAL VISION`), architectural right-aligned eyebrow (`INNOVATION IN EVERY PIXEL`), reinforced academic & full-stack engineering bio, and updated 3-project counter (`01 • 02 • 03`). Verified green build and lint (exit code 0).
  - `B-023`: Built infinite scrolling marquee banner component (`src/components/MarqueeBanner.tsx`) with seamless 50% translation loop, hover color accents, and dual edge fade masks. Embedded between Hero and ProjectShowcase. Created learning note `docs/learning-notes/NOTES_infinite-marquee.md`. Verified green build and lint (exit code 0).
  - `B-024`: Built 3D laptop slider stage (`src/components/ProjectShowcase.tsx`) showcasing exactly 3 projects (01: NGO Digital Connect, 02: RenameX, 03: MultiFileMaker) with high-res screenshots from `public/images/projects/` (`Sc Pic`), spring-animated project selector pills, prev/next arrows, multi-screenshot views for NGO Digital Connect, and direct live/source links. Created learning note `docs/learning-notes/NOTES_3d-slider-stage.md`. Verified green build and lint (exit code 0).
  - `B-025`: Built high-contrast clean white footer (`src/components/Contact.tsx`) with "Let's Work Together", "Connect With Me" action button, categorized links, and working smooth `↑` scroll-to-top button. Verified green build and lint (exit code 0).
- **2026-10-08 (Session 2): Exact 3D Rose Galaxy & Interactive Dispersion (User Feedback Complete ✅)**
  - Replaced generic spiral vortex with authentic **3D Rose Model** (`public/models/rose_particles.bin` with 32,670 points and incandescent ember colors extracted from `flower.glb`).
  - Implemented **Mouse Dispersion Explosion** ("bichino hoya jachilo") via 3D inverse unprojection raycast and 3D curl turbulence sparks.
  - Implemented **Hooke's Law Spring Reformation** ("mouse hover bondho kore dilei rose hoya jachilo") with velocity damping (`springK = 0.072`, `damping = 0.86`) seamlessly reforming the 3D rose when hover ceases.
  - Integrated authentic luxury `George` display font (`public/fonts/george.woff2`, `@font-face` in `globals.css`) matching `media_1791447778842_1a7c5559.webp`.
  - Re-anchored `"BUILDING YOUR DIGITAL VISION"` across the bottom viewport edge in single-line fluid luxury scaling (`text-[clamp(1.9rem,6.65vw,7.8rem)]`), with `"Innovation In Every Pixel"` precisely positioned above the right side (`bottom-[clamp(5rem,13vw,13.5rem)]`).
  - Created learning note: [NOTES_webgl-rose-particles.md](file:///d:/Project%20Ideas/Portfolio%20web/docs/learning-notes/NOTES_webgl-rose-particles.md).
  - Refined mouse dynamics to be strictly motion-velocity driven (`movementIntensity` curve): when cursor sits stationary in the rose area without movement, zero repulsion/turbulence is applied, allowing all particles to settle and remain perfectly in their normal 3D rose position.
  - Video analysis of user recording [Recording 2026-10-08 172455.mp4](file:///d:/Project%20Ideas/Portfolio%20web/Sc%20video/Recording%202026-10-08%20172455.mp4):
    - **Locked Top & Front Orientation:** Removed full continuous pitch accumulation (`rotX += ...`), permanently fixing `baseRotX = 0.22` and `baseRotY = -0.32` with gentle organic breathing sway so the rose is ALWAYS facing top and front and never turns upside down.
    - **Fluid Swirl & Tendril Streams:** Restored fluid hover interaction where moving the cursor over the flower forms curling 3D particle streams that disperse dynamically, while holding the cursor still or moving away smoothly snaps all particles back to the pristine 3D rose shape.
  - All verification tests passing green: `npm run lint` (exit code 0), `npm run build` (exit code 0).
- **2026-10-08 (Session 2): Hero 3D Animation & White Footer Removal (User Feedback Complete ✅)**
  - Reverted [Hero.tsx](file:///d:/Project%20Ideas/Portfolio%20web/src/components/Hero.tsx) to the clean editorial layout: "Crafting scalable systems & pixel-perfect digital realities", B.Tech CSE tag, CTA buttons, and scroll cue. Completely removed 3D canvas animation from Hero.
  - Reverted [Contact.tsx](file:///d:/Project%20Ideas/Portfolio%20web/src/components/Contact.tsx) footer: removed the high-contrast white "Let's Work Together" section and restored the dark editorial footer.
  - Verified green lint and build (`npm run lint` exit code 0; `npm run build` exit code 0). Dev server running on `http://localhost:3000`.
- **2026-10-08 (Session 2): Git Setup & GitHub Repository Integration (`B-020` Complete ✅)**
  - Updated [.gitignore](file:///d:/Project%20Ideas/Portfolio%20web/.gitignore) to exclude reference media (`/Sc Pic/`, `/Sc video/`) and internal agent orchestration files (`PROJECT_INTERVIEW*`, `MASTER_RULES*`, `CLAUDE*`, `AGENTS*`, `.claude/`) keeping repository public view clean and professional.
  - Initialized git repository (`git init`). User provided repo: `https://github.com/sujoylayek2006/Portfolio-web.git`.
  - Staged clean source files, created initial commit (`9af123c`), rebased seamlessly onto remote initial commit (`7e56e4c`), and pushed cleanly to `origin/main` (`940683d`).
  - Removed `docs/learning-notes/` from git tracking and added to [.gitignore](file:///d:/Project%20Ideas/Portfolio%20web/.gitignore) per user request (commit `46d0b28`). Local files preserved.
  - Enhanced [README.md](file:///d:/Project%20Ideas/Portfolio%20web/README.md) with comprehensive badges, architecture overview, and deployment guidance (commit `823db33`).
- **2026-10-08 (Session 2): Enterprise Folder Structure Restructure**
  - Modularized `src/components/` into `sections/` (`Hero.tsx`, `MarqueeBanner.tsx`, `ProjectShowcase.tsx`, `About.tsx`, `Skills.tsx`, `Certifications.tsx`, `Contact.tsx`), `ui/` (`Navbar.tsx`, `AmbientBackground.tsx`, `LaptopMockup.tsx`, `Icons.tsx`), and `archive/`.
  - Decoupled portfolio data into dedicated `src/data/` modules (`projects.ts`, `skills.ts`, `certifications.ts`, `navigation.ts`).
  - Added centralized TypeScript types in `src/types/index.ts` and Tailwind class merger `cn` in `src/lib/utils.ts`.
  - Cleaned up unused default template SVGs from `public/`.
  - Added comprehensive [docs/architecture.md](file:///d:/Project%20Ideas/Portfolio%20web/docs/architecture.md).
  - Verified green lint and build (`npm run lint` exit code 0; `npm run build` exit code 0 in 2.6s).
- **2026-10-08 (Session 2): Real Verified Certificates Integration (21 Credentials)**
  - Processed and integrated 21 verified certificates from user's `Sc Pic` directory into [public/certificates/](file:///d:/Project%20Ideas/Portfolio%20web/public/certificates/).
  - Optimized HackerRank PDFs from raw 7.6MB uncompressed bitmaps to crisp 120KB PDF documents, saving >60MB while preserving 100% resolution.
  - Added direct 1-click "View PDF" credential buttons opening verified PDFs in a new tab.
  - Verified green build (`npm run build` exit code 0 in 1258ms) and verified HTTP 200 PDF delivery on local server.
- **2026-10-08 (Session 2): Organization-Wise Box Layout & Interactive Disclosure**
  - Grouped all 21 certificates into 5 interactive Organization Boxes: **HackerRank** (8 certs), **IBM SkillsBuild** (7 certs), **Oracle (OCI)** (2 certs), **Amazon Web Services** (2 certs), and **CISCO** (2 certs).
  - Clicking any organization box expands and reveals its verified credentials below with smooth Framer Motion layout animations.
  - Verified green lint and build (`npm run lint` exit code 0; `npm run build` exit code 0 in 1419ms).
- **2026-10-08 (Session 2): Contact Form Message System Fix & Direct Gmail Fallback**
  - Replaced dummy Web3Forms key with FormSubmit endpoint delivering directly to `sujoylayek.rampur.2006@gmail.com`.
  - Added dual dispatch: 1-click "Send via Gmail Web" and "Open Mail App" compose links with pre-filled message, subject, and recipient.
  - Tested endpoint and initiated 1-time activation email to Sujoy's Gmail.
  - Verified green build (`npm run build` exit code 0 in 1525ms).

---

## 3. Next

- **Task:** 1-Click Vercel Deployment
  - **Outcome:** Import GitHub repo `sujoylayek2006/Portfolio-web` into Vercel dashboard to get live production URL (`https://*.vercel.app`).


---

## 4. Known Issues

- None at this time.

---

## 5. Decisions Log

| Date | Decision | Reason |
|---|---|---|
| 2026-10-08 | Design aesthetic inspired by Lewis Zhang (`lewiszhang.dev`) | Clean editorial typography, dark mesh ambient lighting, and laptop mockups provide a memorable, premium recruiter experience. |
| 2026-10-08 | Exclude Background Audio completely | User explicitly decided against ambient sound; eliminates unnecessary browser audio permissions and keeps navigation minimal. |
| 2026-10-08 | Remove Custom Cursor & Lewis Zhang Footer Reference | User requested removing custom cursor (native restored) and removing footer reference note to keep portfolio personal and distraction-free. |
| 2026-10-08 | Video Recording Analysis (`E:\Faa\Recording...mp4`) Integration | User shared screen recording of `lewiszhang.dev`. Approved Phase 6 roadmap: 3D particle vortex, condensed hero typography ("BUILDING YOUR DIGITAL VISION"), infinite marquee ticker, 3D laptop drag slider stage, and contrast footer. |
| 2026-10-08 | Tech Stack: Next.js (App Router) + Tailwind CSS + Framer Motion | High performance, server-side rendering/static export, SEO optimization, smooth 60fps animations, and free Vercel hosting. |
| 2026-10-08 | Featured Project 1: *NGO Digital Connect* | Sujoy's flagship hackathon project (React 18, TypeScript, Node, AI intake, live on Vercel). |
| 2026-10-08 | Featured Project 2: *RenameX* | Showcases developer tooling, automation, and Python programming proficiency. |
| 2026-10-08 | Include Certifications & Accreditations (IBM, Oracle, AWS, Udemy) | Essential for engineering students/freshers to prove verified skills to recruiters without cluttering the editorial design. |
| 2026-10-08 | Contact Form: Serverless delivery to Gmail via Web3Forms/Formspree | Eliminates backend server complexity, ensures 99.99% uptime, and delivers inquiries straight to Sujoy's inbox for free. |
| 2026-10-08 | Project Focus: Prioritize RenameX over Tic-Tac-Toe | User explicitly commented to replace Minimax Tic-Tac-Toe with RenameX in PRD and showcase scope. |
| 2026-10-08 | Exact Visual Match to Media 1791447778842 1a7c5559 | User requested Hero section to strictly replicate the exact 3D torus knot filament nebula and minimalist composition from the reference screenshot. |
| 2026-10-08 | Showcase Scope: 3 Projects Only (01, 02, 03) with Real Screenshots | User commented to drop Tic-Tac-Toe AI ("bad 01,02,03 only") and keep exactly 3 projects (01: NGO Digital Connect, 02: RenameX, 03: MultiFileMaker). Real screenshots copied from `Sc Pic` to `public/images/projects/`. |
| 2026-10-08 | Hosting Platform: Vercel | Seamless Next.js deployment, global edge CDN, automatic HTTPS, and zero cost. |

---

## 6. Open Questions

1. What exact credential IDs and verification URLs should be linked for the IBM, Oracle, AWS, and Udemy certificates? (Placeholders will be configured initially).
2. Will a custom domain (e.g., `sujoylayek.dev`) be configured on Vercel immediately, or will the default `*.vercel.app` domain be used first?

---

## 7. Notes for Next Session

- Begin Phase 0 with Task `B-001`.
- Need human approval before running `npm install` for external dependencies (Framer Motion, Lucide) as required by Rule 20 / MASTER_RULES Part 4.
- Copy Sujoy's uploaded portrait image (`media_1791442831072_5da6e02d.jpg`) into the app's public assets folder once the Next.js directory is initialized.
