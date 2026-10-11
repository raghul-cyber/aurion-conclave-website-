"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Search,
  Code2,
  Database,
  Shield,
  Mic,
  ArrowRight,
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface AgentPreset {
  id: string;
  name: string;
  category: string;
  label: string;
  icon: any;
  defaultPrompt: string;
  executionStages: string[];
  outputData: {
    status: string;
    metrics: { label: string; value: string }[];
    summary: string;
    details: string[];
  };
}

const PRESET_AGENTS: AgentPreset[] = [
  {
    id: "research",
    name: "MARKET RESEARCH AGENT",
    category: "Autonomous Deep Synthesis",
    label: "RESEARCH",
    icon: Search,
    defaultPrompt: "Synthesize high-frequency GPU cluster pricing across AWS, GCP, and CoreWeave for H100 SXM5.",
    executionStages: [
      "INPUT RECEIVED: GPU COMPUTE BENCHMARKS",
      "CONTEXT RETRIEVED: LIVE WEB API STREAM",
      "CLUSTER ANALYZED: 14 PROVIDERS CHECKED",
      "KEY INFORMATION EXTRACTED: SPOT VS RESERVED PRICING",
      "RESULT VALIDATED: ECONOMIC OPTIMAL PATH GENERATED",
    ],
    outputData: {
      status: "ANALYSIS SYNCHRONIZED",
      metrics: [
        { label: "SOURCES", value: "14" },
        { label: "COST DELTA", value: "-34.2%" },
        { label: "LATENCY", value: "310ms" },
      ],
      summary: "CoreWeave reserved 8x H100 instances deliver 34.2% lower cost per FP8 TFLOPS compared to public hyperscalers.",
      details: [
        "Network fabric latency: InfiniBand NDR 3.2Tbps verified.",
        "Cold-start pod spinning: 4.8 seconds average.",
        "Recommended deployment: Multi-cloud distributed inference failover.",
      ],
    },
  },
  {
    id: "document",
    name: "DOCUMENT ANALYST",
    category: "Cognitive Ingestion",
    label: "DOCUMENT",
    icon: FileText,
    defaultPrompt: "Ingest and audit Master Services Agreement: scan for indemnification liabilities and IP carve-outs.",
    executionStages: [
      "INPUT RECEIVED: MSA_2026_FINAL.PDF",
      "CONTEXT RETRIEVED: EMBEDDING VECTOR DB",
      "DOCUMENT ANALYZED: 42 SECTIONS CHECKED",
      "KEY INFORMATION EXTRACTED: 3 CLAUSES FLAGGED",
      "RESULT VALIDATED: ZERO COMPLIANCE VIOLATIONS",
    ],
    outputData: {
      status: "VERIFIED COMPLIANT",
      metrics: [
        { label: "PARSED SECTIONS", value: "42" },
        { label: "CONFIDENCE", value: "99.8%" },
        { label: "LATENCY", value: "240ms" },
      ],
      summary: "Contract structured under standard Delaware jurisdiction. Intellectual Property assignment clean across all schedules.",
      details: [
        "Section 14.2: Mutual indemnification capped at 2x annual contract value.",
        "Schedule B: Proprietary IP retention affirmed for Aurion Core algorithms.",
        "Warranty Clause: Standard 90-day defect rectification SLA verified.",
      ],
    },
  },
  {
    id: "code",
    name: "SYSTEMS CODE ARCHITECT",
    category: "Deterministic Refactoring",
    label: "CODE",
    icon: Code2,
    defaultPrompt: "Refactor Rust WebSocket gateway: reduce lock contention using DashMap and atomic pointers.",
    executionStages: [
      "INPUT RECEIVED: GATEWAY_CORE.RS",
      "AST GENERATED: 1,420 TOKENS SCANNED",
      "LOCK CONTENTION IDENTIFIED: RWLOCK IN WRITE PATH",
      "REFACTORING APPLIED: LOCKLESS CONCURRENT MAP",
      "BENCHMARK VALIDATED: ZERO MEMORY LEAKS DETECTED",
    ],
    outputData: {
      status: "COMPILATION CLEAN",
      metrics: [
        { label: "THROUGHPUT", value: "+310%" },
        { label: "P99 LATENCY", value: "1.2ms" },
        { label: "SAFETY", value: "MEMORY-SAFE" },
      ],
      summary: "Mutex bottlenecks removed from connection broadcast pool. Concurrency scaling verified up to 500k simultaneous sockets.",
      details: [
        "Replaced std::sync::RwLock with crossbeam lock-free atomic buffers.",
        "Zero-copy serialization via bincode protocol.",
        "Clippy & Miri safety validation passed without warnings.",
      ],
    },
  },
  {
    id: "data",
    name: "CLICKHOUSE SQL SYNTHESIZER",
    category: "Telemetry Analytics",
    label: "DATA",
    icon: Database,
    defaultPrompt: "Calculate rolling 95th percentile query latency across 400M events partitioned by tenant ID.",
    executionStages: [
      "INPUT RECEIVED: QUERY INTENT 'P95 LATENCY'",
      "SCHEMA FETCHED: TELEMETRY_EVENTS TABLE",
      "SQL SYNTHESIZED: QUANTILEEXACTWEIGHTED",
      "QUERY PLAN EXPLAINED: VECTORIZED MERGETREE SCAN",
      "BENCHMARK VALIDATED: 18MS EXECUTION TIME",
    ],
    outputData: {
      status: "OPTIMAL QUERY EXPLAINED",
      metrics: [
        { label: "ROWS SCANNED", value: "400M" },
        { label: "QUERY TIME", value: "18ms" },
        { label: "MEMORY USAGE", value: "128MB" },
      ],
      summary: "Vectorized query plan leverages ClickHouse MergeTree primary keys with zero shuffle overhead.",
      details: [
        "Query: SELECT quantileExactWeighted(0.95)(latency_ms, weight) FROM events PREWHERE tenant_id = :id",
        "Granular partition pruning reduced read footprint by 94%.",
        "Result verified against materialized aggregate projections.",
      ],
    },
  },
  {
    id: "security",
    name: "ZERO-TRUST SENTINEL",
    category: "Perimeter Verification",
    label: "SECURITY",
    icon: Shield,
    defaultPrompt: "Audit OAuth2 token exchange with RFC 8693 token delegation across microservices.",
    executionStages: [
      "INPUT RECEIVED: JWT HEADER AUDIT",
      "CRYPTOGRAPHIC SIGNATURE VERIFIED: RS256 / JWKS",
      "CLAIMS EVALUATED: SCOPE & AUDIENCE INTEGRITY",
      "REPLAY RESISTANCE CHECKED: NONCE CACHE VALID",
      "PERIMETER DEFENSE ACTIVE: SECURE POLICY ENFORCED",
    ],
    outputData: {
      status: "ZERO-TRUST ENFORCED",
      metrics: [
        { label: "ENTROPY", value: "HIGH" },
        { label: "REVOCATION SLA", value: "<15ms" },
        { label: "TLS VERIFY", value: "mTLS 1.3" },
      ],
      summary: "Cryptographic delegation chain holds unbroken. Ephemeral token rotation configured with strict audience binding.",
      details: [
        "SPIFFE/SPIRE workload identities validated at eBPF level.",
        "Zero authorization bypass vectors discovered in API gateways.",
        "Automatic revocation broadcast dispatched to Redis sentinel cluster.",
      ],
    },
  },
  {
    id: "voice",
    name: "NEURAL DUPLEX VOICE ENGINE",
    category: "Real-Time Telephony",
    label: "VOICE",
    icon: Mic,
    defaultPrompt: "Initialize duplex speech stream with sub-300ms interruption handling and acoustic echo cancellation.",
    executionStages: [
      "AUDIO INGEST: 16KHZ PCM WEBRTC STREAM",
      "VAD TRIGGERED: SPEECH ONSET DETECTED",
      "STREAMING ASR: TOKEN STREAM ACTIVATED",
      "LLM REASONING: SPECULATIVE COMPLETION",
      "NEURAL TTS SYNTHESIS: AUDIO BUFFER STREAMED",
    ],
    outputData: {
      status: "DUPLEX STREAM ACTIVE",
      metrics: [
        { label: "E2E LATENCY", value: "248ms" },
        { label: "BARGE-IN TIME", value: "85ms" },
        { label: "SAMPLING", value: "24kHz HiFi" },
      ],
      summary: "Bidirectional voice channel maintains natural conversational cadence with instant barge-in detection.",
      details: [
        "Custom WebRTC media server with opus packet loss concealment.",
        "Zero hallucination during background ambient noise filtering.",
        "Synthesized voice profile: Warm Technical Executive tone.",
      ],
    },
  },
];

