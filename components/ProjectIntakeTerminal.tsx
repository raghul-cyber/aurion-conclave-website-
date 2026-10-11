"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Shield, ArrowRight, RotateCcw, AlertTriangle } from "lucide-react";

export const ProjectIntakeTerminal: React.FC = () => {
  const [projectType, setProjectType] = useState<string>("AI");
  const [stage, setStage] = useState<string>("MVP");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [brief, setBrief] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const PROJECT_TYPES = [
    "AI",
    "SOFTWARE",
    "CLOUD",
    "ML",
    "AUTOMATION",
    "DATA",
    "SECURITY",
    "OTHER",
  ];

  const STAGES = [
    "IDEA",
    "PROTOTYPE",
    "MVP",
    "PRODUCTION",
    "SCALING",
  ];

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
    <div className="w-full">
      {/* Intake Terminal Container */}
      <div className="luxury-glass border border-surface-border p-6 sm:p-12 font-mono text-xs rounded-sm">
        <AnimatePresence mode="wait">
          {submissionResult ? (
            /* Success State */
            <motion.div
              key="success-state"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 bg-[#080A0B] border border-accent/40 space-y-8"
            >
              <div className="flex items-center justify-between pb-6 border-b border-surface-border">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-sans font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
                    TRANSMISSION RECEIVED.
                  </span>
                </div>
                <span className="text-accent font-bold text-sm">
                  {submissionResult.ticketId || "ACK-2026"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="font-sans text-xl sm:text-2xl font-bold text-accent">
                  WE'LL REVIEW THE SYSTEM.
                </div>
                <p className="font-sans text-sm text-primary-muted leading-relaxed">
                  Thank you, <strong className="text-primary">{name}</strong>. Your project brief has been ingested
                  into our architectural discovery pipeline. A Principal Systems Engineer will review your requirements
                  and contact you at <strong className="text-primary">{email}</strong> within 24 hours.
                </p>
              </div>

              <div className="pt-6 border-t border-surface-border flex justify-end">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-elevated border border-surface-border text-primary font-mono text-xs transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-accent" />
                  <span>START ANOTHER INTAKE</span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            /* 3-Step Project Intake Diagnostic Form */
            <motion.form
              key="form-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleSubmit}
              className="space-y-12"
            >
              {/* STEP 01 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-bold text-sm">STEP 01 //</span>
                    <span className="font-sans font-bold text-lg text-primary tracking-tight">
                      WHAT ARE YOU BUILDING?
                    </span>
                  </div>
                  <span className="text-[10px] text-primary-muted uppercase">SYSTEM CATEGORY</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {PROJECT_TYPES.map((pt) => {
                    const isSelected = projectType === pt;
                    return (
                      <motion.button
                        key={pt}
                        type="button"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setProjectType(pt)}
                        className={`relative p-3.5 text-center font-mono text-xs tracking-wider transition-all border rounded-sm ${
                          isSelected
                            ? "bg-accent text-[#060708] font-bold border-accent shadow-[0_2px_16px_rgba(201,148,62,0.25)]"
                            : "bg-[#080A0B] text-primary-muted border-surface-border hover:border-accent hover:text-primary"
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            layoutId="intake-type-pill"
                            className="absolute inset-0 bg-accent rounded-sm z-[-1]"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
                          />
                        )}
                        <span className="relative z-10">{pt}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 02 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-bold text-sm">STEP 02 //</span>
                    <span className="font-sans font-bold text-lg text-primary tracking-tight">
                      CURRENT STAGE?
                    </span>
                  </div>
                  <span className="text-[10px] text-primary-muted uppercase">MATURITY LEVEL</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {STAGES.map((st) => {
                    const isSelected = stage === st;
                    return (
                      <motion.button
                        key={st}
                        type="button"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStage(st)}
                        className={`relative p-3.5 text-center font-mono text-xs tracking-wider transition-all border rounded-sm ${
                          isSelected
                            ? "bg-tech-teal text-[#060708] font-bold border-tech-teal shadow-[0_2px_16px_rgba(118,191,185,0.25)]"
                            : "bg-[#080A0B] text-primary-muted border-surface-border hover:border-tech-teal hover:text-primary"
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            layoutId="intake-stage-pill"
                            className="absolute inset-0 bg-tech-teal rounded-sm z-[-1]"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
                          />
                        )}
                        <span className="relative z-10">{st}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 03 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-bold text-sm">STEP 03 //</span>
                    <span className="font-sans font-bold text-lg text-primary tracking-tight">
                      YOUR DETAILS
                    </span>
                  </div>
                  <span className="text-[10px] text-primary-muted uppercase">CONTACT & BRIEF</span>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-primary-muted text-[11px]">NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="Elena Rostova"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#080A0B] border border-surface-border text-primary p-3 focus:outline-none focus:border-accent text-xs transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-primary-muted text-[11px]">COMPANY</label>
                      <input
                        type="text"
                        placeholder="Apex Logistics Technologies"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-[#080A0B] border border-surface-border text-primary p-3 focus:outline-none focus:border-accent text-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-primary-muted text-[11px]">EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="elena@apexlogistics.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#080A0B] border border-surface-border text-primary p-3 focus:outline-none focus:border-accent text-xs transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-primary-muted text-[11px]">PROJECT BRIEF</label>
                    <textarea
                      rows={4}
                      placeholder="Describe the operational problem, computational bottleneck, volume requirements, or timeline..."
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      className="w-full bg-[#080A0B] border border-surface-border text-primary p-3 focus:outline-none focus:border-accent resize-none text-xs transition-colors"
                    />
                  </div>
                </div>
              </div>

              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-alert/15 border border-alert text-alert flex items-center gap-2 text-xs"
                >
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-primary-muted text-[11px]">
                  <Shield className="w-3.5 h-3.5 text-tech-teal" />
                  <span>MUTUAL NDA & SECURITY ENCRYPTED TRANSMISSION</span>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.25)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>START THE CONVERSATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
