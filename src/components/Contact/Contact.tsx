import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

function Contact() {
    const [tooltip, setTooltip] = useState('Copy');

    const handlebox = (value: string) => {
        let url = '';
        if (value === 'email') url = 'mailto:navjotsingh1795@gmail.com';
        if (value === 'mobile') url = 'tel:+918808294552';
        if (value === 'linkedin') url = 'https://www.linkedin.com/in/navjot-singh-a427b4104/';
        if (value === 'github') url = 'https://github.com/navjotsrmtpl';
        if (value === 'portfolio') url = 'https://navjotsrmtpl.github.io/navjot17_portfolio';
        window.open(url, '_blank');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText('navjotsingh1795@gmail.com')
            .then(() => {
                setTooltip('Copied!');
                setTimeout(() => setTooltip('Copy'), 2000);
            })
            .catch(err => console.error('Failed to copy!', err));
    };

    return (
        <section id="contact">
            <h1 className='heading'>Contact</h1>
            <div className='contact_section'>
                <p className='pading_txt'>
                    Email:
                    <span className='font-wt' onClick={() => handlebox('email')}>navjotsingh1795@gmail.com</span>
                    <button onClick={handleCopy} title={tooltip} style={{ position: 'relative' }} className='contact-btn'>
                        <FontAwesomeIcon icon={faCopy} />
                        <span style={{ visibility: tooltip === 'Copy' ? 'hidden' : 'visible' }} className="contact-style">
                            {tooltip}
                        </span>
                    </button>
                </p>
                <p className='pading_txt'>
                    Mobile:
                    <span className='font-wt' onClick={() => handlebox('mobile')}>+91 8808294552</span>
                </p>
                <p className='pading_txt'>
                    LinkedIn:
                    <span className='font-wt link-style' onClick={() => handlebox('linkedin')}>linkedin.com/in/navjot-singh-a427b4104</span>
                </p>
                <p className='pading_txt'>
                    GitHub:
                    <span className='font-wt link-style' onClick={() => handlebox('github')}>github.com/navjotsrmtpl</span>
                </p>
                <p className='pading_txt'>
                    Portfolio:
                    <span className='font-wt link-style' onClick={() => handlebox('portfolio')}>navjotsrmtpl.github.io/navjot17_portfolio</span>
                </p>
                <p className='pading_txt'>
                    Location:
                    <span className='font-wt'>Gurugram, Haryana, India</span>
                </p>
            </div>
        </section>
    )
}

export default Contact;
