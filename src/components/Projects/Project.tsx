import React, { useState } from 'react';
import './Project.css';

interface ProjectLink {
    label: string;
    url: string;
}

interface ProjectItem {
    title: string;
    company: string;
    role: string;
    isAI: boolean;
    tags: string[];
    tech: string[];
    about: string;
    links: ProjectLink[];
}

type FilterType = 'all' | 'ai' | 'mobile' | 'web' | 'lead';

const projects: ProjectItem[] = [
    {
        title: "WSO Insight — AI Agent",
        company: "S&P Global",
        role: "Senior Frontend Engineer",
        isAI: true,
        tags: ["web", "lead"],
        tech: ["React", "Next.js", "TypeScript", "Claude Sonnet", "OpenAI", "Tanstack Query", "Chakra UI", "Kendo UI", "AWS", "Azure"],
        about: "Built an AI agent inside WSO Insight using Claude Sonnet & OpenAI. Led frontend rebranding of WSO Administrator and WSO Insight — mission-critical financial market intelligence tools. Achieved 40% reduction in UI load time via lazy loading and code-splitting in Next.js.",
        links: [{ label: "Visit site", url: "https://www.spglobal.com/marketintelligence/en/" }]
    },
    {
        title: "Wattmonk Website / App",
        company: "Wattmonk Technologies",
        role: "Team Head / Full Stack Developer",
        isAI: true,
        tags: ["web", "mobile", "lead"],
        tech: ["Angular 8–14", "Ionic 6", "React", "React Native", "Node.js", "MySQL", "Firebase", "Stripe", "Razorpay", "PayPal", "ChatGPT"],
        about: "End-to-end solar design ordering platform. Led a team of 10+, integrated ChatGPT for AI-assisted features, and built complete payment flows with Stripe, Razorpay & PayPal. Reduced delivery timelines by 40%.",
        links: [
            { label: "Android", url: "https://play.google.com/store/apps/details?id=com.solar.wattmonk" },
            { label: "iOS", url: "https://apps.apple.com/in/app/wattmonk/id1552218547" },
            { label: "Web", url: "https://ultra.wattmonk.com/" }
        ]
    },
    {
        title: "CBRE FSELITE Connect",
        company: "STPL / CBRE",
        role: "Frontend Developer",
        isAI: false,
        tags: ["mobile", "web"],
        tech: ["Ionic 3", "Angular 4–6", "Angular Material", "TypeScript", "Azure", "NgRx", "Cordova"],
        about: "Hybrid mobile & web app (published on App Store) for CBRE FSELITE facility vendor management. Credential-based auth for facility source clients across iOS and Android.",
        links: [
            { label: "Android", url: "https://play.google.com/store/apps/details?id=com.ionicframework.snowapp184742&hl=en" },
            { label: "iOS", url: "https://apps.apple.com/us/app/fselite-connect/id1280947052" }
        ]
    },
    {
        title: "Secure Health Care — Candidate Portal",
        company: "Secure Health Care Solutions",
        role: "Frontend Developer",
        isAI: false,
        tags: ["mobile", "web"],
        tech: ["Angular 9", "Ionic 5", "Cordova", "HTML5", "CSS3", "Bootstrap", "Git"],
        about: "App for hiring candidates and nurses for UK healthcare facilities. End-to-end feature delivery and production release management across App Store and Play Store.",
        links: [
            { label: "Android", url: "https://play.google.com/store/apps/details?id=com.securehealthcaresolutions.shscandidatesapp&hl=en_IN&gl=US" },
            { label: "iOS", url: "https://apps.apple.com/us/app/shs-candidate-app/id1292820017" },
            { label: "Web", url: "https://securehealthcaresolutions.co.uk/" }
        ]
    },
    {
        title: "GETRECASH",
        company: "Self Project",
        role: "Full Stack Developer",
        isAI: false,
        tags: ["web", "mobile"],
        tech: ["Angular 9", "Ionic 5", "Cordova", "Node.js", "MongoDB", "AWS", "MEAN Stack"],
        about: "Recycling rewards app — users photograph recycled products to earn points. Admin-verified and redeemable as cash, gamifying sustainable recycling habits.",
        links: []
    },
       {
        title: "Dodge Construction Admin Platform",
        company: "Wattmonk Technologies",
        role: "Full Stack Developer",
        isAI: true,
        tags: ["web"],
        tech: ["Angular 19", "Node.js", "MongoDB", "AWS", "MEAN Stack"],
        about: "Migration of project from angular8 to angular 20. Admin platform for Dodge Construction to manage their construction projects, users, and payments. Integrated assistant for AI-assisted features. Reduced build time and improved performance by 30% through code optimization and lazy loading.",
        links: []
    },
     {
        title: "Investment Portfolio Tracker",
        company: "Self Project",
        role: "Full Stack Developer",
        isAI: false,
        tags: ["web", "mobile"],
        tech: ["React", "Node.js", "MongoDB", "MERN Stack"],
        about: "Track and manage your investment portfolio with real-time updates and analytics. upload your invest with excel sheet and get data synced with dashboard.",
        links: [{ label: "web", url: "https://financetraker.netlify.app/" }]
    },
     {
        title: "AI generated forms",
        company: "Self Project",
        role: "Full Stack Developer",
        isAI: true,
        tags: ["web", "mobile"],
        tech: ["React", "Node.js", "MongoDB", "MERN Stack", "OpenAI", "ollama"],
        about: "Generate forms using AI with natural language processing and machine learning algorithms.s",
        links: [{ label: "web", url: "https://aiform95.netlify.app/" }]
    },
      {
        title: "Resume Builder with ATS Optimization",
        company: "Self Project",
        role: "Full Stack Developer",
        isAI: true,
        tags: ["web", "mobile"],
        tech: ["Next.js", "MongoDB", "MEAN Stack", "OpenAI", "Claude Sonnet"],
        about: "Inline Edit or create you resume with templates and optimize it for ATS (Applicant Tracking System) to increase your chances of getting noticed by recruiters. Compare ATS scores with job descriptions and get suggestions for improvement and download your resume in PDF and word format.",
        links: [{ label: "web", url: "https://resumebuilder-kappa-three.vercel.app/" }]
    },
];

