import { projects } from "@/lib/projects";

function ProjectDiagram({ type }: { type: string }) {
  const steps =
    type === "monitor"
      ? ["Register endpoint", "Schedule checks", "Record results"]
      : type === "stock"
        ? ["Receive goods", "Track inventory", "Issue & transfer"]
        : ["Enroll student", "Schedule training", "Record exams"];
  return (
    <div className={`project-diagram ${type}`}>
      <span className="diagram-label">System at a glance</span>
      <div className="diagram-flow">
        {steps.map((step, i) => (
          <div key={step}>
            <span className="diagram-step">0{i + 1}</span>
            <span>{step}</span>
            {i < 2 && (
              <span className="flow-arrow" aria-hidden="true">
                ↓
              </span>
            )}
          </div>
        ))}
      </div>
      <span className="diagram-caption">Workflow illustration</span>
    </div>
  );
}
export function Projects() {
  return (
    <section
      id="projects"
      className="section wrap"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2 id="work-title">Built to do something useful.</h2>
        </div>
        <p>
          A closer look at the systems I’m building.
          <br />
          Real code, open to explore.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.repo}>
            <ProjectDiagram type={project.type} />
            <div className="project-copy">
              <p className="eyebrow">
                {project.number} / {project.category}
              </p>
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
                Explore repository <span aria-hidden="true">↗</span>
                <span className="sr-only">: {project.title}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <aside className="ongoing">
        <p className="eyebrow">On the workbench / In progress</p>
        <div>
          <h3>Repo-Sage</h3>
          <p>
            Exploring codebase question answering with Python and FastAPI: index
            a repository, retrieve relevant code, and return answers with file
            and line citations.
          </p>
        </div>
        <a className="text-link" href="https://github.com/tote10/Repo-Sage">
          Follow the project <span aria-hidden="true">↗</span>
        </a>
      </aside>
      <a
        className="text-link all-projects"
        href="https://github.com/tote10?tab=repositories"
      >
        All repositories on GitHub <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
