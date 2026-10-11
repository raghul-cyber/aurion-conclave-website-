"use client";

import React, { useEffect, useRef, useState } from "react";

export interface ContourTideProps {
  interactive?: boolean;
  particleCount?: number;
  waveSpeed?: number;
  color?: string;
  accentColor?: string;
  className?: string;
  opacity?: number;
  children?: React.ReactNode;
}

export const ContourTide: React.FC<ContourTideProps> = ({
  interactive = true,
  particleCount = 180,
  waveSpeed = 0.02,
  color = "#D9B874",
  accentColor = "#648E8B",
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
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    if (interactive) {
      container.addEventListener("pointermove", handlePointerMove);
      container.addEventListener("pointerleave", handlePointerLeave);
    }

    // Initialize ocean tide particle mesh
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      baseY: Math.random(),
      radius: 1.2 + Math.random() * 2.4,
      phase: Math.random() * Math.PI * 2,
      speedMultiplier: 0.7 + Math.random() * 0.6,
      lane: Math.floor(Math.random() * 8),
    }));

    let frame = 0;
    let animationId: number;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const time = frame * waveSpeed;

      // Draw rolling oceanic contour lines across full height and width
      const laneCount = 14;
      for (let l = 0; l < laneCount; l++) {
        const laneYBase = height * 0.04 + (height * 0.92 * (l / (laneCount - 1)));
        ctx.beginPath();

        for (let x = -40; x <= width + 40; x += 14) {
          const normX = (x + 40) / (width + 80);
          const oceanSwell =
            Math.sin(normX * Math.PI * 3.5 + time * 1.2 + l * 0.6) * (24 + l * 6) +
            Math.cos(normX * Math.PI * 5.0 - time * 0.8) * 12;

          let y = laneYBase + oceanSwell;

          // Pointer tide displacement
          if (interactive && mouseRef.current.x > 0) {
            const dist = Math.hypot(x - mouseRef.current.x, y - mouseRef.current.y);
            if (dist < 160) {
              const repel = (1 - dist / 160) * 40;
              y += Math.sin(time * 3) * repel;
            }
          }

          if (x === -40) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const alpha = 0.16 + (l / laneCount) * 0.26;
        ctx.strokeStyle = l % 2 === 0 ? `rgba(217, 184, 116, ${alpha})` : `rgba(100, 142, 139, ${alpha * 1.3})`;
        ctx.lineWidth = 1.3;
        ctx.stroke();
      }

      // Draw rolling ocean particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += 0.0008 * p.speedMultiplier;
        if (p.x > 1) p.x = 0;

        const px = p.x * width;
        const laneY = height * 0.25 + (height * 0.55 * (p.lane / (laneCount - 1)));
        const swell =
          Math.sin(p.x * Math.PI * 3.5 + time * 1.2 + p.lane * 0.6) * (24 + p.lane * 6) +
          Math.cos(p.x * Math.PI * 5.0 - time * 0.8) * 12;

        let py = laneY + swell + Math.sin(time * 2 + p.phase) * 6;

        if (interactive && mouseRef.current.x > 0) {
          const dist = Math.hypot(px - mouseRef.current.x, py - mouseRef.current.y);
          if (dist < 120) {
            const angle = Math.atan2(py - mouseRef.current.y, px - mouseRef.current.x);
            const force = (1 - dist / 120) * 35;
            py += Math.sin(angle) * force;
          }
        }

        const glow = Math.sin(time * 3 + p.phase) * 0.35 + 0.65;
        const isAccent = i % 4 === 0;

        ctx.fillStyle = isAccent ? accentColor : color;
        ctx.shadowColor = isAccent ? accentColor : color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = 0.65 * glow;

        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (interactive) {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, [interactive, particleCount, waveSpeed, color, accentColor, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Oceanic Ambient Swell Glow - Fully spread edge-to-edge */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 130% 95% at 50% 50%, rgba(217, 184, 116, 0.22), rgba(100, 142, 139, 0.14) 55%, transparent 85%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {children}
    </div>
  );
};

export default ContourTide;
