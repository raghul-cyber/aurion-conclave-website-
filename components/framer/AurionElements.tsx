"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Section Label Component
export const SectionLabel: React.FC<{
  label: string;
  tag?: string;
  className?: string;
}> = ({ label, tag = "SYSTEM 2026", className = "" }) => {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      <span className="text-accent font-semibold">{label}</span>
      <span className="text-primary-muted/40">•</span>
      <span className="text-primary-muted">{tag}</span>
    </div>
  );
};

// RevealText: Subtle luxury typography reveal
export const RevealText: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// GlassPanel Container
export const GlassPanel: React.FC<{
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}> = ({ children, className = "", hoverGlow = false }) => {
  return (
    <div
      className={`luxury-glass p-6 sm:p-8 rounded-sm transition-all duration-300 ${
        hoverGlow ? "hover:border-accent/30" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

// AurionButton: Premium editorial CTA
export const AurionButton: React.FC<{
  href: string;
  variant?: "primary" | "secondary" | "quiet";
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}> = ({ href, variant = "primary", children, external = false, className = "" }) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  const baseStyles = "group inline-flex items-center gap-3 px-6 py-3.5 font-mono text-xs font-semibold tracking-wider transition-all duration-300 rounded-sm select-none";
  
  const variantStyles = isPrimary
    ? "bg-accent hover:bg-accent-mid text-[#060708] shadow-[0_2px_20px_rgba(201,148,62,0.18)] hover:shadow-[0_4px_30px_rgba(201,148,62,0.3)] hover:scale-[1.01] active:scale-[0.99]"
    : isSecondary
    ? "bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent/40 text-primary"
    : "text-primary hover:text-accent p-0";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <span>{children}</span>
      {external ? (
        <ArrowUpRight className="w-3.5 h-3.5 text-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : (
        <ArrowRight className="w-3.5 h-3.5 text-current transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
};

// Parallax Container
export const ParallaxLayer: React.FC<{
  children: React.ReactNode;
  speed?: number; // e.g. -50 to 50
  className?: string;
}> = ({ children, speed = 30, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};
