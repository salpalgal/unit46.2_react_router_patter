import DogsList from "./DogsList.js"
// import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import whiskey from "./react-router-patterns/whiskey.jpg";
import tubby from "./react-router-patterns/tubby.jpg";
import duke from "./react-router-patterns/duke.jpg";
import perry from "./react-router-patterns/perry.jpg";
import DogDetails from "./DogDetails.js";
import FilterDogs from "./FilterDogs.js";
const BrowserRouter = require("react-router-dom").BrowserRouter;

const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;
const Redirect = require("react-router-dom").Redirect;

function App({dogs}) {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      
      <Route exact path ="/dogs/:name"><FilterDogs dogs={dogs}/></Route>
      <Route exact path ="/dogs"><DogsList dogs={dogs}/></Route>
      <Redirect to="/dogs"></Redirect>
      </Switch>
     </BrowserRouter>
     
    </div>
  );
}


export const dogs = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

App.defaultProps = {dogs}
export default App;
