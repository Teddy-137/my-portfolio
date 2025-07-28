"use client";
import React from "react";
import ThemeProvider from "../components/ThemeProvider";
import AnimatedBg from "../components/AnimatedBg";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Dock from "../components/Dock";
import Head from "next/head";

export default function App() {
  return (
    <ThemeProvider>
      <div className="text-gray-200 font-sans">
        <AnimatedBg />
        <div className="relative z-10">
          <Head>
            <title>web</title>
            <meta name="description" content="Tewodros Anteneh's Portfolio" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
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
