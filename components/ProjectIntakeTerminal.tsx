"use client";

import React, { useState } from "react";
import { Terminal, Send, CheckCircle2, Shield, ArrowRight, RotateCcw, AlertTriangle } from "lucide-react";

export const ProjectIntakeTerminal: React.FC = () => {
  const [projectType, setProjectType] = useState<string>("AI AGENT");
  const [stage, setStage] = useState<string>("MVP");
  const [needs, setNeeds] = useState<string[]>(["DEVELOPMENT", "FULL DELIVERY"]);
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [brief, setBrief] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const PROJECT_TYPES = [
    "AI SYSTEM",
    "AI AGENT",
    "SOFTWARE",
    "CLOUD",
    "ML SYSTEM",
    "AUTOMATION",
    "DATA PLATFORM",
    "MOBILE APP",
    "WEB PLATFORM",
    "ENTERPRISE SYSTEM",
    "OTHER",
  ];

  const STAGES = [
    "IDEA",
    "PROTOTYPE",
    "MVP",
    "EXISTING SYSTEM",
    "SCALING",
  ];

  const NEEDS_OPTIONS = [
    "ARCHITECTURE",
    "DEVELOPMENT",
    "AI",
    "CLOUD",
    "AUTOMATION",
    "FULL DELIVERY",
    "CONSULTING",
  ];

  const toggleNeed = (item: string) => {
    setNeeds((prev) =>
      prev.includes(item) ? prev.filter((n) => n !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Please provide your name and work email.");
      return;
    }
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType,
          stage,
          needs,
          name,
          company,
          email,
          brief,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }
      setSubmissionResult(data);
    } catch (err: any) {
      setErrorMsg(err?.message || "Failed to transmit intake packet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setName("");
    setCompany("");
    setEmail("");
    setBrief("");
    setErrorMsg(null);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#070A0B] border-t border-surface-border overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
            <span>AURION / PROJECT INGRESS</span>
            <span>•</span>
            <span className="text-tech-cyan">INITIALIZE SYSTEM</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
            START A TECHNOLOGY PROJECT.
          </h2>

          <p className="font-sans text-sm sm:text-base text-primary-muted mt-4 leading-relaxed">
            Provide the high-level boundaries of your system requirement. Our Principal Systems Architect
            reviews incoming briefs and responds with an indicative technical blueprint and feasibility review.
          </p>
        </div>

        {/* Intake Terminal Card */}
        <div className="relative bg-[#0A0D0E] border border-surface-border shadow-2xl p-6 sm:p-10 font-mono text-xs">
          {submissionResult ? (
            /* Cinematic Confirmation Screen */
            <div className="p-6 bg-[#050607] border border-accent/40 rounded space-y-6 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="font-bold text-sm text-primary uppercase">
                    PROJECT INTAKE ACCEPTED
                  </span>
                </div>
                <span className="text-accent font-bold">
                  {submissionResult.ticketId}
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs text-primary-muted leading-relaxed">
                <p>
                  Thank you, <strong className="text-primary">{name}</strong>. Your project specification has been
                  ingested into the Aurion Conclave technical review pipeline.
                </p>
                <div className="p-4 bg-[#0A0D0E] border border-surface-border font-mono text-[11px] space-y-2">
                  <div className="flex justify-between">
                    <span>TICKET ID:</span>
                    <span className="text-accent">{submissionResult.ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STATUS:</span>
                    <span className="text-success">{submissionResult.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ASSIGNED ARCHITECT:</span>
                    <span className="text-primary">{submissionResult.leadArchitect}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ESTIMATED SLA:</span>
                    <span className="text-tech-cyan">{submissionResult.estimatedResponse}</span>
                  </div>
                </div>
                <p>
                  An initial architectural triage brief has been dispatched to{" "}
                  <strong className="text-primary">{email}</strong>.
                </p>
              </div>

              <div className="pt-4 border-t border-surface-border flex justify-end">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 px-5 py-2.5 bg-surface hover:bg-surface-elevated border border-surface-border text-primary font-mono text-xs transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>INITIALIZE ANOTHER BRIEF</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Diagnostic Questionnaire */
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1: What are you building? */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-accent">
                  <span className="font-bold">QUESTION 01 //</span>
                  <span className="text-primary">WHAT ARE YOU BUILDING?</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((pt) => {
                    const isSelected = projectType === pt;
                    return (
                      <button
                        key={pt}
                        type="button"
                        onClick={() => setProjectType(pt)}
                        className={`px-3 py-2 rounded text-[11px] transition-all border ${
                          isSelected
                            ? "bg-accent text-[#050607] font-bold border-accent shadow-[0_0_12px_rgba(217,164,65,0.25)]"
                            : "bg-[#050607] text-primary-muted border-surface-border hover:border-accent hover:text-primary"
                        }`}
                      >
                        {pt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 2: What stage? */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-accent">
                  <span className="font-bold">QUESTION 02 //</span>
                  <span className="text-primary">WHAT LIFECYCLE STAGE?</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {STAGES.map((st) => {
                    const isSelected = stage === st;
                    return (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setStage(st)}
                        className={`px-3 py-2 rounded text-[11px] transition-all border ${
                          isSelected
                            ? "bg-tech-cyan text-[#050607] font-bold border-tech-cyan shadow-[0_0_12px_rgba(97,199,192,0.25)]"
                            : "bg-[#050607] text-primary-muted border-surface-border hover:border-tech-cyan hover:text-primary"
                        }`}
                      >
                        {st}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 3: What do you need? */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-accent">
                  <span className="font-bold">QUESTION 03 //</span>
                  <span className="text-primary">WHAT CAPABILITIES DO YOU NEED?</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {NEEDS_OPTIONS.map((nd) => {
                    const isSelected = needs.includes(nd);
                    return (
                      <button
                        key={nd}
                        type="button"
                        onClick={() => toggleNeed(nd)}
                        className={`px-3 py-2 rounded text-[11px] transition-all border ${
                          isSelected
                            ? "bg-primary text-[#050607] font-bold border-primary"
                            : "bg-[#050607] text-primary-muted border-surface-border hover:border-primary-muted hover:text-primary"
                        }`}
                      >
                        {isSelected ? "✓ " : ""}{nd}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="pt-4 border-t border-surface-border/60 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-primary-muted text-[11px]">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#050607] border border-surface-border text-primary p-2.5 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-primary-muted text-[11px]">COMPANY / VENTURE</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Logistics Technologies"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-[#050607] border border-surface-border text-primary p-2.5 focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-primary-muted text-[11px]">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="elena@apexlogistics.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#050607] border border-surface-border text-primary p-2.5 focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-primary-muted text-[11px]">PROJECT BRIEF / ARCHITECTURAL GOALS</label>
                  <textarea
                    rows={4}
                    placeholder="Describe the operational challenge, data volumes, latency goals, or existing infrastructure..."
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    className="w-full bg-[#050607] border border-surface-border text-primary p-2.5 focus:outline-none focus:border-accent resize-none"
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-alert/15 border border-alert text-alert flex items-center gap-2 text-xs">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-primary-muted text-[11px]">
                  <Shield className="w-3.5 h-3.5 text-tech-cyan" />
                  <span>NON-DISCLOSURE GUARANTEE BY DEFAULT</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-[#050607] font-bold tracking-wider transition-all amber-glow hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING INTAKE PACKET...</span>
                  ) : (
                    <>
                      <span>INITIALIZE PROJECT</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
