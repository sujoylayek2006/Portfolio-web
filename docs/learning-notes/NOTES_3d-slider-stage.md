# Learning Note: 3D Laptop Slider Stage & State Carousel Architecture

### What is it?
A 3D slider stage is an interactive display component where digital devices (like laptop frames) showcase project interfaces in 3D perspective space, with smooth state-driven slide transitions (`AnimatePresence`) allowing visitors to browse multiple portfolio works without long vertical scrolling fatigue.

### Why did we use it in this project?
In the Lewis Zhang reference video (`lewiszhang.dev`), projects are showcased on a dark, elevated 3D stage.
1. **Recruiter Engagement:** Recruiters can actively interact with Sujoy's 3 flagship projects (`(01)` NGO Digital Connect, `(02)` RenameX, `(03)` MultiFileMaker) by toggling tabs or clicking arrows.
2. **Real Product Screenshots:** Instead of generic stock photos or CSS mock illustrations, the stage renders Sujoy's actual software screenshots (`Sc Pic`) in crisp high resolution with responsive Next.js Image optimization.
3. **Multi-View Inspection:** For flagship projects with multiple workflows (like NGO Digital Connect), a mini view switcher allows previewing different pages (e.g. beneficiary intake, triage ledger, impact metrics).

### How does it work?
1. **Dynamic Directional Sliding:** When the user clicks next or previous, a `direction` state (+1 or -1) is passed to Framer Motion variants:
   ```tsx
   enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 })
   center: { x: 0, opacity: 1, scale: 1 }
   exit: (dir) => ({ x: dir < 0 ? 80 : -80, opacity: 0, scale: 0.96 })
   ```
2. **Spring Layout Pill:** The active project pill uses `layoutId="activeProjectPill"`, giving the active pill background an iOS/macOS spring slide physics animation when changing projects.
3. **Responsive High-DPI Display:** Uses `next/image` with `object-contain` inside the 16:10 laptop screen viewport, preserving aspect ratio across mobile, tablet, and widescreen monitors.

### What would break without it?
Without directional `AnimatePresence` variants, switching between projects would cause instant abrupt cuts or overlapping DOM elements that disorient the visitor.

### Want to learn more?
https://motion.dev/docs/react-animate-presence
