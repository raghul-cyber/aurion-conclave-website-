"use client";

import React, { useState, useEffect, useRef } from "react";
import { AGENT_REGISTRY, AgentDefinition } from "@/data/agents";
import { AgentEngine, AgentExecutionLog, AgentExecutionResult } from "@/lib/agentEngine";
import {
  Play,
  RotateCcw,
  Trash2,
  Terminal,
  Activity,
  Cpu,
  Layers,
  CheckCircle,
  Clock,
  Sparkles,
  Sliders,
  ShieldAlert,
  Code,
  Table as TableIcon,
  Volume2
} from "lucide-react";

interface AgentLabConsoleProps {
  initialAgentId?: string;
}

export const AgentLabConsole: React.FC<AgentLabConsoleProps> = ({ initialAgentId = "aurion-receptionist" }) => {
  const [selectedAgent, setSelectedAgent] = useState<AgentDefinition>(() => {
    return AGENT_REGISTRY.find((a) => a.id === initialAgentId) || AGENT_REGISTRY[0];
  });
  const [prompt, setPrompt] = useState<string>(selectedAgent.defaultPrompt);
  const [mode, setMode] = useState<"DEMO" | "LIVE">("DEMO");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentLogs, setCurrentLogs] = useState<AgentExecutionLog[]>([]);
  const [executionResult, setExecutionResult] = useState<AgentExecutionResult | null>(null);
  const [showLiveConfig, setShowLiveConfig] = useState<boolean>(false);
  const [apiKeyInput, setApiKeyInput] = useState<string>("");
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Sync prompt when selected agent changes
  useEffect(() => {
    setPrompt(selectedAgent.defaultPrompt);
    setCurrentLogs([]);
    setExecutionResult(null);
  }, [selectedAgent]);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [currentLogs]);

  const handleRun = async () => {
    if (!prompt.trim() || isRunning) return;
    setIsRunning(true);
    setCurrentLogs([]);
    setExecutionResult(null);

    try {
      const result = await AgentEngine.executeAgent(
        selectedAgent.id,
        prompt,
        mode,
        apiKeyInput ? { openai: apiKeyInput } : undefined,
        (newLog) => {
          setCurrentLogs((prev) => [...prev, newLog]);
        }
      );
      setExecutionResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setPrompt(selectedAgent.defaultPrompt);
    setCurrentLogs([]);
    setExecutionResult(null);
  };

  const handleClear = () => {
    setPrompt("");
    setCurrentLogs([]);
    setExecutionResult(null);
  };

  return (
    <div className="relative w-full bg-[#070A0B] border border-surface-border shadow-2xl overflow-hidden">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 sm:px-6 bg-[#0A0D0E] border-b border-surface-border gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-tech-cyan animate-pulse" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
                THE AURION AGENT LAB
              </span>
              <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-surface border border-surface-border text-accent">
                V3.4 RUNTIME
              </span>
            </div>
            <p className="font-mono text-[11px] text-primary-muted -mt-0.5">
              12 Functional Autonomous Agent Systems
            </p>
          </div>
        </div>

        {/* Mode Switcher & System Telemetry */}
        <div className="flex items-center gap-3 self-end sm:self-center">
          <div className="flex items-center bg-[#050607] border border-surface-border p-1 rounded font-mono text-[11px]">
            <button
              type="button"
              onClick={() => setMode("DEMO")}
              className={`px-3 py-1 rounded transition-colors ${
                mode === "DEMO"
                  ? "bg-accent text-[#050607] font-bold"
                  : "text-primary-muted hover:text-primary"
              }`}
            >
              DEMO MODE
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("LIVE");
                setShowLiveConfig(true);
              }}
              className={`px-3 py-1 rounded transition-colors ${
                mode === "LIVE"
                  ? "bg-tech-cyan text-[#050607] font-bold"
                  : "text-primary-muted hover:text-primary"
              }`}
            >
              LIVE API MODE
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#050607] border border-surface-border font-mono text-[10px] text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span>LATENCY: {selectedAgent.latencyAvg}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: 12-Agent Selector Strip (Left) + Interactive Agent Workspace (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* Left Column: 12 Agents Selector Rail */}
        <div className="lg:col-span-4 border-r border-surface-border bg-[#070A0B] overflow-y-auto max-h-[300px] lg:max-h-[720px] terminal-scroll p-2 divide-y divide-surface-border/20">
          <div className="p-2 font-mono text-[10px] text-primary-muted uppercase tracking-wider flex items-center justify-between">
            <span>REGISTERED AGENTS ({AGENT_REGISTRY.length})</span>
            <span className="text-accent">ONLINE</span>
          </div>

          {AGENT_REGISTRY.map((agent) => {
            const isSelected = selectedAgent.id === agent.id;
            return (
              <div
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`p-3 rounded cursor-pointer transition-all duration-150 flex items-start gap-3 ${
                  isSelected
                    ? "bg-[#101415] border border-accent/40 shadow-[0_0_15px_rgba(217,164,65,0.1)]"
                    : "hover:bg-surface/50 border border-transparent"
                }`}
              >
                <div
                  className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded border shrink-0 ${
                    isSelected
                      ? "bg-accent text-[#050607] border-accent"
                      : "bg-[#050607] text-primary-muted border-surface-border"
                  }`}
                >
                  {agent.code}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-semibold truncate ${
                        isSelected ? "text-accent" : "text-primary"
                      }`}
                    >
                      {agent.name}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                  </div>
                  <p className="font-mono text-[10px] text-primary-muted truncate mt-0.5">
                    {agent.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Execution Workspace */}
        <div className="lg:col-span-8 flex flex-col justify-between bg-[#0A0D0E] p-4 sm:p-6 space-y-6">
          {/* Agent Meta & Capabilities */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-surface-border/60">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-accent">
                  {selectedAgent.code} / {selectedAgent.name.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-surface-border text-tech-cyan">
                  {selectedAgent.category}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-primary-muted">
                <span>BENCHMARK: {selectedAgent.latencyAvg}</span>
                <span>•</span>
                <span className="text-success">STATUS: {selectedAgent.status}</span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-primary-muted mt-2 leading-relaxed">
              {selectedAgent.description}
            </p>

            {/* Tools & Capabilities badges */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {selectedAgent.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#070A0B] border border-surface-border text-primary-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Sample Prompts Pills */}
          <div>
            <div className="font-mono text-[10px] text-primary-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>TEST BENCHMARK PROMPTS:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedAgent.samplePrompts.map((sp, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPrompt(sp)}
                  className="text-left font-mono text-[11px] px-2.5 py-1.5 rounded bg-surface/70 border border-surface-border hover:border-accent text-primary-muted hover:text-primary transition-colors max-w-full truncate"
                >
                  &quot;{sp}&quot;
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Prompt Input Box */}
          <div className="relative space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-primary-muted">
              <span>AGENT INPUT / INSTRUCTION DISPATCH</span>
              <span>{prompt.length} CHARS</span>
            </div>

            <div className="relative">
              <textarea
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter technical instruction or query for this agent..."
                disabled={isRunning}
                className="w-full bg-[#050607] border border-surface-border text-primary font-mono text-xs p-3.5 focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50"
              />
            </div>

            {/* Control Buttons: RUN, RESET, CLEAR */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface border border-surface-border hover:border-primary-muted text-primary-muted hover:text-primary font-mono text-xs transition-colors disabled:opacity-50"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>RESET</span>
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface border border-surface-border hover:border-primary-muted text-primary-muted hover:text-primary font-mono text-xs transition-colors disabled:opacity-50"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>CLEAR</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleRun}
                disabled={isRunning || !prompt.trim()}
                className={`flex items-center gap-2 px-6 py-2.5 font-mono text-xs font-bold tracking-wider transition-all duration-200 amber-glow ${
                  isRunning
                    ? "bg-accent/40 text-[#050607] cursor-wait"
                    : "bg-accent hover:bg-accent-light text-[#050607] hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {isRunning ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin" />
                    <span>EXECUTING COGNITIVE LOOP...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>RUN AGENT</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Dynamic Visual Agent Logs Terminal */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-[10px] text-primary-muted">
              <div className="flex items-center gap-1.5 text-accent">
                <Terminal className="w-3.5 h-3.5" />
                <span>DYNAMIC TELEMETRY STREAM</span>
              </div>
              <span>STATUS: {isRunning ? "IN PROGRESS" : executionResult ? "DONE" : "STANDBY"}</span>
            </div>

            <div
              ref={logContainerRef}
              className="h-32 bg-[#050607] border border-surface-border p-3 font-mono text-[11px] overflow-y-auto terminal-scroll space-y-1"
            >
              {currentLogs.length === 0 && !isRunning && (
                <div className="text-primary-muted/40">
                  Ready. Click [ RUN AGENT ] to initiate cognitive execution, tool binding, and validation loop.
                </div>
              )}
              {currentLogs.map((log, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-primary-muted/60 shrink-0">[{log.timestamp}]</span>
                  <span className="text-accent font-semibold shrink-0">{log.stage}:</span>
                  <span className="text-primary">{log.message}</span>
                  {log.tool && (
                    <span className="text-tech-cyan text-[10px] shrink-0">({log.tool})</span>
                  )}
                </div>
              ))}
              {isRunning && (
                <div className="flex items-center gap-2 text-accent animate-pulse">
                  <span>▶</span>
                  <span>Processing neural step...</span>
                </div>
              )}
            </div>
          </div>

          {/* Output Display Panel */}
          {executionResult && (
            <div className="p-4 sm:p-5 bg-[#101415] border border-accent/40 shadow-xl space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="font-mono text-xs font-bold text-primary uppercase">
                    {executionResult.output.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-primary-muted">
                  <span className="text-accent">TOTAL: {executionResult.totalLatencyMs}ms</span>
                  <span>•</span>
                  <span>MODE: {executionResult.mode}</span>
                </div>
              </div>

              <p className="font-sans text-xs text-primary-muted leading-relaxed">
                {executionResult.output.summary}
              </p>

              {/* Metrics Grid */}
              {executionResult.output.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {Object.entries(executionResult.output.metrics).map(([k, v]) => (
                    <div key={k} className="p-2 bg-[#050607] border border-surface-border rounded">
                      <div className="font-mono text-[9px] text-primary-muted truncate">{k}</div>
                      <div className="font-mono text-xs font-bold text-accent mt-0.5 truncate">{v}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Markdown Content Box */}
              <div className="p-3 bg-[#070A0B] border border-surface-border font-sans text-xs text-primary leading-relaxed whitespace-pre-line max-h-48 overflow-y-auto terminal-scroll">
                {executionResult.output.contentMarkdown}
              </div>

              {/* Artifacts (Code / Tables / Waveforms) */}
              {executionResult.output.artifacts && executionResult.output.artifacts.length > 0 && (
                <div className="space-y-2 pt-1">
                  {executionResult.output.artifacts.map((art, idx) => (
                    <div key={idx} className="border border-surface-border bg-[#050607] p-3 rounded">
                      <div className="flex items-center justify-between font-mono text-[10px] text-tech-cyan pb-2 border-b border-surface-border/40">
                        <span>ARTIFACT: {art.title}</span>
                        <span className="uppercase">{art.type}</span>
                      </div>
                      <pre className="font-mono text-[11px] text-primary-muted/90 pt-2 overflow-x-auto">
                        {art.content}
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Live Mode API Configuration Modal */}
      {showLiveConfig && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050607]/80 backdrop-blur-md"
          onClick={() => setShowLiveConfig(false)}
        >
          <div
            className="w-full max-w-md p-6 bg-[#0A0D0E] border border-surface-border shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-surface-border">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-tech-cyan" />
                <h3 className="font-mono text-xs font-bold text-primary uppercase">
                  Live Model API Integration
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowLiveConfig(false)}
                className="text-primary-muted hover:text-primary text-xs"
              >
                ✕
              </button>
            </div>

            <p className="font-sans text-xs text-primary-muted leading-relaxed">
              In Live Mode, you can optionally connect your own LLM provider API key (e.g. OpenAI / Claude / Gemini).
              Keys are strictly processed server-side in memory and never exposed in browser storage.
              If left blank, the system defaults to high-fidelity local deterministic simulations.
            </p>

            <div className="space-y-1.5">
              <label className="font-mono text-[11px] text-primary-muted">
                PROVIDER API KEY (OPTIONAL):
              </label>
              <input
                type="password"
                placeholder="sk-..."
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                className="w-full bg-[#050607] border border-surface-border text-primary font-mono text-xs p-2.5 focus:outline-none focus:border-tech-cyan"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowLiveConfig(false)}
                className="px-4 py-2 bg-surface border border-surface-border text-primary font-mono text-xs"
              >
                CANCEL
              </button>
              <button
                type="button"
                onClick={() => setShowLiveConfig(false)}
                className="px-4 py-2 bg-tech-cyan text-[#050607] font-mono text-xs font-bold"
              >
                SAVE & ACTIVATE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
