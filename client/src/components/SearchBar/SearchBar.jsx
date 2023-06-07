import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getAllDogs, getDogsByName } from "../../redux/actions/actions";

const SearchBar = ({ setPages }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!search) {
      dispatch(getAllDogs());
      setSearch("");
    } else {
      dispatch(getDogsByName(search));
      setPages(1);
      setSearch("");
    }
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!search) {
        dispatch(getAllDogs());
        setSearch("");
      } else {
        dispatch(getDogsByName(search));
        setPages(1);
        setSearch("");
      }
    }
  };

  return (
    <form className={styles.containerSearchBar} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar una raza"
        onChange={handleSearch}
        onKeyDown={handleKey}
      />
      <button className={styles.buttonSearch} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
