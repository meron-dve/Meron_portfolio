import { useEffect, useState } from "react";
import { CodeIcon, MoonIcon, SunIcon } from "./Icons";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
];
const SECTIONS = ["home", "about", "services", "projects", "contact"];

function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState("home");

  // Highlight the link for the section currently on screen.
  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) current = "contact";
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = theme === "dark";

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main">
        <a href="#home" className="logo" aria-label="Meron.dev home">
          <span className="logo-mark" aria-hidden="true">
            <CodeIcon />
          </span>
          <span>Meron.dev</span>
        </a>

        <div className="nav-pill">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${active === link.id ? "is-active" : ""}`}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="#contact" className={`btn btn-primary nav-cta ${active === "contact" ? "is-active" : ""}`}>
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
