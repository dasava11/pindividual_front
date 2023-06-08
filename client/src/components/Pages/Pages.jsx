import React from "react";
import styles from "./Pages.module.css";

export const Pages = ({ allDogs, pages, setPages }) => {
  const maximunIndex = Math.ceil(allDogs.length / 8);

  let button = [];

  for (let index = 1; index <= maximunIndex; index++) {
    button.push(index);
  }

  const hanldleClickNumber = (e) => {
    const { value } = e.target;
    setPages(Number(value));
  };

  const handleClickNext = (e) => {
    if (e && pages < maximunIndex) {
      setPages(Number(pages + 1));
    }
  };

  const handleClickPrev = (e) => {
    if (e && pages > 1) {
      setPages(Number(pages - 1));
    }
  };
  return (
    <div className={styles.containerButtons}>
      <button className={styles.arrowsPages} onClick={handleClickPrev}>
        {"<"}
      </button>
      {button &&
        button.map((b) => (
          <button
            value={b}
            className={ b === pages ? styles.numberActive : styles.numbersPages}
            onClick={hanldleClickNumber}
          >
            {b}
          </button>
        ))}
      <button className={styles.arrowsPages} onClick={handleClickNext}>
        {">"}
      </button>
    </div>
  );
};
