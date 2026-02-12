import { useEffect, useState } from "react";
import { mockProjects } from "./data/mockProjects";

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const skillGroups = [
  {
    title: "Core Skills",
    items: ["Java", "Spring Boot", "REST APIs", "MySQL", "JWT", "RBAC"],
    tone: "backend",
  },
  {
    title: "Working Knowledge",
    items: ["Angular", "Android (Java)", "Docker (basics)", "PostgreSQL"],
  },
  {
    title: "CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Networking",
      "System Design (basic-intermediate)",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Git & GitHub", "Linux", "Postman"],
  },
];

const trainingPoints = [
  "Built backend APIs using Spring Boot",
  "Worked with databases and REST architecture",
  "Applied CS fundamentals to real projects",
  "Followed clean coding practices and Git workflow",
];

const proofPoints = [
  { label: "Flagship Projects", value: "4" },
  { label: "Core Backend Stack", value: "Java" },
  { label: "Auth Expertise", value: "JWT + RBAC" },
  { label: "Platforms", value: "Web + Android" },
];

const approachPoints = [
  "Design backend APIs before frontend or mobile clients",
  "Follow clean architecture and separation of concerns",
  "Prioritize authentication, authorization, and error handling early",
  "Prefer simple, readable solutions over premature optimization",
];

export default function App() {
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-brand">
          <span className="nav-dot" />
          <span>Sanket Satpute</span>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="btn primary" href="#" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Full-Stack Developer</p>
          <h1>
            Backend-Focused Full-Stack Developer
            <span>(Java | Spring Boot | Angular | Android)</span>
          </h1>
          <p className="headline">
            I build secure, scalable backend systems and deliver end-to-end
            applications across web and Android.
          </p>
          <p className="meta">
            Strong foundations in DSA, Operating Systems, DBMS, and System
            Design.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a
              className="btn"
              href="https://github.com/sanket-satpute"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/sanket-satpute-b1688225a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="quick-info">
            <span>Chandrapur, MH · India</span>
            <span>
              <a
                href="mailto:saptute738@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                saptute738@gmail.com
              </a>
            </span>
            <span>Open to Backend / Full-Stack (Junior)</span>
          </div>
          <div className="proof-grid">
            {proofPoints.map((point) => (
              <div key={point.label} className="proof-card">
                <p className="proof-value">{point.value}</p>
                <p className="proof-label">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="section" id="projects">
        <div className="section-head">
          <p className="section-label">Projects</p>
          <h2>Backend-heavy and end-to-end delivery</h2>
        </div>
        <div className="project-grid">
          {mockProjects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card ${index === 0 ? "featured" : ""}`}
              data-tone={project.tone}
            >
              <div className="project-header">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-type">{project.type}</p>
                </div>
                <div className="project-links">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.liveLabel}
                    </a>
                  ) : null}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={item} className={`chip tone-${project.tone}`}>
                    {item}
                  </span>
                ))}
              </div>
              <details className="project-details">
                <summary>Show details</summary>
                <div className="project-columns">
                  <div>
                    <p className="project-label">Key Features</p>
                    <ul>
                      {project.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="project-label">What I Learned</p>
                    <ul>
                      {project.learnings.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-head">
          <p className="section-label">Skills</p>
          <h2>ATS-ready and recruiter-friendly</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`skill-card ${group.tone ? `tone-${group.tone}` : ""}`}
            >
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="approach">
        <div className="section-head">
          <p className="section-label">Engineering Approach</p>
          <h2>How I think and build</h2>
        </div>
        <div className="experience-card">
          <ul>
            {approachPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-head">
          <p className="section-label">Experience</p>
          <h2>Software Development Training / Internship</h2>
        </div>
        <div className="experience-card">
          <ul>
            {trainingPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-head">
          <p className="section-label">Contact</p>
          <h2>
            Actively seeking Backend or Full-Stack Developer roles
            (Junior/Fresher)
          </h2>
          <p className="section-sub">
            Available for junior backend, full-stack, and Android-integrated
            roles.
          </p>
        </div>
        <div className="contact-grid">
          <div>
            <p>Email</p>
            <a
              href="mailto:saptute738@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              saptute738@gmail.com
            </a>
          </div>
          <div>
            <p>LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/sanket-satpute-b1688225a/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sanket-satpute
            </a>
          </div>
          <div>
            <p>GitHub</p>
            <a
              href="https://github.com/sanket-satpute"
              target="_blank"
              rel="noreferrer"
            >
              github.com/sanket-satpute
            </a>
          </div>
          <div>
            <p>Location</p>
            <span>Chandrapur, MH - India</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Sanket Satpute</p>
      </footer>
    </div>
  );
}
