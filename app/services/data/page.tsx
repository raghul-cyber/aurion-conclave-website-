import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Database } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

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

export default function DataServicesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#111415] via-[#0b0e0f] to-[#060708] overflow-hidden">
      {/* Spectral Drape Background from React Bits Pro */}
      <SpectralDrape opacity={0.85} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">DATA & ANALYTICS</span>
        </div>

        {/* Hero Header with Clamped Typography */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>INTELLIGENCE FABRIC • REAL-TIME TELEMETRY</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            HIGH-THROUGHPUT <br />
            <span className="text-accent">DATA ENGINES.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            We build low-latency columnar lakehouses, real-time streaming architectures, and deterministic data models
            engineered to power high-concurrency enterprise applications.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>DATA DISCIPLINES</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary mb-10">
            ENGINEERED ANALYTICS INFRASTRUCTURE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA_CAPABILITIES.map((item, idx) => (
              <SpotlightCard
                key={item.title}
                theme="dark"
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-accent">
                    <span>LAKEHOUSE // 0{idx + 1}</span>
                    <Database className="w-4 h-4 text-tech-teal" />
                  </div>

                  <h3 className="font-sans font-bold text-lg text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-primary-muted leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-1.5 mt-6">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-accent/80 px-2 py-0.5 rounded bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl luxury-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              ENTERPRISE LAKEHOUSE AUDIT
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Ready to reduce query latency by 10x with vectorized columnar engines?
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>INITIALIZE DATA POD</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
