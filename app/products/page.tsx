import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductEngineMechanism } from "@/components/ProductEngineMechanism";
import { Box, ArrowUpRight, CheckCircle2, Cpu, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Proprietary Products & Incubated IP | Aurion Conclave",
  description:
    "Explore proprietary software platforms and IP developed by Aurion Conclave: Aurion Synapse, LedgerFlow, CortexRAG, and HyperMesh.",
};

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen py-16 bg-[#050607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
            <span>AURION CONCLAVE</span>
            <span>•</span>
            <span className="text-tech-cyan">PROPRIETARY SOFTWARE WING</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-primary tracking-tight">
            BUILT FROM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-primary">
              REAL PROBLEMS.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-primary-muted mt-4 leading-relaxed">
            We do not chase speculative trends. Our proprietary software products originate directly
            from recurring friction points uncovered during high-stakes enterprise consultancy engagements.
            When an acute problem repeats across industries, we engineer the definitive solution.
          </p>
        </div>

        {/* Products Detailed Catalog */}
        <div className="space-y-12">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              id={prod.id}
              className="p-6 sm:p-10 bg-[#0A0D0E] border border-surface-border hover:border-accent/60 transition-colors shadow-2xl rounded-sm space-y-6"
            >
              {/* Product Top Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-surface-border gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 bg-accent/20 border border-accent text-accent">
                    {prod.code}
                  </span>
                  <div>
                    <h2 className="font-sans text-2xl sm:text-3xl font-bold text-primary">
                      {prod.name}
                    </h2>
                    <span className="font-mono text-xs text-tech-cyan">
                      {prod.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-center">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#050607] border border-surface-border text-accent uppercase font-semibold">
                    {prod.statusLabel}
                  </span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="space-y-2">
                <p className="font-mono text-sm text-accent">
                  &quot;{prod.tagline}&quot;
                </p>
                <p className="font-sans text-sm sm:text-base text-primary-muted leading-relaxed">
                  {prod.description}
                </p>
              </div>

              {/* Origin Story: How Client Problems Became IP */}
              <div className="p-4 bg-[#050607] border border-surface-border space-y-1 rounded-sm">
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
                  ORIGIN FROM REAL-WORLD CONSULTANCY:
                </span>
                <p className="font-sans text-xs sm:text-sm text-primary leading-relaxed">
                  {prod.originStory}
                </p>
              </div>

              {/* Key Features & Benchmarks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-primary-muted uppercase tracking-wider">
                    ARCHITECTURAL CAPABILITIES
                  </h4>
                  <div className="space-y-1.5">
                    {prod.keyFeatures.map((kf) => (
                      <div key={kf} className="flex items-start gap-2.5 font-mono text-xs text-primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{kf}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-primary-muted uppercase tracking-wider">
                    EMPIRICAL BENCHMARKS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {prod.metrics.map((m) => (
                      <div key={m.label} className="p-3 bg-[#050607] border border-surface-border rounded">
                        <div className="font-mono text-[10px] text-primary-muted">{m.label}</div>
                        <div className="font-mono text-sm font-bold text-accent mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack & Action */}
              <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {prod.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#070A0B] border border-surface-border text-primary-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?product=${encodeURIComponent(prod.name)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-[#050607] font-bold tracking-wider transition-colors shrink-0"
                >
                  <span>REQUEST PILOT ACCESS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Circular R&D Engine Mechanism */}
        <ProductEngineMechanism />
      </div>
    </div>
  );
}
