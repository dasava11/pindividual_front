import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FilterTempers.module.css";
import { useDispatch } from "react-redux";
import { filterDogsByTempers } from "../../redux/actions/actions";
const { REACT_APP_GET_ALL_TEMPER } = process.env;

const FilterTempers = ({ setPages }) => {
  const [tempers, setTempers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(REACT_APP_GET_ALL_TEMPER).then((response) => {
      const resTempers = response.data;
      setTempers(resTempers);
    });
  }, []);

  const handleFilterTempers = (event) => {
    const { value } = event.target;
    dispatch(filterDogsByTempers(value));
    setPages(1);
  };

  return (
    <div className={styles.containerFilterTempers}>
      <select
        name={"tempers"}
        className={styles.filterTempers}
        onChange={handleFilterTempers}
      >
        <option value="all">Select tempers</option>
        {tempers &&
          tempers.map((temper) => (
            <option key={temper.id} value={temper.name}>
              {temper.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterTempers;
