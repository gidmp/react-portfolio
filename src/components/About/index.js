/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";
import Mugshot from "../../assets/images/aboutMe.jpg"

function About(){
    return(
        <div className = "uk-container">
            <div className = "uk-text-center">
                <div className = "about-container">
                    <div className = "about-me">
                    <img id = "mugshot" src={Mugshot} alt="Me" style={{ width: 180 }} />
                        <h1 className="about-me-title uk-heading-divider">About Me</h1>
                        <div className = "about-text-container"> 
                            <p>
                                Hi, My name is Daniel Luke Tanoeihusada and I am a fresh full-stack web developer.
                                For a few years i have been working in Histology laboratory based on the University of Washington Medical Center.
                                This career have taught me to the value of hard work, discipline and flexibility; the same principle that I
                                try to apply ever since I decided to learn web development.
                            </p>
                            <br></br>
                            <p>
                                Right now, I am finishing full-stack web development bootcamp from University of Washington, where
                                I have learned and hone my skill to create a fully functinal web applications. Concrete things that I did not usually 
                                experience in my line of work. I am hoping to put this newly-learned skill to good use and land a promising
                                new career as web developer. Change is always scary, but I believe that I will brave it through.
                            </p>
                        </div>
                        <div className="uk-text-center uk-text-middle">
                            <a uk-icon="icon: github-alt ; ratio: 1.5" className="contact-icon contact-link-icon" href="https://github.com/gidmp"  target="_blank"></a>
                            <a uk-icon="icon: mail ; ratio: 1.5" className="contact-icon contact-link-icon" href="mailto:danielluke08@gmail.com"></a>
                            <a uk-icon="icon: linkedin ; ratio: 1.5" className="contact-icon contact-link-icon" href="https://www.linkedin.com/in/danieltanoeihusada/" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About