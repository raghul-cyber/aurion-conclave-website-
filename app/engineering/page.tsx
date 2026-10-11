"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

interface EngineeringStage {
  step: string;
  name: string;
  subtitle: string;
  deliverables: string[];
  duration: string;
  auditStandard: string;
  description: string;
}

const ENGINEERING_PIPELINE: EngineeringStage[] = [
  {
    step: "01",
    name: "DISCOVERY",
    subtitle: "Problem boundary exploration & technical viability audit.",
    deliverables: ["Technical Feasibility Report", "Stakeholder Constraint Matrix", "Risk Invariant Map"],
    duration: "1 - 2 WEEKS",
    auditStandard: "Empirical viability verified before any commercial commitment.",
    description: "We engage directly with principal engineers, product leaders, and operators to unearth ground-truth friction. We evaluate computational limits, existing bottlenecks, and data availability.",
  },
  {
    step: "02",
    name: "REQUIREMENTS",
    subtitle: "Formal mathematical & operational specification.",
    deliverables: ["Product Requirements Document (PRD)", "Typed Data Schemas", "SLA & Latency Budgets"],
    duration: "1 - 2 WEEKS",
    auditStandard: "Zero ambiguous prose; all requirements codified as verifiable invariants.",
    description: "Ambiguity is the primary driver of project failure. We decompose high-level business goals into rigorous mathematical invariants, throughput requirements, and regulatory boundaries.",
  },
  {
    step: "03",
    name: "ARCHITECTURE",
    subtitle: "Distributed system topology & database design.",
    deliverables: ["C4 System Topology Blueprints", "Database Normalization Schemas", "Security Threat Model"],
    duration: "2 WEEKS",
    auditStandard: "Peer-reviewed against high-throughput failure injection scenarios.",
    description: "Designing the skeletal architecture: event topologies, consensus protocols, read/write partition strategies, and failure domain boundaries across regions.",
  },
  {
    step: "04",
    name: "DESIGN",
    subtitle: "High-density editorial UI & developer experience ergonomics.",
    deliverables: ["Design System Component Tokens", "Interactive Prototypes", "Micro-Interaction Specs"],
    duration: "2 - 3 WEEKS",
    auditStandard: "Luxury aesthetic standard, WCAG AAA accessibility, sub-16ms render budgets.",
    description: "We craft interfaces with editorial typographical confidence, restrained palettes, and immediate tactile responsiveness. Every screen is designed around data density without visual noise.",
  },
  {
    step: "05",
    name: "ENGINEERING",
    subtitle: "Typed, modular systems development across dedicated pods.",
    deliverables: ["Production Source Code", "Automated Unit & Integration Tests", "API Contracts"],
    duration: "4 - 8 WEEKS",
    auditStandard: "100% type safety, zero technical debt, continuous automated integration.",
    description: "Multi-disciplinary engineering pods build in tightly scoped sprint increments. All code passes strict static analysis, concurrency audits, and automated mutation testing.",
  },
  {
    step: "06",
    name: "TESTING & AUDIT",
    subtitle: "Fuzzing, formal verification, and automated penetration testing.",
    deliverables: ["Penetration Test Report", "Performance Benchmarks", "Accessibility Sign-Off"],
    duration: "1 - 2 WEEKS",
    auditStandard: "Independent red team approval prior to any public staging deployment.",
    description: "We subject applications to adversarial stress tests, chaos engineering faults, and security fuzzing to ensure zero regressions under extreme production conditions.",
  },
  {
    step: "07",
    name: "DEPLOYMENT",
    subtitle: "Deterministic GitOps infrastructure & blue/green rollout.",
    deliverables: ["Terraform State Definitions", "Kubernetes Manifests", "Canary Deployment Pipelines"],
    duration: "1 WEEK",
    auditStandard: "Zero-downtime blue/green deployment with automated traffic shifting.",
    description: "Infrastructure and application delivery managed via peer-reviewed Git commits. Releases roll out progressively with real-time error budget monitoring.",
  },
  {
    step: "08",
    name: "OBSERVABILITY",
    subtitle: "Distributed tracing, telemetry collection, and alert budgets.",
    deliverables: ["Grafana Executive Dashboards", "OpenTelemetry Collector Config", "PagerDuty Routing Trees"],
    duration: "CONTINUOUS",
    auditStandard: "Sub-second incident isolation from kernel to UI layer.",
    description: "We instrument every microservice, query, and user interaction with structured telemetry. When an anomaly emerges, root cause analysis takes minutes, not days.",
  },
];

export default function EngineeringPage() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = ENGINEERING_PIPELINE[activeStageIndex];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#111415] via-[#0b0e0f] to-[#060708] overflow-hidden">
      {/* Spectral Drape Background from React Bits Pro */}
      <SpectralDrape opacity={0.85} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28 space-y-16">
        {/* Page Hero Header with Clamped Typography */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>AURION METHODOLOGY • 08 STAGES</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            FROM IDEA TO <br />
            <span className="text-accent">PRODUCTION.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            Our engineering delivery pipeline is built on mathematical rigor, typed contracts, and zero guesswork.
            Explore each stage of our end-to-end delivery system below.
          </p>
        </div>

        {/* Engineering Pipeline: Stepper and Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stage Selector */}
          <div className="lg:col-span-5 space-y-2">
            {ENGINEERING_PIPELINE.map((stage, idx) => {
              const isActive = idx === activeStageIndex;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? "bg-accent/10 border-accent/60 text-primary shadow-sm"
                      : "bg-[#111516] border-white/10 hover:border-white/20 text-primary-muted hover:text-primary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-accent">
                      {stage.step}
                    </span>
                    <div>
                      <div className="font-sans font-bold text-sm tracking-tight text-primary">
                        {stage.name}
                      </div>
                      <div className="font-mono text-[10px] text-primary-muted">
                        {stage.duration}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-accent translate-x-1" : "text-white/20"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Stage Inspection Deep-Dive */}
          <div className="lg:col-span-7">
            <SpotlightCard theme="dark" className="p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent font-semibold">
                    STAGE {currentStage.step}
                  </span>
                  <span className="font-mono text-xs text-tech-teal">{currentStage.duration}</span>
                </div>
                <span className="font-mono text-[11px] text-primary-muted uppercase">
                  VERIFIED SDLC
                </span>
              </div>

              <div>
                <h3 className="font-sans text-2xl font-bold text-primary">
                  {currentStage.name}
                </h3>
                <p className="font-mono text-xs text-accent mt-1">
                  {currentStage.subtitle}
                </p>
                <p className="font-sans text-sm text-primary-muted mt-4 leading-relaxed font-normal">
                  {currentStage.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[11px] text-accent uppercase tracking-wider block">
                  KEY ARTIFACTS & DELIVERABLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentStage.deliverables.map((del, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-lg border border-white/10 bg-[#151A1B] text-xs text-primary font-sans"
                    >
                      <Check className="w-3.5 h-3.5 text-success shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit Standard */}
              <div className="p-4 rounded-xl border border-white/10 bg-[#151A1B] space-y-1">
                <span className="font-mono text-[10px] text-primary-muted uppercase tracking-wider block">
                  RIGOR & AUDIT STANDARD
                </span>
                <p className="font-mono text-xs text-accent">{currentStage.auditStandard}</p>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl luxury-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              COLLABORATIVE ENGINEERING DISCOVERY
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Ready to execute your next enterprise software milestone with zero ambiguity?
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>START A DISCOVERY SPRINT</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
