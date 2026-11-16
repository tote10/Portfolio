export function Footer() {
  return (
    <footer className="wrap site-footer">
      <a className="wordmark" href="#home" aria-label="Back to top">
        Moti Alemu<span aria-hidden="true"> /</span>
      </a>
      <p>Software Engineer · © {new Date().getFullYear()}</p>
      <a className="text-link" href="#home">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