export const HomeAgentPreview: React.FC = () => {
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(4); // Default to completed for instant view

  const activeAgent = PRESET_AGENTS[selectedAgentIndex];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setCurrentStageIndex(0);

    let stage = 0;
    const interval = setInterval(() => {
      stage += 1;
      if (stage < activeAgent.executionStages.length) {
        setCurrentStageIndex(stage);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 450);
  };

  return (
    <div className="w-full">
      {/* 6-Agent Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-surface-border pb-4">
        {PRESET_AGENTS.map((agent, idx) => {
          const Icon = agent.icon;
          const isSelected = idx === selectedAgentIndex;
          return (
            <motion.button
              key={agent.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedAgentIndex(idx);
                setCurrentStageIndex(agent.executionStages.length - 1);
                setIsRunning(false);
              }}
              className={`relative flex items-center gap-2.5 px-4 py-2.5 font-mono text-xs tracking-wider transition-all duration-200 rounded-sm ${
                isSelected
                  ? "text-accent border border-accent shadow-[0_0_15px_rgba(201,148,62,0.15)]"
                  : "bg-surface/50 text-primary-muted hover:text-primary border border-surface-border hover:border-surface-hover"
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="agent-preview-active-pill"
                  className="absolute inset-0 bg-surface-elevated rounded-sm z-[-1]"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
                />
              )}
              <Icon className={`w-3.5 h-3.5 relative z-10 ${isSelected ? "text-accent" : "text-primary-muted"}`} />
              <span className="relative z-10">{agent.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Main Single Live Agent Interface */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeAgent.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-glass border border-surface-border p-6 sm:p-8 rounded-sm"
        >
          {/* Top Bar / Header of Agent Console */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-surface-border gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#080A0B] border border-surface-border flex items-center justify-center text-accent">
                <activeAgent.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-xl text-primary tracking-tight">
                  {activeAgent.name}
                </h3>
                <div className="font-mono text-[10px] text-primary-muted uppercase tracking-widest">
                  {activeAgent.category} • DEMO ENGINE ACTIVE
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={!isRunning ? { scale: 1.02 } : {}}
                whileTap={!isRunning ? { scale: 0.98 } : {}}
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-mid disabled:opacity-50 text-[#060708] font-mono text-xs font-semibold tracking-wider transition-all"
              >
                {isRunning ? (
                  <>
                    <Cpu className="w-3.5 h-3.5 animate-spin" />
                    <span>EXECUTING...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>RUN SIMULATION</span>
                  </>
                )}
              </motion.button>

              <Link
                href="/agents"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary font-mono text-xs tracking-wider transition-colors"
              >
                <span>ENTER AGENT LAB</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </Link>
            </div>
          </div>

          {/* 3-Column Execution Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            {/* Left: Input Payload */}
            <div className="lg:col-span-4 space-y-3 font-mono text-xs">
              <div className="text-[10px] text-accent tracking-widest uppercase">
                01 / INPUT INTENT & PAYLOAD
              </div>
              <div className="p-4 bg-[#080A0B] border border-surface-border text-primary-muted leading-relaxed min-h-[140px]">
                {activeAgent.defaultPrompt}
              </div>
              <div className="flex items-center gap-2 text-[10px] text-primary-muted/60">
                <Terminal className="w-3 h-3 text-accent" />
                <span>Deterministic Zero-Leakage Mode</span>
              </div>
            </div>

            {/* Center: Live Execution Stages */}
            <div className="lg:col-span-4 space-y-3 font-mono text-xs">
              <div className="text-[10px] text-tech-teal tracking-widest uppercase">
                02 / COGNITIVE TELEMETRY LOOP
              </div>
              <div className="p-4 bg-[#080A0B] border border-surface-border space-y-2.5 min-h-[140px]">
                {activeAgent.executionStages.map((stageText, idx) => {
                  const isCurrent = idx === currentStageIndex;
                  const isDone = idx < currentStageIndex;

                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 text-[11px] transition-colors ${
                        isCurrent
                          ? "text-accent font-bold"
                          : isDone
                          ? "text-tech-teal"
                          : "text-primary-muted/40"
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-tech-teal shrink-0" />
                      ) : isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-accent animate-ping shrink-0" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-surface-border shrink-0" />
                      )}
                      <span className="truncate">{stageText}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Validated Result */}
            <div className="lg:col-span-4 space-y-3 font-mono text-xs">
              <div className="text-[10px] text-primary-muted tracking-widest uppercase flex items-center justify-between">
                <span>03 / VALIDATED RESULT</span>
                <span className="text-success">{activeAgent.outputData.status}</span>
              </div>

              <div className="p-4 bg-[#080A0B] border border-surface-border space-y-3 min-h-[140px]">
                {/* Micro Metrics */}
                <div className="grid grid-cols-3 gap-2 border-b border-surface-border/50 pb-2 text-[10px]">
                  {activeAgent.outputData.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-primary-muted/60">{m.label}</div>
                      <div className="text-accent font-bold">{m.value}</div>
                    </div>
                  ))}
                </div>

                <p className="font-sans text-xs text-primary leading-relaxed">
                  {activeAgent.outputData.summary}
                </p>

                <ul className="space-y-1 text-[11px] text-primary-muted pt-1">
                  {activeAgent.outputData.details.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden pt-6 mt-6 border-t border-surface-border">
            <Link
              href="/agents"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-[#060708] font-mono text-xs font-semibold tracking-wider"
            >
              <span>ENTER AGENT LAB</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
