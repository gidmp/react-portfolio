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
                        <p>
                            Hi, My name is Daniel Luke Tanoeihusada and I am a Seattle-based coding bootcamp student at University of Washington
                            aiming to become a software engineer.
                            While I am not drowning my head in learning coding, I spend my day working as a Histology Trainee.
                            I have a set of skills revolves around Design, HTML, CSS and JavaScript.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About