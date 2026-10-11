"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { ContourTide } from "@/components/reactbits/backgrounds/ContourTide";

export const HomeProductsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0a0d0e] via-[#0d1011] to-[#080a0b] border-b border-surface-border overflow-hidden">
      {/* Background Contour Tide from React Bits Pro (An ocean of particles rolling in waves) */}
      <ContourTide opacity={0.85} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>AURION / INCUBATED IP</span>
              <span className="text-white/20">•</span>
              <span className="text-primary-muted">VERIFIED PRODUCTS</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              BUILT FROM <br />
              <span className="text-accent">REAL PROBLEMS.</span>
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-mid tracking-wider transition-colors"
          >
            <span>EXPLORE PRODUCT LAB</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Minimal Editorial Products Grid - 3 Key Verified Flagships */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((prod) => (
            <SpotlightCard key={prod.id} theme="dark" className="h-full flex flex-col justify-between">
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10 font-mono text-xs">
                  <span className="text-accent font-semibold">{prod.code}</span>
                  <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-primary-muted tracking-wider uppercase">
                    {prod.status === "COMING_SOON" ? "IN ACTIVE R&D" : prod.statusLabel}
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="font-sans text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {prod.name}
                </h3>
                <div className="font-mono text-xs text-tech-teal mt-1">
                  {prod.category}
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-primary-muted mt-4 leading-relaxed font-normal">
                  {prod.description}
                </p>
              </div>

              {/* Bottom Tech Indicators and Metric */}
              <div className="mt-8 pt-5 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {prod.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-primary-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {prod.metrics && prod.metrics[0] && (
                  <div className="flex items-center justify-between font-mono text-xs pt-1">
                    <span className="text-primary-muted">{prod.metrics[0].label}:</span>
                    <span className="text-accent font-semibold">{prod.metrics[0].value}</span>
                  </div>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSection;
