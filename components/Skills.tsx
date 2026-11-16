const groups = [
  {
    name: "Backend engineering",
    tools: "Python · FastAPI · PHP · Laravel",
    note: "Application logic, REST APIs, and automation.",
  },
  {
    name: "Data & persistence",
    tools: "PostgreSQL · MySQL · SQLite · SQL",
    note: "Relational data and database-driven applications.",
  },
  {
    name: "Across the stack",
    tools: "JavaScript · React · HTML · CSS",
    note: "Interfaces that connect to the systems behind them.",
  },
  {
    name: "Development workflow",
    tools: "Git · GitHub · Docker",
    note: "Version control and reproducible development environments.",
  },
];
export function Skills() {
  return (
    <section
      id="skills"
      className="skills-section section"
      aria-labelledby="skills-title"
    >
      <div className="wrap skills-layout">
        <div>
          <p className="eyebrow">Technical toolkit</p>
          <h2 id="skills-title">
            What I<br />
            <em>work with.</em>
          </h2>
        </div>
        <dl className="skill-index">
          {groups.map((group, i) => (
            <div key={group.name}>
              <dt>
                <span className="index-number">0{i + 1}</span>
                {group.name}
              </dt>
              <dd>
                <strong>{group.tools}</strong>
                <p>{group.note}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
