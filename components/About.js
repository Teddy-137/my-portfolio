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
          <div className="flex flex-wrap gap-3">
            {[
              {
                name: "Java",
                icon: <FaJava className="text-2xl" />,
                color: "from-orange-500 to-red-500",
                delay: 0,
              },
              {
                name: "Python",
                icon: <FaPython className="text-2xl" />,
                color: "from-blue-400 to-yellow-400",
                delay: 0.1,
              },
              {
                name: "C++",
                icon: <SiCplusplus className="text-2xl" />,
                color: "from-blue-500 to-purple-500",
                delay: 0.2,
              },
              {
                name: "SQL",
                icon: <FaDatabase className="text-2xl" />,
                color: "from-cyan-400 to-blue-500",
                delay: 0.3,
              },
              {
                name: "HTML5",
                icon: <FaHtml5 className="text-2xl" />,
                color: "from-orange-600 to-red-600",
                delay: 0.4,
              },
              {
                name: "CSS3",
                icon: <FaCss3Alt className="text-2xl" />,
                color: "from-blue-500 to-cyan-400",
                delay: 0.5,
              },
              {
                name: "Django",
                icon: <SiDjango className="text-2xl" />,
                color: "from-green-600 to-emerald-500",
                delay: 0.6,
              },
              {
                name: "FastAPI",
                icon: <SiFastapi className="text-2xl" />,
                color: "from-teal-400 to-green-500",
                delay: 0.7,
              },
              {
                name: "Docker",
                icon: <FaDocker className="text-2xl" />,
                color: "from-blue-400 to-cyan-500",
                delay: 0.8,
              },
              {
                name: "Git",
                icon: <FaGitAlt className="text-2xl" />,
                color: "from-orange-500 to-red-500",
                delay: 0.9,
              },
              {
                name: "GitHub",
                icon: <FaGithub className="text-2xl" />,
                color: "from-gray-400 to-gray-600",
                delay: 1.0,
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: skill.delay,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  y: -4,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <motion.div
                  className={`bg-gradient-to-br ${skill.color} p-3 rounded-full text-sm font-medium flex items-center justify-center shadow-lg cursor-pointer relative overflow-hidden`}
                  title={skill.name}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: skill.delay,
                  }}
                >
                  <span className="relative z-10 text-white drop-shadow-lg">
                    {skill.icon}
                  </span>
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none border border-neutral-700 shadow-xl transition-opacity duration-200"
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {skill.name}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-neutral-700"></div>
                </motion.div>

                {/* Subtle glow effect on hover */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </div>
  </Section>
);

export default About;
