import React from "react";
import { motion } from 'framer-motion';
import codex from "../assets/codex.png";
import fadex9 from "../assets/fadex9.png";
import tracefix from "../assets/tracefix ai.png";
import aws from "../assets/aws.png";

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function SectionTitle({ title, glow, fadeUp }) {
  return (
    <motion.h2 className="section-title" variants={fadeUp}>
      <span style={{ color: glow }}>{title}</span>
    </motion.h2>
  );
}

const projects = [
  {
    title: 'Codex Learning',
    image: codex,
    subtitle: 'E-Learning Platform',
    description:
      'Full-stack role-based learning platform with JWT auth, live chat, video classes, payments, and progress tracking.',
    highlights: [
      'Built scalable features for Admins, Tutors, and Learners.',
      'Implemented secure JWT auth and protected routes.',
      'Integrated live chat, video classes, Stripe, and PayPal.',
    ],
    tags: ['React', 'Django', 'WebSockets', 'Stripe', 'PayPal'],
    githubLinks: [
      { label: 'Frontend', url: 'https://github.com/Anandakrishnann/CodeX-Frontend.git' },
      { label: 'Backend', url: 'https://github.com/Anandakrishnann/CodeX-Backend.git' },
    ],
  },
  {
    title: 'FADEX9',
    image: fadex9,
    subtitle: 'E-Commerce Platform',
    description:
      'Backend services for an e-commerce platform with REST APIs for products, users, and orders with JWT authentication.',
    highlights: [
      'Developed backend services using Django and DRF.',
      'Designed REST APIs for products, users, and orders with JWT authentication.',
      'Optimized queries and improved performance by 25%.',
      'Deployed backend on AWS EC2 using NGINX and Gunicorn.',
    ],
    tags: ['Django', 'PostgreSQL', 'AWS', 'NGINX', 'Gunicorn', 'JWT'],
    githubLinks: [
      { label: 'GitHub', url: 'https://github.com/Anandakrishnann/fadex9_ecomerse.git' },
    ],
  },
  {
    title: 'TraceFix',
    image: tracefix,
    subtitle: 'AI-Powered API Debugging',
    description:
      'Hybrid AI + rules engine that analyzes API traffic and logs, with Redis-backed performance improvements.',
    highlights: [
      'Designed hybrid debugging with rule engine and local LLM.',
      'Implemented background processing and Redis caching.',
    ],
    tags: ['Django', 'LLM', 'Redis', 'Log Parsing'],
    githubLinks: [
      { label: 'GitHub', url: 'https://github.com/Anandakrishnann/TraceFix-AI.git' },
    ],
  },
  {
    title: 'AWS Deployment Guide',
    image: aws,
    subtitle: 'Production Deployment',
    description:
      'Production-ready Django deployment guide using EC2, NGINX, Gunicorn, S3, and RDS best practices.',
    highlights: [
      'Documented secure deployment architecture for production.',
      'Included automation-friendly deployment workflow.',
    ],
    tags: ['AWS', 'NGINX', 'Gunicorn', 'DevOps'],
    githubLinks: [],
    liveLink: 'https://django-hosting-guide.onrender.com/',
  },
  
];

export default function ProjectsPage({ fadeUp }) {
  return (
    <motion.section
      id="projects"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
    >
      <SectionTitle title="Projects" glow="#ffd36e" fadeUp={fadeUp} />

      <div className="project-grid">
        {projects.map((project) => (
          <motion.article key={project.title} className="project-card" variants={fadeUp}>
            <div className="thumb"><img src={project.image} alt={project.title} /></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4>{project.title}</h4>
                <p className="subtitle">{project.subtitle}</p>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexShrink: 0, marginLeft: '14px' }}>
                {project.githubLinks &&
                  project.githubLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.label}
                      className="git-link"
                    >
                      <GitHubIcon />
                      {project.githubLinks.length > 1 && <span style={{paddingLeft: '4px'}}>{link.label}</span>}
                    </a>
                  ))}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="git-link"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>

            <p>{project.description}</p>

            <ul className="project-points">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}