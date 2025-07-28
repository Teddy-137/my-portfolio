import React, { useRef, useEffect, useState } from "react";

const Section = ({ id, children, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current; // Store ref.current in a variable
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element); // Use stored variable
    };
  }, []); // Empty dependency array is fine since ref is stable

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 min-h-screen transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
