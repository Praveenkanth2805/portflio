"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav id="navbar">
        <button onClick={() => scrollTo("hero")} className="nav-logo">
          PK<span>.</span>
        </button>
        <ul className="nav-links">
          <li>
            <button onClick={() => scrollTo("about")} className="nav-link-btn">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo("skills")} className="nav-link-btn">
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo("projects")} className="nav-link-btn">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo("contact")} className="nav-link-btn">
              Contact
            </button>
          </li>
        </ul>
        <button className="nav-cta" onClick={() => scrollTo("contact")}>
          Hire Me
        </button>
        <button className="nav-mobile-btn" onClick={() => setMobileOpen(true)}>
          ☰
        </button>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>
          ✕
        </button>
        <button onClick={() => scrollTo("about")} className="mobile-nav-link">
          About
        </button>
        <button onClick={() => scrollTo("skills")} className="mobile-nav-link">
          Skills
        </button>
        <button onClick={() => scrollTo("projects")} className="mobile-nav-link">
          Projects
        </button>
        <button onClick={() => scrollTo("contact")} className="mobile-nav-link">
          Contact
        </button>
      </div>
    </>
  );
}