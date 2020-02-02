import React from "react";

function Block2(){



    const redBlue = {
        height: "100px",
        width: "100px",
        borderColor: "blue",
        borderStyle: "solid",
        borderWeight: "2px",
        backgroundColor: "red"
    }
    const blueGreen = {
        height: "100px",
        width: "100px",
        borderColor: "blue",
        borderStyle: "solid",
        borderWeight: "2px",
        backgroundColor: "green"
    }
    const greenRed = {
        height: "100px",
        width: "100px",
        borderColor: "green",
        borderStyle: "solid",
        borderWeight: "2px",
        backgroundColor: "red"
    }

    const [blockColor, setBlockColor] = React.useState(greenRed);

    const switchColor = () =>{
        if(blockColor === greenRed){
            setBlockColor(redBlue);
        }else if(blockColor === redBlue){
            setBlockColor(blueGreen)
        }else{
            setBlockColor(greenRed);
        }
    }

    return(
        <div onClick={switchColor}></div>
    )
}

export default Block2;