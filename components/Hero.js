import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const Hero = () => (
  <Section id="home" className="flex items-center justify-center min-h-screen">
    {/* Use text-center on the container to center all child text elements */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* --- Main Heading --- */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Tewodros Anteneh
      </motion.h1>

      {/* --- Subheading --- */}
      <motion.h2
        className="text-2.5xl md:text-3xl font-semibold text-gray-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Electrical & Computer Engineering Student | Backend Web Developer
      </motion.h2>

      {/* --- Paragraph --- */}
      <motion.p
        className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I like Mathematics and Programming.
      </motion.p>

      {/* --- Buttons Container --- */}
      {/* Use justify-center to center the buttons horizontally */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a
          href="#contact"
          className="px-6 py-3 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:from-sky-500 hover:to-purple-600 transition duration-300"
        >
          Get In Touch
        </a>
        <a
          href="/assets/Tewodros_m_Resume.pdf"
          download="Tewodros_Anteneh_Resume.pdf"
          className="px-6 py-3 border border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500/20 transition duration-300"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  </Section>
);

export default Hero;
