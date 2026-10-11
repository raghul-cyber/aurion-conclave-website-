"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ScrollReveal } from "@/components/reactbits/text/ScrollReveal";

export const HomeEditorialStatement: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.2"],
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [25, -15]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#060708] border-b border-warm-border overflow-hidden"
    >
      {/* Background subtle strands */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent w-[200%]"
            style={{ top: `${30 + i * 25}%` }}
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Subtle Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>02 / EDITORIAL THESIS</span>
          </div>

          {/* Controlled Editorial Statement (Max text-4xl mobile, text-5xl desktop) */}
          <motion.div style={{ y: yMove }} className="space-y-1">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]">
              PROBLEMS BECOME <br />
              <span className="text-accent">ROBUST SYSTEMS.</span>
            </h2>
          </motion.div>

          {/* Centered ScrollReveal Philosophy Text */}
          <div className="max-w-xl mx-auto pt-2 text-center">
            <ScrollReveal
              text="We work across technology consulting, software engineering, artificial intelligence, cloud infrastructure, and product development."
              className="justify-center text-center text-sm sm:text-base text-primary-muted font-normal leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEditorialStatement;
