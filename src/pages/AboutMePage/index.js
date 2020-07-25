/* eslint-disable no-unused-expressions */
import React from "react";
import "./styles.css";
import Background from "../../components/Background";
import imageLink from "../../assets/images/background1.jpg"
import Navbar from "../../components/Navbar"
import MyName from "../../components/MyName"
import About from "../../components/About"
import Container from "../../components/Container"
import skillList from "../../utils/skillList"
import SkillsCard from "../../components/SkillsCard"
import PageTitle from "../../components/PageTitle"

function AboutMePage () {
    return(
        <Background image = {imageLink}>
            <Navbar />
            <MyName />
            <About />
            <PageTitle 
                title = "What I do"
                description = "Here are some of the skills that I have honed so far"
                paddingTop = {20}
                paddingBottom = {70}
            />

            <Container>
                {
                    skillList.map((item,id) =>{
                        return (
                            <SkillsCard 
                                icon = {item.icon}
                                color = {item.color}
                                title = {item.title}
                                description = {item.description}
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