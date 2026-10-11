import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import { AmbientBackground } from "@/components/framer/AmbientBackground";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { ArchitectureDiagram, PipelineStep } from "@/components/framer/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "AI & Intelligent Systems | Aurion Conclave",
  description:
    "Autonomous AI agents, RAG knowledge graphs, LLM integration, multimodal reasoning, voice duplex systems, and cognitive automation.",
};

const AI_PIPELINE: PipelineStep[] = [
  {
    number: "01",
    name: "INPUT",
    subtext: "Multimodal ingestion of documents, audio, or API payloads.",
    techDetail: "Deterministic token normalization, schema sanitization, and security filtering.",
  },
  {
    number: "02",
    name: "MODEL",
    subtext: "Orchestrated frontier LLMs with speculative decoding.",
    techDetail: "Mixture-of-agents routing with context compression and dynamic temperature tuning.",
  },
  {
    number: "03",
    name: "TOOLS",
    subtext: "Verified deterministic execution of internal APIs & sandboxed code.",
    techDetail: "Zero-trust sandbox execution with fine-grained RBAC and network rate limiting.",
  },
  {
    number: "04",
    name: "MEMORY",
    subtext: "Episodic and long-term vector knowledge graph recall.",
    techDetail: "Hybrid dense-sparse vector recall with recency weighting and semantic deduplication.",
  },
  {
    number: "05",
    name: "VALIDATION",
    subtext: "Formal mathematical and programmatic verification of outputs.",
    techDetail: "Pydantic schema assertions, factual citation check, and hallucination scoring.",
  },
  {
    number: "06",
    name: "OUTPUT",
    subtext: "Structured JSON, WebRTC audio stream, or automated commit.",
    techDetail: "Deterministic downstream delivery with cryptographic execution attestation.",
  },
];

const AI_CAPABILITIES = [
  { title: "Autonomous AI Agents", desc: "Goal-directed agents capable of independent multi-step execution, tool synthesis, and state reconciliation." },
  { title: "RAG & Vector Retrieval", desc: "Ultra-low latency retrieval augmented generation indexing dense documents, CAD blueprints, and transactional tables." },
  { title: "LLM Integration", desc: "Fine-tuning, prompt engineering, speculative decoding, and model routing across open-source and frontier models." },
  { title: "Multimodal Reasoning", desc: "Unified vision, audio, tabular, and textual cognitive pipelines for deep enterprise document comprehension." },
  { title: "Voice AI & Duplex Telephony", desc: "Sub-300ms bidirectional speech engines with real-time barge-in and human acoustic cadence." },
  { title: "Document Intelligence", desc: "Automated extraction and audit of multi-page legal contracts, financial sheets, and engineering specifications." },
  { title: "AI Copilots & Workflows", desc: "Domain-specific assistant layers embedded into enterprise CRMs, ERPs, and engineering IDEs." },
  { title: "Agent Orchestration", desc: "Hierarchical consensus swarms where supervisor agents delegate, critique, and synthesize sub-agent outputs." },
  { title: "AI Automation", desc: "Eliminating manual data transcription and verification through continuous background cognitive loops." },
];

export default function AiServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Subtle Neural Architecture Background */}
      <AmbientBackground variant="ai" />
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">AI & INTELLIGENT SYSTEMS</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>COGNITIVE COMPUTING • LAB-VERIFIED</span>
          </div>

          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
            INTELLIGENCE <br />
            ENGINEERED <br />
            <span className="text-accent">FOR WORK.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
            We architect sovereign, deterministic artificial intelligence systems that solve real operational friction.
            No hallucinated toys — only verifiable cognitive infrastructure.
          </p>
        </div>

        {/* Scroll / Interactive Cognitive Architecture Pipeline */}
        <div className="mb-24">
          <ArchitectureDiagram
            title="COGNITIVE EXECUTION TOPOLOGY"
            steps={AI_PIPELINE}
          />
        </div>

        {/* Core AI Capabilities Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>CAPABILITY DOMAINS</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary mb-12">
            INTELLIGENT SYSTEMS SUITE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.title}
                className="p-8 luxury-glass border border-surface-border hover:border-accent/40 transition-all duration-300"
              >
                <div className="font-mono text-xs text-accent mb-3">0{idx + 1}</div>
                <h3 className="font-sans font-bold text-xl text-primary mb-3">
                  {cap.title}
                </h3>
                <p className="font-sans text-sm text-primary-muted leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Step CTA */}
        <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-accent tracking-widest uppercase">
              DEPLOY ENTERPRISE AI
            </div>
            <h3 className="font-sans text-2xl font-bold text-primary">
              Ready to engineer production AI systems with zero hallucinations?
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface hover:bg-surface-elevated border border-surface-border text-primary font-mono text-xs tracking-wider"
            >
              <span>EXPERIENCE AGENT LAB</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-wider shadow-[0_2px_20px_rgba(201,148,62,0.2)]"
            >
              <span>START DISCOVERY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
