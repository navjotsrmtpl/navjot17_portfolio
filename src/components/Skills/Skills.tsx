import React from 'react';
import './Skills.css';
import Slider, { Settings } from 'react-slick';

interface Card {
    id: number;
    title: string;
    description: string;
}

function Skills() {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const cards: Card[] = [
        { id: 1, title: "Language", description: "TypeScript, JavaScript, Restful API in Nodejs, HTML, CSS3, Bootstrap, MEAN, MERN" },
        { id: 2, title: "Framework", description: "Angular 8/9/11/12/13/14/15, ionic framework, node, strapi, React" },
        { id: 3, title: "Database", description: "MongoDB, Mysql" },
        { id: 4, title: "Software and Tools", description: "Git, Bitbucket, Visual Studio Code, AWS, Digital ocean, Playwright, Codium AI" },
        { id: 5, title: "Third Party Integration", description: "PrimeNg, Ngrx, Rxjs, Firebase, github Action CI/CD, Azure" },

    ];

    return (
        <section id="skills">
            <h1 className='heading'>Skills</h1>
            <div className="carousel-container"> {cards.map(card => (<div key={card.id} className="card"> <h3 className='text_center'>{card.title}</h3> <p className='text_center'>{card.description}</p> </div>))} </div>
        </section>
    )
}

export default Skills;