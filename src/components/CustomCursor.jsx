import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    // Lerp ring towards dot position
    const animate = () => {
      const speed = 0.12;
      ring.current.x += (pos.current.x - ring.current.x) * speed;
      ring.current.y += (pos.current.y - ring.current.y) * speed;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      const tag = e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]');
      if (tag) setHovering(true);
    };
    const onLeave = (e) => {
      const tag = e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]');
      if (tag) setHovering(false);
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Reference cursor: a single accent-glow circle using mix-blend-difference
  const ringSize = hovering ? 80 : clicking ? 36 : 50;
  const dotSize = hovering ? 0 : clicking ? 10 : 6;
  const opacity = hidden ? 0 : 1;

  return (
    <>
      {/* Trailing glow circle */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          background: '#a99cf0',
          boxShadow: '0 0 30px #8b73e6',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
          opacity,
        }}
      />
      {/* Precise dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          background: '#ffffff',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 100000,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.3s ease',
          opacity,
        }}
      />
    </>
  );
}
