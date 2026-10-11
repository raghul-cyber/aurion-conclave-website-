"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Shield, Cpu, Activity, Globe } from "lucide-react";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/framer/ScrollAnimations";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050607] border-t border-surface-border text-primary overflow-hidden">
      {/* Subtle technical background grid overlay */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-16 pb-12">
        {/* Top Header Section */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-surface-border/60">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-accent text-xs tracking-widest uppercase">
                  DIGITAL HEADQUARTERS
                </span>
                <span className="text-surface-border">•</span>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-success">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  <span>SYSTEMS ONLINE</span>
                </div>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
                AURION CONCLAVE
              </h2>

              <p className="font-mono text-xs text-accent tracking-wider uppercase">
                Technology Products • Consultancy • Innovation
              </p>

              <p className="text-sm text-primary-muted leading-relaxed max-w-md pt-2">
                A serious technology-driven organization operating dual engines of
                enterprise software consultancy and proprietary product R&D. We design,
                deploy, and scale intelligent systems around real-world problems.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light text-[#050607] font-mono text-xs font-semibold tracking-wider transition-colors"
                  >
                    <span>INITIATE PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/agents"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary font-mono text-xs tracking-wider transition-colors"
                  >
                    <Terminal className="w-3.5 h-3.5 text-tech-cyan" />
                    <span>EXPLORE AGENT LAB</span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Nav columns */}
            <div className="lg:col-span-7">
              <ScrollStagger staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {/* Column 1: Capabilities */}
                <ScrollStaggerItem>
                  <div>
                    <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                      01 / CAPABILITIES
                    </h3>
                    <ul className="space-y-2.5 font-mono text-xs text-primary-muted">
                      <li>
                        <Link href="/capabilities" className="hover:text-primary transition-colors">
                          System Architecture
                        </Link>
                      </li>
                      <li>
                        <Link href="/capabilities" className="hover:text-primary transition-colors">
                          AI & Agent Swarms
                        </Link>
                      </li>
                      <li>
                        <Link href="/capabilities" className="hover:text-primary transition-colors">
                          Machine Learning
                        </Link>
                      </li>
                      <li>
                        <Link href="/capabilities" className="hover:text-primary transition-colors">
                          Cloud & Kubernetes
                        </Link>
                      </li>
                      <li>
                        <Link href="/capabilities" className="hover:text-primary transition-colors">
                          Data Mesh & ETL
                        </Link>
                      </li>
                      <li>
                        <Link href="/capabilities" className="hover:text-primary transition-colors">
                          Zero-Trust Security
                        </Link>
                      </li>
                    </ul>
                  </div>
                </ScrollStaggerItem>

                {/* Column 2: Dedicated Services */}
                <ScrollStaggerItem>
                  <div>
                    <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                      02 / ARCHITECTURE
                    </h3>
                    <ul className="space-y-2.5 font-mono text-xs text-primary-muted">
                      <li>
                        <Link href="/services/ai" className="hover:text-primary transition-colors">
                          AI & Intelligent Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software" className="hover:text-primary transition-colors">
                          Software Engineering
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cloud" className="hover:text-primary transition-colors">
                          Cloud & Infrastructure
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ml" className="hover:text-primary transition-colors">
                          Machine Learning
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/data" className="hover:text-primary transition-colors">
                          Data & Analytics
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/automation" className="hover:text-primary transition-colors">
                          Workflow Automation
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cybersecurity" className="hover:text-primary transition-colors">
                          Cybersecurity
                        </Link>
                      </li>
                      <li>
                        <Link href="/engineering" className="text-accent hover:underline">
                          Engineering Pipeline (11 Stages) →
                        </Link>
                      </li>
                    </ul>
                  </div>
                </ScrollStaggerItem>

                {/* Column 3: The Agent Lab */}
                <ScrollStaggerItem>
                  <div>
                    <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                      03 / AGENT LAB
                    </h3>
                    <ul className="space-y-2.5 font-mono text-xs text-primary-muted">
                      <li>
                        <Link href="/agents?agent=aurion-receptionist" className="hover:text-primary transition-colors">
                          01 Receptionist
                        </Link>
                      </li>
                      <li>
                        <Link href="/agents?agent=research-agent" className="hover:text-primary transition-colors">
                          02 Research Agent
                        </Link>
                      </li>
                      <li>
                        <Link href="/agents?agent=document-analyst" className="hover:text-primary transition-colors">
                          03 Document Analyst
                        </Link>
                      </li>
                      <li>
                        <Link href="/agents?agent=code-assistant" className="hover:text-primary transition-colors">
                          04 Code Assistant
                        </Link>
                      </li>
                      <li>
                        <Link href="/agents?agent=data-analyst" className="hover:text-primary transition-colors">
                          05 Data Analyst
                        </Link>
                      </li>
                      <li>
                        <Link href="/agents?agent=voice-agent" className="hover:text-primary transition-colors">
                          12 Voice AI Agent
                        </Link>
                      </li>
                    </ul>
                  </div>
                </ScrollStaggerItem>

                {/* Column 4: Products & Company */}
                <ScrollStaggerItem>
                  <div>
                    <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                      04 / PRODUCTS & IP
                    </h3>
                    <ul className="space-y-2.5 font-mono text-xs text-primary-muted">
                      <li>
                        <Link href="/products" className="hover:text-primary transition-colors">
                          Aurion Synapse
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" className="hover:text-primary transition-colors">
                          Aurion LedgerFlow
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" className="hover:text-primary transition-colors">
                          Aurion CortexRAG
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" className="hover:text-primary transition-colors">
                          Aurion HyperMesh
                        </Link>
                      </li>
                      <li>
                        <Link href="/company" className="hover:text-primary transition-colors">
                          Applied R&D Lab
                        </Link>
                      </li>
                      <li>
                        <Link href="/company" className="hover:text-primary transition-colors">
                          Company Narrative
                        </Link>
                      </li>
                    </ul>
                  </div>
                </ScrollStaggerItem>
              </ScrollStagger>
            </div>
          </div>
        </ScrollReveal>

        {/* Technical Telemetry Strip */}
        <div className="py-6 border-b border-surface-border/40 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[11px] text-primary-muted">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-accent" />
            <span>CORE SPEC: V3.4 MAXIMALIST</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-tech-cyan" />
            <span>SECURITY: ZERO-TRUST ENCLAVE</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-success" />
            <span>CLUSTER LATENCY: 1.2MS</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-accent-light" />
            <span>GLOBAL REGIONS: 6 ACTIVE</span>
          </div>
        </div>

        {/* Bottom Copyright & Verification */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-primary-muted">
          <div>
            © {currentYear} AURION CONCLAVE. ALL RIGHTS RESERVED. REAL-WORLD SYSTEMS ENGINEERING.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-primary-muted/70">
              HASH: 0x7E2A9...AURION-PROD
            </span>
            <Link href="/contact" className="text-accent hover:underline">
              System Intake Terminal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
