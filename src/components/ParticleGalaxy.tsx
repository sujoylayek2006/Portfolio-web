"use client";

import React, { useEffect, useRef } from "react";

// WebGL Vertex Shader
const VS_SOURCE = `
attribute vec3 aPosition;
attribute vec3 aColor;
attribute float aSize;
attribute float aAlpha;

uniform mat4 uProjection;
uniform mat4 uModelView;
uniform float uPixelRatio;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vec4 mvPosition = uModelView * vec4(aPosition, 1.0);
  gl_Position = uProjection * mvPosition;

  // Perspective point sizing for crisp fiery embers
  float pointSize = (aSize * 620.0 / -mvPosition.z) * uPixelRatio;
  gl_PointSize = clamp(pointSize, 1.4, 22.0);

  vColor = aColor;
  vAlpha = aAlpha;
}
`;

// WebGL Fragment Shader with soft glowing fiery embers
const FS_SOURCE = `
precision mediump float;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 coord = gl_PointCoord - vec2(0.5);
  float dist = length(coord);
  if (dist > 0.5) {
    discard;
  }

  // Soft luminous gaussian core falloff
  float core = 1.0 - smoothstep(0.0, 0.48, dist);
  float centerGlow = 1.0 - smoothstep(0.0, 0.20, dist);

  // Fiery ember coloring with burning incandescent highlights
  vec3 emberColor = vColor * (1.8 + 1.2 * centerGlow);
  float alpha = vAlpha * (core * 0.85 + centerGlow * 0.35);

  gl_FragColor = vec4(emberColor, clamp(alpha, 0.0, 1.0));
}
`;

function createPerspectiveMatrix(fovRad: number, aspect: number, near: number, far: number): Float32Array {
  const f = 1.0 / Math.tan(fovRad / 2);
  const out = new Float32Array(16);
  out[0] = f / aspect;
  out[5] = f;
  out[10] = (far + near) / (near - far);
  out[11] = -1;
  out[14] = (2 * far * near) / (near - far);
  return out;
}

function createModelViewMatrix(
  rotX: number,
  rotY: number,
  transX: number,
  transY: number,
  transZ: number,
  scale: number
): Float32Array {
  const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
  const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

  const out = new Float32Array(16);

  out[0] = cosY * scale;
  out[1] = sinX * sinY * scale;
  out[2] = -cosX * sinY * scale;
  out[3] = 0;

  out[4] = 0;
  out[5] = cosX * scale;
  out[6] = sinX * scale;
  out[7] = 0;

  out[8] = sinY * scale;
  out[9] = -sinX * cosY * scale;
  out[10] = cosX * cosY * scale;
  out[11] = 0;

  out[12] = transX;
  out[13] = transY;
  out[14] = transZ;
  out[15] = 1;

  return out;
}

interface ParticleGalaxyProps {
  className?: string;
}

