"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "AI AGENTS",
  "CLOUD ARCHITECTURE",
  "MACHINE LEARNING",
  "GENERATIVE AI",
  "SOFTWARE ENGINEERING",
  "DATA SYSTEMS",
  "AUTOMATION",
  "CYBERSECURITY",
  "WEB PLATFORMS",
  "MOBILE SYSTEMS",
  "SaaS PLATFORMS",
  "API ENGINEERING",
  "DEVOPS",
  "INFRASTRUCTURE",
  "MULTI-AGENT SWARMS",
  "KUBERNETES",
  "APPLIED R&D",
  "PROPRIETARY IP"
];

export const TechnicalMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-surface-border bg-[#070A0B]/80 py-3.5 select-none">
      {/* Left/right edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050607] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050607] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center space-x-8">
            <span className="font-mono text-xs tracking-widest text-primary-muted hover:text-accent transition-colors font-medium">
              {item}
            </span>
            <span className="font-mono text-[10px] text-accent/50">◈</span>
          </div>
        ))}
      </div>
    </div>
  );
};
