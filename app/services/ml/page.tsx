import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp, Activity, Cpu } from "lucide-react";
import { AmbientBackground } from "@/components/framer/AmbientBackground";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";
import { ArchitectureDiagram, PipelineStep } from "@/components/framer/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Machine Learning & Predictive Systems | Aurion Conclave",
  description:
    "Production machine learning pipelines, time-series forecasting, computer vision perception, deep representation learning, and risk scoring systems.",
};

const ML_PIPELINE: PipelineStep[] = [
  {
    number: "01",
    name: "DATA",
    subtext: "High-throughput streaming ingestion from enterprise sources.",
    techDetail: "Kafka / ClickHouse ingestion with schema validation and missing value imputation.",
  },
  {
    number: "02",
    name: "FEATURES",
    subtext: "Deterministic feature store calculations and normalization.",
    techDetail: "Feast feature store syncing point-in-time correct training and serving features.",
  },
  {
    number: "03",
    name: "MODEL",
    subtext: "Gradient boosted trees, transformers, or custom neural kernels.",
    techDetail: "PyTorch / XGBoost with GPU acceleration, quantized to FP8 for sub-10ms inference.",
  },
  {
    number: "04",
    name: "VALIDATION",
    subtext: "Out-of-distribution drift detection and adversarial testing.",
    techDetail: "Continuous KS-tests, demographic parity fairness checks, and backtested Sharpe ratios.",
  },
  {
    number: "05",
    name: "PREDICTION",
    subtext: "Sub-millisecond inference exposed via high-concurrency APIs.",
    techDetail: "Triton inference server deployment with batching and low-latency gRPC endpoints.",
  },
];

const ML_DOMAINS = [
  {
    title: "COMPUTER VISION",
    desc: "Defect detection on industrial assembly lines, medical scan segmentation, and autonomous visual perception.",
    tech: ["YOLOv10", "Segment Anything", "OpenCV", "TensorRT"],
  },
  {
    title: "TIME-SERIES FORECASTING",
    desc: "Supply chain demand forecasting, multi-horizon electricity load prediction, and financial price movement models.",
    tech: ["Temporal Fusion Transformers", "DeepAR", "Prophet", "LightGBM"],
  },
  {
    title: "CLASSIFICATION & RANKING",
    desc: "Multi-class categorization of customer interactions, support routing, and high-precision fraud triage.",
    tech: ["XGBoost", "CatBoost", "Cross-Encoders", "Logistic Calibration"],
  },
  {
    title: "ANOMALY DETECTION",
    desc: "Unsupervised telemetry outlier discovery, industrial turbine vibration anomalies, and network intrusion flags.",
    tech: ["Isolation Forests", "Autoencoders", "DBSCAN", "Mahalanobis Distance"],
  },
  {
    title: "NATURAL LANGUAGE PROCESSING",
    desc: "Domain-specific entity extraction, legal sentiment analysis, and regulatory classification engines.",
    tech: ["BERT / RoBERTa", "spaCy", "Tokenizers", "Sentence Transformers"],
  },
  {
    title: "RISK & UNDERWRITING SYSTEMS",
    desc: "Credit risk default estimation, insurance premium scoring, and counterparty exposure modeling.",
    tech: ["Weight-of-Evidence", "Scorecard Models", "Explainable AI (SHAP)", "Monotonic Constraints"],
  },
];

export default function MachineLearningPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background: Data Points Moving through Model Pipeline */}
      <AmbientBackground variant="ml" />
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">MACHINE LEARNING</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>APPLIED MATHEMATICS • PREDICTIVE INFERENCE</span>
          </div>

          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
            FROM <br />
            DATA <br />
            TO <br />
            <span className="text-accent">DECISIONS.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
            Machine learning engineered for verifiable impact. We translate raw telemetry and historical datasets
            into real-time operational decisions with mathematically audited accuracy.
          </p>
        </div>

        {/* ML Pipeline Progression */}
        <div className="mb-24">
          <ArchitectureDiagram
            title="END-TO-END ML PIPELINE"
            steps={ML_PIPELINE}
          />
        </div>

        {/* ML Domains Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>MODEL FAMILIES</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary mb-12">
            PREDICTIVE SYSTEMS CAPABILITY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ML_DOMAINS.map((domain, idx) => (
              <div
                key={domain.title}
                className="p-8 luxury-glass border border-surface-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-accent mb-3">0{idx + 1}</div>
                  <h3 className="font-sans font-bold text-xl text-primary mb-3">
                    {domain.title}
                  </h3>
                  <p className="font-sans text-sm text-primary-muted leading-relaxed">
                    {domain.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/40 flex flex-wrap gap-2">
                  {domain.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-surface border border-surface-border font-mono text-[10px] text-accent/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-accent tracking-widest uppercase">
              DEPLOY PREDICTIVE SYSTEMS
            </div>
            <h3 className="font-sans text-2xl font-bold text-primary">
              Turn latent enterprise data into real-time decision advantages.
            </h3>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0"
          >
            <span>DISCUSS AN ML SYSTEM</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
