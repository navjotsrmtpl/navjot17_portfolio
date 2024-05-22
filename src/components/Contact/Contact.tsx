import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

function Contact() {

    const [tooltip, setTooltip] = useState('Copy');


    let url = "";
    const handlebox = (value: string) => {
        if (value === 'email') {
            url = "mailto:navjotsingh1795@gmail.com";
        }
        if (value === 'mobile') {
            url = 'tel:+918808294552'
        }
        window.open(url, '_blank');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText('navjotsingh1795@gmail.com')
            .then(() => {
                setTooltip('Copied!');
                setTimeout(() => setTooltip('Copy'), 2000); // Reset tooltip after 2 seconds
            })
            .catch(err => console.error('Failed to copy!', err));
    };


    return (
        <section id="contact">
            <h1 className='heading'>Contact</h1>
            <div className='contact_section'>
                <p className='pading_txt'>Email:<span className='font-wt' onClick={() => handlebox('email')}>navjotsingh1795@gmail.com</span>
                    <button onClick={handleCopy} title={tooltip} style={{ position: 'relative' }} className='contact-btn'>
                        <FontAwesomeIcon icon={faCopy} />
                        <span style={{ visibility: tooltip === 'Copy' ? 'hidden' : 'visible' }} className="contact-style">
                            {tooltip}
                        </span>
                    </button>
                </p>
                <p className='pading_txt'>Mobile:<span className='font-wt' onClick={() => handlebox('mobile')}>+918808294552</span></p>
            </div>
        </section>
    )
}

export default Contact;
