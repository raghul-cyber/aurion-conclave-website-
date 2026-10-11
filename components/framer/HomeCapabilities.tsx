"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ShinyText } from "@/components/reactbits/text/ShinyText";
import { MosaicWaves } from "@/components/reactbits/backgrounds/MosaicWaves";

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
    name: "AI & INTELLIGENT SYSTEMS",
    slug: "/services/ai",
    subtext: "Autonomous reasoning agents, goal-directed planners, and high-throughput multi-agent swarms.",
    glowColor: "rgba(195, 145, 66, 0.08)",
    technologies: ["LLM Orchestration", "Agent Workflows", "Vector Retrieval"],
  },
  {
    number: "02",
    name: "SOFTWARE ENGINEERING",
    slug: "/services/software",
    subtext: "Mission-critical architectures, typed contracts, distributed systems, and low-latency backends.",
    glowColor: "rgba(244, 241, 233, 0.06)",
    technologies: ["Rust", "TypeScript", "Distributed Concurrency"],
  },
  {
    number: "03",
    name: "CLOUD & INFRASTRUCTURE",
    slug: "/services/cloud",
    subtext: "Multi-region Kubernetes fabrics, automated canary deployments, and zero-downtime scaling.",
    glowColor: "rgba(100, 142, 139, 0.08)",
    technologies: ["Kubernetes", "AWS / GCP", "Terraform GitOps"],
  },
  {
    number: "04",
    name: "MACHINE LEARNING",
    slug: "/services/ml",
    subtext: "Predictive pipelines, computer vision, time-series forecasting, and foundation fine-tuning.",
    glowColor: "rgba(195, 145, 66, 0.08)",
    technologies: ["PyTorch", "Manifold Learning", "Feature Stores"],
  },
  {
    number: "05",
    name: "DATA & ANALYTICS",
    slug: "/services/data",
    subtext: "Vectorized columnar lakehouses, real-time telemetry streaming, and sub-second analytics.",
    glowColor: "rgba(100, 142, 139, 0.08)",
    technologies: ["ClickHouse", "Apache Kafka", "DuckDB"],
  },
  {
    number: "06",
    name: "AUTOMATION",
    slug: "/services/automation",
    subtext: "Durable workflow choreography, enterprise integrations, and resilient operational pipelines.",
    glowColor: "rgba(195, 145, 66, 0.08)",
    technologies: ["Temporal.io", "Event Driven", "API Connectors"],
  },
  {
    number: "07",
    name: "CYBERSECURITY",
    slug: "/services/cybersecurity",
    subtext: "Zero-trust identity verification, eBPF intrusion observation, and continuous security automation.",
    glowColor: "rgba(195, 145, 66, 0.07)",
    technologies: ["Zero-Trust mTLS", "eBPF", "Cryptographic IAM"],
  },
];

export const HomeCapabilities: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const activeCapability = activeIdx !== null ? CAPABILITY_FAMILIES[activeIdx] : null;

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0d0e] via-[#0d1011] to-[#0a0d0e] border-b border-surface-border overflow-hidden transition-colors duration-700">
      {/* Background Mosaic Waves from React Bits Pro (Waves rolling through a mosaic of shifting tiles) */}
      <MosaicWaves opacity={0.85} />
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

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>CORE ARCHITECTURES</span>
              <span className="text-white/20">•</span>
              <span className="text-primary-muted">07 MAJOR DISCIPLINES</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              CAPABILITIES.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-mid tracking-wider transition-colors"
          >
            <span>FULL 164-SERVICE CATALOG</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Disciplines List with Clamped Controlled Typographic Scale */}
        <div className="divide-y divide-white/10">
          {CAPABILITY_FAMILIES.map((cap, idx) => {
            return (
              <div
                key={cap.name}
                onMouseEnter={() => setActiveIdx(idx)}
                className="group relative transition-all duration-300"
              >
                <Link
                  href={cap.slug}
                  className="py-8 sm:py-10 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  {/* Left: Controlled Typographic Entrance */}
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base text-accent font-semibold">
                      {cap.number}
                    </span>
                    <span className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-primary group-hover:text-accent transition-colors duration-300">
                      {cap.name}
                    </span>
                  </div>

                  {/* Right: Technical preview and hover arrow */}
                  <div className="flex items-center gap-6 md:max-w-md">
                    <div className="space-y-2">
                      <p className="font-sans text-xs sm:text-sm text-primary-muted group-hover:text-primary transition-colors leading-relaxed">
                        {cap.subtext}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {cap.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] text-accent/80 px-2 py-0.5 rounded bg-white/5 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-white/15 group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-primary-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

export default HomeCapabilities;
