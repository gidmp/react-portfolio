/* eslint-disable no-unused-expressions */
import React from "react";
import "./styles.css";
import Background from "../../components/Background";
import imageLink from "../../assets/images/background1.jpg"
import Navbar from "../../components/Navbar"
import PageTitle from "../../components/PageTitle"
import Container from "../../components/Container"
import portfolioList from "../../utils/portfolioList.js"
import PortfolioCard from "../../components/PortfolioCard"

function AboutMePage () {
    return(
        <Background image = {imageLink}>
            <Navbar />
            <PageTitle 
                title = "Portfolio"
                description = "Here are some of my most recent work"
                paddingTop = {140}
                paddingBottom = {70}
            />
            <Container>
                {
                    portfolioList.map((item, id) =>{
                        return(
                            <PortfolioCard 
                                image = {item.img}
                                name = {item.name}
                                description = {item.description}
                                appLink = {item.appLink}
                                githubLink = {item.githubLink}
                                key = {id}
                            />
                        )
                    })
                }
            </Container>
        </Background>
    )
}

export default AboutMePage