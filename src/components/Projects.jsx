import projectsData from '../data/projects.json';
import { useCursorInteractive } from '../hooks/useCursor';
import { useSectionReveal } from '../hooks/useSectionReveal';

const delayClass = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

export default function Projects() {
  const sectionRef = useSectionReveal();
  const cursor = useCursorInteractive();

  return (
    <section id="projects" ref={sectionRef} aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">02 —</span>
          <h2 id="projects-heading" className="section-title">
            Featured <em>Projects</em>
          </h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className={`project-card reveal ${delayClass[index % 3]}`}
              {...cursor}
            >
              <div className={`project-card-header ${project.headerClass}`}>
                <span className="proj-icon" aria-hidden="true">
                  {project.icon}
                </span>
                <span className="proj-type-badge">{project.type}</span>
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="proj-link" {...cursor}>
                    Live Demo
                  </a>
                  <a href={project.repoUrl} className="proj-link" {...cursor}>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
