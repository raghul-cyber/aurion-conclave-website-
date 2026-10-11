"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu, Sparkles, TrendingUp, Layers, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/framer/ScrollAnimations";

export const DualEngineDiagram: React.FC = () => {
  const [activeEngine, setActiveEngine] = useState<"consultancy" | "product">("consultancy");

  const consultancySteps = [
    { step: "01", label: "Real-World Problems", desc: "Clients bring high-stakes operational bottlenecks." },
    { step: "02", label: "Requirements Decomposition", desc: "Formal technical and compliance specification." },
    { step: "03", label: "Custom Architecture", desc: "Bespoke systems, ML models & cloud runtimes." },
    { step: "04", label: "Enterprise Revenue", desc: "Sustainable capital generation without venture debt." },
    { step: "05", label: "Deep Industry Insight", desc: "Exposing recurring patterns ripe for IP products." },
  ];

  const productSteps = [
    { step: "01", label: "Identified Friction", desc: "Isolating challenges common to multiple enterprises." },
    { step: "02", label: "Applied R&D Lab", desc: "Algorithmic research, eBPF telemetry, and SIMD kernels." },
    { step: "03", label: "Pilot Prototypes", desc: "Testing with verified enterprise design partners." },
    { step: "04", label: "Proprietary IP Assets", desc: "Patentable algorithms and multi-tenant platforms." },
    { step: "05", label: "Scalable Flagships", desc: "Global software assets compounding company valuation." },
  ];

  const currentSteps = activeEngine === "consultancy" ? consultancySteps : productSteps;

  return (
    <section className="relative py-24 bg-[#070A0B] border-y border-surface-border overflow-hidden">
      {/* Background technical accents */}
      <div className="absolute inset-0 tech-grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-accent text-xs tracking-widest uppercase">
                AURION / ARCHITECTURAL PHILOSOPHY
              </span>
              <span className="text-surface-border">•</span>
              <span className="font-mono text-xs text-primary-muted">THE DUAL-WING ENGINE</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight">
              FROM REAL-WORLD PROBLEMS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-tech-cyan">
                TO TECHNOLOGY PRODUCTS.
              </span>
            </h2>

            <p className="text-primary-muted text-base sm:text-lg mt-4 leading-relaxed">
              Aurion Conclave is not an IT body-shop, nor a detached theoretical incubator.
              We operate through two mutually reinforcing engines: our consultancy grounds us in real enterprise problems,
              while our product engine transforms recurring friction into proprietary global IP.
            </p>
          </div>
        </ScrollReveal>

        {/* Engine Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <motion.button
            type="button"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveEngine("consultancy")}
            className={`relative flex items-center gap-2.5 px-5 py-3 font-mono text-xs tracking-wider transition-all border ${
              activeEngine === "consultancy"
                ? "border-accent text-accent shadow-[0_0_20px_rgba(217,164,65,0.2)]"
                : "bg-surface border-surface-border text-primary-muted hover:text-primary"
            }`}
          >
            {activeEngine === "consultancy" && (
              <motion.div
                layoutId="dual-engine-tab-pill"
                className="absolute inset-0 bg-accent/15 z-[-1]"
                transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
              />
            )}
            <span className="font-bold">01 /</span>
            <span>THE CONSULTANCY ENGINE</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#050607] border border-surface-border">
              SOLUTIONS & REVENUE
            </span>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveEngine("product")}
            className={`relative flex items-center gap-2.5 px-5 py-3 font-mono text-xs tracking-wider transition-all border ${
              activeEngine === "product"
                ? "border-tech-cyan text-tech-cyan shadow-[0_0_20px_rgba(97,199,192,0.2)]"
                : "bg-surface border-surface-border text-primary-muted hover:text-primary"
            }`}
          >
            {activeEngine === "product" && (
              <motion.div
                layoutId="dual-engine-tab-pill"
                className="absolute inset-0 bg-tech-cyan/15 z-[-1]"
                transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
              />
            )}
            <span className="font-bold">02 /</span>
            <span>THE PRODUCT ENGINE</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#050607] border border-surface-border">
              PROPRIETARY IP & SCALE
            </span>
          </motion.button>
        </div>

        {/* Interactive Dual-Wing Diagram Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left / Active Engine Progression Track */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-[#0A0D0E] border border-surface-border/80 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-surface-border/60">
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    activeEngine === "consultancy" ? "bg-accent animate-pulse" : "bg-tech-cyan animate-pulse"
                  }`}
                />
                <h3 className="font-mono text-sm sm:text-base font-bold text-primary tracking-wider uppercase">
                  {activeEngine === "consultancy"
                    ? "Consultancy Progression: Client Problem to Scaled Solution"
                    : "Product Engine Lifecycle: Pattern Discovery to Proprietary IP"}
                </h3>
              </div>
              <span className="font-mono text-[11px] text-primary-muted">
                5 STAGE CYCLE
              </span>
            </div>

            {/* Stepper items with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEngine}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-8 space-y-4"
              >
                {currentSteps.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="group flex items-start gap-4 p-4 rounded bg-surface/40 border border-surface-border/40 hover:border-surface-border hover:bg-surface/70 transition-colors"
                  >
                    <div
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded shrink-0 border ${
                        activeEngine === "consultancy"
                          ? "bg-accent/10 border-accent/30 text-accent"
                          : "bg-tech-cyan/10 border-tech-cyan/30 text-tech-cyan"
                      }`}
                    >
                      STAGE {step.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-mono text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                        {step.label}
                      </h4>
                      <p className="font-sans text-xs text-primary-muted mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-surface-border group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Bottom conduit annotation */}
            <div className="mt-8 pt-6 border-t border-surface-border/60 flex items-center justify-between font-mono text-xs text-primary-muted">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent" />
                <span>CONTINUOUS FEEDBACK LOOP</span>
              </div>
              <span className="text-accent">100% IP DEFENSIVE STACK</span>
            </div>
          </div>

          {/* Right: Central Synthesis Core: Aurion Conclave */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 bg-[#101415] border border-accent/30 relative">
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/40 pointer-events-none" />

            <div>
              <div className="font-mono text-[11px] text-accent tracking-widest uppercase mb-2">
                CENTRAL SYNTHESIS CORE
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary">
                AURION CONCLAVE
              </h3>
              <p className="font-mono text-xs text-tech-cyan mt-1">
                Proprietary Venture Model
              </p>

              <div className="my-6 p-4 rounded bg-[#070A0B] border border-surface-border space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-primary">
                  <span className="text-primary-muted">Consultancy Wing:</span>
                  <span className="text-accent">High-Margin Client Work</span>
                </div>
                <div className="flex items-center justify-between text-primary">
                  <span className="text-primary-muted">Product Wing:</span>
                  <span className="text-tech-cyan">Proprietary Software IP</span>
                </div>
                <div className="flex items-center justify-between text-primary">
                  <span className="text-primary-muted">Target Outcome:</span>
                  <span className="text-success">Compounding Enterprise Value</span>
                </div>
              </div>

              <p className="text-xs text-primary-muted leading-relaxed">
                By maintaining active consultancy pods, our product engineers build software that solves acute,
                verified business needs—eliminating the guesswork that plagues standard startups.
              </p>
            </div>

            <div className="pt-6 border-t border-surface-border space-y-3">
              <Link
                href="/company"
                className="w-full flex items-center justify-center gap-2 py-3 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary font-mono text-xs tracking-wider transition-colors"
              >
                <span>READ THE FOUNDING THESIS</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </Link>
              <Link
                href="/products"
                className="w-full flex items-center justify-center gap-2 py-3 bg-accent hover:bg-accent-light text-[#050607] font-mono text-xs font-bold tracking-wider transition-colors"
              >
                <span>VIEW INCUBATED PRODUCTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
