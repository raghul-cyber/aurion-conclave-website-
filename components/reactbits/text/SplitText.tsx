"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "words" | "chars";
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 30,
  duration = 0.4,
  tag = "p",
  splitBy = "words",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const units = splitBy === "words" ? text.split(" ") : text.split("");

  const Tag = tag as any;

  return (
    <Tag ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: "100%" }}
            animate={isInView ? { opacity: 1, y: "0%" } : { opacity: 0, y: "100%" }}
            transition={{
              duration,
              delay: (i * delay) / 1000,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {unit === " " ? "\u00A0" : unit}
            {splitBy === "words" && i < units.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
