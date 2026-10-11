"use client";

import React from "react";
import { Terminal, Check, Clock, AlertTriangle } from "lucide-react";

interface CallChipProps {
  toolName: string;
  durationMs?: number;
  status?: "pending" | "running" | "done" | "error";
  className?: string;
}

export const CallChip: React.FC<CallChipProps> = ({
  toolName,
  durationMs,
  status = "done",
  className = "",
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case "running":
        return <Clock className="w-3 h-3 text-accent animate-spin" />;
      case "error":
        return <AlertTriangle className="w-3 h-3 text-alert" />;
      case "done":
      default:
        return <Check className="w-3 h-3 text-success" />;
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-white/10 bg-[#151A1B] font-mono text-[11px] text-primary transition-colors ${className}`}
    >
      <Terminal className="w-3 h-3 text-tech-teal" />
      <span className="font-semibold text-accent">{toolName}</span>
      {durationMs !== undefined && (
        <span className="text-[10px] text-primary-muted">({durationMs}ms)</span>
      )}
      <span className="ml-0.5">{getStatusIcon()}</span>
    </div>
  );
};

export default CallChip;
