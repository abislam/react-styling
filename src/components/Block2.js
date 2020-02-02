import React from "react";

function Block2(props){

    const [borderColor, setBorderColor] = React.useState("blue");
    const [backgroundColor, setBackgroundColor] = React.useState("red");

    const switchColor = () =>{
        if(borderColor === "blue" && backgroundColor === "red"){
            setBorderColor("green");
            setBackgroundColor("blue");
        }else if(borderColor === "green" && backgroundColor === "blue"){
            setBorderColor("red");
            setBackgroundColor("green");
        }else{
            setBorderColor("blue");
            setBackgroundColor("red");
        }
    }

    const blockStyle = {
        height: "100px",
        width: "100px",
        borderColor: props.borderColor,
        borderStyle: "solid",
        borderWeight: "2px",
        backgroundColor: props.backgroundColor
    }


    return(
        <div style={blockStyle} onClick={switchColor}></div>
    )


}

export default Block2;