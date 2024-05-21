"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/pin-paper.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const PinnedPaper = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:arcrt1993@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      message + "\n\nFrom: " + name + "\nEmail: " + email
    )}`;
    window.location.href = mailtoLink;
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="pin-paper p-10">
        <div className="pin">
          <div className="shadow" />
          <div className="metal" />
          <div className="bottom-circle" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col items-center">
            <h2>Kindly Contact Me</h2>
            <small>
              If you would like to hire me or have any questions, please fill
              out the form below and I will get back to you as soon as possible.
            </small>
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="inputfield"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="inputfield"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="inputfield"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="textarea"
          />
          <div className="flex flex-col items-center">
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default PinnedPaper;
