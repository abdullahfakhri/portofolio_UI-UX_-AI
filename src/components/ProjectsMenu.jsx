import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import { img } from '../lib/images';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// `date` may be "YYYY-MM-DD", "YYYY-MM" or missing (falls back to `year`).
// Renders as "Oct 30, 2026", "Oct 2026" or "2026" depending on precision.
export function formatProjectDate(project) {
  const raw = project.date || project.year;
  if (!raw) return '';
  const [y, m, d] = String(raw).split('-');
  if (!m) return y;
  const month = MONTHS[Number(m) - 1];
  return d ? `${month} ${Number(d)}, ${y}` : `${month} ${y}`;
}

// Sortable key: missing month/day sort as the earliest point in that period.
const sortKey = (p) => {
  const [y = '0000', m = '00', d = '00'] = String(p.date || p.year || '').split('-');
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
};

// Newest first; ties keep their order in portfolioData.
const recentProjects = projects
  .filter((p) => !p.comingSoon)
  .map((p, i) => ({ p, i }))
  .sort((a, b) => sortKey(b.p).localeCompare(sortKey(a.p)) || a.i - b.i)
  .map(({ p }) => p);

const CLOSE_DELAY = 120;

export default function ProjectsMenu({ label, className, activeClassName }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const { pathname } = useLocation();

  const active = pathname === '/projects' || pathname.startsWith('/projects/');
  const [featured, ...rest] = recentProjects;
  const list = rest.slice(0, 3);

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const onKeyDown = (e) => {
    if (e.key === 'Escape' && open) {
      setOpen(false);
      triggerRef.current?.focus();
    }
  };
  const onBlur = (e) => {
    if (!wrapperRef.current?.contains(e.relatedTarget)) setOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <RouterLink
        ref={triggerRef}
        to="/projects"
        aria-expanded={open}
        aria-controls="projects-menu"
        className={`${className} inline-flex items-center gap-1 ${active || open ? activeClassName : ''}`}
      >
        {label}
        <FiChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </RouterLink>

      <AnimatePresence>
        {open && featured && (
          // pt-3 is an invisible bridge so the cursor can travel from the link to the panel.
          <div id="projects-menu" className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 lg:block">
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              style={{ transformOrigin: 'top center' }}
              className="w-[720px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-xl shadow-ink/10"
            >
              <div className="grid grid-cols-[260px_1fr] gap-2 p-2">
                {/* Featured: the most recent project */}
                <RouterLink
                  to={`/projects/${featured.slug}`}
                  className="group relative flex min-h-[250px] flex-col justify-end overflow-hidden rounded-xl p-5"
                  style={{ backgroundColor: featured.color }}
                >
                  {featured.image && (
                    <img
                      {...img(featured.image, 'card')}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(13,12,34,0.95) 0%, rgba(13,12,34,0.85) 40%, rgba(13,12,34,0.15) 100%)' }}
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2 py-1 font-display text-[10px] font-semibold uppercase tracking-wider text-ink">
                    Latest
                  </span>
                  <div className="relative">
                    <p className="font-display text-base font-semibold leading-snug text-white">
                      {featured.title}
                    </p>
                    <p className="mt-2 text-sm text-white/80">{formatProjectDate(featured)}</p>
                  </div>
                </RouterLink>

                {/* Next most recent projects */}
                <ul className="flex flex-col gap-1">
                  {list.map((p) => (
                    <li key={p.slug}>
                      <RouterLink
                        to={`/projects/${p.slug}`}
                        className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-surface focus-visible:bg-surface"
                      >
                        <span
                          className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-ink/[0.06]"
                          style={{ backgroundColor: p.color }}
                        >
                          {p.image && (
                            <img {...img(p.image, 'card')} alt="" className="h-full w-full object-cover" />
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-display text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                            {p.title}
                          </span>
                          <span className="mt-1 block text-sm text-gray-500">
                            {p.discipline} · {formatProjectDate(p)}
                          </span>
                        </span>
                      </RouterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t border-ink/10 bg-subtle px-5 py-3">
                <p className="text-sm text-gray-600">Design, build and marketing work, newest first.</p>
                <RouterLink
                  to="/projects"
                  className="group inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink transition-colors hover:text-accent"
                >
                  All projects
                  <FiArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </RouterLink>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
