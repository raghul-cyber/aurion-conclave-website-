"use client";

import React from "react";
import { motion } from "framer-motion";

interface Option {
  value: string;
  label: string;
}

interface RubberSegmentProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const RubberSegment: React.FC<RubberSegmentProps> = ({
  options,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div
      role="radiogroup"
      className={`inline-flex items-center p-1 rounded-xl bg-[#111516] border border-white/10 ${className}`}
    >
      {options.map((opt) => {
        const isSelected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(opt.value)}
            className={`relative px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors duration-200 z-10 ${
              isSelected ? "text-[#191E1E] font-semibold" : "text-primary-muted hover:text-primary"
            }`}
          >
            {isSelected && (
              <motion.div
                layoutId="rubber-pill"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
                className="absolute inset-0 bg-accent rounded-lg -z-10 shadow-sm"
              />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default RubberSegment;
