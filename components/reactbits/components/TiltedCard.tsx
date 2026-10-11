"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  maxAngle?: number;
  scale?: number;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = "",
  maxAngle = 8,
  scale = 1.02,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rX = -(y / (rect.height / 2)) * maxAngle;
    const rY = (x / (rect.width / 2)) * maxAngle;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className={`inline-block w-full ${className}`}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: rotateX !== 0 || rotateY !== 0 ? scale : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltedCard;
