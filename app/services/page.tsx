import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Search, Layers, Terminal } from "lucide-react";
import { AmbientBackground } from "@/components/framer/AmbientBackground";
import { ServiceRow, ServiceRowItem } from "@/components/framer/ServiceRow";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";

export const metadata: Metadata = {
  title: "Technology Services & Systems Catalog | Aurion Conclave",
  description:
    "One technology partner across software engineering, AI systems, cloud infrastructure, data pipelines, automation, and cybersecurity.",
};

const PRIMARY_SERVICES: ServiceRowItem[] = [
  {
    number: "01",
    title: "AI & INTELLIGENT SYSTEMS",
    category: "Autonomous Cognition",
    shortDescription:
      "Autonomous reasoning agents, multi-agent swarm orchestration, RAG vector retrieval, voice duplex engines, and enterprise document intelligence.",
    technologies: ["Autonomous Agents", "RAG Knowledge", "LLM Orchestration", "Voice Duplex"],
    slug: "/services/ai",
    stat: "24 Specialized Systems",
  },
  {
    number: "02",
    title: "SOFTWARE ENGINEERING",
    category: "Core Engineering",
    shortDescription:
      "Mission-critical backend architectures, typed contracts, distributed consensus systems, high-concurrency microservices, and bespoke software platforms.",
    technologies: ["Rust", "TypeScript / Node", "Distributed Systems", "Hexagonal Architecture"],
    slug: "/services/software",
    stat: "18 Engineering Disciplines",
  },
  {
    number: "03",
    title: "MACHINE LEARNING",
    category: "Predictive Models",
    shortDescription:
      "Time-series predictive forecasting, computer vision perception, deep representation learning, anomaly detection, and automated risk scoring models.",
    technologies: ["PyTorch", "ONNX Runtime", "Computer Vision", "Anomaly Detection"],
    slug: "/services/ml",
    stat: "15 Production Models",
  },
  {
    number: "04",
    title: "CLOUD & INFRASTRUCTURE",
    category: "Distributed Compute",
    shortDescription:
      "Multi-region Kubernetes clusters, serverless event-driven fabrics, infrastructure-as-code GitOps, and resilient multi-cloud failover topologies.",
    technologies: ["Kubernetes", "AWS / Azure / GCP", "Terraform", "Serverless"],
    slug: "/services/cloud",
    stat: "99.99% Availability",
  },
  {
    number: "05",
    title: "DATA & ANALYTICS",
    category: "Intelligence Fabric",
    shortDescription:
      "Vectorized columnar lakehouses, real-time telemetry streaming, low-latency ETL/ELT pipelines, and sub-second BI visualization layers.",
    technologies: ["ClickHouse", "Apache Kafka", "DuckDB", "Real-Time Streaming"],
    slug: "/services/data",
    stat: "Sub-Second Ingestion",
  },
  {
    number: "06",
    title: "AUTOMATION",
    category: "Operational Systems",
    shortDescription:
      "Durable workflow orchestration, enterprise ERP and CRM sync hubs, robotic event choreography, and cognitive decision automation pipelines.",
    technologies: ["Temporal.io", "Event-Driven", "API Choreography", "Robotic Pipelines"],
    slug: "/services/automation",
    stat: "Zero-Loss Workflows",
  },
  {
    number: "07",
    title: "WEB & MOBILE",
    category: "High-Performance Interfaces",
    shortDescription:
      "Sub-millisecond interactive web applications, native cross-platform mobile clients, offline-first data sync engines, and luxury design systems.",
    technologies: ["Next.js", "React Native", "WebAssembly", "Tailwind / Motion"],
    slug: "/services/web-mobile",
    stat: "60fps Render SLA",
  },
  {
    number: "08",
    title: "CYBERSECURITY",
    category: "Zero-Trust Architecture",
    shortDescription:
      "Kernel-level eBPF security telemetry, cryptographic mTLS identity, RFC 8693 token exchange delegation, continuous red-teaming, and compliance enforcement.",
    technologies: ["Zero-Trust mTLS", "eBPF", "OAuth2 / SPIFFE", "SOC2 / ISO 27001"],
    slug: "/services/cybersecurity",
    stat: "Continuous Verification",
  },
  {
    number: "09",
    title: "DEVOPS & PLATFORM",
    category: "Site Reliability",
    shortDescription:
      "Automated canary release pipelines, OpenTelemetry distributed tracing, immutable container builds, and comprehensive SRE observability infrastructure.",
    technologies: ["GitOps", "ArgoCD", "OpenTelemetry", "Prometheus / Grafana"],
    slug: "/services/devops",
    stat: "Deterministic Deploys",
  },
  {
    number: "10",
    title: "ENTERPRISE SYSTEMS",
    category: "Legacy Modernization",
    shortDescription:
      "Decomposition of legacy monolithic architectures, high-volume transactional ledger integrations, and sovereign on-premise AI deployments.",
    technologies: ["Monolith Decomposition", "Core Ledger Modernization", "Private Cloud AI"],
    slug: "/services/enterprise-systems",
    stat: "Zero Data-Loss Migration",
  },
];

import { ScrollReveal } from "@/components/framer/ScrollAnimations";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background: Subtle Moving Technical Typography Blueprint */}
      <AmbientBackground variant="services" />
      <TechnicalGrid crosshairs={true} />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Page Hero Header */}
        <ScrollReveal>
          <div className="max-w-4xl mb-20 space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>AURION SERVICES INDEX</span>
              <span className="text-primary-muted/40">•</span>
              <span className="text-primary-muted">10 CORE CATEGORIES</span>
            </div>

            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
              TECHNOLOGY <br />
              IS A <br />
              <span className="text-accent">STACK.</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
              One technology partner across software, AI, cloud, data, automation and infrastructure.
              Every layer engineered with mathematical precision, strict SLA commitments, and zero technical debt.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Service Rows that Expand on Hover */}
        <div className="border-t border-surface-border divide-y divide-surface-border">
          {PRIMARY_SERVICES.map((item, idx) => (
            <ServiceRow key={item.number} item={item} index={idx} />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <ScrollReveal>
          <div className="mt-24 p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="font-mono text-xs text-accent tracking-widest uppercase">
                NEED GRANULAR SERVICE SPECIFICATIONS?
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary">
                Every service is delivered under strict performance benchmarks and typed SLAs.
              </h3>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0 hover:scale-[1.02]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
