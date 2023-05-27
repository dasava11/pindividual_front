/* import React, { useEffect, useState } from "react";
import styles from "./SearchTemper.module.css";
import axios from "axios";
const {REACT_APP_GET_ALL_TEMPER} = process.env;

export const SearchTemper = ()=>{
  const [temper, setTemper] = useState([]);

  useEffect(()=>{
   axios.get(REACT_APP_GET_ALL_TEMPER).then(response =>{
    const resTemper = response.data
    if(resTemper){
      setTemper(resTemper)
    }
    console.log(temper);
   })
  },[])

  return(
    <div>
    <form action="submit">
    <select name="" id="">{setTemper.map}</select>
    <button>Search by Temperament</button>
    </form>
    </div>
  )
} */