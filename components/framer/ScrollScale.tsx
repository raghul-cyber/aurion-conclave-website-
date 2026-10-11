"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollScaleProps {
  children: React.ReactNode;
  scaleFrom?: number;
  scaleTo?: number;
  className?: string;
}

export const ScrollScale: React.FC<ScrollScaleProps> = ({
  children,
  scaleFrom = 0.97,
  scaleTo = 1.04,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleFrom, 1, scaleTo]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div style={{ scale, opacity }}>{children}</motion.div>
    </div>
  );
};
