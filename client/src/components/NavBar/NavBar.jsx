import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar =(props)=>{
  console.log(props);
return(
  <div className={styles.containerNavBar} >
    <img className={styles.logoPage} src="https://img.freepik.com/vector-premium/sniffer-dog-logo-design-vector-silueta-sniffer-dog-vector-ilustracion_647432-493.jpg?w=2000" alt="logo" />
    <NavLink to="/form" >Create Dog</NavLink>
    <SearchBar onSearch={(dog)=>props.onSearch(dog)} />
  </div>
)

}

export default NavBar;