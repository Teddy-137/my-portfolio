import React from "react";
import Section from "./Section";
import { GraduationCap, Settings } from "lucide-react";
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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
          I am a dedicated Electrical and Computer Engineering student at AASTU
          with a strong foundation in software development and problem-solving.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-neutral-700 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 flex items-center justify-center mr-4 shadow-md">
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
        </div>
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-neutral-700 shadow-lg">
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
                icon: <FaJava className="text-2xl text-gray-300" />,
              },
              {
                name: "Python",
                icon: <FaPython className="text-2xl text-gray-300" />,
              },
              {
                name: "C++",
                icon: <SiCplusplus className="text-2xl text-gray-300" />,
              },
              {
                name: "SQL",
                icon: <FaDatabase className="text-2xl text-gray-300" />,
              },
              {
                name: "HTML5",
                icon: <FaHtml5 className="text-2xl text-gray-300" />,
              },
              {
                name: "CSS3",
                icon: <FaCss3Alt className="text-2xl text-gray-300" />,
              },
              {
                name: "Django",
                icon: <SiDjango className="text-2xl text-gray-300" />,
              },
              {
                name: "FastAPI",
                icon: <SiFastapi className="text-2xl text-gray-300" />,
              },
              {
                name: "Docker",
                icon: <FaDocker className="text-2xl text-gray-300" />,
              },
              {
                name: "Git",
                icon: <FaGitAlt className="text-2xl text-gray-300" />,
              },
              {
                name: "GitHub",
                icon: <FaGithub className="text-2xl text-gray-300" />,
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-700 p-2 rounded-full text-sm font-medium flex items-center justify-center"
                title={skill.name}
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
