"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ServiceRowItem {
  number: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  slug: string;
  stat?: string;
  category: string;
}

interface ServiceRowProps {
  item: ServiceRowItem;
  index: number;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-surface-border transition-colors duration-300 hover:border-accent/40"
    >
      <Link href={item.slug} className="block py-8 sm:py-10 px-4 sm:px-6">
        <motion.div layout="position" className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left: Number and Title */}
          <div className="flex items-start sm:items-center gap-6 sm:gap-10">
            <span className="font-mono text-sm sm:text-base text-accent font-semibold tracking-widest pt-1 sm:pt-0">
              {item.number}
            </span>

            <div>
              <motion.h2
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight group-hover:text-accent transition-colors duration-300"
              >
                {item.title}
              </motion.h2>
              <div className="font-mono text-[11px] text-primary-muted tracking-wider uppercase mt-1">
                {item.category}
              </div>
            </div>
          </div>

          {/* Right: Quick stats & Action arrow */}
          <div className="flex items-center gap-6 self-end lg:self-auto">
            {item.stat && (
              <span className="hidden sm:inline-block font-mono text-xs text-primary-muted group-hover:text-primary transition-colors">
                {item.stat}
              </span>
            )}
            <motion.div
              whileHover={{ scale: 1.15, rotate: -45 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-10 h-10 rounded-full border border-surface-border group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-300"
            >
              <ArrowRight className="w-4 h-4 text-primary-muted group-hover:text-accent transition-colors" />
            </motion.div>
          </div>
        </motion.div>

        {/* Expanding Content on Hover with layout transition */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-4 border-t border-surface-border/40 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <p className="md:col-span-8 font-sans text-sm sm:text-base text-primary-muted leading-relaxed">
                  {item.shortDescription}
                </p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="md:col-span-4 flex flex-wrap gap-2 md:justify-end"
                >
                  {item.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={{
                        hidden: { opacity: 0, y: 6 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="px-2.5 py-1 bg-surface-elevated border border-surface-border font-mono text-[10px] text-accent tracking-wider"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
};

