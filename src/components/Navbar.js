import react,{useState} from "react";
import Hamburger from '../images/hamburger.png';
import Exit from '../images/exit.png';
import {BsXLg} from "react-icons/bs";
import {GiHamburgerMenu} from 'react-icons/gi';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { within } from "@testing-library/react";

const Navbar = () => {
    const [showNav, SetShowNav] = useState(false);
    const [navbar, SetNavBar] = useState(false);

    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 90){
            SetNavBar(true);
        } else
        SetNavBar(false);
    };

    // const removeNavBar = () => {
    //     console.log(window.scrollY)
    //     SetShowNav(!showNav);
    // }

    window.addEventListener('scroll', changeBackground);
    // window.addEventListener('scroll', removeNavBar);

    return(
        <>
            <nav >
                <div className={ navbar ? "navbar active" : "navbar"}>
                    <h1>JAHNY</h1>
                    <div className="link-container">
                        <GiHamburgerMenu className="hamburger"
                            onClick={() => SetShowNav(!showNav)}
                            role="button"
                            />
                        <ul className={!showNav ? 'list-items hide-list-items': 'list-items'}>
                            <div >
                            <BsXLg className="exit-icon"
                                
                            onClick={() => SetShowNav(!showNav)}
                            role="button"
                            /></div>
                        <li>
                                <NavLink to="/" className='home'
                                onClick={() => SetShowNav(!showNav)}
                                role="button"
                                >HOME</NavLink>
                        </li>
                            <li>
                                
                                <NavLink to="/about" 
                                onClick={() => SetShowNav(!showNav)}
                                role="button" 
                                >ABOUT</NavLink>
                            </li>
                            <li>
                                <NavLink to="/resume"
                                onClick={() => SetShowNav(!showNav)}
                                role="button"
                                >RESUME</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio"
                                onClick={() => SetShowNav(!showNav)}
                                role="button"
                                >PORTFOLIO</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact" 
                                onClick={() => SetShowNav(!showNav)}
                                role="button"
                                >CONTACT</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    
                </div>
            </nav>
        </>
    )
};

export default Navbar;