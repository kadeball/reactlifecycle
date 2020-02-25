import React from "react";
import '../App.css';


function Box(props) {
    return (
        <div className="box" style={{background: props.color}}><p>{props.number}</p></div>
    )
}

export default Box;