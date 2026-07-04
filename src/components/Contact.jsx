import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const MotionRouterLink = motion(RouterLink);

const contactInfo = [
  { label: 'Email', value: personalInfo.email },
  { label: 'Location', value: personalInfo.location },
];

const socialLinks = [
  { label: 'LinkedIn', href: personalInfo.social.linkedin },
  { label: 'GitHub', href: personalInfo.social.github },
  { label: 'Instagram', href: personalInfo.social.instagram },
  { label: 'Dribbble', href: personalInfo.social.dribbble },
];

const writeLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/6287873759172' },
  { label: 'Email', href: `mailto:${personalInfo.email}` },
  { label: 'Instagram', href: personalInfo.social.instagram },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="relative bg-navy-900 py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Heading + copy email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-display font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="section-title mt-2 mb-4">Contact <span>Me</span></h2>
          <p className="text-gray-300 font-display text-lg mb-8">Tell me about your next project.</p>

          <motion.button
            onClick={copyEmail}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn mx-auto"
          >
            {copied ? 'Email Copied!' : 'Copy Email'}
            {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
          </motion.button>
        </motion.div>

        {/* Info columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto"
        >
          {/* Email + Location */}
          <div className="text-center md:text-left space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <h3 className="text-accent text-base mb-1">{item.label}</h3>
                <p className="text-white font-sans">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Social media */}
          <div className="text-center md:text-left">
            <h3 className="text-accent text-base mb-4">Social Media</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              {socialLinks.map((s) => {
                const className =
                  'inline-flex items-center gap-2 text-white hover:text-accent font-medium transition-colors';

                // Internal routes (e.g. Dribbble → /coming-soon) use the router.
                return s.href.startsWith('/') ? (
                  <MotionRouterLink key={s.label} to={s.href} whileHover={{ x: 6 }} className={className}>
                    {s.label}
                    <FiArrowUpRight size={18} />
                  </MotionRouterLink>
                ) : (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className={className}
                  >
                    {s.label}
                    <FiArrowUpRight size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Write me */}
          <div className="text-center md:text-left">
            <h3 className="text-accent text-base mb-4">Write Me &amp; We'll Talk</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              {writeLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="inline-flex items-center gap-2 text-white hover:text-accent font-medium transition-colors"
                >
                  {s.label}
                  <FiArrowUpRight size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
