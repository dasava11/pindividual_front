import React from "react";
import styles from "./OrderByWeight.module.css";
import { useDispatch } from "react-redux";
import { orderByWeight } from "../../redux/actions/actions";

const OrderByWeight = ({ setPages }) => {
  const dispatch = useDispatch();

  const handelOrderWeight = (event) => {
    const { value } = event.target;
    dispatch(orderByWeight(value));
    setPages(1);
  };

  return (
    <div>
      <select className={styles.orderweight} onChange={handelOrderWeight}>
        <option value="OrderW">Order by Weight</option>
        <option value="min">min to max</option>
        <option value="max">max to min</option>
      </select>
    </div>
  );
};

export default OrderByWeight;
