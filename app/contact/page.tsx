import React from "react";
import type { Metadata } from "next";
import { ProjectIntakeTerminal } from "@/components/ProjectIntakeTerminal";
import { PageBackground } from "@/components/reactbits/backgrounds/PageBackground";
import { BlurText } from "@/components/reactbits/text/BlurText";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { ScrollReveal } from "@/components/framer/ScrollAnimations";

export const metadata: Metadata = {
  title: "Start a Project — Architectural Intake | Aurion Conclave",
  description:
    "Have a problem worth solving? Transmit your technical boundaries, data volume requirements, and infrastructure goals directly to our Principal Systems Engineering team.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0b0e0f] via-[#0f1314] to-[#090b0c] overflow-hidden">
      {/* Background: Dot Field ambient environment */}
      <PageBackground preset="dot-field" opacity={0.85} />
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

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-tight">
              Have a problem <br />
              worth <span className="text-accent">solving?</span>
            </h1>

            <BlurText
              text="We partner with ambitious enterprises and leaders to engineer sovereign software, autonomous AI systems, and cloud infrastructure. Complete the intake brief below to commence discovery."
              className="font-sans text-base sm:text-lg text-primary-muted max-w-2xl leading-relaxed font-normal"
              delay={20}
            />
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
