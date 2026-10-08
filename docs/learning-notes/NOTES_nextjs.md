# Learning Note: Next.js (App Router)

### What is it?
Next.js is a modern web development framework built on top of React. While React is a library for building user interfaces using components, Next.js provides the complete scaffolding around React: file-based routing, server-side rendering, static site generation, image optimization, and build tooling.

### Why did we use it in this project?
For Sujoy's portfolio website:
1. **Blazing Speed & Instant Loading:** Next.js pre-renders pages into static HTML ahead of time, ensuring that when tech recruiters open the portfolio link, it loads instantly (< 1.5 seconds) without a blank loading screen.
2. **SEO & Social Sharing Previews:** When Sujoy shares his portfolio link on LinkedIn, Twitter/X, or email, Next.js generates rich OpenGraph preview cards (with his photo and title) automatically.
3. **Seamless Vercel Deployment:** Next.js is created and maintained by Vercel, allowing 1-click zero-configuration deployment with global CDN caching for free.

### How does it work?
Think of regular client-side React like ordering ingredients to your house and cooking a meal yourself (the browser downloads empty HTML + lots of JavaScript and cooks the UI on your machine, causing a small delay).

Next.js is like a restaurant delivery: the HTML structure is prepared beforehand on the server or during the build. When a recruiter opens `sujoylayek.dev`, the browser receives ready-to-display HTML immediately, and then React "hydrates" it in the background to make interactive parts (buttons, animations) responsive.

### What would break without it?
If we used plain React (e.g., raw Vite SPA) without static generation:
- Initial page load would require downloading and executing JavaScript before anything renders, resulting in a slower Largest Contentful Paint (LCP).
- Search engines and social media platforms might struggle to generate rich preview cards when sharing links.
- We would have to manually configure image optimization, font preloading, and routing.

### Want to learn more?
https://nextjs.org/docs/app
