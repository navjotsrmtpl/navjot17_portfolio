import React from 'react'
import './Experince.css';
import wattmonk from '../../assets/wattmonk_logo.jpeg';
import stpl from '../../assets/stpl.png';

function Experience() {

    return (
        <section id="experience">
            <div>
                <h1 className='heading'>Experience</h1>
                <div className='experience_box'>

                    {/* S&P Global */}
                    <div className="border_box_exp">
                        <h3 className='wattmonk'>
                            <span>
                                <img
                                    src="https://cdn.prod.website-files.com/5cb6a396e13945f2ca46a56f/624afde7a2094ea6b50962c3_spg_bar_rgb_pos.png"
                                    alt="S&P Global"
                                    height='25'
                                    width="58"
                                />
                            </span>
                            <span style={{ marginLeft: '8px' }}>S&P Global (Market Intelligence)</span>
                            <span className='exp-period'>May 2024 – Present</span>
                        </h3>
                        <h4 className='exp_title role-title'>Senior Frontend Engineer</h4>
                        <a className='exp_title' href='https://www.spglobal.com/marketintelligence/en/' target="_blank" rel="noreferrer">
                            spglobal.com/marketintelligence
                        </a>
                        <div>
                            <p className='exp_title'>
                                <strong>Tools & Technologies: </strong>
                                React, Next.js, Angular, TypeScript, Kendo UI, Chakra UI, .NET, AWS, Tanstack Query, Claude Sonnet, OpenAI, GitHub Copilot, Cursor, Azure, Jest
                            </p>
                        </div>
                        <div>
                            <p className='exp_title'><strong>Responsibilities:</strong></p>
                            <ul className='exp_list'>
                                <li>Led frontend rebranding of WSO Administrator and WSO Insight — mission-critical tools used in global financial markets.</li>
                                <li>Implemented an AI agent inside WSO Insight using Claude Sonnet &amp; OpenAI, enhancing platform intelligence.</li>
                                <li>Reduced UI load time by 40% via lazy loading, code-splitting, and rendering optimizations in Next.js.</li>
                                <li>Architected a scalable component library in React, enabling faster feature delivery across teams.</li>
                                <li>Leveraged GitHub Copilot and Cursor to automate boilerplate, refactor legacy code, and auto-generate unit tests — accelerating team velocity.</li>
                                <li>Integrated multiple REST APIs with Tanstack Query, improving data-fetching consistency and reducing redundant network calls.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Wattmonk */}
                    <div className="border_box_exp" style={{ marginTop: '10px' }}>
                        <h3 className='wattmonk'>
                            <span><img src={wattmonk} alt="wattmonk" height='50' /></span>
                            <span>Wattmonk Technologies Pvt. Ltd.</span>
                            <span className='exp-period'>Jun 2020 – May 2024</span>
                        </h3>
                        <h4 className='exp_title role-title'>Team Head / Full Stack Developer</h4>
                        <a className='exp_title' href='https://www.wattmonk.com/' target="_blank" rel="noreferrer">wattmonk.com</a>
                        <div>
                            <p className='exp_title'><strong>Team Size:</strong> 10+</p>
                            <p className='exp_title'><strong>Third-Party Integrations:</strong> Stripe, Razorpay, PayPal, CometChat, Firebase, ChatGPT</p>
                            <p className='exp_title'><strong>Tools & Technologies:</strong> Angular 8–14, Ionic 6, React, React Native, Node.js, MySQL, Firebase, HTML5, CSS3, Git, Capacitor, Angular Material, Bootstrap</p>
                        </div>
                        <div>
                            <p className='exp_title'><strong>Responsibilities:</strong></p>
                            <ul className='exp_list'>
                                <li>Owned end-to-end architecture for Wattmonk's web portal and mobile app (iOS & Android), serving thousands of solar industry users.</li>
                                <li>Grew and managed a team of developers; conducted code reviews, led sprint planning, and maintained &gt;95% on-time delivery.</li>
                                <li>Integrated ChatGPT to power AI-assisted product features, improving user engagement.</li>
                                <li>Built payment flows with Stripe, Razorpay, and PayPal; integrated CometChat for real-time messaging.</li>
                                <li>Reduced delivery timelines by 40% through standardized component patterns and CI/CD adoption.</li>
                                <li>Handled all production deployments for both Backend and Frontend servers.</li>
                            </ul>
                        </div>
                    </div>

                    {/* STPL */}
                    <div className="border_box_exp" style={{ marginTop: '10px' }}>
                        <h3 className='wattmonk'>
                            <span><img src={stpl} alt="stpl" height='30' style={{ marginRight: '6px' }} /></span>
                            <span>STPL Pvt Ltd (CBRE FSELITE)</span>
                            <span className='exp-period'>Aug 2018 – Jun 2020</span>
                        </h3>
                        <h4 className='exp_title role-title'>Frontend Developer</h4>
                        <a className='exp_title' href='https://www.stpl.biz/' target="_blank" rel="noreferrer">stpl.biz</a>
                        <div>
                            <p className='exp_title'><strong>Team Size:</strong> 5</p>
                            <p className='exp_title'><strong>Tools & Technologies:</strong> Ionic 3, Angular 4–6, MEAN Stack, Angular Material, TypeScript, Azure, Cordova, Bootstrap, NgRx</p>
                        </div>
                        <div>
                            <p className='exp_title'><strong>Responsibilities:</strong></p>
                            <ul className='exp_list'>
                                <li>Built the CBRE FSELITE Connect hybrid mobile and web app (published on App Store) using Ionic & Angular.</li>
                                <li>Delivered end-to-end features, managed production releases, and directly resolved client-reported issues.</li>
                                <li>Collaborated cross-functionally with design, QA, and client teams to ship a polished, stable product.</li>
                                <li>Generated build release notes for every Android, iOS and Browser build to ensure quality delivery.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience;
