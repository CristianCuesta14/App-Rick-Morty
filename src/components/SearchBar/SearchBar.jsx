import { useState } from "react";
import style from "../NavBar/NavBar.module.css"


function SearchBar ({onSearch}){
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   };
   return (
      <div>
         <input placeholder="Ingresa el ID" className={style.inputAdd} type="search" value={id} onChange={handleChange} />
         <button className={style.btnAddNav} onClick={()=> {onSearch(id)}}>Agregar</button>
      </div>
   )

}


export default SearchBar;

