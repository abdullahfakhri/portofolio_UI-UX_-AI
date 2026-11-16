import { useEffect } from 'react';

// Pauses the endlessly spinning .blob-animate glows while they're scrolled out
// of view, so they don't keep the GPU busy for something nobody can see.
export default function usePauseOffscreen(selector = '.blob-animate') {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.classList.toggle('is-offscreen', !e.isIntersecting);
    });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
