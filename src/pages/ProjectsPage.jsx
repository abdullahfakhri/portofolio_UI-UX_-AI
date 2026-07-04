import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import { projects } from '../data/portfolioData';

const INITIAL_COUNT = 4;

function ProjectRow({ project, index }) {
  const num = String(project.id).padStart(2, '0');
  const reversed = index % 2 === 1;

  // Special "Coming Soon" row — Lottie animation + a stay-tuned message.
  if (project.comingSoon) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-14 border-b border-white/[0.06] last:border-0"
      >
        <div
          className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/[0.06] grid place-items-center"
          style={{ background: `linear-gradient(135deg, ${project.color}33 0%, #0d1530 65%)` }}
        >
          <dotlottie-wc
            src={project.lottie}
            speed="1"
            loop
            autoplay
            style={{ width: '78%', height: '78%' }}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-display font-black leading-none gradient-text" style={{ fontSize: '3rem' }}>
              {num}
            </span>
            <span className="h-px flex-1 bg-white/10" />
            <span className="font-display text-gray-400 text-sm tracking-wide uppercase">{project.category}</span>
          </div>
          <h3 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">{project.description}</p>
          <span className="skill-pill self-start opacity-70">Stay tuned ✨</span>
        </div>
      </motion.article>
    );
  }

  // techstack -> array of pills
  const tags = project.techstack.split(',').map((t) => t.trim());

  const Visual = (
    <div
      className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/[0.06]"
      style={{ background: `linear-gradient(135deg, ${project.color}33 0%, #0d1530 65%)` }}
    >
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      ) : (
        <>
          {/* soft accent blob */}
          <div
            className="blob"
            style={{ right: '-5rem', bottom: '-5rem', width: '220px', height: '220px' }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: `radial-gradient(circle at 30% 35%, ${project.color}66, transparent 60%)` }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-black opacity-20 select-none" style={{ color: project.color }}>
              {num}
            </span>
          </div>
        </>
      )}
    </div>
  );

  const Content = (
    <div className="flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-display font-black leading-none gradient-text" style={{ fontSize: '3rem' }}>
          {num}
        </span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-display text-gray-400 text-sm tracking-wide uppercase">
          {project.category} · {project.year}
        </span>
      </div>

      <h3 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>
        {project.title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span key={tag} className="skill-pill">
            {tag}
          </span>
        ))}
      </div>

      <RouterLink
        to={`/projects/${project.slug || project.id}`}
        className="btn-ghost group/cta self-start"
      >
        Explore Project
        <FiArrowUpRight className="transition-transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
      </RouterLink>
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-14 border-b border-white/[0.06] last:border-0"
    >
      <div className={reversed ? 'md:order-2' : ''}>{Visual}</div>
      <div className={reversed ? 'md:order-1' : ''}>{Content}</div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const visible = projects.slice(0, count);
  const hasMore = count < projects.length;

  return (
    <main className="relative bg-navy-900 overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[460px] pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,115,230,0.20) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RouterLink
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm font-display"
          >
            <FiArrowLeft />
            Back to home
          </RouterLink>
        </motion.div>

        {/* Header */}
        <header className="relative mt-10 mb-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-dark shadow-lg shadow-accent/40 mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-[1.05]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            Work that moves
            <br />
            ideas <span className="gradient-text">forward</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg mt-6 max-w-2xl"
          >
            A selection of projects where thoughtful design meets clean, performant
            code — from design systems and research to shipped web and mobile products.
          </motion.p>
        </header>

        {/* Project list */}
        <div className="mt-6">
          {visible.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-14">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCount(projects.length)}
              className="btn"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </main>
  );
}
