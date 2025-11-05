"use client";
import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / scrollHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-neutral-800 z-50">
      <div className="h-0.5 bg-gradient-to-r from-sky-400/70 to-purple-400/70 transition-all duration-300 ease-out" style={{ width: `${scrollProgress}%` }}></div>
    </div>
  );
};

export default ScrollProgress;