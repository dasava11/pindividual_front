import React, {useState, useEffect} from "react";
import axios from "axios"
import styles from "./FilterTempers.module.css"
const {REACT_APP_GET_ALL_TEMPER} = process.env

const FilterTempers = ()=>{

const [filter, setFilter]= useState([])


useEffect(()=>{
    axios.get(REACT_APP_GET_ALL_TEMPER).then(response=>{
        const resTempers = response.data
        setFilter(resTempers);
    })
},[]);

  return(
    <div className={styles.containerFilterTempers} >
      <select name={'tempers'} className={styles.filterTempers} /* onChange={handleChangeInput} */>
        <option>Select tempers</option>
          {filter && filter.map((temper)=>(
            <option key={temper.id} value={temper.name}>{temper.name}</option>
          ))}
      </select>
      <button>Search</button>
    </div>
  )
}

export default FilterTempers;