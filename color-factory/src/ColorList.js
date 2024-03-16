import React ,{useState} from "react"; 
import { Link} from "react-router-dom";
import ColorForm from "./ColorForm.js";

const ColorList = ({colors,addColor})=>{

    return(
        <div>
            <h1>Color List</h1>
            <ColorForm addColor={addColor}/>
            {(colors).map(color=> <li key={Object.keys(color)[0]}>
                    <Link to={`/colors/${Object.keys(color)[0]}`}>{Object.keys(color)[0]}</Link>
                </li>
                
            )}
        </div>
    )
}

export default ColorList;