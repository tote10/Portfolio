const services = [
  [
    "Python automation",
    "Replace repetitive work with focused scripts for files, workflows, and everyday tasks.",
  ],
  [
    "Backend & APIs",
    "Build application logic, REST endpoints, and database integrations with FastAPI or PHP/Laravel.",
  ],
  [
    "Web applications",
    "Connect the interface, API, and database in practical websites and internal tools.",
  ],
  [
    "Debugging & data tools",
    "Trace application bugs, process data, and build utilities around a specific problem.",
  ],
];
export function Services() {
  return (
    <section
      id="services"
      className="services-section section"
      aria-labelledby="services-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">For teams & independent projects</p>
            <h2 id="services-title">
              Let’s make
              <br />
              <em>something work.</em>
            </h2>
          </div>
          <p>
            Have a clear problem to solve?
            <br />
            Here’s where I can contribute.
          </p>
        </div>
        <div className="service-list">
          {services.map(([title, text], i) => (
            <article key={title}>
              <span className="index-number">0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span aria-hidden="true" className="service-arrow">
                ↗
              </span>
            </article>
          ))}
        </div>
        <a className="text-link" href="#contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
