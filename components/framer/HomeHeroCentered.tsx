"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroNetworkBackground } from "@/components/framer/HeroNetworkBackground";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";

export const HomeHeroCentered: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center border-b border-surface-border overflow-hidden bg-[#050607]">
      {/* 01 & 02: Network & Background Sitting Behind & Around */}
      <HeroNetworkBackground />
      <TechnicalGrid crosshairs={true} />

      {/* Centered Hero Content Container (Max width 1280px, centered text, clean vertical hierarchy) */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          {/* 03: Small Technical Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>AURION CONCLAVE</span>
            <span className="text-primary-muted/40">•</span>
            <span className="text-primary-muted">TECHNOLOGY PRODUCTS • CONSULTANCY • INNOVATION</span>
          </motion.div>

          {/* 04: Main Centered Headline (Large Editorial Typography) */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter text-primary leading-[0.94] text-center"
          >
            WE BUILD <br />
            <span className="text-accent">TECHNOLOGY</span> <br />
            FOR THE <br />
            <span className="text-primary-muted">REAL WORLD.</span>
          </motion.h1>

          {/* 05: Centered Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base sm:text-xl text-primary-muted max-w-2xl mx-auto leading-relaxed font-normal text-center"
          >
            Aurion Conclave builds software, AI systems, cloud infrastructure, automation
            and technology products around real-world problems.
          </motion.p>

          {/* 06: Centered Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_2px_24px_rgba(201,148,62,0.22)] hover:scale-[1.02]"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary font-mono text-xs tracking-widest uppercase transition-all duration-300"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* 07: Centered Metadata Telemetry */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-surface-border/40 font-mono text-xs text-primary-muted/80"
          >
            <div className="flex items-center gap-2">
              <span className="text-accent font-bold">140+</span>
              <span className="text-[10px] tracking-wider uppercase">SERVICES</span>
            </div>
            <div className="text-surface-border">•</div>
            <div className="flex items-center gap-2">
              <span className="text-tech-teal font-bold">12 AGENTS</span>
              <span className="text-[10px] tracking-wider uppercase">WORKING LAB</span>
            </div>
            <div className="text-surface-border">•</div>
            <div className="flex items-center gap-2">
              <span className="text-success font-bold">99.99%</span>
              <span className="text-[10px] tracking-wider uppercase">UPTIME SLA</span>
            </div>
            <div className="text-surface-border">•</div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">DUAL-WING</span>
              <span className="text-[10px] tracking-wider uppercase">ARCH</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