export default function ParticleGalaxy({ className = "" }: ParticleGalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL not supported");
      return;
    }

    // Compile shaders
    const createShader = (type: number, src: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, VS_SOURCE);
    const fs = createShader(gl.FRAGMENT_SHADER, FS_SOURCE);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Attribute & Uniform locations
    const aPositionLoc = gl.getAttribLocation(program, "aPosition");
    const aColorLoc = gl.getAttribLocation(program, "aColor");
    const aSizeLoc = gl.getAttribLocation(program, "aSize");
    const aAlphaLoc = gl.getAttribLocation(program, "aAlpha");

    const uProjLoc = gl.getUniformLocation(program, "uProjection");
    const uModelViewLoc = gl.getUniformLocation(program, "uModelView");
    const uPixelLoc = gl.getUniformLocation(program, "uPixelRatio");

    // Particle Data
    let count = 0;
    let basePos = new Float32Array(0);
    let curPos = new Float32Array(0);
    let vels = new Float32Array(0);
    let colors = new Float32Array(0);
    let sizes = new Float32Array(0);
    let alphas = new Float32Array(0);
    let curlPhases = new Float32Array(0);

    const posBuffer = gl.createBuffer();
    const colBuffer = gl.createBuffer();
    const sizeBuffer = gl.createBuffer();
    const alphaBuffer = gl.createBuffer();

    // Procedural Fallback Model (~8,200 points)
    const initProceduralRose = () => {
      count = 8200;
      basePos = new Float32Array(count * 3);
      curPos = new Float32Array(count * 3);
      vels = new Float32Array(count * 3);
      colors = new Float32Array(count * 3);
      sizes = new Float32Array(count);
      alphas = new Float32Array(count);
      curlPhases = new Float32Array(count);

      // Core swirl
      const coreCount = 1400;
      for (let i = 0; i < coreCount; i++) {
        const u = i / coreCount;
        const theta = u * Math.PI * 12;
        const r = 0.05 + u * 0.72 + (Math.random() - 0.5) * 0.08;
        const z = -0.55 + u * 0.65 + (Math.random() - 0.5) * 0.06;

        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);

        basePos[i * 3 + 0] = x;
        basePos[i * 3 + 1] = y;
        basePos[i * 3 + 2] = z;

        curPos[i * 3 + 0] = x;
        curPos[i * 3 + 1] = y;
        curPos[i * 3 + 2] = z;

        colors[i * 3 + 0] = 1.35 + Math.random() * 0.5;
        colors[i * 3 + 1] = 0.55 + Math.random() * 0.35;
        colors[i * 3 + 2] = 0.08 + Math.random() * 0.12;

        sizes[i] = 0.024 + Math.random() * 0.016;
        alphas[i] = 0.85 + Math.random() * 0.15;
        curlPhases[i] = Math.random() * Math.PI * 2;
      }

      const layers = [
        { petals: 3, r: 0.8, cup: 0.45, w: 0.5, pCount: 1200 },
        { petals: 4, r: 1.25, cup: 0.35, w: 0.65, pCount: 1600 },
        { petals: 5, r: 1.75, cup: 0.22, w: 0.8, pCount: 1800 },
        { petals: 6, r: 2.2, cup: 0.08, w: 0.95, pCount: 2200 },
      ];

      let idx = coreCount;
      layers.forEach((layer, lIdx) => {
        const angleOff = lIdx * 0.55;
        for (let p = 0; p < layer.petals; p++) {
          const petalCenter = (p / layer.petals) * Math.PI * 2 + angleOff;
          const numP = Math.floor(layer.pCount / layer.petals);

          for (let k = 0; k < numP && idx < count; k++, idx++) {
            const u = Math.random();
            const v = (Math.random() - 0.5) * Math.PI * 0.92;
            const spread = Math.cos(v) * (0.8 + 0.2 * Math.sin(u * Math.PI));
            const pr = layer.r + u * layer.w * spread;
            const pAngle = petalCenter + v * 0.62;

            const zCup = Math.sin(u * Math.PI * 0.85) * layer.cup;
            const zCurl = Math.pow(u, 2.2) * (layer.cup * -0.6);
            const z = zCup + zCurl + (Math.random() - 0.5) * 0.12;

            const x = pr * Math.cos(pAngle);
            const y = pr * Math.sin(pAngle);

            basePos[idx * 3 + 0] = x;
            basePos[idx * 3 + 1] = y;
            basePos[idx * 3 + 2] = z;

            curPos[idx * 3 + 0] = x;
            curPos[idx * 3 + 1] = y;
            curPos[idx * 3 + 2] = z;

            const rim = u > 0.7;
            colors[idx * 3 + 0] = rim ? 1.45 : 1.15 + Math.random() * 0.3;
            colors[idx * 3 + 1] = rim ? 0.18 : 0.08 + Math.random() * 0.12;
            colors[idx * 3 + 2] = 0.02 + Math.random() * 0.05;

            sizes[idx] = 0.022 + Math.random() * 0.018;
            alphas[idx] = 0.75 + Math.random() * 0.25;
            curlPhases[idx] = Math.random() * Math.PI * 2;
          }
        }
      });
    };

    initProceduralRose();

    // Load authentic 32,670 particles extracted directly from Lewis Zhang's flower.glb
    fetch("/models/rose_particles.bin")
      .then((res) => {
        if (!res.ok) throw new Error("Status " + res.status);
        return res.arrayBuffer();
      })
      .then((ab) => {
        const header = new DataView(ab);
        const modelCount = header.getUint32(0, true);
        if (modelCount > 0 && modelCount <= 40000) {
          const rawPos = new Float32Array(ab, 4, modelCount * 3);
          const rawCol = new Float32Array(ab, 4 + modelCount * 3 * 4, modelCount * 3);

          count = modelCount;
          basePos = new Float32Array(count * 3);
          curPos = new Float32Array(count * 3);
          vels = new Float32Array(count * 3);
          colors = new Float32Array(count * 3);
          sizes = new Float32Array(count);
          alphas = new Float32Array(count);
          curlPhases = new Float32Array(count);

          for (let i = 0; i < count; i++) {
            const ox = rawPos[i * 3 + 0];
            const oy = rawPos[i * 3 + 1];
            const oz = rawPos[i * 3 + 2];

            // Transform into upright blooming rose orientation (node transform x'=oy, y'=-ox, z'=oz)
            const x = oy;
            const y = -ox;
            const z = oz;

            basePos[i * 3 + 0] = x;
            basePos[i * 3 + 1] = y;
            basePos[i * 3 + 2] = z;

            curPos[i * 3 + 0] = x;
            curPos[i * 3 + 1] = y;
            curPos[i * 3 + 2] = z;

            colors[i * 3 + 0] = rawCol[i * 3 + 0];
            colors[i * 3 + 1] = rawCol[i * 3 + 1];
            colors[i * 3 + 2] = rawCol[i * 3 + 2];

            sizes[i] = 0.025 + Math.random() * 0.018;
            alphas[i] = 0.85 + Math.random() * 0.15;
            curlPhases[i] = Math.random() * Math.PI * 2;
          }

          // Upload updated static buffers
          gl.bindBuffer(gl.ARRAY_BUFFER, colBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

          gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);

          gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, alphas, gl.DYNAMIC_DRAW);

          gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, curPos, gl.DYNAMIC_DRAW);
        }
      })
      .catch((err) => {
        console.log("Using procedural rose model:", err);
      });

    // Initial buffer uploads
    gl.bindBuffer(gl.ARRAY_BUFFER, colBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, alphas, gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, curPos, gl.DYNAMIC_DRAW);

    // Mouse Tracking State
    const mouse = {
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      speed: 0,
      normX: 0,
      normY: 0,
      targetNormX: 0,
      targetNormY: 0,
      isHovering: false,
    };

    let width = 0;
    let height = 0;
    let isVisible = true;
    let animId = 0;

    const handleResize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const inX = e.clientX - rect.left;
      const inY = e.clientY - rect.top;

      if (inX >= 0 && inX <= width && inY >= 0 && inY <= height) {
        if (mouse.prevX === -9999) {
          mouse.prevX = inX;
          mouse.prevY = inY;
        } else {
          mouse.prevX = mouse.x;
          mouse.prevY = mouse.y;
        }

        mouse.x = inX;
        mouse.y = inY;
        mouse.isHovering = true;
        mouse.targetNormX = inX / width - 0.5;
        mouse.targetNormY = inY / height - 0.5;

        const dx = inX - mouse.x;
        const dy = inY - mouse.y;
        const moveDist = Math.sqrt(dx * dx + dy * dy);

        mouse.x = inX;
        mouse.y = inY;
        mouse.isHovering = true;
        mouse.targetNormX = inX / width - 0.5;
        mouse.targetNormY = inY / height - 0.5;

        // Smoothly track mouse velocity for dynamic interaction
        mouse.speed = Math.min(mouse.speed * 0.65 + moveDist * 0.35, 50);
      } else {
        mouse.isHovering = false;
        mouse.speed = 0;
        mouse.targetNormX = 0;
        mouse.targetNormY = 0;
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.speed = 0;
      mouse.targetNormX = 0;
      mouse.targetNormY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // FIXED top & front orientation matching reference video (NEVER flips upside down!)
    const baseRotX = 0.22; // Gentle forward tilt to look into the blooming petals from top-front
    const baseRotY = -0.32; // Fixed angle showing the spiral whorls
    let time = 0;

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      time += 0.016;

      // Mouse speed decay when mouse is resting
      mouse.speed *= 0.88;
      if (mouse.speed < 0.15) {
        mouse.speed = 0;
      }

      // Parallax smoothing
      mouse.normX += (mouse.targetNormX - mouse.normX) * 0.045;
      mouse.normY += (mouse.targetNormY - mouse.normY) * 0.045;

      // Gentle organic breathing float (NEVER tumbles or flips upside down!)
      const swayTiltX = Math.sin(time * 0.6) * 0.018;
      const swayTiltY = Math.cos(time * 0.5) * 0.022;

      // LOCKED to top and front orientation + subtle parallax
      const curRotX = baseRotX + swayTiltX + mouse.normY * 0.12;
      const curRotY = baseRotY + swayTiltY + mouse.normX * 0.16;

      // Projection & ModelView Matrices
      const aspect = width / (height || 1);
      const fovRad = (42 * Math.PI) / 180;
      const tanHalfFov = Math.tan(fovRad / 2);
      const camDist = 6.8;
      const transY = 0.38 + Math.sin(time * 0.8) * 0.035; // Gentle vertical floating
      const scale = (Math.min(width, height) / 780) * 1.15;

      const projMatrix = createPerspectiveMatrix(fovRad, aspect, 0.1, 100);
      const modelViewMatrix = createModelViewMatrix(
        curRotX,
        curRotY,
        0,
        transY,
        -camDist,
        scale
      );

      // Precalculate inverse rotation for fast mouse unprojection into model space
      const cosX = Math.cos(curRotX), sinX = Math.sin(curRotX);
      const cosY = Math.cos(curRotY), sinY = Math.sin(curRotY);

      let mouseModelX = -9999;
      let mouseModelY = -9999;
      let mouseModelZ = -9999;

      if (mouse.isHovering) {
        const normScreenX = (mouse.x / width) * 2.0 - 1.0;
        const normScreenY = 1.0 - (mouse.y / height) * 2.0;

        // View space coordinates at rose plane
        const vx = (normScreenX * (tanHalfFov * camDist * aspect)) / scale;
        const vy = (normScreenY * (tanHalfFov * camDist) - transY) / scale;
        const vz = 0.0;

        // Inverse rotation: rot(-rotX) then rot(-rotY)
        const iy1 = vy * cosX + vz * sinX;
        const iz1 = -vy * sinX + vz * cosX;

        mouseModelX = vx * cosY - iz1 * sinY;
        mouseModelY = iy1;
        mouseModelZ = vx * sinY + iz1 * cosY;
      }

      // Physics parameters
      const repelRadius = 1.35; // Model-space interaction radius
      const springK = 0.076;     // Hooke's law stiffness for smooth reformation
      const damping = 0.86;      // Velocity damping for fluid settling

      // Dynamic activity: active when mouse moves, settling when stationary
      const motionMult = Math.min(Math.max((mouse.speed - 0.4) / 7.0, 0.0), 2.2);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        const bx = basePos[i3 + 0];
        const by = basePos[i3 + 1];
        const bz = basePos[i3 + 2];

        // 1. Fluid Swirl & Dispersion on Mouse Hover / Movement
        if (mouse.isHovering && motionMult > 0.001) {
          const dx = curPos[i3 + 0] - mouseModelX;
          const dy = curPos[i3 + 1] - mouseModelY;
          const dz = curPos[i3 + 2] - mouseModelZ;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < repelRadius * repelRadius && distSq > 0.001) {
            const dist = Math.sqrt(distSq);
            const prox = Math.pow(1.0 - dist / repelRadius, 1.6);

            // Explosive blast force scaling with movement
            const blastForce = prox * motionMult * (0.18 + mouse.speed * 0.012);
            const nx = dx / dist;
            const ny = dy / dist;
            const nz = dz / dist;

            // 3D curl turbulence creating the fluid streams seen in the video
            const phase = curlPhases[i] + time * 3.4;
            const swirlForce = blastForce * 0.75;
            const swirlX = (-ny * 0.8 + Math.sin(phase) * 0.6) * swirlForce;
            const swirlY = (nx * 0.8 + Math.cos(phase) * 0.6) * swirlForce;
            const swirlZ = (Math.sin(phase * 1.5) * 0.7) * swirlForce;

            vels[i3 + 0] += nx * blastForce + swirlX;
            vels[i3 + 1] += ny * blastForce + swirlY;
            vels[i3 + 2] += nz * blastForce * 0.6 + swirlZ;
          }
        }

        // 2. Spring Reformation ("mouse hover bondho kore dilei rose hoya jachilo")
        // Elastic pull towards resting position on the rose
        const fx = (bx - curPos[i3 + 0]) * springK;
        const fy = (by - curPos[i3 + 1]) * springK;
        const fz = (bz - curPos[i3 + 2]) * springK;

        vels[i3 + 0] = (vels[i3 + 0] + fx) * damping;
        vels[i3 + 1] = (vels[i3 + 1] + fy) * damping;
        vels[i3 + 2] = (vels[i3 + 2] + fz) * damping;

        curPos[i3 + 0] += vels[i3 + 0];
        curPos[i3 + 1] += vels[i3 + 1];
        curPos[i3 + 2] += vels[i3 + 2];
      }

      // Upload positions to GPU
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, curPos);

      // Render WebGL
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Additive blending for fiery glow
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl.disable(gl.DEPTH_TEST);

      gl.useProgram(program);

      gl.uniformMatrix4fv(uProjLoc, false, projMatrix);
      gl.uniformMatrix4fv(uModelViewLoc, false, modelViewMatrix);
      gl.uniform1f(uPixelLoc, Math.min(window.devicePixelRatio || 1, 2));

      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.enableVertexAttribArray(aPositionLoc);
      gl.vertexAttribPointer(aPositionLoc, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, colBuffer);
      gl.enableVertexAttribArray(aColorLoc);
      gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
      gl.enableVertexAttribArray(aSizeLoc);
      gl.vertexAttribPointer(aSizeLoc, 1, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuffer);
      gl.enableVertexAttribArray(aAlphaLoc);
      gl.vertexAttribPointer(aAlphaLoc, 1, gl.FLOAT, false, 0, 0);

      if (count > 0) {
        gl.drawArrays(gl.POINTS, 0, count);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (program) gl.deleteProgram(program);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
      if (posBuffer) gl.deleteBuffer(posBuffer);
      if (colBuffer) gl.deleteBuffer(colBuffer);
      if (sizeBuffer) gl.deleteBuffer(sizeBuffer);
      if (alphaBuffer) gl.deleteBuffer(alphaBuffer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
