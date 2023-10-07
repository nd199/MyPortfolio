import React from 'react'
import './Work.css';
import customerApp from '../../assets/Customer-Spring-App.png';
import weatherApp from '../../assets/weather.png';


const Work = () => {
    return (
        <section id="works">
            <span className="workTitle">WORK SAMPLES</span>
            <span className="description">
                Work samples with screenshot with
                <br />Languages and tools used
            </span>
            <section className="works-container">
                <div className="customer">
                    <span>Customer Management App</span>
                    <img src={customerApp} alt="customer" className="c-image" />
                    <span className="appDesc">
                        (React, Java, PostgresDB, GitActions,
                        Docker, EC2)
                        Saving customer with their info
                    </span>
                </div>
                <div className="weather">
                    <span>Weather Check App</span>
                    <img src={weatherApp} alt="weather" className="w-image" />
                    <span className="appDesc">
                        (React, WeatherAPI)
                        Providing Weather Details
                    </span>
                </div>
            </section>
        </section>
    )
}

export default Work