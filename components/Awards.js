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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="text-center h-full flex flex-col">
                {/* Animated Icon Container */}
                <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${award.gradient} shadow-lg`}>
                  {award.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {award.title}
                </h3>

                <p className="text-purple-300 mb-3 font-medium text-base">
                  {award.category}
                </p>

                <p className="text-gray-400 mb-6 flex-grow">
                  {award.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {award.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600 hover:border-gray-500 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-200 transition-colors duration-200 font-medium inline-flex items-center gap-2 justify-center"
                >
                  <AwardIcon className="w-4 h-4" />
                  View Certificate
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-neutral-900/40 backdrop-blur-md p-6 rounded-2xl border border-neutral-700/50 hover:border-sky-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-sky-400 mb-2">🥇</div>
            <p className="text-gray-300 font-medium">Place Winner</p>
            <p className="text-sm text-gray-500">Tech Fest 2025</p>
          </div>

          <div className="bg-neutral-900/40 backdrop-blur-md p-6 rounded-2xl border border-neutral-700/50 hover:border-purple-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">🥇</div>
            <p className="text-gray-300 font-medium">IYMC</p>
            <p className="text-sm text-gray-500">National Top Scorer</p>
          </div>

          <div className="bg-neutral-900/40 backdrop-blur-md p-6 rounded-2xl border border-neutral-700/50 hover:border-pink-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-pink-400 mb-2">🥈</div>
            <p className="text-gray-300 font-medium">Silver Honor</p>
            <p className="text-sm text-gray-500">International Mathematics</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Awards;
