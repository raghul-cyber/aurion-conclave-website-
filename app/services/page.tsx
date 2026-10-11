import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ServiceMatrix } from "@/components/ServiceMatrix";
import { SERVICE_CATEGORIES, ALL_SERVICES } from "@/data/services";
import { Layers, Search, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "140+ Technology Services & Architecture Matrix | Aurion Conclave",
  description:
    "Comprehensive directory of 140+ specialized services across software engineering, AI agents, machine learning, cloud infrastructure, data systems, and enterprise automation.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen py-16 bg-[#050607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
            <span>AURION CONCLAVE</span>
            <span>•</span>
            <span className="text-tech-cyan">140+ ENTERPRISE CAPABILITIES</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-primary tracking-tight">
            THE SERVICE MATRIX.
          </h1>

          <p className="font-sans text-base sm:text-lg text-primary-muted mt-4 leading-relaxed">
            Every technology system we build is grounded in domain-driven architecture, typed contracts,
            strict performance benchmarks, and measurable business ROI. Explore our 16 specialized domains.
          </p>
        </div>

        {/* Full Interactive Service Matrix */}
        <Suspense fallback={<div className="font-mono text-xs text-primary-muted">Loading Service Matrix...</div>}>
          <ServiceMatrix />
        </Suspense>
      </div>
    </div>
  );
}
