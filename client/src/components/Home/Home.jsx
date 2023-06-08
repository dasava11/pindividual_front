import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/actions/actions";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import FilterTempers from "../FilterTempers/FilterTempers";
import GridDogs from "../GridDogs/GridDogs";
import TidyDogs from "../TidyDogs/TidyDogs";
import FilterOrigin from "../FilterOrigin/FilterOrigin";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const [pages, setPages] = useState(1);

  return (
    <div>
      <NavBar setPages={setPages} />
      <div className={styles.containerHome}>
        <h1>Home</h1>
        <div className={styles.statesInputs}>
          <div className={styles.filters}>
          <h3>Filter by</h3>
          <FilterTempers setPages={setPages} />
          <h3>or</h3>
          <FilterOrigin setPages={setPages} />
          </div>
          <div className={styles.filters}>
          <h3>Order by:</h3>
          <TidyDogs setPages={setPages} />
          </div>
        </div>
        <GridDogs allDogs={allDogs} pages={pages} setPages={setPages} />
      </div>
    </div>
  );
};

export default Home;
