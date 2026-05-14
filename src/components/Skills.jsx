import { useCursorInteractive } from '../hooks/useCursor';
import { useSectionReveal } from '../hooks/useSectionReveal';

const tools = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'Python',
  'Java',
  'C',
  'SQL',
  'MongoDB',
  'Git',
  'GitHub',
  'TailwindCSS',
  'Vite',
  'Vercel',
  'Netlify'
];

const categories = [
  {
    title: 'Frontend',
    delay: 'reveal-delay-1',
    skills: [
      { name: 'React', pct: 92 },
      { name: 'JavaScript / TypeScript', pct: 90 },
      { name: 'HTML5 / CSS3 / TailwindCSS', pct: 95 },
      { name: 'Framer Motion / Animations', pct: 80 },
    ],
  },
  {
    title: 'Backend',
    delay: 'reveal-delay-2',
    skills: [
      { name: 'Node.js / Express', pct: 88 },
      { name: 'MySQL', pct: 85 },
      { name: 'MongoDB', pct: 82 },
    ],
  },
  {
    title: 'Tools & DevOps',
    delay: 'reveal-delay-3',
    skills: [
      { name: 'Git / GitHub', pct: 93 },
      { name: 'Vercel / Netlify', pct: 76 },
      { name: 'Vite', pct: 80 },
    ],
  },
  {
    title: 'Soft Skills',
    delay: 'reveal-delay-4',
    skills: [
      { name: 'Problem Solving', pct: 95 },
      { name: 'Communication', pct: 88 },
      { name: 'Team Collaboration', pct: 90 },
      { name: 'Time Management', pct: 85 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useSectionReveal();
  const cursor = useCursorInteractive();

  return (
    <section id="skills" ref={sectionRef} aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">03 —</span>
          <h2 id="skills-heading" className="section-title">
            My <em>Skills</em>
          </h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.title} className={`skill-category reveal ${cat.delay}`}>
              <h3>{cat.title}</h3>
              {cat.skills.map((s) => (
                <div key={s.name} className="skill-item">
                  <div className="skill-top">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" data-width={s.pct} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="skills-icons-section reveal" style={{ marginTop: '3.5rem' }}>
          <h3>Technologies & Tools</h3>
          <div className="tools-grid">
            {tools.map((t) => (
              <div key={t} className="tool-chip" {...cursor}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
