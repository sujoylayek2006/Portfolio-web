# PROJECT_BRIEF.md

## 1. Summary
- Project name: Sujoy Layek — Developer Portfolio
- One-sentence description: A sleek, high-end editorial portfolio website inspired by Lewis Zhang, featuring ambient dark gradients, interactive laptop device mockups, and micro-interactions to showcase full-stack projects, developer tools, and academic achievements.
- Problem it solves: Generic resumes and cookie-cutter portfolios fail to capture attention; this site gives tech recruiters and hiring managers an unforgettable, polished visual proof of Sujoy's engineering and design skills.
- Type: personal / learning
- Success in 3 months: A live, production-grade site deployed on Vercel with zero performance lag, linked across LinkedIn and resumes, resulting in positive recruiter impressions and interview callbacks.

## 2. Users
- Who they are: Technical recruiters, hiring managers, engineering leads, open-source peers, and fellow students.
- Roles and what each can do: Public visitors can explore projects, preview live demos/source code, read Sujoy's bio and skills, send direct contact messages, and copy contact details.
- Expected number of users (year one): 100 to 1,000 visitors (recruiters, peer developers, network).
- Regions and languages: Global / India; English language.

## 3. Main User Flows
1. Land on the Hero section, greet with editorial headline ("Hi, I'm Sujoy Layek — Full-Stack Developer & Student"), subtle glowing mesh ambient gradients, and quick navigation.
2. Explore featured projects showcased inside interactive laptop mockups: deep dive into NGO Digital Connect (Hackathon flagship with live demo and GitHub links) and RenameX (Python developer utility).
3. Read the About section highlighting B.Tech in CSE at NSHM Knowledge Campus Durgapur alongside Sujoy's professional portrait, followed by an interactive skills/tech stack matrix.
4. Browse Certifications & Accreditations (IBM, Oracle, AWS, Udemy) presented as sleek interactive credential badges with verification links.
5. Reach out via a functional contact form (messages sent directly to Sujoy's Gmail), copy email with 1-click, or connect on LinkedIn/GitHub.

## 4. Features
- Must have:
  - Editorial dark theme with subtle blur mesh glow/gradients (Lewis Zhang aesthetic)
  - Interactive laptop/device mockups for featured projects
  - Flagship project showcase: NGO Digital Connect (Hackathon platform, React 18, TypeScript, Node, AI intake)
  - Second featured project: RenameX (Python bulk file extension utility)
  - About section with Sujoy's professional portrait and B.Tech CSE background
  - Skills & Tech Stack matrix (Frontend, Backend, Languages, Tools)
  - Certifications & Accreditations section (IBM, Oracle, AWS, Udemy credential badges with verification links)
  - Working contact form forwarding directly to Gmail (`sujoylayek.rampur.2006@gmail.com`)
  - Direct links: LinkedIn (`linkedin.com/in/sujoylayek2006`), GitHub (`github.com/sujoylayek2006`)
  - 1-click copy email button & placeholder Resume download button
  - Custom cursor & smooth scroll/entrance micro-interactions (Framer Motion)
  - 100% Mobile, tablet, and desktop responsive layout
- Nice to have:
  - Additional project showcases (RenameX, MultiFileMaker, CSS experiments)
  - Ambient sound toggle (can be added later if desired)
  - Light/Dark mode switcher (currently focused on polished dark mode first)
- Out of scope:
  - User authentication / login system
  - Database or CMS backend (data stored cleanly in code/JSON for maximum speed)
  - Payment gateway
- Inspiration (similar products):
  - `https://www.lewiszhang.dev/?ref=landing.love` (Editorial typography, laptop showcase, dark mesh gradients, minimalist luxury vibe)

## 5. Platform and Technology
- Platform: Modern Web (Desktop, Tablet, Mobile)
- Stack chosen or preferred: Next.js (React), Tailwind CSS, Framer Motion, Lucide Icons
- Stack recommended by AI (if asked), with reasons: Next.js + Tailwind CSS + Framer Motion — provides lightning-fast static generation, seamless responsive layout utilities, smooth 60fps animations, excellent SEO, and 1-click deployment on Vercel.
- Human's coding level: Intermediate (Full-stack web development with React & TypeScript, Python automation, C programming).

## 6. Data
- What is stored: Contact form submissions (name, email, message) forwarded directly to Sujoy's Gmail inbox. No user data stored on any server.
- Sensitive data: None.
- File uploads: None.
- Account deletion behavior: N/A (no accounts created).

## 7. Login and Permissions
- Login methods: None (publicly accessible portfolio).
- Separate customer data (multi-tenant): no
- Permission rules: Public read-only access for all visitors; contact form for sending messages.
- Admin area needed: No (content easily maintained directly via structured project configuration files).

## 8. Money
- Free or paid: Free
- Pricing model: Free open-source portfolio
- Payment provider: None
- Plan limits: None

## 9. Other Services
- Email and messages: Web3Forms / Formspree (free tier) to forward contact form inquiries to `sujoylayek.rampur.2006@gmail.com`.
- AI models or paid APIs: None required for portfolio runtime.
- Integrations: GitHub API / repository links, LinkedIn profile.
- Background or scheduled work: None.

## 10. Size, Speed, and Reliability
- Speed expectation: Instant loading (< 1.5s LCP), 60fps smooth animations, optimized WebP images.
- Downtime tolerance: Standard static hosting tolerance (99.99% uptime via global CDN).
- Traffic spikes: Easily handles spikes from social media, hackathon presentations, or LinkedIn posts via Vercel edge network.
- Offline needs: None; standard modern web app.

## 11. Safety, Privacy, and Rules
- Laws and regulations: Standard web privacy practices; no tracking cookies or invasive analytics.
- Legal pages needed: Simple copyright footer.
- Worst-case misuse or failure: Contact form spam (mitigated using honeypot spam protection).
- Actions that always need human approval: Pushing to GitHub, production deployment.

## 12. Budget, Time, and Team
- Who builds it: Sujoy Layek + AI Agent pair programming.
- Hours per week: Flexible.
- Monthly budget: $0 / ₹0 (100% free tier tools and hosting).
- Deadline: Flexible.

## 13. Look and Feel
- Style: Premium, editorial, dark-themed with subtle glowing mesh gradients, high-contrast typography (serif headings, clean sans body), and smooth interactions.
- Reference sites: `https://www.lewiszhang.dev/?ref=landing.love`
- Dark mode / mobile / languages: Dark mode default; fully responsive on mobile/tablet; English language.
- Brand assets: Sujoy's professional suit portrait photo, GitHub & LinkedIn links.

## 14. Working Style With the AI Agent
- Level of freedom: Small steps only; builds one task at a time, verifies tests/build, and waits for confirmation.
- Must-ask-first list: Adding dependencies, structural alterations, database/auth introduction, pushing to GitHub.
- Learning notes wanted: yes (documented in `docs/learning-notes/` for any new library, tool, or concept).
- GitHub push rule: Only when the human explicitly commands in the prompt.

## 15. Risks and Unknowns
- Human's main worries: Achieving the exact smooth, aesthetic feel of Lewis Zhang's site without compromising mobile performance.
- Topics the human does not understand yet: Advanced Framer Motion 3D mockup transforms or canvas performance optimization (AI will handle and explain in learning notes).
- Concerns raised by the AI:
  - Ensuring heavy mockups and glowing gradients don't hurt mobile scroll performance (will optimize with CSS transforms and lightweight SVGs).
  - High-res project mockup screenshots must be properly sized and formatted in WebP.
  - Resume button needs to cleanly link to a placeholder until Sujoy provides the final PDF.

## 16. Answer Status
- Confirmed items:
  - Certifications: IBM, Oracle, AWS, Udemy interactive credential badges with verification links.
- Assumed items (AI suggested a default):
  - Contact form provider: Web3Forms / Formspree (free, serverless, direct to Gmail).
  - Resume placeholder behavior: Download/view placeholder action until real resume PDF is linked.
  - Asset handling: Local WebP images for profile and mockup screenshots.
- Unknown items (decision still needed):
  - Mockup graphics for NGO Digital Connect & RenameX (will be captured/generated during asset preparation).
  - Exact credential URLs / IDs for IBM, Oracle, AWS, Udemy (placeholders will be prepared for easy editing).
