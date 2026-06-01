import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/5 py-16 overflow-hidden text-center">
      {/* Rotating accent blob (reference footer) */}
      <div className="blob-animate" style={{ right: '-3rem', bottom: '-3rem' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center gap-3">
        <p className="text-white">
          All Rights Reserved By{' '}
          <span className="text-accent font-display">Abdullah Fakhri</span>
        </p>

        <p className="text-gray-500 font-display text-sm">
          &copy; {new Date().getFullYear()}
        </p>

        <Link to="home" smooth duration={800}>
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 w-11 h-11 rounded-full grid place-items-center bg-navy-900 border-[3px] border-accent text-white hover:shadow-[0_0_24px_#8b73e6] transition-shadow"
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </Link>
      </div>
    </footer>
  );
}
