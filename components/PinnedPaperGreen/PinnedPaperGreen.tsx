"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import "../../styles/pin-paper-green.css";

const PinnedPaperGreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{
        opacity: { duration: 0.8, delay: 1.5, ease: "linear" },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
          duration: 0.8,
          delay: 1.5, // Apply delay to the scale transition as well
        },
      }}
    >
      <div className="pin-paper-green">
        <div className="pin-green">
          <div className="shadow-green" />
          <div className="metal" />
          <div className="bottom-circle" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/circular-me.png"
            alt="Picture of the author"
            width="200"
            height="200"
            className="rounded-full"
          />
          <br />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-2xl">Atish Maharjan</p>
              <p className="text-xs">
                <small>Lalitpur, Nepal 🇳🇵</small>
              </p>

              <p>Senior Frontend Engineer &nbsp;</p>
              <p>
                <small>arcrt1993@gmail.com</small>
              </p>
              <p>
                <small>+977-9866265050</small>
              </p>
            </div>
            <div style={{ marginRight: "-20px" }}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/atish-maharjan-862ba8112/"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/icons8-linkedin.svg"
                  width="30"
                  height="30"
                  alt="linkedin"
                  className="hover:cursor-pointer"
                />
              </a>

              <a
                target="_blank"
                href="https://wa.me/+9779866265050"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/icons8-whatsapp.svg"
                  width="30"
                  height="30"
                  alt="whatsapp"
                />
              </a>

              <a
                target="_blank"
                href="https://github.com/aristocrat44"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/icons8-github-30.svg"
                  width="30"
                  height="30"
                  alt="github"
                />
              </a>

              <a
                target="_blank"
                href="https://www.hackerrank.com/profile/arcrt1993"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/iconscout-code.svg"
                  width="30"
                  height="30"
                  alt="hackerrank"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PinnedPaperGreen;
