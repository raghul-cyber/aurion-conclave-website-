"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "subtle";
  external?: boolean;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  const baseStyles =
    "inline-flex items-center gap-3 px-6 py-3.5 font-mono text-xs font-semibold tracking-wider transition-colors duration-200 select-none";

  const variantStyles = isPrimary
    ? "bg-accent hover:bg-accent-mid text-[#060708] shadow-[0_2px_24px_rgba(201,148,62,0.22)]"
    : isSecondary
    ? "bg-surface hover:bg-surface-elevated border border-surface-border hover:border-accent text-primary"
    : "text-primary hover:text-accent border-b border-surface-border hover:border-accent pb-1";

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        <span>{children}</span>
        {external ? (
          <ArrowUpRight className="w-3.5 h-3.5" />
        ) : (
          <ArrowRight className="w-3.5 h-3.5" />
        )}
      </Link>
    </motion.div>
  );
};
