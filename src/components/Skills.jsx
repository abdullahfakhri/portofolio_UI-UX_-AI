import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';

const techColors = {
  react: '#61dafb', next: '#ffffff', js: '#f7df1e', tailwind: '#38bdf8',
  vite: '#646cff', native: '#61dafb', laravel: '#ff2d20', python: '#3776ab',
  figma: '#a259ff', xd: '#ff61f6', design: '#3b82f6', prototype: '#8b5cf6',
  wireframe: '#06b6d4', research: '#10b981', writing: '#f59e0b',
  mysql: '#4479a1', postgres: '#336791', api: '#ff6b6b',
};

const techLogos = {
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  next: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  js: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  vite: 'https://vitejs.dev/logo.svg',
  laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  postgres: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
};

function SkillBar({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.07 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {techLogos[skill.icon] && (
            <img
              src={techLogos[skill.icon]}
              alt={skill.name}
              className="w-5 h-5 object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          )}
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.07, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${techColors[skill.icon] || '#3b82f6'}, #8b5cf6)`,
          }}
        />
      </div>
    </motion.div>
  );
}

function SkillCard({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="glass-card p-4 flex flex-col items-center gap-2 hover:border-accent/30 transition-all cursor-default"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
        style={{ background: `${techColors[skill.icon] || '#3b82f6'}22` }}
      >
        {techLogos[skill.icon] ? (
          <img
            src={techLogos[skill.icon]}
            alt={skill.name}
            className="w-6 h-6 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <span
          className="text-xs font-bold"
          style={{ display: techLogos[skill.icon] ? 'none' : 'flex', color: techColors[skill.icon] || '#3b82f6' }}
        >
          {skill.name.slice(0, 2)}
        </span>
      </div>
      <span className="text-xs font-medium text-gray-300 text-center leading-tight">{skill.name}</span>
      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.2 + index * 0.06, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: techColors[skill.icon] || '#3b82f6' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative bg-navy-950 py-20">
      {/* Bg accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-display font-semibold tracking-widest uppercase">Expertise</span>
          <h2 className="section-title mt-2">
            What I <span>Offer</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A diverse toolkit spanning design, development, and emerging AI technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="surface-card p-8"
          >
            <div className="blob" style={{ top: '-7rem', left: '-7rem' }} />
            <h3 className="relative z-10 text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-gradient-to-b from-accent to-accent-purple" />
              Design & UX Skills
            </h3>
            <div className="relative z-10 space-y-5">
              {skills.design.map((s, i) => (
                <SkillBar key={s.name} skill={s} index={i} inView={inView} />
              ))}
            </div>
          </motion.div>

          {/* Dev Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="surface-card p-8"
          >
            <div className="blob blob-2" style={{ top: '-7rem', right: '-7rem' }} />
            <h3 className="relative z-10 text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-gradient-to-b from-accent-purple to-accent" />
              Development Skills
            </h3>
            <div className="relative z-10 space-y-5">
              {skills.development.map((s, i) => (
                <SkillBar key={s.name} skill={s} index={i} inView={inView} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Database & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-5 rounded-full bg-gradient-to-b from-accent-cyan to-accent-indigo" />
            Database & APIs
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-4">
            {skills.database.map((s, i) => (
              <SkillCard key={s.name} skill={s} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
