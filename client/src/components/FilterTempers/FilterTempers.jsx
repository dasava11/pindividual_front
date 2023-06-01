import React, {useState, useEffect} from "react";
import axios from "axios"
import styles from "./FilterTempers.module.css"
const {REACT_APP_GET_ALL_TEMPER} = process.env

const FilterTempers = ({handleFilterTempers})=>{

const [tempers, setTempers]= useState([])


useEffect(()=>{
    axios.get(REACT_APP_GET_ALL_TEMPER).then(response=>{
        const resTempers = response.data
        setTempers(resTempers);
    })
},[]);

  return(
    <div className={styles.containerFilterTempers} >
      <select name={'tempers'} className={styles.filterTempers} onChange={handleFilterTempers}>
        <option>Select tempers</option>
          {tempers && tempers.map((temper)=>(
            <option key={temper.id} value={temper.name}>{temper.name}</option>
          ))}
      </select>
    </div>
  )
}

export default FilterTempers;