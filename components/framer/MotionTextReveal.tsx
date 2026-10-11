"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MotionTextRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
  scrollLinked?: boolean;
  delay?: number;
}

export const MotionTextReveal: React.FC<MotionTextRevealProps> = ({
  text,
  className = "",
  highlightWords = [],
  highlightClass = "text-accent",
  scrollLinked = false,
  delay = 0.2,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.4"],
  });

  if (scrollLinked) {
    return (
      <h2 ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;
          const isHighlight = highlightWords.includes(word.replace(/[^a-zA-Z0-9]/g, ""));

          return (
            <WordScrollItem
              key={i}
              word={word}
              progress={scrollYProgress}
              range={[start, end]}
              isHighlight={isHighlight}
              highlightClass={highlightClass}
            />
          );
        })}
      </h2>
    );
  }

  // Entrance-Choreographed Masked Reveal
  return (
    <h1 ref={containerRef} className={`flex flex-wrap justify-center overflow-hidden ${className}`}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.includes(word.replace(/[^a-zA-Z0-9]/g, ""));

        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.26em] mb-1">
            <motion.span
              className={`inline-block ${isHighlight ? highlightClass : "text-primary"}`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: delay + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
};

const WordScrollItem: React.FC<{
  word: string;
  progress: any;
  range: [number, number];
  isHighlight: boolean;
  highlightClass: string;
}> = ({ word, progress, range, isHighlight, highlightClass }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [12, 0]);

  return (
    <span className="inline-block mr-[0.28em] mb-1 overflow-hidden">
      <motion.span
        style={{ opacity, y }}
        className={`inline-block ${isHighlight ? highlightClass : "text-primary"}`}
      >
        {word}
      </motion.span>
    </span>
  );
};
