/* eslint-disable no-unused-expressions */
import React from "react";
import "./styles.css";
import Background from "../../components/Background";
import imageLink from "../../assets/images/background1.jpg"
import Navbar from "../../components/Navbar"
import PageTitle from "../../components/PageTitle"
import ContactCard from "../../components/ContactCard"

function ContactMePage () {
    return(
        <Background image = {imageLink}>
            <Navbar />
            <PageTitle 
                paddingTop = {140}
                paddingBottom = {0}
                title = "Contact Me"
            />
            <ContactCard />

        </Background>
    )
}

export default ContactMePage