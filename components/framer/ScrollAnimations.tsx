"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  animate,
  Variants,
} from "framer-motion";

/**
 * -----------------------------------------------------------------------------
 * 1. SCROLL REVEAL
 * Single element or block entrance animation triggered when entering viewport.
 * -----------------------------------------------------------------------------
 */
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  distance = 30,
  duration = 0.7,
  delay = 0,
  once = true,
  className = "",
  threshold = 0.15,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom luxury easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * -----------------------------------------------------------------------------
 * 2. SCROLL STAGGER CONTAINER & ITEMS
 * Parent container that orchestrates sequential appearance of child items.
 * -----------------------------------------------------------------------------
 */
interface ScrollStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay: number; delayChildren: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delayChildren,
    },
  }),
};

export const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.1,
  once = true,
  className = "",
  threshold = 0.1,
}) => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      custom={{ staggerDelay, delayChildren }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStaggerItemProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ScrollStaggerItem: React.FC<ScrollStaggerItemProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * -----------------------------------------------------------------------------
 * 3. SCROLL PARALLAX
 * Moves element at a different speed relative to scroll position.
 * -----------------------------------------------------------------------------
 */
interface ScrollParallaxProps {
  children: React.ReactNode;
  speed?: number; // e.g. -40 (slower/counter) to +40 (faster)
  className?: string;
}

export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  speed = 40,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
  const smoothY = useSpring(y, { stiffness: 120, damping: 25 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: smoothY }}>{children}</motion.div>
    </div>
  );
};

/**
 * -----------------------------------------------------------------------------
 * 4. ANIMATED COUNTER / STATISTIC
 * Smoothly interpolates a number from 0 to value when scrolled into view.
 * -----------------------------------------------------------------------------
 */
interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 1.8,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;

    const count = { val: from };
    const controls = animate(count.val, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (nodeRef.current) {
          nodeRef.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, prefix, suffix, decimals]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {from.toFixed(decimals)}
      {suffix}
    </span>
  );
};

/**
 * -----------------------------------------------------------------------------
 * 5. HOVER LIFT & CARD PHYSICS
 * Tactile micro-interaction with lift, border accentuation and tap scale.
 * -----------------------------------------------------------------------------
 */
interface HoverLiftProps {
  children: React.ReactNode;
  lift?: number;
  y?: number;
  scale?: number;
  className?: string;
  onClick?: () => void;
}

export const HoverLift: React.FC<HoverLiftProps> = ({
  children,
  lift,
  y = -4,
  scale = 1.01,
  className = "",
  onClick,
}) => {
  const finalY = lift !== undefined ? lift : y;
  return (
    <motion.div
      whileHover={{
        y: finalY,
        scale,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: "spring", stiffness: 500, damping: 30 },
      }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * -----------------------------------------------------------------------------
 * 6. SVG DRAW PATH
 * Draws an SVG path stroke with progress on in-view or scroll.
 * -----------------------------------------------------------------------------
 */
interface SvgDrawPathProps {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const SvgDrawPath: React.FC<SvgDrawPathProps> = ({
  d,
  stroke = "#C9943E",
  strokeWidth = 1.5,
  duration = 1.5,
  delay = 0.2,
  className = "",
}) => {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        pathLength: { duration, delay, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.3, delay },
      }}
      className={className}
    />
  );
};
