"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Menu, X, ArrowUpRight, Terminal, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "01 / CAPABILITIES", href: "/capabilities" },
    { label: "02 / SERVICES", href: "/services" },
    { label: "03 / AGENTS", href: "/agents" },
    { label: "04 / PRODUCTS", href: "/products" },
    { label: "05 / INDUSTRIES", href: "/industries" },
    { label: "06 / COMPANY", href: "/company" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2.5 bg-[#050607]/85 backdrop-blur-xl border-b border-[#1A2020]/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <div className="relative w-8 h-8 flex items-center justify-center bg-surface border border-surface-border group-hover:border-accent transition-colors">
                <span className="font-mono text-accent text-sm font-bold">▲</span>
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-tech-cyan rounded-full animate-ping opacity-75" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold tracking-widest text-primary text-sm sm:text-base group-hover:text-accent transition-colors uppercase">
                  Aurion Conclave
                </span>
                <span className="font-mono text-[9px] tracking-wider text-primary-muted -mt-0.5 uppercase hidden sm:block">
                  Tech Products • Consultancy
                </span>
              </div>
            </Link>

            {/* Center Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-mono text-xs tracking-wider transition-all duration-200 py-1 border-b ${
                      isActive
                        ? "text-accent border-accent"
                        : "text-primary-muted hover:text-primary border-transparent hover:border-surface-border"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Command shortcut, System Status & CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Command Palette trigger */}
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-surface/80 border border-surface-border hover:border-accent text-primary-muted hover:text-primary font-mono text-[11px] transition-colors"
                title="Press / or Ctrl+K to search command palette"
              >
                <Command className="w-3 h-3 text-accent" />
                <span>CMD</span>
                <kbd className="px-1 py-0.2 bg-[#070A0B] border border-surface-border text-[10px] text-accent">
                  /
                </kbd>
              </button>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface/60 border border-surface-border font-mono text-[10px] text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span className="tracking-widest">SYSTEMS ONLINE</span>
              </div>

              {/* Start Project CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light text-[#050607] font-mono text-xs font-semibold tracking-wider transition-all duration-200 amber-glow hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="p-2 bg-surface border border-surface-border text-primary-muted"
                aria-label="Open search command palette"
              >
                <Command className="w-4 h-4 text-accent" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-surface border border-surface-border text-primary"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Command Center Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050607]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-surface-border">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                AURION COMMAND CONSOLE
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span>ALL CLUSTERS ACTIVE</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-base tracking-wider text-primary hover:text-accent transition-colors py-2 border-b border-surface-border/40 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-accent/60" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-surface-border">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent text-[#050607] font-mono text-xs font-bold tracking-wider"
            >
              <span>INITIALIZE PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-between font-mono text-[10px] text-primary-muted">
              <span>AURION CONCLAVE © 2026</span>
              <span className="text-tech-cyan">V 3.4.0 CORE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
