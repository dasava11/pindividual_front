import React /* , { useState } */ from "react";
import styles from "./FilterAzzb.module.css";
import { useDispatch } from "react-redux";
import { orderDogsByName } from "../../redux/actions/actions";

const FilterAzzb = ({ setPages }) => {
  /* const [order, setOrder] = useState("Order"); */
  const dispatch = useDispatch();
  console.log(setPages);

  const handleOrderDogsName = (event) => {
    const { value } = event.target;
    dispatch(orderDogsByName(value));
    setPages(1);
  };

  return (
    <div>
      <select className={styles.filterOrder} onChange={handleOrderDogsName}>
        <option value="Order">Order</option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
        <option value="Peso">Peso</option>
      </select>
    </div>
  );
};

export default FilterAzzb;
