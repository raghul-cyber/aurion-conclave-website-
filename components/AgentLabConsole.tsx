"use client";

import React, { useState, useEffect, useRef } from "react";
import { AGENT_REGISTRY, AgentDefinition } from "@/data/agents";
import { AgentExecutionLog, AgentExecutionResult } from "@/lib/agentEngine";
import { StatusMark } from "@/components/reactbits/micro/StatusMark";
import { CallChip } from "@/components/reactbits/micro/CallChip";
import { ThoughtLine } from "@/components/reactbits/micro/ThoughtLine";
import { PromptBar } from "@/components/reactbits/micro/PromptBar";
import { RubberSegment } from "@/components/reactbits/micro/RubberSegment";
import { LatticeLoader } from "@/components/reactbits/micro/LatticeLoader";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";
import {
  RotateCcw,
  Sparkles,
  Shield,
  FileText,
  Code,
  Table as TableIcon,
  Volume2,
  Terminal,
  Activity,
  Layers,
} from "lucide-react";

interface AgentLabConsoleProps {
  initialAgentId?: string;
}

export const AgentLabConsole: React.FC<AgentLabConsoleProps> = ({
  initialAgentId = "aurion-receptionist",
}) => {
  const [selectedAgent, setSelectedAgent] = useState<AgentDefinition>(() => {
    return AGENT_REGISTRY.find((a) => a.id === initialAgentId) || AGENT_REGISTRY[0];
  });
  const [mode, setMode] = useState<string>("LIVE");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentLogs, setCurrentLogs] = useState<AgentExecutionLog[]>([]);
  const [executionResult, setExecutionResult] = useState<AgentExecutionResult | null>(null);
  const [customFileContent, setCustomFileContent] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"trace" | "output" | "artifacts">("trace");

  // Voice speech state
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    setCurrentLogs([]);
    setExecutionResult(null);
  }, [selectedAgent]);

  const handleRun = async (promptInput: string) => {
    if (!promptInput.trim() || isRunning) return;
    setIsRunning(true);
    setCurrentLogs([]);
    setExecutionResult(null);
    setActiveTab("trace");

    try {
      const response = await fetch(`/api/agents/${selectedAgent.id}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promptInput,
          mode,
          fileContent: customFileContent || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error(`Execution error: ${response.statusText}`);
      }

      const result: AgentExecutionResult = await response.json();
      setCurrentLogs(result.logs || []);
      setExecutionResult(result);
      setActiveTab("output");
    } catch (err: any) {
      console.error(err);
      setCurrentLogs((prev) => [
        ...prev,
        {
          timestamp: new Date().toLocaleTimeString(),
          stage: "ERROR",
          message: err?.message || "Execution encountered an unhandled fault",
          status: "error",
        },
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const handleVoiceSpeak = (textToSpeak: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full rounded-2xl border border-[rgba(244,241,233,0.12)] bg-[#0C0F10] overflow-hidden shadow-2xl">
      {/* Top Console Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-[#111516]">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            AGENT EXECUTION LAB
          </span>
          <span className="text-white/20">|</span>
          <StatusMark
            status={isRunning ? "RUNNING" : executionResult ? "SUCCESS" : "IDLE"}
          />
        </div>

        <div className="flex items-center gap-3">
          <RubberSegment
            options={[
              { value: "LIVE", label: "LIVE ENGINE" },
              { value: "SANDBOX", label: "SANDBOX" },
            ]}
            value={mode}
            onChange={setMode}
          />

          <button
            type="button"
            onClick={() => {
              setCurrentLogs([]);
              setExecutionResult(null);
            }}
            className="p-1.5 rounded-lg border border-white/10 text-primary-muted hover:text-primary hover:border-white/20 transition-colors"
            title="Reset Terminal"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Agent Selector Ribbon */}
      <div className="flex items-center gap-2 px-6 py-3 border-b border-white/10 bg-[#151A1B] overflow-x-auto no-scrollbar">
        <span className="font-mono text-[11px] text-accent uppercase tracking-wider shrink-0 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" />
          <span>ROSTER:</span>
        </span>
        {AGENT_REGISTRY.map((a) => {
          const isSelected = a.id === selectedAgent.id;
          return (
            <button
              key={a.id}
              onClick={() => setSelectedAgent(a)}
              className={`shrink-0 px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                isSelected
                  ? "bg-accent text-[#191E1E] font-semibold shadow-sm"
                  : "bg-white/5 text-primary-muted hover:text-primary hover:bg-white/10"
              }`}
            >
              {a.name}
            </button>
          );
        })}
      </div>

      {/* Main Console Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Specification & Context Panel */}
        <div className="lg:col-span-4 p-6 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0E1112] space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent font-semibold">
                AGENT {selectedAgent.code}
              </span>
              <span className="font-mono text-[11px] text-tech-teal">{selectedAgent.category}</span>
            </div>
            <h3 className="font-sans text-xl font-bold text-primary">{selectedAgent.name}</h3>
            <p className="text-xs text-primary-muted font-sans mt-1 leading-relaxed">
              {selectedAgent.description}
            </p>
          </div>

          {/* Configured Tools */}
          <div className="space-y-2">
            <span className="font-mono text-[11px] text-accent uppercase tracking-wider block">
              AUTHORIZED TOOL REGISTRY
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedAgent.tools.map((t, idx) => (
                <CallChip key={idx} toolName={t} />
              ))}
            </div>
          </div>

          {/* Specialized File / Payload Injection for Data / Security / Document Agents */}
          {(selectedAgent.id === "data-analyst" ||
            selectedAgent.id === "security-analyst" ||
            selectedAgent.id === "document-analyst" ||
            selectedAgent.id === "code-assistant") && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <label className="font-mono text-[11px] text-accent uppercase tracking-wider flex items-center justify-between">
                <span>INJECT TEST PAYLOAD</span>
                <span className="text-[10px] text-primary-muted">Optional</span>
              </label>
              <textarea
                value={customFileContent}
                onChange={(e) => setCustomFileContent(e.target.value)}
                placeholder={
                  selectedAgent.id === "data-analyst"
                    ? "Paste CSV data to compute real metrics..."
                    : selectedAgent.id === "security-analyst"
                    ? "Paste source code or HTTP headers to scan for vulnerabilities..."
                    : "Enter document text or code snippet..."
                }
                rows={4}
                className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-white/10 bg-[#151A1B] text-primary placeholder-white/30 focus:outline-none focus:border-accent"
              />
            </div>
          )}

          {/* SLA Metrics */}
          <div className="p-3 rounded-xl border border-white/10 bg-white/5 space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between text-primary-muted">
              <span>LATENCY SLA</span>
              <span className="text-primary">{selectedAgent.latencyAvg}</span>
            </div>
            <div className="flex justify-between text-primary-muted">
              <span>SECURITY LEVEL</span>
              <span className="text-success">RESTRICTED TOOLCHAIN</span>
            </div>
            <div className="flex justify-between text-primary-muted">
              <span>DATA CONFINEMENT</span>
              <span className="text-accent">ZERO INFERENCE RETENTION</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Execution & Output Panel */}
        <div className="lg:col-span-8 flex flex-col justify-between p-6 bg-[#0B0D0E]">
          {/* Header Tabs */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("trace")}
                className={`px-3 py-1 rounded-md font-mono text-xs transition-colors ${
                  activeTab === "trace"
                    ? "bg-accent/20 text-accent font-semibold border border-accent/30"
                    : "text-primary-muted hover:text-primary"
                }`}
              >
                EXECUTION TRACE ({currentLogs.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("output")}
                className={`px-3 py-1 rounded-md font-mono text-xs transition-colors ${
                  activeTab === "output"
                    ? "bg-accent/20 text-accent font-semibold border border-accent/30"
                    : "text-primary-muted hover:text-primary"
                }`}
              >
                STRUCTURED OUTPUT
              </button>
              {executionResult?.output?.artifacts && executionResult.output.artifacts.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTab("artifacts")}
                  className={`px-3 py-1 rounded-md font-mono text-xs transition-colors ${
                    activeTab === "artifacts"
                      ? "bg-accent/20 text-accent font-semibold border border-accent/30"
                      : "text-primary-muted hover:text-primary"
                  }`}
                >
                  ARTIFACTS ({executionResult.output.artifacts.length})
                </button>
              )}
            </div>

            {selectedAgent.id === "voice-agent" && executionResult && (
              <button
                type="button"
                onClick={() => handleVoiceSpeak(executionResult.output.summary)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs bg-tech-teal/20 text-tech-teal border border-tech-teal/40 hover:bg-tech-teal/30 transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{isSpeaking ? "STOP AUDIO" : "PLAY SYNTHESIS"}</span>
              </button>
            )}
          </div>

          {/* Tab Content Display Area */}
          <div className="flex-1 overflow-y-auto max-h-[420px] pr-2 space-y-4">
            {isRunning && (
              <LatticeLoader label={`EXECUTING ${selectedAgent.name.toUpperCase()} AGENT POD`} />
            )}

            {!isRunning && activeTab === "trace" && (
              <div className="space-y-1">
                {currentLogs.length === 0 ? (
                  <div className="py-16 text-center text-primary-muted font-mono text-xs space-y-2">
                    <Activity className="w-6 h-6 mx-auto text-white/20" />
                    <p>Agent standing by in idle state.</p>
                    <p className="text-[11px] text-white/30">
                      Select or type a command below to trigger execution.
                    </p>
                  </div>
                ) : (
                  currentLogs.map((log, index) => (
                    <ThoughtLine
                      key={index}
                      stage={log.stage}
                      message={log.message}
                      timestamp={log.timestamp}
                      tool={log.tool}
                      durationMs={log.durationMs}
                      status={log.status}
                      isLast={index === currentLogs.length - 1}
                    />
                  ))
                )}
              </div>
            )}

            {!isRunning && activeTab === "output" && (
              <div>
                {!executionResult ? (
                  <div className="py-16 text-center text-primary-muted font-mono text-xs">
                    No execution results yet. Execute a query to generate an output.
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl border border-accent/20 bg-accent/5 space-y-2">
                      <span className="font-mono text-[11px] text-accent uppercase tracking-wider">
                        PROVIDER: {executionResult.provider}
                      </span>
                      <h4 className="font-sans text-lg font-bold text-primary">
                        {executionResult.output.title}
                      </h4>
                      <p className="text-sm text-primary/90 leading-relaxed font-sans">
                        {executionResult.output.summary}
                      </p>
                    </div>

                    {executionResult.output.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {Object.entries(executionResult.output.metrics).map(([k, v]) => (
                          <div
                            key={k}
                            className="p-3 rounded-lg border border-white/10 bg-[#151A1B] space-y-1"
                          >
                            <span className="font-mono text-[10px] text-primary-muted uppercase tracking-wider block">
                              {k}
                            </span>
                            <span className="font-mono text-sm font-semibold text-accent">
                              {String(v)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="p-4 rounded-xl border border-white/10 bg-[#111516] font-sans text-xs text-primary/80 whitespace-pre-wrap leading-relaxed">
                      {executionResult.output.contentMarkdown}
                    </div>
                  </div>
                )}
              </div>
            )}

            {!isRunning && activeTab === "artifacts" && (
              <div className="space-y-4">
                {executionResult?.output?.artifacts?.map((art, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-white/10 bg-[#111516] space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-accent font-semibold">{art.title}</span>
                      <span className="text-[10px] text-primary-muted uppercase">{art.type}</span>
                    </div>
                    <pre className="p-3 rounded-lg bg-[#080A0B] text-tech-teal font-mono text-xs overflow-x-auto max-h-60">
                      {art.content}
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Execution Bar */}
          <div className="pt-4 border-t border-white/10 mt-4">
            <PromptBar
              placeholder={`Ask ${selectedAgent.name} or type task requirements...`}
              samplePrompts={selectedAgent.samplePrompts}
              onSubmit={handleRun}
              isLoading={isRunning}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentLabConsole;
