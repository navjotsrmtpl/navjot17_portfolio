import React from 'react'
import './Intro.css';
import logo from '../../assets/navjot.png';
import linkdin from '../../assets/linkdin.png';
import github from '../../assets/github.png';
import Typewriter from 'typewriter-effect';

function Intro() {


    const handleDownload = () => {
        // Path to the PDF file in the public folder
        const pdfPath = 'https://github.com/navjotsrmtpl/navjot17_portfolio/raw/gh-pages/Navjot2024_Angular.pdf';

        // Create a link element
        const link = document.createElement('a');
        // Set the href attribute to the PDF path
        link.href = pdfPath;
        // Set the download attribute to force download
        link.setAttribute('download', 'navjot.pdf');
        // Hide the link
        link.style.display = 'none';
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event
        link.click();
        // Clean up: remove the link from the DOM
        document.body.removeChild(link);
    };

    const handleSocialIcons = (value: string) => {
        let url = '';
        if (value === 'linkdin') {
            url = 'https://www.linkedin.com/in/navjot-singh-a427b4104/?originalSubdomain=in';


        }
        if (value === 'github') {
            url = "https://github.com/navjotsrmtpl"
        }

        // Open the URL in a new tab
        window.open(url, '_blank');

    }


    return (
        <section id="intro">

            <div className='section__pic-container'>
                <img src={logo} alt="logo" />
            </div>

            <div className='section__text' >

                <p className='section__text__p1'>
                    <Typewriter
                        options={{
                            strings: ["Hello I'm"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
                <h1 className='title'>Navjot Singh</h1>
                <p className='designation'>
                    <Typewriter
                        options={{
                            strings: ['Senior UI Developer'],
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