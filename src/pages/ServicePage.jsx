import { motion } from 'framer-motion';
import { FaPython, FaReact } from 'react-icons/fa';
import { SiDjango, SiFastapi } from 'react-icons/si';

function SectionTitle({ title, glow, fadeUp }) {
  return (
    <motion.h2 className="section-title" variants={fadeUp}>
      <span style={{ color: glow }}>{title}</span>
    </motion.h2>
  );
}

const services = [
  {
    title: 'Python Development',
    icon: FaPython,
    cls: 'c1',
    content:
      'I have hands-on experience building scalable backend systems and business logic in Python for production applications.',
  },
  {
    title: 'Django / DRF Systems',
    icon: SiDjango,
    cls: 'c2',
    content:
      'I build secure Django and DRF projects with authentication, OTP workflows, REST APIs, and role-based access control.',
  },
  {
    title: 'FastAPI Services',
    icon: SiFastapi,
    cls: 'c6',
    content:
      'I create high-performance FastAPI microservices with async processing, clean API design, and maintainable architecture.',
  },
  {
    title: 'React Frontend',
    icon: FaReact,
    cls: 'c3',
    content:
      'I develop reusable React components with responsive UI patterns and efficient state management for real-world products.',
  },
];

export default function ServicePage({ fadeUp }) {
  return (
    <motion.section
      id="service"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
    >
      <SectionTitle title="Service" glow="#ff8be9" fadeUp={fadeUp} />
      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article key={service.title} className="service-card" variants={fadeUp}>
              <div className="service-thumb">
                <Icon className={`service-icon ${service.cls}`} />
              </div>
              <h4>{service.title}</h4>
              <p>{service.content}</p>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
