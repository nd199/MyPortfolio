import React from 'react';
import './Skills.css';
import ui from '../../assets/designer.png';
import backend from '../../assets/backend.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/javascript.png';
import react from '../../assets/react.png';
import java from '../../assets/java.png';
import postgres from '../../assets/postgre.png';
import mysql from '../../assets/mysql.png';
import docker from '../../assets/docker.png';
import git from '../../assets/code.png';
import EC2 from '../../assets/EC2.png';
import devops from '../../assets/devops.png';





const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">THINGS I DO</span>
            <span className="description">
                I specialize in creating websites that offer excellent user experience, combining front-end design with efficient back-end data management. Additionally, I ensure mobile compatibility for seamless access across various devices.
            </span>
            <section className="skill-container">
                <div className="skillBar">
                    <img src={ui} alt="" className="skillImage" />
                    <div className="skillBarText">
                        <h4 className="title">UI/UX</h4>
                        <p>The user interface is crucial in development as it showcase our design and express our intentions effectively.</p>
                        <span className='images'>
                            <img className='s-image' src={html} alt="" />
                            <img className='s-image' src={css} alt="" />
                            <img className='s-image' src={js} alt="" />
                            <img className='s-image' src={react} alt="" />
                        </span>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={backend} alt="" className="skillImage" />
                    <div className="skillBarText">
                        <h4 className="title">BACKEND/DATA</h4>
                        <p>The backend holds utmost significance, while the frontend serves as a platform to showcase and abstract functionality.</p>
                        <span className='images'>
                            <img className='s-image' src={java} alt="" />
                            <img className='s-image' src={postgres} alt="" />
                            <img className='s-image' src={mysql} alt="" />
                        </span>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={devops} alt="" className="skillImage" />
                    <div className="skillBarText">
                        <h4 className="title">CI & CD</h4>
                        <p>It is imperative to not only create and develop applications, but also to maintain continuously through continuous delivery and integration, encompassing build, test, and deployment.</p>
                        <span className='images'>
                            <img className='s-image' src={git} alt="" />
                            <img className='s-image' src={docker} alt="" />
                            <img className='s-image' src={EC2} alt="" />
                        </span>
                    </div>
                </div>
            </section >
        </section >
    )
}

export default Skills