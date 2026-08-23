import { motion } from 'framer-motion';
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link as RouterLink, useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';

// Big project visual — reuses the same gradient / image treatment as the cards.
function ProjectVisual({ project, num, className = '', miniNumber = false }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[2rem] border border-white/[0.06] ${className}`}
      style={{ background: `linear-gradient(135deg, ${project.color}33 0%, #0d1530 65%)` }}
    >
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      ) : (
        <>
          <div className="blob" style={{ right: '-5rem', bottom: '-5rem', width: '240px', height: '240px' }} />
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
            <span
              className="font-black opacity-20 select-none"
              style={{ color: project.color, fontSize: miniNumber ? '4rem' : '9rem' }}
            >
              {num}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function MetaItem({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <p className="font-display text-xs uppercase tracking-wide text-gray-500 mb-1">{label}</p>
      <p className="text-white text-sm">{value}</p>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => (p.slug || String(p.id)) === slug);

  // Unknown slug (or the "Coming Soon" placeholder) → send back to the listing.
  if (index === -1 || projects[index].comingSoon) return <Navigate to="/projects" replace />;

  const project = projects[index];
  const num = String(project.id).padStart(2, '0');
  const tags = project.techstack.split(',').map((t) => t.trim());
  const nextProject = projects[(index + 1) % projects.length];

  const sections = project.sections || [];

  return (
    <main className="relative bg-navy-900 overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[460px] pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,115,230,0.20) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RouterLink
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm font-display"
          >
            <FiArrowLeft />
            Back to projects
          </RouterLink>
        </motion.div>

        {/* Hero */}
        <header className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="font-display font-black leading-none gradient-text" style={{ fontSize: 'clamp(1.9rem, 8vw, 2.25rem)' }}>
              {num}
            </span>
            <span className="font-display text-gray-400 text-xs sm:text-sm tracking-wide uppercase">
              {project.category} · {project.year}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-[1.05]"
            style={{ fontSize: 'clamp(1.9rem, 7.5vw, 4rem)' }}
          >
            Designing with purpose:
            <br />
            <span className="gradient-text">{project.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-400 text-base sm:text-lg mt-5 sm:mt-6 max-w-2xl leading-relaxed"
          >
            {project.overview || project.description}
          </motion.p>
        </header>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <ProjectVisual project={project} num={num} className="aspect-[16/9]" />
        </motion.div>

        {/* Meta + tech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-14 py-8 sm:py-10 border-y border-white/[0.06]"
        >
          <MetaItem label="Role" value={project.role} />
          <MetaItem label="Category" value={project.category} />
          <MetaItem label="Timeline" value={project.timeline} />
          <MetaItem label="Year" value={project.year} />
          <div className="col-span-2 lg:col-span-4">
            <p className="font-display text-xs uppercase tracking-wide text-gray-500 mb-2">Techstack</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="skill-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Narrative sections */}
        <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-16">
          {sections.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-3xl">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display text-accent text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                    {s.title}
                  </h2>
                </div>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed pl-0 md:pl-9">{s.body}</p>
              </div>

              {/* Full-width case-study images */}
              {s.images && s.images.length > 0 && (
                <div className="mt-8 space-y-6">
                  {s.images.map((src) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-navy-800"
                    >
                      <img src={src} alt={s.title} className="w-full h-auto block" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </motion.section>
          ))}
        </div>

        {/* Live link */}
        {project.link && (
          <div className="mt-16">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn group/cta">
              Visit live project
              <FiArrowUpRight className="transition-transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
            </a>
          </div>
        )}

        {/* Next project navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-white/[0.06]"
        >
          <p className="font-display text-xs uppercase tracking-wide text-gray-500 mb-4">Next project</p>
          <RouterLink
            to={`/projects/${nextProject.slug || nextProject.id}`}
            className="group flex items-center justify-between gap-4 sm:gap-6"
          >
            <div>
              <h3 className="font-display font-bold text-white text-xl sm:text-2xl group-hover:text-accent transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {nextProject.category} · {nextProject.year}
              </p>
            </div>
            <span className="grid place-items-center w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full bg-navy-900 border-[3px] border-accent text-white text-2xl transition-all duration-300 group-hover:shadow-[0_0_24px_#8b73e6]">
              <FiArrowRight />
            </span>
          </RouterLink>
        </motion.div>
      </div>
    </main>
  );
}
