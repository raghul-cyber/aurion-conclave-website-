import React from "react";
import { HomeHeroCentered } from "@/components/framer/HomeHeroCentered";
import { HomeEditorialStatement } from "@/components/framer/HomeEditorialStatement";
import { TwoEnginesConnecting } from "@/components/framer/TwoEnginesConnecting";
import { HomeCapabilities } from "@/components/framer/HomeCapabilities";
import { HomeAgentPreview } from "@/components/framer/HomeAgentPreview";
import { HomeProductsSection } from "@/components/framer/HomeProductsSection";
import { HomePhilosophyAndFinal } from "@/components/framer/HomePhilosophyAndFinal";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#050607]">
      {/* -------------------------------------------------- */}
      {/* 01 / HOME HERO (CENTERED COMPOSITION + NETWORK BEHIND) */}
      {/* -------------------------------------------------- */}
      <HomeHeroCentered />

      {/* -------------------------------------------------- */}
      {/* 02 / HOME SECTION 02: QUIET CENTERED EDITORIAL STATEMENT */}
      {/* -------------------------------------------------- */}
      <HomeEditorialStatement />

      {/* -------------------------------------------------- */}
      {/* 03 / HOME SECTION 03: TWO ENGINES (SYNCHRONIZED PANELS) */}
      {/* -------------------------------------------------- */}
      <TwoEnginesConnecting />

      {/* -------------------------------------------------- */}
      {/* 04 / HOME SECTION 04: CAPABILITIES (EDITORIAL ROWS) */}
      {/* -------------------------------------------------- */}
      <HomeCapabilities />

      {/* -------------------------------------------------- */}
      {/* 05 / HOME SECTION 05: AGENT LAB PREVIEW (CENTERED HEADING) */}
      {/* -------------------------------------------------- */}
      <section className="relative py-28 sm:py-36 bg-[#060708] border-b border-surface-border overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-surface border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>AURION AGENT LAB</span>
              <span className="text-primary-muted/40">•</span>
              <span className="text-primary-muted">AUTONOMOUS RUNTIME</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.04]">
              INTELLIGENCE <br />
              YOU CAN <br />
              <span className="text-accent">INTERACT WITH.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-primary-muted leading-relaxed font-normal max-w-xl mx-auto">
              Explore working browser demonstrations of our specialized autonomous agents.
              Select an agent below to inspect live reasoning steps, execution benchmarks, and deterministic outputs.
            </p>
          </div>

          {/* Single Giant Live Interface with 6-Agent Switcher */}
          <HomeAgentPreview />
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* 06 / HOME SECTION 06: PRODUCTS (VERIFIED ASSETS) */}
      {/* -------------------------------------------------- */}
      <HomeProductsSection />

      {/* -------------------------------------------------- */}
      {/* 07 & 08 / HOME SECTIONS 07 & 08: PHILOSOPHY & FINAL CTA */}
      {/* -------------------------------------------------- */}
      <HomePhilosophyAndFinal />
    </div>
  );
}
