# Learning Note: Framer Motion

### What is it?
Framer Motion is a production-ready animation and gesture library for React. It allows developers to create fluid animations (fade-ins, spring physics, smooth scale/tilt transitions, and scroll-triggered effects) using simple declarative JSX tags like `<motion.div>`.

### Why did we use it in this project?
In Sujoy's portfolio, our design reference is `lewiszhang.dev`. Lewis Zhang's website relies heavily on:
1. **Editorial Entrance Animations:** Headings, project cards, and bio text gently glide into view with natural spring curves instead of abrupt appearances.
2. **Interactive Mockup Hover States:** When visitors hover over project laptop mockups, the cards smoothly tilt and scale.
3. **Custom Cursor Dynamics:** Smoothly interpolating the cursor follower position across the screen at 60 frames per second.

### How does it work?
Instead of manually calculating CSS keyframes or writing complicated JavaScript interval timers, Framer Motion wraps standard HTML elements. For example:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  <h1>Sujoy Layek</h1>
</motion.div>
```
Framer Motion uses the browser's hardware-accelerated transforms (`transform: translate3d(...)`) under the hood, ensuring animations never cause stutter or layout jank.

### What would break without it?
Without Framer Motion, recreating the polished, high-end editorial feel of Lewis Zhang's website would require hundreds of lines of fragile CSS animations and complex DOM event listeners, making the portfolio feel rigid and amateurish.

### Want to learn more?
https://motion.dev/docs/react-quick-start
