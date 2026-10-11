import React from "react";
import type { Metadata } from "next";
import { ProjectIntakeTerminal } from "@/components/ProjectIntakeTerminal";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { ScrollReveal } from "@/components/framer/ScrollAnimations";

export const metadata: Metadata = {
  title: "Start a Project — Architectural Intake | Aurion Conclave",
  description:
    "Have a problem worth solving? Transmit your technical boundaries, data volume requirements, and infrastructure goals directly to our Principal Systems Engineering team.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background: Minimal Ambient Grid */}
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 space-y-16">
        {/* Editorial Hero Header */}
        <ScrollReveal>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>AURION PROJECT INTAKE</span>
              <span className="text-primary-muted/40">•</span>
              <span className="text-primary-muted">SYSTEM DISCOVERY</span>
            </div>

            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
              HAVE A <br />
              PROBLEM <br />
              WORTH <br />
              <span className="text-accent">SOLVING?</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
              We partner with ambitious enterprises and leaders to engineer sovereign software,
              autonomous AI systems, and cloud infrastructure. Complete the intake brief below to commence discovery.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Step Project Intake Terminal */}
        <ScrollReveal delay={0.15}>
          <ProjectIntakeTerminal />
        </ScrollReveal>
      </div>
    </div>
  );
}
