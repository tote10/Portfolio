export function Navbar() {
  return (
    <header className="site-header wrap">
      <a href="#home" className="wordmark" aria-label="Moti Alemu, home">
        Moti Alemu<span aria-hidden="true"> /</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact" className="nav-contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
