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
  children?: React.ReactNode;
  opacity?: number;
}

export const PageBackground: React.FC<PageBackgroundProps> = ({
  preset = "web-threads",
  className = "",
  children,
  opacity = 0.22,
}) => {
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
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      switch (preset) {
        case "web-threads": {
          // Connected intelligence nodes & threads
          ctx.strokeStyle = "rgba(195, 145, 66, 0.16)";
          ctx.fillStyle = "rgba(217, 184, 116, 0.24)";
          const points = 24;
          for (let i = 0; i < points; i++) {
            const x = (width / points) * i + Math.sin(frame * 0.008 + i) * 30;
            const y = height * 0.4 + Math.cos(frame * 0.007 + i * 1.5) * 80;
            ctx.beginPath();
            ctx.arc(x, y, 2.2, 0, Math.PI * 2);
            ctx.fill();

            if (i > 0) {
              const prevX = (width / points) * (i - 1) + Math.sin(frame * 0.008 + (i - 1)) * 30;
              const prevY = height * 0.4 + Math.cos(frame * 0.007 + (i - 1) * 1.5) * 80;
              ctx.beginPath();
              ctx.moveTo(prevX, prevY);
              ctx.lineTo(x, y);
              ctx.stroke();
            }
          }
          break;
        }

        case "pattern-waves":
        case "line-waves": {
          // Harmonic wave lines
          ctx.strokeStyle = "rgba(100, 142, 139, 0.2)";
          ctx.lineWidth = 1;
          for (let row = 0; row < 5; row++) {
            ctx.beginPath();
            const yBase = height * 0.35 + row * 45;
            for (let x = 0; x < width; x += 20) {
              const y = yBase + Math.sin(x * 0.006 + frame * 0.015 + row) * 22;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
          break;
        }

        case "topography": {
          // Contour lines representing operational environments
          ctx.strokeStyle = "rgba(217, 184, 116, 0.15)";
          ctx.lineWidth = 0.8;
          for (let r = 50; r < Math.max(width, height) * 0.7; r += 60) {
            ctx.beginPath();
            const cx = width * 0.7;
            const cy = height * 0.5;
            for (let angle = 0; angle <= Math.PI * 2; angle += 0.1) {
              const rad = r + Math.sin(angle * 4 + frame * 0.008) * 15;
              const px = cx + Math.cos(angle) * rad;
              const py = cy + Math.sin(angle) * rad * 0.6;
              if (angle === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.stroke();
          }
          break;
        }

        case "scanner":
        case "grid-scan": {
          // Horizontal precision scan line across coordinate grid
          const scanY = (frame * 1.2) % height;
          ctx.strokeStyle = "rgba(195, 145, 66, 0.35)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(0, scanY);
          ctx.lineTo(width, scanY);
          ctx.stroke();

          // Subdued grid backdrop
          ctx.strokeStyle = "rgba(244, 241, 233, 0.03)";
          ctx.lineWidth = 1;
          const gridSize = 48;
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
          break;
        }

        case "dark-veil":
        case "soft-aurora": {
          // Atmospheric subtle gradient light curtain
          const grad = ctx.createRadialGradient(
            width * 0.5,
            height * 0.25,
            100,
            width * 0.5,
            height * 0.4,
            width * 0.6
          );
          grad.addColorStop(0, "rgba(195, 145, 66, 0.12)");
          grad.addColorStop(0.5, "rgba(100, 142, 139, 0.06)");
          grad.addColorStop(1, "rgba(25, 30, 30, 0)");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);
          break;
        }

        case "floating-lines":
        case "beams": {
          // Perspective parallel beams
          ctx.strokeStyle = "rgba(195, 145, 66, 0.18)";
          ctx.lineWidth = 1;
          const cx = width * 0.5;
          const cy = height * 0.2;
          for (let i = -10; i <= 10; i++) {
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            const targetX = cx + i * (width / 16) + Math.sin(frame * 0.005) * 20;
            ctx.lineTo(targetX, height);
            ctx.stroke();
          }
          break;
        }

        case "radar": {
          // Security radar sweep
          const cx = width * 0.8;
          const cy = height * 0.4;
          const radius = Math.min(width, height) * 0.35;
          ctx.strokeStyle = "rgba(100, 142, 139, 0.18)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(cx, cy, radius * 0.5, 0, Math.PI * 2);
          ctx.stroke();

          const angle = (frame * 0.02) % (Math.PI * 2);
          ctx.strokeStyle = "rgba(195, 145, 66, 0.4)";
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
          ctx.stroke();
          break;
        }

        case "dot-field":
        case "particles":
        default: {
          // Fine ambient data point constellation
          ctx.fillStyle = "rgba(217, 184, 116, 0.25)";
          for (let i = 0; i < 35; i++) {
            const x = ((i * 137.5) % width) + Math.sin(frame * 0.006 + i) * 15;
            const y = ((i * 224.3) % height) + Math.cos(frame * 0.005 + i) * 15;
            ctx.beginPath();
            ctx.arc(x, y, 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [preset, reducedMotion]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Background Canvas Layer */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none -z-10"
        style={{ opacity }}
        aria-hidden="true"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Foreground Content */}
      {children}
    </div>
  );
};
