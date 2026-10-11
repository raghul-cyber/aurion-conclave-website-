"use client";

import React, { useEffect, useRef, useState } from "react";

export interface GlyphOrbProps {
  size?: number;
  interactive?: boolean;
  draggable?: boolean;
  momentum?: number;
  clickStorm?: boolean;
  color?: string;
  glowColor?: string;
  className?: string;
}

export const GlyphOrb: React.FC<GlyphOrbProps> = ({
  size = 420,
  interactive = true,
  draggable = true,
  momentum = 0.5,
  clickStorm = true,
  color = "#D9B874", // Luminous champagne
  glowColor = "#648E8B", // Muted teal halo
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Rotation physics state
  const rotRef = useRef({
    angleY: 0,
    angleX: 0.25,
    velY: 0.008,
    velX: 0,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
    stormIntensity: 0,
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(size * dpr);
    canvas.height = Math.floor(size * dpr);
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const handlePointerDown = (e: PointerEvent) => {
      if (!draggable) return;
      rotRef.current.isDragging = true;
      rotRef.current.lastMouseX = e.clientX;
      rotRef.current.lastMouseY = e.clientY;
      rotRef.current.velY = 0;
      rotRef.current.velX = 0;

      if (clickStorm) {
        rotRef.current.stormIntensity = 1.0;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!rotRef.current.isDragging) return;
      const dx = e.clientX - rotRef.current.lastMouseX;
      const dy = e.clientY - rotRef.current.lastMouseY;
      rotRef.current.lastMouseX = e.clientX;
      rotRef.current.lastMouseY = e.clientY;

      rotRef.current.angleY += dx * 0.008;
      rotRef.current.angleX += dy * 0.008;

      rotRef.current.velY = dx * 0.004;
      rotRef.current.velX = dy * 0.004;
    };

    const handlePointerUp = () => {
      rotRef.current.isDragging = false;
    };

    if (interactive && draggable) {
      canvas.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }

    // Planetary ASCII character ramp from dark to intense solar illumination
    const SHADE_CHARS = [" ", ".", ":", "-", "=", "+", "*", "%", "#", "@"];
    const latBands = 34;
    const lonBands = 52;
    const radius = size * 0.38;
    const cx = size / 2;
    const cy = size / 2;

    let frame = 0;
    let animationId: number;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, size, size);

      // Physics update
      if (!rotRef.current.isDragging && !reducedMotion) {
        rotRef.current.angleY += rotRef.current.velY;
        rotRef.current.angleX += rotRef.current.velX;

        // Inertia decay towards default speed
        rotRef.current.velY += (0.006 - rotRef.current.velY) * (1 - momentum * 0.95);
        rotRef.current.velX += (0 - rotRef.current.velX) * (1 - momentum * 0.95);
      }

      if (rotRef.current.stormIntensity > 0) {
        rotRef.current.stormIntensity *= 0.92;
      }

      // Draw planetary atmospheric corona glow
      const coronaGrad = ctx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius * 1.25);
      coronaGrad.addColorStop(0, "rgba(217, 184, 116, 0.18)");
      coronaGrad.addColorStop(0.5, "rgba(100, 142, 139, 0.12)");
      coronaGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // Distant Sun vector (upper-right lighting direction)
      const sunX = 0.55;
      const sunY = -0.4;
      const sunZ = 0.72;

      ctx.font = `bold 10px "JetBrains Mono", ui-monospace, SFMono-Regular, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const thetaStep = Math.PI / latBands;
      const phiStep = (Math.PI * 2) / lonBands;

      // Render latitude bands of turning ASCII planet
      for (let i = 1; i < latBands; i++) {
        const theta = i * thetaStep; // 0 to PI
        const latNorm = (i / latBands - 0.5) * 2; // -1 to 1

        // Continental & atmospheric band density modulation
        const bandMod = Math.sin(theta * 5 + frame * 0.015) * 0.35;

        for (let j = 0; j < lonBands; j++) {
          const phi = j * phiStep + rotRef.current.angleY; // Rotate around Y axis

          // Sphere surface coordinates
          const x3d = radius * Math.sin(theta) * Math.sin(phi);
          const y3d = radius * Math.cos(theta);
          const z3d = radius * Math.sin(theta) * Math.cos(phi);

          // Apply X-tilt
          const rotY = y3d * Math.cos(rotRef.current.angleX) - z3d * Math.sin(rotRef.current.angleX);
          const rotZ = y3d * Math.sin(rotRef.current.angleX) + z3d * Math.cos(rotRef.current.angleX);

          // Cull backface vertices
          if (rotZ > 0) {
            // Normal at surface point
            const nx = x3d / radius;
            const ny = y3d / radius;
            const nz = z3d / radius;

            // Lambertian lighting dot product with Sun vector
            const illumination = Math.max(0, nx * sunX + ny * sunY + nz * sunZ + bandMod);
            const stormBoost = rotRef.current.stormIntensity * (Math.random() - 0.5) * 0.5;
            const finalLuminance = Math.max(0, Math.min(1, illumination + stormBoost));

            const charIndex = Math.floor(finalLuminance * (SHADE_CHARS.length - 1));
            const char = SHADE_CHARS[charIndex];

            if (char !== " ") {
              const screenX = cx + x3d;
              const screenY = cy + rotY;

              const isDayCrest = charIndex >= SHADE_CHARS.length - 3;
              if (isDayCrest) {
                ctx.fillStyle = color;
                ctx.shadowColor = color;
                ctx.shadowBlur = 6;
              } else {
                ctx.fillStyle = glowColor;
                ctx.shadowBlur = 0;
              }

              ctx.globalAlpha = 0.3 + finalLuminance * 0.7;
              ctx.fillText(char, screenX, screenY);
            }
          }
        }
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1.0;
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      if (interactive && draggable) {
        canvas.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      }
    };
  }, [size, interactive, draggable, momentum, clickStorm, color, glowColor, reducedMotion]);

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="block cursor-grab active:cursor-grabbing rounded-full"
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
};

export default GlyphOrb;
