export interface AgentDefinition {
  id: string;
  code: string;
  name: string;
  role: string;
  category: string;
  status: "ONLINE" | "BUSY" | "STANDBY";
  latencyAvg: string;
  tagline: string;
  description: string;
  capabilities: string[];
  tools: string[];
  defaultPrompt: string;
  samplePrompts: string[];
  systemPrompt: string;
  mockKnowledgeBase?: Record<string, string>;
  executeStepPlan: {
    stage: string;
    description: string;
    tool: string;
    durationMs: number;
  }[];
}

export const AGENT_REGISTRY: AgentDefinition[] = [
  {
    id: "aurion-receptionist",
    code: "01",
    name: "Aurion Receptionist",
    role: "Autonomous Front-Desk & Routing Concierge",
    category: "Conversational & Scheduling",
    status: "ONLINE",
    latencyAvg: "240ms",
    tagline: "Intelligent visitor greeting, institutional directory triage, and executive routing.",
    description: "Operates 24/7 as the digital front door of Aurion Conclave. Classifies visitor intent, answers company inquiries, checks project intake status, and coordinates schedule slots directly with engineering leads.",
    capabilities: [
      "Natural language intent parsing",
      "Executive availability matching",
      "Visitor registration & badging",
      "Priority triage & escalation"
    ],
    tools: ["directoryLookup()", "calendarAvailability()", "intakeTriage()", "sessionMemory()"],
    defaultPrompt: "Hello, I am interested in building a high-throughput AI agent swarm for our logistics operations. Who can I speak with?",
    samplePrompts: [
      "Hello, I am interested in building a high-throughput AI agent swarm for our logistics operations. Who can I speak with?",
      "Can you check the current intake capacity for custom cloud migration projects?",
      "I need to book a 30-minute discovery session with the Principal Systems Architect."
    ],
    systemPrompt: "You are the Aurion Conclave Autonomous Reception Concierge. You represent the company with utmost executive precision, technical intelligence, and clarity.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Parsing natural language intent and entity tokens", tool: "intentClassifier", durationMs: 250 },
      { stage: "PLANNER", description: "Determining appropriate routing authority: Systems Architecture Pod", tool: "directoryLookup", durationMs: 350 },
      { stage: "RETRIEVAL", description: "Verifying calendar slot availability for Principal Engineers", tool: "calendarAvailability", durationMs: 300 },
      { stage: "EXECUTION", description: "Preparing engagement brief and priority escalation ticket", tool: "intakeTriage", durationMs: 280 },
      { stage: "VALIDATION", description: "Verifying compliance with executive SLA and contact policies", tool: "policyGuardrail", durationMs: 200 },
      { stage: "OUTPUT_READY", description: "Synthesizing conversational response and booking bridge", tool: "responseFormatter", durationMs: 150 }
    ]
  },
  {
    id: "research-agent",
    code: "02",
    name: "Research Agent",
    role: "Autonomous Deep Investigatory & Intelligence Engine",
    category: "Information Synthesis",
    status: "ONLINE",
    latencyAvg: "480ms",
    tagline: "Scouring multi-source corpora, cross-examining citations, and compiling verified briefs.",
    description: "Deep research analyst that ingests research queries, decomposes them into search vectors across scientific literature, market reports, and regulatory filings, and outputs structured, cited briefs.",
    capabilities: [
      "Multi-query vector expansion",
      "Citation graph cross-examination",
      "Contradiction detection",
      "Executive synthesis formatting"
    ],
    tools: ["webCorpusSearch()", "citationResolver()", "academicExtractor()", "synthesisMatrix()"],
    defaultPrompt: "Analyze the state of multi-agent consensus protocols versus centralized planner architectures in 2026 enterprise deployments.",
    samplePrompts: [
      "Analyze the state of multi-agent consensus protocols versus centralized planner architectures in 2026 enterprise deployments.",
      "Compare sub-millisecond vector indexing benchmarks: HNSW vs DiskANN under 100M 1536-dim vectors.",
      "Synthesize regulatory compliance requirements for sovereign EU cloud deployments under NIS2 and GDPR."
    ],
    systemPrompt: "You are the Aurion Research Engine. Deliver exhaustive, peer-reviewed caliber technological synthesis with strict source attribution.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Extracting research dimensions, technical hypothesis, and boundaries", tool: "queryDecomposer", durationMs: 300 },
      { stage: "PLANNER", description: "Generating multi-vector search subqueries across distributed sources", tool: "searchStrategy", durationMs: 400 },
      { stage: "RETRIEVAL", description: "Retrieving 42 academic papers and 18 production architectural benchmarks", tool: "webCorpusSearch", durationMs: 650 },
      { stage: "EXECUTION", description: "Synthesizing trade-offs, throughput metrics, and consensus bounds", tool: "synthesisMatrix", durationMs: 500 },
      { stage: "VALIDATION", description: "Cross-checking citations against primary arXiv and IEEE references", tool: "citationResolver", durationMs: 350 },
      { stage: "OUTPUT_READY", description: "Compiling executive technical research brief in Markdown", tool: "reportCompiler", durationMs: 200 }
    ]
  },
  {
    id: "document-analyst",
    code: "03",
    name: "Document Analyst",
    role: "Multimodal Structured Data & Contract Parser",
    category: "Document Intelligence",
    status: "ONLINE",
    latencyAvg: "380ms",
    tagline: "Extracting structured schemas, financial ledgers, and liability clauses from messy documents.",
    description: "Specialized in non-standard tabular parsing, cross-page financial reconciliation, indemnification clause extraction, and regulatory filing audits.",
    capabilities: [
      "Coordinate-accurate table reconstruction",
      "Cross-page arithmetic verification",
      "Legal risk & liability scoring",
      "JSON schema normalization"
    ],
    tools: ["suryaOcrParser()", "tableMatrixExtractor()", "clauseRiskAuditor()", "schemaValidator()"],
    defaultPrompt: "Audit this Master Services Agreement excerpt: Identify uncapped liability clauses, SLA penalties, and intellectual property assignment risks.",
    samplePrompts: [
      "Audit this Master Services Agreement excerpt: Identify uncapped liability clauses, SLA penalties, and intellectual property assignment risks.",
      "Extract line-item balance sheet metrics and reconcile EBITDA calculations from this 10-Q filing.",
      "Parse multi-column equipment specifications from a scanned engineering PDF into typed JSON."
    ],
    systemPrompt: "You are the Aurion Document Intelligence System. You review documents with forensic audit precision and mathematical exactness.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Rasterizing document pages and constructing layout geometry tree", tool: "suryaOcrParser", durationMs: 350 },
      { stage: "PLANNER", description: "Identifying contractual sections: IP, Indemnity, Warranty, Termination", tool: "layoutSegmenter", durationMs: 280 },
      { stage: "RETRIEVAL", description: "Extracting key terms, liability caps, and jurisdiction clauses", tool: "clauseRiskAuditor", durationMs: 420 },
      { stage: "EXECUTION", description: "Evaluating deviation from enterprise standard safety baselines", tool: "riskScorer", durationMs: 310 },
      { stage: "VALIDATION", description: "Verifying coordinate bounding boxes and clause integrity", tool: "schemaValidator", durationMs: 220 },
      { stage: "OUTPUT_READY", description: "Emitting structured audit table with highlighted risks", tool: "documentFormatter", durationMs: 180 }
    ]
  },
  {
    id: "code-assistant",
    code: "04",
    name: "Code Assistant",
    role: "Autonomous Software Refactoring & Verification Agent",
    category: "Software Engineering",
    status: "ONLINE",
    latencyAvg: "310ms",
    tagline: "Static AST analysis, test generation, security patching, and algorithm optimization.",
    description: "An autonomous developer agent that understands AST structures, detects algorithmic bottlenecks, generates high-coverage unit tests, and writes idiomatic Rust, Go, TypeScript, and Python.",
    capabilities: [
      "Abstract Syntax Tree (AST) profiling",
      "Deterministic unit & fuzz test synthesis",
      "Concurrency race condition prevention",
      "Memory leak & allocation minimization"
    ],
    tools: ["astParser()", "testHarnessGenerator()", "memoryProfiler()", "typeChecker()"],
    defaultPrompt: "Review this high-throughput concurrent worker pool in Go. Identify potential goroutine leaks and rewrite using sync.Pool with graceful context cancellation.",
    samplePrompts: [
      "Review this high-throughput concurrent worker pool in Go. Identify potential goroutine leaks and rewrite using sync.Pool with graceful context cancellation.",
      "Convert this synchronous Python ETL script into an async streaming pipeline using asyncio and aiohttp.",
      "Generate a comprehensive property-based test suite using fast-check for a distributed rate-limiter in TypeScript."
    ],
    systemPrompt: "You are the Aurion Core Engineering Code Assistant. Write production-grade, memory-safe, clean code with zero placeholders.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Parsing source code into Abstract Syntax Tree (AST)", tool: "astParser", durationMs: 220 },
      { stage: "PLANNER", description: "Analyzing memory lifecycle, channel locks, and goroutine exits", tool: "concurrencyChecker", durationMs: 320 },
      { stage: "RETRIEVAL", description: "Matching against Go runtime idioms and zero-allocation memory pools", tool: "patternMatcher", durationMs: 260 },
      { stage: "EXECUTION", description: "Refactoring code with sync.Pool and context.Done() select loop", tool: "codeSynthesizer", durationMs: 400 },
      { stage: "VALIDATION", description: "Verifying compilation without race flags and type correctness", tool: "typeChecker", durationMs: 240 },
      { stage: "OUTPUT_READY", description: "Emitting commented production code and performance benchmarks", tool: "diffFormatter", durationMs: 150 }
    ]
  },
  {
    id: "data-analyst",
    code: "05",
    name: "Data Analyst",
    role: "Text-to-SQL Compiler & Visual Insights Synthesizer",
    category: "Data & Analytics",
    status: "ONLINE",
    latencyAvg: "350ms",
    tagline: "Translating natural language questions into optimized SQL queries and instant charts.",
    description: "Connects to relational and analytical databases. Understands complex schemas, writes performant SQL with window functions and CTEs, executes sandboxed calculations, and plots visual trends.",
    capabilities: [
      "Dialect-aware SQL compilation (Postgres, BigQuery, Snowflake)",
      "Window functions & CTE decomposition",
      "Statistical hypothesis verification",
      "Automated visual chart generation"
    ],
    tools: ["schemaCatalog()", "sqlOptimizer()", "duckDbSandbox()", "chartRenderer()"],
    defaultPrompt: "What is our customer cohort retention rate month-over-month for enterprise tier accounts over the past 4 quarters?",
    samplePrompts: [
      "What is our customer cohort retention rate month-over-month for enterprise tier accounts over the past 4 quarters?",
      "Identify the top 5 cost-driver queries across our BigQuery warehouse and suggest clustering indexes.",
      "Calculate 95th percentile API response latency grouped by geographical region and detect anomalies."
    ],
    systemPrompt: "You are the Aurion Data Analyst. Provide mathematically sound SQL queries, statistical validation, and executive insights.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Mapping natural business terms to database entities and dimensions", tool: "schemaCatalog", durationMs: 250 },
      { stage: "PLANNER", description: "Formulating cohort retention logic with recursive monthly CTEs", tool: "queryPlanner", durationMs: 340 },
      { stage: "RETRIEVAL", description: "Simulating execution plan against in-memory DuckDB analytical engine", tool: "duckDbSandbox", durationMs: 420 },
      { stage: "EXECUTION", description: "Computing retention decay curve and monthly renewal rates", tool: "statsEngine", durationMs: 310 },
      { stage: "VALIDATION", description: "Verifying zero partition scans and checking index suitability", tool: "sqlOptimizer", durationMs: 210 },
      { stage: "OUTPUT_READY", description: "Generating SQL query, data matrix, and interactive chart preview", tool: "chartRenderer", durationMs: 190 }
    ]
  },
  {
    id: "sales-assistant",
    code: "06",
    name: "Sales Assistant",
    role: "Autonomous Technical Lead Qualification & Deal Architecture",
    category: "Growth & Engagement",
    status: "ONLINE",
    latencyAvg: "260ms",
    tagline: "Qualifying inbound enterprise inquiries and proposing tailored delivery architectures.",
    description: "Evaluates prospective client requirements, determines technical feasibility, calculates estimated scope envelopes, and prepares structured technical proposals for executive sign-off.",
    capabilities: [
      "Technical ICP lead qualification",
      "Scope & budget envelope calculation",
      "Enterprise software requirement mapping",
      "Automated proposal drafting"
    ],
    tools: ["icpScoringEngine()", "rateCalculator()", "proposalSynthesizer()", "crmConnector()"],
    defaultPrompt: "We are a Series B healthtech company needing a HIPAA-compliant medical imaging agent platform within 3 months. Can Aurion deliver this?",
    samplePrompts: [
      "We are a Series B healthtech company needing a HIPAA-compliant medical imaging agent platform within 3 months. Can Aurion deliver this?",
      "Provide an indicative timeline and pod composition for migrating a legacy monolith to AWS EKS microservices.",
      "Qualify an enterprise inquiry with $250k budget looking for a custom predictive maintenance ML pipeline."
    ],
    systemPrompt: "You are the Aurion Technical Deal Architect. Respond with commercial pragmatism, engineering realism, and precise architectural scoping.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Evaluating organizational profile, regulatory constraints, and timeline", tool: "icpScoringEngine", durationMs: 220 },
      { stage: "PLANNER", description: "Designing delivery pod: 1 Principal Architect, 2 ML Engineers, 1 DevOps Lead", tool: "resourcingPlanner", durationMs: 310 },
      { stage: "RETRIEVAL", description: "Matching HIPAA-compliant architectural templates from past deployments", tool: "templateLibrary", durationMs: 280 },
      { stage: "EXECUTION", description: "Calculating sprint duration: 10-week MVP delivery roadmap", tool: "rateCalculator", durationMs: 290 },
      { stage: "VALIDATION", description: "Verifying regulatory compliance safeguards and feasibility SLA", tool: "complianceGate", durationMs: 190 },
      { stage: "OUTPUT_READY", description: "Emitting executive engagement proposal and next discovery steps", tool: "proposalSynthesizer", durationMs: 160 }
    ]
  },
  {
    id: "customer-support-agent",
    code: "07",
    name: "Customer Support Agent",
    role: "Autonomous L2/L3 Technical Support & Incident Resolver",
    category: "Operational Support",
    status: "ONLINE",
    latencyAvg: "210ms",
    tagline: "Resolving technical platform tickets, verifying telemetry, and executing remediation.",
    description: "Takes support tickets beyond canned answers. Inspects client system telemetry, cross-references deployment logs, identifies root causes, and issues remediation scripts.",
    capabilities: [
      "Real-time telemetry diagnostic triage",
      "API error code decomposition",
      "Account permission audit",
      "Automated hotfix script generation"
    ],
    tools: ["telemetryInspector()", "kbSearch()", "patchGenerator()", "escalationQueue()"],
    defaultPrompt: "Our webhook endpoint returned HTTP 504 Gateway Timeout during peak traffic. How do we resolve this immediately?",
    samplePrompts: [
      "Our webhook endpoint returned HTTP 504 Gateway Timeout during peak traffic. How do we resolve this immediately?",
      "User authentication is failing for corporate SSO users after certificate renewal.",
      "Our PostgreSQL replica is lagging 45 minutes behind primary node. What steps do we take?"
    ],
    systemPrompt: "You are the Aurion L3 Technical Incident Resolver. Provide immediate, actionable triage, precise diagnostics, and mitigation commands.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Deconstructing error payload: HTTP 504 Gateway Timeout on webhook dispatcher", tool: "errorDecoder", durationMs: 190 },
      { stage: "PLANNER", description: "Formulating root-cause hypothesis: downstream synchronous queue saturation", tool: "diagnosticTree", durationMs: 280 },
      { stage: "RETRIEVAL", description: "Querying infrastructure runbooks for buffer queue decoupling", tool: "kbSearch", durationMs: 240 },
      { stage: "EXECUTION", description: "Synthesizing asynchronous buffering configuration with Redis/BullMQ", tool: "patchGenerator", durationMs: 310 },
      { stage: "VALIDATION", description: "Checking backpressure limits and failover safety", tool: "safetyVerifier", durationMs: 180 },
      { stage: "OUTPUT_READY", description: "Generating step-by-step recovery plan with executable CLI commands", tool: "remediationOutput", durationMs: 140 }
    ]
  },
  {
    id: "meeting-assistant",
    code: "08",
    name: "Meeting Assistant",
    role: "Autonomous Executive Debrief & Action Item Extractor",
    category: "Productivity & Governance",
    status: "ONLINE",
    latencyAvg: "290ms",
    tagline: "Distilling multi-hour technical architecture calls into crisp decisions and Jira tickets.",
    description: "Ingests raw meeting transcripts and video recordings, attributes speaker viewpoints, isolates consensus decisions from open debates, and generates assigned action items with deadlines.",
    capabilities: [
      "Speaker stance & consensus tracking",
      "Architectural decision record (ADR) synthesis",
      "Assigned Jira ticket formatting",
      "Deadlock & risk identification"
    ],
    tools: ["transcriptParser()", "speakerAttributor()", "adrGenerator()", "jiraTicketMapper()"],
    defaultPrompt: "Summarize this 45-minute sprint planning transcript. Extract key architectural decisions made, unresolved debate points, and assigned action items.",
    samplePrompts: [
      "Summarize this 45-minute sprint planning transcript. Extract key architectural decisions made, unresolved debate points, and assigned action items.",
      "Extract Architecture Decision Records (ADRs) from our distributed cache evaluation call.",
      "Synthesize client feedback from yesterday's product demo into 3 prioritized feature stories."
    ],
    systemPrompt: "You are the Aurion Executive Meeting Assistant. Synthesize complex technical debates into decisive records with absolute clarity.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Ingesting transcript tokens and aligning timestamps", tool: "transcriptParser", durationMs: 240 },
      { stage: "PLANNER", description: "Isolating key agenda nodes: Database migration vs Sharding, Redis latency, Budget", tool: "topicSegmenter", durationMs: 300 },
      { stage: "RETRIEVAL", description: "Attributing viewpoints to Engineering Lead, DevOps Architect, and PM", tool: "speakerAttributor", durationMs: 290 },
      { stage: "EXECUTION", description: "Formulating formal Architecture Decision Record (ADR #042)", tool: "adrGenerator", durationMs: 330 },
      { stage: "VALIDATION", description: "Checking action items for owner, deadline, and clear acceptance criteria", tool: "criteriaValidator", durationMs: 190 },
      { stage: "OUTPUT_READY", description: "Emitting executive summary, ADR markdown, and Jira ticket export", tool: "jiraTicketMapper", durationMs: 150 }
    ]
  },
  {
    id: "knowledge-agent",
    code: "09",
    name: "Knowledge Agent",
    role: "Organizational Graph & Documentation Navigator",
    category: "Enterprise Knowledge",
    status: "ONLINE",
    latencyAvg: "320ms",
    tagline: "Unified organizational intelligence across Notion, GitHub, Slack, and Google Drive.",
    description: "Indexes enterprise documentation, code repositories, design specs, and historical Slack conversations to answer institutional questions with exact citations.",
    capabilities: [
      "Hybrid dense-sparse enterprise vector search",
      "Exact source document citation",
      "Permission-aware access filtration",
      "Temporal knowledge freshness scoring"
    ],
    tools: ["hybridVectorSearch()", "graphIndexQuery()", "reranker()", "citationValidator()"],
    defaultPrompt: "What is our company's standard incident response procedure for high-severity database outages?",
    samplePrompts: [
      "What is our company's standard incident response procedure for high-severity database outages?",
      "Where in our microservices is the Stripe billing webhook signature verified?",
      "What were the key takeaways from the Q3 infrastructure cost audit?"
    ],
    systemPrompt: "You are the Aurion Enterprise Knowledge Engine. Answer questions grounded strictly in institutional records with verified document links.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Expanding query across security protocols, database runbooks, and P1 escalation", tool: "queryExpander", durationMs: 210 },
      { stage: "PLANNER", description: "Initiating hybrid vector search across Confluence, GitHub runbooks, and Slack", tool: "hybridVectorSearch", durationMs: 360 },
      { stage: "RETRIEVAL", description: "Retrieving 12 matching document chunks with dense cosine similarity >0.88", tool: "documentRetriever", durationMs: 410 },
      { stage: "EXECUTION", description: "Synthesizing step-by-step incident response playbook", tool: "knowledgeSynthesizer", durationMs: 310 },
      { stage: "VALIDATION", description: "Verifying document freshness and ensuring runbook is current (2026)", tool: "citationValidator", durationMs: 200 },
      { stage: "OUTPUT_READY", description: "Delivering cited procedure with exact documentation references", tool: "outputCompiler", durationMs: 160 }
    ]
  },
  {
    id: "security-analyst",
    code: "10",
    name: "Security Analyst",
    role: "Autonomous Vulnerability Auditor & Attack Surface Scanner",
    category: "Cybersecurity",
    status: "ONLINE",
    latencyAvg: "390ms",
    tagline: "Probing API attack surfaces, auditing secrets, and verifying cryptographic posture.",
    description: "Autonomous ethical red-team agent that inspects endpoints for OWASP vulnerabilities, audits cloud infrastructure for open buckets, checks dependencies for zero-days, and drafts remediation PRs.",
    capabilities: [
      "API fuzzing & injection vector analysis",
      "Secrets leak detection in source trees",
      "CSP & TLS cipher suite evaluation",
      "Automated remediation patch generation"
    ],
    tools: ["attackSurfaceScanner()", "secretAudit()", "cveMatcher()", "patchSynthesizer()"],
    defaultPrompt: "Audit this GraphQL endpoint implementation for authorization bypass and query depth exhaustion vulnerabilities.",
    samplePrompts: [
      "Audit this GraphQL endpoint implementation for authorization bypass and query depth exhaustion vulnerabilities.",
      "Check our AWS IAM policy JSON for dangerous wildcard permissions and privilege escalation paths.",
      "Scan this Dockerfile for insecure root execution, unpinned dependencies, and secrets."
    ],
    systemPrompt: "You are the Aurion Principal Security Analyst. Detect vulnerabilities with offensive precision and provide defensive hardening.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Parsing GraphQL schema AST and query complexity configurations", tool: "schemaAnalyzer", durationMs: 260 },
      { stage: "PLANNER", description: "Evaluating cyclic relation depth and missing authorization directives", tool: "attackSurfaceScanner", durationMs: 380 },
      { stage: "RETRIEVAL", description: "Checking against OWASP API Security Top 10 (API4: Unrestricted Resource Consumption)", tool: "cveMatcher", durationMs: 310 },
      { stage: "EXECUTION", description: "Constructing proof-of-concept cyclic query payload and measuring response", tool: "payloadTester", durationMs: 450 },
      { stage: "VALIDATION", description: "Verifying remediation: depth-limiting plugin with MaxDepth = 6", tool: "patchSynthesizer", durationMs: 240 },
      { stage: "OUTPUT_READY", description: "Generating security advisory with severity CVSS 8.2 and code fix", tool: "advisoryFormatter", durationMs: 170 }
    ]
  },
  {
    id: "compliance-agent",
    code: "11",
    name: "Compliance Agent",
    role: "Continuous Regulatory & SOC2 / HIPAA Framework Auditor",
    category: "Regulatory & Governance",
    status: "ONLINE",
    latencyAvg: "340ms",
    tagline: "Continuous automated scanning for SOC2, HIPAA, GDPR, and ISO 27001 evidence.",
    description: "Evaluates production configurations against strict compliance frameworks. Identifies missing audit logs, unencrypted storage volumes, unreviewed access privileges, and generates audit-ready reports.",
    capabilities: [
      "Continuous SOC2 Trust Services Criteria mapping",
      "HIPAA PHI data flow verification",
      "GDPR Right-to-be-Forgotten pipeline audit",
      "Automated audit evidence collection"
    ],
    tools: ["controlEvaluator()", "phiFlowInspector()", "auditTrailVerifier()", "evidenceCompiler()"],
    defaultPrompt: "Audit our user data deletion workflow against GDPR Article 17 requirements across Postgres, S3, and Snowflake.",
    samplePrompts: [
      "Audit our user data deletion workflow against GDPR Article 17 requirements across Postgres, S3, and Snowflake.",
      "Evaluate our AWS production VPC configuration for SOC2 CC6.6 boundary protection.",
      "Review our patient health data logging policy for HIPAA PHI de-identification compliance."
    ],
    systemPrompt: "You are the Aurion Chief Compliance Auditor. Ensure non-negotiable adherence to statutory regulations and security standards.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Evaluating GDPR Article 17 data deletion pipeline across 3 storage tiers", tool: "gdprFrameworkParser", durationMs: 230 },
      { stage: "PLANNER", description: "Mapping data lifecycle: Primary DB, Read-Replicas, S3 Backups, Analytics Warehouse", tool: "phiFlowInspector", durationMs: 320 },
      { stage: "RETRIEVAL", description: "Inspecting hard-delete cascades, cryptographic shredding, and backup retention rules", tool: "controlEvaluator", durationMs: 380 },
      { stage: "EXECUTION", description: "Identifying compliance gap: S3 glacier archives retained without cryptographic key deletion", tool: "gapAnalyzer", durationMs: 310 },
      { stage: "VALIDATION", description: "Validating crypto-shredding key envelope revocation protocol", tool: "auditTrailVerifier", durationMs: 220 },
      { stage: "OUTPUT_READY", description: "Delivering formal Compliance Gap Audit & Remediation Directive", tool: "evidenceCompiler", durationMs: 160 }
    ]
  },
  {
    id: "voice-agent",
    code: "12",
    name: "Voice Agent",
    role: "Sub-400ms Real-Time Telephony & Speech-to-Speech Engine",
    category: "Speech & Real-Time AI",
    status: "ONLINE",
    latencyAvg: "190ms",
    tagline: "Natural conversational speech synthesis with zero-stutter interruption handling.",
    description: "Real-time speech intelligence capable of human-like cadence, dynamic pitch modulation, instant conversational barge-in handling, and background tool execution over WebRTC and SIP.",
    capabilities: [
      "Sub-400ms end-to-end speech-to-speech loop",
      "Instant conversational barge-in / interruption",
      "Telephony SIP gateway bridging",
      "Dynamic background API lookup during speech"
    ],
    tools: ["streamingStt()", "vadInterceptor()", "neuralTtsSynthesis()", "sipBridge()"],
    defaultPrompt: "Simulate a live phone intake call with a logistics fleet manager requesting automated driver dispatch software.",
    samplePrompts: [
      "Simulate a live phone intake call with a logistics fleet manager requesting automated driver dispatch software.",
      "Demonstrate real-time conversational barge-in when an executive changes meeting requirements mid-sentence.",
      "Simulate an emergency medical clinic triage call collecting patient vitals over telephony."
    ],
    systemPrompt: "You are the Aurion Real-Time Voice Intelligence Engine. Speak with executive composure, conversational warmth, and crisp technical clarity.",
    executeStepPlan: [
      { stage: "INPUT_RECEIVE", description: "Capturing streaming audio chunks and executing neural voice activity detection (VAD)", tool: "streamingStt", durationMs: 120 },
      { stage: "PLANNER", description: "Transcribing speech tokens and initiating streaming intent parsing", tool: "vadInterceptor", durationMs: 140 },
      { stage: "RETRIEVAL", description: "Querying fleet dispatch software module parameters in background", tool: "sipBridge", durationMs: 180 },
      { stage: "EXECUTION", description: "Synthesizing conversational audio stream with low-latency neural vocoder", tool: "neuralTtsSynthesis", durationMs: 220 },
      { stage: "VALIDATION", description: "Confirming audio jitter buffer latency <80ms", tool: "latencyValidator", durationMs: 110 },
      { stage: "OUTPUT_READY", description: "Streaming synchronized audio waveform and live text transcript", tool: "audioStreamEmitter", durationMs: 90 }
    ]
  }
];
