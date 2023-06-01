import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar =()=>{

  const navigate = useNavigate();
  
return(
  <div className={styles.containerNavBar} >
    <img className={styles.logoPage} src="https://img.freepik.com/vector-premium/sniffer-dog-logo-design-vector-silueta-sniffer-dog-vector-ilustracion_647432-493.jpg?w=2000" alt="logo" onClick={()=>navigate('/')}/>
    <div className={styles.containerNav} >
    <NavLink className={styles.linkCreate} to="/form" >Create Dog</NavLink>
    <SearchBar />
    </div>
  </div>
)

}

export default NavBar;