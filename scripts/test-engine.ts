import { AgentEngine } from "../lib/agentEngine";
import { AGENT_REGISTRY } from "../data/agents";

async function runTests() {
  console.log("=== AURION CONCLAVE TEST SUITE ===");

  // Test 1: Verify all 12 agents in registry
  console.log(`[Test 1] Agent Registry verification: Found ${AGENT_REGISTRY.length} agents`);
  if (AGENT_REGISTRY.length !== 12) {
    throw new Error(`Expected 12 agents, got ${AGENT_REGISTRY.length}`);
  }

  // Test 2: Deterministic Data Analyst math calculation
  console.log("[Test 2] Testing real statistical calculation tool...");
  const sampleCsv = `timestamp,latency_ms,request_count,error_rate
2026-10-11T00:00:00Z,42,1200,0.01
2026-10-11T01:00:00Z,48,1450,0.02
2026-10-11T02:00:00Z,185,2100,0.08
2026-10-11T03:00:00Z,44,1300,0.01
2026-10-11T04:00:00Z,43,1250,0.01`;

  const statsResult = AgentEngine.executeDataAnalysisTool(sampleCsv);
  if (!statsResult.columnStatistics || !statsResult.columnStatistics.latency_ms) {
    throw new Error("Failed data analysis calculation");
  }
  const latencyStat = statsResult.columnStatistics.latency_ms;
  console.log("-> Statistical Calculation passed: latency_ms mean =", latencyStat.mean, "median =", latencyStat.median, "stdDev =", latencyStat.stdDev);

  // Test 3: Real Security Scanner rule detection
  console.log("[Test 3] Testing deterministic security audit tool...");
  const sampleInsecureCode = `
    const apiKey = "AKIAIOSFODNN7EXAMPLEKEY123_secret_token";
    const query = "SELECT * FROM users WHERE id = " + req.query.id;
    element.innerHTML = "<p>" + userInput + "</p>";
    eval(untrustedScript);
  `;
  const secResult = AgentEngine.executeSecurityScanTool(sampleInsecureCode);
  if (secResult.findingsCount === 0) {
    throw new Error("Failed to detect security findings");
  }
  console.log(`-> Security scan passed: detected ${secResult.findingsCount} vulnerabilities (${secResult.findings.map(f => f.type).join(", ")})`);

  // Test 4: End-to-end agent execution for Receptionist & Data Analyst
  console.log("[Test 4] Running end-to-end AgentEngine execution for Receptionist...");
  const recRes = await AgentEngine.executeAgent("aurion-receptionist", "Inquire about autonomous AI swarms for logistics");
  if (!recRes.output || recRes.logs.length === 0) {
    throw new Error("Receptionist execution failed");
  }
  console.log(`-> Receptionist finished in ${recRes.totalLatencyMs}ms with ${recRes.logs.length} stages (Provider: ${recRes.provider})`);

  console.log("[Test 5] Running end-to-end AgentEngine execution for Data Analyst with CSV payload...");
  const dataRes = await AgentEngine.executeAgent("data-analyst", "Calculate latency metrics", "LIVE", { fileContent: sampleCsv });
  if (!dataRes.output.metrics || !dataRes.output.artifacts) {
    throw new Error("Data Analyst failed to attach metrics or artifacts");
  }
  console.log(`-> Data Analyst finished in ${dataRes.totalLatencyMs}ms with ${Object.keys(dataRes.output.metrics).length} metrics computed`);

  console.log("=== ALL AGENT ENGINE TESTS PASSED (5/5) ===");
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
