"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export type BackgroundVariant =
  | "home"
  | "services"
  | "ai"
  | "software"
  | "cloud"
  | "ml"
  | "data"
  | "automation"
  | "security"
  | "engineering"
  | "company"
  | "contact";

interface AmbientBackgroundProps {
  variant: BackgroundVariant;
  className?: string;
}

export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({
  variant,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;

    // DATA INITIALIZATION BASED ON VARIANT
    // 1. NEURAL ARCHITECTURE FOR AI
    const neuralNodes = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      pulse: Math.random() * Math.PI,
    }));

    // 2. MODULAR BLOCKS FOR SOFTWARE
    const blocks = Array.from({ length: 14 }, (_, i) => ({
      x: (width / 5) * (i % 5) + Math.random() * 40,
      y: (height / 3) * Math.floor(i / 5) + Math.random() * 40,
      w: 80 + Math.random() * 100,
      h: 40 + Math.random() * 50,
      alpha: 0.08 + Math.random() * 0.12,
    }));

    // 3. CLOUD TOPOLOGY NODES
    const cloudNodes = Array.from({ length: 20 }, (_, i) => ({
      x: (width * 0.15) + (i % 5) * (width * 0.18) + (Math.random() - 0.5) * 60,
      y: (height * 0.2) + Math.floor(i / 5) * (height * 0.22) + (Math.random() - 0.5) * 40,
      r: 3 + Math.random() * 3,
      label: ["US-EAST-1", "EU-WEST-1", "AP-SOUTH-1", "EDGE-LHR", "K8S-CLUSTER"][i % 5],
    }));

    // 4. ML PIPELINE PARTICLES
    const mlParticles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.5 + Math.random() * 0.8,
      size: 1 + Math.random() * 2,
    }));

    // 5. DATA STREAMS (VERTICAL & HORIZONTAL LINES)
    const streamLines = Array.from({ length: 24 }, (_, i) => ({
      x: (width / 24) * i,
      y: Math.random() * height,
      speed: 0.4 + Math.random() * 0.8,
      len: 40 + Math.random() * 90,
      alpha: 0.05 + Math.random() * 0.08,
    }));

    // 6. PROCESS LOOPS (AUTOMATION)
    const loops = [
      { cx: width * 0.3, cy: height * 0.5, r: 90, speed: 0.008 },
      { cx: width * 0.5, cy: height * 0.45, r: 130, speed: -0.006 },
      { cx: width * 0.7, cy: height * 0.55, r: 100, speed: 0.009 },
    ];

    // 7. SECURITY PERIMETER
    const secNodes = Array.from({ length: 18 }, (_, i) => {
      const angle = (i / 18) * Math.PI * 2;
      return {
        baseX: width * 0.5 + Math.cos(angle) * (Math.min(width, height) * 0.32),
        baseY: height * 0.5 + Math.sin(angle) * (Math.min(width, height) * 0.32),
        angle,
      };
    });

    const draw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      if (variant === "ai") {
        // NEURAL LATTICE
        ctx.strokeStyle = "rgba(201, 148, 62, 0.09)";
        ctx.fillStyle = "rgba(201, 148, 62, 0.4)";
        for (let i = 0; i < neuralNodes.length; i++) {
          const n = neuralNodes[i];
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          ctx.beginPath();
          ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
          ctx.fill();

          for (let j = i + 1; j < neuralNodes.length; j++) {
            const m = neuralNodes[j];
            const dist = Math.hypot(n.x - m.x, n.y - m.y);
            if (dist < 180) {
              ctx.lineWidth = 1 - dist / 180;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(m.x, m.y);
              ctx.stroke();
            }
          }
        }
      } else if (variant === "software") {
        // ARCHITECTURAL MODULAR BLOCKS
        ctx.strokeStyle = "rgba(243, 240, 232, 0.08)";
        ctx.lineWidth = 1;
        blocks.forEach((b, idx) => {
          const shiftY = Math.sin(time * 0.5 + idx) * 8;
          ctx.fillStyle = `rgba(21, 26, 27, ${b.alpha})`;
          ctx.fillRect(b.x, b.y + shiftY, b.w, b.h);
          ctx.strokeRect(b.x, b.y + shiftY, b.w, b.h);
          // Small corner tick
          ctx.fillStyle = "rgba(201, 148, 62, 0.3)";
          ctx.fillRect(b.x, b.y + shiftY, 4, 4);
        });
      } else if (variant === "cloud") {
        // CLOUD INFRASTRUCTURE TOPOLOGY
        ctx.strokeStyle = "rgba(118, 191, 185, 0.12)";
        ctx.lineWidth = 1;
        for (let i = 0; i < cloudNodes.length; i++) {
          for (let j = i + 1; j < cloudNodes.length; j++) {
            const d = Math.hypot(cloudNodes[i].x - cloudNodes[j].x, cloudNodes[i].y - cloudNodes[j].y);
            if (d < 220) {
              ctx.beginPath();
              ctx.moveTo(cloudNodes[i].x, cloudNodes[i].y);
              ctx.lineTo(cloudNodes[j].x, cloudNodes[j].y);
              ctx.stroke();
            }
          }
        }
        cloudNodes.forEach((n) => {
          ctx.fillStyle = "rgba(118, 191, 185, 0.5)";
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (variant === "ml") {
        // ML DATA PIPELINE PARTICLES
        ctx.fillStyle = "rgba(201, 148, 62, 0.4)";
        mlParticles.forEach((p) => {
          p.x += p.speed;
          if (p.x > width) p.x = 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
        // Horizontal guide tracks
        ctx.strokeStyle = "rgba(243, 240, 232, 0.04)";
        ctx.lineWidth = 1;
        for (let y = height * 0.2; y < height; y += height * 0.15) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      } else if (variant === "data") {
        // SUBTLE FLOWING DATA STREAMS
        ctx.strokeStyle = "rgba(118, 191, 185, 0.15)";
        streamLines.forEach((s) => {
          s.y += s.speed;
          if (s.y > height) s.y = -s.len;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x, s.y + s.len);
          ctx.stroke();
        });
      } else if (variant === "automation") {
        // PROCESS LOOPS
        ctx.strokeStyle = "rgba(201, 148, 62, 0.12)";
        ctx.lineWidth = 1.2;
        loops.forEach((l, idx) => {
          ctx.beginPath();
          ctx.arc(l.cx, l.cy, l.r, 0, Math.PI * 2);
          ctx.stroke();

          // Orbiting marker
          const angle = time * l.speed * 8;
          const mx = l.cx + Math.cos(angle) * l.r;
          const my = l.cy + Math.sin(angle) * l.r;
          ctx.fillStyle = "rgba(201, 148, 62, 0.6)";
          ctx.beginPath();
          ctx.arc(mx, my, 3, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (variant === "security") {
        // CONCENTRIC PERIMETER TOPOLOGY
        const cx = width * 0.5;
        const cy = height * 0.5;
        const baseR = Math.min(width, height) * 0.32;

        ctx.strokeStyle = "rgba(243, 240, 232, 0.06)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy, baseR * 0.65, 0, Math.PI * 2);
        ctx.stroke();

        secNodes.forEach((node, i) => {
          const shift = Math.sin(time + i) * 6;
          const px = cx + Math.cos(node.angle) * (baseR + shift);
          const py = cy + Math.sin(node.angle) * (baseR + shift);

          ctx.fillStyle = "rgba(201, 148, 62, 0.4)";
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = "rgba(201, 148, 62, 0.08)";
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(px, py);
          ctx.stroke();
        });
      } else if (variant === "company") {
        // SLOW ORBITAL GEOMETRY
        const cx = width * 0.5;
        const cy = height * 0.5;
        ctx.strokeStyle = "rgba(201, 148, 62, 0.08)";
        ctx.lineWidth = 1;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 0.02);
        ctx.strokeRect(-180, -180, 360, 360);
        ctx.rotate(Math.PI / 4);
        ctx.strokeRect(-220, -220, 440, 440);
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [variant]);

  // SERVICES VARIANT: Technical Blueprint Typography
  if (variant === "services") {
    const blueprintWords = [
      "AI & INTELLIGENT SYSTEMS",
      "CLOUD ARCHITECTURE",
      "SOFTWARE ENGINEERING",
      "MACHINE LEARNING",
      "DATA & ANALYTICS",
      "WORKFLOW AUTOMATION",
      "CYBERSECURITY",
      "DEVOPS & SRE",
      "PLATFORM INFRASTRUCTURE",
    ];

    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
        <div className="absolute inset-0 bg-[#060708]/92 z-10" />
        <div className="relative w-full h-full flex flex-col justify-around opacity-15">
          {blueprintWords.map((word, idx) => (
            <motion.div
              key={idx}
              className="whitespace-nowrap font-mono text-3xl sm:text-6xl lg:text-7xl font-bold tracking-widest text-primary-muted/20"
              animate={{
                x: idx % 2 === 0 ? ["0%", "-40%"] : ["-40%", "0%"],
              }}
              transition={{
                duration: 90 + idx * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {word} • {word} • {word}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
    </div>
  );
};
