"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ScrollRevealProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  text,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.6"],
  });

  const content = text || children;

  if (typeof content === "string") {
    const words = content.split(" ");
    return (
      <div ref={containerRef} className={`flex flex-wrap ${className}`}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;
          return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
        })}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity: scrollYProgress }}
      className={className}
    >
      {content}
    </motion.div>
  );
};

const Word: React.FC<{
  word: string;
  progress: any;
  range: [number, number];
}> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="inline-block mr-2">
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
};

export default ScrollReveal;
