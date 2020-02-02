import React from "react";

function Rectangle(){

    const rectangleStyle = {
        height: "100px",
        width: "500px",
        borderColor: "orange",
        borderStyle: "dashed",
        borderWeight: "3px",
        backgroundColor: "blue"
    }

    return(
        <div style={rectangleStyle}></div>
    )
}

export default Rectangle;