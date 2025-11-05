"use client";
import React, { useState, useMemo } from "react";
import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import Image from "next/image";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "MediHelp Plus",
      description:
        "A comprehensive healthcare platform enabling patients to access medical resources, symptom checking, and doctor consultations.",
      tags: ["Django", "PostgreSQL", "Docker", "Mudular Design"],
      imageUrl: "/assets/images/thumbnail.png",
      link: "https://medihelp-frontend-ntx5.vercel.app/",
      category: ["Web Development", "Full Stack", "AI/ML"],
    },
    {
      title: "Terminal Chat",
      description:
        "A client-server chat system supporting 20+ concurrent users with private messaging and message history.",
      tags: ["Java", "Sockets", "Multi-threading"],
      imageUrl: "/assets/images/terminal.png",
      link: "https://github.com/Teddy-137/Terminal-Chat",
      category: "Backend Development",
    },
  ];

  const categories = ["All", "Web Development", "Backend Development", "AI/ML", "Full Stack"];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => {
      if (Array.isArray(project.category)) {
        return project.category.includes(activeFilter);
      }
      return project.category === activeFilter;
    });
  }, [activeFilter, projects]);

  return (
    <Section id="portfolio" className="bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
            Explore my recent work showcasing innovative solutions and creative problem-solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-sky-400 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <SpotlightCard key={project.title} className="group h-full">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full flex flex-col"
              >
                <div className="relative h-56 bg-gray-800">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Portfolio;
