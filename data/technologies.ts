export interface TechItem {
  id: string;
  name: string;
  category: "FRONTEND" | "BACKEND" | "AI" | "ML" | "CLOUD" | "DATABASE" | "DEVOPS" | "MOBILE" | "SECURITY" | "DATA";
  proficiency: "CORE_PILLAR" | "ADVANCED" | "STRATEGIC";
  description: string;
  connections: string[];
  level: number; // 1-100
}

export const TECH_GROUPS = [
  { id: "AI", label: "Artificial Intelligence", color: "#61C7C0", count: 8 },
  { id: "ML", label: "Machine Learning", color: "#D9A441", count: 7 },
  { id: "BACKEND", label: "Backend & Systems", color: "#F4F1E8", count: 8 },
  { id: "FRONTEND", label: "Frontend & UI", color: "#61C7C0", count: 6 },
  { id: "CLOUD", label: "Cloud & Distributed", color: "#D9A441", count: 7 },
  { id: "DATABASE", label: "Databases & Storage", color: "#6FD2A5", count: 6 },
  { id: "DEVOPS", label: "DevOps & Platform", color: "#6FD2A5", count: 6 },
  { id: "DATA", label: "Data Engineering", color: "#61C7C0", count: 6 },
  { id: "SECURITY", label: "Cybersecurity", color: "#E56B6F", count: 5 },
  { id: "MOBILE", label: "Mobile Engineering", color: "#D9A441", count: 4 },
];

