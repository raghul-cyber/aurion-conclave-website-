"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Cpu, Database, Eye, Terminal, Zap, ShieldCheck } from "lucide-react";

export const WatchSystemsThink: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stages = [
    {
      id: "input",
      label: "01 / USER INPUT",
      desc: "Natural language instruction received via API or UI",
      telemetry: "Token Length: 48 tokens • Ingress: REST/WebSocket",
      icon: Terminal,
      color: "#F4F1E8",
    },
    {
      id: "planner",
      label: "02 / COGNITIVE PLANNER",
      desc: "Decomposing task into goal-seeking cyclical subgraphs",
      telemetry: "Strategy: ReAct / Reflexion • Steps: 5 nodes",
      icon: Cpu,
      color: "#61C7C0",
    },
    {
      id: "retrieval",
      label: "03 / CONTEXT RETRIEVAL",
      desc: "Querying dense vector index & institutional knowledge graph",
      telemetry: "Similarity: 0.94 Cosine • Latency: 18ms",
      icon: Database,
      color: "#D9A441",
    },
    {
      id: "tools",
      label: "04 / TOOL EXECUTION",
      desc: "Invoking sandboxed API endpoints & executing Python/SQL",
      telemetry: "Sandbox: Isolated Docker • Timeouts: Strict 5s",
      icon: Zap,
      color: "#F1C66B",
    },
    {
      id: "validation",
      label: "05 / SAFETY VALIDATION",
      desc: "Evaluating factuality, schema compliance, and injection guards",
      telemetry: "Hallucination Check: Passed • Bias Score: 0.00",
      icon: ShieldCheck,
      color: "#6FD2A5",
    },
    {
      id: "output",
      label: "06 / ACTIONABLE OUTPUT",
      desc: "Synthesizing formatted report, PR, or transactional trigger",
      telemetry: "Delivery: Verified • Response Time: 340ms",
      icon: CheckCircle2,
      color: "#6FD2A5",
    },
  ];

  // Auto-cycle through the thinking stages every 2.4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % stages.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <section className="relative py-24 bg-[#070A0B] border-y border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
            <span>AURION / NEURAL EXECUTION TRACE</span>
            <span>•</span>
            <span className="text-tech-cyan">REAL-TIME WORKFLOW</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
            WATCH THE SYSTEMS THINK.
          </h2>

          <p className="font-sans text-sm sm:text-base text-primary-muted mt-4 leading-relaxed">
            Unlike black-box models, every Aurion agent follows a deterministic, observable cognitive pipeline:
            from intent parsing and graph planning through to tool invocation and safety verification.
          </p>
        </div>

        {/* Huge Cinematic UI Frame */}
        <div className="relative p-6 sm:p-10 bg-[#0A0D0E] border border-surface-border shadow-2xl rounded-sm">
          {/* Connecting Animated Conduit Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {stages.map((st, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;
              const Icon = st.icon;

              return (
                <div
                  key={st.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`cursor-pointer p-4 rounded transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? "bg-[#101415] border-accent shadow-[0_0_20px_rgba(217,164,65,0.25)] scale-[1.03]"
                      : isPast
                      ? "bg-surface/50 border-surface-border text-primary"
                      : "bg-[#050607] border-surface-border/40 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between pb-3">
                    <Icon
                      className="w-4 h-4"
                      style={{ color: isActive ? st.color : "#A5AAA7" }}
                    />
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive
                          ? "bg-accent animate-ping"
                          : isPast
                          ? "bg-success"
                          : "bg-surface-border"
                      }`}
                    />
                  </div>

                  <div>
                    <div className="font-mono text-[10px] text-primary-muted uppercase">
                      {st.label}
                    </div>
                    <div className="font-sans font-semibold text-xs text-primary mt-1 line-clamp-2">
                      {st.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Stage Deep Inspection Window */}
          <div className="p-6 bg-[#050607] border border-surface-border rounded font-mono text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-surface-border">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="font-bold text-primary tracking-wider text-sm">
                  ACTIVE STAGE :: {stages[activeStageIndex].label}
                </span>
              </div>
              <span className="text-tech-cyan text-[11px]">
                {stages[activeStageIndex].telemetry}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 bg-[#0A0D0E] border border-surface-border/60 rounded space-y-1">
                <span className="text-[10px] text-primary-muted uppercase">OBJECTIVE</span>
                <p className="text-primary font-sans text-xs">
                  {stages[activeStageIndex].desc}
                </p>
              </div>

              <div className="p-4 bg-[#0A0D0E] border border-surface-border/60 rounded space-y-1">
                <span className="text-[10px] text-primary-muted uppercase">AUDIT TRAIL</span>
                <p className="text-accent font-sans text-xs">
                  Recorded in immutable session ledger with microsecond timestamps
                </p>
              </div>

              <div className="p-4 bg-[#0A0D0E] border border-surface-border/60 rounded space-y-1">
                <span className="text-[10px] text-primary-muted uppercase">FAIL-SAFE</span>
                <p className="text-success font-sans text-xs">
                  Deterministic timeout bounds & rollback checkpoints active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
