"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Command } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // Background blur activation
    setScrolled(latest > 20);

    // Directional hide / show behavior
    if (latest > 120 && diff > 5 && !mobileMenuOpen) {
      setHidden(true);
    } else if (diff < -5 || latest <= 40) {
      setHidden(false);
    }
  });

  const navLinks = [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Services", href: "/services" },
    { label: "Agents", href: "/agents" },
    { label: "Products", href: "/products" },
    { label: "Engineering", href: "/engineering" },
    { label: "Company", href: "/company" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ type: "spring", stiffness: 350, damping: 32 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "py-3 bg-[#060708]/85 backdrop-blur-xl border-b border-surface-border shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex items-center justify-between">
            {/* Logo with micro-scale gesture */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <motion.div
                whileHover={{ rotate: 180, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative w-7 h-7 flex items-center justify-center bg-surface border border-surface-border group-hover:border-accent transition-colors"
              >
                <span className="font-mono text-accent text-xs font-bold">▲</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-sans font-bold tracking-widest text-primary text-sm sm:text-base group-hover:text-accent transition-colors uppercase">
                  AURION CONCLAVE
                </span>
              </div>
            </Link>

            {/* Center Desktop Navigation with Shared layoutId Indicators */}
            <nav
              className="hidden lg:flex items-center gap-2 p-1 rounded-full bg-surface/40 border border-surface-border/40 backdrop-blur-md"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredLink === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    className="relative font-mono text-xs tracking-wider transition-colors duration-150 px-3.5 py-1.5 rounded-full"
                  >
                    {/* Hover Pill Layout Animation */}
                    {isHovered && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full bg-surface-elevated/90 border border-surface-border z-0"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Active Route Layout Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-accent/40 via-accent to-accent/40 z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <span
                      className={`relative z-10 ${
                        isActive
                          ? "text-accent font-semibold"
                          : isHovered
                          ? "text-primary"
                          : "text-primary-muted hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Status Indicator & START A PROJECT Button */}
            <div className="hidden md:flex items-center gap-5">
              {/* Command Palette shortcut */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-surface/80 border border-surface-border hover:border-accent text-primary-muted hover:text-primary font-mono text-[10px] transition-colors"
                title="Command Palette (Ctrl+K or /)"
              >
                <Command className="w-2.5 h-2.5 text-accent" />
                <span>CMD /</span>
              </motion.button>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 font-mono text-[11px] text-primary-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span className="tracking-widest uppercase text-success font-medium">SYSTEMS ONLINE</span>
              </div>

              {/* START A PROJECT CTA with Tactile Motion */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-accent hover:bg-accent-mid text-[#060708] font-mono text-xs font-bold tracking-wider transition-colors shadow-[0_2px_18px_rgba(201,148,62,0.22)]"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Minimal Menu Toggle with Transforming Lines */}
            <div className="flex items-center gap-3 lg:hidden">
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-surface border border-surface-border text-primary focus:outline-none"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-5 h-[1.5px] bg-primary transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-[4.5px] bg-accent" : ""
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] bg-primary transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[4.5px] bg-accent" : ""
                  }`}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Navigation Overlay with Staggered Variants */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#060708]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8 lg:hidden"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                <span className="font-mono text-xs text-accent tracking-widest uppercase">
                  AURION CONCLAVE
                </span>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-success">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                  },
                }}
                className="flex flex-col space-y-4"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-sans text-2xl font-bold tracking-tight text-primary hover:text-accent transition-colors py-2 border-b border-surface-border/40 flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-accent/60" />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-surface-border">
              <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-accent text-[#060708] font-mono text-xs font-bold tracking-wider uppercase"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <div className="flex items-center justify-between font-mono text-[10px] text-primary-muted">
                <span>AURION CONCLAVE © 2026</span>
                <span className="text-tech-teal">SOVEREIGN TECH</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

