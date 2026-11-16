import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="hero wrap" aria-labelledby="intro-title">
      <div className="hero-copy">
        <p className="eyebrow">Software Engineer · Adama, Ethiopia</p>
        <h1 id="intro-title">
          Moti
          <br />
          <span>Alemu.</span>
        </h1>
        <p className="hero-intro">
          I build the APIs, tools, and applications
          <br className="desktop-break" /> that make the work easier.
        </p>
        <p className="hero-description">
          Python and backend engineering are my home ground. I also work across
          the stack, from relational data to the interface people use.
        </p>
        <div className="hero-links">
          <a className="button" href="#projects">
            Selected work <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href="https://github.com/tote10">
            Browse GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame">
          <Image
            src="/images/profile-picture.jpg"
            alt="Moti Alemu"
            width={480}
            height={600}
            sizes="(max-width: 700px) 260px, 320px"
            priority
          />
        </div>
        <figcaption>
          <span>Moti Alemu / Adama, Ethiopia</span>
          <a href="#contact" className="availability">
            Open to projects <span aria-hidden="true">↗</span>
          </a>
        </figcaption>
      </figure>
      <div className="hero-bottomline">
        <span>Independent thinking. Practical software.</span>
        <a href="#projects">
          Take a look around <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
