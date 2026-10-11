import { NextRequest } from "next/server";
import { AgentEngine, AgentExecutionLog } from "@/lib/agentEngine";
import { AGENT_REGISTRY } from "@/data/agents";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const agent = AGENT_REGISTRY.find((a) => a.id === slug);

  if (!agent) {
    return new Response(JSON.stringify({ error: `Agent '${slug}' not found` }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = await req.json().catch(() => ({}));
  const prompt = body.prompt || agent.defaultPrompt;
  const mode = body.mode === "SANDBOX" ? "SANDBOX" : "LIVE";

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const sendEvent = (event: string, data: any) => {
          controller.enqueue(
            encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
          );
        };

        const result = await AgentEngine.executeAgent(
          slug,
          prompt,
          mode,
          { fileContent: body.fileContent, dataPayload: body.dataPayload },
          (log: AgentExecutionLog) => {
            sendEvent("log", log);
          }
        );

        sendEvent("complete", result);
        controller.close();
      } catch (err: any) {
        controller.enqueue(
          encoder.encode(`event: error\ndata: ${JSON.stringify({ message: err?.message })}\n\n`)
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
