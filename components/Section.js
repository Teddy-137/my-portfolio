import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      className={`py-20 min-h-screen ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
