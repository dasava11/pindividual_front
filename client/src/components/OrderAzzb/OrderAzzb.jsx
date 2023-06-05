import React /* , { useState } */ from "react";
import { useDispatch } from "react-redux";
import { orderDogsByName } from "../../redux/actions/actions";
import styles from "./OrderAzzb.module.css";

const OrderAzzb = ({ setPages }) => {
  const dispatch = useDispatch();

  const handleOrderDogsName = (event) => {
    const { value } = event.target;
    dispatch(orderDogsByName(value));
    setPages(1);
  };

  return (
    <div>
      <select className={styles.filterOrder} onChange={handleOrderDogsName}>
        <option value="Order">Alphabetical order</option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
      </select>
    </div>
  );
};

export default OrderAzzb;
