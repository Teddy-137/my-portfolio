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

      {/* Subtle moving stars/particles using CSS */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              size: Math.random() * 2 + 1
            }}
            animate={{
              y: [null, "-10%"],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
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
