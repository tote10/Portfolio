import { projects } from "@/lib/projects";

type Project = (typeof projects)[number];
function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="project-copy">
      <p className="eyebrow">{project.category}</p>
      <h3>
        <a href={`https://github.com/tote10/${project.repo}`}>
          {project.title}
          <span aria-hidden="true">↗</span>
        </a>
      </h3>
      <p>{project.description}</p>
      <p className="project-detail">{project.detail}</p>
      <ul className="technologies" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a
        className="text-link"
        href={`https://github.com/tote10/${project.repo}`}
      >
        Read the code <span aria-hidden="true">↗</span>
        <span className="sr-only">: {project.title}</span>
      </a>
    </div>
  );
}
export function Projects() {
  return (
    <section
      id="projects"
      className="work-section section"
      aria-labelledby="work-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few things I’ve built</p>
            <h2 id="work-title">
              Selected <em>work.</em>
            </h2>
          </div>
          <a
            className="text-link"
            href="https://github.com/tote10?tab=repositories"
          >
            All repositories <span aria-hidden="true">↗</span>
          </a>
        </div>
        <article className="featured-project">
          <div className="featured-intro">
            <span className="project-number">01 /</span>
            <ProjectContent project={projects[0]} />
          </div>
          <div className="monitor-study">
            <p className="eyebrow">
              API Health Monitor / Architecture overview
            </p>
            <div className="architecture">
              <div>
                <span>HTTP</span>
                <p>The endpoints you depend on</p>
              </div>
              <span className="architecture-arrow" aria-hidden="true">
                ↓
              </span>
              <div>
                <span>Check.</span>
                <p>Scheduled requests & response times</p>
              </div>
              <span className="architecture-arrow" aria-hidden="true">
                ↓
              </span>
              <div>
                <span>Know.</span>
                <p>Stored results & a history dashboard</p>
              </div>
            </div>
            <p className="study-note">Python / FastAPI / SQLAlchemy</p>
          </div>
        </article>
        <div className="project-pair">
          {projects.slice(1).map((project) => (
            <article className="compact-project" key={project.repo}>
              <div className="project-topline">
                <span className="project-number">{project.number} /</span>
                <span className="eyebrow">
                  {project.type === "stock"
                    ? "Inventory & accountability"
                    : "People & administration"}
                </span>
              </div>
              <ProjectContent project={project} />
            </article>
          ))}
        </div>
        <aside className="ongoing">
          <div>
            <p className="eyebrow">Currently exploring</p>
            <h3>Repo-Sage</h3>
          </div>
          <p>
            A Python/FastAPI project for asking questions about a codebase, with
            answers linked to source files and lines. A work in progress.
          </p>
          <a className="text-link" href="https://github.com/tote10/Repo-Sage">
            Look inside <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
