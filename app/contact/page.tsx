import React from "react";
import type { Metadata } from "next";
import { ProjectIntakeTerminal } from "@/components/ProjectIntakeTerminal";

export const metadata: Metadata = {
  title: "Initialize a Project | Aurion Conclave",
  description:
    "Start a technology project with Aurion Conclave. Decompose your architecture, calculate scope envelopes, and connect directly with our Principal Systems Architect.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen py-12 bg-[#050607]">
      <ProjectIntakeTerminal />
    </div>
  );
}
