import { useState } from 'react';
import { useCursorInteractive } from '../hooks/useCursor';
import HeroMarquee from './HeroMarquee';

export default function Hero() {
  const cursor = useCursorInteractive();
  const [hasPhoto, setHasPhoto] = useState(undefined);

  return (
    <section id="home" className="hero-ref" aria-labelledby="hero-heading">
      <div className="hero-ref__noise" aria-hidden="true" />
      <div className="hero-ref__glow" aria-hidden="true" />

      <div className="hero-ref__inner">
        <div className="hero-ref__left">
          <p className="hero-ref__hi">Hi, I am</p>
          <div className="hero-ref__trust">
            <span className="hero-ref__trust-icon" aria-hidden="true">
              +
            </span>
            <span>Trusted by teams · 20+ projects shipped</span>
          </div>
          <h1 id="hero-heading" className="hero-ref__headline">
            Full-stack products that turn ideas into polished experiences.
          </h1>
          <p className="hero-ref__sub">
            React, Node, and cloud-ready systems — fast, accessible, and built to scale with your roadmap. But generally works on <span className="nav-ref__brand-mark ">FRONTEND</span> projects.
          </p>
          <div className="hero-ref__actions">
            <a href="#contact" className="hero-ref__btn-primary" {...cursor}>
              <span>Start a project</span>
              <span className="hero-ref__btn-icon" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#projects" className="hero-ref__btn-ghost" {...cursor}>
              View my work
              <span className="hero-ref__btn-arrow" aria-hidden="true">
                ↘
              </span>
            </a>
            <a
              href="/ShobhitYadav_cv.pdf"
              download="ShobhitYadav_cv.pdf"
              className="hero-ref__link-resume"
              {...cursor}
              aria-label="Download resume PDF"
            >
              Resume PDF
            </a>
          </div>
        </div>

        <div className="hero-ref__center">
          <div className="hero-ref__portrait">
            <div className="hero-ref__portrait-ring" aria-hidden="true" />
            {hasPhoto !== false && (
              <img
                src="public/portrait.png"
                alt="Shobhit Yadav"
                className={`hero-ref__photo${hasPhoto === true ? ' is-visible' : ''}`}
                onLoad={() => setHasPhoto(true)}
                onError={() => setHasPhoto(false)}
              />
            )}
            {hasPhoto !== true && (
              <span className="hero-ref__initials" aria-hidden="true">
                SY
              </span>
            )}
          </div>
        </div>

        <aside className="hero-ref__right" aria-label="Highlights">
          <div className="hero-ref__glass">
            <div className="hero-ref__avatars" aria-hidden="true">
              <span className="hero-ref__avatar" style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }} />
              <span className="hero-ref__avatar" style={{ background: 'linear-gradient(135deg,#78716c,#44403c)' }} />
              <span className="hero-ref__avatar" style={{ background: 'linear-gradient(135deg,#0ea5e9,#0369a1)' }} />
              <span className="hero-ref__avatar" style={{ background: 'linear-gradient(135deg,#a855f7,#7c3aed)' }} />
            </div>
            <p className="hero-ref__glass-text">
              Clear communication, predictable delivery, and code you can hand off — from MVP to production.
            </p>
            <div className="hero-ref__glass-actions">
              <a href="#contact" className="hero-ref__chip hero-ref__chip--accent" {...cursor}>
                Free consultation
              </a>
              <a href="mailto:shobhit736d@gmail.com" className="hero-ref__chip" {...cursor}>
                24h response
              </a>
            </div>
          </div>
        </aside>
      </div>

      <HeroMarquee />

      <div className="hero-ref__scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <span className="hero-ref__scroll-line" />
      </div>
    </section>
  );
}
