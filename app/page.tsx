import React from "react";
import { HomeHeroCentered } from "@/components/framer/HomeHeroCentered";
import { HomeEditorialStatement } from "@/components/framer/HomeEditorialStatement";
import { TwoEnginesConnecting } from "@/components/framer/TwoEnginesConnecting";
import { HomeCapabilities } from "@/components/framer/HomeCapabilities";
import { HomeAgentPreview } from "@/components/framer/HomeAgentPreview";
import { HomeProductsSection } from "@/components/framer/HomeProductsSection";
import { HomePhilosophyAndFinal } from "@/components/framer/HomePhilosophyAndFinal";

import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { GlyphOrb } from "@/components/reactbits/components/GlyphOrb";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#060708]">
      {/* 01 / HOME HERO (CENTERED COMPOSITION + WEB THREADS BACKGROUND) */}
      <HomeHeroCentered />

      {/* 02 / HOME SECTION 02: EDITORIAL STATEMENT */}
      <HomeEditorialStatement />

      {/* 03 / HOME SECTION 03: TWO ENGINES (CONSULTANCY & PRODUCT) */}
      <TwoEnginesConnecting />

      {/* 04 / HOME SECTION 04: CAPABILITIES (07 CORE DISCIPLINES) */}
      <HomeCapabilities />

      {/* 05 / HOME SECTION 05: AGENT LAB PREVIEW (REAL RUNTIME INTERACTION) */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#090c0d] via-[#0e1213] to-[#090c0d] border-b border-surface-border overflow-hidden">
        {/* Background Spectral Drape from React Bits Pro */}
        <SpectralDrape opacity={0.85} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl mx-auto text-center mb-14 space-y-4 flex flex-col items-center">
            {/* 3D Turning ASCII Planet from React Bits Pro */}
            <div className="flex justify-center -mb-2">
              <GlyphOrb size={140} draggable={true} />
            </div>

            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>AURION AGENT LAB</span>
              <span className="text-white/20">•</span>
              <span className="text-primary-muted">AUTONOMOUS RUNTIME</span>
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-[1.15]">
              INTELLIGENCE YOU CAN <br />
              <span className="text-accent">INTERACT WITH.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-primary-muted leading-relaxed font-normal max-w-lg mx-auto">
              Explore working browser demonstrations of our specialized autonomous agents.
              Select an agent to inspect live reasoning steps, tool invocation metrics, and verifiable outputs.
            </p>
          </div>

          {/* Live Interface with Full Agent Lab Switcher */}
          <HomeAgentPreview />
        </div>
      </section>

      {/* 06 / HOME SECTION 06: PRODUCTS (VERIFIED ASSETS) */}
      <HomeProductsSection />

      {/* 07 & 08 / HOME SECTIONS 07 & 08: PHILOSOPHY & FINAL CTA */}
      <HomePhilosophyAndFinal />
    </div>
  );
}
