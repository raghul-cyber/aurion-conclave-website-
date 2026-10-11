"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CapabilityFamily {
  number: string;
  name: string;
  slug: string;
  subtext: string;
  glowColor: string;
  technologies: string[];
}

const CAPABILITY_FAMILIES: CapabilityFamily[] = [
  {
    number: "01",
    name: "AI",
    slug: "/services/ai",
    subtext: "Autonomous reasoning agents, goal-directed planners, and high-throughput multi-agent swarms.",
    glowColor: "rgba(201, 148, 62, 0.08)",
    technologies: ["LLM Orchestration", "Agent Workflows", "Vector Retrieval"],
  },
  {
    number: "02",
    name: "SOFTWARE",
    slug: "/services/software",
    subtext: "Mission-critical architectures, typed contracts, distributed systems, and low-latency backends.",
    glowColor: "rgba(243, 240, 232, 0.06)",
    technologies: ["Rust", "TypeScript", "Distributed Concurrency"],
  },
  {
    number: "03",
    name: "CLOUD",
    slug: "/services/cloud",
    subtext: "Multi-region Kubernetes fabrics, automated canary deployments, and zero-downtime scaling.",
    glowColor: "rgba(118, 191, 185, 0.08)",
    technologies: ["Kubernetes", "AWS / GCP", "Terraform GitOps"],
  },
  {
    number: "04",
    name: "DATA",
    slug: "/services/data",
    subtext: "Vectorized columnar lakehouses, real-time telemetry streaming, and sub-second analytics.",
    glowColor: "rgba(201, 148, 62, 0.08)",
    technologies: ["ClickHouse", "Apache Kafka", "DuckDB"],
  },
  {
    number: "05",
    name: "AUTOMATION",
    slug: "/services/automation",
    subtext: "Durable workflow choreography, enterprise ERP integrations, and resilient operational pipelines.",
    glowColor: "rgba(118, 191, 185, 0.08)",
    technologies: ["Temporal.io", "Event Driven", "API Connectors"],
  },
  {
    number: "06",
    name: "SECURITY",
    slug: "/services/cybersecurity",
    subtext: "Zero-trust identity verification, eBPF intrusion observation, and continuous security automation.",
    glowColor: "rgba(201, 148, 62, 0.07)",
    technologies: ["Zero-Trust mTLS", "eBPF", "Cryptographic IAM"],
  },
];

export const HomeCapabilities: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const activeCapability = activeIdx !== null ? CAPABILITY_FAMILIES[activeIdx] : null;

  return (
    <section className="relative py-28 sm:py-36 bg-[#080A0B] border-b border-surface-border overflow-hidden transition-colors duration-700">
      {/* Dynamic Subtle Ambient Atmosphere */}
      <AnimatePresence>
        {activeCapability && (
          <motion.div
            key={activeCapability.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, ${activeCapability.glowColor} 0%, transparent 70%)`,
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>MAJOR FAMILIES</span>
              <span className="text-primary-muted/40">•</span>
              <span className="text-primary-muted">06 CORE DOMAINS</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
              CAPABILITIES.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-light tracking-wider transition-colors"
          >
            <span>FULL 140+ SERVICE INDEX</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Giant Typography List */}
        <div className="divide-y divide-surface-border">
          {CAPABILITY_FAMILIES.map((cap, idx) => {
            const isHovered = activeIdx === idx;

            return (
              <div
                key={cap.name}
                onMouseEnter={() => setActiveIdx(idx)}
                className="group relative transition-all duration-300"
              >
                <Link
                  href={cap.slug}
                  className="py-10 sm:py-14 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  {/* Left: Giant Typography & Number */}
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="font-sans text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary group-hover:text-accent transition-colors duration-300">
                      {cap.name}
                    </span>
                    <span className="font-mono text-base sm:text-2xl text-accent font-semibold">
                      {cap.number}
                    </span>
                  </div>

                  {/* Right: Technical preview and hover arrow */}
                  <div className="flex items-center gap-8 md:max-w-md">
                    <div className="space-y-2">
                      <p className="font-sans text-xs sm:text-sm text-primary-muted group-hover:text-primary transition-colors leading-relaxed">
                        {cap.subtext}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cap.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] text-accent/80 px-2 py-0.5 bg-surface border border-surface-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-full border border-surface-border group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center transition-all shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-primary-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
