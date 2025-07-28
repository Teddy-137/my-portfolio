import React from "react";
import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      title: "MediHelp Plus",
      description:
        "A comprehensive healthcare platform enabling patients to access medical resources, symptom checking, and doctor consultations.",
      tags: ["Django", "PostgreSQL", "Docker", "Gemini API"],
      imageUrl: "/assets/images/thumbnail.png",
      link: "https://medihelp-frontend-ntx5.vercel.app/",
    },
    {
      title: "Terminal Chat",
      description:
        "A client-server chat system supporting 20+ concurrent users with private messaging and message history.",
      tags: ["Java", "Sockets", "Multi-threading"],
      imageUrl: "/assets/images/terminal.png",
      link: "https://github.com/Teddy-137/Terminal-Chat",
    },
  ];

  return (
    <Section id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <SpotlightCard key={p.title} className="group">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
