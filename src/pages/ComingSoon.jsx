import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

// Same animation used by the "Coming Soon" project card.
const LOTTIE_SRC = 'https://lottie.host/ba1d1fd5-b7d9-4764-8d7b-acb490af6c43/ex9SuLjnGE.lottie';

export default function ComingSoon() {
  return (
    <main className="relative bg-navy-900 overflow-hidden min-h-screen">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[460px] pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,115,230,0.20) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 pt-36 pb-24 min-h-screen flex flex-col">
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

        {/* Centered content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <dotlottie-wc
              src={LOTTIE_SRC}
              speed="1"
              loop
              autoplay
              style={{ width: 'clamp(240px, 60vw, 360px)', height: 'clamp(240px, 60vw, 360px)' }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-black leading-[1.05] mt-4"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}
          >
            <span className="gradient-text">Coming Soon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg mt-5 max-w-md"
          >
            My Dribbble portfolio is still in the works. Fresh shots and design
            explorations will land here soon — stay tuned ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8"
          >
            <RouterLink to="/projects" className="btn">
              View my projects
            </RouterLink>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
