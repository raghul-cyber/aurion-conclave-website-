"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

export interface ShinyTextProps {
  text?: string;
  children?: ReactNode;
  color?: string;
  shineColor?: string;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  children,
  color = "#D9B874",
  shineColor = "#FFFFFF",
  speed = 3,
  className = "",
  style,
}) => {
  const rootRef = useRef<HTMLSpanElement>(null);
  const content = children ?? text;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let rafId: number;
    let start: number | null = null;
    const duration = speed * 1000;

    const tick = (time: number) => {
      if (!start) start = time;
      const progress = ((time - start) % duration) / duration;
      const pos = progress * 100;
      root.style.backgroundImage = `linear-gradient(120deg, ${color} 0%, ${color} ${Math.max(
        0,
        pos - 20
      )}%, ${shineColor} ${pos}%, ${color} ${Math.min(100, pos + 20)}%, ${color} 100%)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [color, shineColor, speed]);

  return (
    <span
      ref={rootRef}
      className={`relative inline-block bg-no-repeat [background-size:100%_100%] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${color}, ${shineColor}, ${color})`,
        ...style,
      }}
    >
      {content}
    </span>
  );
};

export default ShinyText;
