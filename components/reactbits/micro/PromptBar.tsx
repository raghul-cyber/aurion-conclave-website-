"use client";

import React, { useState } from "react";
import { Send, Sparkles, Terminal } from "lucide-react";

interface PromptBarProps {
  placeholder?: string;
  samplePrompts?: string[];
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
  className?: string;
}

export const PromptBar: React.FC<PromptBarProps> = ({
  placeholder = "Enter query, task parameters, or system instruction...",
  samplePrompts = [],
  onSubmit,
  isLoading = false,
  className = "",
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || isLoading) return;
    onSubmit(value.trim());
  };

  const handleSelectSample = (sample: string) => {
    setValue(sample);
  };

  return (
    <div className={`w-full flex flex-col gap-3 ${className}`}>
      {/* Sample chips */}
      {samplePrompts.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="flex items-center gap-1 font-mono text-[11px] text-accent shrink-0">
            <Sparkles className="w-3 h-3" />
            <span>PRESETS:</span>
          </span>
          {samplePrompts.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectSample(sample)}
              className="shrink-0 px-2.5 py-1 rounded-md border border-white/10 bg-[#151A1B] hover:border-accent/40 text-primary-muted hover:text-primary transition-all text-[11px] truncate max-w-[280px]"
            >
              {sample}
            </button>
          ))}
        </div>
      )}

      {/* Main Bar */}
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center rounded-xl border border-white/15 bg-[#111516] focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all p-1.5 shadow-lg"
      >
        <div className="pl-3 pr-2 text-primary-muted">
          <Terminal className="w-4 h-4 text-accent" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          disabled={isLoading}
          className="flex-1 bg-transparent px-2 py-2 text-sm text-primary placeholder-primary-muted/60 focus:outline-none font-sans"
        />
        <button
          type="submit"
          disabled={!value.trim() || isLoading}
          className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-mid disabled:opacity-40 disabled:hover:bg-accent text-[#191E1E] font-mono text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-all shadow"
        >
          <span>EXECUTE</span>
          <Send className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};

export default PromptBar;
