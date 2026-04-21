import { motion } from 'framer-motion';
import { FaPython, FaReact, FaAws, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { SiDjango, SiStripe, SiPaypal, SiFastapi } from 'react-icons/si';

function SectionTitle({ title, glow, fadeUp }) {
  return (
    <motion.h2 className="section-title" variants={fadeUp}>
      <span style={{ color: glow }}>{title}</span>
    </motion.h2>
  );
}

const aboutStack = [
  { name: 'Python', value: 95, icon: FaPython, cls: 'c1' },
  { name: 'Django', value: 92, icon: SiDjango, cls: 'c2' },
  { name: 'React', value: 90, icon: FaReact, cls: 'c3' },
  { name: 'FastAPI', value: 86, icon: SiFastapi, cls: 'c6' },
  { name: 'AWS', value: 88, icon: FaAws, cls: 'c7' },
];

export default function AboutPage({ fadeUp }) {
  return (
    <motion.section
      id="about"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
    >
      <SectionTitle title="About Me" glow="#77f9ff" fadeUp={fadeUp} />
      <motion.p className="about-text" variants={fadeUp}>
        I am a Python Full Stack Developer experienced in building scalable web applications using{' '}
        <span className="hl hl-python">Django</span>, <span className="hl hl-fastapi">FastAPI</span>,{' '}
        <span className="hl hl-react">React</span>, and <span className="hl hl-aws">AWS</span>. I develop
        end-to-end systems, from designing backend architectures and RESTful APIs to creating responsive and
        user-friendly interfaces.
        <br />
        <br />I have worked on real-world projects like <span className="hl hl-project">CodexLearning</span>,
        implementing authentication, OTP verification, Stripe payments, role-based access, real-time chat,
        video calling, and asynchronous processing with Celery.
        <br />
        <br />
        My expertise includes backend development, API design, database optimization, and deploying applications
        using AWS services like EC2 and S3. On the frontend, I focus on reusable components and efficient state
        management with Redux.
        <br />
        <br />
        With a strong foundation in Data Structures and Algorithms, I aim to build efficient, scalable, and
        maintainable systems. I am currently seeking opportunities to contribute, learn, and grow as a software
        engineer.
      </motion.p>

      <motion.div className="about-skill-grid" variants={fadeUp}>
        {aboutStack.map((skill) => {
          const Icon = skill.icon;
          return (
            <article key={skill.name} className="about-skill-card">
              <div className="about-skill-top">
                <span className={`about-icon ${skill.cls}`}>
                  <Icon />
                </span>
                <strong>{skill.name}</strong>
                <span>{skill.value}%</span>
              </div>
              <div className="about-progress">
                <span style={{ width: `${skill.value}%` }} />
              </div>
            </article>
          );
        })}
      </motion.div>

      <SectionTitle title="Technical Skills" glow="#7affc7" fadeUp={fadeUp} />
      <motion.div className="skills-grid" variants={fadeUp}>
        <div className="skill-card">
          <FaPython className="icon c1" /> Python, JavaScript, HTML, CSS
        </div>
        <div className="skill-card">
          <SiDjango className="icon c2" /> Django, DRF, FastAPI, JWT
        </div>
        <div className="skill-card">
          <FaReact className="icon c3" /> ReactJS, Redux
        </div>
        <div className="skill-card">
          <FaDatabase className="icon c4" /> PostgreSQL, MongoDB, Firebase
        </div>
        <div className="skill-card">
          <FaServer className="icon c5" /> WebSockets, Django Channels, ZegoCloud
        </div>
        <div className="skill-card">
          <SiStripe className="icon c6" /> Stripe, <SiPaypal className="icon-inline" /> PayPal
        </div>
        <div className="skill-card">
          <FaAws className="icon c7" /> AWS EC2, S3, RDS, NGINX, Gunicorn
        </div>
        <div className="skill-card">
          <FaTools className="icon c8" /> Git, Linux, REST APIs
        </div>
      </motion.div>
    </motion.section>
  );
}
