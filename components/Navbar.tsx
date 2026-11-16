"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [theme, setTheme] = useState("system");
  useEffect(() => {
    try {
      setTheme(localStorage.getItem("theme") || "system");
    } catch {
      /* Use system preference when storage is unavailable. */
    }
  }, []);
  function changeTheme(value: string) {
    setTheme(value);
    document.documentElement.dataset.theme = value;
    try {
      localStorage.setItem("theme", value);
    } catch {
      /* Theme still works without persistence. */
    }
  }
  return (
    <header className="site-header wrap">
      <a href="#home" className="wordmark" aria-label="Moti Alemu, home">
        ma<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <label className="theme-control">
        <span className="sr-only">Color theme</span>
        <select value={theme} onChange={(e) => changeTheme(e.target.value)}>
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </header>
  );
}
