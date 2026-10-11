"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HomeEditorialStatement: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.2"],
  });

  // Words slowly move upward as user scrolls
  const yMove = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const opacityP = useTransform(scrollYProgress, [0.1, 0.45], [0.3, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 sm:py-44 bg-[#060708] border-b border-surface-border overflow-hidden"
    >
      {/* Subtle Moving Background Technical Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent w-[200%]"
            style={{ top: `${24 + i * 20}%` }}
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 35 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Subtle Eyebrow */}
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-surface border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>02 / EDITORIAL THESIS</span>
          </div>

          {/* Large Centered Editorial Statement with Scroll-Linked Upward Motion */}
          <motion.div style={{ y: yMove }} className="space-y-2">
            <div className="font-sans text-5xl sm:text-7xl lg:text-9xl font-extrabold text-primary tracking-tighter leading-[0.92]">
              PROBLEMS
            </div>
            <div className="font-sans text-5xl sm:text-7xl lg:text-9xl font-extrabold text-primary tracking-tighter leading-[0.92]">
              BECOME
            </div>
            <div className="font-sans text-5xl sm:text-7xl lg:text-9xl font-extrabold text-accent tracking-tighter leading-[0.92]">
              SYSTEMS.
            </div>
          </motion.div>

          {/* Centered Small Supporting Paragraph */}
          <motion.p
            style={{ opacity: opacityP }}
            className="font-sans text-base sm:text-xl text-primary-muted max-w-2xl mx-auto leading-relaxed font-normal pt-4"
          >
            We work across technology consulting, software engineering, artificial intelligence,
            cloud infrastructure and product development.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
