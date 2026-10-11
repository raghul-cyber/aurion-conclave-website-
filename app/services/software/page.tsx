import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Box, Layers, Cpu, ShieldCheck } from "lucide-react";
import { AmbientBackground } from "@/components/framer/AmbientBackground";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";

export const metadata: Metadata = {
  title: "Software Engineering & Distributed Systems | Aurion Conclave",
  description:
    "Mission-critical backend engineering, high-throughput microservices, distributed consensus architectures, typed APIs, and modern frontend platforms.",
};

const SOFTWARE_DOMAINS = [
  {
    name: "FRONTEND SYSTEMS",
    tagline: "Ultra-responsive, accessible, luxury interfaces.",
    tech: ["Next.js", "React 19", "WebAssembly", "TypeScript"],
    desc: "Crafting sub-100ms first-input delay interfaces with rigorous state boundaries, server components, and bespoke micro-interactions.",
  },
  {
    name: "BACKEND RUNTIMES",
    tagline: "High-concurrency services built for zero downtime.",
    tech: ["Rust", "Go", "Node.js", "gRPC / Protobuf"],
    desc: "Engineered with strict domain-driven hexagonal separation, lock-free concurrency, and deterministic latency distribution under extreme load.",
  },
  {
    name: "APIS & CONTRACTS",
    tagline: "Type-safe, versioned, distributed communications.",
    tech: ["GraphQL", "REST / OpenAPI", "ConnectRPC", "WebSockets"],
    desc: "Enforcing backward-compatible typed contracts with end-to-end telemetry and cryptographic token authentication across services.",
  },
  {
    name: "DATABASE ARCHITECTURES",
    tagline: "Optimized relational, columnar, and vector storage.",
    tech: ["PostgreSQL RLS", "ClickHouse", "Redis Sentinel", "Qdrant"],
    desc: "Carefully designed indexing topologies, automated read replicas, multi-tenant row-level security, and point-in-time recovery guarantees.",
  },
  {
    name: "DISTRIBUTED SYSTEMS",
    tagline: "Fault-tolerant event fabrics and consensus protocols.",
    tech: ["Raft Consensus", "Apache Kafka", "Event Sourcing", "CQRS"],
    desc: "Ensuring strict serializability, idempotent message consumers, partition tolerance, and zero-loss state machines.",
  },
  {
    name: "SAAS & ENTERPRISE",
    tagline: "Multi-tenant platforms with enterprise governance.",
    tech: ["SAML / SSO", "Audit Logging", "Stripe Billing", "Tenant Isolation"],
    desc: "Turnkey enterprise multi-tenancy including organization management, custom role hierarchies, and SOC2-compliant access trails.",
  },
];

export default function SoftwareServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background: Slowly Assembling Architectural Modules */}
      <AmbientBackground variant="software" />
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">SOFTWARE ENGINEERING</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>CORE SYSTEMS ENGINEERING • PRODUCTION GRADE</span>
          </div>

          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
            SOFTWARE <br />
            THAT <br />
            <span className="text-accent">HOLDS UP.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
            We build software that outlasts trends. Modular architectures, typed interfaces, and zero architectural shortcuts
            designed to run continuously under high enterprise volume.
          </p>
        </div>

        {/* Floating Architectural System Modules Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>ARCHITECTURAL BLOCKS</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary mb-12">
            THE PRODUCTION FOUNDATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFTWARE_DOMAINS.map((domain, idx) => (
              <div
                key={domain.name}
                className="group p-8 luxury-glass border border-surface-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border/50 font-mono text-xs text-accent">
                    <span>BLOCK // 0{idx + 1}</span>
                    <Box className="w-4 h-4 text-primary-muted group-hover:text-accent transition-colors" />
                  </div>

                  <h3 className="font-sans font-bold text-xl text-primary group-hover:text-accent transition-colors">
                    {domain.name}
                  </h3>
                  <div className="font-mono text-xs text-primary-muted mt-1">
                    {domain.tagline}
                  </div>

                  <p className="font-sans text-sm text-primary-muted mt-4 leading-relaxed">
                    {domain.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/40 flex flex-wrap gap-2">
                  {domain.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-surface border border-surface-border font-mono text-[10px] text-accent/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Rigor Callout */}
        <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-accent tracking-widest uppercase">
              ZERO TECHNICAL DEBT PLEDGE
            </div>
            <h3 className="font-sans text-2xl font-bold text-primary">
              Every codebase is delivered with automated CI/CD, 90%+ branch test coverage, and documentation.
            </h3>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0"
          >
            <span>ENGINEER YOUR SYSTEM</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
