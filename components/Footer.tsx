export function Footer() {
  return (
    <footer className="wrap site-footer">
      <a className="wordmark" href="#home" aria-label="Back to top">
        ma<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Moti Alemu</p>
      <a className="text-link" href="#home">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
