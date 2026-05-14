import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="app-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading portfolio"
    >
      <div className="app-loader__inner">
        <div className="app-loader__line" />
        <span className="app-loader__label">Loading</span>
      </div>
    </motion.div>
  );
}
