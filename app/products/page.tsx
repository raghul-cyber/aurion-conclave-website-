"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ArrowUpRight } from "lucide-react";
import { PageBackground } from "@/components/reactbits/backgrounds/PageBackground";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Light Rays Background (Category G4) */}
      <PageBackground preset="light-rays" opacity={0.25} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28 space-y-16">
        {/* Editorial Hero Header with Clamped Typography */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>AURION PRODUCT DIVISION</span>
            <span className="text-white/20">•</span>
            <span className="text-primary-muted">PROPRIETARY ASSETS</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            WE BUILD OUR OWN <br />
            <span className="text-accent">SYSTEMS TOO.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            We are not a traditional fee-for-service agency. Client delivery grounds us in empirical reality;
            our dedicated internal product studio converts repeating enterprise friction into proprietary, defensible software assets.
          </p>
        </div>

        {/* Product Portfolio Cards */}
        <div className="space-y-10">
          {PRODUCTS.map((prod) => (
            <SpotlightCard
              key={prod.id}
              theme="dark"
              id={prod.id}
              className="p-8 sm:p-10 space-y-8"
            >
              {/* Product Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {prod.code}
                    </span>
                    <span className="font-mono text-xs text-primary-muted uppercase tracking-wider">
                      CATEGORY: {prod.category}
                    </span>
                  </div>
                  <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary">
                    {prod.name}
                  </h2>
                  <p className="font-mono text-xs text-accent">{prod.tagline}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-semibold bg-accent/15 border border-accent/40 text-accent uppercase tracking-wider">
                    {prod.status === "COMING_SOON" ? "IN ACTIVE R&D" : prod.statusLabel}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-4">
                  <p className="font-sans text-sm text-primary-muted leading-relaxed font-normal">
                    {prod.description}
                  </p>

                  <div className="pt-2">
                    <span className="font-mono text-[11px] text-accent uppercase tracking-wider block mb-2">
                      CORE CAPABILITIES
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-primary/80">
                      {(prod.keyFeatures || []).map((feat: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 p-5 rounded-xl border border-white/10 bg-[#151A1B] space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-primary-muted uppercase tracking-wider block mb-1">
                      UNDERLYING STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-primary-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {prod.metrics && prod.metrics[0] && (
                    <div className="pt-3 border-t border-white/10 font-mono text-xs">
                      <span className="text-primary-muted block text-[10px] uppercase">
                        {prod.metrics[0].label}
                      </span>
                      <span className="text-accent font-bold text-base">
                        {prod.metrics[0].value}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl luxury-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              CO-DEVELOPMENT & IP LICENSING
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Interested in deploying or co-developing a proprietary platform asset?
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>EXPLORE CO-DEVELOPMENT</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
