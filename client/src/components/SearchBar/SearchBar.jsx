import React, { useState} from "react";
import { useSelector } from "react-redux";
import styles from "./SearchBar.module.css";

const SearchBar =({search, setSearch})=>{

const allDogs = useSelector((state)=>state.allDogs)

  const [search, setSearch] = useState('');
  const [dog, setDog]= useState([]);

  const handleInputChange = (event)=>{
    const{value}= event.target;
    setSearch(value);
    console.log(value)
  }; 

  const handleClick =(props)=>{
 
  }

  const handleKey =(event)=>{
  
  }

  const search=(dogSearch)=>{
    let dogFound = allDogs.filter((dog)=>{
      if(dog.name.toString().toLowerCase.includes(dogSearch.toLowerCase())){
        return dog;
      }
    setDog(dogFound)
  })
}

  return(
    <div className={styles.containerSearchBar}>
    <input type="search" placeholder="Buscar una raza" onChange={handleInputChange} onKeyDown={handleKey}/>
    <button onClick={handleClick}>Buscar</button>
    </div>
  )
}

export default SearchBar;