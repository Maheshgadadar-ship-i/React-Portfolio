import { useState, useEffect, useRef } from 'react';
import './Eduction.css';

const educationData = [
    {
        title: 'Bachelor of Computer Science',
        institution: 'University',
        period: '2021 - 2025',
        description: 'Pursuing B.Sc in Computer Science with focus on software development, data structures, algorithms, and web technologies.',
        icon: '🎓',
    },
    {
        title: 'Pre-University (PUC)',
        institution: 'PU College',
        period: '2019 - 2021',
        description: 'Completed Pre-University education with Science stream, building strong foundation in mathematics and computer science.',
        icon: '📚',
    },
    {
        title: 'High School (SSLC)',
        institution: 'High School',
        period: '2018 - 2019',
        description: 'Completed secondary education with excellent academic performance and discovered passion for technology.',
        icon: '🏫',
    },
];

const experienceData = [
    {
        title: 'Full Stack Web Development',
        institution: 'Self Learning & Projects',
        period: '2023 - Present',
        description: 'Building full-stack applications using React, Node.js, and modern web technologies. Created multiple projects including e-commerce platforms.',
        icon: '💻',
    },
    {
        title: 'Frontend Development',
        institution: 'Personal Projects',
        period: '2022 - 2023',
        description: 'Mastered HTML, CSS, JavaScript and React. Developed responsive websites with animations and modern UI/UX patterns.',
        icon: '🎨',
    },
    {
        title: 'Programming Foundations',
        institution: 'Academic & Self-Study',
        period: '2021 - 2022',
        description: 'Learned Java, data structures, algorithms, and MySQL. Built foundational programming skills through coursework and practice.',
        icon: '⚡',
    },
];

export default function Education() {
    const [activeTab, setActiveTab] = useState('education');
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setIsVisible(true);
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const data = activeTab === 'education' ? educationData : experienceData;

    return (
        <section className="qualification" id="qualification" ref={sectionRef}>
            <div className="qualification__container">
                <h2 className="section-title">Qualification</h2>
                <p className="section-subtitle">My journey of learning and growth</p>

                {/* Tab switcher */}
                <div className="qualification__tabs">
                    <button
                        className={`qualification__tab ${activeTab === 'education' ? 'qualification__tab--active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
                        Education
                    </button>
                    <button
                        className={`qualification__tab ${activeTab === 'experience' ? 'qualification__tab--active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                        Experience
                    </button>
                </div>

                {/* Timeline */}
                <div className={`qualification__timeline ${isVisible ? 'qualification__timeline--visible' : ''}`}>
                    <div className="qualification__timeline-line"></div>

                    {data.map((item, index) => (
                        <div
                            key={`${activeTab}-${index}`}
                            className={`qualification__item ${index % 2 === 0 ? 'qualification__item--left' : 'qualification__item--right'}`}
                            style={{ '--delay': `${index * 0.2}s` }}
                        >
                            <div className="qualification__item-dot">
                                <span>{item.icon}</span>
                            </div>

                            <div className="qualification__item-card">
                                <div className="qualification__item-header">
                                    <h3 className="qualification__item-title">{item.title}</h3>
                                    <span className="qualification__item-period">{item.period}</span>
                                </div>
                                <span className="qualification__item-institution">{item.institution}</span>
                                <p className="qualification__item-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}