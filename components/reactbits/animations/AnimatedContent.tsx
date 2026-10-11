"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 30,
  direction = "vertical",
  reverse = false,
  duration = 0.5,
  delay = 0,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px 0px" });

  const axis = direction === "vertical" ? "y" : "x";
  const offset = reverse ? -distance : distance;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        [axis]: offset,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              [axis]: 0,
            }
          : {
              opacity: 0,
              [axis]: offset,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
