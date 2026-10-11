import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { PageBackground } from "@/components/reactbits/backgrounds/PageBackground";
import { ArchitectureDiagram, PipelineStep } from "@/components/framer/ArchitectureDiagram";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

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
    name: "EVALUATION",
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
      {/* Threads Background (Category G4) */}
      <PageBackground preset="threads" opacity={0.25} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">MACHINE LEARNING</span>
        </div>

        {/* Hero Header with Clamped Typography */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>APPLIED MATHEMATICS • PREDICTIVE INFERENCE</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
            FROM DATA TO <br />
            <span className="text-accent">DECISIONS.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
            Machine learning engineered for verifiable impact. We translate raw telemetry and historical datasets
            into real-time operational decisions with mathematically audited accuracy.
          </p>
        </div>

        {/* ML Pipeline Progression */}
        <div className="mb-20">
          <ArchitectureDiagram
            title="END-TO-END ML PIPELINE (DATA → FEATURES → MODEL → EVALUATION → PREDICTION)"
            steps={ML_PIPELINE}
          />
        </div>

        {/* ML Domains Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>MODEL FAMILIES</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary mb-10">
            PREDICTIVE SYSTEMS CAPABILITY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ML_DOMAINS.map((domain, idx) => (
              <SpotlightCard
                key={domain.title}
                theme="dark"
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-accent">
                    <span>MODEL // 0{idx + 1}</span>
                    <TrendingUp className="w-4 h-4 text-tech-teal" />
                  </div>

                  <h3 className="font-sans font-bold text-lg text-primary mb-2">
                    {domain.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-primary-muted leading-relaxed font-normal">
                    {domain.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-1.5 mt-6">
                  {domain.tech.map((t) => (
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
              PREDICTIVE SYSTEMS POD
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Ready to train and serve deterministic models on your proprietary data?
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>INITIATE ML ENGAGEMENT</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
