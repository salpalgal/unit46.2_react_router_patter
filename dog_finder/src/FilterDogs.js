import React from "react"

import DogDetails from "./DogDetails"


const useParams = require("react-router-dom").useParams;
const FilterDogs =({dogs})=>{
    const {name} = useParams()
    let dog;
    for(let d in dogs.dogs){
        if(dogs.dogs[d].name.toLowerCase()===name.toLowerCase()){
            dog = dogs.dogs[d]
        }
    }
    return(
        <DogDetails dog={dog}/>
    )

}

export default FilterDogs;