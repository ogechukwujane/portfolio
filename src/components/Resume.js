import react from "react";
import Navbar from "./Navbar";
import './Resume.css';

const Resume = () => {
    return(
        <div className="resume-container" >
            <div className="resumenav" id="resume"></div>
            <p className="resume">RESUME</p>
            <p className="my-resume">My resume</p>
            <div className="education-attained-container">
                <div className="education">
                    <p>Education</p>
                </div>
                <div className="my-degrees">
                    <div className="degree1">
                        <div className="school">
                                <p>Degree of Computer Science Nnamdi Azikiwe University </p> 
                                <p> 4 Years Course</p>
                        </div>
                        <div className="graduated">
                                <p>DONE </p> 
                                <p>GRADUATED DECEMBER 2021</p>
                        </div> 
                    </div>
                    <div className="degree2">
                        <div className="school">
                                <p>NIIT </p>
                                <p> 6 Month Course</p>
                        </div>
                        <div className="graduated">
                                <p>DONE </p>
                                <p> GRADUATED JUNE 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;