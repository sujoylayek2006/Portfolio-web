# BACKLOG.md — Project Task Backlog
**Project Name:** Sujoy Layek — Developer Portfolio  
**Version:** 1.0.0  
**Date:** 2026-10-08  

---

## 1. How to Read This File

- `[ ]` Open task (not started)
- `[x]` Completed and verified task
- `🔒` Requires explicit human approval before proceeding (security, deployment, external services, or critical configuration)

---

## 2. Tasks by Phase

### Phase 0 — Project Setup & Foundation

- [x] **B-001: Initialize Next.js App Router Project**
  - **Linked Phase:** Phase 0 | **FR ID:** FR-001
  - **Outcome:** Clean Next.js project scaffolded with TypeScript, Tailwind CSS, and ESLint configured.
  - **How it will be verified:** Run `npm run build` and ensure exit code 0; inspect `package.json` and directory structure.
  - **Blocked by:** none
  - **Approval:** none

- [x] **B-002: Install & Configure Animation & Icon Dependencies**
  - **Linked Phase:** Phase 0 | **FR ID:** FR-001, FR-002
  - **Outcome:** `framer-motion`, `lucide-react`, and `clsx` / `tailwind-merge` installed and functional.
  - **How it will be verified:** Run `npm run build` to confirm zero dependency conflicts.
  - **Blocked by:** B-001
  - **Approval:** 🔒 (Adding new npm packages requires human approval per MASTER_RULES Part 4)

- [x] **B-003: Configure Typography, Editorial Fonts & Ambient Theme in Tailwind**
  - **Linked Phase:** Phase 0 | **FR ID:** FR-001
  - **Outcome:** Tailwind configuration includes editorial serif font family, custom radial/mesh gradient utilities, and dark palette tokens matching Lewis Zhang.
  - **How it will be verified:** Inspect `tailwind.config.ts` and test style compilation with `npm run build`.
  - **Blocked by:** B-002
  - **Approval:** none

- [x] **B-004: Organize Asset Directory & Process Profile Image**
  - **Linked Phase:** Phase 0 | **FR ID:** FR-005
  - **Outcome:** Sujoy's professional suit portrait image placed into `public/images/` and optimized for Next.js Image component.
  - **How it will be verified:** Check file existence in `public/images/profile.webp` / `.jpg` and verify file permissions.
  - **Blocked by:** B-001
  - **Approval:** none

---

### Phase 1 — Shell, Hero & Ambient Aesthetic

- [x] **B-005: Build Editorial Navigation Header**
  - **Linked Phase:** Phase 1 | **FR ID:** FR-001, FR-010
  - **Outcome:** Responsive navbar displaying "Sujoy.", "Back.", sound toggle icon (disabled/placeholder), and "Menu" with smooth resume link.
  - **How it will be verified:** View component in browser and test click interactions on nav links.
  - **Blocked by:** B-003
  - **Approval:** none

- [x] **B-006: Build Ambient Glowing Mesh Background**
  - **Linked Phase:** Phase 1 | **FR ID:** FR-001
  - **Outcome:** Subtle, high-performance dark ambient glowing mesh gradients positioned in fixed background with zero scroll interference.
  - **How it will be verified:** Inspect rendered DOM and verify GPU acceleration with no scroll lag.
  - **Blocked by:** B-003
  - **Approval:** none

- [x] **B-007: Build Hero Intro & Headline Component**
  - **Linked Phase:** Phase 1 | **FR ID:** FR-001
  - **Outcome:** Hero section displaying bold editorial typography ("Hi, I'm Sujoy Layek — Full-Stack Developer & Student") with smooth Framer Motion entrance animation.
  - **How it will be verified:** Render in browser, check entrance transitions, run `npm run build`.
  - **Blocked by:** B-005, B-006
  - **Approval:** none

---

### Phase 2 — Project Showcase & Device Mockups

- [x] **B-008: Build Reusable Interactive Laptop Mockup Frame**
  - **Linked Phase:** Phase 2 | **FR ID:** FR-003
  - **Outcome:** Sleek CSS/SVG laptop device mockup frame (like Lewis Zhang) that houses interactive project screen previews with realistic bezels, notch, and subtle shadows.
  - **How it will be verified:** Verify responsive scaling of laptop frame across viewports (1440px, 1024px, 768px, 375px).
  - **Blocked by:** B-007
  - **Approval:** none

