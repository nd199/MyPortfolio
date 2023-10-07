import React from 'react';
import './footer.css';
import love from '../../assets/love.png';

const Footer = () => {

    const d = new Date();

    return (
        <footer className='footer'>
            <p> Copyright &#169; {d.getFullYear()} Narendran MD.
                All rights recieved Made with <span><img src={love} alt=""
                    className='love' /></span>.</p>
        </footer>
    )
}

export default Footer