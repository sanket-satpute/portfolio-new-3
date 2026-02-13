import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillGroups } from "../data/siteData";

export default function Skills() {
    const ref = useScrollReveal();

    return (
        <section className="section" id="skills" ref={ref}>
            <div className="section-head">
                <p className="section-label">Technical Skills</p>
                <h2>My Tech Stack</h2>
                <p className="section-sub">
                    Organized by proficiency — core skills are what I use daily and know
                    deeply.
                </p>
            </div>
            <div className="skills-grid">
                {skillGroups.map((group, i) => (
                    <div
                        key={group.title}
                        className={`skill-card stagger-child ${group.tone === "backend" ? "skill-card--primary" : ""}`}
                        style={{ animationDelay: `${i * 100}ms` }}
                    >
                        {group.tone === "backend" && (
                            <span className="skill-card-badge">★ Primary Stack</span>
                        )}
                        <div className="skill-card-header">
                            <span className="skill-icon">{group.icon}</span>
                            <div>
                                <h3>{group.title}</h3>
                                <p className="skill-desc">{group.description}</p>
                            </div>
                        </div>
                        <div className="chip-row">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className={`chip ${group.tone === "backend" ? "tone-backend" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
