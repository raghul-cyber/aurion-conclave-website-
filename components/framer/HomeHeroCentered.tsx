"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { BlurText } from "@/components/reactbits/text/BlurText";
import { CountUp } from "@/components/reactbits/text/CountUp";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

export const HomeHeroCentered: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center border-b border-surface-border overflow-hidden bg-gradient-to-b from-[#111415] via-[#0a0d0e] to-[#060708]">
      {/* 01: Spectral Drape from React Bits Pro (Glowing drape of dots folding in 3D) */}
      <SpectralDrape opacity={0.9} />

      {/* Centered Hero Content Container (Max width 1280px, strictly clamped typography) */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          {/* 02: Small Technical Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>AURION CONCLAVE</span>
            <span className="text-white/20">•</span>
            <span className="text-primary-muted">TECHNOLOGY PRODUCTS • CONSULTANCY • INNOVATION</span>
          </motion.div>

          {/* 03: Main Centered Headline (Controlled scale: max text-4xl mobile, text-5xl desktop) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1] text-center"
          >
            WE BUILD <br />
            <span className="text-accent">TECHNOLOGY</span> <br />
            FOR THE <br />
            <span className="text-primary-muted">REAL WORLD.</span>
          </motion.h1>

          {/* 04: Centered Supporting Paragraph (BlurText soft-focus reveal) */}
          <div className="max-w-2xl mx-auto text-center font-sans text-base sm:text-lg text-primary-muted leading-relaxed font-normal">
            <BlurText
              text="Aurion Conclave builds software, artificial intelligence, cloud infrastructure, automation, and technology products around real-world problems."
              delay={35}
              className="justify-center text-center"
            />
          </div>

          {/* 05: Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/capabilities">
              <SpecularButton variant="primary">
                <span>EXPLORE CAPABILITIES</span>
                <ArrowRight className="w-4 h-4" />
              </SpecularButton>
            </Link>

            <Link href="/contact">
              <SpecularButton variant="outline">
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </SpecularButton>
            </Link>
          </motion.div>

          {/* 06: Verified Institutional Telemetry */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-white/10 font-mono text-xs text-primary-muted"
          >
            <div className="flex items-center gap-2">
              <span className="text-accent font-bold text-sm">
                <CountUp to={164} duration={1.5} />
              </span>
              <span className="text-[10px] tracking-wider uppercase">SERVICES CATALOGED</span>
            </div>
            <div className="text-white/20">•</div>
            <div className="flex items-center gap-2">
              <span className="text-tech-teal font-bold text-sm">
                <CountUp to={12} duration={1.2} />
              </span>
              <span className="text-[10px] tracking-wider uppercase">AUTONOMOUS AGENTS</span>
            </div>
            <div className="text-white/20">•</div>
            <div className="flex items-center gap-2">
              <span className="text-success font-bold text-sm">
                <CountUp to={100} duration={1.8} />%
              </span>
              <span className="text-[10px] tracking-wider uppercase">SOURCE TESTED</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroCentered;
