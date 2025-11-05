import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 text-center text-gray-400 bg-gray-900/30 backdrop-blur-sm border-t border-neutral-700/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://linkedin.com/in/tewodros-anteneh-137304370/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/Teddy-137"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          aria-label="GitHub Profile"
        >
          <Github size={24} />
        </a>
        <a
          href="mailto:tewodros.anteneh@example.com"
          className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
          aria-label="Email Contact"
        >
          <Mail size={24} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Tewodros Anteneh. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
