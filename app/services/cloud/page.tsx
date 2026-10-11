import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Cloud, Server } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

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
          <span className="text-accent">CLOUD & INFRASTRUCTURE</span>
        </div>

        {/* Hero Header with Clamped Typography */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>CLOUD ARCHITECTURE • MISSION CRITICAL</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            INFRASTRUCTURE <br />
            <span className="text-accent">AS AN ENGINE.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            We build sovereign, resilient cloud platforms engineered for zero downtime, deterministic automated deployments,
            and cost-optimized elastic scale.
          </p>
        </div>

        {/* Cloud Components Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>PLATFORM DOMAINS</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary mb-10">
            DISTRIBUTED COMPUTE TOPOLOGY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLOUD_COMPONENTS.map((item, idx) => (
              <SpotlightCard
                key={item.name}
                theme="dark"
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-accent">
                    <span>LAYER // 0{idx + 1}</span>
                    <Cloud className="w-4 h-4 text-tech-teal" />
                  </div>

                  <h3 className="font-sans font-bold text-lg text-primary mb-2">
                    {item.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-primary-muted leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-1.5 mt-6">
                  {item.tech.map((t) => (
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
              PRODUCTION CLOUD READINESS
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Ready to upgrade your infrastructure with typed GitOps pipelines?
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>ENGAGE CLOUD POD</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
