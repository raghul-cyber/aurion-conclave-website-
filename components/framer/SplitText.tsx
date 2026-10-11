"use client";

import React from "react";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0.1,
  stagger = 0.04,
  highlightWords = [],
  highlightClass = "text-accent",
}) => {
  const words = text.split(" ");

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.includes(word.replace(/[^a-zA-Z0-9]/g, ""));
        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.28em] align-top">
            <motion.span
              className={`inline-block ${isHighlight ? highlightClass : ""}`}
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.85,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};
