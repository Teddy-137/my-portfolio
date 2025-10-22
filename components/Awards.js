// Awards.js
import React from "react";
import Section from "./Section";
import { Trophy, Medal, Award as AwardIcon, Star } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";

const Awards = () => {
  const awardsList = [
    {
      icon: <Trophy className="text-yellow-400" />,
      title: "First Place Winner",
      category: "AASTU Tech Fest 2025",
      description:
        "Hackathon winner for the MediHelp Plus project development.",
      tags: ["Healthcare", "Innovation", "Tech"],
      link: "https://drive.google.com/file/d/14DJHhWmf5P7adk0mL70xwnp7TBmNEqTh/view?usp=sharing",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Medal className="text-blue-400" />,
      title: "Nationwide Top Scorer",
      category: "IYMC Final Round",
      description:
        "Achieved the highest score in Ethiopia for mathematical excellence.",
      tags: ["Mathematics", "National", "Excellence"],
      link: "https://drive.google.com/file/d/14f1iCx2C6JI0E5ojs8YIPR21NmmrWJ9K/view?usp=sharing",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Star className="text-gray-400" />,
      title: "Silver Honour",
      category: "IYMC",
      description:
        "Recognition for outstanding mathematical performance worldwide.",
      tags: ["International", "Mathematics", "Silver"],
      link: "https://drive.google.com/file/d/14IGFRKd3WwRptvWmzZ_9hTitd3okTZUa/view?usp=sharing",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <Section id="awards" className="bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Awards & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
            Recognition for excellence in technology and mathematics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awardsList.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
            >
              <SpotlightCard className="text-center h-full">
                <div className="bg-gray-800/50 p-8 rounded-2xl border border-neutral-700 shadow-lg h-full flex flex-col">
                  {/* Animated Icon Container */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${award.gradient} shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {award.icon}
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {award.title}
                  </motion.h3>

                  <motion.p
                    className="text-purple-400 mb-3 font-semibold text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {award.category}
                  </motion.p>

                  <motion.p
                    className="text-gray-400 mb-6 flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {award.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 justify-center mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    {award.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                          borderColor: "rgba(139, 92, 246, 0.5)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors font-medium inline-flex items-center gap-2 justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 8px rgba(139, 92, 246, 0.6)"
                    }}
                  >
                    <AwardIcon className="w-4 h-4" />
                    View Certificate
                  </motion.a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
          >
            <motion.div
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              1st
            </motion.div>
            <p className="text-gray-400">Place Winner</p>
            <p className="text-sm text-gray-500">Tech Fest 2025</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
          >
            <motion.div
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              #1
            </motion.div>
            <p className="text-gray-400">IYMC</p>
            <p className="text-sm text-gray-500">Mathematics</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
          >
            <motion.div
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
              viewport={{ once: true }}
            >
              🥈
            </motion.div>
            <p className="text-gray-400">Silver Honor</p>
            <p className="text-sm text-gray-500">Mathematics</p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Awards;
