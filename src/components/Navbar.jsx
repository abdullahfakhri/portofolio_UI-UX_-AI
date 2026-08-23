import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useNavigate, useLocation, Link as RouterLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', to: 'home', type: 'scroll' },
  { label: 'About', to: 'about', type: 'scroll' },
  { label: 'Projects', to: '/projects', type: 'route' },
  { label: 'Career Path', to: 'experience', type: 'scroll' },
  { label: 'Contact', to: 'contact', type: 'scroll' },
];

const scrollOpts = { smooth: true, duration: 600, offset: -80 };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to a section. If we're on another route, go home first then scroll.
  const goToSection = (to) => {
    setMobileOpen(false);
    if (isHome) {
      scroller.scrollTo(to, scrollOpts);
    } else {
      navigate('/');
      setTimeout(() => scroller.scrollTo(to, scrollOpts), 120);
    }
  };

  const goToRoute = (to) => {
    setMobileOpen(false);
    navigate(to);
  };

  const linkBase =
    'relative px-4 py-2 text-sm font-display font-semibold text-gray-300 hover:text-accent hover:[text-shadow:0_8px_16px_rgba(139,115,230,0.8)] transition-all cursor-pointer';
  const activeClasses = '!text-accent [text-shadow:0_8px_16px_rgba(139,115,230,0.8)]';

  const renderDesktopLink = (link) => {
    if (link.type === 'route') {
      const active = location.pathname === link.to;
      return (
        <RouterLink
          key={link.label}
          to={link.to}
          className={`${linkBase} ${active ? activeClasses : ''}`}
        >
          {link.label}
        </RouterLink>
      );
    }
    // Scroll link — use react-scroll spy only while on the home page
    if (isHome) {
      return (
        <ScrollLink
          key={link.label}
          to={link.to}
          smooth
          duration={600}
          offset={-80}
          spy
          activeClass={activeClasses}
          className={linkBase}
        >
          {link.label}
        </ScrollLink>
      );
    }
    return (
      <button key={link.label} onClick={() => goToSection(link.to)} className={linkBase}>
        {link.label}
      </button>
    );
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between gap-3">
        {/* Logo */}
        <button onClick={() => goToSection('home')} className="cursor-pointer min-w-0">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <span className="font-display font-semibold text-white text-sm sm:text-base whitespace-nowrap transition-colors hover:text-accent">
              Abdullah<span className="text-accent"> Fakhri</span>
            </span>
          </motion.div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">{navLinks.map(renderDesktopLink)}</div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => goToSection('contact')}
            className="hidden md:inline-flex btn text-sm py-2.5 px-6 cursor-pointer"
          >
            Hire Me
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden text-gray-400 hover:text-white p-2 -mr-2"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-800/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <div className="px-5 sm:px-6 py-4 flex flex-col gap-1 max-h-[70svh] overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.type === 'route') goToRoute(link.to);
                    else goToSection(link.to);
                  }}
                  className="py-3 text-left text-gray-300 hover:text-accent font-display font-medium transition-colors cursor-pointer border-b border-white/5 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => goToSection('contact')}
                className="btn-primary text-center mt-3 cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
