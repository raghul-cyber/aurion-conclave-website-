"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AurionCore } from "@/components/AurionCore";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";

export const HomePhilosophyAndFinal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* SECTION 07 / PRODUCT EVOLUTION PRINCIPLE */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#080a0b] via-[#0c0f10] to-[#080a0b] border-b border-surface-border overflow-hidden">
        {/* Background Spectral Drape from React Bits Pro */}
        <SpectralDrape opacity={0.8} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>07 / PRODUCT EVOLUTION PRINCIPLE</span>
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-[1.15]">
              CONSULTING IS NOT THE END. <br />
              <span className="text-accent">
                IT IS WHERE WE FIND WHAT TO BUILD NEXT.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-primary-muted max-w-2xl leading-relaxed font-normal">
              Every proprietary product we engineer began as a difficult, unaddressed operational reality
              inside a client enterprise. Client delivery gives us empirical clarity; our internal product studio
              turns that clarity into scalable global assets.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 08 / RESTRAINED FINAL CTA */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-[#080a0b] via-[#0d1011] to-[#060708] border-b border-warm-border overflow-hidden">
        {/* Background Spectral Drape from React Bits Pro */}
        <SpectralDrape opacity={0.8} />
        {/* Subtle 3D Aurion Core in background */}
        <motion.div
          style={{ scale: backgroundScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
          aria-hidden="true"
        >
          <div className="w-[600px] h-[600px]">
            <AurionCore interactive={false} />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 text-center space-y-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>START A SYSTEM COLLABORATION</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]">
            LET'S BUILD <br />
            SOMETHING <br />
            <span className="text-accent">USEFUL.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-lg mx-auto leading-relaxed font-normal">
            Whether you require enterprise technology consultancy, sovereign AI systems, or co-developed software products,
            our engineering team is ready to begin discovery.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <SpecularButton variant="primary">
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </SpecularButton>
            </Link>

            <Link href="/services">
              <SpecularButton variant="outline">
                <span>EXPLORE SERVICES</span>
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </SpecularButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePhilosophyAndFinal;
