// Awards.js
import React from "react";
import Section from "./Section";
import { Trophy, Medal, Award as AwardIcon, Star } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

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
    },
    {
      icon: <Medal className="text-blue-400" />,
      title: "Nationwide Top Scorer",
      category: "IYMC Final Round",
      description:
        "Achieved the highest score in Ethiopia for mathematical excellence.",
      tags: ["Mathematics", "National", "Excellence"],
      link: "https://drive.google.com/file/d/14f1iCx2C6JI0E5ojs8YIPR21NmmrWJ9K/view?usp=sharing",
    },
    {
      icon: <Star className="text-gray-400" />,
      title: "Silver Honour",
      category: "IYMC",
      description:
        "Recognition for outstanding mathematical performance worldwide.",
      tags: ["International", "Mathematics", "Silver"],
      link: "https://drive.google.com/file/d/14IGFRKd3WwRptvWmzZ_9hTitd3okTZUa/view?usp=sharing",
    },
  ];

  return (
    <Section id="awards" className="bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Awards & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awardsList.map((award) => (
            <SpotlightCard key={award.title} className="text-center">
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-neutral-700 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-700 text-3xl">
                  {award.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {award.title}
                </h3>
                <p className="text-purple-400 mb-2 font-semibold">
                  {award.category}
                </p>
                <p className="text-gray-400 mb-4">{award.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {award.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Awards;