export const TECHNOLOGIES: TechItem[] = [
  // AI
  {
    id: "langchain-langgraph",
    name: "LangGraph / LangChain",
    category: "AI",
    proficiency: "CORE_PILLAR",
    description: "Multi-agent cyclical state machines and cognitive execution graphs.",
    connections: ["fastapi", "python", "qdrant", "openai-api"],
    level: 98
  },
  {
    id: "llamaindex",
    name: "LlamaIndex",
    category: "AI",
    proficiency: "CORE_PILLAR",
    description: "Production data framework for RAG and institutional knowledge graphs.",
    connections: ["qdrant", "postgresql-pgvector", "python"],
    level: 95
  },
  {
    id: "openai-api",
    name: "OpenAI Frontier APIs",
    category: "AI",
    proficiency: "CORE_PILLAR",
    description: "GPT-4o, reasoning models, embeddings, and structured outputs.",
    connections: ["fastapi", "nextjs", "langchain-langgraph"],
    level: 99
  },
  {
    id: "anthropic-claude",
    name: "Anthropic Claude 3.5",
    category: "AI",
    proficiency: "CORE_PILLAR",
    description: "Sonnet and Haiku for complex coding, reasoning, and long-context synthesis.",
    connections: ["langchain-langgraph", "fastapi", "python"],
    level: 99
  },
  {
    id: "google-gemini",
    name: "Google Gemini 1.5 Pro",
    category: "AI",
    proficiency: "CORE_PILLAR",
    description: "2M-token multimodal context windows and audio-visual reasoning.",
    connections: ["python", "gcp", "fastapi"],
    level: 96
  },
  {
    id: "open-source-llms",
    name: "Llama 3 & DeepSeek",
    category: "AI",
    proficiency: "ADVANCED",
    description: "Locally fine-tuned open-source models deployed via vLLM on private clusters.",
    connections: ["vllm", "docker", "kubernetes", "pytorch"],
    level: 94
  },
  {
    id: "vllm",
    name: "vLLM High-Throughput Engine",
    category: "AI",
    proficiency: "ADVANCED",
    description: "PagedAttention memory management for ultra-fast local model inference.",
    connections: ["open-source-llms", "kubernetes", "docker"],
    level: 92
  },

  // ML
  {
    id: "pytorch",
    name: "PyTorch",
    category: "ML",
    proficiency: "CORE_PILLAR",
    description: "Dynamic tensor computation, deep learning model architecture, and GPU acceleration.",
    connections: ["python", "cuda", "xgboost", "tensorrt"],
    level: 98
  },
  {
    id: "xgboost",
    name: "XGBoost & LightGBM",
    category: "ML",
    proficiency: "CORE_PILLAR",
    description: "Gradient boosted decision trees for predictive tabular modeling and risk scoring.",
    connections: ["python", "polars", "postgresql"],
    level: 96
  },
  {
    id: "tensorrt",
    name: "NVIDIA TensorRT & CUDA",
    category: "ML",
    proficiency: "ADVANCED",
    description: "Low-latency FP16 / INT8 quantization and GPU kernel optimization.",
    connections: ["pytorch", "docker", "computer-vision"],
    level: 91
  },
  {
    id: "yolov10",
    name: "YOLOv10 / RT-DETR",
    category: "ML",
    proficiency: "ADVANCED",
    description: "Real-time edge object detection and bounding box telemetry.",
    connections: ["pytorch", "tensorrt", "python"],
    level: 93
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "ML",
    proficiency: "CORE_PILLAR",
    description: "Foundational machine learning estimators, preprocessing, and model evals.",
    connections: ["python", "xgboost", "polars"],
    level: 97
  },
  {
    id: "mlflow",
    name: "MLflow Registry",
    category: "ML",
    proficiency: "ADVANCED",
    description: "Experiment tracking, model versioning, and continuous lineage management.",
    connections: ["python", "docker", "kubernetes"],
    level: 90
  },

  // BACKEND & SYSTEMS
  {
    id: "go-golang",
    name: "Go (Golang)",
    category: "BACKEND",
    proficiency: "CORE_PILLAR",
    description: "High-concurrency microservices, network proxies, and low-latency engines.",
    connections: ["grpc", "docker", "kubernetes", "postgresql", "kafka"],
    level: 98
  },
  {
    id: "rust-lang",
    name: "Rust",
    category: "BACKEND",
    proficiency: "CORE_PILLAR",
    description: "Zero-cost abstractions, memory safety without garbage collection, and SIMD compute.",
    connections: ["webassembly", "docker", "postgresql"],
    level: 95
  },
  {
    id: "python",
    name: "Python 3.12+",
    category: "BACKEND",
    proficiency: "CORE_PILLAR",
    description: "AsyncIO, data pipelines, ML workflows, and rapid API development.",
    connections: ["fastapi", "pytorch", "polars", "langchain-langgraph"],
    level: 99
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "BACKEND",
    proficiency: "CORE_PILLAR",
    description: "High-speed asynchronous Python REST APIs with strict Pydantic validation.",
    connections: ["python", "postgresql", "redis", "docker"],
    level: 98
  },
  {
    id: "nodejs-typescript",
    name: "Node.js & TypeScript",
    category: "BACKEND",
    proficiency: "CORE_PILLAR",
    description: "Type-safe asynchronous backend runtimes and event-driven automation.",
    connections: ["nextjs", "postgresql", "redis"],
    level: 98
  },
  {
    id: "grpc",
    name: "gRPC & Protocol Buffers",
    category: "BACKEND",
    proficiency: "ADVANCED",
    description: "High-performance binary inter-microservice communication over HTTP/2.",
    connections: ["go-golang", "rust-lang", "kubernetes"],
    level: 94
  },
  {
    id: "websockets",
    name: "WebSockets & WebRTC",
    category: "BACKEND",
    proficiency: "ADVANCED",
    description: "Sub-50ms bidirectional streaming channels for real-time telemetry and voice.",
    connections: ["nodejs-typescript", "go-golang", "nextjs"],
    level: 93
  },
  {
    id: "mqtt",
    name: "MQTT Telemetry",
    category: "BACKEND",
    proficiency: "ADVANCED",
    description: "Lightweight pub/sub protocol for IoT, automotive, and industrial sensor feeds.",
    connections: ["go-golang", "kafka", "influxdb"],
    level: 90
  },

  // FRONTEND & UI
  {
    id: "nextjs",
    name: "Next.js 15+ App Router",
    category: "FRONTEND",
    proficiency: "CORE_PILLAR",
    description: "React Server Components, edge rendering, streaming, and server actions.",
    connections: ["react-19", "tailwind-css", "typescript", "nodejs-typescript"],
    level: 99
  },
  {
    id: "react-19",
    name: "React 19",
    category: "FRONTEND",
    proficiency: "CORE_PILLAR",
    description: "Component architecture, concurrent rendering, and reactive state systems.",
    connections: ["nextjs", "typescript", "threejs"],
    level: 99
  },
  {
    id: "typescript",
    name: "TypeScript Strict",
    category: "FRONTEND",
    proficiency: "CORE_PILLAR",
    description: "End-to-end typed contracts, generic constraints, and zero runtime errors.",
    connections: ["nextjs", "react-19", "nodejs-typescript"],
    level: 99
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    category: "FRONTEND",
    proficiency: "CORE_PILLAR",
    description: "Utility-first design tokens, responsive breakpoints, and dark mode theming.",
    connections: ["nextjs", "react-19"],
    level: 98
  },
  {
    id: "threejs",
    name: "Three.js & WebGL",
    category: "FRONTEND",
    proficiency: "ADVANCED",
    description: "Hardware-accelerated 3D scenes, particle physics, and shader atmospheres.",
    connections: ["react-19", "nextjs"],
    level: 92
  },

  // CLOUD & DISTRIBUTED
  {
    id: "aws",
    name: "Amazon Web Services (AWS)",
    category: "CLOUD",
    proficiency: "CORE_PILLAR",
    description: "EKS, Lambda, S3, Aurora, CloudFront, DynamoDB, and CDK infrastructure.",
    connections: ["docker", "kubernetes", "terraform", "postgresql"],
    level: 98
  },
  {
    id: "gcp",
    name: "Google Cloud Platform (GCP)",
    category: "CLOUD",
    proficiency: "CORE_PILLAR",
    description: "GKE Autopilot, BigQuery, Vertex AI, Cloud Run, and global VPC networks.",
    connections: ["kubernetes", "bigquery", "terraform"],
    level: 96
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: "CLOUD",
    proficiency: "ADVANCED",
    description: "AKS, Azure OpenAI, Cosmos DB, and Entra ID enterprise governance.",
    connections: ["kubernetes", "terraform"],
    level: 92
  },
  {
    id: "kubernetes",
    name: "Kubernetes (K8s)",
    category: "CLOUD",
    proficiency: "CORE_PILLAR",
    description: "Container orchestration, rolling zero-downtime updates, and auto-scaling.",
    connections: ["docker", "terraform", "go-golang", "aws", "gcp"],
    level: 97
  },
  {
    id: "docker",
    name: "Docker & Containerd",
    category: "CLOUD",
    proficiency: "CORE_PILLAR",
    description: "Multi-stage reproducible builds, distroless images, and local dev environments.",
    connections: ["kubernetes", "go-golang", "python", "nextjs"],
    level: 99
  },

  // DATABASES & STORAGE
  {
    id: "postgresql",
    name: "PostgreSQL 16+",
    category: "DATABASE",
    proficiency: "CORE_PILLAR",
    description: "Relational ACID integrity, declarative partitioning, JSONB, and PostGIS.",
    connections: ["postgresql-pgvector", "redis", "go-golang", "fastapi"],
    level: 99
  },
  {
    id: "postgresql-pgvector",
    name: "pgvector Extension",
    category: "DATABASE",
    proficiency: "CORE_PILLAR",
    description: "High-dimensional vector embeddings stored directly inside transactional Postgres.",
    connections: ["postgresql", "qdrant", "langchain-langgraph"],
    level: 96
  },
  {
    id: "qdrant",
    name: "Qdrant Vector Database",
    category: "DATABASE",
    proficiency: "CORE_PILLAR",
    description: "Sub-millisecond semantic search engine with payload filtering and HNSW indexes.",
    connections: ["postgresql-pgvector", "langchain-langgraph", "fastapi"],
    level: 96
  },
  {
    id: "redis",
    name: "Redis Cluster",
    category: "DATABASE",
    proficiency: "CORE_PILLAR",
    description: "In-memory caching, distributed locks, rate limiters, and session storage.",
    connections: ["postgresql", "fastapi", "nodejs-typescript", "go-golang"],
    level: 98
  },
  {
    id: "clickhouse",
    name: "ClickHouse",
    category: "DATABASE",
    proficiency: "ADVANCED",
    description: "Ultra-fast columnar analytics for real-time telemetry, logs, and billing meters.",
    connections: ["kafka", "postgresql", "grafana"],
    level: 94
  },

  // DEVOPS & OBSERVABILITY
  {
    id: "terraform",
    name: "Terraform / OpenTofu",
    category: "DEVOPS",
    proficiency: "CORE_PILLAR",
    description: "Declarative Infrastructure as Code across multi-cloud and bare-metal providers.",
    connections: ["aws", "gcp", "kubernetes"],
    level: 98
  },
  {
    id: "github-actions",
    name: "GitHub Actions CI/CD",
    category: "DEVOPS",
    proficiency: "CORE_PILLAR",
    description: "Parallel test matrices, Docker build caching, and automated release gates.",
    connections: ["docker", "kubernetes", "terraform"],
    level: 98
  },
  {
    id: "prometheus-grafana",
    name: "Prometheus & Grafana",
    category: "DEVOPS",
    proficiency: "CORE_PILLAR",
    description: "Multi-burn-rate SLO alerting, metric visualization, and cluster telemetry.",
    connections: ["kubernetes", "docker", "go-golang"],
    level: 96
  },
  {
    id: "opentelemetry",
    name: "OpenTelemetry (OTel)",
    category: "DEVOPS",
    proficiency: "ADVANCED",
    description: "Vendor-neutral distributed tracing, metric instrumentation, and log propagation.",
    connections: ["prometheus-grafana", "go-golang", "fastapi"],
    level: 94
  },

  // DATA ENGINEERING
  {
    id: "kafka",
    name: "Apache Kafka",
    category: "DATA",
    proficiency: "CORE_PILLAR",
    description: "Distributed durable event streaming backbone processing 100k+ events/sec.",
    connections: ["go-golang", "python", "clickhouse", "docker"],
    level: 97
  },
  {
    id: "dbt",
    name: "dbt (data build tool)",
    category: "DATA",
    proficiency: "CORE_PILLAR",
    description: "Vectorized in-warehouse ELT SQL transformations, lineage graphs, and tests.",
    connections: ["bigquery", "snowflake", "postgresql"],
    level: 96
  },
  {
    id: "bigquery",
    name: "Google BigQuery",
    category: "DATA",
    proficiency: "CORE_PILLAR",
    description: "Serverless petabyte analytical warehouse with BI Engine in-memory acceleration.",
    connections: ["dbt", "gcp", "python"],
    level: 97
  },
  {
    id: "polars",
    name: "Polars Dataframes",
    category: "DATA",
    proficiency: "ADVANCED",
    description: "Blazingly fast multi-threaded Rust dataframe library for high-speed local ETL.",
    connections: ["python", "rust-lang", "pytorch"],
    level: 95
  },

  // SECURITY
  {
    id: "hashicorp-vault",
    name: "HashiCorp Vault",
    category: "SECURITY",
    proficiency: "CORE_PILLAR",
    description: "Dynamic secrets management, database credential rotation, and transit encryption.",
    connections: ["kubernetes", "terraform", "aws"],
    level: 95
  },
  {
    id: "zerotrust-mtls",
    name: "Zero-Trust mTLS & Istio",
    category: "SECURITY",
    proficiency: "ADVANCED",
    description: "Cryptographic service-to-service authentication and microsegmentation.",
    connections: ["kubernetes", "go-golang"],
    level: 93
  },

  // MOBILE
  {
    id: "react-native-expo",
    name: "React Native & Expo",
    category: "MOBILE",
    proficiency: "CORE_PILLAR",
    description: "Cross-platform iOS and Android applications sharing TypeScript business logic.",
    connections: ["react-19", "typescript"],
    level: 95
  },
  {
    id: "flutter",
    name: "Google Flutter & Dart",
    category: "MOBILE",
    proficiency: "ADVANCED",
    description: "Native-compiled 120fps mobile experiences with custom Skia/Impeller shaders.",
    connections: ["go-golang", "firebase"],
    level: 92
  }
];
