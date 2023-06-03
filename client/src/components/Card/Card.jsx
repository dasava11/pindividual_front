import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, weight, temperament, temperaments }) => {
  return (
    <div className={styles.cardDogs}>
      {image && <img src={image} className={styles.imageDog} alt={name} />}
      {name && <h2>{name}</h2>}
      {weight && <h4 className={styles.infodog}>Weight: {weight}</h4>}
      <h4 className={styles.infodog}>Temperaments:</h4>
      {temperament && <h4 className={styles.infodogTemper}>{temperament}</h4>}
      {/* {temperaments && temperaments.map((temper)=>(<h4>{temper.name}</h4>))} */}
      <button>
        {id && (
          <Link to={`/home/detail/${id}`} className={styles.buttonCard}>
            Detail
          </Link>
        )}
      </button>
    </div>
  );
};

export default Card;
