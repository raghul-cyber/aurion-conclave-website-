"use client";

import React from "react";

export const LatticeLoader: React.FC<{
  label?: string;
  className?: string;
}> = ({ label = "PROCESSING INFERENCE", className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 py-6 ${className}`}>
      <div className="relative w-8 h-8">
        <span className="absolute inset-0 rounded-md border border-accent/40 animate-ping" />
        <span className="absolute inset-1 rounded border border-accent animate-spin" />
        <span className="absolute inset-2.5 rounded-sm bg-accent/60" />
      </div>
      {label && (
        <span className="font-mono text-xs text-accent tracking-widest uppercase animate-pulse">
          {label}
        </span>
      )}
    </div>
  );
};

export default LatticeLoader;
