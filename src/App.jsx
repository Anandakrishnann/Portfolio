import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HomePage, AboutPage, ServicePage, ProjectsPage, ContactPage } from './pages';

const links = {
  github: 'https://github.com/Anandakrishnann',
  linkedin: 'https://linkedin.com/in/anandhakrishnnn',
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function App() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Please configure EmailJS keys in .env first.');
      return;
    }

    try {
      setSending(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      formRef.current.reset();
      setStatus('Message sent successfully. Thanks for reaching out!');
    } catch {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-ring" />
        <h2>Anandha Krishnan PS</h2>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="noise" />
      <motion.nav className="navbar" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <a className="nav-brand" href="#home">
          Anandha Krishnan PS
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#service">Service</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-socials">
          <a className="nav-icon github" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            className="nav-icon linkedin"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a className="nav-icon gmail" href="mailto:kanandha808@gmail.com" aria-label="Gmail">
            <FaEnvelope />
          </a>
        </div>
      </motion.nav>
      <HomePage fadeUp={fadeUp} links={links} />
      <AboutPage fadeUp={fadeUp} />
      <ServicePage fadeUp={fadeUp} />
      <ProjectsPage fadeUp={fadeUp} />
      <ContactPage fadeUp={fadeUp} formRef={formRef} sendEmail={sendEmail} sending={sending} status={status} />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Anandha Krishnan PS. Crafted in React.</p>
        <div className="footer-links">
          <a href={links.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}
