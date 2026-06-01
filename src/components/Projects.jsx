import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

function ProjectCard({ project }) {
  const num = String(project.id).padStart(2, '0');

  return (
    <div className="surface-card p-7 group h-full flex flex-col">
      {/* Accent glow blob inside the card (reference projects__card .blob) */}
      <div className="blob" style={{ right: '-7rem', bottom: '-6rem', width: '260px', height: '260px' }} />

      {/* Top row: number + category label */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <span
          className="font-display font-black leading-none text-white"
          style={{ fontSize: '2.5rem' }}
        >
          {num}
        </span>
        <span className="font-display text-gray-300 text-base">
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="relative z-10 font-display font-bold text-xl mb-4 text-white group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      {/* Techstack */}
      <div className="relative z-10 mb-6">
        <p className="text-gray-400 font-display text-xs mb-1.5">Techstack used</p>
        <p className="text-gray-400 text-sm leading-relaxed">{project.techstack}</p>
      </div>

      {/* Image / preview area */}
      <div
        className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3] mt-auto"
        style={{
          background: `linear-gradient(135deg, ${project.color}33 0%, #0d1530 60%)`,
        }}
      >
        {/* Circular hover arrow (reference projects__button) */}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="absolute top-3 right-3 z-20 grid place-items-center w-12 h-12 rounded-full bg-navy-900 border-[3px] border-accent text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_24px_#8b73e6]"
          >
            <FiArrowUpRight />
          </a>
        ) : (
          <span className="absolute top-3 right-3 z-20 grid place-items-center w-12 h-12 rounded-full bg-navy-900 border-[3px] border-accent text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            <FiArrowUpRight />
          </span>
        )}
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: `radial-gradient(circle at 30% 40%, ${project.color}66, transparent 60%)` }}
            />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl font-black opacity-20 select-none" style={{ color: project.color }}>
                {num}
              </span>
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active card based on scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardWidth = el.firstChild?.offsetWidth + 24 || 400;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(idx, projects.length - 1));
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToIndex = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth + 24 || 400;
    el.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
  };

  // Auto-scroll every 10 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      const firstCard = el.firstChild;
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth + 24; // gap
      const maxScroll = el.scrollWidth - el.clientWidth;

      // If near the end, reset to start; else advance
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="projects" className="relative bg-navy-900 py-24 overflow-hidden">
      {/* Decorative blue glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,115,230,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 relative px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              I make Incredible
              <br />
              <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute top-2 right-[20%] w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark shadow-lg shadow-accent/40 hidden md:block"
          />
        </div>

        {/* Horizontal scroll row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-10 hide-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -8 }}
              className="flex-shrink-0 w-[380px] snap-start"
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
          {/* Spacer for trailing gap */}
          <div className="flex-shrink-0 w-10" />
        </motion.div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className="group p-1.5"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'w-8 h-2 bg-accent'
                    : 'w-2 h-2 bg-white/20 group-hover:bg-white/40'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
