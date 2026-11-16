export function About() {
  return (
    <section
      id="about"
      className="section wrap about-section"
      aria-labelledby="about-title"
    >
      <div className="about-label">
        <p className="eyebrow">The person behind the code</p>
        <h2 id="about-title">
          A little
          <br />
          <em>about me.</em>
        </h2>
        <span className="about-signature">Moti Alemu</span>
      </div>
      <div className="about-copy">
        <p className="about-lead">
          I like understanding
          <br />
          how the pieces <em>fit.</em>
        </p>
        <p>
          I’m a software engineer interested in the work that makes an
          application reliable: organizing data, designing clear APIs, and
          connecting the system from end to end.
        </p>
        <p>
          My focus is Python and backend development, alongside PHP/Laravel and
          full-stack web applications. Automation, data processing, and
          AI/ML-related tools are other areas I explore through practical
          projects.
        </p>
        <p>
          My approach is straightforward: understand the problem, build a clear
          solution, and keep improving the details. I care about code that
          another person can pick up and work with.
        </p>
      </div>
    </section>
  );
}
