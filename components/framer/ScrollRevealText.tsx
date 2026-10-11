"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
  lines: string[];
  highlightLineIndex?: number;
  highlightClass?: string;
  className?: string;
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  lines,
  highlightLineIndex = 2,
  highlightClass = "text-accent",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center 0.45"],
  });

  // Slow upward scroll movement
  const y = useTransform(scrollYProgress, [0, 1], [40, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.3, 0.9, 1]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, opacity }} className="space-y-2 sm:space-y-4">
        {lines.map((line, idx) => {
          const isHighlight = idx === highlightLineIndex;
          return (
            <div
              key={idx}
              className={`font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-center leading-[0.95] ${
                isHighlight ? highlightClass : "text-primary"
              }`}
            >
              {line}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
