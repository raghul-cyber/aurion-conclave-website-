"use client";

import React, { useState, useMemo } from "react";
import { TECHNOLOGIES, TECH_GROUPS, TechItem } from "@/data/technologies";
import { Cpu, Layers, Sparkles, Filter, ExternalLink } from "lucide-react";

export const TechConstellation: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>("ALL");
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const filteredTechs = useMemo(() => {
    if (selectedGroup === "ALL") return TECHNOLOGIES;
    return TECHNOLOGIES.filter((t) => t.category === selectedGroup);
  }, [selectedGroup]);

  return (
    <section className="relative py-24 bg-[#050607] border-b border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-2">
              <span>AURION / TECHNOLOGY CONSTELLATION</span>
              <span>•</span>
              <span className="text-tech-cyan">CORE COMPETENCIES</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
              BATTLE-TESTED STACKS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-tech-cyan">
                ZERO COMPROMISES.
              </span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-primary-muted mt-3 max-w-xl">
              We do not pick technologies based on fleeting trends. We build on rigorous, high-throughput,
              memory-safe foundations proven across millions of concurrent enterprise operations.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-primary-muted">
            <Cpu className="w-4 h-4 text-accent" />
            <span>TOTAL INSTRUMENTED TECHNOLOGIES: {TECHNOLOGIES.length}</span>
          </div>
        </div>

        {/* Group Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedGroup("ALL")}
            className={`px-3 py-1.5 rounded font-mono text-xs whitespace-nowrap transition-colors border ${
              selectedGroup === "ALL"
                ? "bg-accent text-[#050607] font-bold border-accent"
                : "bg-surface text-primary-muted border-surface-border hover:border-accent hover:text-primary"
            }`}
          >
            ALL CATEGORIES ({TECHNOLOGIES.length})
          </button>
          {TECH_GROUPS.map((grp) => {
            const isSelected = selectedGroup === grp.id;
            return (
              <button
                key={grp.id}
                type="button"
                onClick={() => setSelectedGroup(grp.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs whitespace-nowrap transition-colors border ${
                  isSelected
                    ? "bg-accent text-[#050607] font-bold border-accent"
                    : "bg-surface text-primary-muted border-surface-border hover:border-accent hover:text-primary"
                }`}
              >
                <span>{grp.id}</span>
                <span className="text-[10px] opacity-70">({grp.count})</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Technology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTechs.map((tech) => {
            const isHovered = hoveredTech?.id === tech.id;
            return (
              <div
                key={tech.id}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                className="group p-5 bg-[#0A0D0E] hover:bg-[#101415] border border-surface-border hover:border-accent transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-surface-border/10 group-hover:bg-accent/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-primary-muted mb-2">
                    <span className="text-accent font-semibold">{tech.category}</span>
                    <span className="px-1.5 py-0.2 rounded bg-surface border border-surface-border uppercase text-[9px]">
                      {tech.proficiency.replace("_", " ")}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base text-primary group-hover:text-accent transition-colors">
                    {tech.name}
                  </h3>

                  <p className="font-sans text-xs text-primary-muted mt-2 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border/40 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] text-primary-muted">
                    <span>PROFICIENCY</span>
                    <span className="text-tech-cyan">{tech.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-[#050607] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-tech-cyan transition-all duration-500"
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>

                  {/* Connected tech links */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {tech.connections.slice(0, 3).map((conn) => (
                      <span
                        key={conn}
                        className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#070A0B] border border-surface-border/60 text-primary-muted"
                      >
                        {conn}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
