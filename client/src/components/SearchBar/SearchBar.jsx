import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getAllDogs, getDogsByName } from "../../redux/actions/actions";

const regexNumber = /^[0-9]+$/;

const validation = (search) => {
  const errors = {};
  if (!regexNumber.test(search)) {
    errors.search = "El campo no admite números";
  }
  return errors;
};

const SearchBar = ({ setPages }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
    setError(validation(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(error).length) {
      alert("El campo no admite números");
    } else {
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
        placeholder="Search a breed"
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
