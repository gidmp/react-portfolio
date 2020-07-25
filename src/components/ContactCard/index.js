/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

function ContactCard(){
    return(
        <div className="uk-container">
            <div className = "uk-text-center">
                <p>Reach out to me or just come by to say hi by using this form or email me at <a id= "emailLink" href="mailto:danielluke08@gmail.com">danielluke08@gmail.com</a></p>
                <p>or follow me on the social media below</p>
                <div className="uk-text-center uk-text-middle">
                    <a uk-icon="icon: github-alt" className="contact-icon contact-link-icon" href="https://github.com/gidmp"  target="_blank"></a>
                    <a uk-icon="icon: linkedin" className="contact-icon contact-link-icon" href="https://www.linkedin.com/in/danieltanoeihusada/" target="_blank"></a>
                    <a uk-icon="icon: facebook" className="contact-icon contact-link-icon" href="https://www.facebook.com/daniel.tanoeihusada" target="_blank"></a>
                    <a uk-icon="icon: twitter" className="contact-icon contact-link-icon" href="https://twitter.com/DTanoeihusada" target="_blank"></a>
                </div>

            </div>
        </div>

    )
}

export default ContactCard;