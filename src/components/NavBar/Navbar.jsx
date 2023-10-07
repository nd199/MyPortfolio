import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-scroll";
import contactIcon from '../../assets/ContactIcon.png';
import menu from '../../assets/menu.png';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <p className='logo'>CN.</p>
            <div className="desktop-menu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="contactBtn" offset={-900} onClick={() => {
                document.getElementById('contactPage').scrollIntoView(
                    { 'behavior': 'smooth' }
                );
            }}>
                <img src={contactIcon} alt="" className="contact" />Contact Me
            </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav >
    )
}

export default Navbar