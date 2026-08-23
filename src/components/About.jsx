import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative bg-navy-900 pt-24 sm:pt-32 lg:pt-48 pb-16 sm:pb-20 overflow-hidden" style={{ marginTop: '-2px' }}>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10" ref={ref}>

        {/* ── Two-column hero intro ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:min-h-[520px]">

          {/* ── LEFT — photo with glow ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            {/* Rotating accent blobs (reference about) */}
            <div className="blob-animate" style={{ width: '180px', height: '180px', top: '3rem', left: '3rem', filter: 'blur(50px)' }} />
            <div className="blob-animate" style={{ width: '180px', height: '180px', right: '0', bottom: '3rem', filter: 'blur(50px)' }} />

            {/* Soft purple radial glow */}
            <div
              className="absolute inset-0 m-auto pointer-events-none w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]"
              style={{
                background: 'radial-gradient(circle at center, rgba(139,115,230,0.32) 0%, rgba(111,79,222,0.14) 45%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            {/* Photo container */}
            <div
              className="relative w-[min(70vw,280px)] lg:w-[clamp(280px,32vw,420px)] h-[min(56svh,340px)] lg:h-[520px]"
            >
              <img
                src="/assets/img/Photo Profile.png"
                alt="Abdullah Hasan Mufid Fakhri"
                className="w-full h-full select-none"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  filter: 'url(#remove-white-bg) drop-shadow(0 0 40px rgba(139,115,230,0.35))',
                }}
                draggable={false}
              />
            </div>

          </motion.div>

          {/* ── RIGHT — text content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-accent text-sm font-display font-semibold tracking-widest uppercase mb-3">
              About Me
            </span>

            <h2 className="font-black leading-[1.05] mb-6" style={{ fontSize: 'clamp(2rem, 9vw, 4.2rem)' }}>
              <span className="gradient-text block">Crafting</span>
              <span className="text-white block">Experiences</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              I'm a <span className="text-white font-semibold">UI/UX Designer</span>, <span className="text-white font-semibold">Product Designer</span> & <span className="text-white font-semibold">Front End Developer</span> passionate about crafting meaningful digital experiences. Driven by curiosity and design thinking, I explore the intersection of <span className="text-accent font-semibold">design and AI</span> to build products that feel intuitive and delightful.
            </p>

            <motion.a
              href="https://drive.google.com/file/d/1xsSGTF6-uJUv9rClZzUzeXtzcLRzrLWB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn self-start"
            >
              Resume
              <FiDownload size={16} />
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
