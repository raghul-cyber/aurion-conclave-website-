import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Workflow, Zap, CheckCircle2 } from "lucide-react";
import { AmbientBackground } from "@/components/framer/AmbientBackground";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { ArchitectureDiagram, PipelineStep } from "@/components/framer/ArchitectureDiagram";

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
    desc: "Multi-currency subscription reconciliation, usage-based metering aggregation, and automated tax calculations.",
    tech: ["Stripe Metering", "TaxJar", "QuickBooks Online", "Double-Entry Bookkeeping"],
  },
  {
    title: "AI-POWERED TRIAGE",
    desc: "Cognitive routing of enterprise customer requests, IT tickets, and compliance documents to appropriate teams.",
    tech: ["Classification Agents", "Zendesk API", "Slack Workflows", "Email Parsing"],
  },
  {
    title: "INFRASTRUCTURE RUNBOOKS",
    desc: "Self-healing cloud clusters that automatically isolate failing pods, rotate credentials, and mitigate DDoS.",
    tech: ["Kubernetes Operators", "Bash / Python", "AWS Lambda", "PagerDuty"],
  },
  {
    title: "ETL WORKFLOW CHOREOGRAPHY",
    desc: "Coordinated data ingestion DAGs ensuring dependent reporting tables only update after raw checks pass.",
    tech: ["Airflow", "Dagster", "Prefect", "dbt Cloud"],
  },
];

export default function AutomationServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background: Process Loops */}
      <AmbientBackground variant="automation" />
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">AUTOMATION</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>OPERATIONAL RESILIENCE • DURABLE CHOREOGRAPHY</span>
          </div>

          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
            REPETITION <br />
            SHOULD <br />
            BECOME <br />
            <span className="text-accent">SYSTEM.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
            Manual operational tasks are an architectural liability. We replace human transcription and brittle scripts
            with durable, self-healing state machines that never lose an event.
          </p>
        </div>

        {/* Process Loop Architecture Diagram */}
        <div className="mb-24">
          <ArchitectureDiagram
            title="DURABLE PROCESS EXECUTION LOOP"
            steps={AUTOMATION_LOOP}
          />
        </div>

        {/* Core Capabilities */}
        <div className="mb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>AUTOMATION PILLARS</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary mb-12">
            ZERO-LOSS ENTERPRISE FLOWS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTOMATION_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.title}
                className="p-8 luxury-glass border border-surface-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border/50 font-mono text-xs text-accent">
                    <span>FLOW // 0{idx + 1}</span>
                    <Workflow className="w-4 h-4 text-tech-teal" />
                  </div>

                  <h3 className="font-sans font-bold text-xl text-primary">
                    {cap.title}
                  </h3>

                  <p className="font-sans text-sm text-primary-muted mt-4 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/40 flex flex-wrap gap-2">
                  {cap.tech.map((t) => (
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

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-accent tracking-widest uppercase">
              REDUCE OPERATIONAL OVERHEAD
            </div>
            <h3 className="font-sans text-2xl font-bold text-primary">
              Eliminate repetitive human overhead through state-machine automation.
            </h3>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0"
          >
            <span>AUTOMATE A WORKFLOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
