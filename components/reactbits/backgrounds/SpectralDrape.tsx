"use client";

import React, { useEffect, useRef, useState } from "react";

export interface SpectralDrapeProps {
  interactive?: boolean;
  color?: string;
  accentColor?: string;
  dotSize?: number;
  density?: number;
  speed?: number;
  spreadMultiplier?: number;
  className?: string;
  opacity?: number;
  children?: React.ReactNode;
}

export const SpectralDrape: React.FC<SpectralDrapeProps> = ({
  interactive = true,
  color = "#D9B874", // Radiant champagne gold
  accentColor = "#648E8B", // Muted teal / cyan accent
  dotSize = 1.6,
  density = 52,
  speed = 0.018,
  spreadMultiplier = 2.35,
  className = "",
  opacity = 0.85,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

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

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(container);

    const handlePointerMove = (e: PointerEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current.targetX = Math.max(0, Math.min(1, x));
      mouseRef.current.targetY = Math.max(0, Math.min(1, y));
    };

    if (interactive) {
      window.addEventListener("pointermove", handlePointerMove);
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const tiltX = (mouseRef.current.x - 0.5) * 0.45;
      const tiltY = (mouseRef.current.y - 0.5) * 0.35;
      const t = frame * speed;

      const fov = 380;
      const cameraZ = 280;

      // Broadness scaling: calculate cols and rows dynamically to maintain crisp, dense dot spacing across full width
      const targetSpacing = 22;
      const cols = Math.max(68, Math.min(130, Math.round((width * 1.35) / targetSpacing)));
      const rows = Math.max(46, Math.min(92, Math.round((height * 1.35) / targetSpacing)));

      // Spread world dimensions so perspective projection fully blankets the entire screen edge-to-edge
      const worldW = width * spreadMultiplier + 260;
      const worldH = height * 2.25 + 180;

      // Render 3D folding drape grid across the entire broadened world plane
      for (let r = 0; r < rows; r++) {
        const v = r / (rows - 1); // 0 to 1
        const yWorld = (v - 0.5) * worldH;

        for (let c = 0; c < cols; c++) {
          const u = c / (cols - 1); // 0 to 1
          const xWorld = (u - 0.5) * worldW;

          // 3D folding cloth wave harmonics spanning the full horizon
          const fold1 = Math.sin(u * Math.PI * 4.2 + t) * Math.cos(v * Math.PI * 2.8 + t * 0.7);
          const fold2 = Math.cos(u * Math.PI * 6.5 - t * 1.1) * 0.45;
          const fold3 = Math.sin((u * 1.6 + v * 1.2) * Math.PI * 3.6 + t * 1.4) * 0.35;
          const drapeSag = Math.sin(u * Math.PI) * Math.sin(v * Math.PI) * 45;

          const zWorld = (fold1 + fold2 + fold3) * 75 + drapeSag;

          // Apply interactive tilt rotation in 3D
          const rotX = xWorld * Math.cos(tiltX) - zWorld * Math.sin(tiltX);
          const rotZ = xWorld * Math.sin(tiltX) + zWorld * Math.cos(tiltX);
          const rotY = yWorld * Math.cos(tiltY) - rotZ * Math.sin(tiltY);
          const finalZ = yWorld * Math.sin(tiltY) + rotZ * Math.cos(tiltY);

          // 3D Perspective Projection
          const scale = fov / (fov + cameraZ + finalZ);
          const projX = width / 2 + rotX * scale;
          const projY = height / 2 + rotY * scale;

          if (scale > 0 && projX >= -30 && projX <= width + 30 && projY >= -30 && projY <= height + 30) {
            // Smooth edge alpha fade margin so dots fade gracefully at the absolute outer boundaries
            const fadeLeft = Math.min(1, Math.max(0, (projX + 30) / 70));
            const fadeRight = Math.min(1, Math.max(0, (width + 30 - projX) / 70));
            const fadeTop = Math.min(1, Math.max(0, (projY + 30) / 60));
            const fadeBottom = Math.min(1, Math.max(0, (height + 30 - projY) / 60));
            const edgeAlpha = fadeLeft * fadeRight * fadeTop * fadeBottom;

            // Depth brightness calculation
            const depthFactor = Math.max(0.25, Math.min(1, (zWorld + 80) / 160));
            const isHighlight = (c + r) % 5 === 0;

            const radius = Math.max(0.85, dotSize * scale * (0.85 + depthFactor * 0.65));
            ctx.beginPath();
            ctx.arc(projX, projY, radius, 0, Math.PI * 2);

            if (isHighlight) {
              ctx.fillStyle = accentColor;
              ctx.shadowColor = accentColor;
              ctx.shadowBlur = 6 * scale;
            } else {
              ctx.fillStyle = color;
              ctx.shadowColor = color;
              ctx.shadowBlur = 4 * scale;
            }

            ctx.globalAlpha = depthFactor * 0.9 * edgeAlpha;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1.0;
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (interactive) {
        window.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, [interactive, color, accentColor, dotSize, density, speed, spreadMultiplier, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Radiant Atmospheric Backdrop Glow - Fully spread edge-to-edge */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 130% 90% at 50% 20%, rgba(217, 184, 116, 0.22), rgba(100, 142, 139, 0.12) 55%, transparent 85%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {children}
    </div>
  );
};

export default SpectralDrape;
