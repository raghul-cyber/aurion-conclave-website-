"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none h-[2.5px] bg-transparent">
      {/* Background track hint */}
      <div className="absolute inset-0 bg-surface-border/20 backdrop-blur-xs" />

      {/* Spring-smoothed progress bar */}
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-accent/70 via-accent to-accent-light shadow-[0_0_12px_rgba(201,148,62,0.85)]"
        style={{ scaleX }}
      />
    </div>
  );
};
