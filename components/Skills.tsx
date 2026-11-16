const groups = [
  [
    "Languages & foundations",
    "Python, PHP, JavaScript, SQL",
    "Application logic, scripting, and relational data.",
  ],
  [
    "Backend & data",
    "FastAPI, Laravel, REST APIs",
    "Database-driven applications with PostgreSQL, MySQL, and SQLite.",
  ],
  [
    "Interfaces & workflow",
    "React, HTML, CSS, Git",
    "Connecting interfaces to APIs; version control and Docker-based development.",
  ],
];
export function Skills() {
  return (
    <section
      id="skills"
      className="section wrap"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / Technical focus</p>
          <h2 id="skills-title">The tools follow the problem.</h2>
        </div>
      </div>
      <div className="skill-grid">
        {groups.map(([title, tools, text]) => (
          <div key={title}>
            <h3>{title}</h3>
            <p className="skill-tools">{tools}</p>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
