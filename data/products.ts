export interface ProductItem {
  id: string;
  code: string;
  name: string;
  category: string;
  status: "ACTIVE_INCUBATION" | "PRODUCTION_ALPHA" | "APPLIED_R&D" | "COMING_SOON";
  statusLabel: string;
  tagline: string;
  description: string;
  originStory: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "aurion-synapse",
    code: "PRD-01",
    name: "Aurion Synapse",
    category: "Autonomous Multi-Agent Orchestration",
    status: "PRODUCTION_ALPHA",
    statusLabel: "ALPHA RUNTIME",
    tagline: "The high-throughput control plane for multi-agent enterprise swarms.",
    description: "Born from recurring consultancy demands where enterprise clients struggled to govern, observe, and rate-limit dozens of independent AI agents operating across departments.",
    originStory: "Extracted from 4 enterprise banking and logistics consultancy deployments requiring shared state memory, token budgeting, and zero-hallucination execution loops.",
    technologies: ["Rust", "TypeScript", "PostgreSQL", "ClickHouse", "WebSockets"],
    metrics: [
      { label: "Max Agent Concurrency", value: "2,500 agents" },
      { label: "Trace Serialization Overhead", value: "<1.4ms" },
      { label: "Token Cost Reduction", value: "42%" }
    ],
    keyFeatures: [
      "Deterministic step-by-step session replay",
      "Dynamic token quota and cost firewalls",
      "Consensus voting protocols for multi-agent decisions",
      "Zero-trust credential injection proxy"
    ]
  },
  {
    id: "aurion-ledgerflow",
    code: "PRD-02",
    name: "Aurion LedgerFlow",
    category: "Financial Data Intelligence & Reconciliation",
    status: "ACTIVE_INCUBATION",
    statusLabel: "ACTIVE INCUBATION",
    tagline: "Real-time automated transaction reconciliation and anomaly detection.",
    description: "An automated financial streaming engine that ingests millions of banking ledger transactions, payment gateway webhooks, and ERP entries to detect discrepancies in milliseconds.",
    originStory: "Developed after discovering enterprise clients spending 120+ human hours every month manually reconciling discrepancies between Stripe, NetSuite, and internal accounting tables.",
    technologies: ["Go", "Apache Kafka", "PostgreSQL RLS", "DuckDB", "Tailwind CSS"],
    metrics: [
      { label: "Reconciliation Throughput", value: "45,000 tx/sec" },
      { label: "Audit Discrepancy Elimination", value: "99.98%" },
      { label: "Monthly Accounting Hours Saved", value: "115 hrs" }
    ],
    keyFeatures: [
      "Sub-second multi-ledger cross-matching",
      "Automated suspicious transaction isolation",
      "Continuous SOC1 / SOC2 audit compliance logging",
      "Exportable regulatory reporting sheets"
    ]
  },
  {
    id: "aurion-cortex-rag",
    code: "PRD-03",
    name: "Aurion CortexRAG",
    category: "Enterprise Knowledge & Vector Engine",
    status: "ACTIVE_INCUBATION",
    statusLabel: "ACTIVE INCUBATION",
    tagline: "Ultra-low-latency hybrid vector search and document parsing engine.",
    description: "An organizational memory platform that ingests PDFs, databases, CAD schematics, and chat logs, creating a unified knowledge graph with sub-second verified search.",
    originStory: "Incubated from client frustrations with generic vector databases that couldn't handle complex multi-page financial tables, CAD blueprints, or granular tenant permissions.",
    technologies: ["Python", "Qdrant", "FastAPI", "Next.js", "Docker"],
    metrics: [
      { label: "Search Latency", value: "<18ms" },
      { label: "Complex Table Recall", value: "99.4%" },
      { label: "Zero-Hallucination Rate", value: "100% cited" }
    ],
    keyFeatures: [
      "Hybrid dense-sparse lexical indexing",
      "Coordinate-exact visual citation bounding boxes",
      "Document-level Okta / SAML access filtering",
      "Continuous background sync across cloud drives"
    ]
  },
  {
    id: "aurion-hypermesh",
    code: "PRD-04",
    name: "Aurion HyperMesh",
    category: "Edge & Cloud Infrastructure Telemetry",
    status: "APPLIED_R&D",
    statusLabel: "APPLIED R&D",
    tagline: "Lightweight eBPF-driven network observability and zero-trust service mesh.",
    description: "A kernel-level observability agent that tracks every packet, microservice call, and memory spike across distributed cloud clusters with negligible CPU overhead.",
    originStory: "Initiated in Aurion's Applied R&D laboratory to solve observability blind spots in high-frequency trading backends where traditional agents imposed unacceptable CPU overhead.",
    technologies: ["eBPF", "C", "Rust", "Prometheus", "Linux Kernel"],
    metrics: [
      { label: "Kernel Overhead", value: "<0.4% CPU" },
      { label: "Packet Drop Detection", value: "Real-time" },
      { label: "Trace Resolution", value: "Nanoseconds" }
    ],
    keyFeatures: [
      "Zero-instrumentation code observation via eBPF",
      "Instant detection of TCP retransmits and socket leaks",
      "Kernel-enforced cryptographic pod authentication",
      "Automated network topology graph visualization"
    ]
  },
  {
    id: "aurion-neuralshield",
    code: "PRD-05",
    name: "Aurion NeuralShield",
    category: "AI Security & Adversarial Defense",
    status: "APPLIED_R&D",
    statusLabel: "APPLIED R&D",
    tagline: "Autonomous prompt injection defense and model security gateway.",
    description: "A defensive gateway that intercepts incoming user prompts and outgoing model completions, preventing prompt injection attacks, jailbreaks, and sensitive data exfiltration.",
    originStory: "Conceived during client security audits where customer-facing LLM deployments proved vulnerable to subtle multi-turn adversarial prompt injections.",
    technologies: ["Python", "ONNX Runtime", "FastAPI", "Redis", "Docker"],
    metrics: [
      { label: "Injection Catch Rate", value: "99.7%" },
      { label: "Inspection Overhead", value: "<9ms" },
      { label: "False Positive Ratio", value: "<0.2%" }
    ],
    keyFeatures: [
      "Real-time semantic adversarial token classification",
      "Automated PII and API secret token redaction",
      "Model extraction and inversion defense",
      "Continuous red-team honeypot logging"
    ]
  },
  {
    id: "aurion-quantum-optimizer",
    code: "PRD-06",
    name: "Aurion OmniOptima",
    category: "Combinatorial Logistics Engine",
    status: "COMING_SOON",
    statusLabel: "COMING SOON",
    tagline: "High-dimensional fleet and supply-chain combinatorial optimization.",
    description: "A proprietary combinatorial solver designed to calculate globally optimal delivery routes, warehouse allocations, and energy distribution under severe real-time constraints.",
    originStory: "Currently being incubated in applied research partnership with national logistics carriers.",
    technologies: ["C++20", "Rust", "SIMD", "CUDA"],
    metrics: [
      { label: "Route Cost Reduction", value: "18-24%" },
      { label: "Variables Solved", value: "500,000+ constraints" },
      { label: "Computation Time", value: "<4 seconds" }
    ],
    keyFeatures: [
      "Hardware-accelerated SIMD heuristic optimization",
      "Real-time dynamic traffic & weather constraint recalculation",
      "Multi-depot multi-vehicle fleet coordination",
      "Continuous carbon footprint minimization"
    ]
  }
];
