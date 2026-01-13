"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.15)",
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.3);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-700/50 bg-neutral-900/40 backdrop-blur-md overflow-hidden p-8 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        scale: 1.01,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
        borderColor: "rgba(139, 92, 246, 0.3)"
      }}
      animate={{
        borderColor: isHovered ? "rgba(139, 92, 246, 0.3)" : "rgba(38, 38, 38, 0.5)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

      {/* Spotlight Effect - Moved Behind Content */}
      <motion.div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out z-0"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
        animate={{
          background: isHovered
            ? `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.1), transparent 80%)`
            : `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content Layer */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