const FILTERS: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'ai', label: '★ AI-Powered' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'web', label: 'Web' },
    { key: 'lead', label: 'Led Team' },
];

function Project() {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filtered = projects.filter(p => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'ai') return p.isAI;
        if (activeFilter === 'lead') return p.role.toLowerCase().includes('lead') || p.role.toLowerCase().includes('head');
        return p.tags.includes(activeFilter);
    });

    const handleToggle = (i: number) => {
        setOpenIndex(prev => (prev === i ? null : i));
    };

    const handleFilterChange = (key: FilterType) => {
        setActiveFilter(key);
        setOpenIndex(null);
    };

    return (
        <section id="projects">
            <h1 className='heading'>Projects</h1>

            <div className='proj-stats'>
                <div className='proj-stat'>
                    <span className='proj-stat-val'>{projects.length}</span>
                    <span className='proj-stat-lbl'>Projects</span>
                </div>
                <div className='proj-stat'>
                    <span className='proj-stat-val'>{projects.filter(p => p.isAI).length}</span>
                    <span className='proj-stat-lbl'>AI-Powered</span>
                </div>
                <div className='proj-stat'>
                    <span className='proj-stat-val'>{filtered.length}</span>
                    <span className='proj-stat-lbl'>Showing</span>
                </div>
            </div>

            <div className='proj-filters'>
                {FILTERS.map(f => (
                    <button
                        key={f.key}
                        className={`proj-filter-btn${activeFilter === f.key ? ' active' : ''}`}
                        onClick={() => handleFilterChange(f.key)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {filtered.length === 0 && (
                <p className='proj-empty'>No projects match this filter.</p>
            )}

            <div className='project_box'>
                {filtered.map((project, i) => (
                    <div
                        key={project.title}
                        className={`proj-card${project.isAI ? ' proj-card-ai' : ''}${openIndex === i ? ' proj-card-open' : ''}`}
                    >
                        <div className='proj-card-header' onClick={() => handleToggle(i)}>
                            <div className='proj-card-badges'>
                                {project.isAI && <span className='proj-badge proj-badge-ai'>★ AI-Powered</span>}
                                <span className='proj-badge proj-badge-company'>{project.company}</span>
                            </div>
                            <div className='proj-card-title'>
                                <span>{project.title}</span>
                                <span className={`proj-chevron${openIndex === i ? ' open' : ''}`}>&#9660;</span>
                            </div>
                            <div className='proj-card-role'>{project.role}</div>
                        </div>

                        <div className={`proj-card-body${openIndex === i ? ' proj-card-body-open' : ''}`}>
                            <div className='proj-card-inner'>
                                <div className='proj-tech-wrap'>
                                    {project.tech.map(t => (
                                        <span key={t} className='proj-tech'>{t}</span>
                                    ))}
                                </div>
                                <p className='proj-about'>{project.about}</p>
                                {project.links.length > 0 && (
                                    <div className='proj-links'>
                                        {project.links.map(link => (
                                            <a
                                                key={link.label}
                                                className='proj-link-btn'
                                                href={link.url}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                {link.label} ↗
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
