import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { mockProjects } from "../data/mockProjects";

export default function Projects() {
    const ref = useScrollReveal();
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="section-head">
                <p className="section-label">Featured Projects</p>
                <h2>What I've Built</h2>
                <p className="section-sub">
                    Real engineering projects demonstrating auth flows, API architecture,
                    schema design, and cross-platform delivery.
                </p>
            </div>
            <div className="project-grid">
                {mockProjects.map((project, index) => (
                    <article
                        key={project.title}
                        className={`project-card ${index === 0 ? "featured" : ""} ${expandedIndex === index ? "expanded" : ""}`}
                        data-tone={project.tone}
                    >
                        <div className="project-card-inner">
                            <div className="project-header">
                                <div className="project-title-group">
                                    <div className="project-number">0{index + 1}</div>
                                    <div>
                                        <h3>{project.title}</h3>
                                        <p className="project-type">{project.type}</p>
                                    </div>
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link-btn"
                                        title="View on GitHub"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                    {project.links.live ? (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link-btn"
                                            title={project.liveLabel}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
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

                            <button
                                className="project-expand-btn"
                                onClick={() => toggleExpand(index)}
                                aria-expanded={expandedIndex === index}
                            >
                                {expandedIndex === index ? "Hide Details" : "View Details"}
                                <svg
                                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2"
                                    style={{ transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {expandedIndex === index && (
                                <div className="project-details-content">
                                    <div className="project-columns">
                                        <div>
                                            <p className="project-label">Key Features</p>
                                            <ul>
                                                {project.highlights.map((point) => (
                                                    <li key={point}>
                                                        <span className="list-check">✓</span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="project-label">What I Learned</p>
                                            <ul>
                                                {project.learnings.map((point) => (
                                                    <li key={point}>
                                                        <span className="list-check">→</span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
