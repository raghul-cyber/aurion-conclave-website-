"use client";

import React, { useEffect, useRef, useState } from "react";

export type BackgroundPreset =
  | "web-threads"
  | "pattern-waves"
  | "micro-slats"
  | "ghost-fibers"
  | "topography"
  | "scanner"
  | "dark-veil"
  | "silk"
  | "floating-lines"
  | "light-rays"
  | "line-waves"
  | "radar"
  | "soft-aurora"
  | "particles"
  | "grainient"
  | "grid-scan"
  | "beams"
  | "ripple-grid"
  | "dot-field"
  | "threads"
  | "grid-motion";

interface PageBackgroundProps {
  preset?: BackgroundPreset;
  className?: string;
  opacity?: number;
}

export const PageBackground: React.FC<PageBackgroundProps> = ({
  preset = "web-threads",
  className = "",
  opacity = 0.85,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 320);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    let frame = 0;

    // Pre-generate nodes for particle and network presets
    const nodeCount = 42;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: 1.5 + Math.random() * 2.2,
      phase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      switch (preset) {
        case "web-threads": {
          // Connected intelligence network: golden nodes, teal cross-links & pulsing filaments
          for (let i = 0; i < nodes.length; i++) {
            const n = nodes[i];
            n.x += n.vx * 0.002;
            n.y += n.vy * 0.002;
            if (n.x < 0) n.x = 1;
            if (n.x > 1) n.x = 0;
            if (n.y < 0) n.y = 1;
            if (n.y > 1) n.y = 0;

            const px = n.x * width;
            const py = n.y * height;

            // Draw glowing node
            const glow = Math.sin(frame * 0.035 + n.phase) * 0.35 + 0.65;
            ctx.fillStyle = `rgba(217, 184, 116, ${0.55 * glow})`;
            ctx.shadowColor = "rgba(195, 145, 66, 0.9)";
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(px, py, n.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Connect to nearby nodes
            for (let j = i + 1; j < nodes.length; j++) {
              const n2 = nodes[j];
              const p2x = n2.x * width;
              const p2y = n2.y * height;
              const dist = Math.hypot(px - p2x, py - p2y);
              const maxDist = Math.min(width, height) * 0.3;

              if (dist < maxDist) {
                const alpha = (1 - dist / maxDist) * 0.42;
                ctx.strokeStyle =
                  j % 3 === 0
                    ? `rgba(100, 142, 139, ${alpha * 1.3})`
                    : `rgba(195, 145, 66, ${alpha})`;
                ctx.lineWidth = 1.1;
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(p2x, p2y);
                ctx.stroke();
              }
            }
          }
          break;
        }

        case "pattern-waves":
        case "line-waves": {
          // Flowing harmonic wave ribbons
          const waveCount = 7;
          for (let w = 0; w < waveCount; w++) {
            ctx.beginPath();
            const yBase = height * 0.2 + height * 0.55 * (w / (waveCount - 1));
            const amp = 32 + w * 9;
            const freq = 0.0028 + w * 0.0007;
            const speed = 0.014 + w * 0.003;

            for (let x = 0; x <= width; x += 10) {
              const y = yBase + Math.sin(x * freq + frame * speed + w) * amp;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }

            const alpha = 0.25 + (w / waveCount) * 0.3;
            ctx.strokeStyle =
              w % 2 === 0
                ? `rgba(195, 145, 66, ${alpha})`
                : `rgba(100, 142, 139, ${alpha * 1.25})`;
            ctx.lineWidth = 1.4;
            ctx.stroke();
          }
          break;
        }

        case "dark-veil":
        case "soft-aurora": {
          // Volumetric aurora curtain with glowing light fields
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, "rgba(195, 145, 66, 0.2)");
          grad.addColorStop(0.35, "rgba(100, 142, 139, 0.24)");
          grad.addColorStop(0.7, "rgba(217, 184, 116, 0.16)");
          grad.addColorStop(1, "rgba(15, 18, 19, 0)");

          for (let a = 0; a < 3; a++) {
            ctx.beginPath();
            ctx.moveTo(0, height);
            for (let x = 0; x <= width; x += 14) {
              const y =
                height * 0.32 +
                Math.sin(x * 0.0028 + frame * 0.01 + a) * 70 +
                Math.cos(x * 0.0045 - frame * 0.014) * 45;
              ctx.lineTo(x, y);
            }
            ctx.lineTo(width, height);
            ctx.closePath();
            ctx.fillStyle = grad;
            ctx.fill();
          }
          break;
        }

        case "micro-slats": {
          // Architectural diagonal louvers with subtle luminous shimmer
          const slatSpacing = 36;
          const slant = 0.45;
          const totalSlats = Math.ceil((width + height * slant) / slatSpacing);
          const sweep = (frame * 1.6) % (width + height * slant);

          for (let i = 0; i < totalSlats; i++) {
            const startX = i * slatSpacing - height * slant;
            const distFromSweep = Math.abs(startX + height * slant * 0.5 - sweep);
            const shimmer = Math.max(0, 1 - distFromSweep / 140);

            const baseAlpha = 0.07 + shimmer * 0.35;
            ctx.strokeStyle =
              shimmer > 0.2
                ? `rgba(217, 184, 116, ${baseAlpha})`
                : `rgba(244, 241, 233, ${baseAlpha})`;
            ctx.lineWidth = 1 + shimmer * 1.2;

            ctx.beginPath();
            ctx.moveTo(startX, 0);
            ctx.lineTo(startX + height * slant, height);
            ctx.stroke();
          }
          break;
        }

        case "ghost-fibers":
        case "silk":
        case "threads": {
          // Flowing organic silk ribbons
          const ribbonCount = 8;
          for (let r = 0; r < ribbonCount; r++) {
            ctx.beginPath();
            const yCenter = height * (0.2 + (r / ribbonCount) * 0.6);
            ctx.moveTo(0, yCenter);

            const cp1x = width * 0.28 + Math.sin(frame * 0.012 + r) * 60;
            const cp1y = yCenter - 60 + Math.cos(frame * 0.015 + r) * 50;
            const cp2x = width * 0.72 + Math.cos(frame * 0.01 + r) * 70;
            const cp2y = yCenter + 60 + Math.sin(frame * 0.013 + r) * 50;

            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width, yCenter);

            const alpha = 0.22 + Math.sin(frame * 0.02 + r) * 0.12;
            ctx.strokeStyle =
              r % 2 === 0
                ? `rgba(217, 184, 116, ${alpha})`
                : `rgba(100, 142, 139, ${alpha * 1.2})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
          break;
        }

        case "floating-lines":
        case "beams": {
          // Perspective converging speed beams & infinity horizon
          const cx = width * 0.5;
          const cy = height * 0.12;
          const beamCount = 20;
          ctx.lineWidth = 1.2;

          for (let i = -beamCount; i <= beamCount; i++) {
            const ratio = i / beamCount;
            const targetX = cx + ratio * (width * 0.9) + Math.sin(frame * 0.012 + i) * 25;
            const targetY = height;

            const alpha = (1 - Math.abs(ratio) * 0.55) * 0.38;
            ctx.strokeStyle =
              i % 2 === 0
                ? `rgba(195, 145, 66, ${alpha})`
                : `rgba(100, 142, 139, ${alpha})`;

            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(targetX, targetY);
            ctx.stroke();
          }
          break;
        }

        case "scanner":
        case "grid-scan": {
          // Cybernetic coordinate grid with moving laser telemetry beam
          const gridSize = 52;
          ctx.strokeStyle = "rgba(244, 241, 233, 0.07)";
          ctx.lineWidth = 1;

          for (let x = 0; x < width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
          }
          for (let y = 0; y < height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
          }

          // Laser sweep bar
          const scanY = (frame * 2.0) % height;
          const scanGrad = ctx.createLinearGradient(0, scanY - 35, 0, scanY + 35);
          scanGrad.addColorStop(0, "rgba(195, 145, 66, 0)");
          scanGrad.addColorStop(0.5, "rgba(195, 145, 66, 0.45)");
          scanGrad.addColorStop(1, "rgba(195, 145, 66, 0)");

          ctx.fillStyle = scanGrad;
          ctx.fillRect(0, scanY - 30, width, 60);

          ctx.strokeStyle = "rgba(217, 184, 116, 0.85)";
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(0, scanY);
          ctx.lineTo(width, scanY);
          ctx.stroke();
          break;
        }

        case "radar": {
          // Circular defense sweep radar
          const cx = width * 0.75;
          const cy = height * 0.45;
          const maxR = Math.min(width, height) * 0.42;

          ctx.strokeStyle = "rgba(100, 142, 139, 0.26)";
          ctx.lineWidth = 1;
          for (let r = maxR * 0.25; r <= maxR; r += maxR * 0.25) {
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.moveTo(cx - maxR, cy);
          ctx.lineTo(cx + maxR, cy);
          ctx.moveTo(cx, cy - maxR);
          ctx.lineTo(cx, cy + maxR);
          ctx.stroke();

          const angle = (frame * 0.02) % (Math.PI * 2);
          ctx.strokeStyle = "rgba(195, 145, 66, 0.85)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
          ctx.stroke();
          break;
        }

        case "topography": {
          // Topographic elevation contour lines
          const cx = width * 0.65;
          const cy = height * 0.5;
          const ringCount = 15;
          ctx.lineWidth = 1.2;

          for (let r = 1; r <= ringCount; r++) {
            const baseRad = (Math.min(width, height) / ringCount) * r;
            ctx.beginPath();
            for (let a = 0; a <= Math.PI * 2; a += 0.07) {
              const rad =
                baseRad +
                Math.sin(a * 4 + frame * 0.009 + r) * 18 +
                Math.cos(a * 2 - frame * 0.007) * 14;
              const px = cx + Math.cos(a) * rad;
              const py = cy + Math.sin(a) * rad * 0.62;
              if (a === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle =
              r % 2 === 0
                ? "rgba(195, 145, 66, 0.3)"
                : "rgba(100, 142, 139, 0.25)";
            ctx.stroke();
          }
          break;
        }

        case "light-rays": {
          // Volumetric angled god-rays
          const rayCount = 9;
          const originX = width * 0.85;
          const originY = -50;

          for (let i = 0; i < rayCount; i++) {
            const spread = (i - rayCount / 2) * (width * 0.16);
            const targetX = width * 0.3 + spread + Math.sin(frame * 0.01 + i) * 30;
            const targetY = height + 100;

            const rayGrad = ctx.createLinearGradient(originX, originY, targetX, targetY);
            const alpha = 0.12 + Math.sin(frame * 0.02 + i) * 0.06;
            rayGrad.addColorStop(0, `rgba(217, 184, 116, ${alpha * 2.2})`);
            rayGrad.addColorStop(0.6, `rgba(195, 145, 66, ${alpha})`);
            rayGrad.addColorStop(1, "rgba(0,0,0,0)");

            ctx.fillStyle = rayGrad;
            ctx.beginPath();
            ctx.moveTo(originX - 25, originY);
            ctx.lineTo(originX + 25, originY);
            ctx.lineTo(targetX + 80, targetY);
            ctx.lineTo(targetX - 80, targetY);
            ctx.closePath();
            ctx.fill();
          }
          break;
        }

        case "dot-field":
        case "ripple-grid": {
          // 3D undulating perspective dot matrix
          const cols = 28;
          const rows = 18;
          const startY = height * 0.25;

          for (let r = 0; r < rows; r++) {
            const depth = r / rows;
            const y = startY + depth * (height * 0.72);
            const scale = 0.4 + depth * 0.9;

            for (let c = 0; c < cols; c++) {
              const xNorm = (c - cols / 2) / (cols / 2);
              const x = width / 2 + xNorm * (width * 0.48 * (1 + depth * 1.1));
              const wave = Math.sin(c * 0.35 + frame * 0.04) * Math.cos(r * 0.4 + frame * 0.03);
              const dotY = y + wave * 16 * scale;

              const alpha = (0.2 + depth * 0.5) * (0.6 + wave * 0.4);
              ctx.fillStyle =
                c % 2 === 0
                  ? `rgba(217, 184, 116, ${alpha})`
                  : `rgba(100, 142, 139, ${alpha})`;

              ctx.beginPath();
              ctx.arc(x, dotY, (1.2 + depth * 1.5) * scale, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          break;
        }

        case "grid-motion": {
          // Isometric moving wireframe terrain
          const lines = 16;
          const horizon = height * 0.22;
          const gridSpeed = (frame * 1.2) % 40;

          // Horizontal lines flowing towards viewer
          for (let l = 0; l < lines; l++) {
            const p = (l * 40 + gridSpeed) / (lines * 40);
            const y = horizon + Math.pow(p, 2.2) * (height - horizon);
            const alpha = p * 0.35;

            ctx.strokeStyle = `rgba(195, 145, 66, ${alpha})`;
            ctx.lineWidth = 1 + p;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
          }

          // Perspective lines converging at horizon
          const vCount = 14;
          for (let v = 0; v <= vCount; v++) {
            const xBottom = (width / vCount) * v;
            const xTop = width * 0.5 + (xBottom - width * 0.5) * 0.12;

            ctx.strokeStyle = "rgba(100, 142, 139, 0.22)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(xTop, horizon);
            ctx.lineTo(xBottom, height);
            ctx.stroke();
          }
          break;
        }

        case "particles":
        default: {
          // Ambient glowing particles & luminous telemetry links
          for (let i = 0; i < nodes.length; i++) {
            const n = nodes[i];
            n.x += n.vx * 0.003;
            n.y += n.vy * 0.003;
            if (n.x < 0) n.x = 1;
            if (n.x > 1) n.x = 0;
            if (n.y < 0) n.y = 1;
            if (n.y > 1) n.y = 0;

            const px = n.x * width;
            const py = n.y * height;
            const glow = Math.sin(frame * 0.04 + n.phase) * 0.35 + 0.65;

            ctx.fillStyle = `rgba(217, 184, 116, ${0.6 * glow})`;
            ctx.shadowColor = "rgba(195, 145, 66, 0.8)";
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(px, py, n.radius * 1.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
          break;
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [preset, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Ambient Atmospheric Radial Glow Layer for Depth, Warmth & Visual Luxury */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            preset === "web-threads" || preset === "beams" || preset === "particles"
              ? "radial-gradient(ellipse 90% 65% at 50% -10%, rgba(195, 145, 66, 0.28), rgba(100, 142, 139, 0.12) 45%, transparent 80%)"
              : preset === "dark-veil" || preset === "soft-aurora"
              ? "radial-gradient(circle 800px at 60% 20%, rgba(100, 142, 139, 0.26), rgba(195, 145, 66, 0.18) 50%, transparent 80%)"
              : preset === "scanner" || preset === "grid-scan"
              ? "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(100, 142, 139, 0.24), rgba(195, 145, 66, 0.14) 55%, transparent 80%)"
              : "radial-gradient(ellipse 85% 60% at 50% 0%, rgba(195, 145, 66, 0.24), rgba(100, 142, 139, 0.12) 50%, transparent 80%)",
        }}
      />

      {/* Secondary Ambient Vignette for Rich Spatial Lighting */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 600px at 85% 35%, rgba(100, 142, 139, 0.14), transparent 70%)",
        }}
      />

      {/* Hardware-Accelerated 60fps Animation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};

export default PageBackground;
