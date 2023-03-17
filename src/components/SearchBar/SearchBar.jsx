import { useState } from "react";
import { NavBar, NavInput, NavButton } from "./SearchBar.js";

export default function SearchBar({onSearch}) {
   const [id, setId]= useState("");
   const handleChange= (event)=>{
      setId(event.target.value);
   }

   return (
      <NavBar>
         
         <NavInput type='search' onChange={handleChange}/>
         <NavButton onClick={()=>onSearch(id)}>Agregar</NavButton> 
      
      </NavBar>
   );
}

