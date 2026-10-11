import React, { Suspense } from "react";
import type { Metadata } from "next";
import { AgentLabConsole } from "@/components/AgentLabConsole";
import { AgentFilmScroll } from "@/components/AgentFilmScroll";
import { WatchSystemsThink } from "@/components/WatchSystemsThink";

export const metadata: Metadata = {
  title: "The Aurion Agent Lab — 12 Autonomous Browser AI Systems | Aurion Conclave",
  description:
    "Explore 12 working functional demonstrations of intelligent autonomous agents designed by Aurion Conclave: receptionists, research engines, code assistants, document parsers, and security auditors.",
};

export default function AgentsPage() {
  return (
    <div className="relative min-h-screen py-16 bg-[#050607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
            <span>AURION CONCLAVE</span>
            <span>•</span>
            <span className="text-tech-cyan">AUTONOMOUS AGENT RESEARCH LAB</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-primary tracking-tight">
            THE AGENT LAB.
          </h1>

          <p className="font-sans text-base sm:text-lg text-primary-muted mt-4 leading-relaxed">
            Meet the systems before we build yours. Below are 12 live autonomous agents operating
            in-browser with deterministic tool execution, citation verification, and dynamic telemetry.
          </p>
        </div>

        {/* Live Interactive Lab Console */}
        <Suspense fallback={<div className="font-mono text-xs text-primary-muted">Loading Agent Lab...</div>}>
          <AgentLabConsole />
        </Suspense>

        {/* Watch Systems Think Pipeline */}
        <WatchSystemsThink />

        {/* Cinematic OS Operating Film */}
        <AgentFilmScroll />
      </div>
    </div>
  );
}
