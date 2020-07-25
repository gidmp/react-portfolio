/* eslint-disable no-unused-expressions */
import React from "react";
import "./styles.css";
import Background from "../../components/Background";
import imageLink from "../../assets/images/background1.jpg"
import Navbar from "../../components/Navbar"

function AboutMePage () {
    return(
        <Background image = {imageLink}>
            <Navbar />
        </Background>
    )
}

export default AboutMePage