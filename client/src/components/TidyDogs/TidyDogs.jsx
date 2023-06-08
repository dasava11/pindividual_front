import React from "react";
import { useDispatch } from "react-redux";
import { orderDogs } from "../../redux/actions/actions";
import styles from "./TidyDogs.module.css";

const TidyDogs = ({ setPages }) => {
  const dispatch = useDispatch();

  const handleOrderDogsName = (event) => {
    const { value } = event.target;
    dispatch(orderDogs(value));
    setPages(1);
  };

  return (
    <div>
      <select className={styles.filterOrder} onChange={handleOrderDogsName}>
        <option value="Order">Select one</option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
        <option value="min">min to max weight</option>
        <option value="max">max to min weight</option>
      </select>
    </div>
  );
};

export default TidyDogs;
