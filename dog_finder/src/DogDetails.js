import React from "react";

const Link = require("react-router-dom").Link;
const DogDetails =({dog})=>{
    

    return(
        <div>
            <ul>
                <li>{dog.name}</li>
                <li>age: {dog.age}</li>
                <li>facts : {dog.facts.map(f=><li>{f}</li>)}</li>
                <img src={dog.src}></img>
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    )
}

export default DogDetails;