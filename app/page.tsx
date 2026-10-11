import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Layers,
  Shield,
  Activity,
  Terminal,
  Box,
  CheckCircle2,
  Database,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { HeroNetwork } from "@/components/HeroNetwork";
import { TechnicalMarquee } from "@/components/TechnicalMarquee";
import { DualEngineDiagram } from "@/components/DualEngineDiagram";
import { AgentLabConsole } from "@/components/AgentLabConsole";
import { AgentFilmScroll } from "@/components/AgentFilmScroll";
import { WatchSystemsThink } from "@/components/WatchSystemsThink";
import { ServiceMatrix } from "@/components/ServiceMatrix";
import { TechConstellation } from "@/components/TechConstellation";
import { ConsultancyProcessTimeline } from "@/components/ConsultancyProcessTimeline";
import { ProductEngineMechanism } from "@/components/ProductEngineMechanism";
import { ProjectIntakeTerminal } from "@/components/ProjectIntakeTerminal";
import { PRODUCTS } from "@/data/products";
import { INDUSTRIES } from "@/data/industries";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* -------------------------------------------------- */}
      {/* 01 / HERO SECTION */}
      {/* -------------------------------------------------- */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center border-b border-surface-border overflow-hidden tech-grid-bg">
        {/* Subtle radial ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tech-cyan/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-6 space-y-6 z-10">
              {/* Technical Identifier */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-surface-border font-mono text-[11px] text-accent tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>AURION CONCLAVE / TECHNOLOGY SYSTEMS 2026</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-[1.04]">
                WE BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-primary">
                  TECHNOLOGY
                </span> <br />
                THAT WORKS IN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-muted to-tech-cyan">
                  THE REAL WORLD.
                </span>
              </h1>

              {/* Subheading */}
              <p className="font-sans text-base sm:text-lg text-primary-muted leading-relaxed max-w-xl">
                Aurion Conclave combines software engineering, artificial intelligence,
                cloud infrastructure, automation and applied research to build
                technology systems, proprietary products and intelligent solutions for organizations.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2.5 px-6 py-3.5 bg-accent hover:bg-accent-light text-[#050607] font-mono text-xs font-bold tracking-wider transition-all duration-200 amber-glow hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>WORK WITH AURION</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/capabilities"
                  className="group flex items-center gap-2 px-6 py-3.5 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary font-mono text-xs tracking-wider transition-colors"
                >
                  <span>EXPLORE CAPABILITIES</span>
                  <ArrowUpRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Micro Telemetry Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-surface-border/60 font-mono text-[11px]">
                <div className="p-2.5 bg-surface/50 border border-surface-border/50 rounded">
                  <div className="text-accent font-bold">140+</div>
                  <div className="text-primary-muted text-[10px]">SERVICES</div>
                </div>
                <div className="p-2.5 bg-surface/50 border border-surface-border/50 rounded">
                  <div className="text-tech-cyan font-bold">12 AGENTS</div>
                  <div className="text-primary-muted text-[10px]">WORKING LAB</div>
                </div>
                <div className="p-2.5 bg-surface/50 border border-surface-border/50 rounded">
                  <div className="text-success font-bold">99.99%</div>
                  <div className="text-primary-muted text-[10px]">UPTIME SLA</div>
                </div>
                <div className="p-2.5 bg-surface/50 border border-surface-border/50 rounded">
                  <div className="text-primary font-bold">ZERO-DEBT</div>
                  <div className="text-primary-muted text-[10px]">VENTURE ENGINE</div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Interactive Aurion Intelligence Network */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <HeroNetwork />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* 02 / CONTINUOUS TECHNICAL MARQUEE */}
      {/* -------------------------------------------------- */}
      <TechnicalMarquee />

      {/* -------------------------------------------------- */}
      {/* 03 / WHAT AURION IS: DUAL-WING ENGINE */}
      {/* -------------------------------------------------- */}
      <DualEngineDiagram />

      {/* -------------------------------------------------- */}
      {/* 04 / THE SIGNATURE SECTION: THE AURION AGENT LAB */}
      {/* -------------------------------------------------- */}
      <section className="relative py-24 bg-[#050607] border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
              <span>AURION / COGNITIVE SYSTEMS</span>
              <span>•</span>
              <span className="text-tech-cyan">WORKING BROWSER AGENTS</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
              MEET THE SYSTEMS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-tech-cyan to-primary">
                BEFORE WE BUILD YOURS.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-primary-muted mt-4 leading-relaxed">
              Explore working demonstrations of the intelligent systems Aurion Conclave can design and deploy.
              Every agent below runs live cognitive loops with simulated tool calls, document analysis,
              code refactoring, or SQL synthesis in real time.
            </p>
          </div>

          {/* Interactive Agent Lab Console */}
          <AgentLabConsole />
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* 05 / AGENT PREVIEW FILM (OS HORIZONTAL SCROLL) */}
      {/* -------------------------------------------------- */}
      <AgentFilmScroll />

      {/* -------------------------------------------------- */}
      {/* 06 / WATCH THE SYSTEMS THINK */}
      {/* -------------------------------------------------- */}
      <WatchSystemsThink />

      {/* -------------------------------------------------- */}
      {/* 07 / SERVICES MATRIX (140+ SERVICES) */}
      {/* -------------------------------------------------- */}
      <section className="relative py-24 bg-[#070A0B] border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
              <span>AURION / COMPLETE SERVICE CATALOG</span>
              <span>•</span>
              <span className="text-tech-cyan">16 CATEGORIES</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
              100+ WAYS TO BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-primary">
                WITH TECHNOLOGY.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-primary-muted mt-4 leading-relaxed">
              A single technology partner across software engineering, AI agents, machine learning,
              cloud infrastructure, data systems, and enterprise automation. Explore our comprehensive matrix below.
            </p>
          </div>

          <ServiceMatrix previewOnly={true} />
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* 08 / PROPRIETARY PRODUCTS (BUILT FROM REAL PROBLEMS) */}
      {/* -------------------------------------------------- */}
      <section className="relative py-24 bg-[#050607] border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-surface-border">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
                <span>AURION / PROPRIETARY SOFTWARE</span>
                <span>•</span>
                <span className="text-tech-cyan">INCUBATED ASSETS</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
                BUILT FROM REAL PROBLEMS.
              </h2>

              <p className="font-sans text-sm sm:text-base text-primary-muted mt-4 max-w-xl leading-relaxed">
                Aurion Conclave has a disciplined product-development philosophy: client problems provide practical
                industry exposure, while validated opportunities become proprietary software assets.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary font-mono text-xs tracking-wider transition-colors shrink-0"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 6).map((prod) => (
              <div
                key={prod.id}
                className="group p-6 bg-[#0A0D0E] border border-surface-border hover:border-accent transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-primary-muted mb-3">
                    <span className="text-accent font-bold">{prod.code}</span>
                    <span className="px-2 py-0.5 rounded bg-surface border border-surface-border text-tech-cyan uppercase">
                      {prod.statusLabel}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-primary group-hover:text-accent transition-colors">
                    {prod.name}
                  </h3>
                  <div className="font-mono text-xs text-accent mt-0.5">{prod.category}</div>

                  <p className="font-sans text-xs text-primary-muted mt-3 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/50 space-y-3 font-mono text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {prod.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-surface border border-surface-border text-[10px] text-primary-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-primary-muted pt-1">
                    <span>{prod.metrics[0].label}:</span>
                    <span className="text-accent font-bold">{prod.metrics[0].value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* 09 / TECH STACK CONSTELLATION */}
      {/* -------------------------------------------------- */}
      <TechConstellation />

      {/* -------------------------------------------------- */}
      {/* 10 / REAL-WORLD INDUSTRIES */}
      {/* -------------------------------------------------- */}
      <section className="relative py-24 bg-[#070A0B] border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-surface-border">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
                <span>AURION / DOMAIN REACH</span>
                <span>•</span>
                <span className="text-tech-cyan">12 SECTORS</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
                ENGINEERING FOR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-primary">
                  REAL-WORLD SYSTEMS.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-primary-muted mt-4 max-w-xl leading-relaxed">
                From high-frequency financial settlement ledgers and clinical trial compliance to cold-chain logistics
                and factory computer vision, our systems are engineered for harsh, complex environments.
              </p>
            </div>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary font-mono text-xs tracking-wider transition-colors shrink-0"
            >
              <span>EXPLORE ALL 12 VERTICALS</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.slice(0, 8).map((ind) => (
              <div
                key={ind.id}
                className="p-5 bg-[#0A0D0E] border border-surface-border hover:border-accent transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-[10px] text-accent font-bold mb-2">
                    {ind.code}
                  </div>
                  <h3 className="font-sans font-bold text-base text-primary">
                    {ind.name}
                  </h3>
                  <p className="font-sans text-xs text-primary-muted mt-2 leading-relaxed">
                    {ind.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border/40 font-mono text-[11px] text-tech-cyan">
                  {ind.caseSnippet}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* 11 / CONSULTANCY METHODOLOGY & DELIVERY PROCESS */}
      {/* -------------------------------------------------- */}
      <ConsultancyProcessTimeline />

      {/* -------------------------------------------------- */}
      {/* 12 / R&D PRODUCT ENGINE MECHANISM */}
      {/* -------------------------------------------------- */}
      <ProductEngineMechanism />

      {/* -------------------------------------------------- */}
      {/* 13 / PROJECT INTAKE TERMINAL */}
      {/* -------------------------------------------------- */}
      <ProjectIntakeTerminal />
    </div>
  );
}
