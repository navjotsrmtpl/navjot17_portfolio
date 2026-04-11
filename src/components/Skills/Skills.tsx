import React from 'react';
import './Skills.css';

interface SkillCategory {
    id: number;
    title: string;
    description: string;
    isAI?: boolean;
}

function Skills() {
    const cards: SkillCategory[] = [
        { id: 1, title: "Frontend", description: "React, Next.js, Angular (4–14), TypeScript, JavaScript, HTML5, CSS3, SCSS" },
        { id: 2, title: "State Management", description: "RxJS, NgRx, Redux, Tanstack Query" },
        { id: 3, title: "UI Libraries", description: "Angular Material, Chakra UI, Kendo UI, Bootstrap, PrimeNG" },
        { id: 4, title: "AI & Copilots", description: "Claude Sonnet, OpenAI / ChatGPT, GitHub Copilot, Cursor, Replit, AI Agents", isAI: true },
        { id: 5, title: "Backend", description: "Node.js, Express, .NET, REST APIs, Strapi" },
        { id: 6, title: "Database", description: "MongoDB, MySQL, SQL Server, Firebase" },
        { id: 7, title: "Cloud & DevOps", description: "AWS (EC2, S3, Load Balancer, Fleet), Docker, Digital Ocean, Vagrant, Azure DevOps, CI/CD" },
        { id: 8, title: "Mobile", description: "React Native, Ionic 3–6, Capacitor, Cordova" },
        { id: 9, title: "Payments & Integrations", description: "Stripe, Razorpay, PayPal, CometChat, Firebase" },
        { id: 10, title: "Dev Tools", description: "Git, Jira, Azure DevOps, Jest, Karma, Jasmine, ZOHO, Bitbucket" },
    ];

    return (
        <section id="skills">
            <h1 className="heading">Skills</h1>
            <div className="carousel-container">
                {cards.map(card => (
                    <div key={card.id} className={`card-border${card.isAI ? ' card-ai' : ''}`}>
                        <div className="card">
                            <h3 className="text_center">{card.title}</h3>
                            <p className="text_center">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;
