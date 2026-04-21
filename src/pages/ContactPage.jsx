import { motion } from 'framer-motion';

function SectionTitle({ title, glow, fadeUp }) {
  return (
    <motion.h2 className="section-title" variants={fadeUp}>
      <span style={{ color: glow }}>{title}</span>
    </motion.h2>
  );
}

export default function ContactPage({ fadeUp, formRef, sendEmail, sending, status }) {
  return (
    <motion.section
      className="section contact"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
    >
      <SectionTitle title="Contact Me" glow="#8cff88" fadeUp={fadeUp} />
      <div className="contact-layout">
        <motion.form ref={formRef} onSubmit={sendEmail} className="contact-form" variants={fadeUp}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="reply_to" placeholder="Your Email" required />
          <textarea name="message" placeholder="Write your message..." rows="6" required />
          <button type="submit" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="status">{status}</p>}
        </motion.form>

        <motion.aside className="contact-info" variants={fadeUp}>
          <h4>Let&apos;s Build Something Awesome</h4>
          <p>
            I am open to Full Stack and Backend opportunities where I can contribute to scalable,
            production-ready products.
          </p>
          <ul>
            <li>Available for full-time roles and freelance projects.</li>
            <li>Experienced in Django, FastAPI, React, AWS, and payment integrations.</li>
            <li>Strong focus on clean architecture, performance, and maintainability.</li>
          </ul>
          <div className="contact-direct">
            <a href="mailto:kanandha808@gmail.com">kanandha808@gmail.com</a>
            <a href="tel:+919539027191">+91 9539027191</a>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
