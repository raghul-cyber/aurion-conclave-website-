import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { IndustryListMotion } from "@/components/framer/IndustryListMotion";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

export const metadata: Metadata = {
  title: "Industry Applications & Sector Systems | Aurion Conclave",
  description:
    "Technology should fit the problem. Bespoke software, AI, and distributed systems engineered for Healthcare, Finance, Logistics, Manufacturing, and Enterprise.",
};

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0d0e] via-[#0f1314] to-[#080a0b] overflow-hidden">
      {/* Spectral Drape Background from React Bits Pro */}
      <SpectralDrape opacity={0.85} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28 space-y-16">
        {/* Editorial Hero Header with Clamped Typography */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>AURION SECTOR ENGINEERING</span>
            <span className="text-white/20">•</span>
            <span className="text-primary-muted">12 VERTICAL DOMAINS</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            TECHNOLOGY SHOULD FIT <br />
            <span className="text-accent">THE PROBLEM.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            We reject one-size-fits-all SaaS templates. Every industry has distinct physical, regulatory,
            and latency constraints. We construct systems tailored strictly to the domain physics of each sector.
          </p>
        </div>

        {/* 12 Industry Systems */}
        <IndustryListMotion />

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl luxury-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              SOLVE SECTOR-SPECIFIC PROBLEMS
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Have an acute domain bottleneck requiring specialized engineering?
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>CONSULT SECTOR ARCHITECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
