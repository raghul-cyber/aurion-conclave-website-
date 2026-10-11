"use client";

import React from "react";
import { motion } from "framer-motion";

interface ThoughtLineProps {
  stage: string;
  message: string;
  timestamp?: string;
  tool?: string;
  durationMs?: number;
  status?: "pending" | "running" | "done" | "error";
  isLast?: boolean;
}

export const ThoughtLine: React.FC<ThoughtLineProps> = ({
  stage,
  message,
  timestamp,
  tool,
  durationMs,
  status = "done",
  isLast = false,
}) => {
  return (
    <div className="relative pl-6 pb-6 last:pb-2 group">
      {/* Vertical connection line */}
      {!isLast && (
        <div className="absolute left-[9px] top-4 bottom-0 w-[1px] bg-white/10 group-hover:bg-accent/40 transition-colors" />
      )}

      {/* Node pulse */}
      <div
        className={`absolute left-0 top-1.5 w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
          status === "running"
            ? "border-accent bg-accent/20"
            : status === "error"
            ? "border-alert bg-alert/20"
            : "border-white/20 bg-[#111516]"
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            status === "running"
              ? "bg-accent animate-ping"
              : status === "error"
              ? "bg-alert"
              : "bg-success"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-accent font-semibold uppercase">{stage}</span>
          {timestamp && <span className="text-primary-muted text-[10px]">{timestamp}</span>}
          {tool && (
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-tech-teal border border-white/5">
              {tool}
            </span>
          )}
          {durationMs !== undefined && (
            <span className="text-primary-muted text-[10px]">{durationMs}ms</span>
          )}
        </div>
        <p className="text-xs text-primary/80 font-sans leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default ThoughtLine;
