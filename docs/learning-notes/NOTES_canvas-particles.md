# Learning Note: HTML5 Canvas 3D Particle Galaxy System

### What is it?
An HTML5 Canvas particle system is a technique where hundreds of tiny graphical points ("particles") are calculated and drawn directly onto an HTML `<canvas>` element 60 times per second using JavaScript and mathematical equations (trigonometry, 3D perspective projection, and spiral formulas).

### Why did we use it in this project?
In the reference screen recording of Lewis Zhang (`lewiszhang.dev`), the Hero section features a captivating, celestial vortex of glowing amber, gold, and crimson particles swirling in 3D around the center core.
1. **Visual Impact:** It instantly establishes an artistic, high-end editorial atmosphere that makes tech recruiters pause and explore.
2. **Interactive Parallax:** When the visitor moves their mouse across the screen, the entire galaxy subtly tilts in 3D space with smooth damping (lerp).
3. **Zero Heavy 3D Engines:** Rather than downloading heavy 600KB+ Three.js bundles, a clean 2D Canvas with mathematical 3D projection renders lightweight, fast, and smooth at 60fps with zero third-party dependencies.

### How does it work?
1. **Spiral Geometry:** Each particle is placed on one of three logarithmic spiral arms using:
   `angle = armAngle + Math.log(radius * 0.05 + 1) * 3.2`
2. **Orbital Keplerian Physics:** Particles closer to the center rotate faster than particles on the outer edges (`baseSpeed = 0.0035 + (1 - distanceRatio) * 0.006`), giving it a natural celestial rotation.
3. **3D Rotation Matrix & Perspective:** The 2D coordinates `(x, y, z)` are rotated based on pitch and yaw angles driven by the mouse coordinates, then projected to screen space using a perspective focal length:
   `scale = focalLength / (focalLength + z)`
4. **Performance Optimization:**
   - Uses `ctx.globalCompositeOperation = "lighter"` for real glowing additive blending.
   - An `IntersectionObserver` automatically halts the `requestAnimationFrame` loop when the visitor scrolls down to view projects, saving 100% of GPU/CPU resources.
   - Respects `prefers-reduced-motion` for accessibility.

### What would break without it?
Without this component, the Hero section would lack the signature cosmic vortex that defines the high-fidelity Lewis Zhang experience, making the intro feel like a static text webpage instead of an immersive editorial showpiece.

### Want to learn more?
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
