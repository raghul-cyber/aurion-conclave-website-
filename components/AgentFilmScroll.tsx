"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { AGENT_REGISTRY } from "@/data/agents";
import { Play, ArrowRight, ArrowLeft, Terminal, Cpu, CheckCircle2, Shield, Activity } from "lucide-react";

export const AgentFilmScroll: React.FC = () => {
  const [activeFilmIndex, setActiveFilmIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentAgent = AGENT_REGISTRY[activeFilmIndex];

  const handleNext = () => {
    setActiveFilmIndex((prev) => (prev + 1) % AGENT_REGISTRY.length);
  };

  const handlePrev = () => {
    setActiveFilmIndex((prev) => (prev - 1 + AGENT_REGISTRY.length) % AGENT_REGISTRY.length);
  };

  return (
    <section className="relative py-24 bg-[#050607] border-b border-surface-border overflow-hidden">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent uppercase tracking-widest">
              <span>AURION / AGENT OPERATING SYSTEM</span>
              <span>•</span>
              <span className="text-tech-cyan">LIVE FILM SEQUENCE</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
              AN OPERATING SYSTEM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-light to-accent">
                FOR INTELLIGENT WORK.
              </span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-primary-muted mt-3 max-w-xl">
              Step through our 12 deployed agent interfaces. Each system operates as an autonomous node in
              your organizational hierarchy—observing, planning, executing tools, and maintaining audit trails.
            </p>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-primary-muted mr-2">
              FRAME {String(activeFilmIndex + 1).padStart(2, "0")} / {String(AGENT_REGISTRY.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary transition-colors"
              aria-label="Previous Agent Frame"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded bg-accent hover:bg-accent-light text-[#050607] font-bold transition-colors amber-glow"
              aria-label="Next Agent Frame"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Film Timeline Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-4 scrollbar-none">
          {AGENT_REGISTRY.map((agent, idx) => {
            const isActive = idx === activeFilmIndex;
            return (
              <button
                key={agent.id}
                type="button"
                onClick={() => setActiveFilmIndex(idx)}
                className={`flex items-center gap-2 px-3 py-2 rounded font-mono text-xs whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-accent/15 border-accent text-accent shadow-[0_0_15px_rgba(217,164,65,0.2)]"
                    : "bg-[#070A0B] border-surface-border/60 text-primary-muted hover:text-primary hover:border-surface-border"
                }`}
              >
                <span className="font-bold">{agent.code}</span>
                <span>{agent.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cinematic Operating System Application Window */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0A0D0E] border border-surface-border/90 shadow-2xl rounded-sm overflow-hidden scanline-effect">
          {/* OS Window Chrome Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#101415] border-b border-surface-border font-mono text-xs text-primary-muted">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-alert inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-success inline-block" />
              <span className="ml-2 text-primary font-semibold tracking-wider">
                AURION-OS :: {currentAgent.id}.node.cluster
              </span>
            </div>

            <div className="flex items-center gap-4 text-[10px]">
              <div className="flex items-center gap-1 text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span>STATE: ACTIVE RUNTIME</span>
              </div>
              <span>PID: {4000 + activeFilmIndex * 24}</span>
              <span>MEMORY: 142MB</span>
            </div>
          </div>

          {/* OS Main Workspace */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Panel */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-accent/20 border border-accent text-accent">
                  SYSTEM {currentAgent.code}
                </span>
                <span className="font-mono text-xs text-tech-cyan">
                  {currentAgent.category}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-primary">
                {currentAgent.name}
              </h3>

              <p className="font-mono text-xs text-accent leading-relaxed">
                &quot;{currentAgent.tagline}&quot;
              </p>

              <p className="font-sans text-xs sm:text-sm text-primary-muted leading-relaxed">
                {currentAgent.description}
              </p>

              {/* Capabilities checklist */}
              <div className="space-y-2 pt-2">
                {currentAgent.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 font-mono text-xs text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href={`/agents?agent=${currentAgent.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-[#050607] font-mono text-xs font-bold tracking-wider transition-colors amber-glow"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>TEST IN AGENT LAB</span>
                </Link>
                <div className="font-mono text-xs text-primary-muted">
                  Avg Latency: <span className="text-accent">{currentAgent.latencyAvg}</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Telemetry & Execution Simulation */}
            <div className="lg:col-span-7 p-5 bg-[#050607] border border-surface-border/80 font-mono text-xs space-y-4 rounded-sm">
              <div className="flex items-center justify-between pb-3 border-b border-surface-border text-[11px] text-primary-muted">
                <div className="flex items-center gap-2 text-tech-cyan">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>COGNITIVE PIPELINE EXECUTION</span>
                </div>
                <span>CYCLES: 1,420 OPS/SEC</span>
              </div>

              {/* Sample Dispatch Box */}
              <div className="p-3 bg-[#0A0D0E] border border-surface-border/60 text-xs">
                <div className="text-[10px] text-accent uppercase mb-1">DISPATCH PROMPT</div>
                <div className="text-primary italic">&quot;{currentAgent.defaultPrompt}&quot;</div>
              </div>

              {/* Stepper Pipeline */}
              <div className="space-y-2 pt-1">
                <div className="text-[10px] text-primary-muted uppercase tracking-wider">
                  DECOMPOSED EXECUTION NODES:
                </div>
                {currentAgent.executeStepPlan.map((step, idx) => (
                  <div
                    key={step.stage}
                    className="flex items-center justify-between p-2 rounded bg-surface/40 border border-surface-border/40 text-[11px]"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="font-semibold text-primary">{step.stage}</span>
                      <span className="text-primary-muted truncate">({step.description})</span>
                    </div>
                    <span className="text-tech-cyan font-mono text-[10px] shrink-0 ml-2">
                      {step.tool}
                    </span>
                  </div>
                ))}
              </div>

              {/* Telemetry bottom row */}
              <div className="pt-2 border-t border-surface-border/60 flex items-center justify-between text-[10px] text-primary-muted">
                <span>CONCURRENCY: 250 SLOTS</span>
                <span className="text-success">SECURITY ENCLAVE VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
