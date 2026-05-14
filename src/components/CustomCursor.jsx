import { useEffect, useRef, useCallback } from 'react';
import { useCursorContext } from '../hooks/useCursor';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const { interactive } = useCursorContext();
  const posRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef(0);

  const applyInteractiveStyles = useCallback(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (cursor) {
      const cScale = interactive ? 2 : 1;
      cursor.style.transform = `translate(-50%, -50%) scale(${cScale})`;
    }
    if (ring) {
      const rScale = interactive ? 1.4 : 1;
      ring.style.transform = `translate(-50%, -50%) scale(${rScale})`;
      ring.style.borderColor = interactive ? 'var(--accent)' : 'var(--cursor-ring-idle)';
    }
  }, [interactive]);

  useEffect(() => {
    const onMove = (e) => {
      posRef.current.mx = e.clientX;
      posRef.current.my = e.clientY;
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', onMove);

    const tick = () => {
      const { mx, my, rx, ry } = posRef.current;
      posRef.current.rx = rx + (mx - rx) * 0.12;
      posRef.current.ry = ry + (my - ry) * 0.12;
      const ring = ringRef.current;
      if (ring) {
        ring.style.left = `${posRef.current.rx}px`;
        ring.style.top = `${posRef.current.ry}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [applyInteractiveStyles]);

  useEffect(() => {
    applyInteractiveStyles();
  }, [applyInteractiveStyles, interactive]);

  return (
    <>
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
