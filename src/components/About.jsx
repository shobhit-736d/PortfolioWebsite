import { useCursorInteractive } from '../hooks/useCursor';
import { useSectionReveal } from '../hooks/useSectionReveal';

export default function About() {
  const sectionRef = useSectionReveal();
  const cursor = useCursorInteractive();

  return (
    <section id="about" ref={sectionRef} aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">01 —</span>
          <h2 id="about-heading" className="section-title">
            About <em>Me</em>
          </h2>
          <div className="section-line" />
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Hi, I&apos;m <strong>Shobhit Yadav</strong> — a passionate full-stack developer with a knack for turning complex problems into clean, elegant code. I thrive at the intersection of creativity and technology.
            </p>
            <p>
              With a strong foundation in both <strong>frontend and backend development</strong>, I build end-to-end digital products that are not just functional, but genuinely delightful to use.
            </p>
            <p>
              I&apos;m driven by curiosity and a desire to build things that <strong>matter</strong>. Whether it&apos;s architecting a scalable backend system or crafting pixel-perfect UI components, I bring the same level of dedication to every layer of the stack.
            </p>
            <p>
              When I&apos;m not coding, I enjoy exploring the latest in tech, contributing to open source, and leveling up my problem-solving skills through competitive programming.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-dot" />
                <span>Open-source contributor & lifelong learner</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-dot" />
                <span>Passionate about clean architecture and developer experience</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-dot" />
                <span>Strong advocate for accessible & performant web</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-dot" />
                <span>Gnerally works on frontend projects</span>
              </div>
            </div>
          </div>
          <div className="about-side reveal reveal-delay-2">
            <div className="info-card">
              <div className="info-card-label">Location</div>
              <div className="info-card-value">India 🇮🇳</div>
            </div>
            <div className="info-card">
              <div className="info-card-label">Focus Area</div>
              <div className="info-card-value">Full-Stack Web Development</div>
            </div>
            <div className="info-card">
              <div className="info-card-label">Currently Exploring</div>
              <div className="info-card-value">AI Integration & System Design</div>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: '0.7rem',
                  color: 'var(--gold)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                Interests & Hobbies
              </p>
              <div className="hobbies-grid">
                {['Open Source', 'Frontend Development', 'UI/UX Design', 'System Design', 'Photography', 'Tech Blogs', 'Gaming'].map((h) => (
                  <div key={h} className="hobby-tag" {...cursor}>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
