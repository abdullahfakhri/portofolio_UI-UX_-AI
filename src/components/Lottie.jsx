import { useEffect, useRef, useState } from 'react';

const PLAYER_SRC = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.14/dist/dotlottie-wc.js';

let loading;
function loadPlayer() {
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.type = 'module';
      s.src = PLAYER_SRC;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return loading;
}

// Lottie animation whose player (script + ~500 KB of WASM) is only fetched
// once the animation is about to scroll into view.
export default function Lottie({ src, style }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        loadPlayer().then(() => setReady(true), () => {});
      },
      { rootMargin: '300px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={style}>
      {ready && <dotlottie-wc src={src} speed="1" loop autoplay style={{ width: '100%', height: '100%' }} />}
    </div>
  );
}
