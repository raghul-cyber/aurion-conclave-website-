"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem, HoverLift } from "@/components/framer/ScrollAnimations";

export const HomeProductsSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#060708] border-b border-surface-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-surface-border">
            <div>
              <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>AURION / INCUBATED IP</span>
                <span className="text-primary-muted/40">•</span>
                <span className="text-primary-muted">VERIFIED PRODUCTS</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
                BUILT FROM <br />
                <span className="text-accent">REAL PROBLEMS.</span>
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-light tracking-wider transition-colors"
            >
              <span>EXPLORE PRODUCT LAB</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Minimal Editorial Products Grid - 3 Key Flagships */}
        <ScrollStagger staggerDelay={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((prod) => (
            <ScrollStaggerItem key={prod.id}>
              <HoverLift y={-4}>
                <div className="h-full p-8 luxury-glass border border-surface-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Header Metadata */}
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-surface-border/60 font-mono text-xs">
                      <span className="text-accent font-semibold">{prod.code}</span>
                      <span className="px-2.5 py-1 bg-surface-elevated border border-surface-border text-[10px] text-primary-muted tracking-wider uppercase">
                        {prod.status === "COMING_SOON" ? "COMING SOON" : prod.statusLabel}
                      </span>
                    </div>

                    {/* Title and Tagline */}
                    <h3 className="font-sans text-2xl font-extrabold text-primary group-hover:text-accent transition-colors duration-300">
                      {prod.name}
                    </h3>
                    <div className="font-mono text-xs text-accent/90 mt-1">
                      {prod.category}
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm text-primary-muted mt-5 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  {/* Bottom Tech Indicators and Metric */}
                  <div className="mt-8 pt-6 border-t border-surface-border/50 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {prod.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-surface border border-surface-border font-mono text-[10px] text-primary-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between font-mono text-xs pt-1">
                      <span className="text-primary-muted">{prod.metrics[0].label}:</span>
                      <span className="text-accent font-bold">{prod.metrics[0].value}</span>
                    </div>
                  </div>
                </div>
              </HoverLift>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
};
