import React, {useState} from "react";

const ColorForm =({addColor})=>{
    const InitialState = {name:""}
    const  [formData, setFormData] = useState(InitialState)
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData(formData=>({
            ...formData,
            [name]:value
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        addColor({[formData.name]:[formData.name]})
        setFormData(InitialState)
    }
        return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Add Color</label>
            <input 
            id="name"
            type="text"
            name="name"
            value ={formData.name}
            onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}
export default ColorForm;