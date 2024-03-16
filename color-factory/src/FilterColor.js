import React from "react"

import ColorPage from "./ColorPage"

import { useParams, Route } from "react-router-dom";

const FilterColors =({colors})=>{
    console.log(colors)
    const {color} = useParams()
    let col;
    for(let c of colors){
        if(c.toLowerCase()===color.toLowerCase()){
            col = c
        }
       
    }
    
    return(
        <ColorPage color={col}/>
    )

}

export default FilterColors;