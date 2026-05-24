"use client";

const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || "#";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <p className="footer-copy">
        © 2025 <span>Praveenkanth</span> — Crafted with precision.
      </p>
      <ul className="footer-links">
        <li>
          <button onClick={() => scrollTo("hero")} className="footer-link-btn">
            Top
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo("projects")} className="footer-link-btn">
            Work
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo("contact")} className="footer-link-btn">
            Contact
          </button>
        </li>
        <li>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
            Resume
          </a>
        </li>
      </ul>
    </footer>
  );
}