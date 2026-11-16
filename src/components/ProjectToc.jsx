import { useEffect, useRef, useState } from 'react';

// Space kept above a section heading when jumping to it (fixed navbar + air).
const OFFSET = 120;

// Page Y of an element from layout offsets, so the sections' entrance
// translate animation doesn't skew where we scroll to.
function pageTop(el) {
  let y = 0;
  for (let node = el; node; node = node.offsetParent) y += node.offsetTop;
  return y;
}

export function sectionId(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fixed table of contents in the left gutter. Only shown on wide screens.
// Highlights the section currently being read.
export default function ProjectToc({ title, items, containerId }) {
  const [active, setActive] = useState(items[0]?.id);
  const [visible, setVisible] = useState(false);
  // While a click-triggered scroll runs, keep the clicked item highlighted.
  const lockUntil = useRef(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const container = document.getElementById(containerId);
      if (container) {
        const rect = container.getBoundingClientRect();
        // Shown from the top of the page; hidden once the reader is past the case study.
        setVisible(rect.bottom > vh * 0.3);
      }
      if (Date.now() < lockUntil.current) return;
      const line = window.scrollY + OFFSET + 40;
      let current = items[0]?.id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && pageTop(el) <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items, containerId]);

  // Opening a link like /projects/bacaanku#design-system jumps to that section
  // (after the route's scroll-to-top has run).
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id || !items.some((item) => item.id === id)) return;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: pageTop(el) - OFFSET, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    setActive(id);
    lockUntil.current = Date.now() + 900;
    window.scrollTo({ top: pageTop(el) - OFFSET, behavior: prefersReducedMotion() ? 'instant' : 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    history.replaceState(null, '', window.location.pathname);
  };

  if (items.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className={`hidden min-[1440px]:block fixed left-8 top-32 z-30 w-[168px] transition-[opacity,visibility] duration-300 ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <a
        href="#top"
        onClick={toTop}
        className="block text-sm font-semibold text-ink mb-4 hover:text-accent transition-colors"
      >
        {title}
      </a>
      <ul className="border-l border-ink/10">
        {items.map(({ id, label }) => {
          const isActive = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={isActive ? 'location' : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors ${
                  isActive
                    ? 'border-accent text-ink'
                    : 'border-transparent text-gray-500 hover:text-ink'
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
