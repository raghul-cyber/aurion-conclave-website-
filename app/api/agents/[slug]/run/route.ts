import { NextRequest, NextResponse } from "next/server";
import { AgentEngine } from "@/lib/agentEngine";
import { AGENT_REGISTRY } from "@/data/agents";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const agent = AGENT_REGISTRY.find((a) => a.id === slug);

    if (!agent) {
      return NextResponse.json(
        { error: `Agent with slug '${slug}' was not found in registry.` },
        { status: 404 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const prompt = body.prompt || agent.defaultPrompt;
    const mode = body.mode === "SANDBOX" ? "SANDBOX" : "LIVE";
    const options = {
      fileContent: body.fileContent,
      dataPayload: body.dataPayload,
    };

    const result = await AgentEngine.executeAgent(slug, prompt, mode, options);

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal execution failure", message: err?.message || String(err) },
      { status: 500 }
    );
  }
}
