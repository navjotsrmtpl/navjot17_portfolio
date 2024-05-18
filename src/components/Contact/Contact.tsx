import React from 'react'
import './Contact.css';

function Contact() {
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
    return (
        <section id="contact">
            <h1 className='heading'>Contact</h1>
            <div className='contact_section'>
                <p className='pading_txt'>Email:<span className='font-wt' onClick={() => handlebox('email')}>navjotsingh1795@gmail.com</span></p>
                <p className='pading_txt'>Mobile:<span className='font-wt' onClick={() => handlebox('mobile')}>+918808294552</span></p>
            </div>
        </section>
    )
}

export default Contact