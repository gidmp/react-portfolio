import React from "react";
import "./style.css";


function SkillsCard(props){
    return(
        <div>
            <div className="uk-card uk-card-default uk-card-body">
            <div className = "uk-text-center">
                <i className={props.icon} style = {{color: props.color}}></i>
                <p className = "skill-title">{props.title}</p>
            </div>
                <div className = "skill-description uk-text-center">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )

}

export default SkillsCard