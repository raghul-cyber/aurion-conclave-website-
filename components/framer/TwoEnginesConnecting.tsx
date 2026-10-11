"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Layers, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { PageBackground } from "@/components/reactbits/backgrounds/PageBackground";

export const TwoEnginesConnecting: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center 0.35"],
  });

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
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0d0e] via-[#0e1213] to-[#0a0d0e] border-b border-surface-border overflow-hidden"
    >
      {/* Background Beams Atmosphere */}
      <PageBackground preset="beams" opacity={0.85} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Section Header - Strict Clamped Typographic Hierarchy */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>BUSINESS ARCHITECTURE</span>
            <span className="text-white/20">•</span>
            <span className="text-primary-muted">THE TWO ENGINES</span>
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-[1.2]">
            TWO CONNECTED <br />
            <span className="text-accent">WINGS.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-primary-muted mt-3 leading-relaxed font-normal">
            Our dual-wing model bridges high-stakes enterprise advisory with proprietary technology asset incubation.
            Client problems expose practical friction; validated insights evolve into proprietary software.
          </p>
        </div>

        {/* Two Synchronized Vertical Panels in 12-Column Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Central Connecting SVG Line (Desktop) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10" aria-hidden="true">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M 48% 68% C 50% 68%, 50% 32%, 52% 32%"
                fill="none"
                stroke="#C39142"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                style={{
                  pathLength,
                  opacity: connectorOpacity,
                }}
              />
            </svg>
          </div>

          {/* PANEL 01: CONSULTANCY */}
          <SpotlightCard theme="dark" className="flex flex-col justify-between min-h-[520px]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent font-semibold">
                    ENGINE 01
                  </span>
                  <span className="font-mono text-xs text-tech-teal uppercase tracking-wider">
                    CONSULTANCY
                  </span>
                </div>
                <Layers className="w-5 h-5 text-accent" />
              </div>

              <div className="py-6 space-y-2">
                <h3 className="font-sans text-xl font-bold text-primary">High-Stakes Advisory & Delivery</h3>
                <p className="text-xs sm:text-sm text-primary-muted leading-relaxed font-sans">
                  Solving complex operational bottlenecks for enterprise organizations across AI, cloud,
                  cybersecurity, and software architecture.
                </p>
              </div>

              {/* Step Sequence */}
              <div className="space-y-4 pt-2">
                {consultancySteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-[11px] bg-white/5 border border-white/10 text-accent shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-primary">{step.title}</h4>
                      <p className="font-mono text-[11px] text-primary-muted">{step.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-primary-muted">
              <span>OUTPUT</span>
              <span className="text-accent font-semibold">PRODUCTION IP & INSIGHTS</span>
            </div>
          </SpotlightCard>

          {/* PANEL 02: PRODUCT */}
          <SpotlightCard theme="dark" className="flex flex-col justify-between min-h-[520px]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-tech-teal/15 border border-tech-teal/30 text-tech-teal font-semibold">
                    ENGINE 02
                  </span>
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">
                    PRODUCT R&D
                  </span>
                </div>
                <Sparkles className="w-5 h-5 text-tech-teal" />
              </div>

              <div className="py-6 space-y-2">
                <h3 className="font-sans text-xl font-bold text-primary">Proprietary Software Systems</h3>
                <p className="text-xs sm:text-sm text-primary-muted leading-relaxed font-sans">
                  Incubating sovereign software assets, autonomous agent toolchains, and scalable infrastructure
                  born from real-world problem sets.
                </p>
              </div>

              {/* Step Sequence */}
              <div className="space-y-4 pt-2">
                {productSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-[11px] bg-white/5 border border-white/10 text-tech-teal shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-primary">{step.title}</h4>
                      <p className="font-mono text-[11px] text-primary-muted">{step.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-primary-muted">
              <span>OUTPUT</span>
              <span className="text-tech-teal font-semibold">SCALABLE SOFTWARE ASSETS</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default TwoEnginesConnecting;
