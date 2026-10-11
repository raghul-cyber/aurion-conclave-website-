export interface ProcessStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const CONSULTANCY_PROCESS: ProcessStep[] = [
  {
    step: "01",
    name: "DISCOVER",
    tagline: "First-principles interrogation of the client's operational bottleneck.",
    description: "We meet directly with organizational decision-makers and technical leads to understand the business bottleneck, current software friction points, volume constraints, and strategic stakes.",
    deliverables: ["Discovery Assessment Matrix", "Stakeholder Priority Map", "High-Level Systems Scope"],
    duration: "Day 1 - 3"
  },
  {
    step: "02",
    name: "REQUIREMENTS",
    tagline: "Translating ambiguous operational desires into rigorous technical specifications.",
    description: "We decompose broad business goals into explicit functional requirements, API contracts, latency tolerances, data compliance frameworks (SOC2/HIPAA), and concurrency expectations.",
    deliverables: ["Technical Requirements Document (TRD)", "Data Schema Draft", "Compliance Constraint Checklist"],
    duration: "Week 1"
  },
  {
    step: "03",
    name: "FEASIBILITY",
    tagline: "De-risking algorithmic unknowns, API limits, and infrastructure trade-offs.",
    description: "Before promising impossible timelines, our principal engineers prototype proof-of-concept spikes to benchmark model accuracy, database throughput, third-party API rate limits, and latency budgets.",
    deliverables: ["Feasibility Spike Report", "Benchmark Latency Profiling", "Risk & Mitigation Register"],
    duration: "Week 1 - 2"
  },
  {
    step: "04",
    name: "ARCHITECTURE",
    tagline: "Designing the formal system blueprint before touching production code.",
    description: "We draft formal C4 architecture diagrams, event routing topographies, database entity-relationship models, network boundary security enclaves, and disaster recovery failover paths.",
    deliverables: ["Architecture Decision Records (ADRs)", "Network & Security Topology", "Database ERD & Index Strategy"],
    duration: "Week 2"
  },
  {
    step: "05",
    name: "PROPOSAL",
    tagline: "Transparent engineering scoping, resource pod allocation, and milestone contracts.",
    description: "We deliver an unambiguous commercial and technical proposal outlining the dedicated engineering pod composition, weekly milestone checkpoints, deliverables, and fixed/metered investment terms.",
    deliverables: ["Master Proposal Document", "Resource Pod Composition", "SLA & Milestones Schedule"],
    duration: "Week 2 - 3"
  },
  {
    step: "06",
    name: "PLAN",
    tagline: "Sprint cadence definition, repository setup, and CI/CD pipeline instantiation.",
    description: "We configure Git repositories, automated CI/CD build matrices, staging cloud environments, communication channels (dedicated Slack/Teams), and sprint backlogs in linear precision.",
    deliverables: ["Sprint Backlog & Story Map", "Hermetic Staging Environment", "Automated CI/CD Baseline"],
    duration: "Week 3"
  },
  {
    step: "07",
    name: "BUILD",
    tagline: "High-cadence, test-driven engineering pods executing in 2-week continuous sprints.",
    description: "Our dedicated engineers write clean, typed, modular code with automated unit and integration tests written in lockstep. You receive deployable staging builds every 7 to 14 days.",
    deliverables: ["Production-Grade Source Code", "Weekly Working Demonstrations", "Full Automated Test Suites"],
    duration: "Week 3 - 10"
  },
  {
    step: "08",
    name: "TEST",
    tagline: "Load stress testing, security penetration audits, and cross-browser regression.",
    description: "We subject the system to 100k+ simulated concurrent users, fuzz API endpoints for vulnerabilities, audit OWASP compliance, and execute automated end-to-end user journeys.",
    deliverables: ["Stress & Load Test Telemetry", "Penetration Audit Report", "Zero-Regression Sign-Off"],
    duration: "Week 10 - 11"
  },
  {
    step: "09",
    name: "DEPLOY",
    tagline: "Zero-downtime blue/green cutover to production cloud clusters.",
    description: "We orchestrate the live production switchover using canary or blue-green traffic shifting, live database replication reconciliation, and instant DNS health verification.",
    deliverables: ["Zero-Downtime Production Cutover", "Runbook & Disaster Recovery Playbook", "Executive Operational Sign-Off"],
    duration: "Week 11 - 12"
  },
  {
    step: "10",
    name: "SUPPORT",
    tagline: "Continuous SRE stewardship, performance monitoring, and model drift tuning.",
    description: "We stand behind everything we build. Our 24/7 reliability engineers monitor latency alerts, patch security updates, optimize database queries, and continuously retrain models.",
    deliverables: ["24/7 P1 Incident Response SLA", "Monthly Performance & Cost Audits", "Continuous Feature Enhancements"],
    duration: "Ongoing Stewardship"
  }
];

export interface ProductEngineStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  output: string;
}

export const PRODUCT_ENGINE_STEPS: ProductEngineStep[] = [
  {
    step: "01",
    name: "IDENTIFY",
    tagline: "Isolating recurring software friction points across enterprise consultancy projects.",
    description: "When our consultancy teams solve the exact same architectural challenge across multiple enterprise clients—such as agent governance or multi-ledger reconciliation—we flag it as a proprietary opportunity.",
    output: "Validated Industry Problem Dossier"
  },
  {
    step: "02",
    name: "RESEARCH",
    tagline: "Applied R&D into algorithmic kernels, latency bounds, and patentable models.",
    description: "Our research leads investigate state-of-the-art algorithms, eBPF telemetry, state machine graphs, or SIMD optimizations to design a generalizable, high-performance computational kernel.",
    output: "Algorithmic Whitepaper & Benchmark Data"
  },
  {
    step: "03",
    name: "VALIDATE",
    tagline: "Stress-testing prototypes with pilot enterprise design partners.",
    description: "We test initial prototypes directly against real enterprise workloads, verifying that our generalized solution outperforms bespoke one-off implementations in latency, cost, and reliability.",
    output: "Design Partner Pilot Contracts"
  },
  {
    step: "04",
    name: "MVP",
    tagline: "Engineering production-grade, multi-tenant software platforms.",
    description: "We build the complete software product: multi-tenant security isolation, API documentation, developer SDKs, self-service billing, and an ultra-fast maximalist management console.",
    output: "Alpha Release & Production Runtime"
  },
  {
    step: "05",
    name: "TEST",
    tagline: "Subjecting proprietary products to millions of concurrent production queries.",
    description: "We battle-test the product in live client environments, collecting telemetry, eliminating edge-case failures, and optimizing compute footprint to near-zero idle overhead.",
    output: "Enterprise SOC2 & Security Certification"
  },
  {
    step: "06",
    name: "SCALE",
    tagline: "Commercializing proprietary IP into standalone global software assets.",
    description: "The validated product transitions into a core Aurion Conclave software flagship, generating recurring software revenue and establishing long-term enterprise IP value.",
    output: "Proprietary Software Flagship & Global IP"
  }
];
