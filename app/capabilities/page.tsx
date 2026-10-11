import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { TechConstellation } from "@/components/TechConstellation";
import { ConsultancyProcessTimeline } from "@/components/ConsultancyProcessTimeline";
import {
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  ArrowRight,
  Database,
  Terminal,
  Activity,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Capabilities & Systems Architecture | Aurion Conclave",
  description:
    "End-to-end engineering pipeline from mathematical discovery and hexagonal architecture to distributed Kubernetes deployment, AI/ML pipelines, and observability.",
};

export default function CapabilitiesPage() {
  const PIPELINE_NODES = [
    { step: "01", name: "DISCOVERY", desc: "First-principles interrogation of business bottlenecks & mathematical constraints." },
    { step: "02", name: "REQUIREMENTS", desc: "Strict SLA contracts, throughput budgets, and statutory compliance (SOC2/HIPAA)." },
    { step: "03", name: "ARCHITECTURE", desc: "C4 model diagrams, domain-driven boundaries, and ADR documentation." },
    { step: "04", name: "DESIGN", desc: "Pixel-accurate, accessible UI systems and WebGL data visualization interfaces." },
    { step: "05", name: "ENGINEERING", desc: "Typed, memory-safe backend engines in Go, Rust, TypeScript, and Python." },
    { step: "06", name: "AI / ML", desc: "Autonomous agent swarms, fine-tuned foundational models, and vector RAG." },
    { step: "07", name: "INTEGRATION", desc: "Resilient event streaming (Kafka) and ERP/CRM transactional hubs." },
    { step: "08", name: "TESTING", desc: "100k+ concurrent user stress load tests and automated penetration audits." },
    { step: "09", name: "DEPLOYMENT", desc: "Zero-downtime canary rollouts on multi-region Kubernetes clusters." },
    { step: "10", name: "OBSERVABILITY", desc: "Distributed tracing with OpenTelemetry, Prometheus metrics, and eBPF." },
    { step: "11", name: "OPTIMIZATION", desc: "Continuous SQL index tuning, memory profiling, and cloud FinOps reductions." },
  ];

  return (
    <div className="relative min-h-screen py-16 bg-[#050607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
            <span>AURION CONCLAVE</span>
            <span>•</span>
            <span className="text-tech-cyan">PRODUCTION SYSTEMS PIPELINE</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-primary tracking-tight">
            FROM IDEA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-primary">
              TO PRODUCTION.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-primary-muted mt-4 leading-relaxed">
            We reject the dichotomy between rapid innovation and mission-critical engineering.
            Below is the comprehensive engineering architecture through which every Aurion system is conceived,
            hardened, and scaled.
          </p>
        </div>

        {/* 11-Stage Pipeline Diagram */}
        <div className="p-6 sm:p-10 bg-[#0A0D0E] border border-surface-border shadow-2xl space-y-8 rounded-sm">
          <div className="flex items-center justify-between pb-4 border-b border-surface-border">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase">
              <Workflow className="w-4 h-4" />
              <span>THE 11-STAGE PRODUCTION CONTINUUM</span>
            </div>
            <span className="font-mono text-[11px] text-tech-cyan">END-TO-END VERIFICATION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PIPELINE_NODES.map((node, index) => (
              <div
                key={node.step}
                className="p-5 bg-[#050607] border border-surface-border hover:border-accent transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-primary-muted mb-2">
                    <span className="text-accent font-bold">NODE {node.step}</span>
                    <span className="text-[10px] text-success">ACTIVE</span>
                  </div>
                  <h3 className="font-sans font-bold text-base text-primary">
                    {node.name}
                  </h3>
                  <p className="font-sans text-xs text-primary-muted mt-2 leading-relaxed">
                    {node.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border/40 font-mono text-[10px] text-tech-cyan">
                  Phase Verification Gate {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Constellation */}
        <TechConstellation />

        {/* Consultancy Process Timeline */}
        <ConsultancyProcessTimeline />

        {/* Intake CTA banner */}
        <div className="p-8 sm:p-12 bg-[#101415] border border-accent/40 rounded flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-sans text-2xl font-bold text-primary">
              Have an engineering challenge that requires deep systems architecture?
            </h3>
            <p className="font-sans text-sm text-primary-muted">
              Talk directly with our Principal Systems Architect. Zero sales fluff, pure engineering rigor.
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
