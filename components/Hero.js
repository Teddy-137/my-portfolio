"use client";
import React, { useState, useEffect } from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const useTypingEffect = (words, typingSpeed = 150, deletingSpeed = 100, delayBetweenWords = 2000) => {
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
    "Backend Web Developer",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Tech Innovator"
  ];

  const typingText = useTypingEffect(roles);

  return (
    <Section id="home" className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I&apos;m Tewodros Anteneh
        </motion.h1>

        {/* Animated Typing Effect */}
        <motion.div
          className="text-2.5xl md:text-3xl font-semibold text-gray-400 mb-6 min-h-[40px] flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="mr-2">I&apos;m a</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
            {typingText}
          </span>
          <motion.span
            className="ml-1 text-sky-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>

        {/* Static Description */}
        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I like Mathematics and Programming. Passionate about creating innovative solutions and turning ideas into reality.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:from-sky-500 hover:to-purple-600 transition duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="/assets/Tewodros_m_Resume.pdf"
            download="Tewodros_Anteneh_Resume.pdf"
            className="px-6 py-3 border border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500/20 transition duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ borderColor: ["#9ca3af", "#7c3aed", "#9ca3af"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-purple-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
