"use client";
import React, { useState, useEffect } from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 3000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));

        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return currentText;
};

const Hero = () => {
  const roles = [
    "Backend Developer",
    "Computer Engineering Student",
    "Mathematics Enthusiast",
    "Logic & Algorithms"
  ];

  const typingText = useTypingEffect(roles);

  return (
    <Section id="home" className="flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Subtle Mathematical Motif Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center text-[10rem] font-serif italic text-white">
        f(x) = ∫ log(n)
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Tewodros Anteneh
        </motion.h1>

        {/* Animated Typing Effect */}
        <motion.div
          className="text-xl md:text-2xl font-medium text-gray-400 mb-8 min-h-[40px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-sky-400/90 font-mono">
            {`> `}{typingText}
          </span>
          <motion.span
            className="ml-1 text-sky-300"
            animate={{ opacity: [1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            _
          </motion.span>
        </motion.div>

        {/* Static Description */}
        <motion.p
          className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Electrical & Computer Engineering student at AASTU.
          <br className="hidden md:block" />
          Exploring the intersection of software engineering and mathematical logic.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.a
            href="#portfolio"
            className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Work
          </motion.a>
          <motion.a
            href="/assets/Tewodros_m_Resume.pdf"
            download="Tewodros_Anteneh_Resume.pdf"
            className="px-8 py-3 border-2 border-neutral-700 text-gray-300 font-medium rounded-lg hover:border-white hover:text-white transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
