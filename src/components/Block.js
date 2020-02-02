import React from "react";

function Block(props){

    const blockStyle = {
        height: "100px",
        width: "100px",
        borderColor: props.borderColor,
        borderStyle: "solid",
        borderWeight: "2px",
        backgroundColor: props.backgroundColor
    }

    return(
        <div style={blockStyle}></div>
    )
}

export default Block;