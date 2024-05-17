import React from 'react'
import './Experince.css';
import wattmonk from '../../assets/wattmonk_logo.jpeg';
import stpl from '../../assets/stpl.png';

function Experience() {


    const openUrl = (value: string) => {
        let url = '';
        if (value === 'wattmonk') {
            url = 'https://www.wattmonk.com/';


        }
        if (value === 'stpl') {
            url = "https://www.stpl.biz/"
        }

        // Open the URL in a new tab
        window.open(url, '_blank');

    }

    return (
        <section id="experience">
            <div>

                <h1 className='heading'>Experience</h1>
                <div className='experience_box'>
                    <div className="border_box_exp">
                        <div className="border_box_exp">
                            <h3 className='wattmonk'>
                                <span><img src={wattmonk} alt="wattmonk" height='50' /></span>
                                <span>Wattmonk Technologies Pvt Ltd</span>
                                <span>(June 2020 to May 2024) </span>
                            </h3>
                            <h4 className='exp_title'>Senior UI Developer and Team Lead</h4>
                            <a className='exp_title' href='https://www.wattmonk.com/' target="_blank">https://www.wattmonk.com/</a>
                            <div>
                            </div>
                            {/* <div>
                            <p className='exp_title'><strong>App link:-</strong></p>
                            <p className='exp_title'><strong>Android:</strong><a href="https://play.google.com/store/apps/details?id=com.solar.wattmonk" target='_blank'>https://play.google.com/store/apps/details?id=com.solar.wattmonk</a></p>
                            <p className='exp_title'><strong>IOS:</strong><a href="https://apps.apple.com/in/app/wattmonk/id1552218547" target='_blank'>https://apps.apple.com/in/app/wattmonk/id1552218547</a></p>
                            <p className='exp_title'><strong>Web:</strong><a href="https://ultra.wattmonk.com/" target='_blank'>https://ultra.wattmonk.com/</a></p>
                        </div> */}
                            <div>
                                <p className='exp_title'><strong>Team Size:</strong>10</p>
                                <p className='exp_title'><strong>Third Part integration Used:</strong> Stripe, Paypal, Razorpay, Cometchat,Firebase</p>
                                <p className='exp_title'><strong>Tools and technology Used: </strong> Angular15, Ionic 6, HTML5, CSS3, Git, Capacitor, Angular Material, Bootstrap,React ,React Native</p>
                            </div>
                            <div>
                                <p className='exp_title'>
                                    <strong>Reponsibilities:</strong>
                                    <ul>
                                        <li>Working as a <strong>Team lead</strong> in the technology team</li>
                                        <li>Involved in making code structure development, end to end functionality
                                            development of tasks and its execution.</li>
                                        <li>Provide solution to complex problem and integrate core development</li>
                                        <li>Involved in Code Review on GitHub, code merging, guiding team, motivating them for career growth.</li>
                                        <li>Handling all deployments on Production server (Backend and Frontend).</li>
                                    </ul>
                                </p>
                            </div>
                        </div>


                        <div className="border_box_exp" style={{ marginTop: '5px' }}>
                            <h3 className='wattmonk'>
                                <span><img src={stpl} alt="stpl" height='30' style={{ marginRight: '6px', display: 'flex' }} /></span>
                                <span>SRM techsol Pvt Ltd</span>
                                <span>(August 2018 to June 2020) </span>
                            </h3>
                            <h4 className='exp_title'>Front End Developer</h4>
                            <a className='exp_title' href='https://www.stpl.biz/' target="_blank">https://www.stpl.biz/</a>
                            <div>
                            </div>
                            {/* <div>
                                <p className='exp_title'><strong>App link:-</strong></p>
                                <p className='exp_title'><strong>Android:</strong><a href="https://play.google.com/store/apps/details?id=com.ionicframework.snowapp184742&hl=en" target='_blank'>https://play.google.com/store/apps/details?id=com.ionicframework.snowapp184742&hl=en</a></p>
                                <p className='exp_title'><strong>IOS:</strong><a href=" https://apps.apple.com/us/app/fselite-connect/id1280947052" target='_blank'> https://apps.apple.com/us/app/fselite-connect/id1280947052</a></p>

                            </div> */}
                            <div>
                                <p className='exp_title'><strong>Team Size:</strong>5</p>
                                <p className='exp_title'><strong>Tools and technology Used: </strong> ACordova ,HTML5, CSS3, Angular7, ionic4,Azure, Angular
                                    Material, Bootstrap,ngrx</p>
                            </div>
                            <div>
                                <p className='exp_title'>
                                    <strong>Reponsibilities:</strong>
                                    <ul>
                                        <li>Provide end to end development of functionality required for the App.</li>
                                        <li>Understands Clients requirements to develop business logic within the App.</li>
                                        <li>Generate build Release note for every build of Android, iOS and Browser to
                                            test the functionality.</li>

                                    </ul>
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>


        </section>
    )
}

export default Experience