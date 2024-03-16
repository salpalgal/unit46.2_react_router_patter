import React from "react";
import { Link } from "react-router-dom";

const ColorPage = ({color})=>{
    return(
        <div style={{backgroundColor:color, height:1000}}>
            <h1 style={{color:"white"}}>This is {color}!</h1>
            <Link to="/colors">Go Back</Link>
        </div>
    )
}
export default ColorPage;