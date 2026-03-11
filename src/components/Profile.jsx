import { useState, useEffect } from 'react';
import './Profile.css';

export default function Profile() {
    const titles = ['Full Stack Developer', 'Web Designer', 'Problem Solver', 'Tech Enthusiast'];
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        let timeout;

        if (!isDeleting && charIndex <= currentTitle.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentTitle.slice(0, charIndex));
                setCharIndex(charIndex + 1);
            }, 80);
        } else if (!isDeleting && charIndex > currentTitle.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayText(currentTitle.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 40);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex]);

    return (
        <section className="hero" id="home">
            {/* Floating particles */}
            <div className="hero__particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="hero__particle" style={{
                        '--x': `${Math.random() * 100}%`,
                        '--y': `${Math.random() * 100}%`,
                        '--duration': `${3 + Math.random() * 4}s`,
                        '--delay': `${Math.random() * 3}s`,
                        '--size': `${2 + Math.random() * 4}px`,
                    }}></div>
                ))}
            </div>

            <div className="hero__content">
                <div className="hero__left">
                    <div className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        <span>Available for work</span>
                    </div>

                    <h2 className="hero__greeting">Hello, I'm</h2>
                    <h1 className="hero__name">Mahesh</h1>
                    <h1 className="hero__name hero__name--outline">P Gadadar</h1>

                    <div className="hero__typewriter">
                        <span className="hero__typewriter-prefix">I'm a </span>
                        <span className="hero__typewriter-text">{displayText}</span>
                        <span className="hero__typewriter-cursor">|</span>
                    </div>

                    <p className="hero__description">
                        A passionate application and web developer dedicated to crafting modern,
                        high-performance digital experiences through innovative and user-friendly solutions.
                    </p>

                    <div className="hero__actions">
                        <a href="./src/assets/Mahesh_P_Gadadar_Resume IT (5) (1).pdf" download className="hero__btn hero__btn--primary">
                            <span className="hero__btn-icon">📄</span>
                            Download CV
                        </a>
                        <a href="#projects" className="hero__btn hero__btn--secondary">
                            <span className="hero__btn-icon">🚀</span>
                            View Projects
                        </a>
                    </div>

                    <div className="hero__social">
                        <a href="https://github.com/Maheshgadadar-ship-i/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a href="mailto:maheshgadadar@gmail.com" className="hero__social-link" aria-label="Email">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        </a>
                    </div>
                </div>

                <div className="hero__right">
                    <div className="hero__card">
                        <div className="hero__card-glow"></div>
                        <div className="hero__card-border"></div>
                        <img
                            src="./src/assets/mahesh-removebg-preview.png"
                            alt="Mahesh P Gadadar"
                            className="hero__card-photo"
                        />
                        <div className="hero__card-info">
                            <h3 className="hero__card-name">Mahesh P Gadadar</h3>
                            <span className="hero__card-role">Creative Developer</span>
                        </div>
                        <div className="hero__card-orb hero__card-orb--1"></div>
                        <div className="hero__card-orb hero__card-orb--2"></div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll">
                <div className="hero__scroll-line"></div>
                <span>Scroll</span>
            </div>
        </section>
    );
}