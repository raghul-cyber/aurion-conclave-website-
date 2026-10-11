"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";

interface SpecularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  asChild?: boolean;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-warm-secondary hover:bg-warm-muted text-warm-text border border-warm-border";
      case "outline":
        return "bg-transparent hover:bg-warm-amber/10 text-accent border border-accent/40";
      case "primary":
      default:
        return "bg-accent hover:bg-accent-mid text-[#191E1E] font-semibold border border-accent/60 shadow-[0_4px_16px_rgba(195,145,66,0.2)]";
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative group overflow-hidden px-5 py-2.5 rounded-lg text-sm font-mono tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-2 ${getVariantStyles()} ${className}`}
      {...(props as any)}
    >
      {/* Specular light sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default SpecularButton;
