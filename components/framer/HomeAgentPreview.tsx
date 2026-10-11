"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AgentLabConsole } from "@/components/AgentLabConsole";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

export const HomeAgentPreview: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      {/* Live Functional Agent Lab Console */}
      <AgentLabConsole initialAgentId="aurion-receptionist" />

      {/* Obvious Link to Full Agent Lab */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-white/10 bg-[#0E1112]">
        <div className="font-mono text-xs text-primary-muted">
          <span>DEPLOYED ROSTER: 12 SPECIALIZED AGENTS AVAILABLE IN PRODUCTION LAB</span>
        </div>

        <Link href="/agents">
          <SpecularButton variant="secondary" className="text-xs">
            <span>ENTER FULL AGENT LAB DIRECTORY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </SpecularButton>
        </Link>
      </div>
    </div>
  );
};

export default HomeAgentPreview;
