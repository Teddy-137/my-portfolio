import React from "react";
import { Github } from "lucide-react";

const Footer = () => (
  <footer className="py-12 text-center text-gray-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/Teddy-137"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <Github size={24} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Tewodros Anteneh. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
