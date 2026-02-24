import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default function Home() {
  const dataDir = path.join(process.cwd(), 'src', 'data');
  const portfolio = yaml.load(fs.readFileSync(path.join(dataDir, 'portfolio.yml'), 'utf8'));
  const personalData = portfolio.personal;
  const expData = portfolio.experience;
  const eduData = portfolio.education;
  const projData = portfolio.projects;

  return (
    <main className="container animate-fade-in">

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">{personalData.name}<span className="cursor"></span></h1>
        <p className="hero-subtitle mono">&gt; Senior Software Engineer | Systems & Microservices</p>
        <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7", maxWidth: "800px" }}>
          {personalData.summary}
        </p>

        <div className="social-links">
          <a href={`mailto:${personalData.email}`} className="social-link" title="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={personalData.leetcode} target="_blank" rel="noopener noreferrer" className="social-link" title="LeetCode">
            <i className="fa-solid fa-code"></i>
          </a>
          <a href="/Nivyanth_Resume.pdf" className="social-link" title="Resume PDF" download>
            <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section animate-fade-in delay-1">
        <h2 className="section-title">experience</h2>

        {expData.map((exp, idx) => (
          <div className="card" key={idx}>
            <div className="card-header">
              <div>
                <h3 className="card-title">{exp.company}</h3>
                <p className="card-subtitle">{exp.role}, {exp.team}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span className="duration">{exp.time_duration}</span>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>{exp.company_location}</p>
              </div>
            </div>

            {exp.details && exp.details.map((detail, dIdx) => (
              <div key={dIdx} style={{ marginBottom: "1rem" }}>
                <strong style={{ color: "var(--text-primary)" }}>{detail.title}</strong>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>{detail.description}</p>
                {detail.languages && (
                  <div className="tech-stack">
                    {detail.languages.split(",").map(lang => lang.trim()).filter(Boolean).map((lang, lIdx) => (
                      <span key={lIdx} className="tech-tag">{lang}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="section animate-fade-in delay-2">
        <h2 className="section-title">education</h2>

        {eduData.map((edu, idx) => (
          <div className="card" key={idx}>
            <div className="card-header">
              <div>
                <h3 className="card-title">{edu.school}</h3>
                <p className="card-subtitle">{edu.degree}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span className="duration">{edu.time_period}</span>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>{edu.school_location}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="section animate-fade-in delay-3">
        <h2 className="section-title">projects</h2>

        {projData.map((proj, idx) => (
          <div className="card" key={idx}>
            <div className="card-header">
              <h3 className="card-title">{proj.title}</h3>
              <span className="duration">{proj.time_duration}</span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "0.5rem", marginBottom: "1rem" }}>{proj.description}</p>
            {proj.languages && (
              <div className="tech-stack">
                {proj.languages.split(",").map(lang => lang.trim()).filter(Boolean).map((lang, lIdx) => (
                  <span key={lIdx} className="tech-tag">{lang}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="section animate-fade-in delay-3">
        <h2 className="section-title">skills</h2>
        <div className="skills-container">
          <div className="skill-box">
            <h3 className="skill-category">Languages</h3>
            <div className="tech-stack">
              {personalData.languages.flatMap(l => l.language.split(",").map(x => x.trim())).filter(Boolean).map((lang, idx) => (
                <span key={idx} className="tech-tag" style={{ borderColor: "rgba(192, 132, 252, 0.4)", color: "var(--accent-purple)", background: "rgba(192, 132, 252, 0.1)" }}>{lang}</span>
              ))}
            </div>
          </div>
          <div className="skill-box">
            <h3 className="skill-category">Technologies</h3>
            <div className="tech-stack">
              {personalData.technologies.flatMap(t => t.technology.split(",").map(x => x.trim())).filter(Boolean).map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Built with <span style={{ color: "var(--accent-purple)" }}>Next.js</span> • Driven by data • Designed to be nerdy</p>
        <div style={{ marginTop: "1rem" }}>
          <a href={personalData.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem" }}>Source Code</a>
        </div>
      </footer>
    </main>
  );
}
