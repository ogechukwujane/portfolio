import {useState} from "react";
import {BsXLg} from "react-icons/bs";
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
    const [showNav, SetShowNav] = useState(false);
    const [navbar, SetNavBar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 90){
            SetNavBar(true);
        } else
        SetNavBar(false);
    };

   

    window.addEventListener('scroll', changeBackground);
    

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
                                <Link to="home" className='home'
                                spy={true} smooth={true}
                                onClick={() => SetShowNav(!showNav)}
                                role="button"
                                >HOME</Link>
                        </li>
                            <li>
                                
                                <Link to="about" 
                                spy={true} smooth={true}
                                onClick={() => SetShowNav(!showNav)}
                                role="button" 
                                >ABOUT</Link>
                            </li>
                            <li>
                                <Link to="resume"
                                spy={true} smooth={true}
                                onClick={() => SetShowNav(!showNav)}
                                role="button"
                                >RESUME</Link>
                            </li>
                            <li>
                                <Link to="portfolio"
                                spy={true} smooth={true}
                                onClick={() => SetShowNav(!showNav)}
                                role="button"
                                >PORTFOLIO</Link>
                            </li>
                            <li>
                                <Link to="contact" 
                                spy={true} smooth={true}
                                onClick={() => SetShowNav(!showNav)}
                                role="button"
                                >CONTACT</Link>
                            </li>
                        </ul>
                        
                    </div>
                    
                </div>
            </nav>
        </>
    )
};

export default Navbar;