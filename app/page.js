"use client";
import React from "react";
import dynamic from "next/dynamic";
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


// Lazy load the DarkVeil background component
const DarkVeil = dynamic(() => import("../components/DarkVeil"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />
});

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
          <DarkVeil
            speed={0.3}
            hueShift={260}
            noiseIntensity={0.02}
            scanlineIntensity={0}
            scanlineFrequency={0}
            warpAmount={0.3}
            resolutionScale={0.8}
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
