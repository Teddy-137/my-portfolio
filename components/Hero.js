import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const Hero = () => (
  <Section id="home" className="flex items-center justify-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
            Hi, I'm Tewodros Anteneh
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6">
            Electrical & Computer Engineering Student | Backend Web Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            I like Mathematics and Programming.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
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
          </div>
        </div>
        <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center">
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20"
            animate={{ y: [-10, 10] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <img
              src="/assets/images/your-profile-photo.jpg"
              alt="Tewodros Anteneh"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </Section>
);

export default Hero;
