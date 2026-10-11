import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      projectType,
      stage,
      needs,
      name,
      company,
      email,
      brief,
    } = body;

    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: "Name, email, and project type are required." },
        { status: 400 }
      );
    }

    // Generate unique verification and ticket ID
    const randomHex = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
    const ticketId = `AC-ENG-2026-${randomHex}`;
    const timestamp = new Date().toISOString();

    // In production, this stores in PostgreSQL and notifies executive on-call
    return NextResponse.json({
      success: true,
      ticketId,
      timestamp,
      status: "INGESTION_ACCEPTED",
      leadArchitect: "Principal Systems Pod",
      estimatedResponse: "Within 4 hours",
      summary: {
        client: name,
        organization: company || "Independent Venture",
        domain: projectType,
        lifecycleStage: stage || "Exploration",
        requirements: needs || ["Full Delivery"],
        briefPreview: brief ? brief.slice(0, 100) + "..." : "No additional brief attached",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to process project intake.", details: err?.message },
      { status: 500 }
    );
  }
}
