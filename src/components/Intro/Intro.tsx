import React from 'react'
import './Intro.css';
import logo from '../../assets/navjot.png';
import linkdin from '../../assets/linkdin.png';
import github from '../../assets/github.png';
import Typewriter from 'typewriter-effect';
import { getExperience } from '../../utils/getExperience';

function Intro() {

    const { detailed } = getExperience();

    const handleDownload = () => {
        const pdfPath = 'https://github.com/navjotsrmtpl/navjot17_portfolio/raw/gh-pages/navjot2025-26.pdf';
        const link = document.createElement('a');
        link.href = pdfPath;
        link.setAttribute('download', 'Navjot_Singh_Resume_2025-26.pdf');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSocialIcons = (value: string) => {
        let url = '';
        if (value === 'linkdin') url = 'https://www.linkedin.com/in/navjot-singh-a427b4104/?originalSubdomain=in';
        if (value === 'github') url = 'https://github.com/navjotsrmtpl';
        window.open(url, '_blank');
    }

    return (
        <section id="intro">
            <div className='section__pic-container'>
                <img src={logo} alt="logo" />
            </div>
            <div className='section__text'>
                <p className='section__text__p1'>
                    <Typewriter
                        options={{
                            strings: ["Hello, I'm"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
                <h1 className='title'>Navjot Singh</h1>
                <p className='designation'>
                    <Typewriter
                        options={{
                            strings: [
                                'Senior Frontend Engineer',
                                'React · Next.js · Angular',
                                'AI-Powered Engineer',
                                detailed,
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
                <div className='btnContainer'>
                    <div className='btn-border'>
                        <button className='btn' onClick={handleDownload}>Download CV</button>
                    </div>
                </div>
                <div className='socials-container'>
                    <img src={linkdin} alt='linkdin' className="icon" onClick={() => handleSocialIcons('linkdin')} />
                    <img src={github} alt='github' className="icon" onClick={() => handleSocialIcons('github')} />
                </div>
            </div>
        </section>
    )
}

export default Intro;