- [x] **B-009: Showcase Flagship Project: NGO Digital Connect**
  - **Linked Phase:** Phase 2 | **FR ID:** FR-003
  - **Outcome:** Featured card for NGO Digital Connect containing live preview graphic, role ("Full-Stack Developer"), year ("2026"), tech pills (React 18, TypeScript, Node), "Explore Live Website" button, and GitHub button.
  - **How it will be verified:** Click live link (`ngo-digital-connect.vercel.app`) and GitHub link to verify correct target URLs and `rel="noopener noreferrer"`.
  - **Blocked by:** B-008
  - **Approval:** none

- [x] **B-010: Showcase Secondary Project: RenameX**
  - **Linked Phase:** Phase 2 | **FR ID:** FR-004
  - **Outcome:** Project card for RenameX showcasing the Python bulk file modifier tool, metadata, and GitHub repo link.
  - **How it will be verified:** Verify metadata and GitHub link correctness.
  - **Blocked by:** B-008
  - **Approval:** none

---

### Phase 3 — About, Skills & Certifications

- [x] **B-011: Build About Me Section with Portrait**
  - **Linked Phase:** Phase 3 | **FR ID:** FR-005
  - **Outcome:** About section highlighting B.Tech in CSE at NSHM Knowledge Campus Durgapur alongside Sujoy's professional suit photograph with subtle border glow.
  - **How it will be verified:** Check image rendering, aspect ratio preservation, and typography hierarchy.
  - **Blocked by:** B-004, B-010
  - **Approval:** none

- [x] **B-012: Build Technical Skills Matrix**
  - **Linked Phase:** Phase 3 | **FR ID:** FR-006
  - **Outcome:** Clean, categorized skill pills (Frontend: React, Next.js, Tailwind; Languages: TypeScript, Python, C, JavaScript; Backend: Node.js, Express, REST; Tools: Git, GitHub, Linux, Vercel) with hover glow.
  - **How it will be verified:** Inspect rendered skill pills and responsive wrap behavior.
  - **Blocked by:** B-011
  - **Approval:** none

- [x] **B-013: Build Certifications & Accreditations Cards**
  - **Linked Phase:** Phase 3 | **FR ID:** FR-007
  - **Outcome:** Sleek credential cards for IBM, Oracle, AWS, and Udemy with organization badges, titles, and "Verify Credential" links.
  - **How it will be verified:** Test card hover states and verify credential link triggers.
  - **Blocked by:** B-011
  - **Approval:** none

---

### Phase 4 — Contact Form, Cursor & Polish

- [x] **B-014: Build Serverless Contact Form**
  - **Linked Phase:** Phase 4 | **FR ID:** FR-008
  - **Outcome:** Functional contact form (Name, Email, Message, anti-spam honeypot) integrated with Web3Forms/Formspree forwarding directly to `sujoylayek.rampur.2006@gmail.com`.
  - **How it will be verified:** Submit a test message and verify delivery to inbox with friendly success state.
  - **Blocked by:** B-013
  - **Approval:** 🔒 (External webhook/form service endpoint configuration)

- [x] **B-015: Build 1-Click Copy Email & Social Links Bar**
  - **Linked Phase:** Phase 4 | **FR ID:** FR-009
  - **Outcome:** One-click copy email button with "Copied!" tooltip feedback, accompanied by LinkedIn and GitHub icons.
  - **How it will be verified:** Click copy button and test clipboard content; click social links to test navigation.
  - **Blocked by:** B-014
  - **Approval:** none

- [x] **B-016: Build Custom Interactive Cursor**
  - **Linked Phase:** Phase 4 | **FR ID:** FR-002
  - **Outcome:** Lightweight custom cursor follower that expands over clickable links/buttons and automatically hides on touch devices.
  - **How it will be verified:** Test mouse movement on desktop and verify touch disabling on mobile devices.
  - **Blocked by:** B-007
  - **Approval:** none

- [x] **B-017: Mobile & Tablet Responsiveness Audit & Polish**
  - **Linked Phase:** Phase 4 | **FR ID:** FR-011
  - **Outcome:** 100% pixel-perfect layout across mobile (375px–480px), tablet (768px–1024px), and desktop. Responsive slide-over menu for mobile screens.
  - **How it will be verified:** Test viewports using browser devtools responsive mode; verify zero horizontal scroll.
  - **Blocked by:** B-015, B-016
  - **Approval:** none

---

### Phase 6 — High-Fidelity Experience (Lewis Zhang Video Reference)

