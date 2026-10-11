import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Database, BarChart3, Binary, Layers } from "lucide-react";
import { AmbientBackground } from "@/components/framer/AmbientBackground";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";

export const metadata: Metadata = {
  title: "Data Engineering, Lakehouses & Streaming Analytics | Aurion Conclave",
  description:
    "Vectorized columnar lakehouses, real-time telemetry streaming, low-latency ETL/ELT pipelines, and sub-second BI visualization layers.",
};

const DATA_CAPABILITIES = [
  {
    title: "COLUMNAR LAKEHOUSES",
    desc: "Deploying high-concurrency analytical databases handling billions of rows with sub-50ms query execution.",
    tech: ["ClickHouse", "DuckDB", "Apache Iceberg", "Snowflake"],
  },
  {
    title: "REAL-TIME STREAMING",
    desc: "Sub-second event ingestion and stateful stream processing with exactly-once delivery guarantees.",
    tech: ["Apache Kafka", "Redpanda", "Apache Flink", "Debezium CDC"],
  },
  {
    title: "ETL & ELT PIPELINES",
    desc: "Automated, type-safe data ingestion pipelines with automated schema evolution and idempotency.",
    tech: ["dbt Core", "Dagster", "Airflow", "Polars"],
  },
  {
    title: "DATA MODELING & GOVERNANCE",
    desc: "Domain-driven data meshes, granular row-level access control, and automated cataloging.",
    tech: ["Data Mesh", "Data Lineage", "OpenMetadata", "PostgreSQL RLS"],
  },
  {
    title: "OPERATIONAL ANALYTICS & BI",
    desc: "Custom low-latency analytics dashboards and semantic layers connecting directly to customer-facing applications.",
    tech: ["Cube.js", "Apache Superset", "Tailwind Analytics", "Highcharts"],
  },
  {
    title: "VECTOR & HYBRID SEARCH",
    desc: "High-dimensional vector storage combined with full-text lexical search for instant enterprise knowledge recall.",
    tech: ["Qdrant", "pgvector", "BM25", "HNSW Indexing"],
  },
];

import { ScrollReveal, ScrollStagger, ScrollStaggerItem, HoverLift } from "@/components/framer/ScrollAnimations";

export default function DataServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background: Slowly Flowing Data Streams */}
      <AmbientBackground variant="data" />
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">DATA & ANALYTICS</span>
        </div>

        {/* Hero Header */}
        <ScrollReveal>
          <div className="max-w-4xl mb-20 space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>DATA SYSTEMS • VECTORIZED COLUMNAR ARCHITECTURE</span>
            </div>

            <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
              DATA <br />
              BECOMES <br />
              <span className="text-accent">SIGNAL.</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
              We turn stagnant, fragmented enterprise data lakes into real-time operational advantages.
              Sub-second analytical queries, automated schema lineage, and verified data integrity.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Capabilities */}
        <div className="mb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>DATA INFRASTRUCTURE DOMAINS</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary mb-12">
            INTELLIGENCE FABRIC
          </h2>

          <ScrollStagger staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA_CAPABILITIES.map((cap, idx) => (
              <ScrollStaggerItem key={cap.title}>
                <HoverLift y={-4}>
                  <div className="h-full p-8 luxury-glass border border-surface-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border/50 font-mono text-xs text-accent">
                        <span>DOM // 0{idx + 1}</span>
                        <Database className="w-4 h-4 text-tech-teal" />
                      </div>

                      <h3 className="font-sans font-bold text-xl text-primary">
                        {cap.title}
                      </h3>

                      <p className="font-sans text-sm text-primary-muted mt-4 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-surface-border/40 flex flex-wrap gap-2">
                      {cap.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-surface border border-surface-border font-mono text-[10px] text-tech-teal"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </HoverLift>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="font-mono text-xs text-accent tracking-widest uppercase">
                ACTIVATE YOUR ENTERPRISE DATA
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary">
                Ready to reduce analytical query latencies from minutes to milliseconds?
              </h3>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0 hover:scale-[1.02]"
            >
              <span>ENGINEER DATA FABRIC</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
