import React from "react";
import Card from "../Card/Card.jsx";
import { Pages } from "../Pages/Pages";
import styles from "./GridDogs.module.css";

const GridDogs = ({ allDogs, pages, setPages }) => {
  const dogsByPage = 8;
  const indexMax = pages * dogsByPage;
  const indexMin = indexMax - dogsByPage;
  const currentDogs = allDogs.slice(indexMin, indexMax);

  return (
    <div className={styles.Grid}>
      <div className={styles.dogsPage}>
        {allDogs &&
          currentDogs.map((dog) => {
            return (
              <Card
                key={dog.id}
                id={dog.id}
                image={dog.image?.url ? dog.image?.url : dog.image}
                name={dog.name}
                weight={dog.weight?.metric}
                temperament={dog.temperament}
                temperaments={dog.temperaments}
                pages={pages}
                setPages={setPages}
              />
            );
          })}
      </div>
      <Pages allDogs={allDogs} pages={pages} setPages={setPages} />
    </div>
  );
};

export default GridDogs;
