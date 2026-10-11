import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Box } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

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
    <div className="relative min-h-screen bg-gradient-to-b from-[#111415] via-[#0b0e0f] to-[#060708] overflow-hidden">
      {/* Spectral Drape Background from React Bits Pro */}
      <SpectralDrape opacity={0.85} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">SOFTWARE ENGINEERING</span>
        </div>

        {/* Hero Header with Clamped Typography */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>CORE SYSTEMS ENGINEERING • PRODUCTION GRADE</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            SOFTWARE THAT <br />
            <span className="text-accent">HOLDS UP.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            We build software that outlasts trends. Modular architectures, typed interfaces, and zero architectural shortcuts
            designed to run continuously under high enterprise volume.
          </p>
        </div>

        {/* System Modules Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>ARCHITECTURAL BLOCKS</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary mb-10">
            THE PRODUCTION FOUNDATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFTWARE_DOMAINS.map((domain, idx) => (
              <SpotlightCard
                key={domain.name}
                theme="dark"
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-accent">
                    <span>BLOCK // 0{idx + 1}</span>
                    <Box className="w-4 h-4 text-primary-muted group-hover:text-accent transition-colors" />
                  </div>

                  <h3 className="font-sans font-bold text-lg text-primary mb-1">
                    {domain.name}
                  </h3>
                  <div className="font-mono text-xs text-tech-teal mb-3">
                    {domain.tagline}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-primary-muted leading-relaxed font-normal">
                    {domain.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-1.5 mt-6">
                  {domain.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-accent/80 px-2 py-0.5 rounded bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl luxury-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              ENTERPRISE PLATFORM ARCHITECTURE
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Ready to engineer fault-tolerant systems with zero technical debt?
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>ENGAGE ENGINEERING POD</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
