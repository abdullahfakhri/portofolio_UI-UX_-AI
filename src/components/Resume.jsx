import { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experience, education } from '../data/portfolioData';
import { useResumeTab } from '../context/ResumeTabContext';

const certifications = [
  {
    title: "UI/UX Design & Product Management Bootcamp",
    issuer: "Harisenin.com",
    year: "2025",
    color: "#8b5cf6",
  },
  {
    title: "Study Independent — Frontend React JS",
    issuer: "Binar Academy",
    year: "2022",
    color: "#3b82f6",
  },
];

const tabs = [
  { id: 'experience', label: 'Experience', icon: <FiBriefcase size={16} /> },
  { id: 'education', label: 'Education', icon: <FiBook size={16} /> },
];

/* ---------------- Experience panel ---------------- */
function ExperienceItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="relative pl-12 md:pl-20 pb-12 last:pb-0"
    >
      <span className="absolute left-[18px] md:left-[30px] top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-navy-900 border-[3px] border-accent shadow-[0_0_16px_#8b73e6] z-10" />

      <div className="surface-card p-6 md:p-7 group hover:border-accent/30 transition-colors">
        <div className="blob" style={{ right: '-7rem', top: '-6rem', width: '220px', height: '220px' }} />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-accent transition-colors">
            {item.role}
          </h3>
          <span
            className={`shrink-0 inline-flex items-center rounded-full px-3 py-1 text-xs font-display ${
              item.current
                ? 'bg-accent/15 text-accent border border-accent/40'
                : 'bg-white/5 text-gray-400 border border-white/10'
            }`}
          >
            {item.period}
          </span>
        </div>

        <p className="relative z-10 text-gray-300 font-display text-sm mb-4">
          {item.company}
          <span className="text-gray-600"> · {item.location}</span>
        </p>

        <ul className="relative z-10 space-y-2">
          {item.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ExperiencePanel() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <span className="absolute left-[18px] md:left-[30px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" />
      {experience.map((item, i) => (
        <ExperienceItem key={`${item.company}-${i}`} item={item} index={i} />
      ))}
    </div>
  );
}

/* ---------------- Education panel ---------------- */
function EducationPanel() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {/* Education timeline */}
      <div>
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
            <FiBook size={18} />
          </div>
          Education
        </h3>

        <div className="relative pl-6 border-l-[3px] border-accent/30">
          {education.map((edu, i) => (
            <motion.div
              key={`${edu.institution}-${edu.period}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
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
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
            <FiAward size={18} />
          </div>
          Courses & Certifications
        </h3>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
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
                <h4 className="font-semibold text-sm group-hover:text-white transition-colors">
                  {cert.title}
                </h4>
                <p className="text-gray-500 text-xs mt-0.5">{cert.issuer}</p>
              </div>
              <span className="text-xs text-gray-500 font-mono flex-shrink-0">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Section ---------------- */
export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { tab, setTab } = useResumeTab();

  return (
    <section id="experience" className="relative bg-navy-950 py-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="text-accent text-sm font-display font-semibold tracking-widest uppercase">
            Career Path
          </span>
          <h2 className="section-title mt-2">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto !mb-0">
            My journey so far — switch between work experience and academic background.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-5 sm:px-7 py-2.5 text-sm font-display font-semibold transition-colors ${
                  tab === t.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="resume-tab-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-navy-900 border-[2px] border-accent shadow-[0_4px_20px_rgba(139,115,230,0.45)]"
                  />
                )}
                <span className="relative z-10">{t.icon}</span>
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {tab === 'experience' ? <ExperiencePanel /> : <EducationPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
