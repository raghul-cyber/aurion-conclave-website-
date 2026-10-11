"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, type Transition } from "framer-motion";

export type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

export const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 30,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.05,
  rootMargin = "50px",
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Immediate fallback ensures text is NEVER invisible if observer is delayed
    const timer = setTimeout(() => {
      setInView(true);
    }, 80);

    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(8px)", opacity: 0, y: -16 }
        : { filter: "blur(8px)", opacity: 0, y: 16 },
    [direction]
  );

  const defaultTo = useMemo(
    () => ({ filter: "blur(0px)", opacity: 1, y: 0 }),
    []
  );

  return (
    <p ref={ref} className={`blur-text ${className} inline-flex flex-wrap`}>
      {elements.map((segment, index) => {
        const spanTransition: Transition = {
          duration: stepDuration,
          delay: (index * delay) / 1000,
          ease: [0.16, 1, 0.3, 1],
        };

        return (
          <motion.span
            key={index}
            initial={defaultFrom}
            animate={inView ? defaultTo : defaultFrom}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
