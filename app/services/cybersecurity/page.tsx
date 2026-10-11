import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { SpectralDrape } from "@/components/reactbits/backgrounds/SpectralDrape";
import { GlyphOrb } from "@/components/reactbits/components/GlyphOrb";
import { SpotlightCard } from "@/components/reactbits/components/SpotlightCard";
import { SpecularButton } from "@/components/reactbits/components/SpecularButton";

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
    <div className="relative min-h-screen bg-gradient-to-b from-[#111415] via-[#0b0e0f] to-[#060708] overflow-hidden">
      {/* Spectral Drape Background from React Bits Pro */}
      <SpectralDrape opacity={0.85} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted mb-8">
          <Link href="/services" className="hover:text-accent transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-accent">CYBERSECURITY</span>
        </div>

        {/* Hero Header with Clamped Typography and GlyphOrb */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full luxury-glass border border-white/10 font-mono text-[11px] text-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>CRYPTOGRAPHIC DEFENSE • ZERO-TRUST ARCHITECTURE</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
              DEFENSE THROUGH <br />
              <span className="text-accent">MATHEMATICAL PROOF.</span>
            </h1>

            <p className="font-sans text-sm sm:text-base text-primary-muted max-w-xl leading-relaxed font-normal">
              We build zero-trust security postures based on cryptographic identity, kernel-level eBPF observability,
              and continuous policy verification. No fear-based marketing — only rigorous, verifiable defensive engineering.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="p-4 rounded-2xl luxury-glass border border-white/10 shadow-2xl flex flex-col items-center">
              <GlyphOrb
                size={200}
                color="#648E8B"
                glowColor="#D9B874"
                draggable={true}
              />
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>SECURITY DISCIPLINES</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary mb-10">
            ZERO-TRUST ARCHITECTURE TOPOLOGY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_PILLARS.map((item, idx) => (
              <SpotlightCard
                key={item.name}
                theme="dark"
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-xs text-accent">
                    <span>PILLAR // 0{idx + 1}</span>
                    <ShieldCheck className="w-4 h-4 text-tech-teal" />
                  </div>

                  <h3 className="font-sans font-bold text-base text-primary mb-2">
                    {item.name}
                  </h3>

                  <p className="font-sans text-xs text-primary-muted leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1 mt-4">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] text-accent/80 px-1.5 py-0.5 rounded bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl luxury-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-accent tracking-widest uppercase block">
              ZERO-TRUST ARCHITECTURE AUDIT
            </span>
            <h3 className="font-sans text-xl font-bold text-primary">
              Ready to verify your application and cloud security against zero-trust standards?
            </h3>
          </div>

          <Link href="/contact">
            <SpecularButton variant="primary">
              <span>ENGAGE SECURITY POD</span>
              <ArrowUpRight className="w-4 h-4" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
