import React, { useRef } from 'react';
import './Contact.css';
import ins from '../../assets/instagram.png';
import lin from '../../assets/linkedin.png';
import gib from '../../assets/github.png';
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_531wwne', 'template_u2albii', form.current, '40ZMLLahaAf26yeJb')
            .then((result) => {
                alert('Email Sent');
                e.target.reset();
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id="contactPage">
            <section className="contact">
                <span className="contactTitle">Contact</span>
                <p className='description'>Please fill below form, help me contact you</p>
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                    <div className="formFields">
                        <input type="text" className="name" name='your_name' placeholder='Your Name' />
                        <input type="text" type="email" className="emailAddress"
                            placeholder='Your email' name='your_email' />
                        <textarea rows="7" className="textBox" name='message' placeholder='Your Message'></textarea>
                        <button className="submitBtn" type='submit' value='Send'>Send</button>
                    </div>
                    <div className="socialLinks">
                        <a href='https://www.instagram.com/narendran._.d/' target='_blank'><img src={ins} alt="Instagram" className="link" /></a>
                        <a href='https://www.linkedin.com/in/narendran-m-d-3193b0170/' target='_blank'><img src={lin} alt="LinkedIn" className="link" /></a>
                        <a href='https://github.com/nd199' target='_blank'><img src={gib} alt="Github" className="link" /></a>
                    </div>
                </form>
            </section>
        </section >
    )
}
export default Contact