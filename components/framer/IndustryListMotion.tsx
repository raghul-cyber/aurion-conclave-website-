"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, CheckCircle2, AlertCircle, Cpu } from "lucide-react";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem, HoverLift } from "@/components/framer/ScrollAnimations";

// Specialized SVG Visual System Helper with Motion pathLength drawing
const IndustryVisualSystem: React.FC<{ type: string }> = ({ type }) => {
  if (type === "healthcare") {
    // Heartbeat / telemetry vital waveform with animated pathLength
    return (
      <div className="h-16 w-full flex items-center justify-center opacity-70">
        <svg className="w-full h-12" preserveAspectRatio="none" viewBox="0 0 200 40">
          <motion.path
            d="M 0 20 L 40 20 L 48 8 L 56 32 L 64 12 L 72 24 L 80 20 L 140 20 L 148 8 L 156 32 L 164 12 L 172 24 L 180 20 L 200 20"
            fill="none"
            stroke="#C9943E"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0.3 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>
      </div>
    );
  }

  if (type === "finance") {
    // Flowing financial market graph
    return (
      <div className="h-16 w-full flex items-center justify-center opacity-70">
        <svg className="w-full h-12" preserveAspectRatio="none" viewBox="0 0 200 40">
          <motion.path
            d="M 0 35 Q 30 10, 60 25 T 120 15 T 180 8 L 200 6"
            fill="none"
            stroke="#76BFB9"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0 30 Q 40 38, 80 22 T 140 28 T 200 14"
            fill="none"
            stroke="#C9943E"
            strokeWidth="1"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2.0, delay: 0.2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    );
  }

  if (type === "agriculture") {
    // Sensor & IoT topology grid
    return (
      <div className="h-16 w-full flex items-center justify-center opacity-70">
        <svg className="w-full h-12" preserveAspectRatio="none" viewBox="0 0 200 40">
          <motion.circle
            cx="20"
            cy="20"
            r="3"
            fill="#C9943E"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          />
          <motion.circle
            cx="70"
            cy="12"
            r="3"
            fill="#76BFB9"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          <motion.circle
            cx="120"
            cy="28"
            r="3"
            fill="#C9943E"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
          <motion.circle
            cx="170"
            cy="18"
            r="3"
            fill="#76BFB9"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
          <motion.line
            x1="20"
            y1="20"
            x2="70"
            y2="12"
            stroke="#C9943E"
            strokeWidth="1"
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.line
            x1="70"
            y1="12"
            x2="120"
            y2="28"
            stroke="#76BFB9"
            strokeWidth="1"
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.line
            x1="120"
            y1="28"
            x2="170"
            y2="18"
            stroke="#C9943E"
            strokeWidth="1"
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </svg>
      </div>
    );
  }

  if (type === "cybersecurity") {
    // Concentric secure perimeter
    return (
      <div className="h-16 w-full flex items-center justify-center opacity-70">
        <svg className="w-32 h-16" viewBox="0 0 100 50">
          <motion.circle
            cx="50"
            cy="25"
            r="20"
            fill="none"
            stroke="#C9943E"
            strokeWidth="1"
            initial={{ pathLength: 0, rotate: -90 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <motion.circle
            cx="50"
            cy="25"
            r="12"
            fill="none"
            stroke="#76BFB9"
            strokeWidth="1"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />
          <motion.circle
            cx="50"
            cy="25"
            r="3"
            fill="#C9943E"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          />
        </svg>
      </div>
    );
  }

  // Default telemetry grid
  return (
    <div className="h-16 w-full flex items-center justify-center opacity-50">
      <svg className="w-full h-12" preserveAspectRatio="none" viewBox="0 0 200 40">
        <motion.line
          x1="0"
          y1="10"
          x2="200"
          y2="10"
          stroke="#F3F0E8"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <motion.line
          x1="0"
          y1="25"
          x2="200"
          y2="25"
          stroke="#F3F0E8"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.rect
          x="30"
          y="8"
          width="40"
          height="18"
          fill="none"
          stroke="#C9943E"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3 }}
        />
        <motion.rect
          x="110"
          y="8"
          width="50"
          height="18"
          fill="none"
          stroke="#76BFB9"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.5 }}
        />
      </svg>
    </div>
  );
};

export const IndustryListMotion: React.FC = () => {
  return (
    <div className="space-y-16">
      {INDUSTRIES.map((ind, index) => (
        <ScrollReveal key={ind.id} delay={index % 2 === 0 ? 0.05 : 0.15}>
          <motion.div
            id={ind.id}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-8 sm:p-12 luxury-glass border border-surface-border hover:border-accent/40 transition-colors duration-300 rounded-sm space-y-8"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-surface-border/60 gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 bg-surface border border-surface-border">
                  {ind.code}
                </span>
                <h2 className="font-sans text-3xl font-extrabold text-primary">
                  {ind.name}
                </h2>
              </div>

              <div className="font-mono text-xs text-tech-teal">
                {ind.caseSnippet}
              </div>
            </div>

            {/* Tagline */}
            <p className="font-mono text-sm text-accent">
              &quot;{ind.tagline}&quot;
            </p>

            {/* Specialized Visual System with Animated Path Drawing */}
            <div className="p-4 bg-[#080A0B] border border-surface-border overflow-hidden">
              <div className="font-mono text-[9px] text-primary-muted/60 uppercase tracking-widest mb-1">
                DOMAIN DATA TOPOLOGY
              </div>
              <IndustryVisualSystem type={ind.id} />
            </div>

            {/* 3-Column Breakdown: Problems | Systems We Build | Proven Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              {/* Problems */}
              <HoverLift y={-2}>
                <div className="h-full p-5 bg-[#080A0B] border border-surface-border space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-alert pb-2 border-b border-surface-border/40">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>COMMON SECTOR FRICTION</span>
                  </div>
                  <ul className="space-y-2 text-primary-muted text-[11px]">
                    {ind.problems.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="text-alert mt-0.5">✕</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HoverLift>

              {/* Systems We Build */}
              <HoverLift y={-2}>
                <div className="h-full p-5 bg-[#080A0B] border border-surface-border space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-tech-teal pb-2 border-b border-surface-border/40">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>SYSTEMS AURION BUILDS</span>
                  </div>
                  <ul className="space-y-2 text-primary text-[11px]">
                    {ind.systemsWeBuild.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="text-tech-teal mt-0.5">▶</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HoverLift>

              {/* Proven Solutions */}
              <HoverLift y={-2}>
                <div className="h-full p-5 bg-[#080A0B] border border-surface-border space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-success pb-2 border-b border-surface-border/40">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VALIDATED OUTCOMES</span>
                  </div>
                  <ul className="space-y-2 text-primary-muted text-[11px]">
                    {ind.solutions.map((sol) => (
                      <li key={sol} className="flex items-start gap-2">
                        <span className="text-success mt-0.5">✓</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HoverLift>
            </div>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  );
};
