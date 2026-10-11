import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AGENT_REGISTRY } from "@/data/agents";
import { AgentLabConsole } from "@/components/AgentLabConsole";
import { ArrowLeft, Terminal, Cpu } from "lucide-react";

export async function generateStaticParams() {
  return AGENT_REGISTRY.map((a) => ({ slug: a.id }));
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = AGENT_REGISTRY.find((a) => a.id === slug);

  if (!agent) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-16 bg-[#050607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary">
            {agent.name}
          </h1>

          <p className="font-mono text-sm text-accent max-w-2xl">
            {agent.tagline}
          </p>
        </div>

        {/* Embedded Console Focused on This Agent */}
        <AgentLabConsole initialAgentId={agent.id} />
      </div>
    </div>
  );
}
