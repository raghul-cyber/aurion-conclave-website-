import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ALL_SERVICES } from "@/data/services";
import { MosaicWaves } from "@/components/reactbits/backgrounds/MosaicWaves";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, Clock } from "lucide-react";

export async function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({ slug: s.id }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = ALL_SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-16 bg-gradient-to-b from-[#111415] via-[#0b0e0f] to-[#060708] overflow-hidden">
      {/* Background Mosaic Waves from React Bits Pro */}
      <MosaicWaves opacity={0.85} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs text-primary-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SERVICE MATRIX</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 pb-8 border-b border-surface-border">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 bg-accent/20 border border-accent text-accent">
              SYS {service.code}
            </span>
            <span className="font-mono text-xs text-tech-cyan uppercase">
              {service.category}
            </span>
          </div>

          <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
            {service.name}
          </h1>

          <p className="font-mono text-sm sm:text-base text-accent max-w-3xl leading-relaxed">
            {service.tagline}
          </p>

          <p className="font-sans text-base text-primary-muted leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>

        {/* Architecture & Delivery Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpotlightCard
            spotlightColor="rgba(100, 142, 139, 0.25)"
            intensity={0.25}
            className="p-6 bg-[#0A0D0E]/90 border border-surface-border space-y-3 rounded-sm"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-tech-cyan">
              <Cpu className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE TOPOLOGY</span>
            </div>
            <p className="font-mono text-xs text-primary leading-relaxed">
              {service.architecture}
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(195, 145, 66, 0.25)"
            intensity={0.25}
            className="p-6 bg-[#0A0D0E]/90 border border-surface-border space-y-3 rounded-sm"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-accent">
              <Clock className="w-4 h-4" />
              <span>DELIVERY MODEL & CADENCE</span>
            </div>
            <p className="font-mono text-xs text-primary leading-relaxed">
              {service.deliveryModel}
            </p>
          </SpotlightCard>
        </div>

        {/* Core Capabilities */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-accent tracking-widest uppercase">
            SPECIFIED SYSTEM CAPABILITIES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-3 p-4 bg-[#0A0D0E]/90 border border-surface-border text-xs font-mono text-primary"
              >
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div>
            <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
              INSTRUMENTED TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1.5 rounded bg-[#101415] border border-surface-border text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
              GUARANTEED SYSTEM BENCHMARKS
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {service.metrics.map((m) => (
                <div key={m.label} className="p-3 bg-[#0A0D0E]/90 border border-surface-border rounded">
                  <div className="font-mono text-[10px] text-primary-muted">{m.label}</div>
                  <div className="font-mono text-sm font-bold text-accent mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-accent tracking-widest uppercase">
            PROVEN ENTERPRISE DEPLOYMENTS
          </h3>
          <div className="space-y-2">
            {service.useCases.map((uc) => (
              <div
                key={uc}
                className="p-4 bg-[#0A0D0E]/90 border border-surface-border font-mono text-xs text-primary-muted flex items-start gap-3"
              >
                <span className="text-accent mt-0.5">◈</span>
                <span className="text-primary">{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 bg-[#101415]/90 border border-accent/40 rounded flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(201,148,62,0.08)]">
          <div>
            <h4 className="font-sans text-xl font-bold text-primary">
              Ready to architect this system?
            </h4>
            <p className="font-mono text-xs text-primary-muted mt-1">
              Initialize an intake brief with our Principal Systems Architect.
            </p>
          </div>

          <Link
            href={`/contact?service=${encodeURIComponent(service.name)}`}
            className="shrink-0"
          >
            <SpecularButton variant="primary">
              <span>DISCUSS THIS SPECIFICATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
