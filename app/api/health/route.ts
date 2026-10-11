import { NextResponse } from "next/server";
import { AGENT_REGISTRY } from "@/data/agents";

export async function GET() {
  const anthropicKey = Boolean(process.env.ANTHROPIC_API_KEY);
  const openaiKey = Boolean(process.env.OPENAI_API_KEY);
  const geminiKey = Boolean(process.env.GEMINI_API_KEY);

  return NextResponse.json({
    status: "healthy",
    uptimeSeconds: process.uptime ? Math.floor(process.uptime()) : 0,
    timestamp: new Date().toISOString(),
    system: "Aurion Conclave Enterprise Systems Engine",
    version: "2.4.0",
    agentsCount: AGENT_REGISTRY.length,
    activeAgents: AGENT_REGISTRY.map((a) => a.id),
    providers: {
      anthropic: anthropicKey,
      openai: openaiKey,
      gemini: geminiKey,
      localDeterministicTools: true,
    },
  });
}
