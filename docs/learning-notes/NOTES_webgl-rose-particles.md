# Learning Note: WebGL 3D Rose Particle Simulation & Spring Return Physics

## 1. What is it?
A GPU-accelerated interactive 3D particle system built with WebGL. Thousands of individual fiery embers are arranged in 3D space to form the intricate petals of a blooming rose. When the user hovers or moves their mouse across the rose, the particles dynamically disperse and explode outward into swirling turbulent sparks. When the mouse stops or leaves, an elastic spring-force pulls every single particle back to its exact home position, reconstituting the 3D rose flower seamlessly.

---

## 2. Why did we use it in this project?
In Sujoy Layek's editorial portfolio, the hero section requires a distinctive visual anchor matching `media_1791447778842_1a7c5559.webp` and `lewiszhang.dev`. A generic 2D spiral galaxy or flat video loop lacks the tactile, high-end interactivity expected of an award-winning portfolio. The 3D Rose made of incandescent fire embers provides:
- Immediate visual impact that captivates recruiters and tech leads within 2 seconds of landing on the page.
- Direct physical responsiveness to user interaction without lag or heavy libraries like Three.js.
- Pure black background contrast that lets the typography ("BUILDING YOUR DIGITAL VISION") stand out with luxury clarity.

---

## 3. How does it work?
The system consists of four coordinated steps:

1. **3D Rose Model Extraction:**
   The exact 3D flower geometry (32,670 points and colors) is extracted from the 3D model buffer and stored in a compact binary format (`public/models/rose_particles.bin`). Each point stores its resting 3D coordinate $(bx, by, bz)$ and its burning ember color $(r, g, b)$.

2. **Inverse-Projected Mouse Raycast:**
   When the mouse moves on the 2D screen, its cursor coordinates $(x, y)$ are unprojected into the 3D coordinate frame of the rose flower. This allows the cursor to act as an invisible 3D force sphere moving through the rose petals.

3. **Explosion & Curl Turbulence (Dispersion):**
   When the mouse is near any particle ($d < R$), an inverse-square repulsion force blasts the particle outward in 3D space, combined with high-frequency 3D curl noise:
   $$v += \hat{n} \cdot F_{\text{repel}} + \text{curl}(t)$$
   This creates the lively scattering of burning embers when the user moves their cursor over the petals.

4. **Hooke's Law Spring Return (Reformation):**
   Every frame, a damped elastic spring force continuously pulls each particle back to its resting position on the rose:
   $$F_{\text{spring}} = (p_{\text{base}} - p_{\text{current}}) \cdot k$$
   $$v = (v + F_{\text{spring}}) \cdot \text{damping}$$
   $$p_{\text{current}} += v$$
   When mouse interaction stops, the repulsion vanishes and the spring force smoothly brings all scattered particles back into the exact shape of the rose in under 1 second.

5. **Single-Draw WebGL GPU Rendering:**
   All 32,670 points are submitted in a single draw call (`gl.drawArrays(gl.POINTS, 0, count)`) with additive blending (`gl.blendFunc(gl.SRC_ALPHA, gl.ONE)`). The GPU renders soft circular particles with Gaussian falloff, creating radiant glowing cores at 60–120 FPS.

---

## 4. What would break without it?
- Without WebGL single-pass rendering, calculating and drawing 32,000 glowing particles in standard HTML5 Canvas 2D would drop frame rates to single digits (~5 FPS), causing unacceptable browser stutter.
- Without the damped spring physics, dispersed particles would either fly off into infinity or freeze in place, permanently destroying the rose flower shape after a single mouse movement.
- Without the inverse projection math, the mouse wouldn't interact accurately with the 3D tilted petals, causing unnatural and misaligned dispersion.

---

## 5. One link to learn more
- [WebGL Fundamentals — Point Sprites and Particle Systems](https://webglfundamentals.org/webgl/lessons/webgl-drawing-multiple-things.html)
