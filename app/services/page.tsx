import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { ServiceMatrix } from "@/components/ServiceMatrix";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

export const metadata: Metadata = {
  title: "Technology Services & Systems Catalog | Aurion Conclave",
  description:
    "One technology partner across software engineering, AI systems, cloud infrastructure, data pipelines, automation, and cybersecurity.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0d0e] via-[#0e1213] to-[#0a0d0e] overflow-hidden">
      {/* Spectral Drape Background from React Bits Pro */}
      <SpectralDrape opacity={0.85} />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Page Hero Header with Clamped Typography */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>AURION SERVICES DIRECTORY</span>
            <span className="text-white/20">•</span>
            <span className="text-primary-muted">164 CATALOGED DISCIPLINES</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            TECHNOLOGY IS A <br />
            <span className="text-accent">CONNECTED STACK.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            One technology partner across software, AI, cloud, data, automation and infrastructure.
            Every layer engineered with mathematical precision, strict SLA commitments, and zero technical debt.
          </p>
        </div>

        {/* Searchable, Filterable Service Matrix Catalog */}
        <ServiceMatrix />

        {/* Bottom Callout */}
        <div className="mt-16 p-8 rounded-2xl luxury-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              CUSTOM SYSTEMS ENGAGEMENT
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Every service is delivered under strict performance benchmarks and typed SLAs.
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
