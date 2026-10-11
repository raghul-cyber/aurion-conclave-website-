import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TypographicWall } from "@/components/reactbits/text/TypographicWall";
import { ArchitectureDiagram, PipelineStep } from "@/components/framer/ArchitectureDiagram";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

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
    name: "VALIDATION",
    subtext: "Formal mathematical and programmatic verification of outputs.",
    techDetail: "Pydantic schema assertions, factual citation check, and hallucination scoring.",
  },
  {
    number: "05",
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
];

export default function AIServicePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#111415] via-[#0b0e0f] to-[#060708] overflow-hidden">
      {/* Background Typographic Wall from React Bits Pro */}
      <TypographicWall
        words={[
          "AUTONOMOUS AGENTS",
          "RAG VECTOR KNOWLEDGE",
          "SPECULATIVE DECODING",
          "MULTIMODAL REASONING",
          "VOICE DUPLEX ENGINE",
          "COGNITIVE AUTOMATION"
        ]}
        opacity={0.8}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">SERVICES</Link>
          <span>/</span>
          <span className="text-accent">AI & INTELLIGENT SYSTEMS</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>COGNITIVE COMPUTING • LAB-VERIFIED</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            INTELLIGENCE ENGINEERED <br />
            <span className="text-accent">FOR WORK.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            We architect sovereign, deterministic artificial intelligence systems that solve real operational friction.
            No hallucinated toys — only verifiable cognitive infrastructure.
          </p>
        </div>

        {/* Architecture Pipeline: INPUT -> MODEL -> TOOLS -> VALIDATION -> OUTPUT */}
        <div className="mb-20">
          <ArchitectureDiagram
            title="COGNITIVE EXECUTION TOPOLOGY"
            steps={AI_PIPELINE}
          />
        </div>

        {/* Core AI Capabilities Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>CAPABILITY DOMAINS</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary mb-10">
            INTELLIGENT SYSTEMS SUITE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CAPABILITIES.map((cap, idx) => (
              <SpotlightCard
                key={cap.title}
                theme="dark"
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-accent mb-3">0{idx + 1}</div>
                  <h3 className="font-sans font-bold text-lg text-primary mb-2">
                    {cap.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-primary-muted leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Next Step CTA */}
        <div className="p-8 rounded-2xl luxury-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              DEPLOY ENTERPRISE AI
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Ready to engineer production AI systems with zero hallucinations?
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/agents">
              <SpecularButton variant="outline">
                <span>EXPERIENCE AGENT LAB</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </SpecularButton>
            </Link>

            <Link href="/contact">
              <SpecularButton variant="primary">
                <span>START DISCOVERY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </SpecularButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
