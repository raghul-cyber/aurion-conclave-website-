"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // High performance Motion Values that avoid React re-renders on every mouse move
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Butter-smooth spring physics for trailing outer ring
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

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
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Spring-Lagged Ring */}
      <motion.div
        className="fixed pointer-events-none z-[120] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.4 : 1,
            borderColor: isPointer ? "rgba(201, 148, 62, 0.9)" : "rgba(201, 148, 62, 0.4)",
            backgroundColor: isPointer ? "rgba(201, 148, 62, 0.12)" : "rgba(201, 148, 62, 0)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className={`rounded-full border flex items-center justify-center ${
            isPointer ? "w-11 h-11" : "w-6 h-6"
          }`}
        />

        {/* Dynamic Cursor Label */}
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            className="absolute -bottom-6 font-mono text-[9px] tracking-wider text-accent font-bold px-1.5 py-0.5 bg-[#050607]/95 border border-surface-border whitespace-nowrap shadow-lg"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Immediate Dot */}
      <motion.div
        className="fixed pointer-events-none z-[121] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(201,148,62,0.9)]" />
      </motion.div>
    </>
  );
};

