import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const backToTop = () => {
    if (location.pathname === '/') {
      scroller.scrollTo('home', { smooth: true, duration: 800 });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <footer className="relative bg-subtle border-t border-ink/10 py-12 sm:py-16 overflow-hidden text-center">
      {/* Rotating accent blob (reference footer) */}
      <div className="blob-animate" style={{ right: '-3rem', bottom: '-3rem' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 flex flex-col items-center gap-3">
        <p className="text-ink">
          All Rights Reserved By{' '}
          <span className="text-accent font-display">Abdullah Fakhri</span>
        </p>

        <p className="text-gray-500 font-display text-sm">
          &copy; {new Date().getFullYear()}
        </p>

        <motion.button
          onClick={backToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 w-11 h-11 rounded-full grid place-items-center bg-ink border-[3px] border-ink text-white hover:bg-accent hover:border-accent transition-colors"
          aria-label="Back to top"
        >
          <FiArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
