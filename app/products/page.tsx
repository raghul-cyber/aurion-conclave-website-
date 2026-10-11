"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { ScrollReveal } from "@/components/framer/ScrollAnimations";

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28 space-y-24">
        {/* Editorial Hero Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={24}>
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>AURION PRODUCT DIVISION</span>
              <span className="text-primary-muted/40">•</span>
              <span className="text-primary-muted">PROPRIETARY ASSETS</span>
            </div>

            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
              WE BUILD <br />
              OUR OWN <br />
              <span className="text-accent">SYSTEMS TOO.</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
              We are not a traditional fee-for-service agency. Client delivery grounds us in empirical reality;
              our dedicated internal product studio converts repeating enterprise friction into proprietary, defensible software assets.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Product Portfolio Presentation */}
        <div className="space-y-16">
          {PRODUCTS.map((prod) => (
            <ScrollReveal key={prod.id} direction="up" distance={30}>
              <motion.div
                id={prod.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-8 sm:p-12 luxury-glass border border-surface-border hover:border-accent/40 transition-colors duration-300 rounded-sm space-y-8 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
              >
                {/* Product Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-surface-border/60 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 bg-surface border border-surface-border">
                        {prod.code}
                      </span>
                      <span className="font-mono text-xs text-primary-muted uppercase tracking-wider">
                        CATEGORY: {prod.category}
                      </span>
                    </div>
                    <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                      {prod.name}
                    </h2>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-auto font-mono text-xs">
                    <span className="px-3 py-1 bg-surface-elevated border border-surface-border text-tech-teal uppercase tracking-wider">
                      {prod.status === "COMING_SOON" ? "COMING SOON" : prod.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Tagline & Deep Description */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <p className="font-mono text-sm text-accent leading-relaxed">
                      &quot;{prod.tagline}&quot;
                    </p>
                    <p className="font-sans text-base text-primary-muted leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Origin from Consultancy */}
                    <div className="p-4 bg-[#080A0B] border border-surface-border font-mono text-xs space-y-1 mt-4">
                      <span className="text-accent text-[10px] uppercase tracking-widest font-semibold">
                        ORIGIN FROM REAL-WORLD PROBLEMS:
                      </span>
                      <p className="text-primary-muted font-sans text-xs sm:text-sm">
                        {prod.originStory}
                      </p>
                    </div>
                  </div>

                  {/* Right: Key Performance Telemetry & Tech */}
                  <div className="lg:col-span-4 p-5 bg-[#080A0B] border border-surface-border space-y-5">
                    <div className="font-mono text-xs text-primary-muted uppercase tracking-widest pb-2 border-b border-surface-border/50">
                      BENCHMARK TELEMETRY
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      {prod.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center justify-between">
                          <span className="text-primary-muted">{m.label}:</span>
                          <span className="text-accent font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-surface-border/50">
                      <div className="font-mono text-[10px] text-primary-muted uppercase tracking-widest mb-2">
                        TECHNOLOGY STACK
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {prod.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-surface border border-surface-border font-mono text-[10px] text-primary-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Architectural Key Features */}
                <div className="pt-6 border-t border-surface-border/50">
                  <div className="font-mono text-xs text-primary-muted uppercase tracking-widest mb-4">
                    CORE ARCHITECTURAL INVARIANTS:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {prod.keyFeatures.map((kf) => (
                      <div
                        key={kf}
                        className="p-3 bg-surface/50 border border-surface-border flex items-start gap-2.5 font-sans text-xs text-primary"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{kf}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA with ScrollReveal */}
        <ScrollReveal direction="up" distance={20}>
          <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-[0_0_30px_rgba(201,148,62,0.1)]">
            <div className="space-y-2">
              <div className="font-mono text-xs text-accent tracking-widest uppercase">
                EARLY PARTNER ACCESS
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary">
                Interested in deploying an Aurion proprietary software asset within your enterprise?
              </h3>
            </div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-colors shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0"
              >
                <span>REQUEST DESIGN PARTNER ACCESS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

