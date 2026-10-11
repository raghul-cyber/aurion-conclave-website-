"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Command, ArrowRight, Terminal, Cpu, Box, Briefcase, Layers, X } from "lucide-react";
import { ALL_SERVICES } from "@/data/services";
import { AGENT_REGISTRY } from "@/data/agents";
import { PRODUCTS } from "@/data/products";
import { INDUSTRIES } from "@/data/industries";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global key listener to trigger palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) ||
          (e.key === "k" && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        // Toggle or open
        if (isOpen) {
          onClose();
        } else {
          // Open parent
          const event = new CustomEvent("open-command-palette");
          window.dispatchEvent(event);
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Search filtered items
  const filteredItems = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      return [
        { type: "ACTION", id: "act-services", title: "Go to Services Catalog (140+)", subtitle: "Browse interactive services matrix", icon: Layers, href: "/services" },
        { type: "ACTION", id: "act-agents", title: "Launch Aurion Agent Lab", subtitle: "12 live interactive browser demo agents", icon: Terminal, href: "/agents" },
        { type: "ACTION", id: "act-products", title: "Explore Proprietary Products", subtitle: "Problem-to-product incubation & IP", icon: Box, href: "/products" },
        { type: "ACTION", id: "act-capabilities", title: "View Engineering Architecture", subtitle: "End-to-end pipeline from idea to production", icon: Cpu, href: "/capabilities" },
        { type: "ACTION", id: "act-industries", title: "Explore Real-World Industries", subtitle: "Financial services, healthcare, logistics, energy", icon: Briefcase, href: "/industries" },
        { type: "ACTION", id: "act-contact", title: "Start a Technology Project", subtitle: "Initialize intake diagnostic terminal", icon: ArrowRight, href: "/contact" },
      ];
    }

    const matches: Array<{
      type: "SERVICE" | "AGENT" | "PRODUCT" | "INDUSTRY" | "ACTION";
      id: string;
      title: string;
      subtitle: string;
      icon: any;
      href: string;
    }> = [];

    // Match agents
    for (const agent of AGENT_REGISTRY) {
      if (agent.name.toLowerCase().includes(q) || agent.category.toLowerCase().includes(q) || agent.tagline.toLowerCase().includes(q)) {
        matches.push({
          type: "AGENT",
          id: agent.id,
          title: `${agent.code} / ${agent.name}`,
          subtitle: agent.role,
          icon: Terminal,
          href: `/agents?agent=${agent.id}`
        });
      }
    }

    // Match products
    for (const prod of PRODUCTS) {
      if (prod.name.toLowerCase().includes(q) || prod.category.toLowerCase().includes(q) || prod.tagline.toLowerCase().includes(q)) {
        matches.push({
          type: "PRODUCT",
          id: prod.id,
          title: prod.name,
          subtitle: `${prod.statusLabel} • ${prod.category}`,
          icon: Box,
          href: `/products#${prod.id}`
        });
      }
    }

    // Match services
    for (const svc of ALL_SERVICES) {
      if (svc.name.toLowerCase().includes(q) || svc.category.toLowerCase().includes(q) || svc.tagline.toLowerCase().includes(q) || svc.technologies.some(t => t.toLowerCase().includes(q))) {
        matches.push({
          type: "SERVICE",
          id: svc.id,
          title: `${svc.code} / ${svc.name}`,
          subtitle: `${svc.category} • ${svc.tagline}`,
          icon: Layers,
          href: `/services?id=${svc.id}`
        });
        if (matches.length > 25) break; // keep list responsive
      }
    }

    // Match industries
    for (const ind of INDUSTRIES) {
      if (ind.name.toLowerCase().includes(q) || ind.tagline.toLowerCase().includes(q)) {
        matches.push({
          type: "INDUSTRY",
          id: ind.id,
          title: ind.name,
          subtitle: ind.tagline,
          icon: Briefcase,
          href: `/industries#${ind.id}`
        });
      }
    }

    return matches;
  }, [query]);

  const handleSelect = (item: (typeof filteredItems)[0]) => {
    router.push(item.href);
    onClose();
  };

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-[#050607]/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0A0D0E] border border-surface-border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownList}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-surface-border bg-[#101415]/90">
          <Search className="w-5 h-5 text-accent mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services (140+), agents (12), products, or capabilities..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent border-none text-primary text-sm font-sans placeholder-primary-muted/50 focus:outline-none focus:ring-0"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-primary-muted hover:text-primary rounded hover:bg-surface-border transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto py-2 divide-y divide-surface-border/20 terminal-scroll">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center font-mono text-xs text-primary-muted">
              No matching systems or services found for &quot;{query}&quot;. Try &quot;AI&quot;, &quot;Cloud&quot;, or &quot;Agent&quot;.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                    isSelected ? "bg-accent/15 border-l-2 border-accent" : "hover:bg-surface/50 border-l-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-1.5 rounded ${
                        isSelected ? "bg-accent text-[#050607]" : "bg-surface text-accent"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-primary truncate">
                          {item.title}
                        </span>
                        <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-surface border border-surface-border text-primary-muted uppercase shrink-0">
                          {item.type}
                        </span>
                      </div>
                      <p className="font-mono text-[11px] text-primary-muted truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-accent translate-x-1" : "text-primary-muted/40"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-surface-border bg-[#070A0B] font-mono text-[10px] text-primary-muted">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-accent">AURION TELEMETRY DISPATCH</span>
        </div>
      </div>
    </div>
  );
};
