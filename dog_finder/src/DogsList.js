import React from "react"

const Link = require("react-router-dom").Link;

const DogsList=({dogs})=>{
    const allDogs = dogs.dogs.map(d=>
        (<div>
                <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                {/* <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link> */}
                <img src ={d.src}></img>
        </div>)
        )
    return(
        <div>
            <h1>All Dogs</h1>
            {allDogs}

        </div>
    )
}

export default DogsList;
