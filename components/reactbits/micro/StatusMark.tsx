"use client";

import React from "react";

export type SystemStatus = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "STANDBY";

interface StatusMarkProps {
  status: SystemStatus;
  label?: string;
  className?: string;
}

export const StatusMark: React.FC<StatusMarkProps> = ({
  status,
  label,
  className = "",
}) => {
  const getColors = () => {
    switch (status) {
      case "RUNNING":
        return {
          dot: "bg-accent animate-ping",
          solid: "bg-accent",
          text: "text-accent",
          badge: "border-accent/30 bg-accent/10",
        };
      case "SUCCESS":
        return {
          dot: "bg-success",
          solid: "bg-success",
          text: "text-success",
          badge: "border-success/30 bg-success/10",
        };
      case "ERROR":
        return {
          dot: "bg-alert",
          solid: "bg-alert",
          text: "text-alert",
          badge: "border-alert/30 bg-alert/10",
        };
      case "IDLE":
      case "STANDBY":
      default:
        return {
          dot: "bg-[#727975]",
          solid: "bg-[#727975]",
          text: "text-[#727975]",
          badge: "border-white/10 bg-white/5",
        };
    }
  };

  const { dot, solid, text, badge } = getColors();

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border font-mono text-[11px] tracking-wider uppercase ${badge} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {status === "RUNNING" && (
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${dot}`}
          />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${solid}`} />
      </span>
      <span className={`font-semibold ${text}`}>{label || status}</span>
    </div>
  );
};

export default StatusMark;
