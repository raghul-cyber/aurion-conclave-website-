"use client";

import React, { useEffect, useRef, useState } from "react";

export interface AsciiWavesProps {
  characters?: string;
  color?: string;
  accentColor?: string;
  waveTension?: number;
  waveTwist?: number;
  noiseScale?: number;
  elementSize?: number;
  hasCursorInteraction?: boolean;
  className?: string;
  opacity?: number;
  children?: React.ReactNode;
}

export const AsciiWaves: React.FC<AsciiWavesProps> = ({
  characters = " .:-+*=%@#",
  color = "#D9B874",
  accentColor = "#648E8B",
  waveTension = 1.0,
  waveTwist = 0.8,
  noiseScale = 0.045,
  elementSize = 14,
  hasCursorInteraction = true,
  className = "",
  opacity = 0.85,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000, vx: 0, vy: 0 });

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
      if (!hasCursorInteraction) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    if (hasCursorInteraction) {
      container.addEventListener("pointermove", handlePointerMove);
      container.addEventListener("pointerleave", handlePointerLeave);
    }

    let frame = 0;
    let animationId: number;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const cellSize = elementSize;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      ctx.font = `bold ${cellSize * 0.9}px "JetBrains Mono", ui-monospace, SFMono-Regular, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const time = frame * 0.025;
      const charCount = characters.length;

      for (let r = 0; r < rows; r++) {
        const yPos = r * cellSize + cellSize / 2;

        for (let c = 0; c < cols; c++) {
          const xPos = c * cellSize + cellSize / 2;

          // Multi-frequency directional wave calculation
          const wave1 = Math.sin(c * noiseScale * waveTension + time) * Math.cos(r * noiseScale * waveTwist + time * 0.6);
          const wave2 = Math.cos((c + r) * noiseScale * 0.7 - time * 0.8) * 0.5;
          const wave3 = Math.sin(Math.hypot(c - cols / 2, r - rows / 2) * noiseScale * 1.5 - time) * 0.35;

          let waveSum = (wave1 + wave2 + wave3 + 1.85) / 3.7; // Normalize roughly 0 to 1

          // Pointer interaction ripple
          if (hasCursorInteraction && mouseRef.current.x > 0) {
            const dist = Math.hypot(xPos - mouseRef.current.x, yPos - mouseRef.current.y);
            if (dist < 140) {
              const push = (1 - dist / 140) * 0.55;
              waveSum = Math.min(1, waveSum + push);
            }
          }

          waveSum = Math.max(0, Math.min(0.999, waveSum));

          // Map height to ASCII density character index
          const charIndex = Math.floor(waveSum * charCount);
          const char = characters[charIndex];

          if (char !== " ") {
            const isCrest = charIndex >= charCount - 3;
            ctx.fillStyle = isCrest ? accentColor : color;
            ctx.globalAlpha = 0.25 + waveSum * 0.65;
            ctx.fillText(char, xPos, yPos);
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
      if (hasCursorInteraction) {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, [characters, color, accentColor, waveTension, waveTwist, noiseScale, elementSize, hasCursorInteraction, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* ASCII Ambient Wave Glow - Fully spread edge-to-edge */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 130% 90% at 50% 25%, rgba(100, 142, 139, 0.22), rgba(217, 184, 116, 0.14) 55%, transparent 85%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {children}
    </div>
  );
};

export default AsciiWaves;
