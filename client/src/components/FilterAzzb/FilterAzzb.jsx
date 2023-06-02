import React from "react";
import styles from "./FilterAzzb.module.css"

const FilterAzzb = ()=>{
  return(
    <div>
      <select className={styles.filterOrder} >
        <option>Order</option>
        <option>A - Z</option>
        <option>Z - A</option>
      </select>
    </div>
  )
}

export default FilterAzzb;