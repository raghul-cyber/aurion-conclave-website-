"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlyphTide } from "@/components/reactbits/backgrounds/GlyphTide";
import { GlyphOrb } from "@/components/reactbits/components/GlyphOrb";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";
import { BlurText } from "@/components/reactbits/text/BlurText";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/framer/ScrollAnimations";

const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    name: "CONSULTANCY",
    tagline: "Empirical Grounding in High-Stakes Reality",
    desc: "We work directly on enterprise bottlenecks: core ledger modernizations, zero-trust cloud migrations, and high-concurrency backends. Solving high-stakes client problems generates cash flow, validates architectural viability, and exposes unvarnished industry reality.",
  },
  {
    number: "02",
    name: "PRODUCTS",
    tagline: "Compounding Proprietary Software IP",
    desc: "When an acute problem repeats across multiple enterprise clients, it graduates into our internal product division. We engineer scalable, defensible software platforms (Synapse, LedgerFlow, CortexRAG, HyperMesh) that compound valuation independently of human billable hours.",
  },
  {
    number: "03",
    name: "RESEARCH",
    tagline: "Applied Frontier Engineering Lab",
    desc: "We conduct applied computer science investigations into multi-agent consensus protocols, eBPF kernel telemetry, vector graph recall, and SIMD hardware acceleration long before they become generic commodities.",
  },
  {
    number: "04",
    name: "TALENT",
    tagline: "Channeling Exceptional Emerging Minds",
    desc: "Traditional consultancies trap junior talent in bureaucracy. Aurion Conclave pairs elite principal architects with the hungriest emerging technical minds, cultivating institutional engineering depth through real production deployments.",
  },
  {
    number: "05",
    name: "INNOVATION",
    tagline: "Long-Term Asymmetric Evolution",
    desc: "Our strategic trajectory evolves from a consultancy with an internal product division toward a product-led technology enterprise, retaining consultancy as our permanent ground-truth sensor for what to build next.",
  },
];

export default function CompanyPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0b0e0f] via-[#0f1314] to-[#090b0c] overflow-hidden">
      {/* Glyph Tide Background */}
      <GlyphTide
        color="#D9B874"
        accentColor="#648E8B"
        interactive={true}
      />
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28 space-y-20">
        {/* Editorial Hero Header with ScrollReveal & GlyphOrb */}
        <ScrollReveal direction="up" distance={24}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>AURION PHILOSOPHY • CORPORATE EVOLUTION</span>
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-tight">
                Building a technology company <br />
                around <span className="text-accent">real problems.</span>
              </h1>

              <BlurText
                text="Most technology companies start with abstract pitch decks or venture debt. We started with real problems. Our dual-wing model combines client advisory with proprietary software incubation, compounding enterprise value without speculative dilution."
                className="font-sans text-base sm:text-lg text-primary-muted max-w-2xl leading-relaxed font-normal"
                delay={20}
              />
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-4 rounded-2xl luxury-glass border border-white/10 shadow-2xl flex flex-col items-center">
                <GlyphOrb
                  size={210}
                  color="#D9B874"
                  glowColor="#648E8B"
                  draggable={true}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Reveal of 5 Core Pillars with ScrollStagger */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase pb-4 border-b border-surface-border">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>THE 5 PILLARS OF AURION</span>
          </div>

          <ScrollStagger staggerDelay={0.08} className="grid grid-cols-1 gap-6">
            {PHILOSOPHY_PILLARS.map((p) => (
              <ScrollStaggerItem key={p.name}>
                <SpotlightCard
                  spotlightColor="rgba(195, 145, 66, 0.2)"
                  intensity={0.3}
                  className="p-8 sm:p-10 border border-surface-border/80 bg-[#0d1011]/90 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-6 mb-6 border-b border-surface-border/60 gap-4">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xl sm:text-2xl text-accent font-bold">
                        {p.number}
                      </span>
                      <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                        {p.name}
                      </h2>
                    </div>

                    <span className="font-mono text-xs text-tech-teal uppercase tracking-wider">
                      {p.tagline}
                    </span>
                  </div>

                  <p className="font-sans text-base sm:text-lg text-primary-muted leading-relaxed max-w-4xl">
                    {p.desc}
                  </p>
                </SpotlightCard>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>

        {/* The Long-Term Evolution Thesis with ScrollReveal */}
        <ScrollReveal direction="up" distance={20}>
          <SpotlightCard
            spotlightColor="rgba(100, 142, 139, 0.25)"
            intensity={0.25}
            className="p-8 sm:p-12 border border-surface-border bg-[#0d1011]/90 space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="font-mono text-xs text-accent tracking-widest uppercase">
              THE LONG-TERM ASYMMETRY
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-bold text-primary">
              From Consultancy with a Product Wing → To a Product Company with Consultancy Grounding.
            </h3>

            <p className="font-sans text-sm sm:text-base text-primary-muted leading-relaxed max-w-3xl">
              Software consultancies typically hit scaling ceilings governed by headcount. Product companies often lose touch with customer operational reality.
              Aurion Conclave resolves this contradiction: our client work serves as our radar for real-world pain, while our proprietary software assets scale globally.
            </p>
          </SpotlightCard>
        </ScrollReveal>

        {/* Bottom CTA with ScrollReveal */}
        <ScrollReveal direction="up" distance={20}>
          <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-[0_0_30px_rgba(201,148,62,0.1)]">
            <div className="space-y-2">
              <div className="font-mono text-xs text-accent tracking-widest uppercase">
                JOIN OUR JOURNEY
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-primary">
                Partner with an engineering organization that builds for the real world.
              </h3>
            </div>

            <Link href="/contact" className="shrink-0">
              <SpecularButton variant="primary">
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </SpecularButton>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

