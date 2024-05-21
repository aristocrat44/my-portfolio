"use client";
import { motion } from "framer-motion";
import "./../../styles/sticky-paper.css";

const StickyPaper = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="paper pink"
      >
        <div className="tape-section" />
        <div className="flex flex-col justify-center items-center">
          <h1> WELCOME !</h1>

          <p>
            Hi, welcome to my corner of the web! I am a Frontend Engineer
            (React) with a passion for creating dynamic and optimal web
            applications. My journey in web development began 7 years ago, and
            since then, I've been honing my skills in JavaScript, React, and
            other modern frontend technologies. Please kindly take a couple of
            minutes out of your day to go through my small portfolio? 😊
          </p>
        </div>
        <div className="tape-section" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="paper blue"
      >
        <div className="top-tape" />
        <div className="flex flex-col justify-center items-center p-10">
          <p>
            In this portfolio, you'll find a showcase of projects that reflect
            my expertise and creativity. Each project has been a unique learning
            experience, allowing me to solve complex problems and deliver
            user-friendly solutions. When I'm not coding, you might find me
            exploring the latest tech trends, diving into a good book or doing
            all sorts of random things. I believe in continuous learning and am
            always eager to take on new challenges. More than that I believe in
            keeping things simple and easy. Feel free to explore my work, and if
            you like what you see or have any questions, don't hesitate to reach
            out. Thank you for stopping by, and I hope you enjoy your visit!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default StickyPaper;
