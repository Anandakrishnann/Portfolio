import { motion } from "framer-motion";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Anandha_Krishnan from "../assets/Anandha_krishnan_PS.jpg";
import { FaDownload } from "react-icons/fa";
import Resume from "../assets/AnandhaKrishnanPS_Resume.pdf";

export default function HomePage({ fadeUp, links }) {
  return (
    <motion.header
      id="home"
      className="hero"
      initial="hidden"
      animate="show"
      variants={{
        show: { transition: { staggerChildren: 0.18 } },
      }}
    >
      <motion.div className="photo-box" variants={fadeUp}>
        <div className="photo-placeholder">
          <img src={Anandha_Krishnan} alt="Anandha Krishnan" />
        </div>
      </motion.div>

      <motion.div className="hero-content" variants={fadeUp}>
        <p className="eyebrow">Python Full Stack Developer</p>
        <h1>Anandha Krishnan PS</h1>
        <h3>Full Stack Developer</h3>
        <p className="summary">
          Full Stack Developer experienced in Django, DRF, FAST API, and
          ReactJS. I build scalable, secure, production-ready applications with
          real-time systems and payment integrations.
        </p>

        <div className="contact-row">
          <a href="tel:+919539027191">
            <FaPhoneAlt /> +91 9539027191
          </a>
          <a href="mailto:kanandha808@gmail.com">
            <FaEnvelope /> kanandha808@gmail.com
          </a>
          <span>
            <FaMapMarkerAlt /> Vaikom, Kottayam, Kerala, India
          </span>
        </div>

        <div className="socials">
          <a href={links.github} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <motion.div className="resume-container" variants={fadeUp}>
          <a
            href={Resume}
            download="Anandha_Krishnan_Resume.pdf"
            className="resume-btn"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
