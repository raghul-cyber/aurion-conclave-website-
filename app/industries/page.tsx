import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { IndustryListMotion } from "@/components/framer/IndustryListMotion";
import { ScrollReveal } from "@/components/framer/ScrollAnimations";

export const metadata: Metadata = {
  title: "Industry Applications & Sector Systems | Aurion Conclave",
  description:
    "Technology should fit the problem. Bespoke software, AI, and distributed systems engineered for Healthcare, Finance, Logistics, Manufacturing, and Enterprise.",
};

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28 space-y-24">
        {/* Editorial Hero Header */}
        <ScrollReveal>
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>AURION SECTOR ENGINEERING</span>
              <span className="text-primary-muted/40">•</span>
              <span className="text-primary-muted">12 VERTICAL DOMAINS</span>
            </div>

            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
              TECHNOLOGY <br />
              SHOULD FIT <br />
              <span className="text-accent">THE PROBLEM.</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
              We reject one-size-fits-all SaaS templates. Every industry has distinct physical, regulatory,
              and latency constraints. We construct systems tailored strictly to the domain physics of each sector.
            </p>
          </div>
        </ScrollReveal>

        {/* 12 Industry Systems Animated with Motion Path Drawing */}
        <IndustryListMotion />

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="font-mono text-xs text-accent tracking-widest uppercase">
                SOLVE SECTOR-SPECIFIC PROBLEMS
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary">
                Have an acute domain bottleneck requiring specialized engineering?
              </h3>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0 hover:scale-[1.02]"
            >
              <span>COMMENCE SECTOR DISCOVERY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
