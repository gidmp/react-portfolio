/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Resume from "../../assets/resume/DanielTanoeihusada2.pdf"

function Background(props){
    return(
        <div className="uk-position-relative">
            <div className="uk-position-top">
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar = "true">
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li><Link to = "/about">About Me</Link></li>
                            <li><Link to = "/portfolio">Portfolio</Link></li>
                            <li><a href = {Resume} target = "_blank">Resume</a></li>
                            <li><Link to = "/contact">Contact</Link></li>
                        </ul>
                        <a className="hamburger-menu uk-hidden@m" href="#mobileNav" uk-toggle="target: #mobileNav"><span className="menu-icon"uk-icon="icon: menu; ratio: 1.8"></span></a>
                    </div>
                </nav>
            </div>
        </div>    
    )
}

export default Background