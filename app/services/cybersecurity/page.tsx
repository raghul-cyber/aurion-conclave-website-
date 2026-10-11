import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Lock, Eye, KeyRound } from "lucide-react";
import { AmbientBackground } from "@/components/framer/AmbientBackground";
import { TechnicalGrid } from "@/components/framer/TechnicalGrid";

export const metadata: Metadata = {
  title: "Zero-Trust Cybersecurity & Cryptographic Architecture | Aurion Conclave",
  description:
    "Zero-trust network architecture, eBPF security telemetry, cryptographic mTLS identity, RFC 8693 token exchange, and continuous compliance automation.",
};

const SECURITY_PILLARS = [
  {
    name: "APPLICATION SECURITY",
    desc: "Rigorous threat modeling, static/dynamic code analysis (SAST/DAST), dependency software bill of materials (SBOM), and memory-safe implementations.",
    tech: ["Rust", "OWASP ASVS", "Semgrep", "Cargo Audit"],
  },
  {
    name: "API SECURITY",
    desc: "Cryptographic request signature validation, schema payload enforcement, distributed rate-limiting, and protection against Broken Object Level Authorization (BOLA).",
    tech: ["OpenAPI Validation", "mTLS 1.3", "Rate-Limiting", "OAuth2 Proof Key"],
  },
  {
    name: "CLOUD SECURITY",
    desc: "Immutable cloud baseline policies, automated least-privilege IAM pruning, KMS envelope encryption, and private VPC peering topologies.",
    tech: ["AWS KMS", "HashiCorp Vault", "Azure Key Vault", "GCP Cloud KMS"],
  },
  {
    name: "AUTHENTICATION & IDENTITY",
    desc: "Enterprise SAML 2.0 / OIDC integrations, WebAuthn FIDO2 biometric authentication, and passwordless cryptographic session verification.",
    tech: ["FIDO2 / WebAuthn", "Okta / Azure AD", "OIDC", "RFC 8693 Token Exchange"],
  },
  {
    name: "AUTHORIZATION & ACCESS CONTROL",
    desc: "Fine-grained policy-as-code enforcement evaluating user attributes, environmental context, and tenant boundaries at the database proxy layer.",
    tech: ["Open Policy Agent (OPA)", "PostgreSQL RLS", "Cedar", "ABAC / RBAC"],
  },
  {
    name: "SECURITY MONITORING & EBPF",
    desc: "Kernel-level visibility into every syscall, network socket opening, and process fork across Kubernetes pods with zero agent overhead.",
    tech: ["Tetragon", "Cilium", "eBPF", "Prometheus Alerts"],
  },
  {
    name: "SECURITY AUTOMATION",
    desc: "Automated vulnerability remediation, ephemeral credential rotation, and continuous adversarial penetration testing pipelines.",
    tech: ["Automated Secret Rotation", "CI/CD Security Gates", "Ephemeral Tokens"],
  },
  {
    name: "COMPLIANCE TECHNOLOGY",
    desc: "Continuous automated evidence collection for SOC 2 Type II, ISO/IEC 27001, HIPAA, and GDPR compliance audits.",
    tech: ["SOC 2 Framework", "ISO 27001", "Vanta Integration", "Encrypted Evidence Vault"],
  },
];

export default function CybersecurityServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#060708] overflow-hidden">
      {/* Background: Extremely Subtle Secure Network Topology (No hacker imagery, no skulls, no cyberpunk) */}
      <AmbientBackground variant="security" />
      <TechnicalGrid crosshairs={true} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">CYBERSECURITY</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 luxury-glass border border-surface-border font-mono text-[11px] text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>ZERO-TRUST ARCHITECTURE • MATHEMATICAL ATTESTATION</span>
          </div>

          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95]">
            BUILD <br />
            SYSTEMS <br />
            THAT <br />
            <span className="text-accent">CAN BE TRUSTED.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-primary-muted max-w-2xl leading-relaxed font-normal">
            Security is not an afterthought layer or a compliance badge. We engineer cryptographic zero-trust architectures
            where every workload, API call, and memory region is continuously verified.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>DISCIPLINE SPECIFICATIONS</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary mb-12">
            THE 8 DEFENSE TIERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.name}
                className="p-8 luxury-glass border border-surface-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border/50 font-mono text-xs text-accent">
                    <span>TIER // 0{idx + 1}</span>
                    <ShieldCheck className="w-4 h-4 text-tech-teal" />
                  </div>

                  <h3 className="font-sans font-bold text-lg text-primary">
                    {pillar.name}
                  </h3>

                  <p className="font-sans text-xs text-primary-muted mt-3 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/40 flex flex-wrap gap-1.5">
                  {pillar.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-surface border border-surface-border font-mono text-[9px] text-tech-teal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Advisory Callout */}
        <div className="p-8 sm:p-12 luxury-glass border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-accent tracking-widest uppercase">
              ENTERPRISE SECURITY AUDIT
            </div>
            <h3 className="font-sans text-2xl font-bold text-primary">
              Subject your architecture to rigorous zero-trust verification.
            </h3>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(201,148,62,0.2)] shrink-0"
          >
            <span>COMMENCE SECURITY AUDIT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
