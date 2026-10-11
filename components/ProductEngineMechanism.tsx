"use client";

import React, { useState } from "react";
import { PRODUCT_ENGINE_STEPS } from "@/data/process";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/framer/ScrollAnimations";

export const ProductEngineMechanism: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = PRODUCT_ENGINE_STEPS[activeStepIndex];

  return (
    <section className="relative py-24 bg-[#050607] border-b border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={24}>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>AURION / PROPRIETARY R&D</span>
              <span>•</span>
              <span className="text-tech-cyan">CIRCULAR INCUBATION</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
              WE DO NOT JUST DELIVER PROJECTS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan via-accent-light to-accent">
                WE TURN PROBLEMS INTO PRODUCTS.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-primary-muted mt-4 leading-relaxed">
              When we identify recurring friction across enterprise client engagements, our Applied R&D pod
              abstracts the mathematical and architectural core into reusable, defensible proprietary IP.
            </p>
          </div>
        </ScrollReveal>

        {/* Circular Wheel / Stage Navigation with Shared layoutId */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 6-Stage Circular Wheel / Stepper with layoutId pill */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
            {PRODUCT_ENGINE_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <motion.div
                  key={step.step}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer p-4 rounded-sm transition-colors duration-200 border relative flex flex-col justify-between ${
                    isActive
                      ? "bg-[#101415] border-accent"
                      : "bg-[#0A0D0E] border-surface-border hover:border-surface-border hover:bg-surface/50"
                  }`}
                >
                  {/* Shared layoutId highlight glow */}
                  {isActive && (
                    <motion.div
                      layoutId="product-step-glow"
                      className="absolute inset-0 bg-accent/10 border border-accent rounded-sm shadow-[0_0_24px_rgba(201,148,62,0.25)] pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between pb-2">
                    <span
                      className={`font-mono text-xs font-extrabold ${
                        isActive ? "text-accent" : "text-primary-muted"
                      }`}
                    >
                      {step.step}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-accent animate-ping" : "bg-surface-border"
                      }`}
                    />
                  </div>
                  <div className="relative z-10">
                    <h4
                      className={`font-mono text-xs font-bold uppercase ${
                        isActive ? "text-primary" : "text-primary-muted"
                      }`}
                    >
                      {step.name}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Active Stage Focus Console with AnimatePresence */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-[#0A0D0E] border border-surface-border shadow-2xl relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 bg-tech-cyan/20 border border-tech-cyan text-tech-cyan">
                      STAGE {activeStep.step} / 06
                    </span>
                    <span className="font-mono text-xs text-primary font-bold tracking-wider uppercase">
                      {activeStep.name}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-accent">
                    CIRCULAR R&D PIPELINE
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-primary">
                    {activeStep.tagline}
                  </h3>
                  <p className="font-sans text-sm text-primary-muted leading-relaxed">
                    {activeStep.description}
                  </p>
                </div>

                <div className="p-4 bg-[#050607] border border-surface-border rounded-sm flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="text-accent font-bold">TANGIBLE MILESTONE:</span>
                    <span className="text-primary-muted">{activeStep.output}</span>
                  </div>
                  <span className="text-success text-[11px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span>VERIFIED GATE</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

