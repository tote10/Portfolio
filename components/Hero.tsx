export function Hero() {
  return (
    <section id="home" className="hero wrap" aria-labelledby="intro-title">
      <div className="hero-top">
        <p className="eyebrow">Moti Alemu / Software Engineer</p>
        <p className="availability">
          <span aria-hidden="true" />
          Available for meaningful projects
        </p>
      </div>
      <h1 id="intro-title">
        Behind every interface,
        <br />
        there’s a system.
        <br />
        <em>I like building that.</em>
      </h1>
      <div className="hero-bottom">
        <p>
          I’m Moti, a software engineer focused on Python, backend engineering,
          and the details that make software work.
        </p>
        <div className="hero-links">
          <a className="button" href="#projects">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="https://github.com/tote10">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-footnote">
        <span>Based in Adama, Ethiopia</span>
        <span>Python · APIs · Database-driven applications</span>
      </div>
    </section>
  );
}
