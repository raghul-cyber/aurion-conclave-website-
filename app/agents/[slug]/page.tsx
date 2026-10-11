import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AGENT_REGISTRY } from "@/data/agents";
import { AgentLabConsole } from "@/components/AgentLabConsole";
import { PageBackground } from "@/components/reactbits/backgrounds/PageBackground";
import { ArrowLeft } from "lucide-react";

const SHORT_SLUG_MAP: Record<string, string> = {
  "receptionist": "aurion-receptionist",
  "research": "research-agent",
  "document": "document-analyst",
  "code": "code-assistant",
  "data": "data-analyst",
  "sales": "sales-assistant",
  "support": "customer-support-agent",
  "customer-support": "customer-support-agent",
  "meeting": "meeting-assistant",
  "knowledge": "knowledge-agent",
  "security": "security-analyst",
  "compliance": "compliance-agent",
  "voice": "voice-agent",
};

export async function generateStaticParams() {
  const fullSlugs = AGENT_REGISTRY.map((a) => ({ slug: a.id }));
  const shortSlugs = Object.keys(SHORT_SLUG_MAP).map((k) => ({ slug: k }));
  return [...fullSlugs, ...shortSlugs];
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const targetId = SHORT_SLUG_MAP[slug] || slug;
  const agent = AGENT_REGISTRY.find((a) => a.id === targetId || a.id === slug);

  if (!agent) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-16 bg-[#050607] overflow-hidden">
      {/* Background: Particles */}
      <PageBackground preset="particles" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div>
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 font-mono text-xs text-primary-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO AGENT LAB DIRECTORY</span>
          </Link>
        </div>

        <div className="space-y-3 pb-6 border-b border-surface-border">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-accent/20 border border-accent text-accent">
              AGENT {agent.code}
            </span>
            <span className="font-mono text-xs text-tech-cyan">
              {agent.category}
            </span>
          </div>

          <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
            {agent.name}
          </h1>

          <p className="font-mono text-sm text-accent max-w-2xl">
            {agent.tagline}
          </p>
        </div>

        {/* Embedded Console Focused on This Agent */}
        <Suspense fallback={<div className="font-mono text-xs text-primary-muted">Loading Agent Workspace...</div>}>
          <AgentLabConsole initialAgentId={agent.id} />
        </Suspense>
      </div>
    </div>
  );
}
