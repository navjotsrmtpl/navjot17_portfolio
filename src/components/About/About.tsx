import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
    return (
        <section id="about">
            <h1 className='heading'>About Me</h1>
            <div className='about_box'>
                <div className="border_box">
                    <FontAwesomeIcon icon={faAward} />
                    <h3>Experince</h3>
                    <p className='pad_txt'>6 Years</p>
                    <p className='pad_txt'>UI Development and Hybrid Mobile App</p>
                </div>
                <div className="border_box">
                    <FontAwesomeIcon icon={faBuildingColumns} />
                    <h3>Education</h3>
                    <p className='pad_txt'><strong>B.tech </strong>-<span>Maharana Pratap Engineering College </span>
                        <span className='font-wt'>(2013- 2017)  (78%) with Honors</span>
                    </p>
                    <p className='pad_txt'><strong>Intermediate </strong>-<span>Dr. Virendra Swarup 21st Century School  </span>
                        <span className='font-wt'>(2012-2013) (81%)</span>
                    </p>
                    <p className='pad_txt'><strong>High School </strong>-<span>Dr. Virendra Swarup 21st Century School </span>
                        <span className='font-wt'> (2010-2011) (82%)    </span>
                    </p>

                </div>


            </div>
        </section>
    )
}

export default About