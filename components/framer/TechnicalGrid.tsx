"use client";

import React from "react";

interface TechnicalGridProps {
  className?: string;
  crosshairs?: boolean;
}

export const TechnicalGrid: React.FC<TechnicalGridProps> = ({
  className = "",
  crosshairs = true,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Precision 80px background grid */}
      <div
        className="w-full h-full opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F3F0E8 1px, transparent 1px),
            linear-gradient(to bottom, #F3F0E8 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* CAD Border Ticks */}
      {crosshairs && (
        <>
          <div className="absolute top-6 left-6 font-mono text-[9px] text-primary-muted/30 tracking-widest uppercase">
            + 00.00.01 / LAT-CAD
          </div>
          <div className="absolute top-6 right-6 font-mono text-[9px] text-primary-muted/30 tracking-widest uppercase">
            AURION / SEC-GRID +
          </div>
          <div className="absolute bottom-6 left-6 font-mono text-[9px] text-primary-muted/30 tracking-widest uppercase">
            + 00.99.98 / LNG-CAD
          </div>
          <div className="absolute bottom-6 right-6 font-mono text-[9px] text-primary-muted/30 tracking-widest uppercase">
            REF-2026 / SYS-L0 +
          </div>
        </>
      )}
    </div>
  );
};
