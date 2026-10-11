"use client";

import React, { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { ScrollProgressIndicator } from "@/components/framer/ScrollProgressIndicator";

export const ClientShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setCommandPaletteOpen(true);
    window.addEventListener("open-command-palette", handleOpen);
    return () => window.removeEventListener("open-command-palette", handleOpen);
  }, []);

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        type: "spring",
        bounce: 0.15,
        visualDuration: 0.35,
      }}
    >
      <ScrollProgressIndicator />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </MotionConfig>
  );
};

