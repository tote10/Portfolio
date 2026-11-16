import Image from "next/image";
export function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="wrap about-grid">
        <div>
          <p className="eyebrow">02 / A little context</p>
          <figure className="portrait">
            <Image
              src="/images/profile-picture.jpg"
              alt="Moti Alemu"
              width={420}
              height={480}
              sizes="(max-width: 700px) 80vw, 300px"
            />
            <figcaption>Moti Alemu · Adama, Ethiopia</figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <h2 id="about-title">
            Curious about the logic.
            <br />
            <em>Careful with the details.</em>
          </h2>
          <p>
            I’m a software engineer drawn to the work behind an application: how
            data is organized, how an API behaves, and how the pieces fit
            together.
          </p>
          <p>
            My main focus is Python and backend development, alongside
            PHP/Laravel and full-stack web applications. I also explore
            automation, data-processing tools, and AI/ML-related software.
          </p>
          <p>
            I learn by building practical projects, reading the code, and
            working through the parts I don’t yet understand. I aim for clear
            structure and software that is straightforward to use and maintain.
          </p>
        </div>
      </div>
    </section>
  );
}
