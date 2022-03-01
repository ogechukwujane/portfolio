import react from "react";
import {BsMedium} from 'react-icons/bs';
import {BsGithub} from "react-icons/bs"
import { FaTwitter } from "react-icons/fa";
import { MdAlternateEmail, MdPhoneAndroid } from "react-icons/md";
import './Contact.css'

const Contact = () => {
    return(
        <div className="contact-container" >
            <div className="contactnav" id="contact"></div>
            <p className="contact">CONTACT</p>
            <p className="work-together">Let's work together</p>
            <div className="contact-links">
                <><a href="#"><BsMedium/>Medium</a></> 
                <><a href="#"><BsGithub/>GitHub</a></> 
                <><a href="#"><FaTwitter/>Twitter</a></> 
                <><a href="#"><MdAlternateEmail/>Send a mail</a></> 
                <><a href="#"><MdPhoneAndroid/>Call me</a></> 
            </div>
        </div>
    )
}

export default Contact;