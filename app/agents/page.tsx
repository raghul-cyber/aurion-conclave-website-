import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu } from "lucide-react";
import { AgentLabConsole } from "@/components/AgentLabConsole";
import { AgentFilmScroll } from "@/components/AgentFilmScroll";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { AmbientBackground } from "@/components/framer/AmbientBackground";

export const metadata: Metadata = {
  title: "Aurion Agent Lab — Working Autonomous Systems | Aurion Conclave",
  description:
    "Working systems, not static mockups. Explore 12 specialized autonomous AI agents operating with deterministic reasoning, tool execution, and live telemetry.",
};

import { ScrollReveal } from "@/components/framer/ScrollAnimations";

export default function AgentsPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background: Single Sophisticated Agent Orchestration Environment */}
      <AmbientBackground variant="ai" />
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28 space-y-24">
        {/* Editorial Hero Header */}
        <ScrollReveal>
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>AURION AGENT LAB</span>
              <span className="text-primary-muted/40">•</span>
              <span className="text-primary-muted">AUTONOMOUS ORCHESTRATION</span>
            </div>

            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
              AURION <br />
              <span className="text-accent">AGENT LAB.</span>
            </h1>

            <div className="font-mono text-sm sm:text-base text-accent font-semibold tracking-widest uppercase">
              WORKING SYSTEMS. NOT STATIC MOCKUPS.
            </div>

            <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
              Interact with live, working implementations of our specialized autonomous workforce.
              Select any agent from the sidebar below to trigger real cognitive loops, inspect token overhead,
              and view deterministic verified outputs in real-time.
            </p>
          </div>
        </ScrollReveal>

        {/* The Live Interactive Agent Console (Viewport with Side Selector) */}
        <ScrollReveal delay={0.1}>
          <div>
            <Suspense fallback={<div className="font-mono text-xs text-primary-muted">Initializing Agent Lab Environment...</div>}>
              <AgentLabConsole />
            </Suspense>
          </div>
        </ScrollReveal>

        {/* The Agent Film: Horizontal Cinematic Scroll */}
        <div className="pt-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>THE AGENT FILM</span>
                <span className="text-primary-muted/40">•</span>
                <span className="text-primary-muted">HORIZONTAL STORYTELLING</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
                SCROLL THROUGH <br />
                <span className="text-accent">THE WORKFORCE.</span>
              </h2>
              <p className="font-sans text-base text-primary-muted mt-3">
                Vertical scroll coordinates reveal our agent sequence across research, documents, code, data, and zero-trust security.
              </p>
            </div>
          </ScrollReveal>

          <AgentFilmScroll />
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="font-mono text-xs text-accent tracking-widest uppercase">
                DEPLOY BESPOKE AGENT WORKFORCES
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary">
                Ready to deploy custom autonomous swarms tailored to your proprietary data?
              </h3>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0 hover:scale-[1.02]"
            >
              <span>COMMENCE AGENT ARCHITECTURE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
