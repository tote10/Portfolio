const services = [
  [
    "Python automation",
    "Scripts that take care of repetitive tasks, file handling, and everyday workflows.",
  ],
  [
    "Backend APIs",
    "REST endpoints, database integration, and application logic with FastAPI or PHP/Laravel.",
  ],
  [
    "Web development",
    "Practical web applications and internal tools, from the interface to the database.",
  ],
  [
    "Debugging & data tools",
    "Investigating application bugs, processing data, and building focused utilities.",
  ],
];
export function Services() {
  return (
    <section
      id="services"
      className="section wrap"
      aria-labelledby="services-title"
    >
      <div className="services-grid">
        <div>
          <p className="eyebrow">04 / Working together</p>
          <h2 id="services-title">
            A useful extra pair
            <br />
            of hands.
          </h2>
          <p className="services-intro">
            Have a well-defined problem or a project that needs steady progress?
            Here’s where I can help.
          </p>
          <a className="text-link" href="#contact">
            Tell me what you’re working on <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="service-list">
          {services.map(([title, text], i) => (
            <article key={title}>
              <span className="eyebrow">0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
