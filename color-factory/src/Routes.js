import React, {useState, useEffect} from "react";
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import ColorList from "./ColorList";
import ColorPage from "./ColorPage";
import NotFound from "./NotFound";
import validateColor from "validate-color";


const Routes = ()=>{
     
    
    const [colors, setColors] = useState([])
    useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
      );
    const addColor =(newColorObj)=>{
        setColors(existColors=>[...existColors,newColorObj])
    }
    function renderCurrentColor(props) {
        const { color } = props.match.params;
        if(validateColor(color)){
            return <ColorPage  color={color} />;
        }
        return <NotFound/>
       
      };
    
    return(
        <Switch>
            <Route exact path="/colors"><ColorList colors={colors} addColor={addColor} /></Route>
            <Route exact path="/colors/:color" render={renderCurrentColor}></Route>
            <Route><NotFound/></Route>
        </Switch>
    )
}
export default Routes;