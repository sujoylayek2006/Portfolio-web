# Learning Note: Lucide Icons (`lucide-react`)

### What is it?
Lucide is an open-source, beautifully balanced icon toolkit. `lucide-react` provides these icons as lightweight, customizable React components that output clean, scalable SVG elements.

### Why did we use it in this project?
For Sujoy's editorial portfolio:
1. **Consistency & Minimalist Aesthetic:** Lucide's thin, uniform stroke width matches the refined typography of Lewis Zhang's portfolio.
2. **Key UI Controls:** We need crisp, recognizable icons for the volume/sound toggle, mobile menu drawer, GitHub link, LinkedIn link, external live demo link, email copy button, and credential verification badges.
3. **Tree-Shaking:** Next.js only bundles the exact icons we import (e.g. `Volume2`, `ExternalLink`, `Github`), keeping the JavaScript bundle ultra-light and fast.

### How does it work?
Instead of loading a bulky font file or downloading separate `.svg` files over HTTP:
```tsx
import { ExternalLink, Github, Mail } from 'lucide-react';

<ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
```
It renders inline SVG with responsive Tailwind utility classes controlling stroke, size, and color.

### What would break without it?
Without Lucide, we would either have to use inconsistent third-party SVGs, embed raw messy XML markup throughout our components, or load heavy icon font files that increase page load time.

### Want to learn more?
https://lucide.dev/guide/packages/lucide-react
