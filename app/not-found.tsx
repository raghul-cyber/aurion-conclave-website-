import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Cpu, Layers } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#111415] via-[#0b0e0f] to-[#060708] flex items-center justify-center p-6 sm:p-12 overflow-hidden">
      {/* Spectral Drape Background from React Bits Pro */}
      <SpectralDrape opacity={0.85} />

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
        <SpotlightCard
          spotlightColor="rgba(195, 145, 66, 0.25)"
          className="p-8 sm:p-12 border border-surface-border bg-[#0d1011]/90 shadow-2xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/15 border border-accent/40 font-mono text-xs text-accent uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>ERROR 404 // ROUTE NOT FOUND</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary">
            Coordinate <span className="text-accent">Unreachable.</span>
          </h1>

          <p className="font-sans text-base text-primary-muted max-w-md mx-auto leading-relaxed">
            The requested trajectory does not correspond to an active sovereign system, service matrix, or autonomous agent interface.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left">
            <Link
              href="/"
              className="p-4 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent transition-colors flex flex-col gap-1 rounded-sm group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent font-bold">HOME</span>
                <Compass className="w-3.5 h-3.5 text-accent group-hover:rotate-45 transition-transform" />
              </div>
              <span className="text-[11px] text-primary-muted">Executive intro & dual-engine</span>
            </Link>

            <Link
              href="/services"
              className="p-4 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent transition-colors flex flex-col gap-1 rounded-sm group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent font-bold">SERVICES</span>
                <Layers className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[11px] text-primary-muted">164 sovereign capabilities</span>
            </Link>

            <Link
              href="/agents"
              className="p-4 bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent transition-colors flex flex-col gap-1 rounded-sm group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent font-bold">AGENT LAB</span>
                <Cpu className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[11px] text-primary-muted">12 live autonomous systems</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-surface-border/60 flex justify-center">
            <Link href="/">
              <SpecularButton variant="primary">
                <ArrowLeft className="w-4 h-4" />
                <span>RETURN TO GROUND TRUTH</span>
              </SpecularButton>
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
