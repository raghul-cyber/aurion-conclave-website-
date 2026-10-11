"use client";

import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check hover targets for customized text
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const runAgentBtn = target.closest("button[data-cursor='RUN_AGENT']") || target.closest("button:has(svg)");
      const startProjectBtn = target.closest("a[href='/contact']") || target.closest("button[type='submit']");
      const serviceCard = target.closest(".group[data-cursor='EXPLORE']");

      if (runAgentBtn) {
        setIsPointer(true);
        setCursorText("EXECUTE");
      } else if (startProjectBtn) {
        setIsPointer(true);
        setCursorText("INITIATE");
      } else if (serviceCard) {
        setIsPointer(true);
        setCursorText("EXPLORE");
      } else {
        const interactive = target.closest("a, button, input, textarea, [role='button'], [tabindex='0']");
        setIsPointer(!!interactive);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Outer subtle ring */}
      <div
        className={`rounded-full border transition-all duration-200 flex items-center justify-center ${
          isPointer
            ? "w-12 h-12 bg-accent/15 border-accent/70 scale-125"
            : "w-6 h-6 bg-transparent border-accent/40"
        }`}
      >
        {/* Center dot */}
        <div
          className={`rounded-full transition-all duration-150 ${
            isPointer ? "w-1 h-1 bg-accent" : "w-1.5 h-1.5 bg-accent"
          }`}
        />
      </div>

      {/* Dynamic Cursor Label */}
      {cursorText && (
        <span className="absolute -bottom-5 font-mono text-[9px] tracking-wider text-accent font-bold px-1.5 py-0.2 bg-[#050607]/90 border border-surface-border whitespace-nowrap">
          {cursorText}
        </span>
      )}
    </div>
  );
};
