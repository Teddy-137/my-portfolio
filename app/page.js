"use client";
import React from "react";
import ThemeProvider from "../components/ThemeProvider";
import Prism from "../components/prism";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Dock from "../components/Dock";

export default function App() {
  return (
    <ThemeProvider>
      <div className="text-gray-200 font-sans">
        <div style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          background: 'transparent'
        }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={2.5}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>
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
