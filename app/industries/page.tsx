import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, CheckCircle2, AlertCircle, Cpu, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Real-World Industries & Systems Engineering | Aurion Conclave",
  description:
    "Explore how Aurion Conclave engineers mission-critical software, AI, and cloud systems across 12 sectors including Financial Services, Healthcare, Logistics, and Manufacturing.",
};

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen py-16 bg-[#050607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
            <span>AURION CONCLAVE</span>
            <span>•</span>
            <span className="text-tech-cyan">DOMAIN EXPERTISE</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-primary tracking-tight">
            ENGINEERING FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-primary">
              REAL-WORLD SYSTEMS.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-primary-muted mt-4 leading-relaxed">
            Every industry presents unique regulatory barriers, latency envelopes, and failure modes.
            Below is how our engineering pods deconstruct sector problems and deploy production-grade software solutions.
          </p>
        </div>

        {/* 12 Industries Grid */}
        <div className="space-y-12">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="p-6 sm:p-10 bg-[#0A0D0E] border border-surface-border hover:border-accent/60 transition-colors shadow-2xl rounded-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-surface-border gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-accent/20 border border-accent text-accent">
                    {ind.code}
                  </span>
                  <h2 className="font-sans text-2xl font-bold text-primary">
                    {ind.name}
                  </h2>
                </div>
                <span className="font-mono text-xs text-tech-cyan">
                  {ind.caseSnippet}
                </span>
              </div>

              <p className="font-mono text-xs sm:text-sm text-accent leading-relaxed">
                {ind.tagline}
              </p>

              {/* 3-Column Breakdown: Problems | Systems We Build | Proven Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {/* Problems */}
                <div className="p-4 bg-[#050607] border border-surface-border space-y-2 rounded">
                  <div className="flex items-center gap-2 font-mono text-xs text-alert pb-1 border-b border-surface-border/40">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>COMMON INDUSTRY BOTTLENECKS</span>
                  </div>
                  <ul className="space-y-2 font-mono text-[11px] text-primary-muted">
                    {ind.problems.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="text-alert mt-0.5">✕</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Systems We Build */}
                <div className="p-4 bg-[#050607] border border-surface-border space-y-2 rounded">
                  <div className="flex items-center gap-2 font-mono text-xs text-tech-cyan pb-1 border-b border-surface-border/40">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>SYSTEMS AURION BUILDS</span>
                  </div>
                  <ul className="space-y-2 font-mono text-[11px] text-primary">
                    {ind.systemsWeBuild.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="text-tech-cyan mt-0.5">▶</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proven Solutions */}
                <div className="p-4 bg-[#050607] border border-surface-border space-y-2 rounded">
                  <div className="flex items-center gap-2 font-mono text-xs text-success pb-1 border-b border-surface-border/40">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>PROVEN OUTCOMES</span>
                  </div>
                  <ul className="space-y-2 font-mono text-[11px] text-primary-muted">
                    {ind.solutions.map((sol) => (
                      <li key={sol} className="flex items-start gap-2">
                        <span className="text-success mt-0.5">✓</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {ind.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-surface border border-surface-border text-primary-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                  className="inline-flex items-center gap-2 text-accent hover:underline shrink-0"
                >
                  <span>INITIALIZE {ind.name.toUpperCase()} BRIEF</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
