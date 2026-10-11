"use client";

import React, { useEffect, useRef, useState } from "react";

export interface TypographicWallProps {
  words?: string[];
  rows?: number;
  cols?: number;
  decodeSpeed?: number;
  scrambleChars?: string;
  className?: string;
  color?: string;
  highlightColor?: string;
  opacity?: number;
  children?: React.ReactNode;
}

const DEFAULT_WORDS = [
  "AURION CONCLAVE",
  "AUTONOMOUS AGENTS",
  "DETERMINISTIC SYSTEMS",
  "COGNITIVE COMPUTING",
  "PRODUCTION CODE",
  "HIGH THROUGHPUT",
  "APPLIED MATHEMATICS",
  "ZERO COMPROMISE",
  "MISSION CRITICAL",
  "SYSTEM ARCHITECTURE",
  "KUBERNETES FABRIC",
  "OPENTELEMETRY",
];

const DEFAULT_SCRAMBLE = "0123456789ABCDEF!@#$%^&*<>[]{}~=+-_/\\|;:";

export const TypographicWall: React.FC<TypographicWallProps> = ({
  words = DEFAULT_WORDS,
  rows = 24,
  cols = 64,
  decodeSpeed = 45, // ms per tick
  scrambleChars = DEFAULT_SCRAMBLE,
  className = "",
  color = "rgba(244, 241, 233, 0.15)", // Subtle graphite-ivory glyphs
  highlightColor = "#D9B874", // Radiant gold for decoded words
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

    // Build the grid data structure
    interface GridCell {
      char: string;
      targetChar: string;
      isWord: boolean;
      wordIndex: number;
      revealed: boolean;
      revealTick: number;
    }

    const grid: GridCell[][] = [];

    // Pre-calculate word placement
    for (let r = 0; r < rows; r++) {
      grid[r] = [];
      const word = words[r % words.length];
      const startCol = Math.max(2, Math.floor((cols - word.length) * (0.15 + (r % 3) * 0.25)));

      for (let c = 0; c < cols; c++) {
        const isPartOfWord = c >= startCol && c < startCol + word.length;
        const targetChar = isPartOfWord ? word[c - startCol] : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];

        grid[r][c] = {
          char: scrambleChars[Math.floor(Math.random() * scrambleChars.length)],
          targetChar,
          isWord: isPartOfWord,
          wordIndex: r,
          revealed: false,
          revealTick: r * 8 + (c - startCol) * 2,
        };
      }
    }

    let frame = 0;
    let animationId: number;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const cellW = width / cols;
      const cellH = height / rows;
      const fontSize = Math.max(10, Math.min(14, cellH * 0.75));

      ctx.font = `bold ${fontSize}px "JetBrains Mono", ui-monospace, SFMono-Regular, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const currentCycle = Math.floor(frame / decodeSpeed);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r][c];
          const posX = c * cellW + cellW / 2;
          const posY = r * cellH + cellH / 2;

          // Check distance to mouse
          const distToMouse = Math.hypot(posX - mouseRef.current.x, posY - mouseRef.current.y);
          const isNearMouse = distToMouse < 90;

          // Decoding progress across wave
          const progress = (frame * 0.6) % ((rows + cols) * 4);
          const cellProgress = r * 3 + c;
          const isDecoded = cell.isWord && progress > cell.revealTick;

          if (isDecoded && !isNearMouse) {
            cell.char = cell.targetChar;
          } else if (frame % 3 === 0 || isNearMouse) {
            // Scramble glyph
            cell.char = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }

          if (isDecoded && cell.isWord) {
            ctx.fillStyle = highlightColor;
            ctx.shadowColor = highlightColor;
            ctx.shadowBlur = 8;
            ctx.fillText(cell.char, posX, posY);
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = isNearMouse ? "rgba(100, 142, 139, 0.75)" : color;
            ctx.fillText(cell.char, posX, posY);
          }
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
  }, [words, rows, cols, decodeSpeed, scrambleChars, color, highlightColor, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(217, 184, 116, 0.18), rgba(25, 30, 30, 0.1) 60%, transparent 85%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {children}
    </div>
  );
};

export default TypographicWall;
