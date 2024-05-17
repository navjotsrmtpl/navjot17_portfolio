import React from 'react'
import { Link } from 'react-scroll';
import './navbar.css'
// import logo from '../../assets/logo.gif'

function Navbar() {
    return (
        <nav className='navbar'>
            {/* <img src={logo} alt="logo" className='logo' /> */}
            <p className="name">Navjot Singh</p>
            <div className='destopMenu'>
                <Link to="about" className="desktopMenuListItem" smooth={true} duration={500} offset={-60}>About</Link>
                <Link to="experience" className="desktopMenuListItem" smooth={true} duration={500} offset={-60}>Experience</Link>
                <Link to="projects" className="desktopMenuListItem" smooth={true} duration={500} offset={-60}>Projects</Link>
                <Link to="projects" className="desktopMenuListItem" smooth={true} duration={500} offset={-60}>Skills</Link>
                <Link to="contact" className="desktopMenuListItem" smooth={true} duration={500} offset={-60}>Contact</Link>
            </div>
            {/* <button className='desktopMenuBtn'>
                Contact Me
            </button> */}
        </nav>
    )
}

export default Navbar