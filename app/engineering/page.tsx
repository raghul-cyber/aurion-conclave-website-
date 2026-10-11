"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, Terminal, Cpu } from "lucide-react";
import { AmbientBackground } from "@/components/framer/AmbientBackground";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/framer/ScrollAnimations";

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
    deliverables: ["Design System Component Tokens", "Interactive Figma Prototypes", "Micro-Interaction Specs"],
    duration: "2 - 3 WEEKS",
    auditStandard: "Luxury aesthetic standard, WCAG AAA accessibility, sub-16ms render budgets.",
    description: "We craft interfaces with editorial typographical confidence, restrained palettes, and immediate tactile responsiveness. Every screen is designed around data density without visual noise.",
  },
  {
    step: "05",
    name: "ENGINEERING",
    subtitle: "Core runtime implementation in Rust, TypeScript, and Go.",
    deliverables: ["Production Source Code Repository", "Automated Unit & Integration Suites", "Developer CLI Tools"],
    duration: "4 - 12 WEEKS",
    auditStandard: "100% type safety, zero unwrapped errors, memory-safe execution.",
    description: "Writing clean, modular, and maintainable software. We practice test-driven engineering, continuous static analysis, and zero-debt dependency management.",
  },
  {
    step: "06",
    name: "AI / ML",
    subtitle: "Cognitive agent orchestration & predictive model fine-tuning.",
    deliverables: ["Quantized Model Weights", "Vector Knowledge Graphs", "Deterministic Agent Test Harness"],
    duration: "2 - 4 WEEKS",
    auditStandard: "Zero hallucination tolerance; 100% cited source coordinates.",
    description: "Deploying sovereign AI pipelines, autonomous agent swarms, and RAG architectures tailored to enterprise domain constraints with mathematical evaluation harnesses.",
  },
  {
    step: "07",
    name: "INTEGRATION",
    subtitle: "Enterprise ERP, CRM, payment, and cloud service linkage.",
    deliverables: ["Idempotent API Webhooks", "Transactional Outbox Syncers", "Data Reconciliation DAGs"],
    duration: "2 - 3 WEEKS",
    auditStandard: "Exactly-once event processing guarantees across all external boundary APIs.",
    description: "Wiring new systems into existing enterprise infrastructure without taking downstream databases offline. We build resilient adapters and durable synchronization workflows.",
  },
  {
    step: "08",
    name: "TESTING",
    subtitle: "Chaos engineering, penetration audits, and load stress testing.",
    deliverables: ["Chaos Mesh Failure Reports", "Third-Party Penetration Audit", "Load Benchmark Telemetry"],
    duration: "2 WEEKS",
    auditStandard: "System withstands 10x projected peak volume and sudden node termination.",
    description: "We intentionally inject network latency, terminate Kubernetes pods, simulate database splits, and launch simulated cyberattacks to guarantee extreme runtime resilience.",
  },
  {
    step: "09",
    name: "DEPLOYMENT",
    subtitle: "Deterministic GitOps releases with automated canary progression.",
    deliverables: ["Terraform / OpenTofu Modules", "ArgoCD Application Manifests", "Canary Rollback Runbooks"],
    duration: "1 WEEK",
    auditStandard: "Zero-downtime blue/green deployment with automated traffic shifting.",
    description: "Infrastructure and application delivery managed via peer-reviewed Git commits. Releases roll out progressively with real-time error budget monitoring.",
  },
  {
    step: "10",
    name: "OBSERVABILITY",
    subtitle: "Distributed tracing, telemetry collection, and alert budgets.",
    deliverables: ["Grafana Executive Dashboards", "OpenTelemetry Collector Config", "PagerDuty Routing Trees"],
    duration: "CONTINUOUS",
    auditStandard: "Sub-second incident isolation from kernel to UI layer.",
    description: "We instrument every microservice, query, and user interaction with structured telemetry. When an anomaly emerges, root cause analysis takes minutes, not days.",
  },
  {
    step: "11",
    name: "OPTIMIZATION",
    subtitle: "Compute cost reduction, latency tuning, and algorithmic refinement.",
    deliverables: ["Cloud Cost Optimization Report", "P99 Latency Profiling Traces", "Capacity Scaling Playbook"],
    duration: "ONGOING",
    auditStandard: "Continuous compounding efficiency; 30%+ annual compute cost reduction.",
    description: "Software engineering does not end at production release. We continually profile memory allocation, query plans, and vector embeddings to optimize performance and reduce cloud spend.",
  },
];

