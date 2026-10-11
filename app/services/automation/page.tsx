import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Workflow } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { ArchitectureDiagram, PipelineStep } from "@/components/framer/ArchitectureDiagram";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

export const metadata: Metadata = {
  title: "Workflow Automation & Durable Orchestration | Aurion Conclave",
  description:
    "Durable workflow orchestration, enterprise ERP integration hubs, event-driven choreographies, and zero-loss operational automation.",
};

const AUTOMATION_LOOP: PipelineStep[] = [
  {
    number: "01",
    name: "TRIGGER",
    subtext: "Webhook, transactional event, queue message, or cron schedule.",
    techDetail: "Kafka topic listener, Stripe webhook receiver, or Cloudflare worker trigger.",
  },
  {
    number: "02",
    name: "LOGIC",
    subtext: "Durable workflow decision tree with state persistence.",
    techDetail: "Temporal.io deterministic activity execution with automatic retry backoff.",
  },
  {
    number: "03",
    name: "ACTION",
    subtext: "Outbound mutation across downstream APIs, databases, or ERPs.",
    techDetail: "Idempotent external API execution with cryptographic payload signing.",
  },
  {
    number: "04",
    name: "VALIDATION",
    subtext: "Assertion of operational invariants and reconciliation checks.",
    techDetail: "Two-phase commit verification and automated compensation on failure.",
  },
  {
    number: "05",
    name: "RESULT",
    subtext: "Audited event output with immutable compliance log entry.",
    techDetail: "Immutable audit event written to append-only log with real-time telemetry broadcast.",
  },
];

const AUTOMATION_CAPABILITIES = [
  {
    title: "DURABLE WORKFLOWS",
    desc: "Long-running business processes that survive server crashes, network partitions, and third-party API outages.",
    tech: ["Temporal.io", "Cadence", "State Machines", "Event Sourcing"],
  },
  {
    title: "ENTERPRISE ERP & CRM SYNCS",
    desc: "Bi-directional synchronization between Salesforce, SAP, NetSuite, and internal operational data stores.",
    tech: ["REST Webhooks", "OAuth2 Token Pools", "Bulk APIs", "Rate Limiters"],
  },
  {
    title: "BILLING & LEDGER AUTOMATION",
    desc: "Automated recurring invoice generation, subscription reconciliation, multi-currency revenue attribution, and tax routing.",
    tech: ["Stripe Invoicing", "Double-Entry Accounting", "Webhook Verification"],
  },
  {
    title: "COGNITIVE EVENT ROUTERS",
    desc: "AI-assisted triage routing incoming customer requests, document verification triggers, and fraud escalations.",
    tech: ["Vector Classification", "Deterministic Routing", "OpenAPI Bridges"],
  },
  {
    title: "RELIABILITY RECONCILIATION",
    desc: "Automated nightly drift verification ensuring operational databases and accounting records stay in parity.",
    tech: ["Checksum Auditing", "Automated Diff Heuristics", "Slack / PagerDuty Alerts"],
  },
  {
    title: "HUMAN-IN-THE-LOOP BRIDGES",
    desc: "Workflows that pause safely for executive approval, compliance sign-off, or physical confirmation before progressing.",
    tech: ["Temporal Signals", "JWT Approval Links", "Encrypted Form Bridges"],
  },
];

export default function AutomationServicesPage() {
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
          <span className="text-accent">AUTOMATION</span>
        </div>

        {/* Hero Header with Clamped Typography */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>OPERATIONAL SYSTEMS • DURABLE CHOREOGRAPHY</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            AUTOMATION WITHOUT <br />
            <span className="text-accent">STATE DRIFT.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            We engineer mission-critical workflow engines that survive hardware failures, network timeouts,
            and third-party API disruptions with zero data loss.
          </p>
        </div>

        {/* Automation Workflow Progression */}
        <div className="mb-20">
          <ArchitectureDiagram
            title="DURABLE WORKFLOW TOPOLOGY (TRIGGER → LOGIC → ACTION → VALIDATION → RESULT)"
            steps={AUTOMATION_LOOP}
          />
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>AUTOMATION DISCIPLINES</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary mb-10">
            DURABLE ORCHESTRATION SUITE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTOMATION_CAPABILITIES.map((item, idx) => (
              <SpotlightCard
                key={item.title}
                theme="dark"
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-accent">
                    <span>WORKFLOW // 0{idx + 1}</span>
                    <Workflow className="w-4 h-4 text-tech-teal" />
                  </div>

                  <h3 className="font-sans font-bold text-lg text-primary mb-2">
                    {item.title}
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
              DURABLE PIPELINE ARCHITECTURE
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Ready to eliminate brittle scripts and migrate to durable state machines?
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>DESIGN AUTOMATION PIPELINE</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
