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
                            Hi. My name is Daniel Luke Tanoeihusada and I am a fresh, full-stack web developer. 
                            For a few years I have been working in a Histology laboratory based 
                            at the University of Washington Medical Center. 
                            This career has taught me the value of hard work, discipline, and flexibility- the same principles that I try to apply to learning web development.
                            </p>
                            <br></br>
                            <p>
                            Right now, I am finishing the Full-Stack Web Development Bootcamp 
                            from the University of Washington where I have learned to hone my skills 
                            to create fully functional web applications- concrete things that I 
                            did not usually experience in my line of work. I am hoping to put this 
                            newly-learned skill to good use and land a promising new career as a 
                            web developer. Change is always scary, but I believe that 
                            I will brave it through.
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