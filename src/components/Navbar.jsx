import { useEffect, useState } from 'react';
import { useCursorInteractive } from '../hooks/useCursor';

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'contact'];

const PILL_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Hire Me' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const cursor = useCursorInteractive();
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const onScroll = () => {
      let current = 'home';
      const y = window.scrollY;
      sections.forEach((s) => {
        if (s && y >= s.offsetTop - 120) current = s.id;
      });
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isLight = theme === 'light';

  return (
    <nav className="nav-ref" aria-label="Primary navigation">
      <a href="#home" className="nav-ref__brand" {...cursor} aria-label="Shobhit Yadav — home">
        SHOBHIT<span className="nav-ref__brand-mark">YADAV</span>
      </a>

      <div className="nav-ref__pill-wrap">
        <ul className="nav-ref__pill" role="list">
          {PILL_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-ref__pill-link${activeId === id ? ' is-active' : ''}`}
                {...cursor}
                aria-current={activeId === id ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="nav-ref__theme"
        id="themeToggle"
        onClick={onToggleTheme}
        {...cursor}
        aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
        aria-pressed={isLight}
      >
        {isLight ? '◑' : '◐'}
      </button>
    </nav>
  );
}
