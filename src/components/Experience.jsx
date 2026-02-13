import { useScrollReveal } from "../hooks/useScrollReveal";
import { experiences, approachPoints } from "../data/siteData";

export default function Experience() {
    const refApproach = useScrollReveal();
    const refExp = useScrollReveal();

    return (
        <>
            <section className="section" id="approach" ref={refApproach}>
                <div className="section-head">
                    <p className="section-label">How I Work</p>
                    <h2>Engineering Mindset</h2>
                </div>
                <div className="approach-grid">
                    {approachPoints.map((point, i) => (
                        <div
                            key={point.title}
                            className="approach-card stagger-child"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <span className="approach-icon">{point.icon}</span>
                            <h4>{point.title}</h4>
                            <p>{point.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" id="experience" ref={refExp}>
                <div className="section-head">
                    <p className="section-label">Professional Experience</p>
                    <h2>Where I've Contributed</h2>
                    <p className="section-sub">
                        Teaching, freelance delivery, and simulation training — each
                        strengthening my engineering capabilities.
                    </p>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp, i) => (
                        <article key={exp.role} className="exp-card" data-index={i}>
                            <div className="exp-card-accent" />
                            <div className="exp-card-content">
                                <div className="exp-header">
                                    <div className="exp-icon-wrap">
                                        <span className="exp-icon">{exp.icon}</span>
                                    </div>
                                    <div className="exp-meta">
                                        <h3>{exp.role}</h3>
                                        <p className="exp-org">{exp.org}</p>
                                        <div className="exp-tags">
                                            <span className="exp-duration">{exp.duration}</span>
                                            <span className="exp-type">{exp.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="exp-points">
                                    {exp.points.map((point) => (
                                        <li key={point}>
                                            <span className="list-check">▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
