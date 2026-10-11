"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Layers, X, ArrowUpRight, ArrowRight, CheckCircle2, Cpu, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_SERVICES, SERVICE_CATEGORIES, ServiceItem, ServiceCategory } from "@/data/services";

interface ServiceMatrixProps {
  initialCategoryId?: string;
  initialServiceId?: string;
  previewOnly?: boolean;
}

export const ServiceMatrix: React.FC<ServiceMatrixProps> = ({
  initialCategoryId = "all",
  initialServiceId,
  previewOnly = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeService, setActiveService] = useState<ServiceItem | null>(() => {
    if (initialServiceId) {
      return ALL_SERVICES.find((s) => s.id === initialServiceId) || null;
    }
    return null;
  });

  // Filter services
  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((svc) => {
      const matchCat =
        selectedCategory === "all" || svc.categoryId === selectedCategory;
      const matchSearch =
        !searchQuery ||
        svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedServices = previewOnly
    ? filteredServices.slice(0, 12)
    : filteredServices;

  return (
    <div className="relative w-full">
      {/* Search and Category Control Bar */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Instant Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
            <input
              type="text"
              placeholder="Search 140+ services (e.g. 'Kubernetes', 'Agents', 'RAG')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0A0D0E] border border-surface-border text-primary pl-10 pr-4 py-2.5 text-xs font-mono placeholder-primary-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-muted hover:text-primary"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Service Counter */}
          <div className="flex items-center gap-2 font-mono text-xs text-primary-muted self-end sm:self-center">
            <span>SHOWING:</span>
            <span className="text-accent font-bold">
              {displayedServices.length} OF {ALL_SERVICES.length} SERVICES
            </span>
          </div>
        </div>

        {/* 16 Category Filter Pills with Shared layoutId */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`relative px-3 py-1.5 rounded font-mono text-[11px] whitespace-nowrap transition-colors border ${
              selectedCategory === "all"
                ? "text-[#050607] font-bold border-accent"
                : "bg-surface/80 text-primary-muted border-surface-border hover:border-accent hover:text-primary"
            }`}
          >
            {selectedCategory === "all" && (
              <motion.div
                layoutId="active-matrix-pill"
                className="absolute inset-0 rounded bg-accent z-0"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10">ALL (140+)</span>
          </button>
          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-[11px] whitespace-nowrap transition-colors border ${
                  isSelected
                    ? "text-[#050607] font-bold border-accent"
                    : "bg-surface/80 text-primary-muted border-surface-border hover:border-accent hover:text-primary"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-matrix-pill"
                    className="absolute inset-0 rounded bg-accent z-0"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat.code}</span>
                <span className="relative z-10">{cat.name}</span>
                <span className="relative z-10 text-[9px] opacity-70">({cat.serviceCount})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid Matrix with Layout Transitions */}
      {displayedServices.length === 0 ? (
        <div className="p-12 text-center bg-[#0A0D0E] border border-surface-border rounded font-mono text-xs text-primary-muted">
          No services matched &quot;{searchQuery}&quot;. Try adjusting your search query or reset category filter.
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {displayedServices.map((svc) => (
              <motion.div
                layout
                key={svc.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveService(svc)}
                className="group cursor-pointer p-5 bg-[#0A0D0E]/90 hover:bg-[#101415] border border-surface-border/70 hover:border-accent/70 transition-colors duration-200 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-surface-border/10 pointer-events-none group-hover:bg-accent/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-primary-muted mb-2">
                    <span className="text-accent font-semibold">
                      SYS {svc.code}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#070A0B] border border-surface-border text-[9px] uppercase truncate max-w-[150px]">
                      {svc.category}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base text-primary group-hover:text-accent transition-colors leading-snug">
                    {svc.name}
                  </h3>

                  <p className="font-mono text-xs text-primary-muted/90 mt-2 line-clamp-2 leading-relaxed">
                    {svc.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border/40 flex items-center justify-between font-mono text-[11px]">
                  <div className="flex flex-wrap gap-1">
                    {svc.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 rounded bg-surface border border-surface-border text-[9px] text-primary-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {svc.technologies.length > 2 && (
                      <span className="text-[9px] text-primary-muted self-center">
                        +{svc.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="text-tech-cyan group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-[11px]">
                    <span>EXPAND</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* View All Button if Preview */}
      {previewOnly && ALL_SERVICES.length > 12 && (
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary font-mono text-xs tracking-wider transition-colors"
          >
            <span>EXPLORE ALL 140+ SERVICES IN SERVICE MATRIX</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>
      )}

      {/* Side-Drawer Modal with AnimatePresence */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-end bg-[#050607]/80 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="w-full max-w-xl h-full bg-[#0A0D0E] border-l border-surface-border shadow-2xl overflow-y-auto p-6 sm:p-8 flex flex-col justify-between terminal-scroll"
              onClick={(e) => e.stopPropagation()}
            >

            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-accent/15 border border-accent text-accent">
                    SYS {activeService.code}
                  </span>
                  <span className="font-mono text-xs text-primary-muted uppercase">
                    {activeService.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="p-1 text-primary-muted hover:text-primary rounded hover:bg-surface-border transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="font-sans text-2xl font-extrabold text-primary">
                  {activeService.name}
                </h2>
                <p className="font-mono text-xs text-accent mt-1 leading-relaxed">
                  {activeService.tagline}
                </p>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-mono text-xs text-primary-muted uppercase tracking-wider mb-2">
                  OVERVIEW
                </h4>
                <p className="font-sans text-xs sm:text-sm text-primary-muted leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Typical Architecture */}
              <div className="p-4 rounded bg-[#101415] border border-surface-border space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-tech-cyan">
                  <Cpu className="w-4 h-4" />
                  <span>TYPICAL SYSTEM ARCHITECTURE</span>
                </div>
                <p className="font-mono text-xs text-primary-muted leading-relaxed">
                  {activeService.architecture}
                </p>
              </div>

              {/* Core Capabilities */}
              <div>
                <h4 className="font-mono text-xs text-primary-muted uppercase tracking-wider mb-2">
                  CORE CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeService.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2 font-mono text-xs text-primary p-2 rounded bg-surface/50 border border-surface-border/50"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-mono text-xs text-primary-muted uppercase tracking-wider mb-2">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-surface border border-surface-border text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="font-mono text-xs text-primary-muted uppercase tracking-wider mb-2">
                  PROVEN USE CASES
                </h4>
                <ul className="space-y-1.5 font-mono text-xs text-primary-muted">
                  {activeService.useCases.map((uc) => (
                    <li key={uc} className="flex items-start gap-2">
                      <span className="text-accent">◈</span>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics & SLA */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {activeService.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 bg-surface border border-surface-border rounded"
                  >
                    <div className="font-mono text-[10px] text-primary-muted">
                      {m.label}
                    </div>
                    <div className="font-mono text-sm font-bold text-accent mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Related Services */}
              <div>
                <h4 className="font-mono text-xs text-primary-muted uppercase tracking-wider mb-2">
                  CONNECTED SERVICES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.relatedServices.map((rel) => (
                    <span
                      key={rel}
                      className="font-mono text-[11px] px-2 py-1 rounded bg-[#070A0B] border border-surface-border text-tech-cyan"
                    >
                      {rel}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Actions */}
            <div className="pt-6 mt-6 border-t border-surface-border flex items-center gap-3">
              <Link
                href={`/contact?service=${encodeURIComponent(activeService.name)}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent hover:bg-accent-light text-[#050607] font-mono text-xs font-bold tracking-wider transition-colors"
              >
                <span>DISCUSS THIS SERVICE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="px-4 py-3 bg-surface hover:bg-surface-elevated border border-surface-border text-primary font-mono text-xs"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
};


