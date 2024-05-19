"use client";
import { motion } from "framer-motion";
import "../../styles/pin-paper.css";

const PinnedPaper = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="pin-paper p-10">
        <div className="pin">
          <div className="shadow" />
          <div className="metal" />
          <div className="bottom-circle" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>
            Hi, welcome to my corner of the web! I am a Frontend Engineer
            (React) with a passion for creating dynamic and optimal web
            applications. My journey in web development began 7 years ago, and
            since then, I've been honing my skills in JavaScript, React, and
            other modern frontend technologies.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PinnedPaper;
