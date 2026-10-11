"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AurionCore } from "@/components/AurionCore";

import { ScrollReveal } from "@/components/framer/ScrollAnimations";

export const HomePhilosophyAndFinal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* -------------------------------------------------- */}
      {/* SECTION 07 / SUBTLE STATEMENT */}
      {/* -------------------------------------------------- */}
      <section className="relative py-32 sm:py-44 bg-[#080A0B] border-b border-surface-border overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <ScrollReveal>
            <div className="max-w-4xl space-y-10">
              <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>07 / PRODUCT EVOLUTION PRINCIPLE</span>
              </div>

              <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.04]">
                CONSULTING <br />
                IS NOT THE END. <br />
                <span className="text-accent">
                  IT IS WHERE <br />
                  WE FIND <br />
                  WHAT TO BUILD NEXT.
                </span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-primary-muted max-w-2xl leading-relaxed">
                Every proprietary product we engineer began as a difficult, unaddressed operational reality
                inside a client enterprise. Client delivery gives us empirical clarity; our internal product studio
                turns that clarity into scalable global assets.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* SECTION 08 / HOME FINAL CTA */}
      {/* -------------------------------------------------- */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#060708] border-b border-surface-border overflow-hidden">
        {/* Background Returning 3D Core with Controlled Slow Zoom */}
        <motion.div
          style={{ scale: backgroundScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25"
        >
          <div className="w-[800px] h-[800px]">
            <AurionCore interactive={false} />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 text-center space-y-10">
          <ScrollReveal>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>START A SYSTEM COLLABORATION</span>
              </div>

              <h2 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold text-primary tracking-tighter leading-[0.95]">
                LET'S BUILD <br />
                SOMETHING <br />
                <span className="text-accent">USEFUL.</span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-primary-muted max-w-xl mx-auto leading-relaxed">
                Whether you require enterprise technology consultancy, sovereign AI systems, or co-developed software products,
                our engineering team is ready to begin discovery.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.25)] hover:scale-[1.02]"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary font-mono text-xs tracking-widest uppercase transition-all duration-300"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowUpRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
