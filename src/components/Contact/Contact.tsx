import React from 'react'
import './Contact.css';

function Contact() {
    let url = "";
    const handlemailbox = () => {
        url = "mailto:navjotsingh1795@gmail.com";

        window.open(url, '_blank');
    }
    return (
        <section id="contact">
            <h1 className='heading'>Contact</h1>
            <div className='contact_section'>
                <p className='pading_txt'>Email:<span className='font-wt' onClick={handlemailbox}>navjotsingh1795@gmail.com</span></p>
                <p className='pading_txt'>Mobile:<span className='font-wt'>+918808294552</span></p>
            </div>
        </section>
    )
}

export default Contact