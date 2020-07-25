/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

function Footer(){ 
    return(
        <footer className="uk-text-center uk-text-middle footer">
            <span> © 2020 Daniel Luke Tanoeihusada</span> <br />
            <a uk-icon="icon: github-alt" className="contact-icon contact-link-icon" href="https://github.com/gidmp"  target="_blank"></a>
            <a uk-icon="icon: mail" className="contact-icon contact-link-icon" href="mailto:danielluke08@gmail.com"></a>
            <a uk-icon="icon: linkedin" className="contact-icon contact-link-icon" href="https://www.linkedin.com/in/danieltanoeihusada/" target="_blank"></a>
        </footer>        
    )
}

export default Footer;