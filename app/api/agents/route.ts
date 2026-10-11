import { NextResponse } from "next/server";
import { AGENT_REGISTRY } from "@/data/agents";

export async function GET() {
  return NextResponse.json({
    count: AGENT_REGISTRY.length,
    agents: AGENT_REGISTRY.map((agent) => ({
      id: agent.id,
      code: agent.code,
      name: agent.name,
      role: agent.role,
      category: agent.category,
      status: agent.status,
      latencyAvg: agent.latencyAvg,
      tagline: agent.tagline,
      tools: agent.tools,
      runEndpoint: `/api/agents/${agent.id}/run`,
      streamEndpoint: `/api/agents/${agent.id}/stream`,
      uiPath: `/agents/${agent.id}`,
    })),
  });
}
