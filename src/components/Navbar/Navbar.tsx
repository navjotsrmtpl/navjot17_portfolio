// Navbar.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import { ThemeContext, useTheme } from '../context/ThemeProvider';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar" >
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1>Navjot Singh</h1>
                    <ToggleSwitch isOn={theme === 'dark'} handleToggle={toggleTheme} />
                </div>
                <div className="menu-icon" onClick={toggleNavbar}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>

                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={toggleNavbar}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={toggleNavbar}
                        >
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={toggleNavbar}
                        >
                            Projects
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={toggleNavbar}
                        >
                            Skills
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={toggleNavbar}
                        >
                            Contact
                        </Link>

                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
