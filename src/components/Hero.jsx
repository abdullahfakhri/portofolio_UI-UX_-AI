import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiInstagram, FiFileText } from 'react-icons/fi';
import { SiDribbble } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const MotionRouterLink = motion(RouterLink);

const socialLinks = [
  { icon: <FiLinkedin size={20} />, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: <FiGithub size={20} />, href: personalInfo.social.github, label: 'GitHub' },
  { icon: <SiDribbble size={20} />, href: personalInfo.social.dribbble, label: 'Dribbble' },
  { icon: <FiInstagram size={20} />, href: personalInfo.social.instagram, label: 'Instagram' },
];

const typeRoles = personalInfo.roles.flatMap(r => [r, 2000]);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: '115vh',
        background: 'linear-gradient(180deg, #05040f 0%, #07091a 60%, #0a0f1e 100%)',
      }}
    >
      {/* Rotating accent blob behind photo (reference signature) */}
      <div
        className="blob-animate"
        style={{
          width: '460px',
          height: '460px',
          left: '50%',
          bottom: '4rem',
          transform: 'translateX(-50%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Soft purple radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(139,115,230,0.40) 0%, rgba(111,79,222,0.16) 45%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      {/* 3-column grid — stretches full section height */}
      <div
        className="relative z-10 grid max-w-7xl mx-auto w-full px-12"
        style={{
          gridTemplateColumns: '1fr auto 1fr',
          minHeight: '115vh',
        }}
      >
        {/* ── LEFT ── */}
        <div className="flex flex-col py-28" style={{ minWidth: 0 }}>
          {/* Top: circle + hello + name */}
          <div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-dark mb-5 shadow-lg shadow-accent/40"
            />

            <motion.p
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent text-lg font-display font-medium mb-3"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="font-black text-white leading-[1.05]"
              // style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)' }}
              style={{ fontSize: '64px' }}
            >
              Abdullah<br />
              Hasan Mufid Fakhri<br />
            </motion.h1>
          </div>

          {/* Bottom: social icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-start gap-5 mt-24"
          >
            {socialLinks.map((s, i) => {
              const anim = {
                initial: { opacity: 0, x: -16 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.75 + i * 0.08 },
                whileHover: { x: 6 },
              };
              const className = 'text-gray-500 hover:text-accent transition-colors';

              // Internal routes (e.g. Dribbble → /coming-soon) use the router.
              return s.href.startsWith('/') ? (
                <MotionRouterLink key={s.label} to={s.href} aria-label={s.label} className={className} {...anim}>
                  {s.icon}
                </MotionRouterLink>
              ) : (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={className}
                  {...anim}
                >
                  {s.icon}
                </motion.a>
              );
            })}
            <div className="w-px h-10 bg-gradient-to-b from-gray-700 to-transparent mt-1" />
          </motion.div>
        </div>

        {/* ── CENTER — full-height photo ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex items-start justify-center pt-28"
          style={{ width: 'clamp(200px, 20vw, 300px)' }}
        >
          <img
            src="/assets/img/Photo Profile.png"
            alt="Abdullah Hasan Mufid Fakhri"
            className="w-full select-none"
            style={{
              height: '85vh',
              objectFit: 'cover',
              objectPosition: 'top center',
              filter: 'drop-shadow(0 0 40px rgba(139,115,230,0.30))',
            }}
            draggable={false}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div
            style={{ display: 'none', height: '110vh' }}
            className="w-full flex flex-col items-center justify-center gap-4 text-gray-600"
          >
            <div className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-600/30 to-indigo-600/20 border-2 border-blue-500/20 flex items-center justify-center text-6xl font-black gradient-text">
              AF
            </div>
            <p className="text-sm text-center">
              Letakkan foto di<br />
              <code className="text-blue-400">public/assets/img/</code>
            </p>
          </div>
        </motion.div>

        {/* ── RIGHT ── */}
        <div className="flex flex-col justify-start items-start py-28 pl-8" style={{ minWidth: 0 }}>
          <motion.p
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-accent text-2xl font-display font-medium mb-3 mt-[4.25rem]"
          >
            Creative
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display font-black leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)' }}
          >
            <TypeAnimation
              sequence={typeRoles}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="gradient-text block"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <Link to="about" smooth duration={600} offset={-80} className="cursor-none">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-accent transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #0a0f1e 100%)' }}
      />
    </section>
  );
}
