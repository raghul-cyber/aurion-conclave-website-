"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export interface PipelineStep {
  number: string;
  name: string;
  subtext: string;
  techDetail: string;
}

interface ArchitectureDiagramProps {
  title?: string;
  steps: PipelineStep[];
  type?: "horizontal" | "vertical";
  className?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  title = "SYSTEM EXECUTION PIPELINE",
  steps,
  type = "horizontal",
  className = "",
}) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={`p-6 sm:p-8 luxury-glass rounded-sm border border-surface-border ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-surface-border gap-4">
        <div>
          <div className="font-mono text-[10px] text-accent tracking-widest uppercase">
            EXECUTION PIPELINE • DETERMINISTIC FLOW
          </div>
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-primary mt-1">
            {title}
          </h3>
        </div>
        <div className="font-mono text-xs text-primary-muted flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tech-teal animate-pulse" />
          <span>ACTIVE STAGE: {steps[activeStep]?.name}</span>
        </div>
      </div>

      {/* Steps Pipeline with Shared layoutId */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 relative">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;

          return (
            <motion.div
              key={step.number}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer p-4 rounded-sm border transition-colors duration-200 relative ${
                isActive
                  ? "bg-surface-elevated border-accent shadow-[0_0_20px_rgba(201,148,62,0.15)]"
                  : isPassed
                  ? "bg-surface/60 border-surface-border hover:border-surface-hover"
                  : "bg-surface/30 border-surface-border/60 hover:border-surface-border opacity-70"
              }`}
            >
              {/* Active Step Indicator Pill */}
              {isActive && (
                <motion.div
                  layoutId="arch-step-indicator"
                  className="absolute inset-0 border border-accent rounded-sm pointer-events-none shadow-[0_0_15px_rgba(201,148,62,0.2)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-accent font-bold">
                  {step.number}
                </span>
                {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-tech-teal" />}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                )}
              </div>

              <div className="font-sans font-bold text-sm text-primary tracking-tight">
                {step.name}
              </div>

              <div className="font-sans text-[11px] text-primary-muted mt-1 leading-snug">
                {step.subtext}
              </div>

              {/* Step indicator arrow for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <ChevronRight className="w-3.5 h-3.5 text-surface-border" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Active Step Details Panel with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-6 p-4 sm:p-5 bg-[#080A0B] border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs"
        >
          <div className="space-y-1">
            <div className="text-accent text-[11px] uppercase tracking-wider">
              STAGE SPECIFICATION: {steps[activeStep]?.name}
            </div>
            <div className="text-primary-muted text-xs">
              {steps[activeStep]?.techDetail}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            className="self-start sm:self-auto px-3.5 py-1.5 bg-surface border border-surface-border hover:border-accent text-primary text-[11px] flex items-center gap-2 transition-colors shrink-0"
          >
            <span>CYCLE NEXT STAGE</span>
            <ArrowRight className="w-3.5 h-3.5 text-accent" />
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

