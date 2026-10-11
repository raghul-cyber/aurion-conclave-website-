import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cloud, Server, Shield, Activity, Network } from "lucide-react";
import { AmbientBackground } from "@/components/framer/AmbientBackground";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";

export const metadata: Metadata = {
  title: "Cloud Infrastructure & Platform Architecture | Aurion Conclave",
  description:
    "Multi-region Kubernetes clusters, serverless event-driven fabrics, infrastructure-as-code GitOps, multi-cloud failover, and zero-downtime scaling.",
};

const CLOUD_COMPONENTS = [
  {
    name: "CLOUD ARCHITECTURE",
    desc: "Multi-region, multi-cloud topologies tailored for sovereign resilience across AWS, Azure, and Google Cloud Platform.",
    tech: ["AWS", "Azure", "GCP", "Multi-Cloud"],
  },
  {
    name: "CONTAINERS & KUBERNETES",
    desc: "Production-grade EKS/GKE cluster deployment with auto-scaling node groups, Cilium CNI, and Istio service mesh.",
    tech: ["Docker", "Kubernetes", "Cilium", "Helm"],
  },
  {
    name: "SERVERLESS & EVENT FABRICS",
    desc: "Low-latency event-driven microservices running on edge workers and serverless runtimes with sub-10ms cold starts.",
    tech: ["AWS Lambda", "Cloudflare Workers", "EventBridge", "SQS"],
  },
  {
    name: "INFRASTRUCTURE AS CODE",
    desc: "Deterministic, peer-reviewed infrastructure provisioning with Terraform, OpenTofu, and GitOps automation.",
    tech: ["Terraform", "Terragrunt", "ArgoCD", "GitOps"],
  },
  {
    name: "OBSERVABILITY & SRE",
    desc: "Full-stack distributed tracing, Prometheus metric collection, and structured OpenTelemetry ingestion.",
    tech: ["OpenTelemetry", "Grafana", "Prometheus", "Datadog"],
  },
  {
    name: "ZERO-TRUST CLOUD SECURITY",
    desc: "Workload identity attestation (SPIRE), least-privilege IAM policies, and encrypted transit fabrics.",
    tech: ["SPIFFE/SPIRE", "AWS KMS", "HashiCorp Vault", "WAF"],
  },
];

export default function CloudServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background: Abstract Cloud Infrastructure Diagram Topology */}
      <AmbientBackground variant="cloud" />
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">CLOUD & INFRASTRUCTURE</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>DISTRIBUTED COMPUTE • 99.99% AVAILABILITY SLA</span>
          </div>

          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
            INFRASTRUCTURE <br />
            WITHOUT <br />
            <span className="text-accent">THE NOISE.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
            We eliminate fragile manual server setups. Every cluster, VPC, and deployment pipeline is codified,
            resilient to regional disasters, and mathematically optimized for compute efficiency.
          </p>
        </div>

        {/* Animated Infrastructure Topology Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>INFRASTRUCTURE PILLARS</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary mb-12">
            HYPERSCALE ARCHITECTURE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLOUD_COMPONENTS.map((comp, idx) => (
              <div
                key={comp.name}
                className="p-8 luxury-glass border border-surface-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border/50 font-mono text-xs text-accent">
                    <span>LAYER // 0{idx + 1}</span>
                    <Server className="w-4 h-4 text-tech-teal" />
                  </div>

                  <h3 className="font-sans font-bold text-xl text-primary">
                    {comp.name}
                  </h3>

                  <p className="font-sans text-sm text-primary-muted mt-4 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/40 flex flex-wrap gap-2">
                  {comp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-surface border border-surface-border font-mono text-[10px] text-tech-teal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Metric Callout */}
        <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-accent tracking-widest uppercase">
              ZERO-DOWNTIME COMMITMENT
            </div>
            <h3 className="font-sans text-2xl font-bold text-primary">
              Our automated multi-region failovers ensure your services remain online 24/7/365.
            </h3>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0"
          >
            <span>ARCHITECT YOUR CLOUD</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
