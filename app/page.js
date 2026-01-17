"use client";
import React from "react";
import { motion } from "framer-motion";
import ThemeProvider from "../components/ThemeProvider";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Dock from "../components/Dock";
const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030014]">
      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #8b5cf6 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #1e1b4b 0%, transparent 100%)
          `,
          filter: 'blur(80px)',
        }}
      />

      {/* Subtle moving math symbols */}
      <div className="absolute inset-0">
        {['+', '×', '∫', '√', '∆', 'π', 'Σ', '∞'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 font-serif pointer-events-none select-none"
            initial={{
              x: (i * 15) % 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, "-20%"],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
            style={{
              fontSize: `${Math.random() * 1.5 + 1}rem`,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <div className="text-gray-200 font-sans">
        <Background />
        <div className="relative z-10">
          <ScrollProgress />
          <main>
            <Hero />
            <About />
            <Portfolio />
            <Awards />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
          <Dock />
        </div>
      </div>
    </ThemeProvider>
  );
}
