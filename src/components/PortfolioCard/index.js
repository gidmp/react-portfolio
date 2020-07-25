/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

function PortfolioCard(props){
    return(
    <div className="portfolio-card">
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{props.name}</h3>
                <p>{props.description}</p>
                <div uk-margin = 'true' className = "uk-text-center">
                    <a className="uk-button uk-button-default portfolio-btn" href= {props.appLink} target= "_blank">View website</a>
                    <a className="uk-button uk-button-default portfolio-btn" href= {props.githubLink} target= "_blank">View Github</a>
                </div>                    
            </div>
        </div>
    </div>    
)}

export default PortfolioCard;