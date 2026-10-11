export interface IndustryItem {
  id: string;
  code: string;
  name: string;
  tagline: string;
  problems: string[];
  systemsWeBuild: string[];
  technologies: string[];
  solutions: string[];
  caseSnippet: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "financial-services",
    code: "IND-01",
    name: "Financial Services & Fintech",
    tagline: "High-frequency transaction ledgers, algorithmic risk engines, and regulatory compliance.",
    problems: [
      "Legacy core banking mainframes cannot process real-time payments or open banking APIs",
      "Manual monthly transaction reconciliation leads to audit delays and financial discrepancies",
      "Sophisticated fraud attacks execute in sub-second timeframes, bypassing batch detectors"
    ],
    systemsWeBuild: [
      "Sub-millisecond payment settlement & routing gateways",
      "Continuous double-entry financial ledger streaming pipelines",
      "Graph-based fraud detection & AML compliance engines",
      "Real-time borrower credit scoring & risk assessment models"
    ],
    technologies: ["Go", "Kafka", "PostgreSQL RLS", "ClickHouse", "Rust"],
    solutions: [
      "Replaced monolithic batch payment reconciliation with live Kafka-to-ClickHouse stream, cutting daily discrepancies by 99.8%",
      "Engineered automated underwriting risk scoring engine achieving <45ms evaluation time under SOC2 compliance"
    ],
    caseSnippet: "Engineered high-throughput payment reconciliation processing 45k tx/sec with 100% auditability."
  },
  {
    id: "healthcare",
    code: "IND-02",
    name: "Healthcare & Life Sciences",
    tagline: "HIPAA-compliant data pipelines, clinical document intelligence, and diagnostic ML.",
    problems: [
      "Clinical notes and lab reports locked in unstructured, scanned PDFs and handwritten forms",
      "Data silos between electronic health records (EHR) and clinical research databases",
      "Strict HIPAA / GDPR regulatory barriers preventing modern AI adoption without compliance guarantees"
    ],
    systemsWeBuild: [
      "HIPAA-compliant document parsing & structured medical coding pipelines",
      "Zero-trust clinical trial data sharing vaults with cryptographic masking",
      "Computer vision diagnostic assistance for MRI, CT, and pathology slides",
      "Autonomous patient appointment scheduling and triage voice agents"
    ],
    technologies: ["Python", "FastAPI", "MONAI", "PostgreSQL", "AWS HealthLake"],
    solutions: [
      "Built automated medical claims ingestion pipeline parsing 50,000 multi-page records/day with 99.6% accuracy",
      "Deployed HIPAA-certified private LLM copilot for clinical trial protocol generation"
    ],
    caseSnippet: "Processed 50,000 medical records daily with zero data leakage and 99.6% coordinate-exact extraction."
  },
  {
    id: "logistics",
    code: "IND-03",
    name: "Logistics & Supply Chain",
    tagline: "Combinatorial route optimization, warehouse automation, and real-time fleet telemetry.",
    problems: [
      "Volatile fuel prices, traffic disruptions, and delivery time windows causing route inefficiency",
      "Lack of real-time visibility across multi-carrier international supply networks",
      "Warehouse stockouts and inventory misallocations due to static batch forecasting"
    ],
    systemsWeBuild: [
      "Hardware-accelerated combinatorial fleet dispatch & routing solvers",
      "Real-time GPS vehicle telemetry and cold-chain temperature monitoring engines",
      "Multi-echelon inventory forecasting and automated restock orchestrators",
      "Autonomous bill-of-lading and customs declaration document agents"
    ],
    technologies: ["Go", "PostgreSQL PostGIS", "Redis", "Kafka", "Mapbox GL"],
    solutions: [
      "Delivered real-time routing engine reducing national fleet fuel consumption by 18.4%",
      "Engineered IoT cold-chain telemetry monitor flagging temperature anomalies within 15 seconds"
    ],
    caseSnippet: "Saved 18.4% fleet fuel overhead with sub-second combinatorial dispatch solvers."
  },
  {
    id: "enterprise",
    code: "IND-04",
    name: "Enterprise & Global Conglomerates",
    tagline: "Cross-subsidiary data mesh, legacy ERP modernization, and cognitive process automation.",
    problems: [
      "Decades of fragmented corporate software acquisitions creating isolated data silos",
      "Engineering velocity stalled by weeks-long manual deployment and approval chains",
      "C-suite lacking unified real-time visibility across subsidiary profit and loss streams"
    ],
    systemsWeBuild: [
      "Decentralized enterprise data mesh with domain data contracts",
      "Internal developer platforms (IDP) enabling self-service cloud provisioning",
      "ERP integration hubs connecting SAP, NetSuite, and Salesforce seamlessly",
      "Executive real-time business intelligence cockpits with scenario simulation"
    ],
    technologies: ["Next.js", "Java Spring Boot", "dbt", "Snowflake", "Kubernetes"],
    solutions: [
      "Unified 14 disparate corporate subsidiary datasets into a governed data mesh",
      "Built self-service cloud portal reducing engineer deployment tickets by 70%"
    ],
    caseSnippet: "Unified 14 enterprise subsidiaries into a single real-time data mesh."
  },
  {
    id: "manufacturing",
    code: "IND-05",
    name: "Manufacturing & Industrial IoT",
    tagline: "Edge computer vision inspection, predictive maintenance, and SCADA automation.",
    problems: [
      "Unplanned machinery breakdowns causing multi-million dollar assembly line shutdowns",
      "Manual optical defect inspection missing subtle microscopic component flaws",
      "Air-gapped factory networks unable to transmit sensory data safely to the cloud"
    ],
    systemsWeBuild: [
      "Edge-deployed computer vision defect detection running on factory camera feeds",
      "Acoustic and vibration time-series anomaly detection for industrial bearings and turbines",
      "SCADA / PLC event ingestion hubs converting industrial protocols (OPC-UA, Modbus) into Kafka",
      "Predictive spare-parts procurement and maintenance scheduling engines"
    ],
    technologies: ["PyTorch", "TensorRT", "MQTT", "TimescaleDB", "NVIDIA Jetson"],
    solutions: [
      "Deployed edge camera models detecting manufacturing defects at 120fps with 99.4% precision",
      "Implemented predictive turbine maintenance predicting bearing failure 3 weeks in advance"
    ],
    caseSnippet: "Spotted component defects at 120fps on assembly lines, cutting scrap rates by 34%."
  },
  {
    id: "retail",
    code: "IND-06",
    name: "Retail & E-Commerce",
    tagline: "Sub-500ms headless storefronts, vector product discovery, and dynamic pricing.",
    problems: [
      "Slow legacy storefronts suffering high cart abandonment and poor mobile performance",
      "Brittle keyword search returning zero results for conversational and conceptual queries",
      "Competitor price fluctuations eating into gross margins before manual updates occur"
    ],
    systemsWeBuild: [
      "Headless Next.js e-commerce architectures with instantaneous edge rendering",
      "Multimodal vector product search allowing image upload and semantic query discovery",
      "Algorithmic dynamic pricing engines responding to inventory and market dynamics",
      "Autonomous customer support and return adjudication bots integrated with Stripe"
    ],
    technologies: ["Next.js", "Qdrant", "Redis", "Tailwind CSS", "Shopify Storefront API"],
    solutions: [
      "Re-platformed high-growth apparel brand to headless architecture, increasing conversion by 28%",
      "Implemented vector search replacing keyword matching, slashing zero-result queries by 92%"
    ],
    caseSnippet: "Boosted checkout conversion by 28% while slashing zero-result queries by 92%."
  },
  {
    id: "cybersecurity-industry",
    code: "IND-07",
    name: "Cybersecurity & Defense",
    tagline: "Zero-trust network architecture, real-time SIEM intelligence, and red-team automation.",
    problems: [
      "Expanding API attack surfaces and cloud infrastructure configuration drift",
      "Security operations teams drowning in thousands of low-signal false-positive alerts",
      "Adversarial prompt injections and model poisoning threatening enterprise AI rollouts"
    ],
    systemsWeBuild: [
      "Autonomous API red-teaming and fuzzing engines",
      "Kernel-level eBPF intrusion detection sensors with zero CPU overhead",
      "AI firewall gateways inspecting LLM prompts and preventing data exfiltration",
      "Automated incident correlation and alert deduplication engines"
    ],
    technologies: ["Rust", "eBPF", "Elastic SIEM", "Python", "HashiCorp Vault"],
    solutions: [
      "Architected zero-trust enclave protecting classified data across multi-cloud environments",
      "Deployed automated vulnerability scanning catching zero-day dependency exploits pre-merge"
    ],
    caseSnippet: "Protected mission-critical data enclaves with eBPF telemetry and automated threat hunting."
  },
  {
    id: "energy-utilities",
    code: "IND-08",
    name: "Energy, Utilities & Agriculture",
    tagline: "Smart grid demand forecasting, solar/wind telemetry, and precision agriculture.",
    problems: [
      "Renewable energy generation volatility threatening electrical grid frequency stability",
      "Satellite and drone imagery of farmland underutilized for precision fertilizer and irrigation",
      "Aging pipeline and transmission line infrastructure requiring continuous physical monitoring"
    ],
    systemsWeBuild: [
      "Probabilistic multi-horizon energy demand and renewable generation forecasting",
      "Satellite multispectral NDVI crop health and disease segmentation pipelines",
      "Geospatial pipeline leak detection using acoustic sensors and drone footage",
      "Autonomous agricultural yield estimation and water management models"
    ],
    technologies: ["Python", "PyTorch", "GDAL", "Polars", "Deck.gl"],
    solutions: [
      "Built solar irradiance and power output forecast model reducing grid imbalance penalties by 38%",
      "Automated drone imagery pipeline identifying crop moisture stress across 100,000 acres"
    ],
    caseSnippet: "Reduced power grid imbalance penalties by 38% via multi-horizon neural forecasting."
  },
  {
    id: "mobility",
    code: "IND-09",
    name: "Mobility & Autonomous Systems",
    tagline: "Connected vehicle telemetry, ride-matching engines, and EV charging networks.",
    problems: [
      "High-concurrency spatial indexing required to match riders with drivers in sub-seconds",
      "EV charging grid overload during peak travel corridors without load throttling",
      "Vehicle sensor data streams generating massive bandwidth and cloud ingestion costs"
    ],
    systemsWeBuild: [
      "H3 / S2 geospatial indexing microservices for instant proximity matching",
      "Dynamic EV charging load balancers scheduling vehicle power draw against grid tariffs",
      "Edge-filtered automotive CAN bus telemetry ingestion pipelines",
      "Autonomous fleet maintenance diagnostics and battery state-of-health tracking"
    ],
    technologies: ["Go", "H3 Spatial", "Kafka", "TimescaleDB", "Rust"],
    solutions: [
      "Built sub-50ms ride-matching engine processing 10,000 concurrent driver coordinates",
      "Engineered smart EV charging orchestrator preventing transformer overloads during peak hours"
    ],
    caseSnippet: "Sub-50ms geospatial proximity matching handling 10,000 concurrent vehicle coordinates."
  },
  {
    id: "education",
    code: "IND-10",
    name: "Education & EdTech",
    tagline: "Adaptive learning algorithms, automated grading engines, and interactive simulators.",
    problems: [
      "One-size-fits-all curricula failing to adapt to student learning curves and knowledge gaps",
      "Educators overwhelmed with grading repetitive technical code assignments and essays",
      "Lack of engaging, interactive simulation environments for complex STEM subjects"
    ],
    systemsWeBuild: [
      "Knowledge-tracing Bayesian neural networks personalizing student concept roadmaps",
      "Automated code assignment grading engines with deterministic test execution sandboxes",
      "Interactive 3D mathematical and physics simulation interfaces in WebGL",
      "Institutional accreditation record systems with cryptographic credential verification"
    ],
    technologies: ["Next.js", "Docker", "Python", "Three.js", "PostgreSQL"],
    solutions: [
      "Engineered automated grading engine sandboxing Python and C++ code with instant student feedback",
      "Deployed personalized math concept graph accelerating student mastery by 35%"
    ],
    caseSnippet: "Sandboxed automatic code grading evaluating 100,000 student submissions monthly."
  },
  {
    id: "public-sector",
    code: "IND-11",
    name: "Public Sector & Civic Tech",
    tagline: "Citizen service portals, transparent open data, and sovereign digital identity.",
    problems: [
      "Citizen services plagued by paper applications, in-person lines, and weeks-long backlogs",
      "Public datasets locked in proprietary formats and unsearchable PDF archives",
      "Strict data sovereignty laws forbidding storage on standard commercial cloud regions"
    ],
    systemsWeBuild: [
      "Accessible, mobile-responsive citizen permit and license intake portals",
      "Open data APIs with automated redaction of citizen PII",
      "Sovereign cloud infrastructure compliant with national security standards",
      "Automated public records search and legal gazette indexing"
    ],
    technologies: ["Next.js", "PostgreSQL", "Terraform", "FastAPI", "Tailwind CSS"],
    solutions: [
      "Modernized municipal licensing portal reducing citizen permit processing from 14 days to 4 hours",
      "Built open-records search engine making 20 years of municipal council archives instantly queryable"
    ],
    caseSnippet: "Reduced citizen permit processing from 14 days to 4 hours with 100% digital workflows."
  },
  {
    id: "startups",
    code: "IND-12",
    name: "High-Growth Startups",
    tagline: "Seed to Series B engineering velocity, scalable foundations, and rapid market validation.",
    problems: [
      "Urgency to ship MVP before capital runway burns out without accumulating toxic technical debt",
      "Early technical decisions (monolith vs microservices, database choice) determining long-term survival",
      "Engineers diverted to firefighting server crashes instead of building customer-facing features"
    ],
    systemsWeBuild: [
      "Production-grade Next.js + Postgres MVPs designed to scale cleanly from day one",
      "Turnkey multi-tenant SaaS foundations with Stripe billing and authentication built in",
      "Zero-downtime CI/CD deployment pipelines on managed cloud infrastructure",
      "Scalability upgrades (read-replicas, job queues, caching) when customer volume surges"
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS / Vercel"],
    solutions: [
      "Engineered and launched Series A fintech platform from scratch in 7 weeks",
      "Upgraded startup backend from crashing SQLite monolith to robust Postgres cluster before product hunt launch"
    ],
    caseSnippet: "Architected and shipped Series-A fintech MVP in 7 weeks with zero production bugs."
  }
];
