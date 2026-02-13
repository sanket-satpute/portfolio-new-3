import { useState, useEffect } from "react";
import { navItems } from "../data/siteData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ activeSection }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
                <a href="#" className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <span className="nav-logo">SS</span>
                    <span className="nav-name">Sanket Satpute</span>
                </a>
                <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={activeSection === item.id ? "active" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="nav-links-mobile-actions">
                        {/* Using contactInfo imported from siteData.js - need to ensure it's imported */}
                        <a className="btn primary" href={contactInfo.resume} target="_blank" rel="noreferrer">
                            📄 Resume
                        </a>
                    </div>
                </div>
                <div className="nav-actions">
                    <ThemeToggle />
                    <a className="btn primary btn--nav-resume" href={contactInfo.resume} target="_blank" rel="noreferrer">
                        Resume
                    </a>
                    <button
                        className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
            {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
        </>
    );
}