export default function EngineeringPage() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background */}
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Page Hero Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={24}>
          <div className="max-w-4xl mb-20 space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>AURION METHODOLOGY • 11 STAGES</span>
            </div>

            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
              FROM IDEA <br />
              TO <br />
              <span className="text-accent">PRODUCTION.</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
              Our engineering delivery pipeline is built on mathematical rigor, typed contracts, and zero guesswork.
              Explore each stage of our end-to-end delivery system below.
            </p>
          </div>
        </ScrollReveal>

        {/* Giant Vertical Engineering Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Vertical Pipeline Step List with Shared layoutId */}
          <div className="lg:col-span-5 space-y-3">
            {ENGINEERING_PIPELINE.map((stage, idx) => {
              const isActive = idx === activeStageIndex;

              return (
                <motion.div
                  key={stage.step}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`cursor-pointer p-5 border transition-colors duration-200 relative flex items-center justify-between ${
                    isActive
                      ? "bg-surface-elevated border-accent shadow-[0_0_20px_rgba(201,148,62,0.15)]"
                      : "bg-[#080A0B] border-surface-border hover:border-surface-hover opacity-85"
                  }`}
                >
                  {/* Shared layoutId Active Border Highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="active-stage-indicator"
                      className="absolute inset-0 border border-accent bg-accent/5 pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-4">
                    <span className="font-mono text-xs text-accent font-bold">
                      {stage.step}
                    </span>
                    <div>
                      <div className="font-sans font-bold text-base text-primary tracking-tight">
                        {stage.name}
                      </div>
                      <div className="font-mono text-[10px] text-primary-muted mt-0.5">
                        {stage.duration}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-2">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    )}
                    <ChevronDown
                      className={`w-4 h-4 text-primary-muted transition-transform duration-200 ${
                        isActive ? "-rotate-90 text-accent" : ""
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Stage Inspection Console with AnimatePresence */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStageIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 luxury-glass border border-surface-border space-y-8"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-surface-border/60">
                  <div>
                    <div className="font-mono text-xs text-accent font-semibold tracking-widest uppercase">
                      STAGE {ENGINEERING_PIPELINE[activeStageIndex].step} // SPECIFICATION
                    </div>
                    <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary mt-2">
                      {ENGINEERING_PIPELINE[activeStageIndex].name}
                    </h2>
                  </div>

                  <div className="text-right font-mono text-xs text-primary-muted">
                    <div className="text-accent font-bold">
                      {ENGINEERING_PIPELINE[activeStageIndex].duration}
                    </div>
                    <div className="text-[10px]">TIME TO COMPLETION</div>
                  </div>
                </div>

                {/* Subtitle & Deep Description */}
                <div className="space-y-4">
                  <p className="font-sans text-base text-primary font-medium leading-relaxed">
                    {ENGINEERING_PIPELINE[activeStageIndex].subtitle}
                  </p>

                  <p className="font-sans text-sm text-primary-muted leading-relaxed">
                    {ENGINEERING_PIPELINE[activeStageIndex].description}
                  </p>
                </div>

                {/* Deliverables List with Staggered Entrance */}
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs text-accent tracking-widest uppercase">
                    VERIFIED ARTIFACT DELIVERABLES:
                  </div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    {ENGINEERING_PIPELINE[activeStageIndex].deliverables.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="p-3 bg-surface border border-surface-border flex items-start gap-2.5 font-sans text-xs text-primary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-tech-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Audit Standard */}
                <div className="p-4 bg-[#080A0B] border border-surface-border/60 font-mono text-xs space-y-1">
                  <div className="text-tech-teal text-[10px] uppercase tracking-wider">
                    ENGINEERING QUALITY BENCHMARK
                  </div>
                  <div className="text-primary-muted">
                    {ENGINEERING_PIPELINE[activeStageIndex].auditStandard}
                  </div>
                </div>

                {/* Action */}
                <div className="pt-4 flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      setActiveStageIndex(
                        (prev) => (prev + 1) % ENGINEERING_PIPELINE.length
                      )
                    }
                    className="px-4 py-2 bg-surface hover:bg-surface-elevated border border-surface-border text-primary font-mono text-xs flex items-center gap-2 transition-colors"
                  >
                    <span>ADVANCE TO NEXT STAGE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  </motion.button>

                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-wider shadow-[0_2px_20px_rgba(201,148,62,0.2)]"
                    >
                      <span>COMMENCE DISCOVERY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

