"use client";

import React, { useEffect, useRef } from "react";

export type SpotlightShape = "circle" | "beam";

export type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  spotlightColor?: string;
  intensity?: number;
  spotlightSize?: number;
  softness?: number;
  shape?: SpotlightShape;
  borderGlow?: number;
  proximity?: number;
  smoothing?: number;
  ambient?: boolean;
  flare?: boolean;
  theme?: "dark" | "light";
};

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  style,
  spotlightColor = "rgba(195, 145, 66, 0.25)",
  intensity = 0.25,
  spotlightSize = 260,
  theme = "dark",
  ...rest
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const light = lightRef.current;
    if (!root || !light) return;

    const onMove = (e: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      light.style.background = `radial-gradient(circle ${spotlightSize}px at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`;
      light.style.opacity = String(intensity);
    };

    const onLeave = () => {
      light.style.opacity = "0";
    };

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);

    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, [spotlightColor, intensity, spotlightSize]);

  return (
    <div
      ref={rootRef}
      className={`relative isolate overflow-hidden rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#111516] border border-[rgba(244,241,233,0.08)] text-[#F4F1E9]"
          : "bg-[#FAF9F5] border border-[rgba(40,45,45,0.1)] text-[#202524] shadow-sm"
      } ${className}`}
      style={style}
      {...rest}
    >
      <span
        ref={lightRef}
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
