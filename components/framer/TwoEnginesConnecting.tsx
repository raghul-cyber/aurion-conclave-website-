"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const TwoEnginesConnecting: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center 0.35"],
  });

  // Animated line connection progress
  const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const connectorOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.2, 1]);

  const consultancySteps = [
    { title: "Real-world problems", note: "Client operational friction" },
    { title: "Requirements", note: "Formal technical specification" },
    { title: "Solutions", note: "Engineered production systems" },
    { title: "Industry insight", note: "Discovered repeating IP patterns" },
  ];

  const productSteps = [
    { title: "Problems", note: "Identified enterprise bottlenecks" },
    { title: "Research", note: "Algorithmic & R&D lab testing" },
    { title: "Validation", note: "Proof-of-concept verification" },
    { title: "IP & Products", note: "Sovereign scalable software assets" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#060708] border-b border-surface-border overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Section Header - Strictly Aligned */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>BUSINESS ARCHITECTURE</span>
            <span className="text-primary-muted/40">•</span>
            <span className="text-primary-muted">THE TWO ENGINES</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.04]">
            TWO CONNECTED <br />
            <span className="text-accent">WINGS.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-primary-muted mt-5 leading-relaxed font-normal">
            Our dual-wing model bridges high-stakes enterprise advisory with proprietary technology asset incubation.
            Client problems expose practical friction; validated insights evolve into proprietary software.
          </p>
        </div>

        {/* Two Synchronized Vertical Panels in the Same Strict Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Central Connecting SVG Line (Desktop) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M 48% 68% C 50% 68%, 50% 32%, 52% 32%"
                fill="none"
                stroke="#C9943E"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                style={{
                  pathLength,
                  opacity: connectorOpacity,
                }}
              />
            </svg>
          </div>

          {/* -------------------------------------------------- */}
          {/* PANEL 01: CONSULTANCY */}
          {/* -------------------------------------------------- */}
          <div className="p-8 sm:p-10 luxury-glass border border-surface-border hover:border-accent/40 transition-colors flex flex-col justify-between rounded-sm min-h-[580px]">
            {/* Header: Exact Same Height Across Both */}
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-surface-border">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-2xl sm:text-3xl text-accent font-bold">01</span>
                  <span className="font-mono text-xs text-primary-muted uppercase tracking-widest">
                    WING 01
                  </span>
                </div>
                <span className="px-2.5 py-1 bg-surface border border-surface-border font-mono text-[10px] text-accent tracking-wider uppercase">
                  ADVISORY & SYSTEMS
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary tracking-tight mb-8">
                CONSULTANCY
              </h3>

              {/* Synchronized Vertical Step Progression */}
              <div className="space-y-5">
                {consultancySteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <div>
                        <span className="font-sans text-base sm:text-lg text-primary font-medium tracking-tight">
                          {step.title}
                        </span>
                        <span className="hidden sm:inline-block ml-3 font-mono text-[11px] text-primary-muted">
                          // {step.note}
                        </span>
                      </div>
                    </div>

                    {idx < consultancySteps.length - 1 && (
                      <div className="my-2 ml-[3px] border-l border-accent/30 h-5 flex items-center">
                        <ArrowDown className="w-3 h-3 text-accent/50 -ml-[7px]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Baseline Divider and Note: Identical Height & Baseline */}
            <div className="mt-8 pt-6 border-t border-surface-border font-mono text-xs text-primary-muted leading-relaxed">
              Real enterprise environments provide unmatched operational grounding, cash flow, and empirical clarity.
            </div>
          </div>

          {/* -------------------------------------------------- */}
          {/* PANEL 02: PRODUCT */}
          {/* -------------------------------------------------- */}
          <div className="p-8 sm:p-10 luxury-glass border border-surface-border hover:border-tech-teal/40 transition-colors flex flex-col justify-between rounded-sm min-h-[580px]">
            {/* Header: Exact Same Height Across Both */}
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-surface-border">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-2xl sm:text-3xl text-tech-teal font-bold">02</span>
                  <span className="font-mono text-xs text-primary-muted uppercase tracking-widest">
                    WING 02
                  </span>
                </div>
                <span className="px-2.5 py-1 bg-surface border border-surface-border font-mono text-[10px] text-tech-teal tracking-wider uppercase">
                  PROPRIETARY IP
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary tracking-tight mb-8">
                PRODUCT
              </h3>

              {/* Synchronized Vertical Step Progression */}
              <div className="space-y-5">
                {productSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-tech-teal shrink-0" />
                      <div>
                        <span className="font-sans text-base sm:text-lg text-primary font-medium tracking-tight">
                          {step.title}
                        </span>
                        <span className="hidden sm:inline-block ml-3 font-mono text-[11px] text-primary-muted">
                          // {step.note}
                        </span>
                      </div>
                    </div>

                    {idx < productSteps.length - 1 && (
                      <div className="my-2 ml-[3px] border-l border-tech-teal/30 h-5 flex items-center">
                        <ArrowDown className="w-3 h-3 text-tech-teal/50 -ml-[7px]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Baseline Divider and Note: Identical Height & Baseline */}
            <div className="mt-8 pt-6 border-t border-surface-border font-mono text-xs text-primary-muted leading-relaxed">
              Validated industry friction transforms into defensible, high-margin software assets with compounding valuation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
