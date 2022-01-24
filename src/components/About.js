import react from "react";
import Navbar from "./Navbar";
import './About.css';

import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import image from '../images/jahne.png';

const About = () => {
    return(
        <>
            <div className="about-container">
                
                    <p className="about">ABOUT</p>
                    <p className="about-me">About me</p>
                <div className="about-text">

                    <img src={image} className="about-img"/>
                    <p className="my-info">
                        I'm a fullstack software developer with extensive knowledge and experience in building software solutions
                        using Javascript, ReactJs, React Native, HTML, CSS, NodeJs, C#, Java and kotlin.<br/>

                        I Love to create solutions that come alive and solve critical problems. I'm driven, industrious and love 
                        human interaction. You 'll find me staking out a challenge, fleshing out a problem or 
                        just chilling at a meeetup with friends and family.<br/>

                        I also love sharing knowledge, that why I freelance as a part-time tutor and writer, 
                        teaching and writing about mathematics and software development concepts.<br/>

                        I design and develop software applications for desktop, mobile(android&ios) 
                        and web platform; and have been working in the field for more than 3 years.<br/>

                        I would Love to help you take your product to the next level.
                    </p>
                </div>
                
            </div>
            
        </>
    )
}

export default About;