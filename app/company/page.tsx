import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DualEngineDiagram } from "@/components/DualEngineDiagram";
import { ProductEngineMechanism } from "@/components/ProductEngineMechanism";
import { ArrowUpRight, Cpu, Layers, Shield, Sparkles, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Aurion Conclave — A Technology Organization Built Around Problems",
  description:
    "Learn about Aurion Conclave: our dual-wing model combining enterprise software consultancy with proprietary product incubation, emerging talent development, and applied R&D.",
};

export default function CompanyPage() {
  return (
    <div className="relative min-h-screen py-16 bg-[#050607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
            <span>AURION CONCLAVE</span>
            <span>•</span>
            <span className="text-tech-cyan">CORPORATE THESIS</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-primary tracking-tight">
            A TECHNOLOGY COMPANY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-primary">
              BUILT AROUND PROBLEMS.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-primary-muted mt-4 leading-relaxed">
            Aurion Conclave is building an enduring technology organization that unifies
            client consultancy with proprietary product R&D. Over time, proprietary software IP
            becomes increasingly central to our business, compounding enterprise value without speculative venture bloat.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#0A0D0E] border border-surface-border space-y-3">
            <span className="font-mono text-xs text-accent font-bold">PILLAR 01</span>
            <h3 className="font-sans text-lg font-bold text-primary">CONSULTANCY</h3>
            <p className="font-sans text-xs text-primary-muted leading-relaxed">
              High-stakes technology solutions for enterprise clients. Generating cash flow,
              solving mission-critical problems, and obtaining real-world industry exposure.
            </p>
          </div>

          <div className="p-6 bg-[#0A0D0E] border border-surface-border space-y-3">
            <span className="font-mono text-xs text-tech-cyan font-bold">PILLAR 02</span>
            <h3 className="font-sans text-lg font-bold text-primary">PROPRIETARY PRODUCTS</h3>
            <p className="font-sans text-xs text-primary-muted leading-relaxed">
              Developing scalable, defensible software platforms born out of repeated client friction points.
              Compounding long-term asset value.
            </p>
          </div>

          <div className="p-6 bg-[#0A0D0E] border border-surface-border space-y-3">
            <span className="font-mono text-xs text-accent-light font-bold">PILLAR 03</span>
            <h3 className="font-sans text-lg font-bold text-primary">APPLIED R&D</h3>
            <p className="font-sans text-xs text-primary-muted leading-relaxed">
              Investigating frontier AI swarms, eBPF kernel telemetry, combinatorial solvers,
              and low-latency vector databases before they become industry commodities.
            </p>
          </div>

          <div className="p-6 bg-[#0A0D0E] border border-surface-border space-y-3">
            <span className="font-mono text-xs text-success font-bold">PILLAR 04</span>
            <h3 className="font-sans text-lg font-bold text-primary">TALENT INCUBATION</h3>
            <p className="font-sans text-xs text-primary-muted leading-relaxed">
              Connecting exceptional emerging technical minds with real-world enterprise engineering
              challenges, building institutional depth and relentless execution velocity.
            </p>
          </div>
        </div>

        {/* Dual Engine Diagram */}
        <DualEngineDiagram />

        {/* Section: Building With Emerging Talent */}
        <div className="p-8 sm:p-12 bg-[#0A0D0E] border border-surface-border space-y-8 rounded-sm">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              INSTITUTIONAL HUMAN CAPITAL
            </span>
            <h2 className="font-sans text-3xl font-extrabold text-primary">
              BUILDING WITH EMERGING TALENT.
            </h2>
            <p className="font-sans text-sm text-primary-muted leading-relaxed">
              Traditional agencies hoard mid-level headcount. Aurion Conclave pairs elite principal architects
              with the hungriest emerging engineering minds. We channel raw intelligence into structured,
              production-grade software delivery across 8 disciplines:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            {[
              "Software Engineering",
              "AI & Machine Learning",
              "Cybersecurity & Red-Teaming",
              "Data & Stream Processing",
              "UI/UX Interface Systems",
              "Business Development",
              "Applied Research",
              "Product Development"
            ].map((area) => (
              <div
                key={area}
                className="p-3 bg-[#050607] border border-surface-border text-primary flex items-center gap-2"
              >
                <span className="text-accent">◈</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Circular Product Engine */}
        <ProductEngineMechanism />

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 bg-[#101415] border border-accent/40 rounded flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-sans text-2xl font-bold text-primary">
              Partner with the digital headquarters of serious engineering.
            </h3>
            <p className="font-sans text-sm text-primary-muted">
              Whether you need bespoke mission-critical engineering or want to explore our proprietary software flagships.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-[#050607] font-mono text-xs font-bold tracking-wider transition-colors amber-glow shrink-0"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
