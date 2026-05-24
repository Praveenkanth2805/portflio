const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: "🌐", name: "HTML5", level: "Advanced" },
      { icon: "🎨", name: "CSS3", level: "Advanced" },
      { icon: "⚡", name: "JavaScript", level: "Intermediate" },
      { icon: "▲", name: "Next.js", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Languages",
    skills: [
      { icon: "🐍", name: "Python", level: "Advanced" },
      { icon: "🔧", name: "REST APIs", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Environment",
    skills: [
      { icon: "📦", name: "Git", level: "Advanced" },
      { icon: "🐧", name: "Linux", level: "Advanced" },
      { icon: "🤖", name: "AI Tools", level: "Advanced" },
      { icon: "☁️", name: "Vercel", level: "Intermediate" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">02 — Skills</div>
      <h2 className="section-title">What I <em>Work With</em></h2>
      <div className="section-divider"></div>

      <div className="reveal">
        {skillCategories.map((category, idx) => (
          <div className="skills-category" key={idx}>
            <div className="skills-cat-title">{category.title}</div>
            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="skill-badge glass reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}