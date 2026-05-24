const projects = [
  {
    isFeatured: true,
    number: "Featured — 01",
    title: "AI Content Automator",
    desc: "A Python-powered automation pipeline that generates, formats, and publishes content using OpenAI APIs. Built to handle scheduling, retries, and multi-platform outputs with zero manual intervention.",
    stack: ["Python", "OpenAI API", "FastAPI", "Cron", "Linux"],
    liveLink: "#",
    githubLink: "#",
    mockupEmoji: "🤖",
  },
  {
    number: "02",
    title: "Dev Portfolio v1",
    desc: "Previous portfolio iteration — pure HTML/CSS/JS, no frameworks. Focused on performance and hand-crafted animations with zero build step.",
    stack: ["HTML", "CSS", "Vanilla JS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    number: "03",
    title: "Python CLI Toolkit",
    desc: "A collection of Python command-line utilities for file management, web scraping, and task automation. Built for personal Linux workflow efficiency.",
    stack: ["Python", "Click", "BeautifulSoup", "Linux"],
    githubLink: "#",
  },
  {
    number: "04",
    title: "Next.js SaaS Landing",
    desc: "A conversion-focused SaaS landing page template built with Next.js App Router. Features dark glassmorphism UI, animated sections, and Tailwind-based design system.",
    stack: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    liveLink: "#",
    githubLink: "#",
  },
];

function ProjectLinks({ liveLink, githubLink }: { liveLink?: string; githubLink?: string }) {
  return (
    <div className="project-links">
      {liveLink && (
        <a href={liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          Live Demo
        </a>
      )}
      {githubLink && (
        <a href={githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
          GitHub
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">03 — Work</div>
      <h2 className="section-title">Selected <em>Projects</em></h2>
      <div className="section-divider"></div>

      <div className="projects-grid reveal">
        {projects.map((project, idx) => {
          if (project.isFeatured) {
            return (
              <div key={idx} className="project-card project-featured glass reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
                <div className="project-featured-content">
                  <div className="project-number">{project.number}</div>
                  <div className="project-title">{project.title}</div>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-stack">
                    {project.stack.map((tag) => (
                      <span key={tag} className="stack-tag">{tag}</span>
                    ))}
                  </div>
                  <ProjectLinks liveLink={project.liveLink} githubLink={project.githubLink} />
                </div>
                <div className="project-mockup">{project.mockupEmoji}</div>
              </div>
            );
          }
          return (
            <div key={idx} className="project-card glass reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
              <div className="project-number">{project.number}</div>
              <div className="project-title">{project.title}</div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-stack">
                {project.stack.map((tag) => (
                  <span key={tag} className="stack-tag">{tag}</span>
                ))}
              </div>
              <ProjectLinks liveLink={project.liveLink} githubLink={project.githubLink} />
            </div>
          );
        })}
      </div>
    </section>
  );
}