import React from "react";
import styles from "./FilterOrigin.module.css";
import { useDispatch } from "react-redux";
import { filterDogsByOrigin } from "../../redux/actions/actions";

const FilterOrigin = ({ setPages }) => {
  const dispatch = useDispatch();

  const handleFilterByOrigin = (event) => {
    const { value } = event.target;
    dispatch(filterDogsByOrigin(value));
    setPages(1);
  };

  return (
    <div>
      <select className={styles.filterOrigin} onChange={handleFilterByOrigin}>
        <option value="Collection">Collection</option>
        <option value="base">Base</option>
        <option value="new">New</option>
      </select>
    </div>
  );
};

export default FilterOrigin;
