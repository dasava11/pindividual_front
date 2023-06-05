import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/actions/actions";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import FilterTempers from "../FilterTempers/FilterTempers";
import GridDogs from "../GridDogs/GridDogs";
import OrderAzzb from "../OrderAzzb/OrderAzzb";
import FilterOrigin from "../FilterOrigin/FilterOrigin";
import OrderByWeight from "../OrderByWeight/OrderByWeight";

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
        <div className={styles.filters}>
          <h3>Filters</h3>
          <FilterTempers setPages={setPages} />
          <FilterOrigin setPages={setPages} />
          <h3>Order By:</h3>
          <OrderAzzb setPages={setPages} />
          <OrderByWeight setPages={setPages} />
        </div>
        <GridDogs allDogs={allDogs} pages={pages} setPages={setPages} />
      </div>
    </div>
  );
};

export default Home;
