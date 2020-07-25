import React from "react";
import "./style.css";

function PageTitle(props){
    return(
        <div className="uk-text-center page-title" style = {{paddingTop: props.padding}}>
            <h1>{props.title}</h1>
            <p>{props.description}s</p>
        </div>
    )
}

export default PageTitle;