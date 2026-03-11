import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        title: 'My Portfolio',
        description: 'A personal portfolio website showcasing my skills, projects, and experience with modern animations and responsive design.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://maheshgadadar-ship-i.github.io/MyProtfoilo/',
        github: 'https://github.com/Maheshgadadar-ship-i/',
        icon: '🌐',
        color: '#6c5ce7',
    },
    {
        title: 'MS Tech',
        description: 'A full-featured e-commerce application with product browsing, cart functionality, wishlist, authentication and more.',
        tech: ['React', 'CSS', 'JavaScript'],
        link: 'https://ms-tech-gamma.vercel.app/',
        github: 'https://github.com/Maheshgadadar-ship-i/',
        icon: '🛒',
        color: '#a855f7',
    },
    {
        title: 'React Portfolio',
        description: 'This portfolio! Built with React and Vite featuring 3D animations, glassmorphism design, and smooth transitions.',
        tech: ['React', 'Vite', 'CSS'],
        link: '#',
        github: 'https://github.com/Maheshgadadar-ship-i/',
        icon: '⚛️',
        color: '#38bdf8',
    },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <div className="projects__container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">Things I've built that I'm proud of</p>

                <div className="projects__grid">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className={`projects__card ${isVisible ? 'projects__card--visible' : ''}`}
                            style={{ '--delay': `${index * 0.15}s`, '--card-color': project.color }}
                        >
                            <div className="projects__card-header">
                                <span className="projects__card-icon">{project.icon}</span>
                                <div className="projects__card-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__card-link" aria-label="GitHub">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects__card-link" aria-label="Live Demo">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/></svg>
                                    </a>
                                </div>
                            </div>

                            <h3 className="projects__card-title">{project.title}</h3>
                            <p className="projects__card-description">{project.description}</p>

                            <div className="projects__card-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="projects__tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="projects__card-glow"></div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className={`projects__cta ${isVisible ? 'projects__cta--visible' : ''}`}>
                    <div className="projects__cta-card">
                        <span className="projects__cta-emoji">🚀</span>
                        <h3 className="projects__cta-title">Want to see more?</h3>
                        <p className="projects__cta-text">Check out my GitHub for more projects and contributions</p>
                        <a href="https://github.com/Maheshgadadar-ship-i/" target="_blank" rel="noopener noreferrer" className="projects__cta-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                            Visit My GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;