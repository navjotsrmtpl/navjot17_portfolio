import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBuildingColumns, faBrain } from '@fortawesome/free-solid-svg-icons';
import ExperienceBadge from '../ExperienceBadge';
import './About.css';

function About() {
    return (
        <section id="about">
            <h1 className='heading'>About Me</h1>
            <div className='about_box'>
                <div className="border_box">
                    <FontAwesomeIcon icon={faAward} />
                    <h3>Experience</h3>
                    <p className='pad_txt exp-years'>
                        <ExperienceBadge variant="detailed" />
                    </p>
                    <p className='pad_txt'>Enterprise Web & Mobile App Development</p>
                    <p className='pad_txt'>Led teams of 5+ engineers across product & consulting environments</p>
                </div>

                <div className="border_box">
                    <FontAwesomeIcon icon={faBrain} />
                    <h3>AI-Powered Engineer</h3>
                    <p className='pad_txt'>Claude Sonnet · OpenAI / ChatGPT</p>
                    <p className='pad_txt'>GitHub Copilot · Cursor · Replit</p>
                    <p className='pad_txt'>Integrated AI agent in project at S&P Global</p>
                </div>

                <div className="border_box">
                    <FontAwesomeIcon icon={faBuildingColumns} />
                    <h3>Education</h3>
                    <p className='pad_txt'>
                        <strong>B.Tech with Honors</strong> — Maharana Pratap Engineering College (AKTU)
                        <span className='font-wt'> (2013–2017) · 79%</span>
                    </p>
                    <p className='pad_txt'>
                        <strong>Intermediate (ISC)</strong> — Dr. Virendra Swarup 21st Century School
                        <span className='font-wt'> (2012–2013) · 82%</span>
                    </p>
                    <p className='pad_txt'>
                        <strong>High School (ICSE)</strong> — Dr. Virendra Swarup 21st Century School
                        <span className='font-wt'> (2010–2011) · 80.5%</span>
                    </p>
                </div>
            </div>

            <div className='about_summary'>
                <p>
                    Results-driven Senior Frontend Engineer with <strong><ExperienceBadge variant="label" /></strong> of
                    experience building enterprise-grade web and mobile applications. Proven track record of leading
                    cross-functional teams, improving app performance by 25–35%, and slashing development timelines
                    by 40% through reusable component libraries and optimized architecture.
                </p>
            </div>
        </section>
    )
}

export default About;