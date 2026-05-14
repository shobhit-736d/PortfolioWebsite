import { useCursorInteractive } from '../hooks/useCursor';

export default function Footer() {
  const cursor = useCursorInteractive();

  return (
    <footer>
      <div className="footer-logo">Shobhit Yadav</div>
      <div className="footer-copy">© 2026 Shobhit Yadav · Built with passion</div>
      <a href="#home" className="footer-back" {...cursor} aria-label="Back to top of page">
        Back to top ↑
      </a>
    </footer>
  );
}
