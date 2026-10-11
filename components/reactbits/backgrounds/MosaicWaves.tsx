"use client";

import React, { useEffect, useRef, useState } from "react";

export interface MosaicWavesProps {
  tileSize?: number;
  gap?: number;
  waveSpeed?: number;
  color?: string;
  highlightColor?: string;
  className?: string;
  opacity?: number;
  children?: React.ReactNode;
}

export const MosaicWaves: React.FC<MosaicWavesProps> = ({
  tileSize = 38,
  gap = 6,
  waveSpeed = 0.022,
  color = "rgba(40, 45, 45, 0.45)",
  highlightColor = "#D9B874",
  className = "",
  opacity = 0.85,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000 });

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
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    let frame = 0;
    let animationId: number;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const step = tileSize + gap;
      const cols = Math.ceil(width / step) + 1;
      const rows = Math.ceil(height / step) + 1;
      const time = frame * waveSpeed;

      for (let r = -1; r <= rows + 1; r++) {
        const yBase = r * step;

        for (let c = -1; c <= cols + 1; c++) {
          const xBase = c * step;

          // Propagate wave diagonal & radial
          const distToCenter = Math.hypot(c - cols / 2, r - rows / 2);
          const wave =
            Math.sin(c * 0.28 + r * 0.22 + time) * 0.6 +
            Math.cos(distToCenter * 0.35 - time * 1.2) * 0.4;

          // Interactive mouse wave
          const distToMouse = Math.hypot(xBase - mouseRef.current.x, yBase - mouseRef.current.y);
          const mouseEffect = distToMouse < 180 ? (1 - distToMouse / 180) * 0.8 : 0;

          const totalTilt = wave + mouseEffect;
          const tiltAngle = totalTilt * 0.25; // radians
          const tileElevation = totalTilt * 8;

          // Draw shifting geometric mosaic tile
          const cx = xBase + tileSize / 2;
          const cy = yBase + tileSize / 2 - tileElevation;

          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(tiltAngle * 0.4);

          const w = tileSize;
          const h = tileSize;

          // Fill tile body with depth shading
          const brightness = Math.max(0, Math.min(1, (totalTilt + 1) / 2));
          if (brightness > 0.65) {
            ctx.fillStyle = `rgba(217, 184, 116, ${0.12 + (brightness - 0.65) * 0.75})`;
            ctx.strokeStyle = `rgba(217, 184, 116, ${0.35 + (brightness - 0.65) * 1.5})`;
          } else {
            ctx.fillStyle = color;
            ctx.strokeStyle = "rgba(244, 241, 233, 0.08)";
          }

          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.rect(-w / 2, -h / 2, w, h);
          ctx.fill();
          ctx.stroke();

          // Subtle specular glint line on top edge
          if (brightness > 0.5) {
            ctx.strokeStyle = highlightColor;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(-w / 2, -h / 2);
            ctx.lineTo(w / 2, -h / 2);
            ctx.stroke();
          }

          ctx.restore();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [tileSize, gap, waveSpeed, color, highlightColor, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Geometric Ambient Shimmer Glow - Fully spread edge-to-edge */}
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

export default MosaicWaves;
