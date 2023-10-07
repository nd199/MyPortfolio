import React from 'react';
import './Intro.css';
import { Link } from "react-scroll";
import hire from '../../assets/hire.png';
import profilePicture from '../../assets/profilePicture.png';

const Intro = () => {
    return (
        <section id='intro'>
            <img src={profilePicture} alt="" className="profImage" />
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className='introName'>Naren</span>
                    <br />
                    <span>Website Design & <br />Developer</span>
                </span>
                <p className="introPara">
                    I am a designer and developer inspired in
                    <br /> creating user-friendly websites
                </p>
                <Link className='btnLink'>
                    <button className="hireMe">
                        <img src={hire} alt="" className='hireImage' />Hire Me
                    </button>
                </Link>
            </div>
        </section >
    )
}

export default Intro