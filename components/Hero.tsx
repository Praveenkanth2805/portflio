"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">
      <div className="hero-grid-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">Available for Freelance</div>
        <h1 className="hero-name">
          <em>Praveenkanth &shy;G</em>
        </h1>
        <p className="hero-role">
          Full Stack Developer &nbsp;·&nbsp; <span>AI-Assisted Engineering</span> &nbsp;·&nbsp; Python &amp; Next.js
        </p>
        <p className="hero-desc">
          I build fast, beautiful web products that balance technical depth with clean design — from solo MVPs to production systems. Currently freelancing and open to exciting opportunities.
        </p>
        <div className="hero-actions">
          <button onClick={() => scrollTo("projects")} className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
            View Projects
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in Touch
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line"></div>
        Scroll
      </div>
    </section>
  );
}