- [x] **B-021: Build Interactive 3D Particle Galaxy Canvas Component**
  - **Linked Phase:** Phase 6 | **FR ID:** FR-014
  - **Outcome:** High-performance HTML5 Canvas / WebGL swirling particle galaxy in Hero with glowing amber/crimson/gold particles rotating and reacting dynamically to mouse movement.
  - **How it will be verified:** Verify 60fps canvas animation in browser; check cleanup on unmount; run `npm run build` with exit code 0.
  - **Blocked by:** none
  - **Approval:** none

- [x] **B-022: Restyle Hero with Condensed Bold Headline & Dual Sub-Headings**
  - **Linked Phase:** Phase 6 | **FR ID:** FR-015
  - **Outcome:** Hero typography matches Lewis Zhang: condensed bold uppercase headline ("BUILDING YOUR DIGITAL VISION"), right-aligned "INNOVATION IN EVERY PIXEL", and CSE student tags.
  - **How it will be verified:** Render in browser and verify typography responsiveness across screen sizes.
  - **Blocked by:** B-021
  - **Approval:** none

- [x] **B-023: Build Infinite Scrolling Marquee Banner Component**
  - **Linked Phase:** Phase 6 | **FR ID:** FR-016
  - **Outcome:** Seamless horizontal scrolling ticker between About and Projects with looping vision keywords ("Creates Endless Possibilities • Interactive Experiences • Full-Stack Systems • High-Performance Web").
  - **How it will be verified:** Check loop smoothness with zero stutter or restart jump.
  - **Blocked by:** none
  - **Approval:** none

- [x] **B-024: Build 3D Laptop Slider Stage with Drag/Swipe Interaction**
  - **Linked Phase:** Phase 6 | **FR ID:** FR-012, FR-017
  - **Outcome:** 3D perspective stage with draggable / clickable carousel displaying exactly 3 projects (01: NGO Digital Connect, 02: RenameX, 03: MultiFileMaker) using real screenshots from `public/images/projects/` (from user folder `Sc Pic`), with dynamic `(01)`-`(03)` counter, interactive tab/drag switching, and "View Detail" pill.
  - **How it will be verified:** Test drag and click navigation across all 3 project slides; verify all screenshots render crisply inside laptop mockup.
  - **Blocked by:** none
  - **Approval:** none

- [x] **B-025: Build High-Contrast Clean Footer with Back-to-Top Button**
  - **Linked Phase:** Phase 6 | **FR ID:** FR-018
  - **Outcome:** Dedicated transition into "Let's work together" section with oval "Connect With Me" button, followed by clean high-contrast white footer with quick links and working `↑` scroll-to-top button.
  - **How it will be verified:** Click `↑` and verify smooth scroll to top of page.
  - **Blocked by:** none
  - **Approval:** none

---

### Phase 5 — Production Audit & Deployment

- [x] **B-018: Full Lint, Typecheck & Production Build Verification**
  - **Linked Phase:** Phase 5 | **FR ID:** Non-Functional
  - **Outcome:** Production bundle successfully compiled with zero TypeScript errors and zero ESLint warnings.
  - **How it will be verified:** Execute `npm run lint` and `npm run build`, asserting exit code 0.
  - **Blocked by:** B-017
  - **Approval:** none

- [x] **B-019: Lighthouse Performance Audit & SEO Meta Tags**
  - **Linked Phase:** Phase 5 | **FR ID:** Non-Functional
  - **Outcome:** OpenGraph social sharing meta tags, title, favicon, and Lighthouse audit score >= 90.
  - **How it will be verified:** Run audit tools or check bundle size and meta tags in HTML source.
  - **Blocked by:** B-018
  - **Approval:** none

- [x] **B-020: Deployment Setup & GitHub Integration**
  - **Linked Phase:** Phase 5 | **FR ID:** Non-Functional
  - **Outcome:** Clean project codebase successfully pushed to GitHub repository (`https://github.com/sujoylayek2006/Portfolio-web.git`) on branch `main` with all internal agent orchestration files excluded. Ready for 1-click Vercel import.
  - **How it will be verified:** Verify remote tracking with `git push -u origin main` (exit code 0); production build verified with `npm run build` (exit code 0).
  - **Blocked by:** B-019
  - **Approval:** none

---

## 3. New Ideas (Not Yet Scheduled)

- **IDEA-01:** Ambient background audio soundtrack with smooth sound wave visualizer toggle (Lewis Zhang feature).
- **IDEA-02:** Blog section or markdown article reader for technical writing.
- **IDEA-03:** 3D interactive tilt effect on laptop mockups using Three.js / React Three Fiber.
- **IDEA-04:** MultiFileMaker and RenameX dedicated modal case studies.
