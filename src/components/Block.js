import React from "react";

function Block(){

    const blockStyle = {
        height: "100px",
        width: "100px",
        borderColor: "orange",
        borderStyle: "dashed",
        borderWeight: "3px",
        backgroundColor: "blue"
    }

    return(
        <div style={bloclStyle}></div>
    )
}

export default Block;