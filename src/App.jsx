import { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CursorProvider } from './context/CursorProvider';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

const THEME_KEY = 'portfolio-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  return window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  const onToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <CursorProvider>
      <CustomCursor />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <HomePage />
          </motion.div>
        )}
      </AnimatePresence>
    </CursorProvider>
  );
}
