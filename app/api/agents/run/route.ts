import { NextRequest, NextResponse } from "next/server";
import { AgentEngine } from "@/lib/agentEngine";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { agentId, prompt, mode, apiKeys } = body;

    if (!agentId || !prompt) {
      return NextResponse.json(
        { error: "agentId and prompt are required fields." },
        { status: 400 }
      );
    }

    const result = await AgentEngine.executeAgent(
      agentId,
      prompt,
      mode === "LIVE" ? "LIVE" : "DEMO",
      apiKeys
    );

    return NextResponse.json(result);
  } catch (err: any) {
    console.error("Agent execution error:", err);
    return NextResponse.json(
      {
        error: "Agent runtime execution failed.",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}
