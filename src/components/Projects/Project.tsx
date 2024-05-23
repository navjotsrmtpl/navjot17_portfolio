import React, { useEffect, useState } from 'react';
import './Project.css'

function Project() {
    const [flippedCards, setFlippedCards] = useState(Array(4).fill(false));

    const handleClick = (index: number) => {
        const newFlippedCards = [...flippedCards];
        newFlippedCards[index] = !newFlippedCards[index];
        setFlippedCards(newFlippedCards);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setFlippedCards(prevFlippedCards => prevFlippedCards.map(card => !card));
        }, 5000); // Change the interval time as needed (in milliseconds)
        return () => clearInterval(interval);
    }, []); // Run effect only once when component mounts

    const projects = [
        {
            title: "Wattmonk Website/App",
            role: "Team Lead",
            technology: "Angular14, Ionic 6, HTML5, CSS3, Git, Capacitor, Angular Material, Bootstrap,React ,React Native",
            links: [
                { label: "Android", url: "https://play.google.com/store/apps/details?id=com.solar.wattmonk" },
                { label: "iOS", url: "https://apps.apple.com/in/app/wattmonk/id1552218547" },
                { label: "Web", url: "https://ultra.wattmonk.com/" }
            ],
            about: "Order Prelim and Permit Designs through web and mobile app and do the survey using mobile apps for installation of solar designs in specific area."
        },
        {
            title: "CBRE FSELITE CONNECT APP",
            role: "Front End Developer",
            technology: "Cordova ,HTML5, CSS3, Angular7, ionic4,Azure, Angular,Material, Bootstrap,ngrx",
            links: [
                { label: "Android", url: "https://play.google.com/store/apps/details?id=com.ionicframework.snowapp184742&hl=en" },
                { label: "iOS", url: "https://apps.apple.com/us/app/fselite-connect/id1280947052" },
                { label: "Web", url: "" }
            ],
            about: "This app is intended for usage by facility vendors when supporting facility source clients. They must have a propercredentials to log-in into the application."
        },
        {
            title: "SECURE HEALTH CARE SOLUTION- CANDIDATE PORTAL",
            role: "Front End Developer",
            technology: "HTML5, CSS3, Angular9, ionic5, Cordova, Git, Bootstrap.",
            links: [
                { label: "Android", url: "https://play.google.com/store/apps/details?id=com.securehealthcaresolutions.shscandidatesapp&hl=en_IN&gl=US" },
                { label: "iOS", url: "https://apps.apple.com/us/app/shs-candidate-app/id1292820017" },
                { label: "Web", url: "https://securehealthcaresolutions.co.uk/" }
            ],
            about: "App aims to hire candidate and nurse to take care of the patients."
        },
        {
            title: "Self Project -GETRECASH",
            role: "Full Stack Developer",
            technology: "Angular9, ionic5, Cordova HTML5, CSS3, Git, Bootstrap,AWS, NodeJS, MongoDB, MEAN",
            links: [
                { label: "Android", url: "" },
                { label: "iOS", url: "" },
                { label: "Web", url: "" }
            ],
            about: "This app is Recycle app where User take images of recycled products and upload through this app to collect points. Images are verified by the admin user and as the number of points reaches sufficient amount user can withdraw that points as a cash."
        },


    ]

    return (
        <section id="projects">
            <h1 className='heading'>Projects</h1>
            <div className='project_box'>
                {projects.map((project, index) => (
                    <div key={index} className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>{project.title}</h3>
                                <p><strong>Role:</strong>{project.role}</p>
                                <p>Technology Used:</p>
                                <p>{project.technology}</p>
                                <div className="button-container">
                                    <button className="flipbtn" onClick={() => handleClick(index)}>More</button>
                                </div>
                                {/* <div className="flip-card-frontb"></div> */}
                            </div>
                            <div className="flip-card-back">
                                <div className='flip-card-content'>
                                    <p><strong>About:</strong>{project.about}</p>

                                    {project.links.map((link, linkIndex) => (
                                        (!link.url) ? '' :
                                            <p key={linkIndex} className='project_title'>
                                                <strong>{link.label}:</strong>
                                                {!link.url ? "Not available" : <a href={link.url} target='_blank'>{link.url}</a>}
                                            </p>
                                    ))}

                                    <div style={{ textAlign: 'center' }} className="button-container">
                                        <button className="flipbtn" onClick={() => handleClick(index)}>Back</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Project