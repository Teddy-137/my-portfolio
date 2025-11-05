import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 text-center text-gray-400 bg-gray-900/30 backdrop-blur-sm border-t border-neutral-700/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Social links - visible only on mobile (where Dock is hidden) */}
      <div className="flex md:hidden justify-center space-x-6 mb-6">
        <a
          href="https://github.com/Teddy-137"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/tewodros-anteneh-137304370/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:tewodros.anteneh@example.com"
          className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50"
          aria-label="Email Contact"
        >
          <Mail size={20} />
        </a>
      </div>
      
      <p className="text-sm">© {new Date().getFullYear()} Tewodros Anteneh. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
