import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { services } from '../data/portfolioData';

function ServiceCard({ service, index, inView }) {
  const num = String(service.id).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="surface-card p-8 group h-full flex flex-col"
    >
      {/* Accent glow blob, tinted per service */}
      <div
        className="blob"
        style={{
          right: '-7rem',
          bottom: '-6rem',
          width: '240px',
          height: '240px',
          background: `linear-gradient(180deg, ${service.color} 0%, #6f4fde 100%)`,
        }}
      />

      {/* Top row: number + arrow */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <span
          className="font-display font-black leading-none"
          style={{ fontSize: '2.75rem', color: service.color }}
        >
          {num}
        </span>
        <span className="grid place-items-center w-11 h-11 rounded-full bg-navy-900 border-[2px] border-white/15 text-white text-xl transition-all duration-300 group-hover:border-accent group-hover:rotate-45 group-hover:shadow-[0_0_20px_#8b73e6]">
          <FiArrowUpRight />
        </span>
      </div>

      {/* Title */}
      <h3 className="relative z-10 font-display font-bold text-2xl mb-3 text-white group-hover:text-accent transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Skill pills */}
      <div className="relative z-10 mt-auto flex flex-wrap gap-2">
        {service.skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative bg-navy-900 py-24 overflow-hidden">
      {/* Decorative top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,115,230,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="section-container relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-display font-semibold tracking-widest uppercase">
            Core Services
          </span>
          <h2 className="section-title mt-2">
            Design solutions built for <span className="gradient-text">growth</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto !mb-0">
            From first sketch to shipped product — here's how I help bring digital
            ideas to life.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
