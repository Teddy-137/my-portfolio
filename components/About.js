"use client";
import React from "react";
import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { GraduationCap, Settings } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiCplusplus, SiDjango, SiFastapi } from "react-icons/si";

const About = () => (
  <Section id="about" className="bg-gray-900/50 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
          I am a dedicated Electrical and Computer Engineering student at AASTU
          with a strong foundation in software development and problem-solving.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SpotlightCard>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 flex items-center justify-center mr-4 shadow-md">
              <GraduationCap className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Education</h3>
          </div>
          <div className="mb-4">
            <h4 className="font-bold text-lg text-white">
              BSc in Electrical & Computer Engineering
            </h4>
            <p className="text-gray-400">
              Addis Ababa Science and Technology University
            </p>
            <p className="text-sm text-gray-500">
              Expected Graduation: June 2027
            </p>
            <h4 className="font-bold text-lg text-white mt-4">
              Backend Web Development with Django
            </h4>
            <p className="text-gray-400">Google Developers Club</p>
          </div>
        </SpotlightCard>
        <SpotlightCard>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mr-4 shadow-md">
              <Settings className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Skills</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: "Python", icon: <FaPython /> },
              { name: "C++", icon: <SiCplusplus /> },
              { name: "Java", icon: <FaJava /> },
              { name: "SQL", icon: <FaDatabase /> },
              { name: "Django", icon: <SiDjango /> },
              { name: "FastAPI", icon: <SiFastapi /> },
              { name: "Docker", icon: <FaDocker /> },
              { name: "Git", icon: <FaGitAlt /> },

            ].map((skill, index) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/30 border border-neutral-700/50 text-gray-300 hover:text-sky-400 hover:border-sky-400/30 transition-all duration-300"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </div>
  </Section>
);

export default About;
