import React, { useState } from "react";
import styles from "./FilterAzzb.module.css"
import { useDispatch } from "react-redux";
import { orderDogsByName } from "../../redux/actions/actions";

const FilterAzzb = ()=>{

const [order, setOrder] = useState('Order')
const dispatch = useDispatch()
const handleChange = (event)=>{
const {value}=event.target;
setOrder(value)


};

const handleOrderDogsName = (event) => {
  const {value}=event.target;
  dispatch(orderDogsByName(value))
}



  return(
    <div>
      <select className={styles.filterOrder} onChange={handleChange} >
        <option value="Order">Order</option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
      </select>
    </div>
  )
}

export default FilterAzzb;