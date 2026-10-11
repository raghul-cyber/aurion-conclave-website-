"use client";

import React, { useState } from "react";
import { CONSULTANCY_PROCESS, ProcessStep } from "@/data/process";
import { ArrowRight, CheckCircle2, Clock, FileCheck, Layers, Shield } from "lucide-react";

export const ConsultancyProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = CONSULTANCY_PROCESS[activeStepIndex];

  return (
    <section className="relative py-24 bg-[#070A0B] border-b border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
            <span>AURION / DELIVERY PHILOSOPHY</span>
            <span>•</span>
            <span className="text-tech-cyan">10-STAGE PROGRESSION</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
            THE CONSULTANCY METHODOLOGY. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-primary">
              FROM DISCOVERY TO PRODUCTION.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-primary-muted mt-4 leading-relaxed">
            Our delivery methodology is mathematically structured to eliminate project failure modes before they arise:
            de-risking feasibility in week one, locking down formal architecture in week two, and delivering production-ready
            software in 2-week continuous sprints.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="relative mb-12">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-surface-border -translate-y-1/2 z-0" />

          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none relative z-10">
            {CONSULTANCY_PROCESS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded font-mono text-xs whitespace-nowrap transition-all border ${
                    isActive
                      ? "bg-accent text-[#050607] font-bold border-accent shadow-[0_0_15px_rgba(217,164,65,0.3)] scale-105"
                      : isPast
                      ? "bg-[#0A0D0E] text-primary border-surface-border"
                      : "bg-[#050607] text-primary-muted border-surface-border/50 hover:border-surface-border"
                  }`}
                >
                  <span className="font-extrabold">{step.step}</span>
                  <span>{step.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep Inspector */}
        <div className="p-6 sm:p-10 bg-[#0A0D0E] border border-surface-border shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-accent/20 border border-accent text-accent">
                  STAGE {activeStep.step}
                </span>
                <span className="font-mono text-xs text-tech-cyan flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>CADENCE: {activeStep.duration}</span>
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-primary">
                {activeStep.name}: {activeStep.tagline}
              </h3>

              <p className="font-sans text-sm sm:text-base text-primary-muted leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            {/* Right Deliverables Card */}
            <div className="lg:w-80 p-5 bg-[#050607] border border-surface-border space-y-4 rounded-sm">
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider pb-2 border-b border-surface-border">
                <FileCheck className="w-4 h-4" />
                <span>FORMAL DELIVERABLES</span>
              </div>

              <div className="space-y-2.5">
                {activeStep.deliverables.map((del) => (
                  <div key={del} className="flex items-start gap-2.5 font-mono text-xs text-primary">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-surface-border/60 text-[10px] font-mono text-primary-muted">
                GUARANTEE: Sign-off gate before subsequent stage progression.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
