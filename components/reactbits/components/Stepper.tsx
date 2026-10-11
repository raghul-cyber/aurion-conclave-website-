"use client";

import React from "react";
import { Check } from "lucide-react";

interface Step {
  id: string | number;
  label: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  className = "",
}) => {
  return (
    <div className={`w-full py-4 ${className}`}>
      <div className="flex items-center justify-between relative">
        {/* Progress connecting bar */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-white/10 z-0">
          <div
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div
              key={step.id}
              onClick={() => onStepClick && onStepClick(index)}
              className={`relative z-10 flex flex-col items-center cursor-pointer group ${
                onStepClick ? "" : "pointer-events-none"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                  isCompleted
                    ? "bg-accent text-[#191E1E] font-bold shadow-md shadow-accent/20"
                    : isCurrent
                    ? "bg-[#191E1E] text-accent border-2 border-accent shadow-lg shadow-accent/30 scale-110"
                    : "bg-[#111516] text-primary-muted border border-white/15 group-hover:border-white/30"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : index + 1}
              </div>
              <span
                className={`mt-2 font-mono text-[11px] tracking-wider uppercase transition-colors ${
                  isCurrent
                    ? "text-accent font-semibold"
                    : isCompleted
                    ? "text-primary"
                    : "text-primary-muted"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
