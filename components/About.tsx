export default function About() {
  return (
    <section id="about">
      <div className="section-label">01 — About</div>
      <h2 className="section-title">Who I <em>Am</em></h2>
      <div className="section-divider"></div>

      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            I'm a <strong>Full Stack Developer</strong> passionate about building software that actually works — not just demos. My foundation is Python and web technologies, and I lean heavily into <strong>AI-assisted workflows</strong> to ship faster without sacrificing quality.
          </p>
          <p>
            Currently running on Parrot OS, pushing to GitHub, and deploying to Vercel. I care about performance, readability, and maintainability in equal measure.
          </p>
          <p>
            Beyond code, I'm a curious builder — if there's a tool to be made, I'll find the cleanest way to make it. <strong>Open to freelance projects, full-time roles, and interesting collaborations.</strong>
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card glass">
            <div className="about-card-label">Status</div>
            <div className="about-card-value">
              <span className="status-dot">Open to Work &amp; Freelance</span>
            </div>
          </div>
          <div className="about-card glass">
            <div className="about-card-label">Education</div>
            <div className="about-card-value">Computer Science</div>
            <div className="about-card-sub">B.Tech — Currently Enrolled</div>
          </div>
          <div className="about-card glass">
            <div className="about-card-label">Focus</div>
            <div className="about-card-value">Full Stack + AI Integration</div>
            <div className="about-card-sub">Python · Next.js · Automation</div>
          </div>
          <div className="about-card glass">
            <div className="about-card-label">Environment</div>
            <div className="about-card-value">Parrot OS · VSCode · Git</div>
            <div className="about-card-sub">Linux-first development workflow</div>
          </div>
        </div>
      </div>
    </section>
  );
}