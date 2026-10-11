"use client";

import React, { useEffect, useRef, useState } from "react";

export interface GlyphTideProps {
  interactive?: boolean;
  cursorRadius?: number;
  cursorStrength?: number;
  wake?: number;
  wakeLength?: number;
  rippleSize?: number;
  clickRipples?: boolean;
  seed?: number;
  paused?: boolean;
  dpr?: number;
  color?: string;
  accentColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const GlyphTide: React.FC<GlyphTideProps> = ({
  interactive = true,
  cursorRadius = 80,
  cursorStrength = 1,
  wake = 1,
  wakeLength = 2,
  rippleSize = 1,
  clickRipples = true,
  seed = 0,
  paused = false,
  dpr = 2,
  color = "#D9B874",
  accentColor = "#648E8B",
  className = "",
  style,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000, isDown: false });
  const ripplesRef = useRef<{ x: number; y: number; r: number; maxR: number; alpha: number }[]>([]);
  const trailRef = useRef<{ x: number; y: number; time: number }[]>([]);

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
    const actualDpr = Math.min(window.devicePixelRatio || 1, dpr);

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 320);
      canvas.width = Math.floor(width * actualDpr);
      canvas.height = Math.floor(height * actualDpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(actualDpr, actualDpr);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(container);

    const handlePointerMove = (e: PointerEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current.x = x;
      mouseRef.current.y = y;

      if (wake > 0) {
        trailRef.current.push({ x, y, time: performance.now() });
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (!interactive) return;
      mouseRef.current.isDown = true;
      if (clickRipples) {
        const rect = container.getBoundingClientRect();
        ripplesRef.current.push({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          r: 2,
          maxR: 160 * rippleSize,
          alpha: 1.0,
        });
      }
    };

    const handlePointerUp = () => {
      mouseRef.current.isDown = false;
    };

    const handlePointerLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.isDown = false;
    };

    if (interactive) {
      container.addEventListener("pointermove", handlePointerMove);
      container.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("pointerup", handlePointerUp);
      container.addEventListener("pointerleave", handlePointerLeave);
    }

    const GLYPH_SET = [" ", ".", ":", "~", "≈", "≋", "░", "▒", "▓"];
    const CELL_SIZE = 16;

    let frame = 0;
    let animationId: number;

    const render = () => {
      if (!paused) frame++;
      ctx.clearRect(0, 0, width, height);

      const now = performance.now();
      // Clean up old wake trails
      trailRef.current = trailRef.current.filter((p) => now - p.time < wakeLength * 1000);

      // Expand click ripples
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const rip = ripplesRef.current[i];
        rip.r += 3.2 * rippleSize;
        rip.alpha = Math.max(0, 1 - rip.r / rip.maxR);
        if (rip.alpha <= 0) {
          ripplesRef.current.splice(i, 1);
        }
      }

      const cols = Math.ceil(width / CELL_SIZE);
      const rows = Math.ceil(height / CELL_SIZE);
      const time = frame * 0.02 + seed;

      // Tidal flood level (sinusoidal ebb and flow cycle)
      const tideHeight = height * 0.5 + Math.sin(time * 0.5) * (height * 0.28);

      ctx.font = `bold ${CELL_SIZE * 0.85}px "JetBrains Mono", ui-monospace, SFMono-Regular, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let r = 0; r < rows; r++) {
        const yPos = r * CELL_SIZE + CELL_SIZE / 2;

        for (let c = 0; c < cols; c++) {
          const xPos = c * CELL_SIZE + CELL_SIZE / 2;

          // Water surface shoreline boundary with noise swell
          const shoreNoise = Math.sin(c * 0.22 + time * 0.8) * 45 + Math.cos(c * 0.45 - time * 0.5) * 25;
          const currentTideLine = tideHeight + shoreNoise;

          // Depth of water at this cell (positive = flooded, negative = dry shore)
          let depth = yPos - currentTideLine;

          // Add wake influence
          for (let k = 0; k < trailRef.current.length; k++) {
            const p = trailRef.current[k];
            const dist = Math.hypot(xPos - p.x, yPos - p.y);
            if (dist < cursorRadius) {
              const age = (now - p.time) / (wakeLength * 1000);
              const wakePower = (1 - dist / cursorRadius) * (1 - age) * 50 * cursorStrength;
              depth += wakePower;
            }
          }

          // Add click ripples influence
          for (let rip of ripplesRef.current) {
            const dist = Math.hypot(xPos - rip.x, yPos - rip.y);
            if (Math.abs(dist - rip.r) < 22) {
              depth += 40 * rip.alpha;
            }
          }

          if (depth > -25) {
            // Water/foam present: map depth to tide glyphs
            const normalizedDepth = Math.max(0, Math.min(1, (depth + 25) / (height * 0.6)));
            const glyphIdx = Math.min(GLYPH_SET.length - 1, Math.floor(normalizedDepth * GLYPH_SET.length));
            const char = GLYPH_SET[glyphIdx];

            if (char !== " ") {
              const isFoam = glyphIdx >= 2 && glyphIdx <= 5;
              ctx.fillStyle = isFoam ? accentColor : color;
              ctx.globalAlpha = 0.2 + normalizedDepth * 0.7;
              ctx.fillText(char, xPos, yPos);
            }
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (interactive) {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointerup", handlePointerUp);
        container.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, [interactive, cursorRadius, cursorStrength, wake, wakeLength, rippleSize, clickRipples, seed, paused, dpr, color, accentColor, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0 ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Glyph Tide Ambient Tidal Glow - Fully spread edge-to-edge */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 130% 90% at 50% 80%, rgba(100, 142, 139, 0.22), rgba(217, 184, 116, 0.12) 55%, transparent 85%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {children}
    </div>
  );
};

export default GlyphTide;
