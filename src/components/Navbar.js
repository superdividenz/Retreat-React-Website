import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/header.png'
import { Link, animateScroll as scroll } from "react-scroll";
<<<<<<< Updated upstream
import './Styles.css'
=======
import './css/Navbar.css'
>>>>>>> Stashed changes


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                <img src={logo} />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                    <Link
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link
                        activeClass="active"
                        to="retreats"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Retreats
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link
                        activeClass="active"
                        to="picnic"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Picnic
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
                    >
                        Contact
                    </Link>
                    </li>
<<<<<<< Updated upstream
=======
                    <li className="nav-item">
                    <Link
                        activeClass="active"
                        to="map"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Test
                    </Link>
                    </li>
>>>>>>> Stashed changes
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
