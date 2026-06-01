import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { education } from '../data/portfolioData';

const certifications = [
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google / Coursera",
    year: "2024",
    color: "#3b82f6",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    year: "2024",
    color: "#8b5cf6",
  },
  {
    title: "Product Design & Strategy",
    issuer: "IDEO / Design Thinking",
    year: "2023",
    color: "#06b6d4",
  },
  {
    title: "AI Tools for Designers",
    issuer: "Coursera",
    year: "2024",
    color: "#10b981",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative bg-navy-950 py-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-display font-semibold tracking-widest uppercase">Background</span>
          <h2 className="section-title mt-2">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Academic background and professional certifications that shape my expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-xl font-bold mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <FiBook size={18} />
              </div>
              Education
            </motion.h3>

            <div className="relative pl-6 border-l-[3px] border-accent/30">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-accent-purple border-2 border-navy-950 shadow-[0_0_12px_#8b73e6]" />

                  <div className="glass-card p-6 hover:border-accent/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        <p className="text-accent font-medium">{edu.major}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap">
                        <FiCalendar size={11} /> {edu.period}
                      </span>
                    </div>
                    <p className="flex items-center gap-2 text-gray-300 font-medium mb-1">
                      <FiBook size={14} className="text-accent" />
                      {edu.institution}
                    </p>
                    <p className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <FiMapPin size={12} /> {edu.location}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-xl font-bold mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
                <FiAward size={18} />
              </div>
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass-card p-5 flex items-center gap-4 hover:border-accent-purple/30 transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: `${cert.color}22`, border: `1px solid ${cert.color}33` }}
                  >
                    <FiAward size={20} style={{ color: cert.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm group-hover:text-white transition-colors truncate">
                      {cert.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-gray-500 font-mono flex-shrink-0">{cert.year}</span>
                </motion.div>
              ))}
            </div>

            {/* Currently learning badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-6 glass-card p-5 border-dashed"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
                <div>
                  <p className="text-sm font-semibold text-green-400">Currently Learning</p>
                  <p className="text-xs text-gray-400 mt-0.5">Advanced AI Integration for Product Design</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
